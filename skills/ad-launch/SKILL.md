---
name: ad-launch
description: >
  When the user wants to build and go live with a paid ad campaign (Meta, Google, TikTok,
  or similar) from finished creative and copy. Also use when they say "launch the ads," "set up
  the campaign," "build the ad sets," "go live," or "pre-flight the ads." Always builds paused and
  requires a human approval gate before anything spends real money. For the research and copy that
  feed this, see ad-research, ad-angles-and-copy, and ad-creative-brief. For running a live
  account afterward, see ad-account-audit. For a clinic's version of this with belief-shift and
  awareness-audit gates, see clinic-ad-launch.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad launch

You'll finish with a launch document the business owner has approved, a campaign built
fully paused with every pre-flight box checked, and a four-week workout plan written before a
single dollar goes live.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. You need finished,
compliance-checked copy (**ad-angles-and-copy**) and creative (**ad-creative-brief**) before this
step. Pull these from business-context section 8's "Paid ads targets" table if it's filled in:
**Conversion event the ads optimize toward**, **Target cost per result: excellent**, **Target
cost per result: acceptable**, **Cost per result that triggers a pause**, and **Daily spend
cap**. Ask, at most 3 at a time, whatever of this is still missing:
1. Daily budget and total test window (if no Daily spend cap is on file).
2. The platform's own custom conversion event to optimize toward (never the raw pixel or CTR), if
   no Conversion event the ads optimize toward is on file.
3. Who gives the final go-live approval, and who owns watching for the first replies.
4. For a health or wellness business specifically: check the ad account's current data-source
   category status before assuming any lower-funnel event (a purchase, a lead, a booked
   appointment) is available to optimize toward at all; see step 2's health-specific note below.

## How to do it

### 1. Write the launch document

One page, in this order: offer and destination; who you are talking to (from research); the
angles being tested and why; the creative slate (name, format, family, status); campaign
structure (objective, ad sets, budgets, exclusions, the optimization event); test structure (which
single variable is being isolated, unless this is a full launch testing audience and creative
together); success metrics (a week-1 target cost per result, a kill line, and the true-north
metric, e.g. cost per booked appointment, not cost per click); launch date and hands-off window.

### 2. Daily budget cap and kill/scale rules (mandatory, state before building anything)

- **Daily cap**: state the per-ad-set daily budget and the total daily spend across the campaign
  before building a single entity, matching business-context's **Daily spend cap** if one is on
  file. Warn explicitly if total daily spend exceeds $100/day, or whatever that cap is, and get
  it confirmed before proceeding.
- **Kill rule**: an ad or ad set that spends past business-context's **Cost per result that
  triggers a pause** (or, if that's not on file, roughly 2x the **Target cost per result:
  acceptable**), applied with meaningful spend and not after one click, gets paused. Pause the
  ad, not the whole ad set, unless every ad in it is a loser.
- **Scale rule**: a winner (at or under **Target cost per result: excellent**) gets raised 20 to
  30% every 2 to 3 days, never doubled overnight. Doubling resets the platform's learning phase
  and usually costs more than it gains.
- **Stop rule**: give every test a review date. If a test has not produced enough results to judge
  by that date, extend once with a stated reason or kill it; never let a test run open-ended.
- **Health and wellness advertisers: verify the optimization event is available before
  writing any of the above.** Since early 2025, Meta has restricted health- and
  wellness-classified ad accounts from optimizing toward mid- and lower-funnel standard events
  (purchase, lead, schedule, contact) under a tiered system; a Conversions API event does not
  bypass this. **Check your account's current status** in Events Manager, Data Sources, the
  pixel's Settings tab, "Manage data source categories," before assuming the event in
  business-context's Paid ads targets table is usable. If it's restricted, fall back to
  an available upper-funnel event for optimization and measure the real result offline instead.
  See **ad-policy-check**'s `references/health-wellness-optimization-limits.md` (verified
  October 2026) for the full tier detail and fallback sequence.

### 3. Build, fully paused

Every campaign, ad set, and ad is created paused, named with the same convention as the copy
(`[format]-[hook]-[avatar]-[offer]-[MMDD]`), with `utm_content={{ad.name}}` on every ad so results
report back to the exact creative. **For a health or other sensitive-category business,
`[offer]` is an opaque code, never the treatment or condition name**: `utm_content={{ad.name}}`
puts the literal ad name into every click URL and pixel event, so a treatment name in the name
leaks exactly like one in the lead form would. See `references/naming-and-exclusions.md` for a
worked example of the opaque-code naming and of exclusion alternatives to a patient-list upload.
Platform-side auto-enhancement features that rewrite or auto-crop creative stay off by default;
they drift off-brand and garble on-image text.

### 4. Pre-flight checklist, every box before anything goes live

- [ ] Every entity created PAUSED.
- [ ] Destination returns 200 and a real test submission reaches the CRM or inbox.
- [ ] UTMs present and correct on every ad.
- [ ] Both required sizes exist for every static (feed and story/vertical), each mapped to its
  placement.
- [ ] Budget math matches the launch document exactly ($X/day x N ad sets = total).
- [ ] Optimization event is the real custom conversion, not a raw pixel event or CTR.
- [ ] For a health or wellness account, the account's current data-source category and
  restriction tier were checked in Events Manager, not assumed from a prior launch.
- [ ] Exclusions attached (existing customers, recent leads already in a sales process). **For a
  HIPAA-covered or other health practice, never build this by uploading a patient or customer
  list as a custom audience without legal review and a signed BAA with the ad platform** (most
  platforms won't sign one). A list upload, even of just name/email/phone, discloses protected
  health information to a third party. Alternatives: suppress at the CRM level before the lead
  ever reaches the ad platform, use a server-side event the practice's own system controls, or
  get a legal sign-off on a specific, reviewed data-sharing arrangement before using any audience
  built from the patient list.
- [ ] Naming convention consistent across campaign, ad set, ad, and creative.
- [ ] Copy within platform limits and compliance-checked (**ad-policy-check**, and
  **health-claims-check** for a health business).
- [ ] No condition, treatment, or sensitive category name anywhere in a pixel event, URL, or UTM.

### 5. The human approval gate

Present the full plan and the total daily spend to the business owner. Activate only on an
explicit, specific go, not a general "sounds good" from earlier in the conversation. Activate
campaign, then ad sets, then ads, with a short pause between each so you can catch an error before
it compounds.

### 6. Write the workout plan before launch, so no decision is improvised later

| Week | Hands on | Rule |
|---|---|---|
| 0 (first 72h) | none | learning phase, do not touch |
| 1 | day 4 and day 7 | judge cost per result on the real conversion; hold under target; pause the ad, not the ad set, past the kill line |
| 2 | twice | kill the bottom half by cost per result; raise the winner 20 to 30%, never double |
| 3 | twice | refresh: 2 to 3 new variants off the winning family, not small tweaks |
| 4 | retro | full scorecard: spend, results, cost per result vs. target, best and worst creative, what becomes a reusable pattern |

Standing rules: refresh a creative before its frequency passes about 3x; a mature ad whose
click-through rate (link clicks, not all clicks) has dropped well below its own first-week
baseline is showing fatigue, not a budget problem. There is no universal CTR number that means
"fatigued" across accounts and categories; the 2.5% often quoted online is a starting point to
sanity-check against your own account's history, not a line to apply blind. Always keep one new
test queued so a single campaign is never carrying the whole account.

## Check it

- [ ] Launch document has an explicit approval line with a name and date.
- [ ] Daily cap and kill/scale rules are written down, not implied.
- [ ] Every pre-flight box above is checked, not assumed.
- [ ] Workout plan exists with week 1 through 4 decisions already written.
- [ ] Nothing was activated without the owner's explicit go-ahead for that specific launch.

## Rules

- Never activate anything without an explicit, specific approval for that batch. General approval
  of the campaign idea earlier in the conversation is not approval to spend money right now.
- Never skip the pre-flight checklist to save time, even under a deadline.
- Never double a budget overnight; always step scale.
- One person writes to a given ad account per day; check for a colleague's concurrent change
  before you write anything.
- Log every entity ID and every change in a dated change log, so any decision can be reverted.

## Related skills

- **ad-research**, **ad-angles-and-copy**, **ad-creative-brief**: the inputs this skill assembles
  and ships.
- **ad-policy-check**: must pass before any copy in this launch goes live.
- **ad-account-audit**: the recurring job that follows after launch (scale, hold, refresh, kill).
- **clinic-ad-launch**: the health-practice version with belief-shift and awareness-audit gates
  added before this phase.
