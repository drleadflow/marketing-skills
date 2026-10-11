# Template: .agents/business-context.md

Copy this structure exactly. Other skills find sections by these headings. Fill every field or move it to Open questions. Tag each fact (owner), (site), (doc) or (assumed).

Which skill updates which section:

| Section | Usually updated by |
|---|---|
| 1, 7, 9, 10 | business-context |
| 2 | offer-builder, offer-ladder-pricing |
| 3 | best-client-profile |
| 4 (Positioning) | positioning |
| 5 | proof-ledger (pointer only) |
| 6 | brand-voice |
| 8 | chokepoint-audit, marketing-scoreboard |

Any skill that edits a section appends a changelog line.

---

```markdown
# Business context: <Business name>

> Maintained by the business-context skill. Every marketing skill reads this first.
> Last updated: YYYY-MM-DD · Version: 1

## 1. Business

- Name:
- What we do, in one sentence a customer would say:
- Type: (coach / consultant / agency / local service / health practice / other)
- Location and service area:
- Owner and key people (roles only):
- Years in business:
- Capacity: how many new customers we can take per month without quality dropping:

## 2. Offers and prices

| Offer | Price | What's included | Who it's for | How they buy |
|---|---|---|---|---|
| | | | | |

- Main offer (the one we want most people to buy):
- Entry step (the first thing a new customer books or buys):
- Payment terms, deposits, financing, refund and cancellation terms:
- Gross margin on the main offer, if known:

## 3. Best client

- Who they are (one real person, described, no name):
- What was happening when they found us (the trigger):
- What they'd tried before:
- Who we don't want (screen-out signs):

### In their words

- Before: "..."
- Before: "..."
- After: "..."
- Why they chose us: "..."

## 4. Problems, promise and process

### Problems

1. "..." (customer words)
2.
3.

### Promise

- The result they want, in their words:
- What we can honestly promise (the part we control):

### Process

1. Step:
2. Step:
3. Step:

### Positioning

- One-line positioning: (written by the positioning skill)
- What makes us different:
- Who we're the obvious choice for:

## 5. Proof

See `.agents/proof-ledger.md`. Nothing in this file counts as proof.

## 6. Voice

- Three words for how we sound:
- We say:
- We never say:
- Sample of our real writing or speech (paste 3 to 5 lines):

(When brand-voice runs, it replaces these four lines with its subsections: Traits, Our words, Never words and swaps, Shapes that work, What kills it, Channel dials, Rewrites, Samples.)

## 7. Channels

| Channel | Role (attention / leads / booking / retention) | Current activity | Owner |
|---|---|---|---|
| | | | |

## 8. Numbers

Window: <start> to <end> (last 90 days unless stated)

| Metric | Value | Period | How counted | Source | As of |
|---|---|---|---|---|---|
| Leads per month | | | people, not messages | | |
| Speed to first reply | | | median minutes, human or real conversation | | |
| Lead to booked rate | | | booked ÷ leads | | |
| Show rate | | | showed ÷ booked with past date | | |
| Close rate | | | bought ÷ showed | | |
| New customers per month | | | | | |
| Average first purchase | | | also called first order value | | |
| Average order value, repeat purchases | | | revenue from repeat purchases ÷ number of repeat purchases | | |
| Average customer value (12 months) | | | | | |
| Repeat or rebook rate | | | | | |
| Referral share of new customers | | | | | |
| Monthly ad spend | | | | | |
| Cost per lead | | | | | |
| Monthly revenue | | | cash collected | | |
| Gross margin, main offer | | | after delivery cost and commission | | |

### Paid ads targets (fill only if they run paid ads)

| Field | Value | How it was set | As of |
|---|---|---|---|
| Conversion event the ads optimize toward | | the real action that means a booked call, visit or sale, tracked server-side if possible (not clicks, not page views) | |
| Target cost per result: excellent | | from the most-per-lead line in chokepoint-audit or offer-ladder-pricing | |
| Target cost per result: acceptable | | | |
| Cost per result that triggers a pause | | | |
| Daily spend cap | | | |

Current chokepoint: (written by chokepoint-audit, with date)

Benchmarks: score these numbers against the canonical starting points in the chokepoint-audit skill (references/thresholds.md), not against numbers kept in other skills.

## 9. Goals

- Next 90 days:
- Next 12 months:
- The number that matters most right now:

## 10. Constraints

- Industry and regulator, if any:
- Claims we may not make:
- Platform limits (ad policies, messaging rules, quiet hours):
- Privacy rules (what customer data may never go in forms, DMs, ads or AI tools):
- Owner's personal no-go list:

## Open questions

- [ ] ...

## Changelog

- YYYY-MM-DD v1: Created from brain dump (owner) and website (site). Sections: all.
```
