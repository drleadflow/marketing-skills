#!/usr/bin/env node
// Validates every skills/*/SKILL.md against the contract in AGENTS.md.
// Zero dependencies. Node 20+.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
// MS_ROOT lets tests point the validator at a fixture tree instead of the real repo.
const ROOT = process.env.MS_ROOT ? process.env.MS_ROOT : join(__dirname, '..');
const SKILLS_DIR = join(ROOT, 'skills');
const ROSTER_PATH = join(ROOT, 'docs', 'ROSTER.md');

const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const CHOKEPOINTS = new Set([
  'foundation',
  'offer',
  'attention',
  'leads',
  'appointments',
  'closed',
  'fulfillment',
  'retention',
  'referrals',
  'operate',
]);
const PACKS = new Set(['core', 'clinic']);
const REQUIRED_SECTIONS = [
  '## Before you start',
  '## How to do it',
  '## Check it',
  '## Rules',
  '## Related skills',
];
const OPTIONAL_SECTIONS = new Set(['## Examples', '## Ask your audience', '## Run it on a schedule']);
// Near-miss patterns for the 3 optional section names: a heading that is
// clearly trying to be one of these but got the exact wording wrong (wrong
// case, a trailing colon, singular/plural, or a close rewording). A skill's
// own deliverable headings (templates, output sections) are legitimate and
// must never match these, so each pattern anchors on the section's actual
// subject, not on a word that could appear in an unrelated heading.
const NEAR_MISS_RULES = [
  { canonical: '## Examples', re: /^##\s*examples?\s*:?\s*$/i },
  { canonical: '## Ask your audience', re: /^##\s*(ask\b[^\n]*\baudience\b|audience\b[^\n]*(questions?|\bask\b))\s*:?\s*$/i },
  { canonical: '## Run it on a schedule', re: /^##\s*run\b[^\n]*\bschedule\b\s*:?\s*$/i },
];
const MAX_LINES = 500;
const DASH_RE = /[–—]/; // en dash, em dash
const SECRET_PATTERNS = [
  { label: 'sk_live', re: /sk_live[a-zA-Z0-9]*/ },
  { label: 'sk_test', re: /sk_test[a-zA-Z0-9]*/ },
  { label: 'AKIA', re: /AKIA[0-9A-Z]{16}/ },
  { label: 'ghp_', re: /ghp_[a-zA-Z0-9]{20,}/ },
  { label: 'xox', re: /xox[baprs]-[a-zA-Z0-9-]{10,}/ },
];

// Hard fails anywhere in skills/: internal paths, vault/source names, and
// internal ID prefixes that must never ship in a public skill. Matched
// case-insensitively as plain substrings.
const LEAK_PATTERNS = [
  '~/',
  '/users/',
  '/private/tmp',
  'obsidian',
  'blade vault',
  'lesson pack',
  'lessons pack',
  'pack-',
  'vault',
  '[bb-',
  '[tool-',
];

// Long base64-ish tokens get their own check, not a plain regex: words joined
// by slashes or hyphens (e.g. "definition/analogy/rule/number/template/test")
// are 40+ chars of [A-Za-z0-9+/] too, and are not secrets. A real token almost
// always mixes case and digits in the same contiguous run with no separators
// acting as word breaks; plain word lists chained with / or - do not.
const BASE64ISH_RE = /\b[A-Za-z0-9+/]{32,}={0,2}\b/g;
function looksLikeSecretToken(candidate) {
  const hasDigit = /[0-9]/.test(candidate);
  const hasUpper = /[A-Z]/.test(candidate);
  const hasLower = /[a-z]/.test(candidate);
  return hasDigit && hasUpper && hasLower;
}

function parseArgs(argv) {
  const out = { skill: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--skill') {
      out.skill = argv[i + 1];
      i++;
    }
  }
  return out;
}

function listSkillDirs() {
  if (!existsSync(SKILLS_DIR)) return [];
  return readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

function loadRosterNames() {
  const names = new Set();
  if (!existsSync(ROSTER_PATH)) return names;
  const text = readFileSync(ROSTER_PATH, 'utf8');
  // Roster rows look like: | skill-name | chokepoint | pack | writer | sources |
  for (const line of text.split('\n')) {
    const m = line.match(/^\|\s*([a-z0-9]+(?:-[a-z0-9]+)*)\s*\|/);
    if (m) names.add(m[1]);
  }
  return names;
}

// Blanks out the content of fenced code blocks (``` ... ```) so headings
// quoted or shown inside an example code fence are never scanned as real
// document structure. Keeps line count stable (blanks lines rather than
// removing them) in case a future check wants line numbers.
function blankFencedCodeBlocks(text) {
  const lines = text.split('\n');
  let inFence = false;
  const out = [];
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      out.push('');
      continue;
    }
    out.push(inFence ? '' : line);
  }
  return out.join('\n');
}

function splitFrontmatter(raw, errors) {
  const lines = raw.split('\n');
  if (lines[0] !== '---') {
    errors.push('frontmatter must open with ---');
    return { frontmatter: '', body: raw, bodyStartLine: 0 };
  }
  let closeIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      closeIdx = i;
      break;
    }
  }
  if (closeIdx === -1) {
    errors.push('frontmatter must close with ---');
    return { frontmatter: lines.slice(1).join('\n'), body: '', bodyStartLine: lines.length };
  }
  const frontmatter = lines.slice(1, closeIdx).join('\n');
  const body = lines.slice(closeIdx + 1).join('\n');
  return { frontmatter, body, bodyStartLine: closeIdx + 1 };
}

// Minimal YAML-ish parser for the exact frontmatter shape this repo uses.
function parseFrontmatter(frontmatter) {
  const result = { name: null, description: null, metadata: {} };
  const lines = frontmatter.split('\n');
  let inMetadata = false;
  let descBuf = null;
  let descIndent = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (descBuf !== null) {
      // Continue a multi-line (block scalar or folded) description.
      const indent = line.match(/^(\s*)/)[1].length;
      if (line.trim() === '' || indent > 0) {
        descBuf += '\n' + line;
        continue;
      }
      result.description = descBuf.trim();
      descBuf = null;
    }

    const topMatch = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (topMatch && !line.startsWith(' ')) {
      inMetadata = topMatch[1] === 'metadata';
      if (topMatch[1] === 'name') {
        result.name = stripQuotes(topMatch[2].trim());
      } else if (topMatch[1] === 'description') {
        const val = topMatch[2].trim();
        if (val === '|' || val === '>' || val === '') {
          descBuf = '';
        } else {
          result.description = stripQuotes(val);
        }
      } else if (topMatch[1] === 'version') {
        result.topLevelVersion = stripQuotes(topMatch[2].trim());
      }
      continue;
    }

    if (inMetadata) {
      const subMatch = line.match(/^\s+([a-zA-Z_]+):\s*(.*)$/);
      if (subMatch) {
        result.metadata[subMatch[1]] = stripQuotes(subMatch[2].trim());
      }
    }
  }
  if (descBuf !== null) {
    result.description = descBuf.trim();
  }
  return result;
}

function stripQuotes(s) {
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
}

function isSemver(v) {
  return typeof v === 'string' && /^\d+\.\d+\.\d+$/.test(v);
}

function findLineNumber(text, needleIndex) {
  return text.slice(0, needleIndex).split('\n').length;
}

function checkDenylist(file, text, errors, denylistTerms) {
  if (!denylistTerms || denylistTerms.length === 0) return;
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const lower = lines[i].toLowerCase();
    for (const term of denylistTerms) {
      if (term && lower.includes(term.toLowerCase())) {
        errors.push(`${file}:${i + 1}: denylisted term found (see MS_DENYLIST file for the term)`);
      }
    }
  }
}

function checkSecrets(file, text, errors) {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const pat of SECRET_PATTERNS) {
      if (pat.re.test(line)) {
        errors.push(`${file}:${i + 1}: possible secret detected (${pat.label})`);
      }
    }
    const matches = line.match(BASE64ISH_RE);
    if (matches) {
      for (const candidate of matches) {
        if (looksLikeSecretToken(candidate)) {
          errors.push(`${file}:${i + 1}: possible secret detected (long base64-ish token)`);
          break;
        }
      }
    }
  }
}

function checkDashes(file, text, errors) {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (DASH_RE.test(lines[i])) {
      errors.push(`${file}:${i + 1}: em dash or en dash character found`);
    }
  }
}

function checkLeaks(file, text, errors) {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const lower = lines[i].toLowerCase();
    for (const pattern of LEAK_PATTERNS) {
      if (lower.includes(pattern)) {
        errors.push(`${file}:${i + 1}: internal leak detected (matched "${pattern}")`);
      }
    }
  }
}

function validateSkill(skillName, rosterNames, denylistTerms, allSkillNames) {
  const errors = [];
  const warnings = [];
  const dir = join(SKILLS_DIR, skillName);
  const skillMdPath = join(dir, 'SKILL.md');

  if (!existsSync(skillMdPath)) {
    errors.push(`${skillName}: missing SKILL.md`);
    return { skillName, errors, warnings };
  }

  const raw = readFileSync(skillMdPath, 'utf8');
  const relPath = relative(ROOT, skillMdPath);
  const lineCount = raw.split('\n').length;

  if (lineCount > MAX_LINES) {
    errors.push(`${relPath}: ${lineCount} lines, must be under ${MAX_LINES}`);
  }

  const fmErrors = [];
  const { frontmatter, body } = splitFrontmatter(raw, fmErrors);
  for (const e of fmErrors) errors.push(`${relPath}: ${e}`);

  const fm = parseFrontmatter(frontmatter);

  // name
  if (!fm.name) {
    errors.push(`${relPath}: frontmatter missing name`);
  } else {
    if (fm.name !== skillName) {
      errors.push(`${relPath}: name "${fm.name}" does not match folder name "${skillName}"`);
    }
    if (!NAME_RE.test(fm.name) || fm.name.length < 1 || fm.name.length > 64) {
      errors.push(`${relPath}: name "${fm.name}" must match ^[a-z0-9]+(-[a-z0-9]+)*$ and be 1-64 chars`);
    }
  }

  // description
  if (!fm.description) {
    errors.push(`${relPath}: frontmatter missing description`);
  } else {
    if (fm.description.length < 1 || fm.description.length > 1024) {
      errors.push(`${relPath}: description must be 1-1024 chars (got ${fm.description.length})`);
    }
    const lower = fm.description.toLowerCase();
    const hasTrigger = /\b(when|use|mention)\b/.test(lower);
    const hasSeePointer = /\bsee\b/.test(lower);
    if (!hasTrigger) {
      warnings.push(`${relPath}: description lacks trigger language (when/use/mention)`);
    }
    if (!hasSeePointer) {
      warnings.push(`${relPath}: description lacks a "see" pointer to a related skill`);
    }
  }

  // version placement
  if (fm.topLevelVersion) {
    errors.push(`${relPath}: top-level version found, version belongs only in metadata.version`);
  }
  if (!fm.metadata.version) {
    errors.push(`${relPath}: metadata.version is missing`);
  } else if (!isSemver(fm.metadata.version)) {
    errors.push(`${relPath}: metadata.version "${fm.metadata.version}" is not valid semver`);
  }

  // chokepoint
  if (!fm.metadata.chokepoint) {
    errors.push(`${relPath}: metadata.chokepoint is missing`);
  } else if (!CHOKEPOINTS.has(fm.metadata.chokepoint)) {
    errors.push(`${relPath}: metadata.chokepoint "${fm.metadata.chokepoint}" is not in the allowed set`);
  }

  // pack
  if (!fm.metadata.pack) {
    errors.push(`${relPath}: metadata.pack is missing`);
  } else if (!PACKS.has(fm.metadata.pack)) {
    errors.push(`${relPath}: metadata.pack "${fm.metadata.pack}" must be core or clinic`);
  }

  // body sections, in order
  const h1Match = body.match(/^#\s+.+$/m);
  if (!h1Match) {
    errors.push(`${relPath}: missing an H1 title`);
  }
  let searchFrom = h1Match ? h1Match.index + h1Match[0].length : 0;
  let lastIndex = searchFrom;
  for (const section of REQUIRED_SECTIONS) {
    const idx = body.indexOf(section, lastIndex);
    if (idx === -1) {
      errors.push(`${relPath}: missing required section "${section}" in order`);
    } else {
      lastIndex = idx + section.length;
    }
  }

  // Warn only on a heading that looks like a near miss of one of the 3
  // optional section names (wrong case, trailing colon, a close rewording).
  // A skill's own deliverable headings (templates, output sections) are
  // legitimate custom structure and are never flagged. Headings inside a
  // fenced code block (an example SKILL.md shown as a sample) are ignored.
  const bodyForHeadingScan = blankFencedCodeBlocks(body);
  const h2Lines = bodyForHeadingScan.split('\n').filter((l) => l.startsWith('## '));
  for (const h2 of h2Lines) {
    const heading = h2.trim();
    if (REQUIRED_SECTIONS.includes(heading) || OPTIONAL_SECTIONS.has(heading)) continue;
    const nearMiss = NEAR_MISS_RULES.find((rule) => rule.re.test(heading));
    if (nearMiss) {
      warnings.push(
        `${relPath}: optional section "${heading}" looks like a near miss of "${nearMiss.canonical}"; use that exact heading`
      );
    }
  }

  // no em/en dash, no secrets, no denylist terms, no internal leaks:
  // scan SKILL.md itself and every references/*.md file, not just SKILL.md.
  const filesToScan = [{ relPath, text: raw }];
  const referencesDirForScan = join(dir, 'references');
  if (existsSync(referencesDirForScan)) {
    const refFilesForScan = readdirSync(referencesDirForScan, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name);
    for (const refFile of refFilesForScan) {
      const refPath = join(referencesDirForScan, refFile);
      filesToScan.push({
        relPath: relative(ROOT, refPath),
        text: readFileSync(refPath, 'utf8'),
      });
    }
  }
  for (const f of filesToScan) {
    checkDashes(f.relPath, f.text, errors);
    checkSecrets(f.relPath, f.text, errors);
    checkDenylist(f.relPath, f.text, errors, denylistTerms);
    checkLeaks(f.relPath, f.text, errors);
  }

  // Related skills must exist
  const relatedSectionMatch = body.match(/## Related skills\n([\s\S]*?)(\n## |\n?$)/);
  if (relatedSectionMatch) {
    const relatedBlock = relatedSectionMatch[1];
    const relatedLines = relatedBlock.split('\n').filter((l) => l.trim().startsWith('-'));
    for (const line of relatedLines) {
      const nameMatch = line.match(/\*\*([a-z0-9-]+)\*\*/) || line.match(/`([a-z0-9-]+)`/);
      if (nameMatch) {
        const refName = nameMatch[1];
        if (!allSkillNames.has(refName) && !rosterNames.has(refName)) {
          errors.push(`${relPath}: Related skills references "${refName}" which is not in skills/ or docs/ROSTER.md`);
        }
      }
    }
  }

  // orphan references check (per-skill: files under references/ not linked anywhere in SKILL.md)
  const referencesDir = join(dir, 'references');
  if (existsSync(referencesDir)) {
    const refFiles = readdirSync(referencesDir, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name);
    for (const refFile of refFiles) {
      const linked =
        body.includes(`references/${refFile}`) || hasCrossReferenceLink(dir, refFile, referencesDir);
      if (!linked) {
        errors.push(`${relPath}: references/${refFile} is an orphan, not linked from SKILL.md or a sibling reference`);
      }
    }
  }

  return { skillName, errors, warnings };
}

function hasCrossReferenceLink(dir, refFile, referencesDir) {
  // Check if any sibling reference file links to refFile.
  const siblingFiles = readdirSync(referencesDir, { withFileTypes: true })
    .filter((d) => d.isFile())
    .map((d) => d.name);
  for (const sibling of siblingFiles) {
    if (sibling === refFile) continue;
    const text = readFileSync(join(referencesDir, sibling), 'utf8');
    if (text.includes(refFile)) return true;
  }
  return false;
}

function loadDenylist() {
  const denylistPath = process.env.MS_DENYLIST;
  if (!denylistPath) return [];
  if (!existsSync(denylistPath)) return [];
  const text = readFileSync(denylistPath, 'utf8');
  return text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('#'));
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const denylistTerms = loadDenylist();
  const rosterNames = loadRosterNames();
  const allSkillDirs = listSkillDirs();
  const allSkillNames = new Set(allSkillDirs);

  const targets = args.skill ? [args.skill] : allSkillDirs;

  if (args.skill && !allSkillNames.has(args.skill)) {
    console.error(`No such skill: ${args.skill}`);
    process.exit(1);
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  const results = [];

  for (const skillName of targets) {
    const result = validateSkill(skillName, rosterNames, denylistTerms, allSkillNames);
    results.push(result);
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  for (const result of results) {
    if (result.errors.length === 0 && result.warnings.length === 0) continue;
    console.log(`\n${result.skillName}`);
    for (const e of result.errors) console.log(`  ERROR: ${e}`);
    for (const w of result.warnings) console.log(`  WARN:  ${w}`);
  }

  console.log(
    `\n${targets.length} skill(s) checked, ${totalErrors} error(s), ${totalWarnings} warning(s)`
  );

  if (totalErrors > 0) {
    process.exit(1);
  }
}

main();
