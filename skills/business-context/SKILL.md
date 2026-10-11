---
name: business-context
description: "When the user wants to set up or update the shared business context file every marketing skill reads: what they sell, prices, best client, promise, voice, channels and numbers. Also use when they say 'set up my business context', 'here is a brain dump of my business', 'update my prices', 'we changed our offer', 'my numbers changed', 'onboard me', or when any other skill finds .agents/business-context.md missing. Run this first in a new project. For allowed results and testimonials, see proof-ledger. For finding the weakest stage of the business, see chokepoint-audit."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Business context

You'll finish with `.agents/business-context.md`: one file that says what the business sells, to whom, at what price, how it sounds, where customers come from and what the numbers are. Every other skill in this repo reads it before it writes a word, so you answer these questions once instead of fifty times. It keeps a dated changelog, so you can always see what changed and when.

## Before you start

- Look for `.agents/business-context.md`. If it exists, read it and switch to **update mode** (step 1). Also read `.agents/proof-ledger.md` if it exists.
- Look for material the owner already has: website, sales page, offer doc, pitch deck, call notes, a past brain dump. Ask for links or files once. Draft from them before asking anything.
- If you have nothing at all and the owner is short on time, ask only these 3 questions, then write a partial file and mark the rest as open:
  1. What do you sell, and what does it cost?
  2. Who buys it? Describe your best customer in one or two sentences.
  3. Roughly how many new leads and new customers do you get a month, and from where?

## How to do it

### 1. Pick the mode

| Mode | When | What you do |
|---|---|---|
| Create | No file exists | Brain dump, extract, fill gaps, write the whole file |
| Update | The owner says something changed (price, offer, numbers, team) | Change only the affected section, append a changelog entry |
| Review | The file's "Last updated" date is more than 90 days old, or a skill found facts that contradict it | Read each section back in one line, ask "still true?", update what changed |

### 2. Get a spoken brain dump

Owners talk faster than they type, and spoken answers carry their real words. Send this, then wait:

> Talk to me for 10 to 15 minutes. Use voice dictation and ramble; messy is perfect, structuring it is my job. Cover whatever you can of this:
> 1. What you sell, every offer, and what each one costs.
> 2. Your favorite customer ever. Who they are, what was going on when they found you, what they said.
> 3. What people complain about before they buy. Use their exact phrases if you remember them.
> 4. What they get after working with you. What they say then.
> 5. How you deliver it, step by step.
> 6. Where customers come from today (referrals, ads, social, search, walk-ins).
> 7. Your rough monthly numbers: leads, booked calls or appointments, how many show, how many buy, average sale.
> 8. What you want in the next 90 days and the next 12 months.
> 9. Rules you can't break: licensing, industry rules, things you never say.
> 10. Words or phrases you love, and ones you hate.

If they'd rather type, take a list of short answers. If they paste a transcript of a sales call or a voice memo, use that too.

### 3. Extract into the ten sections

Sort everything into the template in [references/template.md](references/template.md). For each fact, keep its origin in brackets so nobody mistakes a guess for a fact:

- `(owner)` the owner said it
- `(site)` or `(doc)` you read it in their material
- `(assumed)` your inference; must be confirmed before any skill relies on it

Keep the customer's words in quotes, exactly as said. "I'm sick of chasing leads" beats "lead management challenges". Section 3 (best client) and the problems and promise lists should be mostly quotes.

### 4. Fill the gaps, 3 questions at a time

After extracting, list what's missing. Ask at most 3 questions per round, in this priority order:

1. Offer and price (section 2). Nothing downstream works without it.
2. Best client and their words (section 3).
3. Numbers (section 8).
4. Constraints (section 10). Ask directly: "Is this a health, money, legal or licensed-trade business? Any claims you're not allowed to make?"
5. Everything else.

Reflect back what you understood in one tight line before each new round. If an answer is vague, offer a sharper guess for them to confirm ("Sounds like you mean homeowners with houses older than 30 years, not landlords. Right?") instead of re-asking.

Stop when the three must-haves are filled and the owner says "write it". Unfilled fields go in **Open questions**, never invented.

### 5. Get the numbers right

Numbers drive **chokepoint-audit** and **marketing-scoreboard**, so define them before collecting them. Use the last 90 days, one time window for everything, and these definitions:

| Metric | Count it as |
|---|---|
| Leads per month | People (not messages, not form fills) who contacted you or gave contact details |
| Lead to booked rate | Booked appointments or calls ÷ leads, same window. A request is not a booking until it's on the calendar |
| Show rate | Showed ÷ booked appointments whose date has passed |
| Close rate | Bought ÷ showed |
| Average first purchase | Revenue from first purchases ÷ number of new customers |
| Average customer value | Revenue per customer over 12 months (say "not recorded" if unknown) |
| Repeat or rebook rate | Customers who bought again within your normal return window ÷ customers who could have |
| Referral share | New customers who came from a referral ÷ all new customers |
| Speed to first reply | Median minutes from lead arriving to first real human or conversational reply (not an auto-acknowledgment) |
| Cost per lead, ad spend | Only if they run paid ads |
| Paid ads targets | Only if they run paid ads: the conversion event ads optimize toward (the real booked or bought action), and the excellent, acceptable and pause bands for cost per result |

Write "not recorded" for anything they don't track. **Never write 0 for a blank.** A missing number is itself a finding.

If they only have counts, do the division for them and show both: `Show rate: 62% (31 of 50 booked, Jul to Sep)`.

### 6. Write the file

Write `.agents/business-context.md` using the exact headings in [references/template.md](references/template.md). Other skills look for these headings by name, so don't rename or reorder them. Set `Last updated` to today and `Version` to 1 (or bump it).

Section 5 holds a pointer only: "See `.agents/proof-ledger.md`." Results and testimonials live in the ledger, not here.

### 7. Append to the changelog

Every save adds one dated line at the bottom. Never edit or delete an old entry.

```
- 2026-10-11 v3: Changed main offer price $1,500 → $1,800 (owner). Reason: added a second follow-up visit. Sections: 2.
```

When a fact changes, update it in its section and record the old value in the changelog. That's how the file stays current without losing history.

### 8. Hand back

Show the owner a 10-line summary (one line per section), the open questions, and the next step:

- No proof ledger yet → run **proof-ledger**.
- Numbers filled in → run **chokepoint-audit** to find the weakest stage.
- Best client thin or generic → run **best-client-profile**.

## Check it

Score the file before you show it. Fix every failed line.

| # | Check | Pass when |
|---|---|---|
| 1 | Headings | All ten numbered sections, Open questions and Changelog exist with the exact template names |
| 2 | Offer | Every offer has a name, price, what's included and who it's for |
| 3 | Customer words | Section 3 and the problems and promise lists contain at least 5 quoted phrases in the customer's words |
| 4 | Origins | Every fact is tagged (owner), (site), (doc) or (assumed) |
| 5 | Numbers | Every metric has a value or "not recorded", a period and a source. No blank reads as 0 |
| 6 | Rates | Every rate shows its numerator, denominator and window |
| 7 | Constraints | Section 10 states the industry, any regulated claims, and "none known" only if the owner said so |
| 8 | No proof here | No testimonials or results in this file; section 5 points to the ledger |
| 9 | Changelog | Today's dated entry exists and older entries are untouched |
| 10 | Plain language | No hype words, no em or en dashes |

## Rules

- Never invent a fact, number, price, credential or customer quote. Unknown goes in Open questions.
- Never write 0 for a number nobody tracked. Write "not recorded".
- Never store private customer data here: no names, phone numbers, emails, addresses or health details of individual customers. Describe patterns, not people.
- Never rewrite or delete changelog entries.
- Never rename the template headings. Other skills depend on them.
- Keep results, testimonials and claims out of this file. They go in the proof ledger with their permission status.
- An `(assumed)` fact is not used by any other skill until the owner confirms it.

## Related skills

- **proof-ledger**: right after this, to record what results and testimonials may be used.
- **chokepoint-audit**: once section 8 has numbers, to find the weakest stage.
- **best-client-profile**: when section 3 is thin or reads like a demographic.
- **positioning**: to write the positioning line stored in section 4.
- **brand-voice**: to turn section 6 into a full voice guide.
- **offer-builder**: when section 2 shows a weak or unclear offer.

## Examples

A filled file for a fictional home-services company is in [references/example.md](references/example.md).
