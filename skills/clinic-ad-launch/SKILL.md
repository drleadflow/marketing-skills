---
name: clinic-ad-launch
description: >
  When a med spa, aesthetic clinic, IV bar, or other patient-facing health practice wants to run a
  full ad launch, start to finish, with the extra rigor a health business needs. Also use when
  they say "launch ads for the clinic," "med spa ad campaign," "clinic ad launch," or "run the
  four-day ad launch." Ports the method from the Clinic Ad Launch Playbook
  (https://github.com/drleadflow/clinic-ad-launch-playbook, MIT) for the render tooling and the
  full phase templates. For the general, non-clinic version of each phase, see ad-research,
  ad-angles-and-copy, ad-creative-brief, ad-launch. For the claims gate this leans on constantly,
  see health-claims-check.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: clinic
---

# Clinic ad launch

You'll finish with a graded, compliance-checked wave of ads with a launch document the
owner has approved and a four-week decision plan written before anything goes live. This is the
clinic-specific version of **ad-research** through **ad-launch**, run as one sequence with extra
gates a patient-facing business needs. The full tooling (render scripts, prompt templates, the
review-page builder) lives in the playbook repo linked above; this skill carries the method.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. Ask, at most 3 at a
time:
1. The offer, price, who performs it, and the practice address.
2. Who approves medical claims on this account (usually the medical director).
3. Daily budget band and target launch date.

## How to do it

### The four laws (hold these through every phase)

1. **The patient is the hero.** The headline is their sentence, not the provider's resume. The
   provider appears as a hand, a device in use, or a name line. One credential-led ad per set, no
   more.
2. **Open on a belief they already hold.** "I've tried diets before and they didn't stick." "That
   sounds like a sales pitch." Move them one step, never a leap.
3. **One ad, one desire.** Mechanism, identity, or honesty, never all three stacked in one ad.
4. **Honesty is the differentiator nobody else in the city is using.** Publish the real downtime.
   Say "a course of visits" before the sale. Name the real limitation. It reads as authority
   because almost nobody else does it.

### The phases

Run these phases in order. Each has a gate; do not move to the next until the gate passes. See
`references/phases.md` for the full detail behind each summary below.

1. **Research** (run **ad-research**, clinic-specific additions in `references/phases.md`): 20+
   Ad Library ads logged with days running, your own account history ranked by cost per real
   booking, and 10+ lines of real patient language. Gate: a reader could write the ads from this
   file alone.
2. **Angle bank and belief shift** (run **ad-angles-and-copy**, including the belief-shift pass):
   40+ angles in 6 to 8 groups, scored, with a do-not-run list. Gate: every angle names a real
   belief, not just a feature.
3. **Creative strategy** (run **ad-creative-brief**): map awareness level to format per segment,
   fix the skeleton for this offer, build the 12-cell wave-1 matrix.
4. **Copy**: one primary text and one headline per creative, organized by family. Every line
   passes **health-claims-check** before it goes near a render.
5. **Produce and grade**: render the wave, then grade every asset on `references/scorecard.md`'s
   rubric. Tier A (8.5+) runs as-is. Tier B (7 to 8.4) runs after the listed fix. Tier C is
   benched or retargeting-only.
6. **Sizes and board**: both feed (4:5) and story (9:16) sizes for every asset; never let the
   platform auto-crop one into the other.
7. **Benchmark**: compare your wave against what is live in the category right now, by
   dimension, and rank fixes.
8. **Launch document and workout plan** (run **ad-launch**): see `references/phases.md` for the
   clinic-specific launch doc sections (price and deposit handling, consult vs. deposit-first test
   design).
9. **Awareness audit**: map every static to unaware through most-aware (see
   `references/awareness-audit.md`). Any stage with fewer than two cells gets built now, usually
   the cold end and the warm end.
10. **Client review**: one link, three approvals requested: the slate, the claims, the budget.
11. **Build and pre-flight**: run **ad-launch**'s pre-flight checklist, plus: no treatment name in
    any pixel event, URL, or UTM; no clinical field on the lead form unless a signed BAA exists
    with the CRM.
12. **Weeks 1 to 4**: run the workout plan from **ad-launch**. By week 3, replace any placeholder
    customer language with real inbox lines from the live account.

## Check it

- [ ] All four laws visibly hold across the wave (patient as hero; belief opened; one desire per
  ad; a real limitation or honesty beat named somewhere in the set).
- [ ] Every claim passed **health-claims-check**, not just a general compliance glance, and lists
  `Proof used: P-xxx` against an Approved, unexpired entry in `.agents/proof-ledger.md`.
- [ ] Every awareness stage has at least two cells before the build sheet is finalized.
- [ ] Owner approval line exists on the launch document before any build starts.
- [ ] Pre-flight includes the clinic-specific items (no treatment name in pixel/URL, no clinical
  field on the lead form without a BAA).

## Rules

- Never invent a before/after, a review, a session count, or a recovery timeline. If it is not
  confirmed and in `.agents/proof-ledger.md`, it is a visible `[NEEDS PROOF: ...]`, not a line in
  an ad.
- Never let the price line require the reader to do multiplication (a session count times a
  per-session price). One price shape, one number.
- Never discount the core treatment to make the offer attractive; see **clinic-offers** for the
  value-stack alternative.
- Check the ad account's current data-source category and restriction tier before assuming the
  deposit-first optimization event in the launch doc is available at all; see
  `references/phases.md`'s launch-document section for the current Meta health/wellness
  restriction tiers, the fallback options if the event isn't available, and why renaming a
  custom event or using the Conversions API are not reliable workarounds.
- Examples in this repo, and in anything produced by this skill for a demo, use a clearly
  fictional clinic name, labeled fictional.

## Related skills

- **ad-research**, **ad-angles-and-copy**, **ad-creative-brief**, **ad-launch**: the general
  skills this one sequences with clinic-specific gates added.
- **ad-policy-check**: carries the current Meta health/wellness optimization-tier detail this
  skill's deposit-first test depends on.
- **health-claims-check**: the claims gate run on every line before it is rendered.
- **clinic-offers**: how to build the offer this campaign advertises without discounting the core
  treatment.
- **consult-show-rate**: the deposit and reminder method for the booking this campaign drives
  toward.
