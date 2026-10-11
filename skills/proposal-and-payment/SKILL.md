---
name: proposal-and-payment
description: "When the user wants to send a proposal, quote or estimate and get paid without friction: the written scope, price, terms, payment options, deposit, and the confirmation after payment. Also use when they say 'write a proposal', 'send a quote', 'estimate template', 'payment link', 'deposit', 'payment plan', 'they said yes but haven't paid', 'invoice', 'contract terms', or 'how do I take payment on the call'. Produces a one-page proposal, the payment step and the messages around it. For the call before it, see sales-call-playbook. For setting prices and tiers, see offer-ladder-pricing."
metadata:
  version: 1.0.0
  chokepoint: closed
  pack: core
---

# Proposal and payment

You'll finish with a **proposal** the prospect can read in three minutes (their goal in their words, the one recommendation, exactly what's included and excluded, the price, payment options with totals, and the terms) plus the **payment step** and the messages around it: the send, the confirmation once payment is verified, and a short dated chase for anyone who said yes but hasn't paid.

Deals die between "yes" and "paid". A clear proposal sent while the call is still warm, with one obvious way to pay, closes that gap.

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. You need section 2 (offers, prices, terms) and section 10 (constraints). If an Offer Sheet from **offer-builder** exists, its paste-everywhere block is the only allowed version of price and terms.
- If business-context is missing, offer to run **business-context** first, or ask:
  1. What exactly are you proposing, at what price?
  2. How do people pay (card, bank transfer, financing, deposit), and when?
  3. What are your refund, cancellation and reschedule terms?
- Get the call notes or recap: the prospect's goal and concerns in their words.

## How to do it

### 1. Write the proposal

One page. This order:

```markdown
# Proposal for <prospect or business, as they'd write it>
Prepared by <owner, title> · <date> · Valid until <date>

## What you told us
<2 to 3 lines: their goal and what's in the way, in their words>

## What we recommend
<one recommendation, and one line on why it fits what they said>

## What's included
- <item, with quantity: sessions, visits, deliverables, products and amounts>
- ...
## Not included
- <the things people often assume are included>

## Investment
- Pay in full: <total> <and any added-value bonus for paying in full>
- Payment plan: <n> payments of <amount> (total <amount>)
- Deposit or credit, if any: <amount>, applied once toward the balance, <minimum, expiry>

## Terms
- When payment is taken: ...
- Start date and first step: ...
- Cancellation and reschedule: ...
- Refund or guarantee: <exact wording from the Offer Sheet>
- Anything charged separately: ...

## Next step
<one action: the payment link, and what happens right after it>
```

Rules for the content:

- **Specific, not "per area".** List quantities and included follow-up. The price covers exactly what's listed.
- **One recommendation.** If they discussed a bigger option they're not buying now, you may show it as "discussed for later", unpriced or clearly not charged.
- **Valid-until date** only if the price really changes after it.
- **No outcome promises.** Describe the work and the guarantee you control.
- Any result or testimonial included comes from the proof ledger with permission that covers sales documents.

### 2. Set up the payment step

- **One link, one action.** Card or bank payment link for the exact amount and option chosen. No "reply and we'll invoice you".
- **Take it on the call when you can.** "I'll send the link now while we're on." Stay on until it goes through or a real blocker appears.
- **Plans:** the buyer sees the plan total next to the pay-in-full total before choosing.
- **Recurring billing:** separate, explicit agreement to the recurring charge, its amount and how to cancel.
- **Financing:** never show a monthly figure without the example amount, the term and the annual rate together. Any pre-approval is its own step, not part of a marketing consent.
- **Deposits:** wording matches how the business handles them (refundable or credited, by when).
- **One invoice per sale.** Check before creating another so nobody is charged twice.

### 3. Confirm only on verified payment

A payment counts when the payment system shows it succeeded, not when the prospect says "done". Then send the confirmation within the hour:

> Payment received, thank you. Here's what happens next:
> 1. <first step, with date and time>
> 2. <what we need from you, by when>
> 3. <how to reach us>
> Your receipt and terms are attached.

Record the sale in the CRM as paid, with the amount, the option chosen and the terms version sent. Keep cash collected and revenue earned as separate numbers; a prepaid package is work still owed.

### 4. Chase "yes but not paid", briefly and with a date

| When | Message |
|---|---|
| 2 hours after the call | "Here's the link again for [option]. Anything stopping it from going through?" |
| Next day | "Want me to hold [start date] for you? I can until [date]." |
| Day 3 | A short call or voice note: "Is something unresolved? Happy to talk it through." |
| Day 7 | Last message: "I'll close this out for now. If anything changes, reply here." Then stop. |

Each prospect has one owner and a dated next step on the pending list. If they reply with a concern, answer it (see **objection-handling**) before re-sending the link.

### 5. Handle "can you do it cheaper?"

Find out which it is: the total, the timing of payments, or the size of the commitment. Then offer an approved payment plan, or an approved smaller option that still fits their goal. Never invent a discount on the spot, and never a smaller service presented as if it does the same job.

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Their words | "What you told us" quotes or closely paraphrases the prospect |
| 2 | One recommendation | A single offer, with why it fits |
| 3 | Specific scope | Quantities listed, exclusions listed |
| 4 | One version | Price and terms match the Offer Sheet word for word |
| 5 | Totals | Plan total shown next to pay-in-full total |
| 6 | Terms | Payment timing, cancellation, refund and separate charges written |
| 7 | Disclosure | Financing and recurring billing fully disclosed, consent separate |
| 8 | One action | A single payment link and what happens after it |
| 9 | Verified | Confirmation sent only after the payment system shows success |
| 10 | Chase ends | Follow-up has dates and a last message |
| 11 | Proof | Any result cited is in the ledger with fitting permission |

## Rules

- Never promise an outcome, scope or price that isn't in the approved Offer Sheet.
- Never show a "worth" figure or a discount that isn't real and documented.
- Never take payment while a concern the prospect named is unanswered.
- Never mark a sale paid from a chat message. Verify in the payment system.
- Never send more than one invoice for the same sale.
- Never enlarge the agreed scope at checkout. In health businesses, whoever takes payment may not add to the plan the clinician approved.
- Never put private details (health information, card numbers) in a proposal, email subject or message preview.
- Send one proposal at a time, reviewed by a person before it goes out.

## Related skills

- **sales-call-playbook**: the call that leads to this proposal.
- **objection-handling**: answers for concerns raised before paying.
- **offer-builder**: the Offer Sheet this proposal copies.
- **offer-ladder-pricing**: plans, deposits and financing rules.
- **client-onboarding**: what happens after payment.

## Examples

A fictional home-services proposal (business, customer and prices invented):

```markdown
# Proposal for the Alvarez household (internal ID BL-3318)
Prepared by Brightline Plumbing & Drain (fictional) · 2026-10-11 · Valid until 2026-10-25

## What you told us
"No hot water two mornings this week, and I don't want a surprise bill." You want it fixed once, with the price up front.

## What we recommend
Replace the 14-year-old 50-gallon gas water heater, because the tank is leaking at the base and repairs won't last.

## What's included
- Remove and dispose of the old heater
- Install one 50-gallon gas water heater (model on the attached quote)
- New shut-off valve, expansion tank and venting connector
- City permit and inspection
- 6-year parts warranty, 1-year labor warranty
## Not included
- Moving the heater to a new location
- Drywall or flooring repairs

## Investment
- Pay in full: $2,450
- Payment plan: 3 monthly payments of $835 (total $2,505)
- Today's $89 diagnostic visit is applied once, so the balance is $2,361 (or 3 payments of $805.33, total $2,416)

## Terms
- Pay in full: half when you book the install, the rest when the job passes inspection. Payment plan: first payment when you book, then monthly
- Reschedule with 24 hours' notice at no charge
- If the install leaks within 12 months, we fix it at no charge
- Permit fee is included; any code upgrades the inspector requires are quoted before work

## Next step
Use the link below to pay the deposit and pick an install window this week.
```
