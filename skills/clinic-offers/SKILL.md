---
name: clinic-offers
description: >
  When a med spa, aesthetic clinic, or health practice wants to design an offer for a campaign or
  a front-desk promotion without discounting the core treatment. Also use when they say "build an
  offer," "what should we bundle," "clinic promotion," "offer for the new patient special," or
  "value stack." For the general, non-clinic offer rules, see offer-builder (core pack). For the
  claims check every offer line must pass, see health-claims-check.
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: clinic
---

# Clinic offers

You'll finish with an offer built from a value stack instead of a discount: what the
patient gets, what it costs to deliver, what it's priced at, and the written terms that go out
before anyone pays.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. Section 2 (Offers and
prices) carries the main offer, entry step, terms, and gross margin if already recorded there.
Ask, at most 3 at a time, whatever is missing:
1. The core treatment this offer is built around, and its real delivery cost.
2. What capacity exists (provider hours, room time) for the included visits.
3. Who on the clinical side approves the final offer sheet before it's sold.

## How to do it

### 1. Never discount the core injectable, device treatment, or procedure itself

Discounting the treatment people compare on price trains the market to wait for the next
discount, and a deep percent-off headline reads as desperation in this category specifically. The
core treatment's price stays stable. The offer gets its appeal from what's added around it.

### 2. Build a value stack instead

Five slots, filled with things that have a real cost and a real value, never with a credit,
coupon, or percent-off counted as "value":
1. **Hook**: the thing that gets attention (a named first-visit appointment, never "a free
   consultation" if it costs the practice anything to deliver).
2. **Hero**: the core treatment, at its real price.
3. **Bonus**: something additional with a real cost (an extended follow-up visit, a
   take-home product, a second provider's assessment).
4. **Take-home**: something physical or practical the patient keeps regardless of what else they
   buy.
5. **Credit**: if a paid first visit credits toward a larger package, state the eligibility, the
   minimum spend, the expiry window, and the remaining total, in writing, before anyone pays.

### 3. Name the first visit

The patient books a named appointment ("the Skin Assessment Visit"), not a vague "consultation."
Build it so that someone who buys nothing further still received something worth what they paid.
Never plan to lose money on the first visit hoping everyone upsells; price it to at least cover
its own delivery cost.

### 4. Check margin and capacity before it goes live

- Keep at least 45% gross margin after delivery cost and any commission, or the offer does not
  ship as designed.
- Confirm provider and room capacity for every included visit before selling a single unit; a
  package that promises three visits the calendar can't hold is a service failure
  waiting to happen.
- Never build a bigger package by just multiplying the per-unit price by more units; a true
  package needs its own designed value, not a bigger invoice for the same math.

### 5. Write the terms before the first person buys

Cancellation, refund, reschedule, and unused-benefit expiry terms get written and reviewed by
whoever on the clinical or ownership side owns that policy, before the offer launches,
and go into the confirmation message the patient receives, not only buried in an ad.

## Check it

- [ ] The core treatment's price is not discounted; the offer's appeal comes from the stack
  around it.
- [ ] Every value-stack slot has a real, defensible cost basis (the clinic's own menu price),
  never an invented "value if bought separately."
- [ ] Margin after delivery cost is at least 45%, or the offer is redesigned before it ships.
- [ ] Capacity for every included visit is confirmed, not assumed.
- [ ] Cancellation, refund, and credit terms are written and reviewed before the first sale.
- [ ] The offer sheet passed clinical lead approval before anyone can buy it.

## Rules

- Never count a credit, gift card, voucher, or percent-off as the offer's "added value"; those
  reduce price, they don't add anything the patient keeps.
- Never guarantee an outcome, an appearance change, or a number of pounds or inches; guarantee the
  visit itself, never the result.
- Never build a decoy premium tier whose only job is making the middle tier look cheap by
  comparison; offer good/better/best only when all three fit a real patient's goals.
- Any claim this offer's copy makes about the treatment itself still has to pass
  **health-claims-check** before it goes anywhere.

## Related skills

- **health-claims-check**: the claims gate every line of this offer's copy has to pass.
- **clinic-ad-launch**: where this offer gets advertised, once it's built.
- **consult-show-rate**: the deposit mechanics that turn this offer into a booked, attended visit.
- **offer-builder** (core pack): the general, non-clinic version of offer design.
