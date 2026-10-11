---
name: chokepoint-audit
description: "When the user wants to know what to fix first in their marketing or sales, why growth stalled, or where customers are leaking out. Also use when they say 'audit my business', 'what's my bottleneck', 'where am I losing customers', 'why aren't we growing', 'should I spend more on ads', 'leads are garbage', 'nobody shows up', 'what should I fix first', 'growth plan', or share their monthly numbers. Scores all 8 chokepoints (Offer, Attention, Leads, Appointments, Closed, Fulfillment, Retention, Referrals), picks the one costing the most and routes to the skills that fix it. For setting up the numbers first, see business-context. For weekly tracking after the fix, see marketing-scoreboard."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Chokepoint audit

You'll finish with a one-page **Chokepoint Report**: all eight stages of the business scored red, amber or green from its own numbers, the one chokepoint that's costing the most, what it's worth in plain dollars, the likely cause, one fix for the next 14 days with an owner and a review date, and the skills to run next.

Growth gets stuck in one place at a time. Most owners guess wrong about where, and the usual guess ("we need more leads") is the most expensive one, because more traffic only scales the process you already have. Two businesses with the same complaint can need opposite fixes. So diagnose before you prescribe.

The 8 chokepoints, in funnel order:

**Offer → Attention → Leads → Appointments → Closed → Fulfillment → Retention → Referrals**

| # | Chokepoint | The question it answers |
|---|---|---|
| 1 | Offer | Is there something worth buying, priced so each sale makes money? |
| 2 | Attention | Do enough of the right people see you? |
| 3 | Leads | Do the people who see you raise their hand, and does someone answer fast? |
| 4 | Appointments | Do leads book, and do booked people show up? |
| 5 | Closed | Do people who show up buy? |
| 6 | Fulfillment | Do buyers get what they were promised? |
| 7 | Retention | Do customers come back or stay? |
| 8 | Referrals | Do happy customers bring the next ones? |

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. Section 8 (Numbers) of business-context is your main input; section 2 gives prices and terms; section 9 gives the goal.
- If business-context is missing, offer to run **business-context** first. If the owner wants the audit now, ask only:
  1. What do you sell, at what price, and what does it cost you to deliver?
  2. For the last 90 days: how many leads, booked, showed, bought?
  3. What's the revenue goal for the next 90 days?
- Then collect the rest with the intake below, 3 questions at a time.

## How to do it

### 1. Fix the window and the definitions

Use one window for every number, normally the last 90 days. Leave out appointments that haven't happened yet; a test isn't finished while bookings are pending. Use these definitions (the same ones business-context uses):

- **Lead**: a person who contacted you or gave contact details. Not a message, not a form fill.
- **Booked**: an appointment or call on the calendar. A request is not a booking.
- **Show rate**: showed ÷ booked with a date that has passed.
- **Close rate**: bought ÷ showed.
- **First purchase**: what a new customer pays in their first transaction.

Write every rate with its numerator, denominator and window: `Show rate 58% (41 of 71, Jul to Sep)`.

### 2. Collect the intake

| # | Input | Feeds |
|---|---|---|
| 1 | Main offer price, delivery cost, commission | Offer |
| 2 | Is the price and terms the same on the site, ads, scripts and invoices? | Offer |
| 3 | Revenue goal for the next 90 days, and capacity (customers per month) | Attention |
| 4 | Leads per month, by source | Attention, Leads |
| 5 | Ad spend and cost per lead, if paid | Attention |
| 6 | Median minutes to first real reply, business hours | Leads |
| 7 | Share of leads who got a real reply or call at all | Leads |
| 8 | Booked, showed, bought (counts) | Appointments, Closed |
| 9 | Average first purchase | Closed |
| 10 | Refunds, complaints, people who didn't finish what they bought | Fulfillment |
| 11 | Customers who bought again, and 12-month value per customer | Retention |
| 12 | New customers from referrals; reviews received | Referrals |

Anything they don't track is **not recorded**. Never fill a blank with 0 or a guess.

### 3. Apply the measurement gate

If a stage can't be measured, that is a finding, and often finding number one. A business that can't see whether booked people showed can't tell whether its spend worked. List every "not recorded" input and the one-line fix to start recording it (a calendar status, a "how did you hear about us" field, a refund tag). Keep scoring the stages you can see.

### 4. Score every chokepoint

Score each stage red, amber or green against the starting lines in [references/thresholds.md](references/thresholds.md). Summary:

| Chokepoint | Main metric | Green | Red |
|---|---|---|---|
| Offer | Gross margin after delivery and commission | 60% or more | under 45% |
| Attention | Leads per month vs leads the goal needs | 100% or more | under 70% |
| Leads | Median first reply in business hours | 5 min or less | over 60 min |
| Appointments | Lead to booked (cold paid leads) | 20% or more | under 10% |
| Appointments | Show rate | 75% or more | under 60% |
| Closed | Close rate on a sales call or consult | 40% or more | under 25% |
| Fulfillment | Refunds plus complaints, share of customers | 2% or less | over 5% |
| Retention | 12-month value ÷ first purchase | 4x or more | under 2x |
| Referrals | Referral share of new customers | 25% or more | under 10% |

These lines are starting points for service businesses, not laws. The canonical table at the top of the thresholds file is the one every other skill in this repo uses. If the owner has 6 or more months of their own history, score against their own best quarter instead and say so. Warm leads (referrals, inbound calls, search) book at roughly double the cold-lead lines; the thresholds file has both.

### 5. Do the backward math

Work out what the goal needs, stage by stage, from the bottom up:

```
New customers needed = (revenue goal − revenue expected from existing customers) ÷ average first purchase
Shows needed         = new customers needed ÷ close rate
Bookings needed      = shows needed ÷ show rate
Leads needed         = bookings needed ÷ lead to booked rate
```

Round people up at every step. Compare leads needed with leads you have; that's the Attention score. Then the cost ceiling:

```
Most you can pay per new customer = first-purchase contribution (price − delivery cost − commission)
                                    − any other acquisition cost (setter, creative, management)
Most you can pay per lead         = that ceiling × lead to booked × show rate × close rate
```

If cost per lead is above that line, more ad spend loses more money. Count later revenue (repeat purchases, upgrades) only once it has happened, never as a forecast.

### 6. Price each leak

For every red or amber stage, model what reaching the green line would add, holding every other rate where it is:

```
Extra new customers = current new customers × (green line ÷ current rate − 1)
Extra revenue       = extra new customers × average first purchase
```

For Leads, use the leads who got no real reply: `unreached leads × booking rate of reached leads × show × close × first purchase`. For Retention and Referrals, use the gap in repeat buyers or referred customers times the average purchase. Label every result **modeled, not a forecast**.

### 7. Pick the chokepoint

Apply these rules in order. The first one that fires decides.

1. **Offer gate.** Margin under 45%, a first purchase that loses money with no proven repeat, or more than one version of the price or terms live: the chokepoint is **Offer**. Fixing anything downstream first just loses money faster.
2. **Capacity gate.** If the calendar is full and the wait is longer than customers accept, it isn't Attention or Leads. Look at Offer (price) or Fulfillment (delivery time).
3. **Fulfillment gate.** If Fulfillment is red, it outranks Retention and Referrals. Asking unhappy customers to come back or refer friends makes it worse.
4. **Downstream first.** If Attention has the biggest leak but any later stage is red, pick the largest red stage after Attention. More traffic into a leaking stage adds volume to the leak, and fixing the later stage shrinks how many leads the goal needs.
5. **Biggest leak.** Otherwise pick the red or amber stage with the largest modeled revenue from step 6.
6. **Tie-break.** If two leaks are within 20% of each other, pick the earlier one in funnel order; it feeds everything after it.

### 8. Find the cause

Open the chokepoint's section in [references/diagnostics.md](references/diagnostics.md). Ask its diagnostic questions, 3 at a time, and check the evidence (call recordings, message threads, calendar, invoices) before believing an answer. Tag each finding **confirmed** (you saw it in the data) or **suspected** (the owner said so). A weak rate doesn't name a culprit: check the process (response time, calendar availability, offer changes, the form) before blaming a person or the ad.

### 9. Write the report

Use this format. One page.

```markdown
# Chokepoint report: <Business> (<date>)
Window: <start> to <end>. Definitions: business-context section 8.

## Scoreboard
| # | Chokepoint | Metric | Yours | Green line | Status |
|---|---|---|---|---|---|
(8 rows, plus "not recorded" where it applies)

## Your chokepoint: <name>
Why this one: <2 to 3 sentences with the numbers and the rule from step 7 that fired>
What it's worth: <extra customers and revenue per month if it reached the green line. Modeled, not a forecast.>

## What's causing it
1. <finding> (confirmed / suspected)
2.
3.

## The fix, next 14 days
- One change: <specific>
- Owner: <role>
- First step today: <action>
- Measure: <metric, numerator and denominator>
- Review on: <date, after enough appointments have resolved>

## Don't do this yet
- <the tempting wrong fix, usually more ad spend, and why>

## Start measuring
- <each "not recorded" input and how to start recording it>

## Skills to run, in order
1. <skill>: <why>
```

### 10. Route and record

Route with the table below. Then update `.agents/business-context.md` section 8: refresh the numbers, set `Current chokepoint: <name>, <date>`, and append a changelog line.

| Chokepoint | Run these skills |
|---|---|
| Offer | best-client-profile, positioning, offer-builder, offer-ladder-pricing, one-page-offer (clinics: clinic-offers) |
| Attention | content-pillars, hook-writer, short-form-script, outlier-research, ad-research, ad-angles-and-copy, ad-launch, ad-account-audit, seo-article, ai-search-visibility |
| Leads | speed-to-lead, landing-page, lead-magnet, comment-to-dm, quiz-funnel |
| Appointments | setter-script, follow-up-sequence, show-rate, voice-note-dms, ai-setter-guardrails (clinics: consult-show-rate) |
| Closed | sales-call-playbook, objection-handling, call-grader, proposal-and-payment |
| Fulfillment | client-onboarding, sop-generator, client-assistant |
| Retention | database-reactivation, repeat-purchase, membership-design, nurture-cadence (clinics: patient-reactivation) |
| Referrals | review-engine, referral-program, case-study |

Pick 1 to 3 skills, not the whole row. The diagnostics file says which cause maps to which skill.

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | One window | Every number uses the same window and definitions |
| 2 | Shown math | Every rate shows numerator, denominator and window |
| 3 | Blanks | Untracked inputs say "not recorded" and appear under Start measuring |
| 4 | All eight | The scoreboard has all 8 chokepoints, even if some are "not recorded" |
| 5 | Rule named | The report says which step-7 rule picked the chokepoint |
| 6 | Not Attention by default | Attention is only chosen if no later stage is red |
| 7 | Modeled label | Every dollar figure is labeled modeled, not a forecast, and counts no future revenue |
| 8 | One fix | The 14-day plan has one change, one owner, one measure and a review date |
| 9 | Evidence tags | Every cause is tagged confirmed or suspected |
| 10 | Routed | 1 to 3 skills named, matched to the cause, using exact skill names |
| 11 | Recorded | business-context section 8 updated with a changelog line |

## Rules

- Never invent a number, benchmark result or industry average. Use the owner's numbers and the starting lines in this skill, and say which is which.
- Never treat a blank as zero, a booking as revenue, or a request as a booking.
- Never recommend more traffic or ad spend while a later stage is red.
- Never present a modeled number as a forecast, a promise or a saving.
- Never call a test finished while booked appointments are still pending, and don't conclude from a handful of appointments; say the sample is small.
- Never blame a person for a weak rate before checking the process around them.
- One chokepoint at a time. Fix it, measure it, then re-audit.
- No private customer data in the report: counts and patterns only, no names or contact details.

## Run it on a schedule

Re-run monthly, or 30 days after a fix ships, whichever comes first. Cadence: monthly. Stop condition: the owner pauses it, or the same chokepoint has been chosen 3 times in a row (then escalate: the fix isn't working, review it by hand). State to record: the report date, the chokepoint chosen and the scoreboard, appended to business-context's changelog, so the next run compares against it instead of starting over.

## Related skills

- **business-context**: holds the numbers this audit reads and writes.
- **marketing-scoreboard**: weekly tracking of the metric the fix targets.
- **weekly-review**: checks progress on the 14-day fix.
- The skills in the routing table in step 10: the fix itself.

## Examples

A full worked audit for a fictional med spa, from intake to report, is in [references/worked-example.md](references/worked-example.md).
