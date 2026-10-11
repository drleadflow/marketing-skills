# Example: a filled business-context file

The business, people and numbers below are fictional. They show the level of detail to aim for.

```markdown
# Business context: Brightline Plumbing & Drain (fictional)

> Maintained by the business-context skill. Every marketing skill reads this first.
> Last updated: 2026-10-11 · Version: 2

## 1. Business

- Name: Brightline Plumbing & Drain
- What we do, in one sentence a customer would say: "They fix the leak, tell you what it costs before they start, and clean up after." (owner, quoting a review)
- Type: local service
- Location and service area: one metro area, 25-mile radius (owner)
- Owner and key people: owner (licensed master plumber), office manager, 4 technicians (owner)
- Years in business: 11 (owner)
- Capacity: about 60 new jobs a month before wait times go past 3 days (owner)

## 2. Offers and prices

| Offer | Price | What's included | Who it's for | How they buy |
|---|---|---|---|---|
| Diagnostic visit | $89, credited to the repair if booked same day | Technician visit, camera inspection if needed, written quote | Homeowners with a problem they can't name | Phone or online booking (owner) |
| Water heater replacement | $1,850 to $3,400 by model | Removal, install, permit, 6-year parts warranty | Homeowners whose heater is 10+ years old | Quote after diagnostic (owner) |
| Home Care Plan | $19 a month | Yearly inspection, priority booking, no after-hours fee | Past customers | Offered at the end of a job (owner) |

- Main offer: water heater replacement (owner)
- Entry step: diagnostic visit (owner)
- Terms: credit applies same day only; 24-hour reschedule notice (doc)
- Gross margin, main offer: not recorded

## 3. Best client

- Who they are: a homeowner in their 40s to 60s in a house built before 1990, who wants it done right once and hates surprises on the bill (owner)
- Trigger: no hot water on a weekday morning, or a leak found under the sink (owner)
- Tried before: a handyman, a cheaper company that quoted low then added fees (owner)
- Who we don't want: landlords shopping for the lowest bid on every job; anyone who wants us to install parts they bought online (owner)

### In their words

- Before: "I just want someone who shows up when they say they will." (owner, from calls)
- Before: "The last guy gave me a price and then it doubled." (owner)
- After: "He showed me the camera footage, so I knew it was real." (site, review)
- Why they chose us: "You gave me the price before you touched anything." (site, review)

## 4. Problems, promise and process

### Problems

1. "I don't know if this is a $100 fix or a $3,000 one."
2. "Nobody calls back."
3. "I'm scared of getting ripped off."

### Promise

- The result they want: "Hot water back today, and a price I knew up front."
- What we can honestly promise: a written price before work starts, and a technician window we keep or we call ahead.

### Process

1. Book online or by phone, pick a 2-hour window.
2. Technician diagnoses, shows the footage, writes the price.
3. Approve, we fix it, clean up, explain the warranty.
4. Yearly reminder and the Home Care Plan offer.

### Positioning

- One-line positioning: (not written yet, run positioning)

## 5. Proof

See `.agents/proof-ledger.md`. Nothing in this file counts as proof.

## 6. Voice

- Three words: plain, calm, straight
- We say: "here's what we found", "your price", "before we start"
- We never say: "cheapest in town", "guaranteed lowest", any scare language about floods
- Sample (owner's real text to a customer): "Hi, it's Brightline. Tech is 20 minutes out. He'll call when he's parked."

## 7. Channels

| Channel | Role | Current activity | Owner |
|---|---|---|---|
| Google Business Profile | attention, leads | 140 reviews, posts monthly | Office manager |
| Local search ads | leads | $2,400 a month | Owner |
| Referrals | leads | No program, word of mouth | Nobody |
| Email to past customers | retention | Not sent since last spring | Nobody |

## 8. Numbers

Window: 2026-07-01 to 2026-09-30

| Metric | Value | Period | How counted | Source | As of |
|---|---|---|---|---|---|
| Leads per month | 118 | Jul to Sep avg | people, calls plus forms, deduped | Call tracking and CRM | 2026-10-05 |
| Speed to first reply | 47 min | median | first human callback | CRM timestamps | 2026-10-05 |
| Lead to booked rate | 39% (138 of 354) | Jul to Sep | booked ÷ leads | CRM | 2026-10-05 |
| Show rate | 91% (126 of 138) | Jul to Sep | tech arrived and customer home | Dispatch log | 2026-10-05 |
| Close rate | 71% (89 of 126) | Jul to Sep | approved a repair ÷ diagnostics done | Invoices | 2026-10-05 |
| New customers per month | 30 | Jul to Sep avg | | Invoices | 2026-10-05 |
| Average first purchase | $640 | Jul to Sep | | Invoices | 2026-10-05 |
| Average customer value (12 months) | not recorded | | | | |
| Repeat or rebook rate | not recorded | | | | |
| Referral share of new customers | not recorded | | | | |
| Monthly ad spend | $2,400 | | | Ad account | 2026-10-05 |
| Cost per lead | $20 (paid leads only) | | | Ad account | 2026-10-05 |
| Monthly revenue | $61,000 | Jul to Sep avg, cash | | Accounting | 2026-10-05 |
| Gross margin, main offer | not recorded | | | | |

Current chokepoint: Leads (speed to first reply), 2026-10-11. See chokepoint report.

## 9. Goals

- Next 90 days: 40 new customers a month without adding ad spend
- Next 12 months: second van and technician
- The number that matters most: new customers per month

## 10. Constraints

- Industry: licensed trade; permits required for water heaters (owner)
- Claims we may not make: "licensed" for any tech who isn't; "guaranteed lowest price"
- Platform limits: text messages only to people who opted in; no texts after 8pm local
- Privacy: no customer addresses or photos of homes in public posts without permission
- Owner's no-go list: no fear ads about burst pipes

## Open questions

- [ ] Gross margin on water heater installs
- [ ] How many past customers are in the CRM, and when each was last served
- [ ] Referral source: start asking "how did you hear about us" on every booking

## Changelog

- 2026-09-02 v1: Created from owner brain dump (owner) and website (site). Sections: all.
- 2026-10-11 v2: Numbers refreshed for Jul to Sep (owner, CRM). Speed to first reply added (not recorded → 47 min). Current chokepoint set. Sections: 8.
```
