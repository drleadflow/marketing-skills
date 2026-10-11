---
name: one-page-offer
description: "When the user wants a single page that explains their offer, to send before or after a sales call, walk through on screen, or pass to a partner who also decides. Also use when they say 'one-pager', 'one sheet', 'offer overview', 'program overview', 'what's included doc', 'something to send after the call', 'service summary', or 'turn my sales page into one page'. Produces a one-page decision document: where they are, where it gets them, the phases, what's included, what they bring, the first 14 days and how to start. For designing the offer itself, see offer-builder. For a priced proposal with payment, see proposal-and-payment."
metadata:
  version: 1.0.0
  chokepoint: offer
  pack: core
---

# One-page offer

You'll finish with a **one-page offer**: a page a prospect can read in two minutes and show to whoever else decides. It answers the questions people ask before they buy, in order: is this for someone like me, what changes, how does it work, what do I get, what do I have to do, what happens first, and how do I start. It's written from the customer's words and the business's real delivery schedule, so nothing on it is a promise the business can't keep.

The page is a decision tool, not a brochure. If a prospect can't explain the offer to their partner after reading it, the page failed.

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. You need section 2 (the offer and terms), section 3 (best client, in their words), section 4 (problems, promise, process, positioning) and section 6 (voice). If an Offer Sheet from **offer-builder** exists, it's the source of truth for scope and terms.
- If business-context is missing, offer to run **business-context** first, or ask:
  1. What's the offer called, how long does it run, and what happens in it, step by step?
  2. Who's it for, and how do they describe their situation before and after?
  3. What does the customer need to do or provide for it to work?
- Read any sales page, deck or call notes the owner has. Reuse their words. Don't invent claims.

## How to do it

### 1. Write the headline

One line: who it's for and what they get, in plain words. Under it, one line naming the offer and the owner.

```
For <who>, a <length or scope> <service type> that <what they get>.
<Offer name> · <Owner name, title>
```

Fictional example: "For plumbing companies with two or three trucks, a 90-day setup that gets every lead a reply within minutes."

### 2. "Where you are": three lines

Three short bullets describing the situation the best client is in, taken from section 3 (In their words). Write them as the prospect would say them. No diagnosis, no blame, nothing that tells them what's wrong with them.

### 3. "Where this gets you": three lines

Three bullets describing what's different afterward, limited to what the business controls or the customer builds: things they'll have, know or be able to do. Never a guaranteed number. "A reply goes out to every lead within 5 minutes" is fine. "Double your bookings" isn't.

### 4. "How it works": the phases

Lay out the delivery as 3 to 5 phases on a timeline. Each phase gets a name, when it happens, what happens, and what they walk away with.

| Phase | When | What happens | You walk away with |
|---|---|---|---|
| | | | |

Use the method name and pillars from section 4 (Positioning) if they exist, so the page matches every other asset. Each phase should end in something the customer can point to: a document, a setup, a decision, a result they measured.

### 5. "What's included": a table from the real schedule

List each deliverable once, with how often it happens over the whole offer and what it's for.

| Included | How many | What it's for |
|---|---|---|
| | | |

Work every number from the actual calendar of the offer: count the sessions, reports or visits on the schedule, including the weeks that are skipped for holidays. If the owner can't confirm a number, write "as needed" or ask. A smaller true number beats a bigger round one.

Keep it to the 6 to 10 things that matter to the buyer. Fold small items into the one they belong to.

### 6. "What we need from you"

List 3 to 5 things the customer must do or provide for the offer to work: access, time per week, a person on their team, information by a date. Take them from the success behaviors in section 3. This line sets expectations and filters out people who won't do the work. It also makes the guarantee fair.

### 7. "Your first 14 days"

Three or four concrete things that happen in the first two weeks, with day numbers. The first win should land inside this window. If nothing useful happens for 14 days, fix the offer (see **offer-builder**, the speed lever) before writing this page.

### 8. "Not a fit if"

Three bullets from the screen-out list in section 3, written kindly. "You want it fully done for you without looking at the numbers" is honest and saves both sides a call.

### 9. "How to start"

Numbered steps, three to five, ending in the first scheduled session. Include price and payment here only if the business publishes its prices; otherwise point to the proposal ("You'll get a written proposal with price and terms after the call").

### 10. Sign and check proof

Close with the owner's name and title exactly as recorded in the proof ledger. Any background line ("12 years doing X") or result must be an approved ledger claim whose permission covers sales documents; otherwise use `[NEEDS PROOF: ...]`. List `Proof used:` under the draft.

### 11. Fit it on one page

Show the Markdown first. If the owner wants a file, make a one-page document or PDF with a plain font around 11 point. If it spills over, cut words in the bullets, never phases or deliverables.

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Questions answered | Headline, where you are, where this gets you, how it works, what's included, what we need, first 14 days, not a fit, how to start |
| 2 | Their words | "Where you are" uses phrases from section 3 |
| 3 | Controllable promise | "Where this gets you" has no guaranteed numbers |
| 4 | Phases | 3 to 5 phases, each ending in something the customer can point to |
| 5 | True counts | Every number traces to the offer's real schedule |
| 6 | Customer's part | 3 to 5 concrete things they must do or provide |
| 7 | Fast start | A first win lands inside 14 days |
| 8 | Matches the offer | Scope, terms and names match the Offer Sheet and section 4 |
| 9 | Proof | Every background line or result is in the ledger, or marked [NEEDS PROOF] |
| 10 | One page, clean | Fits one page; no em or en dashes; no hype words |

## Rules

- Never list a deliverable the business doesn't provide, or a count it doesn't meet.
- Never promise a measured outcome. Describe what they get and what the business does.
- Never use a credential, result or testimonial that isn't an approved proof-ledger claim with fitting permission.
- Never describe the prospect's situation in a way that shames them.
- Keep one version: if the page and the Offer Sheet disagree, the Offer Sheet wins and the page is fixed.
- In health businesses, the page describes the visit and the process, never a clinical result; run **health-claims-check** first.

## Related skills

- **offer-builder**: the Offer Sheet this page summarizes.
- **positioning**: the method name and pillars used in the phases.
- **best-client-profile**: the words for "where you are" and the screen-out list.
- **sales-call-playbook**: walks through this page on the call.
- **proposal-and-payment**: the priced document that follows.

## Examples

A fictional 90-day agency service (business, owner and details invented):

```markdown
# For plumbing companies with two or three trucks, a 90-day setup that gets every lead a reply within minutes.
Clear Calendar Setup · Jordan Reyes, founder, Clear Calendar (fictional)

## Where you are
- "We find leads in the inbox two days late."
- "The answering service takes a message and that's it."
- "I'm paying for ads and can't tell which calls came from them."

## Where this gets you
- Every lead, from every source, gets a reply within 5 minutes during business hours.
- Your office has a script that offers two real times on the first call.
- A weekly report shows leads, bookings and jobs by source.

## How it works
| Phase | When | What happens | You walk away with |
|---|---|---|---|
| Map | Weeks 1 to 2 | We trace every way a lead reaches you | A lead flow map |
| Reply | Weeks 3 to 5 | Instant text and call routing on every source | Replies in minutes |
| Book | Weeks 6 to 8 | Office script and training | A booking script your team uses |
| Measure | Weeks 9 to 12 | Weekly numbers and one fix a week | A report you read in 5 minutes |

## What's included
| Included | How many | What it's for |
|---|---|---|
| Kickoff and lead flow map | 1 | See where leads leak today |
| Reply setup across lead sources | all sources | Nobody waits |
| Office training sessions | 2 | The script becomes habit |
| Weekly lead report | 11 | Know what's working |
| Monthly review call | 3 | Decide the next fix together |
| Weekday message access | 90 days | Questions answered within a business day |

## What we need from you
- Admin access to your phone system, forms and ad accounts in week 1
- One person in the office who owns the phone
- 30 minutes a week for the report

## Your first 14 days
- Day 1: kickoff call
- Day 5: lead flow map delivered
- Day 10: instant reply live on your main lead source
- Day 14: first weekly report

## Not a fit if
- You don't have someone to answer the phone during business hours
- You can't share access to your systems
- You want more leads before fixing replies to the ones you have

## How to start
1. 20-minute call to check fit
2. Written proposal with price and terms
3. Kickoff booked within 7 days of signing

[NEEDS PROOF: owner's years of experience setting up lead follow-up]
Proof used: none
```
