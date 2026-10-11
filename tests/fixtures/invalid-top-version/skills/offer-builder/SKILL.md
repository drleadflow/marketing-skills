---
name: offer-builder
version: 1.0.0
description: "When the user wants to build an offer. See proof-ledger."
metadata:
  chokepoint: offer
  pack: core
---

# Offer builder

A top-level version field is not allowed, it belongs under metadata only.

## Before you start

Read .agents/business-context.md if it exists.

## How to do it

1. Trigger the top-level version failure.

## Check it

- Fix: move version under metadata.

## Rules

- Never put version at the top level.

## Related skills

- **proof-ledger**: for claims and testimonials.
