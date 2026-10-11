---
name: setter-script
description: "When the user wants to write or fix the conversation a human or AI setter runs to book an appointment: SMS, DM, or chat. Also use when they mention 'setter script', 'booking script', 'DM script', 'qualify a lead by text', or 'what should my setter say'. For the hard rules an AI setter must never break, see ai-setter-guardrails. For what happens before this conversation starts, see speed-to-lead. For the reminder sequence after booking, see show-rate."
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: core
---

# Setter Script

You'll finish with a conversation script, organized by stage, that moves a warm lead from first reply to a booked, confirmed appointment, with branches for the replies that aren't a clean yes.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What is the one thing you want booked (a call, a visit, a consult), named specifically, not "a consultation"?
2. Is this script run by a human or an AI? A human setter who is the owner can present as the owner. An AI setter never can; it always uses a disclosed assistant persona, per **ai-setter-guardrails**.
3. Get 10 to 20 of the business's own real text or DM replies to past leads, verbatim. This is the single highest-leverage input for writing a script that sounds like the business, not a generic template.

## How to do it

### 1. Name the thing being booked

A patient books a named visit, not "a consultation." A prospect books "a 20-minute offer audit," not "a call." Naming it specifically sets correct expectations and gives the setter something concrete to confirm.

### 2. Move through the stage model

```
new -> warming -> discovery -> pain identified -> pitch -> link sent -> booked -> post-booking
```

Don't pitch on the first message. Wait for either a clearly high-intent opener or a handful of exchanges, and wait until the person has stated a real problem in their own words, not just a form field. This readiness gate is the step most scripts skip in the rush to pitch, and skipping it is a common reason a script converts worse than expected.

### 3. Pitch, then wait for an explicit yes, then send the link

Never put the pitch and the booking link in the same message. Pitch, get an explicit yes ("yes" / "sounds good" / "send it," in the lead's actual words from your voice samples), then send the link. A vague reply ("ok", an emoji) isn't a yes; answer the actual question instead of sending the link anyway.

### 4. Answer the real question before pushing toward booking

If someone asks a direct question, answer it first, then move back toward finding a time. Continuing a script past a question that was just asked is the fastest way to sound like a bot.

### 5. Check the live calendar before offering a time

Never offer or confirm a time the calendar doesn't show open. If availability is tight, that's a scheduling objection with a real answer: offer the next real opening, and if nothing fits, ask when they could realistically take it and log a human follow-up before that date.

### 6. Branch every reply type in advance, and rehearse them

Decide ahead of time what the script does for: wrong timing, no longer interested, wrong person, no answer after the planned attempts, and a direct objection. Have a teammate play the lead and try to break the script before it goes live.

### 7. Never substitute, discount, or invent

Don't offer a cheaper or smaller version of the thing as if it does the same job. Don't improvise a discount against a competitor's price; compare what's included instead. Don't invent a fact, a result, or a guarantee that isn't in the business's own approved content; if it's not in the proof ledger or the offer definition, hedge rather than fabricate.

### 8. State what's known and what happens next, honestly

If payment or acceptance of the booking isn't complete, say so and name the remaining step. Never confirm a booking that hasn't been accepted on the calendar. Say plainly, before any payment, when it's taken and on what terms. **Lead to booked** = booked ÷ leads, counting leads as people, not messages; score it against **chokepoint-audit**'s canonical bands in `references/thresholds.md` (split by cold vs. warm lead source), and use that same definition when reporting this script's performance, matching `.agents/business-context.md`.

### 9. Route out of scope

An existing customer asking about ongoing service, or a question that needs a real diagnosis or legal/financial advice, routes to the right human, not the setter improvising reassurance to save the booking.

## Check it

- [ ] The thing being booked is named specifically
- [ ] No pitch happens before a stated problem and a minimum number of real exchanges
- [ ] Pitch and link are never in the same message; link only follows an explicit yes
- [ ] Every offered time is checked against the live calendar first
- [ ] Wrong timing, not interested, wrong person, and no-answer branches are all scripted and rehearsed
- [ ] No invented facts, discounts, or guarantees outside the approved offer and proof ledger
- [ ] Lead to booked is scored against chokepoint-audit's canonical band for the right lead source, not a number made up for this business

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never confirm a booking before the calendar record shows it accepted.
- Never promise a specific person is calling right now or commit to a time that isn't real.
- Health, legal, and financial suitability questions route to the actual provider or professional; the setter states what's known and what will be determined, never improvising an answer.
- Follow **health-claims-check** for any health-related claim inside the script when the business is health-related.
- See **ai-setter-guardrails** for the non-negotiable rules that apply when this script is run by an AI rather than a human.
- An AI-run version of this script never claims to be human and never presents as the owner; if asked directly whether it's a bot or AI, it says so truthfully, every time. See **ai-setter-guardrails** step 4a.

## Examples

See `references/full-script.md` for a complete opener-to-booking conversation, with every branch (explicit yes, vague reply, direct question, first decline, terminal decline, cancellation, out-of-scope question) written out for a fictional business coach.

## Related skills

- **ai-setter-guardrails**: the hard rules layer when an AI runs this script
- **chokepoint-audit**: the canonical lead-to-booked benchmark bands this script is scored against
- **messaging-compliance**: the TCPA, 10DLC, and quiet-hours rules any outbound send in this script must follow
- **speed-to-lead**: what happens before this conversation starts
- **objection-handling**: deeper objection responses to fold into the discovery and pitch stages
- **show-rate**: the confirmation and reminder sequence after booking
- **voice-note-dms**: for adding voice notes into this conversation where the channel supports it
