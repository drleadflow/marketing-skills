---
name: seo-article
description: "When the user wants a full blog article written to rank in search and read as human, not AI-generated. Also use when they say 'write a blog post', 'SEO article', 'write an article about X', or 'this reads like AI, fix it'. Produces a complete article with answer-first structure, proper heading hierarchy, sourced claims, and a pass through the AI-tell checklist. For getting that article recommended inside ChatGPT/Perplexity/AI Overviews specifically, see ai-search-visibility. For a short social piece instead, see short-form-script, carousel-writer, or newsletter."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# SEO article

You'll finish with a complete article: answer-first opening, proper H1 to H3 heading hierarchy, every factual claim sourced or flagged, and a pass through the AI-tell checklist so it reads like a person wrote it.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What's the exact question or topic this article answers? (Not a broad subject; the specific question a real searcher types.)
2. Who's searching for this, and what do they already know? (Beginner needs definitions; practitioner needs depth and doesn't need the basics re-explained.)
3. Is there a real stat, source, or first-hand experience to cite, or does research need to happen first?

## How to do it

### 1. Answer the question in the first 2 to 3 sentences

Don't warm up with context, history, or "in this article we'll cover." State the direct answer to the searcher's question immediately, then spend the rest of the article supporting, qualifying, and expanding it. This serves both human skimmers and AI systems that extract a direct answer from the top of a page.

### 2. Build the heading hierarchy before writing body copy

- H1: the article title, matches the core question closely enough that a searcher recognizes their query
- H2: each major sub-question or section
- H3: supporting breakdowns inside an H2, never skip a level (no H1 straight to H3)

Each heading should be understandable on its own if someone only reads the headings and skips the body.

### 3. Source every factual claim

- Real statistics, named studies, or named sources only. No "studies show" or "experts say" without naming them.
- Tier the sources: primary research and official data first, established industry publications second, secondary blogs and aggregator sites last and only when nothing better exists.
- A claim with no source and no first-hand experience behind it gets cut or flagged `[NEEDS PROOF: ...]`, never stated as fact.

### 4. Write for comprehension, not word count

No minimum word count. Write until the question is answered, then stop. A padded 2,000-word article that could have been 600 words hurts both the reader and the ranking; search systems increasingly reward usefulness over length.

Use tables, numbered steps, or short lists only where they clarify something a paragraph would make harder to follow. Don't force structure onto content that's naturally narrative.

### 5. Run the AI-tell checklist before calling it done

See `references/ai-tells.md` for the full catalog. The two overriding principles:
- **Frequency, not prohibition.** One em dash is invisible; a dozen is a fingerprint. Flag clusters and habits, not single instances.
- **A real, intentional voice wins.** If the business's actual voice uses fragments or rhetorical questions on purpose, keep them; these rules target reflexes nobody chose, not deliberate style.

### 6. Check on-page basics

- Title tag and meta description written separately from the H1 (they can repeat it, but write them for the search results snippet specifically)
- Internal links to 2 to 4 related pieces, not keyword-stuffed anchor text
- Image alt text that's descriptive, not keyword-stuffed
- No heading skips, no duplicate H1s

## Check it

Score before delivering:

| Check | Pass condition |
|---|---|
| Answer-first | Direct answer appears in the first 2 to 3 sentences |
| Heading hierarchy | H1 -> H2 -> H3, no skipped levels |
| Sourcing | Every stat/claim named and sourced, or marked `[NEEDS PROOF: ...]` |
| AI-tell pass | No clustered patterns from `references/ai-tells.md` |
| Length fit | Length matches the depth the question needs, no padding |
| Self-promotion | Max one brand mention outside an author-bio context |
| Proof citation | Finished article lists `Proof used: P-xxx, P-xxx` for every approved ledger claim relied on, or "Proof used: none" |

## Rules

- Never fabricate a statistic, study, or source. This is a zero-tolerance rule, not a style preference.
- Never cite a content mill or an unvetted aggregator as a factual source.
- Health, money, legal claims follow **health-claims-check** when the business is health-related.
- No real client names, patient stories, or screenshots in anything meant for this repo's examples; use clearly fictional businesses.

## Related skills

- **ai-search-visibility**: make this same article recommendable inside AI answer engines, not just Google
- **outlier-research**: check what's already ranking/performing for this topic before writing
- **content-repurposing**: turn a finished article into shorter social derivatives
