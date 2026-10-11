---
name: offer-builder
description: "When the user wants to build an offer. See proof-ledger."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# Offer builder

This fixture has a fake secret below to trigger the secret scanner.

sk_live_FAKE

## Before you start

Read .agents/business-context.md if it exists.

## How to do it

1. Trigger the secret failure.

## Check it

- Fix: remove the secret and rotate it if it was ever real.

## Rules

- Never hardcode a secret.

## Related skills

- **proof-ledger**: for claims and testimonials.
