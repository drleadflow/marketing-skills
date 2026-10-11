---
name: patient-reactivation
description: >
  When a clinic wants to reach back out to patients or leads who never booked, went quiet, or
  haven't been in for a while. Also use when they say "database reactivation," "win-back
  campaign," "reach out to old leads," "work the database," or "who should we follow up with."
  This is the clinic delta on top of database-reactivation (core pack): run that skill's method
  first, then apply the PHI, consent, and claims rules here before anything about a patient goes
  out. For the booking mechanics this feeds into, see consult-show-rate.
metadata:
  version: 1.0.0
  chokepoint: retention
  pack: clinic
---

# Patient reactivation

You'll finish with the same segmented, sized, holdout-backed win-back campaign that
**database-reactivation** produces, with the additional health-specific checks a patient list
needs before anything goes out. This skill does not repeat that method; it only states what's
different for a patient-facing practice.

## Before you start

Run **database-reactivation**'s "Before you start" and "How to do it" in full first; this file
assumes that method and adds to it. Also read `.agents/proof-ledger.md` and
**health-claims-check**'s rules before drafting anything about a specific treatment or program.
Ask, if not already clear:
1. Has the price, provider, or service menu changed since the oldest records in this cohort
   inquired? Never reactivate against an offer that no longer exists.
2. Is there a current BAA or equivalent covering the channel this will go out on, if any clinical
   detail is involved anywhere in the system touching this list.

## How to do it

This expands only the parts of database-reactivation's method that change for a patient-facing
practice; every other step there stays the same.

### Exclusions

Add to the exclusion pass: anyone currently receiving active care or with paid visits remaining
on a package. They get routed to clinical follow-up or help using what they already paid for,
never a win-back message (a person with paid care remaining is not a reactivation target, they're
a service gap).

### Offer per bucket

Same four buckets as **database-reactivation**. The health-specific note is on the content-led
option: it works well for "engaged then quiet" and "never engaged," but the content still has to
be real, specific, verified to exist and belong to the practice, and never implies a diagnosis or
promises a result. Never use it for the "raised an objection" bucket unless the content directly
and honestly answers that specific objection.

### Drafting

On top of database-reactivation's drafting rules:
- No condition, diagnosis, or treatment detail in an outbound message to anyone without a current
  care relationship; a reactivation text goes to someone with no established clinical
  relationship for this purpose, so keep it to the offer and the ask.
- Match tone to recency. Someone from last week gets a normal follow-up. Someone from eighteen
  months ago gets the gap named plainly and no assumption that the old price or program still
  holds.
- Any claim about a result, timeline, or program detail still runs through **health-claims-check**
  before it ships, same as an ad would.

### Compliance, immediately before sending

Everything in database-reactivation's compliance checklist, plus: confirm the channel and the
list are covered by the same BAA or consent basis the clinic uses for other patient
communication, not a separate, looser standard just because this is "marketing."

## Check it

- [ ] Everyone currently in active care or with paid visits remaining was excluded and routed to
  clinical follow-up instead of a win-back message.
- [ ] No message names a condition, diagnosis, or treatment to someone without a current care
  relationship.
- [ ] Any specific claim passed **health-claims-check**, not just the general copy gate.
- [ ] Pricing or program details referenced are confirmed still current before use.
- [ ] Everything in database-reactivation's own "Check it" also holds.

## Rules

- Never send, tag, or remove anyone from a workflow without explicit, specific approval for that
  batch; this is database-reactivation's rule and it applies with the same force here.
- Never reactivate against pricing, a provider, or a service that has changed since the original
  inquiry without confirming it's still accurate.
- Keep the patient list inside the clinic's own approved system; never export it elsewhere.

## Related skills

- **database-reactivation** (core pack): the full method this skill adds to; run it first.
- **consult-show-rate**: the booking mechanics a reactivation reply converts into.
- **health-claims-check**: the claims gate for any specific result, timeline, or program detail.
- **clinic-offers**: where the real offer per bucket should come from, if one doesn't exist yet.
