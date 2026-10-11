# Marketing Skills: authoring spec

This file is the contract for every skill in this repo. Agents and people adding or editing a skill follow it exactly. `node scripts/validate-skills.mjs` enforces the checkable parts.

## What this repo is

Marketing skills for Claude Code, Codex and any agent that reads `SKILL.md` files. They're written for owners of service businesses, coaches, consultants, agencies, local businesses and health practices who run their marketing with AI.

Skills are organized around the **8 chokepoints**, the eight places growth gets stuck, in funnel order:

**Offer → Attention → Leads → Appointments → Closed → Fulfillment → Retention → Referrals**

Two more groups sit around them: **Foundation** (the shared context every skill reads) and **Operate** (running the system weekly). The **clinic pack** adds health-practice skills on top of the core.

## Folder layout

```
skills/<skill-name>/
  SKILL.md            required, under 500 lines
  references/*.md     optional detail: playbooks, checklists, templates, examples
```

Every file in `references/` must be linked from `SKILL.md` or from a sibling reference. No orphans.

## Frontmatter

```yaml
---
name: offer-builder            # equals the folder name; lowercase a-z, 0-9, single hyphens; 1-64 chars
description: "When the user wants to ... Also use when they mention '...', '...'. For X, see other-skill."
metadata:
  version: 1.0.0               # version lives here only, never at the top level
  chokepoint: offer            # foundation | offer | attention | leads | appointments | closed | fulfillment | retention | referrals | operate
  pack: core                   # core | clinic
---
```

- `description` is 1 to 1024 characters. It's a trigger list: what the user wants, phrases they'd say, and one or more "For X, see Y" pointers so agents pick the right neighbor skill.

## Body: required sections, in this order

1. `# Title` and one short paragraph: what you'll have at the end.
2. `## Before you start`: read the shared context first (see below). Ask only for what's missing, at most 3 questions at a time.
3. `## How to do it`: the method, as numbered steps. Concrete: real thresholds, real formats, real examples.
4. `## Check it`: a scoring rubric or checklist the agent runs on its own output before showing it. One fix per failed line.
5. `## Rules`: hard rules for this job (what never to do).
6. `## Related skills`: `- **skill-name**: when to hand off`.

Optional: `## Ask your audience` (3 to 5 questions that get the customer's own words), `## Run it on a schedule` (for loop-able jobs), `## Examples`.

## Shared context (read first, every skill)

Two files in the user's project, maintained by two foundation skills:

- `.agents/business-context.md`, maintained by **business-context**: what they sell, to whom, prices, best client, positioning, voice, channels, numbers, goals. Has a dated changelog; entries are appended, never rewritten.
- `.agents/proof-ledger.md`, maintained by **proof-ledger**: every result, number, testimonial and claim they're allowed to use, each with its source and permission status. Anything not in the ledger is not used as proof.

Every skill's "Before you start" says: read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist; if business-context is missing, offer to run **business-context** first (or ask the 3 questions this skill can't work without).

## Proof and compliance (non-negotiable, every skill)

- Never invent a number, result, testimonial, review, credential or client name. If a claim isn't in the proof ledger, leave a visible `[NEEDS PROOF: ...]` placeholder.
- Examples in this repo use clearly fictional businesses and say so.
- Health, money, legal and before/after claims follow **health-claims-check** when the business is health-related, and platform policy when it runs as an ad.
- No private health information in forms, DMs, ad pixels, URLs or AI tools.

## Agent-native rules (skills that send, publish or spend)

- Draft, then a human approves, then send. One message or one batch at a time, never a silent bulk send.
- Spending skills state a daily cap and a stop rule before anything goes live.
- Anything that runs on a schedule names its cadence, its stop condition and what state it records so a rerun doesn't double-send.

## Writing rules

- Plain words. Short sentences. Active voice. Talk to the business owner, not about them.
- Zero em dashes and en dashes. Use a period, comma, colon or parentheses.
- No hype words: revolutionary, game-changer, unlock, supercharge, skyrocket, delve, leverage (as a verb), "in today's fast-paced world".
- Use the customer's words over the marketer's words.

## What never goes in this repo

- Real client names, client numbers, patient stories, testimonials or screenshots.
- Account IDs, API keys, voice IDs, internal table names or workflow IDs.
- Text copied from other people's paid programs or unlicensed repos. Ideas and structure from MIT-licensed work are fine; copied text needs the license notice.

The validator can read a private denylist (one term per line) from the `MS_DENYLIST` environment variable path and fail on any match. Keep that file outside the repo.

## Versioning

- Per skill: `metadata.version`, bumped on any change that ships (patch for edits, minor for new sections, major for a changed method).
- Repo: `VERSIONS.md` lists every skill and its version. A new skill bumps the repo minor; edits bump the patch.
