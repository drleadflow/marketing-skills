# Worked example: a fictional med spa

Juniper Skin Studio is fictional. So are its numbers. The point is the method: how the scoreboard, the backward math, the leak values and the step-7 rules pick the chokepoint, and why the obvious answer (more ads) is wrong.

## Intake (Jul to Sep, 90 days)

| Input | Value |
|---|---|
| First visit offer price | $420 average first purchase |
| Gross margin on it | 62% (owner's cost sheet) |
| Price and terms the same everywhere | yes (checked site, ad, booking page) |
| Goal | 30 new clients a month; capacity about 45 |
| Leads | 630 (210 a month), almost all paid social |
| Ad spend, cost per lead | $6,300 a month, $30 |
| Median first reply, business hours | 22 minutes |
| Leads who got any real reply or call | 554 of 630 (88%) |
| Booked | 126 of 630 (20%) |
| Showed | 66 of 120 with a past date (55%); 6 still upcoming, left out |
| Bought | 40 of 66 (61%) |
| Refunds plus complaints | 1 of 40 (2.5%) |
| 12-month value ÷ first purchase | $1,180 ÷ $420 = 2.8x |
| Bought again within 4 months | 41% |
| Referral source | not recorded |
| New reviews | 4 for 40 new clients (10%) |

## Scoreboard

| # | Chokepoint | Metric | Yours | Green line | Status |
|---|---|---|---|---|---|
| 1 | Offer | Gross margin | 62% | 60% | Green |
| 2 | Attention | Leads vs leads needed | 210 of 455 (46%) | 100% | Red |
| 3 | Leads | Median first reply; coverage | 22 min; 88% | 5 min; 95% | Amber |
| 4 | Appointments | Lead to booked (cold) | 20% (126 of 630) | 20% | Green |
| 4 | Appointments | Show rate | 55% (66 of 120) | 75% | Red |
| 5 | Closed | Close rate | 61% (40 of 66) | 40% | Green |
| 6 | Fulfillment | Refunds plus complaints | 2.5% (1 of 40) | 2% | Amber |
| 7 | Retention | Value multiple | 2.8x | 4x | Amber |
| 8 | Referrals | Referral share | not recorded | 25% | Not recorded |

## Backward math

```
New clients needed  = 30
Shows needed        = 30 ÷ 0.61 = 49.2 → 50
Bookings needed     = 50 ÷ 0.55 = 90.9 → 91
Leads needed        = 91 ÷ 0.20 = 455 a month
```

Cost ceiling: contribution per first visit is about $260 (62% of $420). At 20% booked, 55% shows and 61% close, the most they can pay per lead is $260 × 0.20 × 0.55 × 0.61 = **$17.45**. They pay $30. More ad spend at today's rates loses money on the first visit.

## Leak values (per month, modeled, not a forecast)

| Stage | Math | Extra clients | Extra revenue |
|---|---|---|---|
| Attention | (455 − 210) × 0.20 × 0.55 × 0.61 | 16.4 | $6,900 |
| Show rate | 40 bookings × (0.75 − 0.55) × 0.61 | 4.9 | $2,050 |
| Leads coverage | 25 unreached × 0.227 × 0.55 × 0.61 | 1.9 | $800 |
| Retention | 13 clients × (0.50 − 0.41) × $300 repeat | | $350 |

## Which rule fires

1. Offer gate: margin 62%, one version. Doesn't fire.
2. Capacity gate: 13 new clients a month against capacity of 45. Doesn't fire.
3. Fulfillment gate: amber, not red. Doesn't fire.
4. **Downstream first: fires.** Attention has the biggest leak, but Show rate (Appointments) is red. The chokepoint is **Appointments: show rate**.

Why that's right: at a 75% show rate, bookings needed drop from 91 to 67 and leads needed from 455 to 335, and the most they can pay per lead rises from $17.45 to $23.80. Fixing shows first makes the later ad spend cheaper.

## Diagnosis

Questions asked: reminder messages, auto-cancel rules, booking lead time.

1. A reminder says "Reply C to confirm or we'll release your spot." 9 of the 54 no-shows were auto-released by it. (confirmed: automation log)
2. Median booking is 8 days out. Shows for bookings within 3 days ran 71%; 7 or more days out, 44%. (confirmed: calendar export)
3. Nothing between booking and visit explains what happens at the first visit. (confirmed: message templates)
4. Front desk thinks "people just flake." (suspected, and contradicted by findings 1 and 2)

## The report's fix section

- **One change:** turn off the auto-release rule; reminders assume the visit is on ("See you Thursday at 2"); offer slots within 72 hours first.
- **Owner:** front desk lead.
- **First step today:** switch off the release automation and rewrite the 3 reminder messages.
- **Measure:** show rate for bookings made after the change (showed ÷ booked with past date).
- **Review on:** after 40 of the new bookings have resolved, about 4 weeks.

**Don't do this yet:** doubling ad spend to $12,600. At $30 a lead against a $17.45 ceiling, it would add clients and lose money on each one.

**Start measuring:** add "How did you hear about us?" to the booking form so Referrals can be scored next month.

**Skills to run, in order:**
1. **show-rate** (and **consult-show-rate**, since it's a clinic): reminders and pre-visit message.
2. **follow-up-sequence**: recovery for the no-shows already lost.
3. **speed-to-lead**: next month, close the 12% coverage gap.
