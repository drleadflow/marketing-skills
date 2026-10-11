---
name: content-repurposing
description: "When the user has one piece of content (a long video, a podcast, a blog post, a webinar) and wants it turned into a batch of shorter pieces across platforms. Also use when they say 'repurpose this', 'turn this into clips', 'content waterfall', 'get more mileage out of this', or 'I only post once and want more content from it'. Produces a numbered derivative list mapping one source asset to multiple platform-specific outputs. For writing any single derivative from scratch, see short-form-script, carousel-writer, hook-writer, newsletter, or seo-article."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Content repurposing

You'll finish with a numbered list of derivative pieces pulled from one source asset, each one named, platform-tagged, and ready to hand to the skill that writes it.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What's the source asset? (A recorded video/podcast, a transcript, a blog post, a webinar, a long thread?)
2. Roughly how long is it, and is a transcript available or does one need to be generated?
3. Which platforms does the business post to right now? (Don't repurpose to a platform nobody's running.)

## How to do it

### 1. Find the moments, don't chop by the clock

The source asset is not sliced into equal chunks. Read or watch it and mark every moment that is a complete idea on its own: a strong claim, a story with a beginning and an end, a specific number, a reframe, an answer to a real question. A 60-minute conversation might have 4 to 10 of these moments; a 1,500-word article might have 2 or 3.

For each moment, note:
- **Timestamp or location** in the source
- **The core idea** in one sentence
- **Why it stands alone** (does it need the rest of the conversation to make sense, or not?)

A moment that needs 3 minutes of setup to land isn't a derivative; it's a reason to cut deeper or skip it.

### 2. Map each moment to the output it fits

| Moment shape | Best derivative |
|---|---|
| A single sharp claim or reframe | Short-form video (hand to **short-form-script**) or a text post (hand to **hook-writer** for the opener) |
| A teachable framework with 3 to 5 parts | Carousel (hand to **carousel-writer**) |
| A story with a real arc | Narrative-style caption or newsletter story (hand to **newsletter**) |
| A deep answer to one specific question | Blog section or full article (hand to **seo-article**) |
| A stat, quote, or proof point | A single quote-card post, pulled from the proof ledger |

### 3. Match each derivative to its platform's real spec

A derivative handed to a writing skill with no spec gets written to a generic default that then needs rework. State the spec up front:

| Platform | Length/format | Aspect ratio | Caption limit |
|---|---|---|---|
| Instagram Reels / TikTok / YouTube Shorts | 15 to 90 seconds | 9:16 vertical | caption sweet spot under 150 characters before "more" |
| Instagram feed carousel | 5 to 10 slides | 4:5 or 1:1 | caption can run longer; hook still has to live in the first line |
| YouTube (long-form) | 5 to 15 minutes for a repurposed segment | 16:9 horizontal | description 1 to 2 sentences, no stuffed keywords |
| LinkedIn / X text post | platform character limit (see **hook-writer**'s destination table) | n/a | n/a |
| Email / newsletter | one idea, any length that earns it | n/a | subject line under 60 characters |

### 4. Build the derivative map

```
SOURCE: [asset name, length, date]

Moment 1 [timestamp]: "[one-sentence idea]"
-> Derivative: [type] for [platform]
-> Standalone? [yes/no, note what's needed if no]

Moment 2 [timestamp]: "[one-sentence idea]"
-> Derivative: [type] for [platform]
...
```

### 5. Sequence the release, don't dump it all at once

Spread derivatives across the posting calendar (see **content-pillars**) rather than publishing everything the same week. A single long source asset can usually fill 1 to 3 weeks of a modest posting cadence without anyone noticing it all came from one recording.

### 6. Hand off, don't write from scratch twice

Each derivative gets written by its own skill using the moment's one-sentence idea as the brief, not by re-summarizing the whole source asset into every output. That keeps each piece focused on one idea instead of becoming a shrunken version of the original.

### 7. Log every shipped derivative in a repurposing ledger

Without a ledger, the same moment ships twice (once as a clip, then forgotten and clipped again from the same source months later) or a platform gets skipped without anyone noticing. Keep one running table per source asset:

| Moment | Derivative shipped | Platform | Date shipped | Still available to repurpose? |
|---|---|---|---|---|
| Moment 1 | Short-form video | Instagram Reels | [date] | Yes, as a text post or a different hook variant |
| Moment 2 | Carousel | Instagram feed | [date] | No, fully used |

Check this ledger before mining a source asset a second time.

## Check it

- [ ] Every derivative traces to a specific moment in the source, not an evenly-chopped timestamp
- [ ] Each moment is marked standalone or flagged for the setup it needs
- [ ] Every derivative is matched to its platform's real length, aspect ratio, and caption limit
- [ ] No platform gets a derivative the business doesn't post to
- [ ] The release is sequenced across more than one week if there's more than 3 derivatives
- [ ] Captions/transcripts are checked for errors before anything gets burned in or quoted, especially names, numbers, and prices
- [ ] The repurposing ledger is updated with what shipped, where, and when

## Examples

See `references/example.md` for a fully worked fictional repurposing map from one podcast episode.

## Rules

- Never publish an automatically generated caption or transcript without a human pass; transcription errors in prices, names, and claims ship as real mistakes.
- Don't repurpose a moment that only makes sense with the full context around it; flag it and skip rather than ship a confusing clip.
- A moment that depends on a guest's or third party's words needs their clearance before it goes out as a standalone piece, same as any quote.

## Related skills

- **short-form-script**, **carousel-writer**, **hook-writer**, **newsletter**, **seo-article**: write the individual derivatives
- **content-pillars**: decide where each derivative lands in the posting calendar
- **outlier-research**: check whether a derivative's format has a proven structure before writing it from scratch
