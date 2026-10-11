---
name: offer-builder
description: "When the user wants to create, fix or package an offer people say yes to without a discount: what's included, the name, the promise, the guarantee, the terms. Also use when they say 'build my offer', 'my offer isn't converting', 'people say it's too expensive', 'grand slam offer', 'irresistible offer', 'value stack', 'bonuses', 'guarantee', 'package my service', 'people price shop me', or 'what should my front-end offer be'. Produces one offer sheet that every page, ad and script copies. For tiers and price points across several offers, see offer-ladder-pricing. For the one-page version for sales calls, see one-page-offer."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# Offer builder

You'll finish with an **Offer Sheet**: one approved version of the offer with its name, a one-sentence promise, who it's for and not for, everything included with what each piece does for the buyer, the price and the margin math behind it, a guarantee you can keep, real scarcity if any, the written terms, and a capacity check. It's the single source every ad, page, setter script and invoice copies, so the price and terms never drift.

A strong offer makes the buyer feel it's more valuable than the money, without a discount doing the work. That comes from four levers: how much they want the result, how sure they are they'll get it, how fast, and how little effort it takes them. The four levers are Alex Hormozi's value equation from *$100M Offers*, where a stacked offer built this way is called a "grand slam offer".

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. You need section 2 (current offers and prices), section 3 (best client) and section 10 (constraints).
- If business-context is missing, offer to run **business-context** first, or ask:
  1. What do you sell today, at what price, and what does it cost you to deliver one?
  2. Who's your best client, and what result do they want in their own words?
  3. What do people say when they don't buy?
- If section 3 is generic, run **best-client-profile** first. An offer for everyone sells to no one.

## How to do it

### 1. Write the one-sentence promise

```
We help <specific who> get <result in their words> so they can <bigger outcome>
without <the thing they most want to avoid>.
```

- **Who**: specific enough to exclude people. "Two-van plumbing companies", not "home service businesses".
- **Result**: what they get, in their words. Describe what they receive and what you do, not a guaranteed outcome.
- **Without**: the effort, risk or past bad experience they fear ("without learning ads", "without a surprise bill").

### 2. Score the four levers

The levers come from Alex Hormozi's value equation (*$100M Offers*): value rises with the dream outcome and the buyer's confidence, and falls with time delay and effort.

Score the current offer 1 to 10 on each, with one line of evidence:

| Lever | Question | Raise it by |
|---|---|---|
| Dream result | How badly do they want what this gets them? | Name the result in their words; tie it to the after identity |
| Confidence | How sure are they it will work for them? | Proof from the ledger, a visible method, a guarantee you can keep |
| Speed | How soon do they feel the first win? | A quick win in the first 7 days; milestones they can see |
| Effort | How much do they have to do or give up? | Do more of the work, templates, fewer decisions, done with them |

Fix the lowest lever first. Most offers are weakest on speed or effort, not on the dream.

### 3. Name the first step

The buyer books or buys something with a name, not "a consultation" or "a call". "The Straight Price Visit." "The 90-Day Numbers Review." The first step must be worth what they pay even if they buy nothing else, and it must say plainly what happens if the answer is "this isn't for you".

### 4. Build the stack

List everything included. For each item, say which lever it moves and what it costs you.

| Slot | Item | Lever it moves | Cost to deliver | Value basis |
|---|---|---|---|---|
| Core | The main thing they buy | Dream result | | Your list price |
| Accelerator | Gets the first win faster | Speed | | Your list price, or "not sold separately" |
| Tool | Template, checklist, script, software | Effort | | |
| Access | Calls, messages, community, reviews | Confidence | | |
| Keep | Something they keep that isn't money off | Confidence | | |

Rules for the stack:

- Every item must be useful on its own. If you'd be embarrassed to explain why it's there, cut it.
- **Value basis** is your own published price for that item, or "not sold separately". Never an estimate. Only show a "worth $X" total if every line has a confirmed basis.
- Credits, coupons, percent-off and gift cards are not value. They don't count toward the stack.
- Every offer needs at least one thing the buyer keeps that isn't a discount.
- Bigger packages add sessions, reviews, support or tools. Never just more units of the same thing.
- Name items for what they do ("Monday Numbers Template"), not with hype.

### 5. Price it from cost up

```
Delivery cost  = materials + time of whoever delivers (full employment cost) + processing fees + commission
Target price   = delivery cost ÷ (1 − 0.60)     (60% gross margin target)
Floor price    = delivery cost ÷ (1 − 0.45)     (never ship below 45%)
```

Then check against the market and the value. If the market price is below your floor, change the offer (narrower, more valuable, cheaper to deliver), not the margin. Mark any cost the owner didn't give as unknown, not zero.

Discount check (starting point, adjust to your margins): if the offer takes more than 30% off its normal value, the bonuses and support must add back at least 15% of that value, or replace the discount with added value. Deep percent-off headlines train people to wait for the next sale.

For tiers, payment plans and the full price ladder, hand off to **offer-ladder-pricing**.

### 6. Pick a guarantee you can keep

Guarantee what you control: the work, the process, the response time, the access. Never an outcome that depends on the buyer, the market or their body.

| Type | Example (fictional) | Use when |
|---|---|---|
| Process | "If we're not there in your 2-hour window, the visit is free." | You control timing and delivery |
| Satisfaction on the first step | "If the first session isn't useful, we refund it." | First step is cheap to refund |
| Leave clause | "After 60 days, either side can end it, no argument." | Ongoing services |
| Do-it-again | "If the repair fails in 12 months, we fix it at no charge." | You control the workmanship |

Write the exact conditions. A guarantee with hidden conditions is worse than none.

### 7. Add scarcity and urgency only if they're real

Scarcity needs three things written down: the real number of places, the real close date, and the reason the number is what it is (capacity, a cohort start, a season). No fake countdowns, no "only 3 left" that resets.

### 8. Write the terms

Before anyone pays, the buyer sees: what's included and what isn't, when payment is taken, cancellation and reschedule rules, refund terms, how any credit or deposit is applied (once, toward the balance, with a minimum and an expiry), and any separate costs. In health businesses, also what the first visit may conclude (including "no treatment recommended") and that clinical decisions come after assessment.

### 9. Check capacity

Count every hour the offer obliges you to deliver, not just the first appointment. If selling 20 means 60 sessions next month, the calendar must hold 60. If it can't, cap the offer and say so in the scarcity line.

### 10. Run the publish gate

Run every line of [references/offer-gate.md](references/offer-gate.md). Nothing ships with a failed line. Then write the offer into section 2 of `.agents/business-context.md` and append a changelog line.

## The Offer Sheet format

```markdown
# Offer Sheet: <Offer name>
Version: <n> · Approved by: <owner> · Date: <date>

**Promise:** We help ... get ... so they can ... without ...
**For:** <best client, one line> · **Not for:** <screen-out signs>
**First step:** <named first step, price, what happens, what it concludes>

## What's included
| Item | What it does for you | Value basis |

**Price:** <price> · **Payment:** <when, how, plans>
**Margin:** delivery cost <x>, price <y>, gross margin <z>% (internal only)
**Guarantee:** <exact wording and conditions>
**Scarcity:** <count, close date, reason> or "none"
**Terms:** <cancellation, reschedule, refund, credits, exclusions>
**Capacity:** <units per month the calendar can hold>

## Paste-everywhere block
<the 3 to 5 lines every page, ad and script must match word for word: name, price, what's included, guarantee, key terms>

Proof used: P-...
```

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Promise | One sentence, specific who, result in their words, a real "without" |
| 2 | Levers | All four scored; the weakest has at least 2 improvements in the stack |
| 3 | First step | Named, worth paying for alone, says what it may conclude |
| 4 | Stack | Every item says what it does; no credits counted as value; at least one non-discount keep |
| 5 | Value basis | Every stated value is a published price or "not sold separately" |
| 6 | Margin | Price at or above the 45% floor, with every cost shown or marked unknown |
| 7 | Guarantee | Covers only what the business controls, with written conditions |
| 8 | Scarcity | Real count, date and reason, or none |
| 9 | Terms | Cancellation, refund, credit and exclusions written |
| 10 | Capacity | Every obliged hour fits the calendar |
| 11 | One version | Paste-everywhere block exists |
| 12 | Proof | Every claim maps to the ledger or a visible [NEEDS PROOF] |

## Rules

- Never guarantee an outcome the business doesn't control. Guarantee the work, never the result.
- Never invent a "value" figure, a retail price or a fee created only to waive it.
- Never price below delivery cost, and never plan to lose money on the first step hoping they buy more.
- Never build a bigger tier whose only job is to make another look cheap.
- Never run scarcity or urgency that isn't real.
- One version of price and terms everywhere. If two versions are live, the chokepoint is the offer.
- Offer names never promise permanence, a measured result, a guarantee, a cure or a brand name you don't own.
- In health businesses, the clinician defines what the first visit is; run **health-claims-check** before publishing.

## Related skills

- **best-client-profile**: who the offer is for.
- **positioning**: the method the offer delivers.
- **offer-ladder-pricing**: tiers, entry offers, payment plans and the full price ladder.
- **one-page-offer**: the offer on one page for sales calls.
- **proposal-and-payment**: turns the sheet into a proposal and a payment link.
- **clinic-offers**: the health-practice version with clinical rules built in.

## Examples

A full Offer Sheet for a fictional business coach is in [references/offer-gate.md](references/offer-gate.md), after the gate.
