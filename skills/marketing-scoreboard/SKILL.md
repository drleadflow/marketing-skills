---
name: marketing-scoreboard
description: "When the user wants a weekly numbers sheet for their marketing and sales, or wants to know which part of their funnel is the real problem. Also use when they mention 'scoreboard,' 'weekly numbers,' 'marketing metrics,' 'cost per lead,' 'cost per booked appointment,' 'how is marketing doing,' or 'what's our bottleneck.' Updates section 8 of business-context.md. Feeds morning-brief and weekly-review, which both read this before giving a priority list. For the deeper root-cause diagnostic and the canonical 'Current chokepoint' line, see chokepoint-audit."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Marketing Scoreboard

You'll finish with section 8 (Numbers) of `.agents/business-context.md` updated with this week's figures, a filled sheet below, each rate benchmarked against chokepoint-audit's canonical thresholds, and a short report naming this week's weakest chokepoint as a signal, not a final verdict.

## Before you start

Read `.agents/business-context.md` section 8 (Numbers) for last period's values, and **chokepoint-audit**'s `references/thresholds.md` for the canonical benchmark bands. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Where do the raw numbers live (CRM, ad platform, spreadsheet, calendar)? Can you pull them yourself, or does the person need to hand you the numbers this week?
2. Which leads are paid (ad spend attached) versus organic or referral? This skill needs the split, not a blended total.
3. What's this week's window (last 7 days, or a different period the business uses)?

## How to do it

1. **Pull the standard section 8 row set** (exact names below), using numerator/denominator/window for every rate, never a bare percentage.
2. **Judge the week on cost per booked appointment and cash collected, not cost per lead alone.** Calculate cost per booked appointment directly: **paid ad spend ÷ booked appointments that came from a paid source**, in the same window. Never divide an all-sources cost per lead by an all-sources lead-to-booked rate; that mixes a paid-only cost with a booking rate that includes organic and referral leads, who are usually easier to book, and quietly flatters the number. If paid source isn't tracked on each lead yet, that's the first gap to close, not a number to approximate.
3. **Never write 0 for a number that wasn't tracked.** Write "not recorded."
4. **Keep Monthly revenue (cash collected) separate from any payment-plan revenue earned but not yet collected.**
5. **Update section 8** and append a changelog line ("YYYY-MM-DD vN: scoreboard update. Sections: 8."). Leave "Current chokepoint:" alone; that's **chokepoint-audit**'s line.
6. **Write this week's report** using the template below, checking each available rate against chokepoint-audit's canonical bands and naming a candidate weakest chokepoint.
7. **Don't call a one-week swing a trend;** flag it, wait two to three weeks before calling it real.

## Template: weekly scoreboard sheet

```markdown
# Scoreboard: [Business] | Week of [date]

| Metric | This week | Last week | Benchmark (chokepoint-audit) | Window |
|---|---|---|---|---|
| Leads per month (this week's count, not annualized) | | | | last 7 days |
| Speed to first reply, calls/forms (median minutes, human) | | | green ≤5 min, amber 6-60, red >60 | last 7 days |
| Speed to first reply, social DMs (median minutes) | | | green ≤15 min, amber 16-120, red >120 | last 7 days |
| Lead to booked, cold leads (paid social, cold outreach) | | | green 20%+, amber 10-19%, red <10% | last 7 days |
| Lead to booked, warm leads (referral, inbound, search) | | | green 40%+, amber 25-39%, red <25% | last 7 days |
| Show rate (showed ÷ booked, past date) | | | green 75%+, amber 60-74%, red <60% | last 7 days |
| Close rate (bought ÷ showed) | | | green 40%+ (flag above 65%), amber 25-39%, red <25% | last 7 days |
| New customers this week | | | | last 7 days |
| Average first purchase | | | | last 7 days |
| 12-month customer value ÷ average first purchase | | | green 4x+, amber 2-3.9x, red <2x (skip for one-time high-ticket) | last 90 days+ |
| Repeat or rebook rate | | | no fixed benchmark, log your own | last 30 days |
| Referral share of new customers | | | green 25%+, amber 10-24%, red <10% | last 30 days |
| Monthly ad spend (this week's pace) | | | | last 7 days |
| Cost per lead, paid sources only | | | | last 7 days |
| Booked appointments from paid sources | | | | last 7 days |
| Cost per booked appointment = paid spend ÷ paid-sourced bookings | | | | last 7 days |
| Monthly revenue (cash collected) | | | | last 7 days |
| Gross margin, main offer | | | green 60%+, amber 45-59%, red <45% | last 7 days |

## This week's report
- Weakest chokepoint (candidate, not the canonical line): [name], because: [the specific number]
- Any rate outside its benchmark band: [list, with color]
- One-week swings flagged, not yet called trends: [list]
```

## Check it

- [ ] Every standard row is pulled with this week's value, same definitions as last week
- [ ] Every rate shows numerator, denominator, and window
- [ ] Cost per booked appointment uses paid spend ÷ paid-sourced bookings directly, never a blended CPL divided by an all-source booking rate
- [ ] Cash collected and payment-plan revenue are kept separate
- [ ] Any untracked number is "not recorded," never 0
- [ ] Section 8 is updated with a changelog line; "Current chokepoint" is left untouched
- [ ] Available rates are checked against chokepoint-audit's canonical bands, with the color named (green/amber/red)
- [ ] The report names one candidate weakest chokepoint with the number behind it
- [ ] A one-week swing is flagged as a flag, not reported as a trend

## Rules

- Never present a single week's number as a trend or a forecast.
- Never collapse cash collected and payment-plan revenue earned into one figure.
- Never write 0 for something that wasn't tracked; write "not recorded."
- Never compute cost per booked appointment by dividing a paid-only cost per lead by an all-source lead-to-booked rate. Compute it directly: paid spend ÷ bookings that came from a paid source.
- Use the same metric definitions every week; log a changed definition in the changelog with old and new wording.
- Don't overwrite chokepoint-audit's "Current chokepoint:" line; flag a candidate in your own report instead.

## Related skills

- **morning-brief**: reads section 8 and this week's report to build the day's priority list.
- **weekly-review**: reads this scoreboard as the factual backbone of the Friday ritual.
- **chokepoint-audit**: owns the canonical benchmark table and the "Current chokepoint:" line this skill points to.
- **marketing-loop**: to run this pull on a recurring weekly cadence instead of manually each time.

## See it worked

`references/example.md` runs this sheet for a fictional home-services company.
