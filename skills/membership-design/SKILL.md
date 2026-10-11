---
name: membership-design
description: "When the user wants to design, price, or fix a recurring membership, subscription, or savings-wallet offer for their business. Also use when they mention 'membership program,' 'monthly plan,' 'subscription offer,' 'savings wallet,' or 'recurring revenue offer.' For a one-time package or bundle instead of a recurring plan, see offer-ladder-pricing. For getting existing one-time buyers to come back without a formal membership, see repeat-purchase."
metadata:
  version: 1.0.0
  chokepoint: retention
  pack: core
---

# Membership Design

You'll finish with one membership (not yet a tier ladder) with its structure named honestly, costed at full use, priced against chokepoint-audit's margin benchmark and offer-ladder-pricing's tier-spacing benchmark, and with its cancellation and billing terms written before the first person joins.

## Before you start

Read `.agents/business-context.md` (section 2: Offers and prices, and section 8: Numbers for gross margin) if it exists. If it's missing, offer to run **business-context** first, or ask only what's missing:
1. What's the actual recurring need: regular service delivery, access to something, savings toward a future purchase, or installments on a package already sold?
2. What would someone use if they used every single benefit every month?
3. How many hours or appointment slots can this business commit to new members this month?

## How to do it

1. **Name the real structure, out loud.** Four honest shapes: a **service membership** (recurring delivery), a **savings wallet** (money set aside, not a discount), an **access membership** (priority or perks, not guaranteed delivery), or **installments** on a fixed package already sold. Never call installments a membership.
2. **Give it a reason to exist** beyond collecting less from people who'd have returned anyway.
3. **Cost it assuming full use**, not the average member.
4. **Count the capacity it commits you to.**
5. **Build one plan first.** Pilot it before building a tier ladder.
6. **Price the tier ladder against the starting-point ranges**, once you have more than one tier: space tiers about 1.6 to 3 times apart in price (a starting point, test it), with the plan you already priced sitting in the middle. See **offer-ladder-pricing** for the full tier-spacing and decoy-tier rules; this skill only applies them to a recurring plan.
7. **Check the margin floor against chokepoint-audit's canonical Offer line**: gross margin on the main offer, after delivery cost and commission, green 60% or more, amber 45 to 59%, red under 45%. Below the red line, the plan doesn't ship until the price goes up or the delivery cost comes down.
8. **Cap what a top tier doubles.** Before doubling any included benefit for a top tier, check what it costs you: if the doubled amount would cost more than about 60% of that tier's fee (a starting point), keep the amount the same and add perks instead (priority booking, extra access).
9. **Write the terms before anyone joins** using the template below.
10. **Make cancellation easy.** No required exit call or retention script as a gate.
11. **Help them use it on day one.**
12. **Report on it monthly** using the template below.

## Template: membership design sheet

```markdown
# Membership design: [Name] | [Business]

- Structure (pick one): [ ] Service membership  [ ] Savings wallet  [ ] Access membership  [ ] Installments on a package
- Price: $[x]/month | Billing cycle: [monthly/quarterly/annual]
- What's included, assuming every member uses every benefit every cycle:
  | Benefit | Cost to deliver at full use | Included in which tier |
  |---|---|---|
- Capacity committed per new member: [n] hours/slots per cycle
- Total cost at full use: $[x] | Benchmark (chokepoint-audit): green 60%+, amber 45-59%, red <45% | Actual: [x]%

## Tier ladder (only after piloting one plan; see offer-ladder-pricing for the general method)
| Tier | Price | ~1.6 to 3x the tier below? | What's included | Top tier doubles inclusion cost vs. fee (flag if over ~60%) |
|---|---|---|---|---|
| Core (the piloted plan) | | n/a | | |
| Plus | | [y/n, ratio] | | |
| Premium | | [y/n, ratio] | | [x]% |

## Terms (write before first member joins)
- Cancellation process:
- Unused-benefit expiry:
- Refund policy:
- Recurring-billing consent language (shown at signup, separate checkbox or line):

## First-day checklist (before the new member leaves signup)
- [ ] Shown how to book
- [ ] Shown where to see benefits
- [ ] Shown how to contact the business
- [ ] First use agreed on the spot

## Monthly report
| Joins | Cancellations | Failed payments | Bookings vs. benefits | Benefit use rate | Delivery cost | Capacity still owed |
|---|---|---|---|---|---|---|
```

## Check it

- [ ] The structure is named as one of the four honest shapes, not blurred
- [ ] Priced assuming full use of every included benefit
- [ ] Capacity to deliver every committed benefit is confirmed, not assumed
- [ ] Gross margin after delivery cost is checked against chokepoint-audit's 60%/45-59%/<45% bands
- [ ] Any tier ladder is ~1.6 to 3x apart with the piloted plan in the middle
- [ ] A top tier's doubled inclusions are flagged if they cost more than about 60% of its fee
- [ ] Cancellation, refund, and unused-benefit terms are written and in the confirmation message
- [ ] One plan is piloted before any tier ladder gets built

## Rules

- Never call installments a membership.
- Never set the included service frequency to match the billing cycle instead of actual need.
- Take clear, separate agreement to recurring billing at signup.
- Never invent a retail value or a fee created only so you can claim to waive it as a joining bonus.
- Finish the cost-at-full-use and margin-floor calculation before selling a membership, not after.
- Process cancellations without a required retention call or exit interview.

## Related skills

- **chokepoint-audit**: owns the canonical margin benchmark this skill checks against.
- **offer-ladder-pricing**: owns the full tier-spacing and decoy-tier method this skill applies to recurring plans; also covers one-time packages and bundles.
- **repeat-purchase**: lighter-touch rebooking for buyers who aren't on a formal membership.
- **marketing-scoreboard**: tracks membership joins, cancellations, and benefit use.

## See it worked

`references/example.md` runs this design sheet for a fictional home-services company.
