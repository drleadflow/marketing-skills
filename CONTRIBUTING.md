# Contributing

Read `AGENTS.md` first. It is the full contract for how a skill is structured and written. This file is just the mechanics of submitting a change.

## Before you open a PR

1. Follow `AGENTS.md` exactly: frontmatter shape, the six required body sections in order, plain words, zero em dashes or en dashes.
2. Run the validator on your skill:
   ```
   node scripts/validate-skills.mjs --skill your-skill-name
   ```
3. Run the full test suite:
   ```
   npm test
   ```
4. If you added or changed a skill, bump `metadata.version` in its SKILL.md, then regenerate the generated files:
   ```
   npm run build
   ```
   Commit the resulting changes to `README.md` and `VERSIONS.md` along with your skill.

## What never goes in this repo

- Real client names, client numbers, patient stories, testimonials or screenshots.
- Account IDs, API keys, voice IDs, internal table names or workflow IDs.
- Text copied from other people's paid programs or unlicensed repos. Ideas and structure from MIT-licensed work are fine; copied text needs a license notice in `NOTICE.md`.

## Adding a new skill

- Folder: `skills/<skill-name>/SKILL.md`, name matches the folder exactly.
- Put detail that doesn't belong in the main flow under `references/`, and link every reference file from `SKILL.md` or a sibling reference. No orphans.
- Pick a `metadata.chokepoint` from the allowed set and a `metadata.pack` of `core` or `clinic`.
- Add the skill to `docs/ROSTER.md` if it introduces a new name other skills will link to.

## Review

A PR is ready to merge once CI is green: tests pass, the validator passes, and `npm run build` produces no diff.
