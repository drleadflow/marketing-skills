---
name: google-ads
description: >
  When a service business (a clinic, a trade, a local professional, an agency) wants to research,
  build, or launch a Google Ads search campaign or a Local Services Ads profile. Also use when
  they say "Google Ads," "search ads," "Local Services Ads," "LSA," "run search campaigns," or
  "why is my Google Ads account not converting." Always builds paused and requires a human
  approval gate before anything spends real money. For the Meta/paid-social version of research,
  copy, and launch, see ad-research, ad-angles-and-copy, ad-creative-brief, and ad-launch. For the
  tracking setup this depends on, see tracking-and-attribution. For running a live account
  afterward, see ad-account-audit's method, applied to Google Ads's own metrics.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Google Ads

You'll finish with a Google Ads search campaign (or a Local Services Ads profile set up
correctly) built on real intent keywords, with negatives, call and lead assets, a daily budget
cap, kill/scale rules, and a weekly search-terms review habit, built fully paused until the
business owner explicitly approves it.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. You need a working
conversion event before this is worth building; if **tracking-and-attribution** hasn't been run,
run it first or confirm an equivalent conversion source already exists. Ask, at most 3 at a time:
1. What is the real conversion (a call, a booked appointment, a form submission), and is it
   imported into Google Ads as a verified conversion action, not just counted as a click?
2. Daily budget and the business owner's stated spend ceiling.
3. Is this a local service with a physical service area (a candidate for Local Services Ads) or
   a business serving customers anywhere?

## How to do it

### 1. Build intent keyword themes, not a keyword list

Group keywords by the buyer's actual intent, not alphabetically or by service name alone:
- **Ready-to-book**: "<service> near me," "emergency <service>," "<service> cost." These convert
  fastest and cost the most per click; they're worth the premium.
- **Comparison**: "<service> vs <alternative>," "best <service> in <city>." Mid-funnel; good for
  a landing page that argues the comparison honestly.
- **Research**: "what is <service>," "how does <service> work." Cheap clicks, low intent; use
  sparingly and only with a content-forward landing page, never the booking page.
- Pull real search phrasing from **ad-research**'s customer-language step if it exists; the
  buyer's own words convert better than the business's internal service names.

### 2. Pick match types deliberately

- **Exact match** `[like this]` for the highest-intent, proven-converting terms; tightest
  control, least reach.
  - **Phrase match** `"like this"` for the bulk of the campaign; catches real variations while
  keeping some control over intent.
- Avoid broad match until the account has enough conversion history to let Google's automated
  bidding use it safely; broad match on a new account with no conversion data burns budget on
  loosely related searches.
- One ad group per intent theme, not one ad group per keyword; keep it small enough that each ad
  group's ads can speak directly to that theme's intent.

### 3. Build the negative keyword list before launch, not after

Every campaign needs negatives before it spends a dollar: competitor brand names (unless
deliberately bidding on them, which is its own decision with the business owner), "free," "jobs,"
"DIY," "how to do it yourself," and any service the business explicitly doesn't offer. See
`references/negative-keywords-starter.md` for a fuller starter list and a worked example of the
weekly review catching waste early. Review and add to this list every week (see the
search-terms review below); a negative list built once at launch and never touched again stops
doing its job within a month.

### 4. Call and lead assets

- **Call asset**: a tracked phone number attached to a responsive search ad, depending on the
  business's capacity to answer during ad hours. If the business can't reliably answer calls
  fast, a call asset without a real answering plan wastes the click. **Call ads (formerly
  "call-only ads") are being phased out**: Google stopped allowing new call ads starting February
  2026, and existing ones stop getting impressions by February 2027 (verified via web search,
  October 2026). Build with a call asset on a responsive search ad from the start rather than a
  standalone call ad, so there's nothing to migrate later.
- **Lead form asset**: usable for a straightforward, low-commitment ask (a quote request, a
  callback). Never for a high-trust or clinical offer where a real conversation needs to happen
  before any commitment; route those to a page with a booking calendar instead.
- **Sitelink and callout assets**: real, specific, and each pointing somewhere useful, never
  generic filler links just to fill the ad's visual space.

### 5. Local Services Ads (LSA), when the business qualifies

LSA is a different product from standard search ads: pay-per-lead instead of pay-per-click, a
**Google Verified** badge, and background-check and license verification specific to the
category. As of October 20, 2025, Google unified the old "Google Guaranteed," "Google Screened,"
and "License Verified by Google" badges into this single Google Verified badge across every
industry; it confirms license, insurance, and background-check status, and no longer carries a
money-back guarantee the way the old Google Guaranteed badge did (verified via web search,
October 2026). Basics:
- Verify the business qualifies for the category (licensing, insurance, background check) before
  promising a launch date; verification can take days to weeks and is out of the agency's or the
  skill's control.
- Keep the Google Business Profile's category, hours, and service area accurate; LSA pulls from
  it directly, and a mismatch between the profile and reality causes bad lead delivery.
- LSA leads come in as calls or messages through Google's own system. Have whoever answers
  rate each lead and mark its status (booked, not booked) inside Google's interface. **This is
  feedback for Google's ranking, not a billing correction.** Google retired manual lead disputes
  in 2024: credits for invalid leads (spam, wrong number, out of scope) are now applied
  automatically, usually within about 30 days, and rating a lead is the only input you have.
  Health care categories get no lead credits at all. Verify the current credit policy in
  Google's LSA help center before telling a client what to expect (checked October 2026).
- LSA and standard search can run at the same time for the same business; they don't compete for
  the same inventory the way two search campaigns would.

### 6. Import the real conversion, not a proxy, except for a health business

Import the actual booked-appointment or closed-sale event from the CRM or call-tracking system as
an **offline conversion import**, not just "form submitted" or "call connected." A call that
connects for eight seconds and goes nowhere is not the same conversion as a booked appointment;
optimizing toward the wrong one teaches the algorithm to find more of the wrong thing.

**For a HIPAA-covered or other health business, this rule has a hard exception.** Neither Google
Ads nor Google Analytics will sign a BAA (verified via web search, October 2026), so importing
an identified event like "new-patient exam booked and attended" is a disclosure of protected
health information to a vendor with no HIPAA agreement in place, not a tracking choice. This is
the same kind of disclosure at issue in the Kaiser Permanente (up to $47.5 million) and Sutter
Health ($21.5 million) settlements over website, portal and app tracking technologies. For a health business:
- Do not import a booked, attended, or any other identified clinical conversion event into
  Google Ads or GA4, hashed or not; a hashed email plus "booked at this clinic" is still PHI.
- Instead, use only non-identifying, aggregated signals (a daily or weekly count of bookings with
  no identifier attached) or no conversion import at all, optimizing toward an available
  upper-funnel event (page view, a non-clinical lead form) instead.
- If identified conversion data needs to reach an ad platform for a specific business reason,
  that requires a HIPAA-compliant server-side tool willing to sign a BAA, plus legal review
  before it's built, not a default this skill enables on its own.
- Measure the real booked/attended result inside the practice's own system, offline, and judge
  the campaign there rather than feeding it back into Google's optimization loop.
- **Never build a remarketing list or personalized audience based on a health condition.**
  Google's own policy bars ad personalization tied to a chronic condition, disability, physical
  or mental health condition, or an invasive or cosmetic procedure, which rules out Customer
  Match, data segments, audience expansion, lookalike and custom segments, and custom affinity
  built from site visitors to a condition-specific page (verified via web search, October 2026;
  Google's own example is that a mental-health therapy page's visitors cannot be retargeted).
  This is a platform rule, not a judgment call: build the campaign without a remarketing list for
  these pages rather than testing whether Google catches it.

### 7. Daily budget cap and kill/scale rules (mandatory, state before building anything)

- **Daily cap, understood as monthly-safe, not daily-exact.** State the daily budget and warn
  explicitly if it exceeds $100/day or whatever ceiling the business owner has set, and get it
  confirmed before building. Google can spend up to 2x the daily budget on any single day
  (overdelivery, to make up for slower days), but will never charge more over a month than 30.4x
  the daily budget (the monthly charging cap; verified via web search, October 2026). Tell the
  business owner this plainly: a $50/day budget can show a $100 day, but the monthly bill won't
  exceed about $1,520. Size the stated "daily cap" as a number the owner is fine seeing spike on
  a given day, not a number that must never be crossed.
- **Kill rule**: a keyword or ad group that spends past roughly 2x the target cost-per-result
  with meaningful spend and no results gets paused at the keyword or ad group level, not the
  whole campaign, unless the whole campaign is underperforming.
- **Scale rule**: raise a winning campaign's budget 20 to 30% every few days, never double
  overnight; Google's own learning period resets on a large budget jump the same way Meta's does.
- **Stop rule**: give every new campaign a review date (commonly 2 to 3 weeks, since search
  intent data accumulates slower per click than social feed impressions). Extend once with a
  stated reason or kill it; never let it run open-ended with no review date.

### 8. Build, fully paused, with the full pre-flight

Every campaign, ad group, and ad is created paused. Pre-flight before activating:
- [ ] Every entity created paused.
- [ ] The real conversion is imported and verified with a real test event, not assumed, and for
  a health business the imported event is aggregated/non-identifying or doesn't exist at all,
  never an identified booked/attended event.
- [ ] Negative keyword list built, not left for later.
- [ ] Destination page matches the ad's claim and loads correctly on mobile.
- [ ] Call tracking number live and tested.
- [ ] Budget math matches what was stated to the business owner.
- [ ] Copy compliance-checked (**ad-policy-check**'s method applies to Google's ad standards too,
  though the specific policy pages differ from Meta's; verify against Google's own current ad
  policies, not Meta's).

### 9. The human approval gate

Present the full plan and daily spend to the business owner. Activate only on an explicit,
specific go-ahead for this launch, not a general "sounds good" from earlier in the conversation.

## Run it on a schedule

**Weekly search-terms review** (mandatory, not optional): pull the actual search terms that
triggered an ad this week. Add any irrelevant or clearly non-buyer term to the negative list.
Promote any strong, recurring search term that isn't already its own keyword into the account as
its own exact-match keyword. This single habit, done weekly, is what keeps a Google Ads account's
cost-per-result from drifting up over time; skipping it for a month is the most common reason a
previously healthy account quietly gets worse. **Cadence**: weekly. **Stop condition**: none
while the campaign has active spend. **State recorded between runs**: the negative list itself
and a dated log of terms added or promoted, so a rerun doesn't re-add something already handled.

## Check it

- [ ] Keywords are grouped by intent theme, not alphabetically or by service name alone.
- [ ] Match types are deliberate (exact and phrase as the default, broad only with enough
  conversion history to support it).
- [ ] A negative keyword list exists before launch, not added later.
- [ ] The imported conversion is the real result (booked, closed), not a proxy like "call
  connected" or "form submitted," unless the business is health-related, in which case no
  identified booked/attended event is imported at all (see the health exception above).
- [ ] No remarketing list or audience segment was built from visitors to a health-condition page.
- [ ] Daily cap is stated with the owner understanding Google may spend up to 2x it on a given
  day, bounded by the 30.4x-daily monthly charging cap; kill rule, scale rule, and stop rule are
  all written down too, not implied.
- [ ] If this is an LSA profile, the Google Business Profile's category, hours, and service area
  were checked against reality, not assumed current, and whoever answers leads knows rating a
  lead is feedback for ranking, and that credits are automatic (none for health care categories).
- [ ] Nothing activated without the business owner's explicit, specific go-ahead.

## Rules

- Never activate anything without an explicit, specific approval for that batch.
- Never optimize toward a proxy conversion when the real one (booked, closed) can be imported
  instead, except for a health business, where no identified clinical conversion is imported at
  all without a BAA and legal review (see the health exception in step 6).
- Never build a remarketing list or audience segment from a health-condition page's visitors.
- Never double a budget overnight, and never promise an owner a "daily cap" will never be
  crossed on a single day; it's a monthly-safe number, not a daily-exact one.
- Never promise an LSA launch date before the category's verification is confirmed.
- Never tell a business that rating or marking an LSA lead corrects a charge. Credits are
  automatic, there is no manual dispute flow, and health care categories get no credits.
- Any claim in the ad copy still passes **ad-policy-check**'s method and, for a health business,
  **health-claims-check**.

## Related skills

- **ad-research**, **ad-angles-and-copy**, **ad-creative-brief**: the Meta/paid-social
  equivalents of research and copy; the intent-theme and compliance methods transfer, the
  platform mechanics don't.
- **tracking-and-attribution**: builds the conversion event this skill imports.
- **ad-account-audit**: the recurring optimization method, applied here to Google Ads's own
  metrics and interface.
- **ad-policy-check**: the policy-check method, run against Google's current ad policies.
- **local-seo-gbp**: the Google Business Profile accuracy this skill's LSA section depends on.
- **health-claims-check**: the stricter gate for any health-related business running this.

## Examples

Fictional business "Cedarbrook Family Chiropractic," a new-patient exam campaign, a health
business applying the step 6 exception. Intent themes: ready-to-book ("chiropractor near me,"
"back pain chiropractor cost"), comparison ("chiropractor vs physical therapy for back pain"),
research ("what does a chiropractor do"), each its own ad group. Negatives added at launch:
"chiropractic school," "jobs," "equipment for sale," plus competitor brand names after a
conversation with the owner about whether to bid on them (decided no, for now). Daily budget
$60, understood by the owner as a number that could show an $80 to $100 day under Google's
overdelivery rules without exceeding the monthly cap. Kill line at 2x the practice's target cost
per click on the ready-to-book ad group (the best available signal without an imported
conversion). **No identified conversion is imported**: the practice did not have a
HIPAA-compliant server-side tool or legal sign-off in place, so the campaign optimizes toward
landing-page views and the lead form instead, and the real new-patient-exam booking rate is
measured offline, inside the practice's own scheduling system, on a weekly cadence, never fed
back to Google. Review date set for 3 weeks out, judged on that offline number.

Fictional business "Maplecourt Roofing," a roof-inspection campaign, a non-health business with
no PHI exception to apply. Same intent-theme structure. Daily budget $80. The real conversion
imported is "roof inspection booked and completed," pulled from the practice's own scheduling
system as an identified offline conversion import, which is the normal, preferred pattern for a
non-health business: optimize toward the real result, not a proxy like "call connected."
