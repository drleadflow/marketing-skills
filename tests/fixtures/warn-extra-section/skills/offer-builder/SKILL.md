---
name: offer-builder
description: "When the user wants to build an offer. See proof-ledger."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# Offer builder

This fixture mixes near-miss optional section names, a legitimate deliverable
heading that must never warn, and a fenced code block that must be ignored.

## Before you start

Read .agents/business-context.md if it exists.

## How to do it

1. Build the offer.

Here is a sample of what a bad heading looks like inside a code fence, which
must never be scanned as a real heading:

```
## Example
```

## Check it

- Fix: nothing, this should only warn on the three near misses below.

## Rules

- Never invent a number.

## Related skills

- **proof-ledger**: for claims and testimonials.

## The situation

This is a legitimate deliverable heading (part of a template this skill
produces) and must never warn.

## Example

A near miss of "## Examples" (missing the final s).

## Audience questions

A near miss of "## Ask your audience" (a close rewording).

## Run on a schedule

A near miss of "## Run it on a schedule" (missing "it a").
