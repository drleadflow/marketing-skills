# Worked example (fictional): Ridgeline Home Services

Ridgeline Home Services is a fictional HVAC and plumbing company, used here only to show the template filled in. No real client, number, or result.

```markdown
# Membership design: Ridgeline Comfort Plan | Ridgeline Home Services (fictional)

- Structure: [x] Service membership
- Price: $29/month | Billing cycle: monthly
- What's included, assuming every member uses every benefit every cycle:
  | Benefit | Cost to deliver at full use | Included in which tier |
  |---|---|---|
  | 2 HVAC tune-ups/year | $45 per visit, $90/year ≈ $7.50/month | Core |
  | Priority scheduling (24hr) | Opportunity cost, ~$3/month in reshuffled routes | Core |
  | 10% off repairs | Variable, modeled at $4/month average | Core |
- Capacity committed per new member: 2 tune-up slots/year, roughly 0.17 slot/month
- Total cost at full use: ~$14.50/month | Benchmark (chokepoint-audit): green 60%+, amber 45-59%, red <45% | Actual: 50% of $29, amber: above the red line, below the green target, flagged to revisit pricing

## Tier ladder (piloted Core for 4 months before adding these)
| Tier | Price | ~1.6 to 3x the tier below? | What's included | Top tier doubles inclusion cost vs. fee (flag if over ~60%) |
|---|---|---|---|---|
| Core | $29 | n/a | Tune-ups, priority scheduling, 10% off repairs | n/a |
| Plus | $47 | 1.6x | Core + 1 extra tune-up + free filter swaps | n/a |
| Premium | $75 | 1.6x | Plus + doubled priority (same-day) + 20% off repairs | Doubled items cost ~$32, 43% of $75 fee: under the 60% flag line |

## Terms
- Cancellation process: cancel anytime via text to the office number, effective end of current billing cycle, no call required
- Unused-benefit expiry: unused tune-up visits don't roll over past 12 months
- Refund policy: no refund on the current month, cancellation stops future billing
- Recurring-billing consent: separate checkbox at signup, "I agree to be billed $[x]/month until I cancel"

## First-day checklist
- [x] Shown how to book (text the number, or app)
- [x] Shown where to see benefits (confirmation email with benefit summary)
- [x] Shown how to contact the business
- [x] First tune-up scheduled on the spot

## Monthly report, October 2026 (fictional)
| Joins | Cancellations | Failed payments | Bookings vs. benefits | Benefit use rate | Delivery cost | Capacity still owed |
|---|---|---|---|---|---|---|
| 18 | 3 | 1 | 42 of 51 eligible tune-ups booked | 82% | $609 | 9 tune-ups owed into November |
```
