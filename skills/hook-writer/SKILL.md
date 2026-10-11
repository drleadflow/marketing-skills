---
name: hook-writer
description: "When the user wants an opening line for a post, video, carousel, headline, or subject line, or wants an existing opener critiqued. Also use when they say 'write a hook', 'my hook is weak', 'fix my opening line', 'on-screen title', or 'first slide of my carousel'. Produces 3 scored hook variants from different categories, with the strongest one returned first. Also covers the on-screen title visual spec (fonts, colors, timing) for burned-in video text. For a full post built around the hook, see short-form-script, carousel-writer, or newsletter."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Hook writer

You'll finish with 3 hook variants from different categories, each scored against the Pattern-Interrupt gate, with the strongest one marked and ready to use as the first line of a post, video, or carousel.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first. Pull the business's wedge or strong opinion from business-context if it has one; it fuels the highest-ceiling hook categories.

Ask only what's missing:
1. What's the topic, and is there a specific number, result, or strong opinion behind it?
2. What platform or format is this for? (on-screen video text has different length rules than a carousel slide or an email subject line)

## How to do it

### 1. Pick the angle, then the category

| The angle you have | Best category |
|---|---|
| A result, number, or experiment | Receipt / Proof |
| A strong opinion or wedge | Contrarian / Myth-buster |
| A mistake people make | Negative Frame |
| A tactic copied from someone else | Stolen Lesson |
| An unanswered question | Curiosity Gap |
| Multiple points, how-to | Listicle |
| Speaking to one exact person | Audience Callout |
| A raw, personal admission | Confession |

When in doubt, reach for Receipt, Contrarian, or Stolen Lesson first. They have the highest ceiling because they combine a specific detail with an open loop or a side to pick.

See `references/hook-library.md` for the full 13-category, 41-template library with fill-in examples.

### 2. Draft 3 variants from 3 different categories

One category per variant, not three takes on the same idea wearing different outfits. Every `[bracket]` gets a real detail pulled from the actual topic, never a placeholder left generic. Compare "we helped a client grow" against "we rebuilt one HVAC company's quote process and their close rate doubled": the second one is a hook, the first is a shrug.

### 3. Run the Pattern-Interrupt gate

A hook must hit at least 2 of 4:
- **Numbers**: a specific number
- **Controversy**: challenges a common belief
- **Direct address**: uses "you"/"your"
- **Emoji** (only where the platform/format allows it): one relevant emoji

Score each variant 0 to 4. Anything under 2 is too declarative, rewrite it before moving on.

### 4. Run the first-3-words test

Cover everything after the third word and judge those three words alone: do they already pull at something, or could they open literally any post on the internet?
- "So, I wanted" -> fails; three throwaway words, no pull yet
- "47 quotes later" -> passes; a number and an implied story in three words
- "Nobody told them" -> passes; names a gap and raises a question immediately

Strip the warm-up words at the front ("so," "okay," "today I want to talk about") and put whatever's strongest first.

### 5. Match length and format to destination

| Destination | Hook length rule |
|---|---|
| On-screen video title | 2 lines, 2 to 4 words each, ALL CAPS, tension in the first 3 words. See `references/on-screen-titles.md` for the full visual spec (color coding, timing, shape). |
| Carousel slide 1 | Ignore the on-screen safe-zone rule; treat the whole slide as the hook, headline plus optional kicker |
| Post/caption opener | 1 sentence, under 15 words where possible |
| Email subject line | Under 60 characters, no clickbait that the body doesn't pay off |
| Video spoken hook | 3 to 5 seconds read aloud |

### 6. Pick and return

Return the strongest variant first, named by category and gate score, with the 2 alternates underneath. If another skill (short-form-script, carousel-writer, newsletter) called this one, hand back all 3 so it can choose in context.

## Check it

Score every hook before returning it:

| Check | Pass condition |
|---|---|
| Clarity | Understandable in under 2 seconds of reading |
| Pattern-Interrupt gate | Scores 2 or more of 4 |
| First-3-words test | Passes on its own, no filler in front |
| Specificity | Has a real number, name, or moment, not an abstraction |
| Stands alone | Would work as a standalone post/tweet with no body |
| No generic AI opener | Not "In today's fast-paced world," "Let me tell you," "Picture this" |

One fix per failed line. If a hook fails clarity or the gate, rewrite before presenting it, don't present a failing draft with a note to fix it later.

If a Receipt-category hook used a number or result from `.agents/proof-ledger.md`, list `Proof used: P-xxx` under the final output, or "Proof used: none" if every hook was built without a ledger claim.

## Rules

- Never leave a `[bracket]` unfilled in the final output.
- Don't return more than 3 hooks; past that the user can't choose, they just get decision fatigue.
- Don't invent the number, name, or result in a Receipt hook. Pull it from the proof ledger or ask for it; mark `[NEEDS PROOF: ...]` if it isn't cleared yet.
- A hook that would work for any business in any city has failed. Name the person, the moment, or the mechanism.

## Related skills

- **outlier-research**: find which hook category is currently outperforming for this niche before picking one
- **short-form-script**: build the full video script around the chosen hook
- **carousel-writer**: build the full slide deck starting from the chosen hook
- **newsletter**: use a hook variant as the subject line
- **positioning**: pull the wedge/strong opinion that fuels Contrarian and Myth-buster hooks
