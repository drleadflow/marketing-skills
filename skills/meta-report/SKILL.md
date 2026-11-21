---
name: meta-report
description: >
  When the user wants a performance report on their Facebook and Instagram ads pulled straight
  from their own Meta ad account: what is working, what is wasting money, and the exact changes to
  make, each tied to an ad ID and a dollar amount. Also use when they say "how are my ads doing,"
  "weekly Meta report," "ad performance report," "where is my ad money going," or "meta report."
  Works for any business; health practices get a privacy-safe version. For deciding and applying
  scale, hold, refresh or kill moves, see ad-account-audit. For building the campaign, see
  meta-launcher.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Meta report

You'll finish with a dated, one-page report on the owner's Meta ads: totals against last
period, every ad set and ad ranked on the real conversion, the biggest win and biggest leak, and
a short list of changes, each with its entity ID, the move and the money involved.

## Before you start

Read `.agents/business-context.md` if it exists. Pull the conversion event, target cost per
result, pause line and break-even return from its "Paid ads targets" table. If business-context
is missing, offer to run **business-context** first.

Check these before any API call. If one is missing, stop and say where to get it.

| Needed | How to check | Where it comes from |
|---|---|---|
| `META_ACCESS_TOKEN` with `ads_read` | env var is set | a system user token from the owner's Meta Business settings |
| `META_AD_ACCOUNT_ID` | env var is set, starts with `act_` | Ads Manager account menu |
| `META_API_VERSION` | env var is set, like `v24.0` | the Marketing API changelog; use the current version |
| Spend in the window | the account ran ads in the period | launched with **meta-launcher** or by hand |
| A conversion event with data | the event shows recent activity in Events Manager | **tracking-and-attribution** |

Then ask, at most 3 at a time, what is still missing:
1. The report window. Don't ask if the default fits: last 7 full days against the 7 before.
2. Which conversion counts as the result: the exact event or custom conversion name.
3. Is there a source of truth outside Meta (CRM bookings, sales, a tracking tool)? And is this a
   health practice? If it is, use the health rules in step 2.

## How to do it

### 1. Pull the numbers

Save the client in `references/report-client.md` into the owner's project and pull, for both
windows: the account total, every ad set, every ad, and breakdowns by placement, device, and age
and gender. For each entity work out: spend, results (the chosen conversion only), cost per result,
conversion value and return on spend if value is tracked, frequency, link click-through rate.

### 2. Decide what the result is

- **The money read is the chosen conversion**, ideally the server-side, deduplicated event. Read it
  from the `actions` list by its exact action type. Never judge spend on clicks, all-clicks CTR or
  the browser pixel alone; it over-counts.
- **Delivery numbers** (reach, frequency, CTR, video views, placements) explain why, never what
  the money did.
- **An outside source of truth**, if the owner has one, wins. Compare its count with Meta's for
  the same window and flag a gap above 20%, with the number on both sides.
- **Health practices**: Meta may block lower-funnel events for optimization, so Meta's count may
  be a proxy. Get the real result (booked consults, shows, sales) as a total from the CRM, never
  patient by patient. The report never names a patient, a condition or a treatment tied to a
  person, and never pastes CRM rows into the report or into any AI tool. When the CRM total
  exists, it drives cost per result in the totals table; Meta's count sits beside it as a proxy.

### 3. Find the patterns

- **Winners**: at or under the excellent target cost per result, with enough results to trust (5
  or more is a sensible floor).
- **Leaks**: spent at least one target cost per result with zero results, or past the pause line.
- **Fatigue**: frequency climbing past about 3 on cold traffic, or link CTR falling well below the
  ad's own first-week number. Compare to the ad's own history, not a number from the internet.
- **Breakdowns**: a placement, device or age band taking a large share of spend at a cost per
  result well above the account's.
- **Creatives** ranked on results (or value) per dollar, never on CTR.
- **Thin data**: any entity with under 3 results gets "too early to call," not a verdict. Anything
  in its first 72 hours is in learning; say so and leave it alone.

### 4. Write the report

Use this order, one page:

1. **Summary**: spend, results, cost per result, return on spend, against last period, plus the
   biggest win and the biggest leak in one line each.
2. **Totals table**: this period, last period, change.
3. **Ad sets**: ranked by cost per result, each marked winner, leak, learning or too early, with
   its ID.
4. **Creatives**: top 3 and bottom 3 by results per dollar, with IDs.
5. **Breakdowns**: only the ones that change a decision.
6. **Outside source check**: Meta's count against the CRM or tracking tool, if there is one.
7. **Changes to make**: at most 5, highest dollar impact first. Each one names the entity ID, the
   move (pause, raise budget 20 to 30%, refresh creative, hold), the spend involved, and why.
8. **Confidence notes**: where data is thin or tracking looked off.

When a number is missing (no prior period, no ad level split), leave the cell blank, say so in
the confidence notes, and keep the section. If only account totals exist, the changes list may
hold account-level moves marked "account level," plus the pull needed to get ID-level ones. Ad set
and ad numbers are never added together into the account total; pull the total separately.

Save it as `meta-report-YYYY-MM-DD.md`. This skill only reads. It never changes the account. The
changes list goes to **ad-account-audit**, which applies moves with an approval gate.

## Run it on a schedule

**Cadence**: weekly, or every 72 hours for the first two weeks after a launch. **Stop condition**:
none while the account has spend. **State recorded between runs**: each dated report file, so the
next run compares against the last one and doesn't repeat a change that was already made.

## Examples

Fictional businesses, for illustration only.

**A local roofing company.** Summary line: "Spent 840 dollars for 21 leads at 40 dollars each,
down from 52. Biggest win: ad set Homeowners-45plus at 28 dollars a lead. Biggest leak: ad
VID-storm-B spent 96 dollars with no leads. Pause it." Each line in the changes list carries
the ad ID.

**A dental practice.** Meta shows 14 leads, the CRM shows 9 booked new-patient exams for the same
week, so the report says Meta's leads are a proxy and judges cost per booked exam, totals only.
Ad names use opaque offer codes, so nothing in the report names a treatment.

## Check it

- [ ] Every money judgment uses the chosen conversion, not clicks or CTR.
- [ ] Every change names an entity ID, a move and a dollar amount.
- [ ] Thin-data and learning-phase entities are marked, not judged.
- [ ] An outside source, if there is one, was compared and any gap above 20% flagged.
- [ ] For a health practice, no patient, condition or person-level data appears anywhere.
- [ ] No change was made to the account by this skill.

## Rules

- Read only. Never pause, edit or switch on anything from this skill.
- Never invent a number. If a pull failed, say which one and leave it out.
- Never judge an entity inside its first 72 hours.
- Never put an access token in a file, a commit or a chat message.
- Never copy patient-level CRM data into a report or an AI tool.

## Related skills

- **ad-account-audit**: turn the changes list into scale, hold, refresh or kill moves with
  approval.
- **meta-launcher**: build the next test from what won.
- **tracking-and-attribution**: fix the conversion event when the numbers look off.
- **marketing-scoreboard**: put ad results next to the rest of the funnel.
- **ad-creative-brief**: brief the refresh for fatigued creatives.
