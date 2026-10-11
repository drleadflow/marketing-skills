---
name: bad_name
description: "When the user wants to test a bad name. See proof-ledger."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Bad name

Underscore and uppercase are not allowed in a skill name.

## Before you start

Read .agents/business-context.md if it exists.

## How to do it

1. Trigger the name regex failure.

## Check it

- Fix: rename the folder and the name field to use hyphens.

## Rules

- Never use underscores in a skill name.

## Related skills

- **proof-ledger**: for claims and testimonials.
