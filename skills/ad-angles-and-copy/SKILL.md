---
name: ad-angles-and-copy
description: >
  When the user wants to turn ad research into a bank of angles and then write the actual headline
  and primary text for paid ads. Also use when they say "ad angles," "write ad copy," "what should
  the ad say," "give me ad variations," or "angle bank." Needs research first; for a health
  business the belief-shift method lives here too. For the visual layout and format each angle
  renders into, see ad-creative-brief. For launching the finished copy, see ad-launch. For a clinic
  running the full belief-shift pass, see clinic-ad-launch.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad angles and copy

You'll finish with a scored bank of 40 or more angles grouped into families, and for each
angle you plan to run, one primary text and one headline that pass the anti-slop and compliance
gates.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. You also need
`ad-research`'s output (ICP, competitor table, customer-language bank, open lanes); if that
research does not exist yet, run **ad-research** first. If the business is health-related, read
**health-claims-check**'s rules before writing a single line.

## How to do it

### 1. Build the angle bank (40+ angles, 6 to 8 groups)

Mine, in this order: the research brief's open lanes and customer-language bank; the 8
chokepoints and what belief is stopping each one; the business's own proven winners (what already
converted). Common groups that recur across almost any offer:

1. Fear and trust (the bad experience the customer has heard about, answered by who is in charge here)
2. Identity and specificity (the exact person, part, or situation, named precisely)
3. Honesty the discount competitor cannot say (a real timeline, a real limitation, said first)
4. Mechanism (what this does, and does not do)
5. Comparison (versus what the customer already tried, argued fairly)
6. Price and offer transparency (one clear price shape, never hidden)
7. Timing and reason-for-now (dated, real, never vague urgency)
8. Segment of one (one named situation per ad, not a generic "you")

Score each angle CTR 1 to 5 (will it stop the scroll) and BOOK 1 to 5 (will it drive the real
action). Keep a do-not-run list alongside it: the generic claim everyone uses, pure percent-off,
and anything you cannot claim.

### 2. Write copy by family

One angle per family, 2 to 3 variants each. Per creative: one primary text (hook in the first 125
characters) and one headline (under 40 characters). Never multiple texts on one ad; never mix two
desires in one ad.

Rules that come from real failures, apply every time:
- No apostrophes in on-image display text if it will be rendered by an image model; write it out
  instead of contracting.
- Zero em dashes, zero en dashes, anywhere.
- A monthly payment figure needs the example amount, the term, and the APR together, or it does
  not appear at all.
- The reader's own sentence is the headline. Your answer to it is small, not the hero.
- Naming convention for every creative: `[format]-[hook]-[avatar]-[offer]-[MMDD]`. Ad name equals
  creative name. Carry `utm_content={{ad.name}}` so results report back to the exact creative.
  **For a health or other sensitive-category business, `[offer]` is an opaque code (`off01`,
  `off02`), never the treatment, condition, or program name.** `utm_content={{ad.name}}` puts the
  ad name into every click URL and pixel event; a literal treatment name there is the same PHI
  leak as putting it in the lead form, just through a different door. Keep a private, non-public
  lookup of code to offer name outside this repo and outside the ad platform.

### 3. Run the anti-slop gate before anything leaves this file

Two failures on any one line means rewrite it, not patch it:
- Any phrase of five or more words lifted from a competitor ad or swipe file.
- "We" outnumbering "you" across the primary text.
- More than one contrast cliché per family ("not X, but Y" overused).
- Any banned word: revolutionary, game-changer, unlock, supercharge, skyrocket, delve, leverage
  (as a verb), elevate, seamless, journey, empower, transformative, cutting-edge, holistic.
- A claim that would not survive if you read it back to the customer who gave you the language it
  is based on.

### 4. Belief shift (optional, strongly recommended for a trust-heavy offer)

Angle banks built from research cover product and proof; they usually miss the beliefs that
stop someone from acting: time, money, who to trust, doing it alone, and the identity
they are embarrassed to have. If the offer involves real trust or vulnerability (health, money,
a big life change):

1. Name the avatar in the customer's own sentences, and the villain (a business model or broken
   system, never a named competitor).
2. Name two identities: the before (specific, something they recognize), the after (specific,
   something they want).
3. Use **positioning**'s six beliefs (the same table, not a second version of it) as rows: their
   current belief in their words, the new belief, and how you'll shift it. If the shift needs
   proof you don't have, the row is a visible placeholder, not a claim.
4. Turn each belief into one headline, in two different visual treatments. See
   `references/belief-shift.md` for the ad-specific worked method on top of positioning's table.

## Check it

- [ ] 40 or more angles, each scored CTR and BOOK, with a do-not-run list.
- [ ] Every creative has exactly one primary text and one headline, hook in the first 125
  characters, headline under 40.
- [ ] Anti-slop gate run and passed on every line (zero em/en dashes, no banned words).
- [ ] Every claim traces to an Approved, unexpired claim in `.agents/proof-ledger.md` whose
  permission fits the channel, or carries a `[NEEDS PROOF: ...]` tag. Under each finished ad,
  list `Proof used: P-004, P-011` so a reviewer can check each one.
- [ ] A reader unfamiliar with the business could tell which angle each ad belongs to.

## Rules

- Never invent a number, review, testimonial, credential, or result. Anything not in the proof
  ledger is not used as proof.
- One ad, one desire. If an ad is trying to do two jobs, split it.
- Never write urgency you cannot date (no "today only," "spots going fast") without a real count
  and a real close date behind it.
- Health, money, legal, and before/after claims run through **health-claims-check** (health
  businesses) and **ad-policy-check** before this copy goes anywhere near a launch.

## Related skills

- **ad-research**: the input this skill depends on.
- **positioning**: the canonical six beliefs this skill's belief-shift pass applies to ads.
- **proof-ledger**: the only source for a claim used in copy; anything else is `[NEEDS PROOF: ...]`.
- **ad-creative-brief**: turns the written angle into a visual layout and format.
- **ad-policy-check**: runs every line of copy against platform policy before launch.
- **health-claims-check**: the stricter gate for any health-related business.
- **ad-launch**: where this copy goes live.
