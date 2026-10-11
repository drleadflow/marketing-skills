---
name: local-seo-gbp
description: "When the user wants to set up or improve their Google Business Profile, rank higher in the local map pack, or build local landing pages for a service area. Also use when they say 'Google Business Profile', 'GBP', 'Google Maps listing', 'local SEO', 'show up on the map', 'NAP consistency', or 'service area pages'. Produces a GBP setup checklist, a weekly-post template, a review-velocity plan, and a local landing page template, with a fictional example. For getting cited inside AI answer engines specifically, see ai-search-visibility. For the broader content calendar this feeds, see content-pillars."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Local SEO and Google Business Profile

You'll finish with a complete Google Business Profile setup checklist, a weekly-post template, a review-velocity plan, a list of real customer questions answered on the website (since Google removed the public GBP Q&A box in December 2025), a citations/NAP consistency audit, and a local landing page template for each service area, ready to publish.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What's the exact business name, address (or service area if there's no storefront), and phone number, as they should appear everywhere?
2. What's the primary category this business should rank for, and the 2 or 3 services that matter most?
3. Which cities or neighborhoods does this business serve? (Don't claim a service area the business can't really reach.)

## How to do it

### 1. Get the profile foundation right

This is the part that's cheap to fix and expensive to get wrong, since it feeds every other local signal:
- **Name**: the real, legal operating name, exactly as it appears on the storefront, invoices, and website. No keyword-stuffing the name field ("Lindqvist Heating & Air - Best HVAC Furnace Repair Near Me" violates Google's guidelines and risks a suspension).
- **Address or service area**: a storefront business gets a real address; a service-area business (most home services, mobile businesses) hides the address and lists the actual cities/zip codes served instead. Don't fake a storefront address to look more local.
- **Primary category**: the single category that best matches the main business, picked from Google's existing list, not invented. Secondary categories add real additional services, not every tangentially related term.
- **Hours**: real hours, including holiday hours, kept current. Wrong hours are a top reason a profile loses trust.
- **Phone and website**: a direct number that's answered, and a URL to the page most relevant to the business, not always the homepage.

### 2. Fill out services and attributes completely

An incomplete profile looks less trustworthy to both searchers and the ranking system. List every real service as its own named entry with a short description, not a single vague catchall line. Fill every attribute that's true (wheelchair accessible, free consultations, by-appointment-only, and so on); leave false ones unchecked.

### 3. Build a real photo set, and keep it current

- At least one logo, one cover photo, and real photos of the team, the work, and the location (interior/exterior/vehicles for a service business).
- Add new photos on a schedule (monthly is a reasonable minimum), since a profile with no recent photo activity reads as inactive.
- Never use stock photos or AI-generated people presented as the actual team or actual work; that's deceptive and a specific risk flagged in **ad-creative-brief**'s compliance rules.

### 4. Post weekly, using a real update, not filler

GBP posts function like a tiny feed attached to the listing. A weekly cadence signals an active business. See `references/post-templates.md` for the format; each post needs a real reason to exist: an offer, a tip tied to a real question customers ask, a photo from a real job, or a seasonal note. Never invent an urgency or a discount that isn't real.

### 5. Build review velocity, not just review count

A profile with 40 reviews all from 3 years ago looks dead; a profile with steady recent reviews looks active and trustworthy.
- Ask every customer who had a good experience, at the same point in the journey every time (right after the job/visit, not just the ones expected to say yes).
- Never incentivize a review (a discount, a gift, a raffle entry) and never selectively request only from customers you expect to rate well; both violate platform policy and most review-site terms.
- Respond to every review, positive and negative, within a few days. A thoughtful response to a negative review often does more for trust than the review itself. See **review-engine** for the full response framework and, for a health business, the HIPAA-safe reply pattern that avoids confirming a patient relationship.

### 6. Feed the AI answer feature that replaced Q&A

Google confirmed on December 3, 2025 that it removed the public Questions & Answers section from Business Profiles and Maps, after cutting off the Q&A API on November 3, 2025. In its place, Maps now answers searchers directly through an AI feature (built on Gemini) that drafts its reply from the business's website, reviews, and listing details rather than from anything the business or a customer posted as a question. There's no box left to type a seeded question and answer into.

The practical shift: instead of writing the 5 to 8 common questions directly into a Q&A box, make sure the answers to those same questions live somewhere the AI answer feature actually pulls from.
- Answer the real questions customers ask before booking (pricing basics, service area, response time, what's included) directly on the website, in plain, specific language, the same answer-first discipline **seo-article** and **ai-search-visibility** use for AI citation generally.
- Keep review responses specific and accurate, since reviews are one of the sources this feature draws on.
- Re-check this step periodically; Google has moved fast on this change and may adjust the feature further. Confirm the current state before telling a client Q&A no longer exists.

### 7. Fix citations and NAP consistency across the web

NAP (name, address, phone) has to match exactly across every place the business is listed: the website footer, the GBP profile, major directories (the ones that matter for the category and country), and any industry-specific directories. A mismatched suite number or an old phone number still showing on one directory actively hurts the exact-match signal the ranking system looks for. Audit the top 10 to 15 directories the business appears on and fix every mismatch; don't try to list on every directory that exists, since volume without accuracy doesn't help.

### 8. Build a local landing page per real service area

For a business serving multiple cities or neighborhoods, build one page per area rather than one generic "service area" page. See `references/local-page-template.md`. Each page needs real, area-specific content: the actual neighborhoods covered, any location-specific detail (permit requirements, common issues in that climate/area), and a real local proof point if one exists in the ledger. A templated page with only the city name swapped in reads as thin, duplicate content to both searchers and ranking systems; the content has to differ by more than the place name.

## Check it

- [ ] Name, address/service area, and phone match exactly across the website, GBP, and every directory audited
- [ ] Primary category is a real match, not the most competitive one available
- [ ] Every real service has its own named entry with a description
- [ ] At least one new photo added in the last 30 days
- [ ] A GBP post went out in the last 7 days, tied to something real
- [ ] A review request goes out at a consistent point in the customer journey, with no incentive attached
- [ ] Every review (positive and negative) has a response within a few days
- [ ] The 5 to 8 real customer questions are answered directly on the website (not in a GBP Q&A box, which Google removed in December 2025)
- [ ] Each local landing page has area-specific content beyond a swapped city name

## Rules

- Never fabricate a storefront address for a service-area business, and never use a PO box or virtual office as a physical address; both violate GBP guidelines and risk suspension.
- Never incentivize reviews or request them only from customers expected to rate well.
- Never present a stock photo or an AI-generated person as the real team, location, or work.
- Health, money, legal claims on any local page follow **health-claims-check** when the business is health-related.
- Don't claim a service area the business can't realistically and legally serve.

## Examples

See `references/example.md` for a fully worked fictional GBP setup and local landing page (home-services company).

## Related skills

- **ai-search-visibility**: the entity-consistency and crawler-access work this skill's NAP audit feeds directly
- **review-engine**: the full review-response framework referenced in step 5
- **landing-page**: general landing page method this skill's local pages build on
- **content-pillars**: where weekly GBP posts fit into the broader posting calendar
