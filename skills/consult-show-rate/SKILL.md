---
name: consult-show-rate
description: >
  When a med spa or clinic wants to raise the percentage of booked consults or visits that
  show up. Also use when they say "no-shows," "show rate," "consult show rate," "people
  book and don't come in," or "reduce cancellations." Deposit and reminder mechanics, not ad copy.
  For the offer design that this booking flows from, see clinic-offers. For win-back of people who
  already missed or never booked, see patient-reactivation.
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: clinic
---

# Consult show rate

You'll finish with a deposit and reminder sequence that moves show rate toward
**chokepoint-audit**'s canonical band (green at 75% or more, amber 60 to 74%, red under 60%,
measured as showed divided by booked appointments whose date has passed), and a clear read on
whether a drop in show rate is a booking-flow problem instead of a creative problem.

## Before you start

Read `.agents/business-context.md` if it exists; section 8 (Numbers) carries the current show
rate if it's already recorded, measured the same way as **chokepoint-audit**'s canonical
benchmark: showed divided by booked appointments whose date has passed. If business-context is
missing, offer to run **business-context** first. Ask:
1. Current show rate, if known, measured the same way (not just "bookings vs. attendance" in
   general, but specifically showed ÷ booked-with-a-past-date over the last 30 to 60 days).
2. Whether the practice can currently take a deposit online, and how it's worded today
   (refundable or credited).
3. Who owns reminders today (a person, an automation, or nobody).

## How to do it

### 1. Make the deposit the booking action, not an afterthought

A small, refundable or credited deposit taken at the moment of booking is the strongest lever on
show rate in this category. Word it exactly as the practice operates it: "refundable" or
"credited toward your visit," never both implied, and never use "deposit" language for something
that's non-refundable without saying so clearly before payment.

### 2. Confirm with the full date, time, and timezone

Every confirmation comes from the accepted booking record, with the full calendar date and time
and the relevant timezone, never a weekday name alone ("see you Tuesday" is not a confirmation).
Verify the appointment was accepted on the calendar before sending any confirmation; a
"request" is not the same as a confirmed booking, and the patient should be told which one they
have.

### 3. Build the reminder sequence

- Send reminders from a route someone monitors for replies. If the channel can't accept
  replies, give a clearly visible alternative way to reach the practice.
- Repeat the visit length, arrival time, and what is not included at the moment of the reminder,
  not just at booking.
- Before adding another reminder touch, name the new job it does; stacking five identical
  reminders adds noise, not show rate.
- Rehearse the reply a reminder invites with someone who didn't build it; confirm they can
  find the appointment and answer accurately from what the reminder gives them.

### 4. Handle a reschedule as one complete action

Creating the new time and canceling the old one (with its own reminders) happens together, in one
action, so the patient never gets a reminder for a visit that no longer exists.

### 5. When show rate drops, check the process before blaming the creative

In order: is the calendar accurate (slots that don't exist being offered)? Are reminders
firing and from a monitored route? Did the offer or price change without the booking
flow catching up? Only after those are cleared does the creative become the suspect.

## Check it

- [ ] Every confirmation has the full date, time, and timezone from the actual booking record.
- [ ] A deposit or credit mechanism exists, worded exactly as the practice operates it.
- [ ] Reminders come from a monitored route, with a visible alternative if replies aren't
  supported there.
- [ ] A reschedule always cancels the old slot's reminders in the same action that creates the
  new one.
- [ ] Show rate is measured (attended / booked over a stated window), not guessed.

## Rules

- Never claim a payment is confirmed or an appointment is booked unless the system has verified
  it; a form submission is a request until the calendar accepts it.
- Never promise same-day treatment before suitability and actual availability are both confirmed.
- Never present a promotional credit as money already sitting in the patient's account; it's a
  future credit against a future balance, worded as such.
- A reminder never includes clinical detail or the patient's stated concern in a preview that
  could be seen by someone else (a lock screen, a shared inbox).

## Related skills

- **chokepoint-audit**: owns the canonical show-rate benchmark this skill targets.
- **clinic-offers**: the offer this booking flow is built around, including deposit terms.
- **patient-reactivation**: what happens to someone who still doesn't show after this sequence.
- **health-claims-check**: the privacy rules around what a reminder or confirmation can say.
