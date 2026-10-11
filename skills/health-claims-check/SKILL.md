---
name: health-claims-check
description: >
  When any health, wellness, med spa, or aesthetic claim is about to go into an ad, landing page,
  or patient message, run this check first. Also use when they say "is this claim allowed," "check
  this for FDA wording," "compliance check," "can we say this," or "health claims review." For
  the platform-policy side of this (Meta/Google ad standards), see ad-policy-check; this skill
  covers the stricter medical, legal, and privacy layer underneath it. For a clinic's full launch
  sequence, see clinic-ad-launch.
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: clinic
---

# Health claims check

You'll finish with a line-by-line pass or fail on every claim, with the exact fix, before
anything with a health, body, or financial claim reaches a patient.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first; business-context section 10
(Constraints) carries industry rules and claims the business may not make. If a device or
treatment clearance is claimed, confirm the actual clearance document exists and covers the exact
indication being claimed; if you cannot confirm it, treat the claim as unconfirmed, not as true.

## How to do it

Run every headline, bullet, primary text, and landing page line against this checklist before
anyone sees it.

### Device and indication

- "FDA-cleared" only when the 510(k) is on file AND only for the cleared indication. A clearance
  for one use (for example, fat reduction) is not a clearance for a different use (for example,
  skin tightening). When in doubt, describe the mechanism instead of claiming an indication.
- Never: "permanent," "melt," "erase," "removal," "lose X inches," "safe for all skin types,"
  "minimal risk," "guaranteed," "cure."
- Off-label use is physician-performed, consented, and never the headline.
- Never use a trademarked treatment or device name the practice does not license; a competitor's
  brand name is not a generic term you can borrow.

### Results and proof

- **Never in a paid ad on Meta.** Meta's ad standards prohibit before-and-after images for
  cosmetic procedures and weight loss, full stop, consented or not. Before/after photos may
  appear on the practice's own website or in the in-person consult, with consent on file, never
  in the ad itself. Other platforms have their own rules; check before assuming a Meta rule
  carries over.
- **"Individual results vary" does not cure an atypical result.** Under the FTC Endorsement
  Guides (16 CFR 255.2), a disclaimer next to an unusually good result does not make that result
  usable. Either the claim states the **generally expected result**, backed by a `stat` row in
  `.agents/proof-ledger.md`, or the atypical result does not appear in marketing at all. "Results
  vary" is not a substitute for that; treat any draft that leans on it alone as a fail, not a
  pass.
- Testimonials and reviews are usable only if real, attributable, and permission is on file
  (FTC). Never invent a star rating or a review count, and never use an AI-generated person as
  the subject of a testimonial, review, or endorsement (see **ad-creative-brief**'s AI-people
  rule).
- Recovery time, session count, and course length are stated honestly per patient, or left out
  entirely. Never print a universal number.

### Money

- Any monthly payment figure needs the example amount, the term, and the APR stated together in
  the same place (this is a Regulation Z "triggering terms" requirement, not a style choice).
- Deposit wording matches exactly how the practice operates it: refundable, or credited toward the
  visit, never both implied at once.
- Prices appear only where the practice has published or explicitly approved them in writing.

### Privacy

- A lead form collects name, email, phone, and consent, and nothing clinical, unless a signed
  business associate agreement (BAA) exists with the CRM or ad platform handling the data.
- No treatment name, condition, or body area in a pixel event, URL, UTM parameter, or **ad or
  creative name**. Use opaque campaign codes instead (see **ad-launch**'s naming convention).
  This is the exact pattern behind recent hospital-pixel settlements: the treatment name doesn't
  have to be in the lead form to leak; it leaks just as easily through `utm_content={{ad.name}}`
  if the ad name itself contains it.
- Never upload a patient or customer list, or any list derived from one (including an
  "exclude existing patients" suppression list), to an ad platform as a custom audience without
  legal review and a BAA with that platform. A list upload is a disclosure of protected health
  information to a third party that has not signed one, even when the only fields are name,
  email, and phone. See **ad-launch**'s alternatives (suppression at the CRM level, a
  platform-side server event that never leaves the practice's own system, or a reviewed and
  properly authorized data-sharing agreement).

### Skin of color and risk disclosure

- Name pigment risk plainly wherever the audience includes Fitzpatrick skin types IV to VI; never
  say "no risk."
- No melasma-improvement claim for an ablative device; that claim belongs to a different device
  category.

### Voice

- Credentials appear exactly as the provider's bio reads, never upgraded or abbreviated in a way
  that implies more than is true.
- Zero em dashes, zero invented facts, anywhere patient-facing.

## Check it

- [ ] Every claim traces to a confirmed clearance, a published price, or an Approved, unexpired
  entry in `.agents/proof-ledger.md` whose permission fits the channel, listed as
  `Proof used: P-xxx`. Anything that doesn't is marked `[NEEDS PROOF: ...]`, never quietly
  smoothed over.
- [ ] No before/after anywhere in a paid Meta ad. Anywhere else, it is consented, unretouched,
  and backed by a generally-expected-result claim, never an atypical result cured by a
  disclaimer alone.
- [ ] No AI-generated person stands in for a testimonial, review, or endorsement.
- [ ] Any dollar-per-month figure carries the example, term, and APR together.
- [ ] No treatment, condition, or body-area term in a pixel event, URL, UTM, or ad/creative name.
- [ ] No patient or customer list uploaded to an ad platform without legal review and a BAA.
- [ ] No universal session count, recovery time, or course length anywhere.

## Rules

- Never silently rewrite a clinic's risky wording. Flag the exact phrase and show it back to the
  business owner; the decision to accept more risk is theirs, not yours to make quietly.
- If a physician owns or supervises the practice, treat every rule here as the floor, not the
  ceiling; physician-owned practices carry tighter personal liability than the platform's own
  policy requires.
- A captured competitor ad with a risky claim is not evidence the claim is safe; it only proves
  the platform hasn't caught it yet, or that the competitor is taking on risk you don't have to.
- This check runs before **ad-policy-check**, not instead of it; a claim can fail this check even
  when it would technically pass the platform's own policy.

## Related skills

- **proof-ledger**: where every Approved claim this skill checks has to live before it's used.
- **ad-policy-check**: the platform-policy layer that runs alongside this one.
- **clinic-ad-launch**: runs this check on every line before any render.
- **clinic-offers**: the offer-design rules (no discounting the core treatment, real value stacks)
  that keep an offer from needing a claim this skill would fail.
- **patient-reactivation**: the PHI and consent rules here apply equally to any reactivation
  message.
