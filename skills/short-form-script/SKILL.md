---
name: short-form-script
description: "When the user wants a talking-head video script, a batch of hooks to film against one body, or wants an existing script checked for AI slop and stolen wording. Also use when they say 'write me a reel script', 'video script', 'talking-head script', 'script forge', or 'check this script'. Produces a 5 hooks x 1 body x 3 CTAs script set (15 ad variations from one filming session) plus a scored anti-slop gate pass. For the on-screen title text style, see hook-writer. For cutting raw footage into finished clips, this skill stops at the script; editing is a separate job."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Short-form script (5:5:3 format)

You'll finish with one finished script set: 5 hooks, 1 body, 3 CTAs, every line passed through the anti-slop gate, ready to film in a single session and cut into 15 ad/post variations.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. Who's on camera, and what's their actual voice (first-person "I/we," talking to one person)?
2. What's the one belief this video needs to shift, or the one service/topic it needs to cover?
3. Is there a real, existing free resource to send people to? (Never invent one.)

## How to do it

### 1. The format

One video = one topic or one belief to shift. It ships as:
- **5 hooks** (3 to 5 seconds each, filmed back to back, same outfit/setting) for A/B testing
- **1 body** (roughly 45 to 60 seconds, under 160 words, filmed once) that must pair cleanly with ANY of the 5 hooks, so it never restates a hook
- **3 CTAs** (Direct, Indirect, Comment-trigger), filmed separately

5 hooks x 1 body x 3 CTAs = 15 finished variations from one filming session.

### 2. Write 5 hooks from 5 different categories

Pull from **hook-writer**'s category list, picking 5 DIFFERENT categories so the A/B test tests something. Common picks for talking-head video:

| Category | Shape |
|---|---|
| Withheld truth | "Most people have no idea [hidden mechanism]. Let me show you." |
| Before-you-do-X | "Before you [common action], give me 60 seconds." |
| Contrarian | "I turned away a client last week." / "I'm not going to tell you [hype claim]." |
| Identity | "If you're [specific person in a specific situation], this is for you." |
| Specific stake | "[Named numeric fact about the audience's situation]." |

### 3. Write the body

- First-person voice, talking to one person they like. If it sounds like a brochure, restart.
- One honest admission or scoped "no" ("I don't recommend this for everyone," "results vary"): the trust beat is what converts.
- One concrete mechanism (why it works) and one concrete moment (who/when it applies). Zero menu-dumps or feature lists.
- Never restates any hook. The body has to work no matter which of the 5 hooks precedes it.

### 4. Write the 3 CTAs

- **Direct**: ask for the booking/purchase/call, name the next step plainly.
- **Indirect** (usually wins on cost per lead): point to a free resource ("takes 90 seconds") that captures the people not ready to buy yet.
- **Comment trigger**: ONE word, memorable, mapped to a real automation and a real resource. Never a keyword with nothing behind it.

### 5. Run the anti-slop gate on every line

See `references/anti-slop-gate.md` for the full checklist. Threshold: 2 or more failures means rewrite before it ships. One failure means fix that specific line.

### 6. Note filming and measurement

- Eye-level camera, vertical frame, read into the lens.
- Cheat sheet math for the client: N topics x 5 hooks + N bodies + 3N CTAs, filmed in one batch per session.
- Metrics to track post-launch: Hook click-through by variant -> cost per lead by CTA -> cost per acquisition overall -> best hook+body+CTA combo (kill the rest after the first real test window).

## Check it

Run `references/anti-slop-gate.md` on every script before delivery. Report per script: PASS or FAIL(n) with the specific lines flagged and the rewritten lines. Never silently rewrite; show the diff.

Under the final script set, list `Proof used: P-xxx, P-xxx` naming every approved claim ID from `.agents/proof-ledger.md` that the hooks, body, or CTA relied on, or state "Proof used: none" if the script needed none.

## Rules

- Never invent a specific claim about customers, patients, or results the business hasn't verified. Any specific number or story needs a source in the proof ledger, or ships as `[NEEDS PROOF: ...]`.
- Never reference a free resource, keyword, or automation that doesn't exist yet. That's a hard gate, not a score.
- Zero em dashes or en dashes anywhere in the script, on-screen text, or caption.
- Health, money, legal, and before/after claims follow **health-claims-check** when the business is health-related.

## Examples

See `references/examples.md` for a fully worked fictional script set (business coach).

## Related skills

- **hook-writer**: source the 5 hook categories and score each one
- **outlier-research**: find which hook/body/CTA shape is currently working before filming
- **content-pillars**: decide which pillar this script belongs to
- **ad-angles-and-copy**, **ad-creative-brief**: for paid-ad-specific versions of this script once it's proven organically
