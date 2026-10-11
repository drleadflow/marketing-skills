---
name: show-rate
description: "When the user wants to fix a low show-up rate for booked calls or appointments, build a confirmation and reminder sequence, or decide whether to require a deposit or card on file. Also use when they mention 'show rate', 'no-shows', 'appointment reminders', 'deposit policy', or 'people book and don't show up'. For a med-spa-specific version with consult mechanics, see consult-show-rate. For what happens after a no-show, see references/no-show-script.md in this skill."
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: core
---

# Show Rate

You'll finish with a confirmation and reminder sequence, a deposit or card-on-file policy that matches how the business operates, and a no-show recovery script.

Score the result against **chokepoint-audit**'s canonical show-rate band (see `references/thresholds.md`: 75% or more is green, 60 to 74% is amber, under 60% is red), and read a red or amber result as a pre-appointment content problem before anything else.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. Does this business currently take a deposit, a card on file, or neither?
2. What's the real show rate today, and does the booking system distinguish attended from cancelled from no-show from still-scheduled?
3. Who monitors the reply channel the reminders are sent from?

## How to do it

### 1. Confirm from the real record, with the full date

The confirmation message pulls the full calendar date, time, and timezone from the actual accepted booking record, never a weekday name alone and never a guess. State what they booked, the price they were told, who they'll meet, and what the visit includes, before the appointment.

### 2. Build the reminder sequence

A reasonable default, tuned to lead time and channel:

| When | Channel | Content |
|---|---|---|
| Immediately on booking | Email or SMS | Confirmation with full date/time/timezone, what to expect, prep instructions |
| 24 hours before | Email | Confirm time again, repeat prep instructions |
| 12 hours before | SMS | Friendly reminder |
| 3 hours before | SMS | Reminder with the meeting link or address |
| 1 hour before | SMS | Final reminder, one thing to prepare |

Send reminders from a channel someone monitors for replies. If the sending number or address can't accept replies, give the working alternative prominently in the message itself.

### 3. Decide the deposit or card-on-file policy, and write it down before anyone pays

If a deposit is credited toward the visit (not kept as extra revenue on top), say so plainly. State the minimum spend and the time window the credit is valid for, in writing, before the first person books under that policy. Publish cancellation, refund, and reschedule terms as part of the offer itself, not only discovered when someone tries to cancel.

### 4. Treat a reschedule as one complete action

Rescheduling creates the new appointment and cancels the old one, including its pending reminders, in the same action. A reschedule that leaves the old reminder sequence running sends a confusing or wrong-time reminder for an appointment that no longer exists.

### 5. Track attendance in real categories, not one bucket

Attended, cancelled, rescheduled, missed, and still scheduled are five different things. Collapsing them into one "booked" number hides exactly the information needed to diagnose a show-rate problem. **Show rate** = showed ÷ booked whose date has already passed; use that exact definition everywhere this number is reported, including in `.agents/business-context.md`, and score it against the canonical band in **chokepoint-audit**'s `references/thresholds.md`.

### 6. Verify before sending a missed-visit message

Confirm the person didn't arrive and that the calendar itself is accurate (a provider running late isn't a no-show) before sending anything that assumes non-attendance.

### 7. Give a missed visit a real conversation, not an assumption

Once confirmed, reach out with a defined message, update the record, and don't assume the reason. See `references/no-show-script.md` for a script to adapt.

### 8. Read a low show rate as upstream, not a scheduling bug

If the rate is trending down, check the booking process, the offer, and the pre-appointment content before replacing the outreach entirely. A clear explanation of the visit, set expectations, and a confirmed, real time on the calendar fixes more no-shows than a stronger reminder does.

## Check it

- [ ] Confirmation uses the full date, time, and timezone from the real booking record
- [ ] Reminder sequence covers 24h, and at least one same-day touch, from a monitored channel
- [ ] Deposit or card-on-file terms are written and published before anyone books under them
- [ ] A reschedule always cancels the old reminders in the same action that creates the new booking
- [ ] Attendance is tracked in at least 4 separate categories, not one combined bucket
- [ ] Show rate is scored against chokepoint-audit's canonical band (75%+ green, 60-74% amber, under 60% red), not a number made up for this business
- [ ] A no-show message only sends after confirming non-attendance against an accurate calendar

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never claim a payment is recorded unless the system has verified it.
- Never apply a deposit or credit as extra revenue on top of the service price; it's part of the payment.
- Never send a missed-visit message before confirming the person didn't arrive.
- Health-related scheduling and cancellation terms follow **health-claims-check** where relevant (e.g. no medical claims inside a reminder).

## Related skills

- **chokepoint-audit**: the canonical show-rate benchmark band this skill scores against
- **messaging-compliance**: the consent, quiet-hours, and opt-out rules this skill's reminder sends must follow
- **consult-show-rate**: the med-spa-specific version with deposit and consult-flow detail
- **speed-to-lead**: the sequence before a booking exists
- **follow-up-sequence**: the broader cadence this reminder flow sits inside
- **repeat-purchase**: for what happens after a completed, attended visit
- **setter-script**: for the booking conversation that produces the appointment in the first place

## Examples

See `references/no-show-script.md` for a fictional business coach, fictional home-services company, and fictional med spa no-show recovery message. See `references/confirmation-reminder-scripts.md` for the full confirmation and reminder sequence (immediately on booking, 24 hours, 3 hours, and 1 hour before) for all three.
