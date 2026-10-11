---
name: repeat-purchase
description: "When the user wants more past buyers to come back and buy or book again, without building a formal membership. Also use when they mention 'rebooking,' 'repeat customers,' 'get clients to come back,' 'upsell existing customers,' or 'increase lifetime value.' For a formal recurring plan, see membership-design. For buyers who've gone fully cold, see database-reactivation."
metadata:
  version: 1.0.0
  chokepoint: retention
  pack: core
---

# Repeat Purchase

You'll finish with a system for getting the next visit or purchase booked while the customer is still engaged, real message copy for the moments that need one, and the chokepoint-audit benchmarks to judge it against.

## Before you start

Read `.agents/business-context.md` (section 8: Numbers, for "Average order value, repeat purchases": repeat revenue ÷ number of repeat purchases), `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. What's the natural gap between purchases or visits for this business (weeks, months)?
2. Does checkout today end with the next step booked, or does the customer leave with nothing on the calendar?
3. Is there a package or series customers can be on partway through right now?

## How to do it

1. **Book the next date before they leave or pay, not after.** This is the single highest-leverage move: offer the next appointment or reorder date on the spot.
2. **Make checkout one conversation**, using the template below.
3. **Track remaining visits as a count**, separate from the dollar balance.
4. **Give a named person ownership of stalled plans**: anyone with remaining visits and no next appointment shows up on a list someone reviews regularly.
5. **Sell the next tier at the natural moment** (last session of a course, package completion), not cold by email months later.
6. **Check capacity before selling the next series.**
7. **Report it** against the benchmarks below.

## Template: checkout-is-one-conversation script

```markdown
At the point of payment or end of visit, cover all four in one conversation, not split across a receipt, a separate text, and a later call:

1. "Here's what you paid today: $[x]."
2. "Here's what's left on your plan: [n] visits remaining / fully used."
3. "Let's get your next one on the calendar: [offer specific day/time]."
4. "Instructions and how to reach us are in [confirmation email/text]."
```

## Message copy

**Booking the next visit on the spot (said in person or by text right after purchase):**
> "Before you go, let's lock in your next [visit/order]. I've got [day] at [time] or [alternative], which works better?"

**Stalled-plan check-in (named owner reviews weekly, sends if no next appointment after a reasonable gap):**
> "Hi [Name], you've got [n] visits left on your plan and I don't see a next one booked. Want me to hold a time for you?"

**Last-session upsell (said live, not emailed later):**
> "This wraps up your [package name]. A lot of people in your spot move to [maintenance plan / next package] to keep the results going, want me to walk you through it before you head out?"

## Template: rebooking tracker

```markdown
# Rebooking tracker: [week/month]

| Customer | Visits purchased | Completed | Remaining | Next booked? | Owner |
|---|---|---|---|---|---|

- Rebooking rate = (visits with a next visit booked) ÷ (total visits this period): [x]%
- Attendance rate = (showed) ÷ (booked with a past date): [x]%. Report separately, never collapsed with rebooking rate
```

## Benchmarks (starting points, from chokepoint-audit's canonical thresholds; replace with your own after 6 months of data)

- **Show rate** (showed ÷ booked with a past date): green 75%+, amber 60 to 74%, red under 60%. A miss is read as a scheduling or pre-visit content problem, not a sales problem.
- **Customers who bought again within the normal return window**: green 50%+, amber 30 to 49%, red under 30%. This is the retention-chokepoint number this skill exists to move.
- **12-month customer value ÷ average first purchase** (the value multiple): green 4x+, amber 2 to 3.9x, red under 2x. Doesn't apply to a one-time, high-ticket purchase (a single program, a roof, a wedding); score those on referrals and past-customer contact instead.
- There's no fixed benchmark for rebooking rate as defined in the tracker below; log your own for two to three cycles before treating a number as a target.

## Check it

- [ ] Checkout or the end of a visit always offers the next date on the spot
- [ ] Remaining visits are tracked as a count, separate from the dollar balance
- [ ] Anyone with remaining visits and no next booking has a named owner reviewing them
- [ ] The next-tier offer happens live, at the natural moment, not as a cold later touch
- [ ] Rebooking rate and attendance rate are reported as two separate numbers
- [ ] Show rate is checked against chokepoint-audit's 75%/60-74%/<60% bands
- [ ] The value multiple (12-month value ÷ average first purchase) is checked against the 4x/2-3.9x/<2x bands, skipped for one-time high-ticket purchases

## Rules

- Never pitch a new purchase to someone who already has paid visits remaining; help them use what they bought instead.
- Never create a fake or unconfirmed appointment to improve a rebooking number.
- Check the calendar can support a new series before selling it.
- Keep a service reminder and a sales message clearly separate in wording and in records.
- A stalled-plan check-in or a last-session upsell text is a service reminder, not a marketing message, but if it's ever reused as a broader win-back send, it needs messaging-compliance's marketing-text consent, not the service relationship alone.

## Related skills

- **messaging-compliance**: the consent, quiet-hours, and opt-out rules this skill's sends must follow, especially if a stalled-plan check-in is ever repurposed as a marketing message.
- **membership-design**: when repeat purchase should become a formal recurring plan.
- **show-rate**: for the specific problem of booked-but-not-showing.
- **database-reactivation**: once a past buyer has gone fully cold, not just overdue.
- **chokepoint-audit**: owns the canonical benchmark table this skill points to.

## See it worked

`references/example.md` runs this tracker for a fictional business coaching practice.
