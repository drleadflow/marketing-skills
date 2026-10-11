---
name: ad-creative-brief
description: >
  When the user wants to turn written ad copy into an actual visual layout a designer, AI image
  tool, or video editor can build from. Also use when they say "creative brief," "what should the
  ad look like," "static ad template," "design brief for ads," or "creative matrix." Needs angles
  and copy first. For the copy itself, see ad-angles-and-copy. For sizing, pre-flight and going
  live, see ad-launch.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad creative brief

You'll finish with a creative matrix (which angle, which format, which cell) and a written
brief per static or video that a designer or an AI image tool can build from without guessing.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. You need
**ad-angles-and-copy**'s output (the scored angle bank and written copy) before this step; run
that first if it does not exist.

## How to do it

### 1. Map awareness to format, per angle

For each angle, answer, in order: awareness level (unaware, problem-aware, solution-aware,
product-aware, most-aware), then objective (education, converting, retargeting), then format. A
slate built only from solution-aware and product-aware angles stacks in the middle and starves
the account of cheap cold reach; make sure the unaware and most-aware ends have at least two
cells each (see `references/awareness-formats.md`).

### 2. Pick formats that fit the angle, not the other way around

Proven static formats, pick the one that fits what the angle needs to say, don't force
every angle into one template:

- **Offer card**: a fixed skeleton carrying one clear price shape, used for solution/product-aware
  angles with a real offer.
- **Editorial callout**: the customer's own sentence, large, your answer small.
- **Side-by-side comparison**: fair, named comparison against the alternative the customer already tried.
- **Native screenshot / notes style**: looks like a real message or note, first person, no price.
- **Social-proof card**: only with a real, attributable review or quote on file in the proof
  ledger.
- **In-use photo**: real photo of the product or service in use, bright, not overly produced.

### 3. Fix the skeleton for this offer

Write down the actual layout, top to bottom, once, and reuse it across every static in this wave
so winners can be multiplied by swapping one variable at a time (area, price shape, person)
instead of inventing a new concept every time. See `references/skeleton-template.md` for a filled
example.

### 4. Build the matrix

A simple wave-1 matrix: 4 angle groups x 3 cells = 12 creatives. Each cell: angle, format, family,
awareness stage, status.

### 5. Write the per-creative brief

For any creative headed to a designer or image generator, specify exactly, in this order: visual
system, identity (if a real person appears), layout (with the exact quoted on-image text),
lighting and style, quality bar, and what to avoid. A paragraph description that leaves the
on-image words to the tool's judgment is not a brief; the words have to be the exact,
compliance-checked copy from **ad-angles-and-copy**.

## Check it

- [ ] Every awareness stage (unaware through most-aware) has at least one cell; no stage is empty.
- [ ] The skeleton is written once and named, not reinvented per creative.
- [ ] Every brief quotes the exact on-image text, not a paraphrase.
- [ ] No fabricated before/after, review, or result appears anywhere in a brief; anything not an
  Approved, unexpired claim in `.agents/proof-ledger.md` is marked `[NEEDS PROOF: ...]` or left
  out. List `Proof used: P-xxx` under any brief that cites a claim.
- [ ] No real patient, client, or customer photo used without a documented consent on file.

## Rules

- Editorial or stylized photography lives inside the proven skeleton, never floating free of it;
  consistency across a wave is what makes winners easy to spot and multiply.
- One price shape per creative (starting-at, dollars-off, or strike-through), never a computed
  total the reader has to do math on.
- **Never present an AI-generated person as a customer, patient, or staff member.** Under the
  FTC's rule on fake reviews and testimonials (16 CFR 465, 2024), a synthetic person standing in
  for a real endorser is deceptive, not just a style risk. An AI-generated person never appears
  next to a testimonial, review, or results claim, full stop, no matter how realistic the render.
  Where the ad uses an AI-generated or stylized person for mood or demonstration (no claim about
  that person attached), disclose it as AI-generated or illustrative wherever the destination
  platform requires that disclosure.
- Natural asymmetry and real texture are still a quality bar for any AI imagery used, but passing
  that bar is not permission to let a synthetic person imply it's a real customer or patient.
- Never generate a before/after. If one is needed, it must be a real, consented, unretouched pair
  on file, and even then it never goes in a paid Meta ad (see **health-claims-check**).

## Related skills

- **ad-angles-and-copy**: supplies the copy this brief wraps in a layout.
- **ad-launch**: sizes, pre-flights, and ships the finished creative.
- **ad-policy-check**: checks on-image text and implied claims before production.
- **health-claims-check**: the health-business version of the claims check, including before/after
  and pigment-risk rules.
