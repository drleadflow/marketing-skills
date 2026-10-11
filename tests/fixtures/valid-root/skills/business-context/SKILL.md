---
name: business-context
description: "When the user starts any marketing task, use this skill first to capture what they sell, to whom, and their numbers. Also use when they mention 'business context' or 'my business'. For proof claims, see proof-ledger."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Business context

What you will have at the end: a dated file at .agents/business-context.md that every other skill reads first.

## Before you start

Read .agents/business-context.md and .agents/proof-ledger.md if they exist. If business-context is missing, ask these questions:

1. What do you sell and to whom.
2. What is your best client like.
3. What channels do you use today.

## How to do it

1. Ask the three questions above if the file does not exist yet.
2. Write the answers into .agents/business-context.md under a dated heading.
3. Append new answers on later runs, never rewrite old ones.

## Check it

- The file exists and has a dated changelog.
- Every entry is in the owner's own words, not invented.
- Fix: if a claim has no source, mark it [NEEDS PROOF].

## Rules

- Never invent a number, result, or client name.
- Never overwrite a previous entry.

## Related skills

- **proof-ledger**: for claims, results, and testimonials used elsewhere.
- **chokepoint-audit**: run next to find where growth is stuck.
