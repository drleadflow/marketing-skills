---
name: follow-up-sequence
description: "When the user wants to build or fix the multi-day nurture sequence after a lead comes in, a cold-list reactivation cadence, or a 'why are leads going quiet' problem. Also use when they mention 'follow-up sequence', 'nurture cadence', 'drip campaign', or 'how many times should I follow up'. For the first-hour response, see speed-to-lead. For reactivating a list that's gone fully cold, see database-reactivation."
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: core
---

# Follow-Up Sequence

You'll finish with a multi-day, multi-channel follow-up cadence with a defined stopping point for every branch: reply, book, decline, or go quiet.

That way a lead never gets followed up with forever, and never gets silently dropped either.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What's the lead's actual channel mix: SMS, email, call, DM?
2. Where does today's sequence stop, and does anyone know why leads go quiet after it?
3. How many follow-ups can your team realistically answer per day without a backlog building?

## How to do it

### 1. Build the front-loaded week

The first week does the most work. A reasonable default shape, tuned to the business's real channel mix and staffing:

| Day | Touches | Shape |
|---|---|---|
| 1 | 3 | Speed-to-lead SMS within 5 minutes, a call attempt 2 hours later, an email with a value piece that evening (see **speed-to-lead** for day-1 detail) |
| 2 to 3 | 2 per day | One touch with social proof or an objection-answer piece, one touch that asks directly for a time |
| 4 to 7 | 1 per day | Longer-form value content, a check-in that references their stated goal, a final "door's open" message |

Never the same channel twice in a row. Every message does a job beyond "checking in"; a bare nudge with nothing new to say is the most common wasted touch in a sequence like this.

### 2. Give every sequence a stopping point before it launches

Decide, in advance, what happens on: a reply, a booking, a decline, "contact me later" with a stated date, and silence through the full sequence. Rehearse each branch. A sequence without a defined endpoint for the silent case becomes an indefinite drip nobody remembers building.

### 3. Stop immediately on any real reply

Any reply that isn't a bare acknowledgment ends the scheduled cadence and moves the person into a real conversation. A reply that is just an acknowledgment ("ok", "thanks", "cool") doesn't need an enthusiastic automated response; most people reading a bot-like reply to a bare "ok" is what gives it away as automated.

### 4. Honor a stated future date

If someone says "check back with me in two weeks," confirm it, assign it to a person, and pause every message that asks for a reply before that date arrives. Don't let a scheduled touch fire into a window the person explicitly asked to be left alone during.

### 5. Match the follow-up to the actual concern

Someone who said "not the right time" needs a different message than someone who said "too expensive." Route by their stated concern rather than putting every non-responder into one identical sequence.

### 6. Size the send to real capacity

Never schedule more outreach than the team can answer that day. A reactivation batch that outpaces staffed reply hours produces a backlog that quietly erodes response quality on every thread in it.

### 7. Build the cold-list reactivation tiers separately from active follow-up

Active leads (recently engaged, mid-funnel) run the front-loaded week above. A cold list (no activity in a while) runs its own tiered cadence, keyed to last activity date, not a season or a calendar event:

| Tier | Timing |
|---|---|
| First reactivation touch | 48 hours after going cold |
| Second | 1 week |
| Then | 1 month, 2 months, 3 months, 6 months, 1 year |

In practice the 48-hour and 1-week tiers produce most of the real volume; build those two well before investing heavily in the later tiers. See **database-reactivation** for sizing and segmenting a stale list.

### 8. Log every channel in the same conversation record

A call attempt and its follow-up text belong in the same record as the rest of the thread, not scattered across separate systems, so the next person to touch this lead can act from the record alone.

### 9. Score the outcome, not just the activity

The number this cadence is trying to move is lead to booked (booked ÷ leads, people not messages). Score it against **chokepoint-audit**'s canonical bands in `references/thresholds.md`, split by lead source: cold leads (paid social, cold outreach) at 20% or more is green, 10 to 19% is amber, under 10% is red; warm leads (referral, inbound call, search) at 40% or more is green, 25 to 39% is amber, under 25% is red. These are starting points; once the business has 6 or more months of its own data, score against its own best quarter instead.

## Check it

- [ ] First week is front-loaded, multi-channel, never the same channel twice in a row
- [ ] Every branch (reply, book, decline, stated future date, silence) has a defined response, rehearsed before launch
- [ ] Any real reply stops the scheduled cadence immediately
- [ ] A stated future contact date pauses the sequence until that date
- [ ] Daily send volume is sized to what the team can answer
- [ ] Cold-list reactivation runs its own tiered cadence, keyed to last activity date
- [ ] Lead to booked is scored against chokepoint-audit's canonical band for the right lead source (cold vs. warm), not a number made up for this business

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never send a bare "just checking in" with nothing new attached.
- Never invent a specific event ("just got off a call with someone in your exact spot") that didn't happen that day; use a true, general version instead, or a sourced proof-ledger item.
- Never continue a cascade past a terminal state (declined, disqualified, asked to stop); see **ai-setter-guardrails** for the enforced version of this rule when an AI is running the sequence.
- Never schedule a reactivation tier that outpaces the team's real reply capacity.
- Health, legal, and financial content inside any follow-up message follows **health-claims-check** when the business is health-related.
- For a health-related business, never name the treatment or area of interest in an SMS, DM, voicemail, or email subject line; say "your consult request" or "your visit" instead. Treatment detail belongs in the consult itself or a secure intake form, consistent with **ai-setter-guardrails**' rule against collecting health detail in chat.

## Examples

See `references/day1-7-scripts.md` for the full day 2 to 7 sequence filled in for a fictional business coach, home-services company, and med spa, plus the two concern-routed variants.

## Related skills

- **chokepoint-audit**: the canonical lead-to-booked benchmark bands this cadence is scored against
- **messaging-compliance**: the consent, quiet-hours, and sizing rules this skill's sends must follow
- **speed-to-lead**: for the first-hour sequence this cadence continues from
- **database-reactivation**: for sizing and segmenting a cold list
- **ai-setter-guardrails**: for the enforced stop-on-reply and terminal-state rules when an AI runs this
- **show-rate**: for the reminder sequence once a follow-up produces a booking
- **setter-script**: for the conversation content inside each touch
