---
name: offer-builder
description: "When the user wants to build an offer. See proof-ledger."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# Offer builder

This fixture packs one internal leak pattern onto each line below.

## Before you start

Read .agents/business-context.md if it exists.

## How to do it

1. Home directory shortcut: ~/ should never appear in a shipped skill.
2. Absolute path: /Users/example/notes should never appear either.
3. Scratch path: /private/tmp/some-session should never appear.
4. Internal vault name: Obsidian should never appear.
5. Internal vault name: Example Notes Vault should never appear.
6. Internal source: lesson pack should never appear.
7. Internal source: lessons pack should never appear.
8. Internal source: pack-03 should never appear.
9. Internal source: vault benchmark should never appear.
10. Internal id: [bb-14] should never appear.
11. Internal id: [tool-07] should never appear.

## Check it

- Fix: remove every internal path and source name.

## Rules

- Never leak an internal path, vault name, or source id.

## Related skills

- **proof-ledger**: for claims and testimonials.
