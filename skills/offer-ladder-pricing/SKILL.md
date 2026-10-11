---
name: offer-ladder-pricing
description: "When the user wants to set or raise prices, add tiers, create an entry offer, design payment plans, or map how customers move from a first purchase to a bigger one. Also use when they say 'how should I price this', 'raise my prices', 'good better best', 'pricing tiers', 'price ladder', 'value ladder', 'upsell', 'front-end offer', 'tripwire', 'payment plan', 'pay in full discount', 'founding price', or 'am I charging enough'. Produces a price ladder with the math behind every rung. For building one offer's contents, see offer-builder. For recurring plans in depth, see membership-design."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# Offer ladder and pricing

You'll finish with a **Price Ladder**: every offer the business sells, laid out as rungs from free to premium to ongoing, each with its price, its job, its margin, who it's for and what moves a customer to the next rung. Plus the acquisition math that says how much you can afford to spend to get a customer, the tier table if tiers make sense, payment options with honest terms, and a plan for the next price change.

Price is a decision about who you serve and how well, not a number you copy from a competitor. Start from what it costs you to deliver, then from the value to the buyer. The market price is a check, never the starting point.

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. You need section 2 (offers and prices), section 8 (numbers) and section 9 (goals).
- If business-context is missing, offer to run **business-context** first, or ask:
  1. List every offer you sell, its price, and what each costs you to deliver.
  2. What does a typical customer spend with you in their first year?
  3. What does it cost you to get a new customer, roughly (ads, sales time, commissions)?
- If any single offer is unclear or weak, run **offer-builder** on it first.

## How to do it

### 1. Cost every offer

For each offer, get the full delivery cost:

```
Delivery cost = materials and product used (with waste)
              + time of whoever delivers it, at full employment cost
              + processing and platform fees
              + commission or bonus paid on the sale
Gross margin  = (price − delivery cost) ÷ price
```

Count each cost once. Rent, software and equipment are overhead, not delivery cost. Anything the owner doesn't know is **unknown**, not zero, and the margin for that offer is unconfirmed until it's filled.

Margin lines: **60% target, 45% floor.** Below 45%, the offer doesn't ship until the price goes up or the delivery cost comes down.

### 2. Work out what a customer is worth and what you can pay for one

```
First-purchase contribution = first purchase price − its delivery cost
Most you can pay per customer = first-purchase contribution − other acquisition costs
                                (setter or sales time, creative, management)
Most you can pay per lead     = that × lead to booked × show rate × close rate
```

Use the first purchase, not the lifetime value, to set spending limits. Count repeat revenue when it happens. If repeat buying is proven over 12 months of real data, you may stretch the ceiling, and you must say by how much and why.

Keep four numbers separate in every table: price, cash collected, revenue earned in the period, and profit. A prepaid package is work you still owe, not free cash.

### 3. Lay out the rungs

| Rung | Job | Typical shape | Price logic |
|---|---|---|---|
| Free | Show the method, start trust | Guide, checklist, video, quiz, community | Costs you almost nothing to deliver |
| Entry | Turn a stranger into a customer | A named first step: review, visit, audit, starter session | Worth paying for alone; breaks even or better against acquisition cost |
| Core | The main result | The offer from **offer-builder** | Target margin, priced from cost up and checked against value |
| Premium | Same result, faster or with less effort | Done for you, more access, priority | Only if the work is real; never a decoy |
| Ongoing | Keep the result, keep the relationship | Membership, maintenance, retainer | Sold at the end of the core, not cold months later |

Not every business needs every rung. Two clear rungs beat five confusing ones. For each rung, write:

```markdown
| Rung | Offer | Price | Margin | For whom | Moves up when |
```

"Moves up when" is a trigger the team can act on: "after the first visit, if the plan has more than one stage", "at the last session of the program". Every rung names the next one and the moment it's offered.

### 4. Decide whether tiers belong

Offer good, better and best only when all three fit what different customers need. If there's no real third option, sell one.

When tiers fit:

- **Differ by delivery mode, not quantity.** Do it yourself, done with you, done for you. Or: self-serve, guided, full service.
- **Put the offer you priced in offer-builder in the middle.** Space tiers about 1.6 to 3 times apart (a starting point; test it).
- **The top tier is real.** Never build a premium option whose only job is to make another look cheap.
- **Don't scale by units.** More sessions, reviews or support, not "twice the product".
- **For recurring tiers:** cost them assuming every member uses every benefit. Before you give the top tier twice as much of something, check what it costs you. If the doubled amount would cost you more than 60% of the tier's fee, keep the amount the same and add perks (priority booking, extra access) instead. The 60% line is a starting point.

### 5. Set payment options

- **Pay in full:** reward it with added value (an extra month, a bonus session), not a deep percent off.
- **Payment plans:** the total is a little higher than paying in full, and the buyer sees both totals.
- **Deposits and credits:** applied once, toward the balance, with a minimum spend, an expiry and the terms written before payment.
- **Financing:** never show a monthly figure without the example amount, the term and the annual rate beside it. Financing pre-approval is its own step, never bundled into a marketing consent.
- **Instalments are not a membership.** Call them a payment plan.

### 6. Handle founding and launch prices honestly

A founding price is fine if it's real: a set number of places, a set end date, the reason, and what happens to the price after. Locked-in pricing must be honored as long as you said.

### 7. Plan the next price change

Signals that the price is low (rules of thumb, not laws):

- The calendar is over 85% full for 2 months running.
- Close rate is above 60% and nobody pushes back on price.
- Margin is under target and costs have risen.

How to raise:

1. Raise for new customers first; give existing customers notice and a date.
2. Add something real when you raise, if you can.
3. Change one price at a time and watch close rate for a full sales cycle before judging.
4. Update every surface the same day (see the paste-everywhere block in offer-builder).

### 8. Write it down

Deliver the Price Ladder. Update section 2 of `.agents/business-context.md` (offers, prices, terms, margins) and append a changelog line.

## The Price Ladder format

```markdown
# Price Ladder: <Business> (<date>)

## Rungs
| Rung | Offer | Price | Gross margin | For whom | Moves up when |

## Acquisition math
First-purchase contribution: ...
Most we can pay per customer: ...
Most we can pay per lead: ... (from booking x%, show y%, close z%)
Current cost per lead: ... → within / over the line

## Tiers (if any)
| Tier | Delivery mode | Price | What's different | Cost at full use |

## Payment options
<pay in full, plan totals, deposits, financing disclosure>

## Next price change
<what, when, for whom, the signal it's based on>

## Unknowns
<every cost or number marked unknown>
```

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Costs | Every offer's delivery cost is itemized or marked unknown |
| 2 | Margins | Every offer at 45% or more, or flagged with a fix |
| 3 | Acquisition math | Ceiling per customer and per lead calculated from the business's own rates |
| 4 | Four numbers | Price, cash, earned revenue and profit kept apart |
| 5 | Rungs | Every rung has a job, a price and a "moves up when" trigger |
| 6 | Tiers | Tiers differ by delivery mode, middle tier is the core offer, no decoy |
| 7 | Payment terms | Plan totals shown; credits and deposits have written terms; financing fully disclosed |
| 8 | Honest launch pricing | Founding prices have a count, an end date and what happens after |
| 9 | Unknowns | Listed, not zeroed |
| 10 | Recorded | Section 2 updated, changelog appended |

## Rules

- Never price below delivery cost, and never plan a loss on the entry offer hoping people buy more.
- Never invent a cost, a margin or a competitor's price. Unknown stays unknown.
- Never use expected future revenue to justify today's spending.
- Never build a decoy tier.
- Never treat a competitor's price list as yours. It's research, and a handful of prices is noise.
- Never show a monthly financing figure without the full disclosure.
- Never call instalments or a savings wallet a membership.
- In health businesses, never set treatment frequency to match a billing cycle, and keep medication or product charges separate from the service fee where your rules require it.

## Related skills

- **offer-builder**: builds each rung's contents.
- **membership-design**: the ongoing rung in depth.
- **proposal-and-payment**: presents the price and collects payment.
- **chokepoint-audit**: tells you whether price is really the problem.
- **clinic-offers**: pricing rules specific to health practices.

## Examples

A fictional home-services ladder:

```markdown
| Rung | Offer | Price | Gross margin | For whom | Moves up when |
|---|---|---|---|---|---|
| Free | "Is my water heater dying?" checklist | $0 | n/a | Homeowners searching symptoms | They book a visit from the checklist |
| Entry | Diagnostic visit, credited same day | $89 | 52% | Anyone with a problem | Quote approved on site |
| Core | Repair or replacement, written price | $250 to $3,400 | 58% avg | Diagnosed jobs | Job complete |
| Ongoing | Home Care Plan | $19/month | 71% at full use | Every completed job | Offered by the tech at job end |

Acquisition math: first-purchase contribution on an average $640 job = $371.
Other acquisition cost $40 (office time). Most per customer: $331.
At 39% booked, 91% show, 71% close: most per lead = $331 × 0.39 × 0.91 × 0.71 = $83.
Current cost per lead $20: well within the line.
```
