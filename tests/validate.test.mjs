import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VALIDATOR = join(__dirname, '..', 'scripts', 'validate-skills.mjs');
const FIXTURES = join(__dirname, 'fixtures');

function run(root, extraEnv = {}, extraArgs = []) {
  try {
    const stdout = execFileSync(process.execPath, [VALIDATOR, ...extraArgs], {
      env: { ...process.env, MS_ROOT: root, ...extraEnv },
      encoding: 'utf8',
    });
    return { code: 0, stdout };
  } catch (err) {
    return { code: err.status, stdout: err.stdout ? err.stdout.toString() : '' };
  }
}

test('valid skill passes with no errors', () => {
  const { code, stdout } = run(join(FIXTURES, 'valid-root'));
  assert.equal(code, 0, stdout);
  assert.match(stdout, /0 error/);
});

test('bad name (underscore, mismatched folder) fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-bad-name'));
  assert.equal(code, 1);
  assert.match(stdout, /does not match folder name|must match/);
});

test('top-level version fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-top-version'));
  assert.equal(code, 1);
  assert.match(stdout, /top-level version found/);
});

test('bad chokepoint fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-bad-chokepoint'));
  assert.equal(code, 1);
  assert.match(stdout, /chokepoint "not-a-real-chokepoint" is not in the allowed set/);
});

test('bad pack fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-bad-pack'));
  assert.equal(code, 1);
  assert.match(stdout, /pack "premium" must be core or clinic/);
});

test('missing required sections fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-missing-section'));
  assert.equal(code, 1);
  assert.match(stdout, /missing required section "## Rules"/);
  assert.match(stdout, /missing required section "## Related skills"/);
});

test('file over 500 lines fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-too-long'));
  assert.equal(code, 1);
  assert.match(stdout, /must be under 500/);
});

test('em dash / en dash fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-has-dash'));
  assert.equal(code, 1);
  assert.match(stdout, /em dash or en dash/);
});

test('slash-joined plain words do not false-positive as a secret', () => {
  const { code, stdout } = run(join(FIXTURES, 'valid-base64-words'));
  assert.equal(code, 0, stdout);
  assert.doesNotMatch(stdout, /possible secret detected/);
});

test('likely secret fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-has-secret'));
  assert.equal(code, 1);
  assert.match(stdout, /possible secret detected \(sk_live\)/);
});

test('orphan reference file fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-orphan-ref'));
  assert.equal(code, 1);
  assert.match(stdout, /references\/orphan\.md is an orphan/);
});

test('related skill that does not exist anywhere fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-bad-related'));
  assert.equal(code, 1);
  assert.match(stdout, /references "nonexistent-skill-xyz" which is not in skills\/ or docs\/ROSTER\.md/);
});

test('unclosed frontmatter fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-no-frontmatter-close'));
  assert.equal(code, 1);
  assert.match(stdout, /frontmatter must close with ---/);
});

test('internal leak patterns in SKILL.md all fail', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-leak-in-skill'));
  assert.equal(code, 1);
  for (const pattern of [
    '~/',
    '/users/',
    '/private/tmp',
    'obsidian',
    'lesson pack',
    'lessons pack',
    'pack-',
    'vault',
    '[bb-',
    '[tool-',
  ]) {
    assert.match(stdout, new RegExp(`internal leak detected \\(matched "${pattern.replace(/[[\]/]/g, '\\$&')}"\\)`));
  }
});

test('em dash inside a references/ file fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-reference-dash'));
  assert.equal(code, 1);
  assert.match(stdout, /references\/example\.md:3: em dash or en dash/);
});

test('secret inside a references/ file fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-reference-secret'));
  assert.equal(code, 1);
  assert.match(stdout, /references\/example\.md:3: possible secret detected \(sk_live\)/);
});

test('internal leak inside a references/ file fails', () => {
  const { code, stdout } = run(join(FIXTURES, 'invalid-reference-leak'));
  assert.equal(code, 1);
  assert.match(stdout, /references\/example\.md:3: internal leak detected \(matched "vault"\)/);
});

test('near-miss optional section names warn, legitimate headings and fenced code do not', () => {
  const { code, stdout } = run(join(FIXTURES, 'warn-extra-section'));
  assert.equal(code, 0, stdout);
  assert.match(stdout, /WARN:.*optional section "## Example" looks like a near miss of "## Examples"/);
  assert.match(stdout, /WARN:.*optional section "## Audience questions" looks like a near miss of "## Ask your audience"/);
  assert.match(stdout, /WARN:.*optional section "## Run on a schedule" looks like a near miss of "## Run it on a schedule"/);
  // "## The situation" is a legitimate deliverable heading, never flagged.
  assert.doesNotMatch(stdout, /"## The situation"/);
  // Only 3 warnings total: the code-fenced "## Example" inside the fence
  // must not produce a 4th.
  const warnCount = (stdout.match(/looks like a near miss/g) || []).length;
  assert.equal(warnCount, 3, stdout);
});

test('the three allowed optional section names produce no warning', () => {
  const { code, stdout } = run(join(FIXTURES, 'valid-optional-sections'));
  assert.equal(code, 0, stdout);
  assert.doesNotMatch(stdout, /optional section/);
});

test('denylist match fails without printing the term', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'ms-denylist-'));
  const denylistPath = join(tmp, 'denylist.txt');
  writeFileSync(denylistPath, 'forbiddenterm\n');
  try {
    const { code, stdout } = run(join(FIXTURES, 'invalid-denylist'), {
      MS_DENYLIST: denylistPath,
    });
    assert.equal(code, 1);
    assert.match(stdout, /denylisted term found/);
    assert.doesNotMatch(stdout, /forbiddenterm/);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
});

test('--skill flag validates only the named skill', () => {
  const { code, stdout } = run(join(FIXTURES, 'valid-root'), {}, ['--skill', 'business-context']);
  assert.equal(code, 0, stdout);
  assert.match(stdout, /1 skill\(s\) checked/);
});

test('--skill flag rejects an unknown skill name', () => {
  const { code, stdout } = run(join(FIXTURES, 'valid-root'), {}, ['--skill', 'no-such-skill']);
  assert.equal(code, 1);
});
