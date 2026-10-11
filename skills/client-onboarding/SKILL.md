---
name: client-onboarding
description: "When the user has just signed a new client or customer and needs to get them set up, or wants a repeatable new-client checklist. Also use when they mention 'onboard a new client,' 'kickoff call,' 'new client checklist,' 'client intake,' 'welcome packet,' or 'first 30 days.' Covers both an agency-style client relationship and a direct service business (a patient, a homeowner, a program member). For the step-by-step process document itself, see sop-generator. For an AI assistant that answers client questions after onboarding, see client-assistant."
metadata:
  version: 1.0.0
  chokepoint: fulfillment
  pack: core
---

# Client Onboarding

You'll finish with a filled-in onboarding record for one client, a repeatable template you can run on the next signing in minutes, and a dated first win inside the first 7 days.

## Before you start

Read `.agents/business-context.md` (sections 1, 2, and 7: Business, Offers and prices, Channels) and `.agents/proof-ledger.md` if they exist: what's sold, at what price, and what's already proven. If business-context is missing, offer to run **business-context** first, or ask only what you need:
1. What triggers onboarding (signed contract, first payment, or both)?
2. Is this an ongoing service relationship (an agency client, a coaching client, a membership) or a single transaction with a defined end (a home-services job, a one-time medical visit)? The template below covers both; pick the matching path.
3. What systems does the client get set up in (CRM, project tool, shared folder, calendar)?

## How to do it

1. **Confirm the trigger.** Don't start client-facing setup before the contract is signed or the first payment clears.
2. **Create the client record** using the template below: contact info, the exact package sold, price, start date, and main points of contact on both sides.
3. **Grant and log access**, if this relationship needs any (an agency client sharing ad accounts; a program member getting portal access). A single-visit service business usually skips this step entirely.
4. **Build the right kickoff packet for the relationship type:**
   - **Ongoing/agency-style:** goals, past results if any, compliance constraints, who approves creative or copy, brand voice preferences.
   - **Direct service/single-visit:** what to expect at the first appointment or delivery, any intake or consent forms, how to reach the business with questions, and what happens if something goes wrong (reschedule policy, warranty, guarantee).
5. **Schedule the kickoff moment**, same week as signing as a starting point, replace with your own number once you've tracked a few cycles. For an ongoing relationship this is a kickoff call; for a single-visit business it's the first appointment itself.
6. **Set the delivery schedule**: first deliverable date, recurring cadence, and the owner of each piece.
7. **Name the first win.** Pick one concrete thing the client will see, use, or receive inside the first 7 days, specific enough that they'd notice if it didn't happen (the first report, the first completed repair, the first resource sent, the first session recap). A new client who goes 7 days without visible progress is the most common reason relationships stall early.
8. **Set the communication baseline**: cadence and channel, agreed with the client (see **marketing-scoreboard**, **weekly-review**).
9. **Run the Definition of Done checklist** before calling onboarding complete.

## Template: client onboarding record

```markdown
# Onboarding: [Client name]

- Relationship type: [ ] Ongoing/agency-style  [ ] Direct service/single-visit
- Trigger cleared: [contract signed / payment cleared] on [date]
- Package sold: [name] at [price] | Start date: [date]
- Main contacts: ours [name], theirs [name]

## Access granted (ongoing relationships only; skip for single-visit)
| What | Where the credential lives | Granted by | Date |
|---|---|---|---|
| | | | |

## Kickoff packet
- Ongoing: [ ] Goals and past results  [ ] Compliance constraints  [ ] Who approves creative or copy  [ ] Brand voice notes
- Direct service: [ ] What to expect at first appointment  [ ] Intake or consent forms  [ ] How to reach us  [ ] What happens if something goes wrong

## Kickoff moment
- Date: | Logged: [y/n]

## First win (inside 7 days)
- What: | Due date: | Delivered: [y/n]

## Delivery schedule
| Deliverable | First due | Recurring cadence | Owner |
|---|---|---|---|

## Communication baseline
- Cadence: | Channel: | Agreed on:

## Definition of Done
- [ ] Trigger cleared with a date on record
- [ ] Client record complete, relationship type marked
- [ ] Every access grant logged, no raw credentials in shared notes (if applicable)
- [ ] Kickoff packet collected or flagged missing, matching the relationship type
- [ ] Kickoff moment happened and is logged
- [ ] First win is named with a due date inside 7 days
- [ ] Reporting cadence and channel agreed and written down
- [ ] Any claim constraint flagged for the relevant compliance check
```

## Check it

Run the Definition of Done block above. One fix per failed line: don't move to the next client until the specific gap closes or is explicitly handed off with an owner and date.

## Rules

- Never start client-facing work before the agreed trigger clears.
- Never store a live credential in a shared doc or chat; store its location, use a password manager or secrets tool for the credential itself.
- Never mark a step done that didn't happen; mark it open with an owner and date.
- Flag any health, legal, or before/after claim constraint immediately.
- Never skip naming the first win because the relationship "obviously" has momentum; name it and date it every time.

## Related skills

- **sop-generator**: turn this checklist, or any other repeating process, into a document someone new can follow without you.
- **client-assistant**: stand up the client-facing AI assistant as part of step 6, for ongoing relationships.
- **marketing-scoreboard**: the weekly numbers the communication baseline will report against.

## See it worked

`references/example.md` runs this template for a fictional business coaching practice (ongoing) and a fictional home-services job (single-visit).
