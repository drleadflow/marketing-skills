#!/usr/bin/env node
// Regenerates the skills table in README.md, VERSIONS.md, and the version/count
// fields in the plugin manifests, all from skills/*/SKILL.md frontmatter.
// Zero dependencies. Node 20+.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = process.env.MS_ROOT ? process.env.MS_ROOT : join(__dirname, '..');
const SKILLS_DIR = join(ROOT, 'skills');
const README_PATH = join(ROOT, 'README.md');
const VERSIONS_PATH = join(ROOT, 'VERSIONS.md');
const START_MARKER = '<!-- SKILLS:START -->';
const END_MARKER = '<!-- SKILLS:END -->';

// Funnel order: Foundation first, then the 8 chokepoints in funnel order,
// then Operate, then the clinic pack last.
const CHOKEPOINT_ORDER = [
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
];

const CHOKEPOINT_LABELS = {
  foundation: 'Foundation',
  offer: 'Offer',
  attention: 'Attention',
  leads: 'Leads',
  appointments: 'Appointments',
  closed: 'Closed',
  fulfillment: 'Fulfillment',
  retention: 'Retention',
  referrals: 'Referrals',
  operate: 'Operate',
};

function stripQuotes(s) {
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
}

function parseFrontmatter(raw) {
  const lines = raw.split('\n');
  if (lines[0] !== '---') return null;
  let closeIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      closeIdx = i;
      break;
    }
  }
  if (closeIdx === -1) return null;
  const fmLines = lines.slice(1, closeIdx);

  const result = { name: null, description: null, metadata: {} };
  let inMetadata = false;
  let descBuf = null;

  for (const line of fmLines) {
    if (descBuf !== null) {
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

function firstSentence(description) {
  if (!description) return '';
  // Strip a leading "When ... " clause only if a clear sentence boundary follows;
  // otherwise just take the text up to the first period.
  const match = description.match(/^(.*?\.)(\s|$)/);
  const sentence = match ? match[1] : description;
  return sentence.trim();
}

function loadSkills() {
  if (!existsSync(SKILLS_DIR)) return [];
  const dirs = readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const skills = [];
  for (const name of dirs) {
    const skillMdPath = join(SKILLS_DIR, name, 'SKILL.md');
    if (!existsSync(skillMdPath)) continue;
    const raw = readFileSync(skillMdPath, 'utf8');
    const fm = parseFrontmatter(raw);
    if (!fm || !fm.name) continue;
    skills.push({
      name: fm.name,
      description: fm.description || '',
      version: fm.metadata.version || '0.0.0',
      chokepoint: fm.metadata.chokepoint || 'foundation',
      pack: fm.metadata.pack || 'core',
    });
  }
  return skills;
}

function buildSkillsTable(skills) {
  const lines = [];
  const grouped = new Map();
  for (const cp of CHOKEPOINT_ORDER) grouped.set(cp, []);
  const clinicSkills = [];

  for (const skill of skills) {
    if (skill.pack === 'clinic') {
      clinicSkills.push(skill);
    } else {
      const bucket = grouped.get(skill.chokepoint) || [];
      bucket.push(skill);
      grouped.set(skill.chokepoint, bucket);
    }
  }

  for (const cp of CHOKEPOINT_ORDER) {
    const bucket = grouped.get(cp).sort((a, b) => a.name.localeCompare(b.name));
    if (bucket.length === 0) continue;
    lines.push(`### ${CHOKEPOINT_LABELS[cp]}`);
    lines.push('');
    lines.push('| Skill | Purpose |');
    lines.push('|---|---|');
    for (const skill of bucket) {
      lines.push(`| \`${skill.name}\` | ${firstSentence(skill.description)} |`);
    }
    lines.push('');
  }

  if (clinicSkills.length > 0) {
    clinicSkills.sort((a, b) => a.name.localeCompare(b.name));
    lines.push('### Clinic pack');
    lines.push('');
    lines.push('| Skill | Purpose |');
    lines.push('|---|---|');
    for (const skill of clinicSkills) {
      lines.push(`| \`${skill.name}\` | ${firstSentence(skill.description)} |`);
    }
    lines.push('');
  }

  return lines.join('\n').trim();
}

function updateReadme(skills) {
  if (!existsSync(README_PATH)) {
    console.error('README.md not found, skipping skills table update');
    return;
  }
  const readme = readFileSync(README_PATH, 'utf8');
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    console.error('README.md is missing SKILLS:START/SKILLS:END markers, skipping');
    return;
  }
  const table = buildSkillsTable(skills);
  const before = readme.slice(0, startIdx + START_MARKER.length);
  const after = readme.slice(endIdx);
  const updated = `${before}\n\n${table}\n\n${after}`;
  writeFileSync(README_PATH, updated);
}

function buildVersionsTable(skills) {
  const lines = [];
  lines.push('# Versions');
  lines.push('');
  lines.push('Every skill in this repo and its current version. Bump `metadata.version` in a');
  lines.push('skill\'s SKILL.md on any shipped change, then run `npm run build` to regenerate');
  lines.push('this file.');
  lines.push('');
  lines.push('| Skill | Chokepoint | Pack | Version |');
  lines.push('|---|---|---|---|');
  const sorted = [...skills].sort((a, b) => a.name.localeCompare(b.name));
  for (const skill of sorted) {
    lines.push(`| \`${skill.name}\` | ${skill.chokepoint} | ${skill.pack} | ${skill.version} |`);
  }
  lines.push('');
  return lines.join('\n');
}

function updateVersions(skills) {
  writeFileSync(VERSIONS_PATH, buildVersionsTable(skills));
}

// The repo version lives in .claude-plugin/plugin.json, the source of truth.
// This keeps marketplace.json and the Codex manifest from drifting, and
// updates any "<N> skills" / "<N> marketing skills" count already present
// in a manifest's description text to match the real count.
function readJson(path) {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, 'utf8'));
}

function syncCountInDescription(description, count) {
  if (!description) return description;
  return description.replace(
    /\b\d+\s+(marketing\s+)?skills\b/,
    (match, prefix) => `${count} ${prefix || ''}skills`
  );
}

function syncManifests(skillCount) {
  const pluginPath = join(ROOT, '.claude-plugin', 'plugin.json');
  const marketplacePath = join(ROOT, '.claude-plugin', 'marketplace.json');
  const codexPath = join(ROOT, '.codex-plugin', 'plugin.json');

  const plugin = readJson(pluginPath);
  if (!plugin) return;
  const version = plugin.version;
  plugin.description = syncCountInDescription(plugin.description, skillCount);
  writeFileSync(pluginPath, JSON.stringify(plugin, null, 2) + '\n');

  const codex = readJson(codexPath);
  if (codex) {
    codex.version = version;
    codex.description = syncCountInDescription(codex.description, skillCount);
    writeFileSync(codexPath, JSON.stringify(codex, null, 2) + '\n');
  }

  const marketplace = readJson(marketplacePath);
  if (marketplace) {
    if (marketplace.metadata) marketplace.metadata.version = version;
    if (Array.isArray(marketplace.plugins)) {
      for (const p of marketplace.plugins) {
        p.description = syncCountInDescription(p.description, skillCount);
      }
    }
    writeFileSync(marketplacePath, JSON.stringify(marketplace, null, 2) + '\n');
  }
}

function main() {
  const skills = loadSkills();
  updateReadme(skills);
  updateVersions(skills);
  syncManifests(skills.length);
  console.log(`Indexed ${skills.length} skill(s).`);
}

main();
