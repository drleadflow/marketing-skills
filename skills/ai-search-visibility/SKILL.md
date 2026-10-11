---
name: ai-search-visibility
description: "When the user wants their business recommended by ChatGPT, Perplexity, or Google AI answers, or wants to audit a page's readiness to be cited by an AI search system. Also use when they say 'AI search visibility', 'get recommended by ChatGPT', 'show up in AI Overviews', 'AEO', 'GEO', or 'why isn't AI recommending us'. Produces a visibility audit of entity consistency, answer-first structure, schema, and off-site signals, with a prioritized fix list. For the article's on-page writing quality itself, see seo-article."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# AI search visibility

You'll finish with an audit of why (or whether) a business shows up when someone asks an AI system about its category, with a prioritized, concrete fix list. This is SEO for an answer engine, not a separate discipline: the same fundamentals that earn a Google ranking are most of what earns an AI citation.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What question should a stranger be able to ask an AI assistant that this business should get recommended for?
2. Does the business have a website with real crawlable pages (not just a social profile or a single landing page)?
3. Is there an existing Google Business Profile / local listing, and reviews on any platform?

## How to do it

### 1. Check entity consistency first

AI systems (and Google itself) build an understanding of a business as an entity: a name, a category, a location, and a set of facts that should match everywhere the business appears online. Inconsistency here is a common and easy-to-miss failure, precisely because nothing about it looks broken on any one page.

Audit across: the website, Google Business Profile, any directory listings, social bios, and any press mentions.
- **Name**: exactly the same business name everywhere, no "LLC" in one place and not another.
- **Category/description**: the same core description of what the business does and who it's for.
- **Location/service area**: consistent address or service area, no stale old addresses.
- **Contact info**: same phone/email everywhere it's listed.

Fix every mismatch before anything else on this list; it's foundational and cheap to fix.

### 2. Confirm AI crawlers can reach the site

None of the rest of this matters if the crawlers behind these answer engines are blocked before they ever read a page. Check `robots.txt` and the hosting/CDN configuration for each of these, by name, not just a generic "allow all":
- `GPTBot` and `OAI-SearchBot` (OpenAI)
- `ClaudeBot` (Anthropic)
- `PerplexityBot`
- `Google-Extended` (governs Gemini and AI Overviews training/grounding separately from classic `Googlebot`)
- `Bingbot` (Microsoft, and the index ChatGPT's search feature has historically drawn from)

A CDN or security layer (Cloudflare and similar) commonly blocks AI bots by default at the network level, below what `robots.txt` even controls. Check the CDN's bot-management settings directly; a clean `robots.txt` does not guarantee the request ever arrives.

### 3. Register with both major engines, not just Google

- **Google Search Console**: submit the sitemap, confirm indexing status.
- **Bing Webmaster Tools**: register and submit the sitemap here too. Bing's index has fed other assistants' web-search features, so skipping Bing is a common, avoidable gap.
- **IndexNow**: where supported by the CMS or host, push new/updated URLs to Bing and participating engines immediately instead of waiting for a crawl cycle.

### 4. Make pages answer-first

An AI system extracting an answer needs the direct answer near the top of a page, in plain language, not buried after a long intro. This is the same discipline as **seo-article**'s answer-first rule, applied specifically with AI extraction in mind:
- The page's first 2 to 3 sentences should answer the implied question directly.
- Each major section should be understandable on its own if a system extracts just that passage, with named entities (the business name, specific numbers, dates when relevant) rather than vague pronouns referring back to earlier paragraphs.
- Clear, crawlable HTML. If the page relies on JavaScript to render its main content, confirm an AI crawler or search engine can see the rendered text, not just a blank shell.

### 5. Add structured data, but understand what it does and doesn't do

Schema markup (JSON-LD) helps systems parse what a page is and who's behind it. It is a parsing aid, not a ranking trick, and FAQPage markup specifically earns no guaranteed rich result or citation boost on its own.

Minimum useful schema for most local/service businesses:
- `Organization` or `LocalBusiness` schema with name, address, and contact info matching the rest of the entity-consistency check
- `Article` schema with author and publisher on blog content, supporting E-E-A-T (experience, expertise, authority, trust) signals
- Review/aggregate rating schema only if reviews are real and the markup reflects the actual displayed reviews

### 6. Build citation-worthy proof

AI systems favor sources that look citable: named sources, real statistics with a traceable origin, direct quotations used accurately, and visible author/expertise signals. This is the same discipline as **proof-ledger**, pointed outward:
- Author bios with real credentials on anything published under the business's name.
- Statistics cited with their actual source named inline, not "studies show."
- First-hand experience stated plainly ("we tested this ourselves," "in our own clinic") when it's true, since a specific first-hand detail reads as more trustworthy than a generic claim.

### 7. Collect reviews on the platforms that matter for the category

Review volume and recency on relevant platforms (Google, industry-specific review sites, or B2B review platforms depending on the business type) feed both human trust and AI systems' sense of which businesses are operating and well-regarded. Ask every customer who has a good experience, at a consistent point in the customer journey, never only the ones you expect to leave a good review.

### 8. Track which prompts cite the business, on a recurring cadence

Build a simple prompt-tracking sheet and rerun it weekly or monthly:

| Prompt asked | Platform | Date | Business cited? | Which sources were cited instead | Notes |
|---|---|---|---|---|---|
| "[the stranger's question from step 1]" | ChatGPT | [date] | yes/no | [competitor or source names] | [what to fix] |

Ask each target question (from step 1) directly on ChatGPT, Perplexity, and Google's AI answer surface, and log the result. Different AI systems pull from different source mixes, and that mix shifts over time and by query, so this is a recurring check, not a one-time test. If a competitor gets cited and the business doesn't, check whether the competitor simply does steps 1 through 7 better before assuming there's a hidden trick.

## Check it

| Check | Pass condition |
|---|---|
| Entity consistency | Name, category, location, contact match across every surface audited |
| Crawler access | robots.txt and CDN both allow the named AI crawlers, checked individually, not assumed |
| Registered | Google Search Console and Bing Webmaster Tools both show the sitemap submitted |
| Answer-first | Direct answer in the first 2 to 3 sentences of key pages |
| Crawlability | Main content visible without requiring JavaScript rendering an AI crawler may not support |
| Schema | Organization/LocalBusiness and Article schema present and accurate |
| Sourcing | Every stat has a named, traceable source |
| Reviews | Active, recent reviews on at least one relevant platform, collected without incentives |
| Tracking | A prompt-tracking sheet exists and has at least one logged run |

## Rules

- Never fabricate a statistic or a review. Fake signals are both an AI-citation and a reputational risk.
- Never incentivize or selectively request only positive reviews.
- Treat any single vendor's claim about "what the AI algorithm wants" as directional, not final; these systems change fast and the fundamentals (accurate, well-sourced, clearly structured, reachable content) outlast any specific tactic.

## Examples

Fill this template for every audit:

```
AI Search Visibility Audit: [business name]

### Entity consistency
[pass/fail per surface checked, with the exact mismatch if any]

### Crawler access
[robots.txt status for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot]
[CDN/bot-management status]

### Search engine registration
[Google Search Console status] [Bing Webmaster Tools status] [IndexNow, if supported]

### Answer-first and schema
[pass/fail per key page]

### Citation-worthy proof
[gaps: unsourced stats, missing author bios]

### Reviews
[volume, recency, platform]

### Prompt-tracking sheet
[the table from step 8, current run]

### Prioritized fix list
1. [highest-impact fix]
2. ...
```

## Related skills

- **seo-article**: write the actual page content this skill audits for AI readiness
- **local-seo-gbp**: the Google Business Profile and local-listing work that feeds entity consistency directly
- **review-engine**: build the review-collection system referenced in step 7
- **case-study**, **proof-ledger**: supply the citable proof referenced in step 6
