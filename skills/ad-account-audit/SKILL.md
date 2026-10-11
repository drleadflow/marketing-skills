---
name: ad-account-audit
description: >
  When the user wants to review a live paid-ad account and decide what to scale, hold, refresh, or
  kill, on a recurring cadence. Also use when they say "optimize my ads," "weekly ad review,"
  "what should I cut," "ad account audit," "scale my ads," or "why are my ads tanking." Needs a
  live account with spend and a working conversion event. For researching before a launch instead
  of auditing a live one, see ad-research. For the launch and pre-flight process itself, see
  ad-launch.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad account audit

You'll finish with a dated decision for every active ad set and ad: scale, hold, refresh,
or kill, backed by the numbers, with every change logged so it can be reverted.

## Before you start

Read `.agents/business-context.md` if it exists. Section 8's "Paid ads targets" table carries
**Conversion event the ads optimize toward**, **Target cost per result: excellent**, **Target
cost per result: acceptable**, **Cost per result that triggers a pause**, and **Daily spend
cap**, if they've been recorded there; section 10 (Constraints) carries any claim or platform
limit relevant to a refresh. If business-context is missing, offer to run **business-context**
first. Ask, if not already known:
1. What is the real conversion you judge winners on (a booked call, a sale, a qualified lead), and
   is it tracked reliably right now? (This is business-context's Conversion event field, if on
   file.)
2. What are the Target cost per result: excellent and acceptable bands for this offer, if not
   already on file?
3. How far back should this pull (default: last 7 days)?
4. For a health or wellness account: has the account's current Meta data-source category and
   restriction tier been checked recently? (See step 1's health-specific note below; this changes
   which conversion event is even available to judge against.)

If the conversion event is not reliably tracked, say so and stop; a decision made on raw clicks or
an unverified pixel is a guess, not an audit.

## How to do it

### 1. Check tracking health before trusting any number

Do this first, every time, not just on the first audit. A decision built on broken tracking is
confidently wrong, which is worse than no decision:
- Event match quality (or the platform's equivalent signal-quality score) hasn't dropped since
  last audit. A drop means fewer conversions are being matched to a real person, which makes
  cost-per-result look worse than it is, or hides a real problem behind noise.
- If a server-side conversions API is in use, check for duplicate events against the browser
  pixel (deduplication). Undeduped events double-count conversions and make everything look
  cheaper than it is.
- The conversion event fired a real, verifiable result in the last 24 to 48 hours (a true test
  submission, not just "the dashboard shows a number").

If tracking health has degraded, fix that before making any scale, kill, or budget call; numbers
pulled under broken tracking get a note in the report, not a decision.

**For a health or wellness account specifically**, also check the account's current data-source
category and restriction tier before trusting any cost-per-result number. Since early 2025, Meta
has restricted health- and wellness-classified accounts from optimizing toward (and in some
tiers, even seeing) mid- and lower-funnel standard events; if the account moved tiers since the
last audit, the conversion event this audit is judging against may have silently changed or
stopped reporting. Check Events Manager, Data Sources, the pixel's Settings tab, "Manage data
source categories," rather than assuming last cycle's status still holds. See
**ad-policy-check**'s `references/health-wellness-optimization-limits.md` (verified October
2026) for the full tier detail.

### 2. Pull performance, broken down

Default window: last 7 days. Per ad set and per ad, compute: spend, count and value of the real
conversion, cost per result, return on spend if there is a dollar value, frequency, click-through
rate (link clicks, specify which). Then break the same numbers down by **placement** (feed,
story, reels, audience network, etc.) and by **creative**, not just by ad set; a losing ad set
average can hide one placement or one creative that's fine. Note whether the account is
ad-set budgeted or campaign budgeted, because budget moves at whichever level holds the budget.

### 3. Classify every entity

| Class | Rule |
|---|---|
| Winner | Meets or beats **Target cost per result: excellent** AND has enough results to trust (roughly 10+) |
| Watch | Profitable direction but too little data yet; hold, let it gather more |
| Loser | Spent past **Cost per result that triggers a pause** (or, absent that field, roughly 2x **Target cost per result: acceptable**) with zero or near-zero results |
| Fatigued | Frequency climbing, and this specific ad's own click-through rate has dropped well below its own first-week baseline, with cost per result climbing at the same time. There is no universal CTR percentage that means "fatigued"; judge each ad against its own history and this account's own baseline, not a number borrowed from another account or category. |

### 4. Apply tiered approval gates

- **Safe, single confirmation**: pausing a clear zero-result loser; refreshing a fatigued
  creative.
- **Moderate, per-item confirmation**: budget changes within plus or minus 30%; pausing a
  marginal ad set.
- **Aggressive, explicit "yes, scale" required**: budget increases over 30%; duplicating a winner
  into a new ad set. Scale in steps (20 to 30% every 2 to 3 days), never double overnight.

### 5. Execute and log

Present the plan grouped by tier with the numbers behind each line. Get approval at the matching
gate. Execute with rate limiting between writes (a couple of seconds). Log every change to a
change log: timestamp, entity, before, after, and the reason, so any change can be reverted and so
next cycle can grade whether it worked.

### 6. Give new entities their learning phase

Never judge or cut an entity inside its first 48 to 72 hours; that is the platform's learning
phase, and early data there is noise. One major change per entity per cycle; thrashing (change,
re-change, re-change) produces worse results than leaving it alone.

### 7. Write it up

Every audit produces a short, dated write-up, not just actions taken silently in the ad manager:
tracking health check result; the period covered; a table of every entity with its class, the
numbers behind the class, and the decision; the change log entries this run added; and what's
queued for next cycle (a refresh in progress, a test still gathering data). See
`references/weekly-audit-template.md` for the exact layout and a worked example.

## Run it on a schedule

**Cadence**: weekly by default; twice a week for an account spending enough that a week of a
losing ad set is real money. **Stop condition**: none while the account has active spend; this
is an ongoing job, not a one-time task. **State recorded between runs**: the change log (so a
re-run doesn't re-propose the same change or re-scale something already scaled this week) and
the last tracking-health check result. Each run reads the prior change log before proposing new
actions, so scaling doesn't compound past the step limits in the rules below.

## Check it

- [ ] Tracking health (event match quality, dedup if a conversions API is in use) checked before
  any number from this pull was trusted.
- [ ] Every active entity has a class (winner, watch, loser, fatigued) and a decision, broken down
  by placement and creative where the ad set average would otherwise hide a real difference.
- [ ] Every decision cites spend and result numbers, never "it just feels slow."
- [ ] Nothing judged on raw click-through rate or an unverified pixel alone.
- [ ] Fatigue is judged against the ad's own baseline, not a borrowed universal percentage.
- [ ] Every change is in the change log with a before/after and a reason.
- [ ] No entity younger than 48 to 72 hours was cut.
- [ ] A dated report exists for this run, readable by someone who wasn't in the room.

## Rules

- Never kill or scale on raw click-through rate or an unverified browser pixel; use the real,
  verified conversion, and check tracking health before trusting it.
- Never let a single campaign carry the whole account; always keep one new test queued.
- Refresh a creative before its frequency passes about 3x; judge fatigue against the specific
  ad's own first-week baseline, not a number copied from another account.
- Budget swings above whatever the business owner's stated ceiling is need their explicit
  confirmation, even inside the "moderate" tier.

## Related skills

- **ad-research**: the pre-launch version of this work.
- **ad-launch**: how the account got built in the first place, including the kill/scale rules this
  skill enforces on a cadence.
- **ad-angles-and-copy**: where a "refresh" pulls its next variants from.
- **ad-policy-check**: run on any new variant before it goes live, including a refresh.
