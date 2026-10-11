---
name: ad-research
description: >
  When the user wants to research paid ads before writing or launching any: pull competitor ads
  from the Meta Ad Library, read their own account history, and collect customer language, so the
  ad copy comes from evidence instead of guessing. Also use when they say "research our ads",
  "what's working in this category", "competitor ads", "ad library research", "find winning
  angles", or "what should our ads say." For turning research into angles and copy, see
  ad-angles-and-copy. For a live-account read instead of pre-launch research, see
  ad-account-audit. For a clinic running this as a structured multi-day launch, see
  clinic-ad-launch.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad research

You'll finish with a research brief: who you are talking to, what they already believe, what
is already running and winning in your category, your own proven ads, and ten or more lines of
real customer language. Every later ad traces back to a line in this file.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
`business-context.md` is missing, offer to run **business-context** first, or ask only the
questions below that it would otherwise answer.

Ask, at most 3 at a time, whatever of this you do not already have:
1. The offer being advertised: service, price, promise, booking flow.
2. The destination: landing page URL, lead form, or direct booking link.
3. Three to ten competitors or category leaders already running ads (names, or let the Ad Library
   search find them).

## How to do it

Research is reading what already runs, not brainstorming. Work in this order.

1. **Your own account history, if any.** Pull the last 90 days at ad level. Rank by cost per real
   conversion (the booked call or sale, not clicks). The ad carrying most of the spend at the best
   cost is your starting template: read it element by element (headline, offer shape, hook, proof,
   CTA) and treat that layout as proven. Note which siblings never got delivery: that is evidence
   the format wasn't tested, not that the details failed.
2. **Meta Ad Library, three sweeps.** Search `facebook.com/ads/library` with
   `active_status=active&country=US&q="<offer keyword>"`, sorted by longevity, not recency. Sweep
   (a) the offer keyword in your metro or niche, (b) the 3 to 5 biggest national or chain
   advertisers in your category, (c) adjacent offers that sell to the same buyer. Log at least 20
   ads: advertiser, hook, offer shape, format, CTA, destination type, and days running. **Days
   running is the best free signal available without the advertiser's own numbers**: an ad still
   live after 60+ days is a reasonable sign it's working for that advertiser, though you can't
   see their actual cost or conversion rate, so treat it as a signal worth noting, not proof
   you'd bet a budget on by itself (see the Rules section below).
3. **Customer language, minimum 10 lines, verbatim.** Pull from your own inbox, reviews, call
   notes, or intake forms. If this is a new offer with no history, use Reddit threads, review
   sites, or competitor ad comments for the same problem, then replace those with real inbox
   lines once you have them. Never paraphrase; the buyer's exact nouns are the point (see
   `references/voice-of-customer.md`).
4. **The open lane.** Across what you logged, note which angle, price shape, or format nobody in
   your space is running. That gap is usually worth testing first, because the crowded lane is
   already expensive.

## Check it

Before calling research done, check:
- [ ] 20 or more competitor ads logged with days running noted. If you have fewer than 20 or no
  longevity data, this is not done yet.
- [ ] 10 or more lines of real customer language, verbatim, sourced (not invented).
- [ ] At least one "open lane" named: an angle, price shape, or format with low competition.
- [ ] A reader who has never seen your offer could write a first draft of the ads from this file
  alone. If they could not, go back and fill the gap.

## Rules

- Never invent a competitor's results, CTR, or booking rate. You can only see that their ad is
  running, not that it is profitable; longevity is a signal, not proof.
- Never treat a competitor's claims as safe just because their ad is live. Platform approval is
  not legal or regulatory clearance; run claims through **ad-policy-check** (and
  **health-claims-check** for a health business) before copying any claim structure.
- Borrow structure, never wording. Any phrase of five or more words lifted from a competitor ad
  fails the copy gate downstream.
- If a claim in `.agents/proof-ledger.md` is required to support an angle and it is not there, mark
  it `[NEEDS PROOF: ...]` instead of inventing it.

## Related skills

- **ad-angles-and-copy**: turn this research into angles and written copy.
- **ad-account-audit**: read a live account's own performance instead of pre-launch research.
- **ad-policy-check**: check any claim or structure you plan to reuse before it goes near copy.
- **clinic-ad-launch**: runs this research as phase 1 of a structured multi-day clinic launch.
