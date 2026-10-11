---
name: outlier-research
description: "When the user wants to find proven content formats to copy the structure of, analyze a competitor's or their own top-performing posts, or answer 'what's working right now'. Also use when they say 'find outliers', 'competitor research', 'what's working on [platform]', 'swipe file', or 'analyze my top posts'. Produces a ranked outlier report with the structure of each winner extracted into a reusable template. For writing the hook itself, see hook-writer. For turning a finding into a script, see short-form-script or carousel-writer."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Outlier research

You'll finish with a ranked list of outlier posts (your own or a competitor's), each with its performance ratio, its structure broken into hook/body/CTA, and a reusable template stripped of the original's specifics.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Whose content are we studying: your own account, a named competitor, or a general swipe search on a topic?
2. Which platform, and is there an API/export available, or are we working from screenshots and manual notes?

## How to do it

### 1. Define "outlier"

An outlier is a post that performs far above that account's own baseline, not a post with a big raw number. A 50K-follower account's 200K-view reel is a bigger outlier than a 2M-follower account's 500K-view reel.

**Outlier ratio** = post performance ÷ account's median performance over its last 20 to 30 posts.

| Ratio | Call it |
|---|---|
| Under 2x | Normal, skip |
| 2x to 5x | Worth a look |
| 5x to 10x | Real outlier, extract the structure |
| 10x+ | Study this one hard, something unusual happened |

If you don't have exact view counts, use whatever signal is available (likes, comments, saves, shares) and the account's own feel for "this one did way better" as a fallback, and say so in the output.

### 2. Pull the candidate set

- **Own account**: list the last 20 to 30 posts with whatever metric is available. Sort by outlier ratio.
- **Competitor**: list their most-liked/viewed/commented posts over a recent window (last 60 to 90 days is usually enough to catch what's current). Note their follower count so the ratio is fair.
- **Topic swipe**: search the topic or format across the platform's native search/explore and pull whatever is visibly performing well, cross-checking against multiple creators so you're finding a pattern, not one lucky post.

### 3. Extract structure, not content

For each outlier, break it into:
- **Hook** (first line/first 3 seconds): what type is it? (see `hook-writer` for the category list)
- **Body structure**: is it a list, a story, a before/after, a single insight expanded, a demonstration?
- **CTA**: what does it ask the viewer to do, and does that match what you'd expect that platform to reward?
- **Format**: talking-head, B-roll, carousel, text-on-screen, voiceover-only?
- **Length**: run time or word count.
- **What made THIS one different** from the account's normal output? (A new hook type, a more specific number, a controversial take, better pacing, a trending audio, a format they don't usually use?)

### 4. Build the reusable template

Strip the specifics and keep the shape. `[placeholder]` every detail that was specific to the original.

```
HOOK TYPE: [e.g. Contrarian / Myth-buster]
HOOK SHAPE: "[Common belief]. Here's why that's wrong."
BODY SHAPE: 3 reasons, each one sentence, building to the reframe.
CTA SHAPE: "Comment [KEYWORD] and I'll send you [resource]."
WHY IT WORKED: forces the reader to pick a side; polarizing claims draw comments.
```

### 5. Rank and recommend

Rank the extracted templates by how well they fit the business's own pillars (see **content-pillars**) and how repeatable the format is without the original creator's specific advantage (their face, their niche authority, a one-off news event). Flag anything that only worked because of a trending audio or a moment in time, since that is not repeatable.

## Check it

- [ ] Every outlier has a calculated or estimated ratio, not just a raw number
- [ ] At least 3 outliers analyzed, not just one lucky find
- [ ] Each template is fully stripped of the original's name, numbers, and story
- [ ] The report names which templates are repeatable vs. which were a one-off trend/moment
- [ ] No real competitor name, handle, or screenshot content is copied into deliverables meant for public use without explicit permission to reference it

## Rules

- Never copy wording. Structure and ideas only; a template with specifics changed is fine, a template with the same sentence is not.
- Never present a competitor's outlier as your own idea when sharing credit internally. Note the source platform/format, not the handle, in anything that will be published.
- If working from a competitor's public account, this is observational research on public content. Don't scrape private data or bypass any platform's access controls.

## Examples

See `references/output-format.md` for the full report structure and a worked example.

## Related skills

- **hook-writer**: write a fresh hook using the hook type you found works
- **short-form-script**, **carousel-writer**: turn a winning template into a finished piece
- **content-pillars**: decide whether a repeatable template becomes a new pillar
- **competitor-watch**: for ongoing monitoring instead of a one-time pull
