---
name: speed-to-lead
description: "When the user wants to build or fix what happens in the first hour after a lead comes in: a form submit, a call missed, a DM, a quiz result. Also use when they mention 'speed to lead', 'response time', 'first touch', 'leads going cold', or 'nobody's answering fast enough'. For the multi-day cadence after the first hour, see follow-up-sequence. For what a human or AI setter is allowed to say, see ai-setter-guardrails."
metadata:
  version: 1.0.0
  chokepoint: leads
  pack: core
---

# Speed to Lead

You'll finish with a first-touch standard your team can staff, a multi-channel sequence covering the first hour, and an after-hours plan that tells the truth about when a human will reply.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. Who answers a new lead right now, and during what hours?
2. What channels can you reach a new lead on: SMS, call, email, DM?
3. What's the real response time today, measured, not guessed?

## How to do it

### 1. Set a response-time target you can staff

Use the canonical speed-to-first-reply bands from **chokepoint-audit**'s `references/thresholds.md`: for calls and forms in business hours, 5 minutes or less is green, 6 to 60 is amber, over 60 is red; for social DMs, 15 minutes or less is green, 16 to 120 is amber, over 120 is red. These are starting points, not fixed law; once the business has 6 or more months of its own data, score against its own best quarter instead and say so in the report. A target the team can't hit is worse than a slower, honest one: set the real target off actual staffing, then build toward green rather than promising it before the coverage exists.

### 2. Build the first-hour sequence, multi-channel

Never the same channel twice in a row. A reasonable default shape:

| Touch | Timing | Channel | Content |
|---|---|---|---|
| 1 | Within 5 minutes | SMS | Acknowledge what they did, ask one question |
| 2 | Within 2 hours | Call attempt (voicemail if missed) | Reference the text |
| 3 | Same evening | Email | A relevant value piece: a case study, a short resource |

Every message does a job beyond "checking in." A bare "just following up!" with nothing new to say is the most common wasted touch in a sequence like this.

### 3. Handle after-hours honestly

An after-hours auto-reply is fine only if it tells the truth about coverage: it says plainly that the request has been received and is not yet a confirmed appointment, and states the real window the team will follow up in. Never claim 24/7 coverage the business doesn't staff.

### 4. Route by channel properly

Exclude a landline-only number from a text sequence. Exclude anyone who opted out of marketing from anything but a service message they're entitled to. A channel mismatch reads as careless at the exact moment a lead is deciding whether this business is organized.

### 5. Verify a request isn't a booking

A form submit or a "yes I'm interested" reply is a request, not a confirmed appointment. Treat it as a request right up until the calendar record shows it accepted. Never tell a lead they're booked before that's true. **Lead to booked** = booked ÷ leads, where leads are counted as people, not messages; see **chokepoint-audit**'s `references/thresholds.md` for the canonical green/amber/red bands by lead source (cold vs. warm), and use that same definition everywhere this number is reported.

### 6. Decide every branch before the first lead arrives

Wrong number, not interested right now, wrong fit, no answer after every attempt: decide the response for each, and rehearse it with a teammate before it goes live. A sequence that only has a happy path breaks on contact with real leads.

### 7. Stop the sequence the moment someone replies

Any real reply (not an auto-acknowledgment) ends the automated cadence and moves the person into a real conversation. Continuing to send scheduled touches to someone already talking to you reads as obviously robotic and erodes exactly the trust the speed was supposed to build.

### 8. Measure what matters, using the shared definitions

**Speed to first reply** = the median minutes to the first human or real conversational reply, not an auto-acknowledgment. Score it against the canonical bands in **chokepoint-audit**'s `references/thresholds.md` (see step 1), and log the number in `.agents/business-context.md` under Numbers so **setter-script**, **show-rate**, and every other skill reading that file sees the same figure. Also track contact rate (reached a real person, not just sent a message) and how many of today's new leads got a reply inside today's target. Report truthfully if the counters break; don't report a zero as a clean day.

## Check it

- [ ] First-touch target is based on actual staffed hours, not an aspiration
- [ ] First-hour sequence uses at least 2 channels and never repeats the same one twice in a row
- [ ] After-hours message states real coverage and that the request isn't yet confirmed
- [ ] Every branch (no answer, not interested, wrong number) has a planned response
- [ ] Sequence stops immediately on any real reply
- [ ] Speed to first reply is being measured (median minutes to a real reply, not an auto-acknowledgment) and scored against the canonical bands in chokepoint-audit's thresholds.md, not assumed

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never promise a specific person is calling right now, or a specific time, unless that's true at send time.
- Never let an automated acknowledgment pass as a human response in reporting; count them as separate events.
- Never put a lead's stated concern into a voicemail transcript or a visible notification preview.
- Health, legal, and financial advice in any first-touch message follows **health-claims-check** when the business is health-related; the setter answers what the visit covers and routes suitability questions to the actual provider.
- For a health-related business, never name the treatment or area of interest in an SMS, DM, voicemail, or email subject line; say "your consult request" or "your visit" instead. Treatment detail belongs in the consult itself or a secure intake form, consistent with **ai-setter-guardrails**' rule against collecting health detail in chat.

## Examples

See `references/first-hour-scripts.md` for the full 3-touch sequence filled in for a fictional business coach, home-services company, and med spa, plus the two concern-routed quick replies.

## Related skills

- **chokepoint-audit**: the canonical speed-to-first-reply and lead-to-booked benchmark bands this skill scores against
- **messaging-compliance**: the consent, quiet-hours, and 10DLC rules this skill's sends must follow
- **follow-up-sequence**: for the multi-day cadence after the first hour
- **setter-script**: for the actual conversation once a lead replies
- **ai-setter-guardrails**: for what an automated first-touch message may and may not say
- **show-rate**: for confirming and reminding once an appointment is booked
- **landing-page**: for making the form itself say plainly what happens next
