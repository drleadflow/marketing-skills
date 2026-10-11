---
name: nurture-cadence
description: "When the user wants a light, ongoing touch with past customers or engaged-but-not-ready leads between purchases, so the relationship doesn't go cold from neglect. Also use when they mention 'stay in touch with past clients,' 'nothing happens between visits,' 'seasonal check-in,' 'past customer nurture,' or 'keep my list warm.' For a brand-new lead's first-week follow-up, see follow-up-sequence. For a list that's already gone cold, see database-reactivation. For the specific action of booking the next visit, see repeat-purchase."
metadata:
  version: 1.0.0
  chokepoint: retention
  pack: core
---

# Nurture Cadence

You'll finish with a low-frequency, long-term nurture cadence for past customers and warm-but-not-yet-ready leads, with real message copy by time-since-last-contact, so people stay connected between purchases without being over-messaged.

## Before you start

Read `.agents/business-context.md` (sections 2 and 7: Offers and prices, Channels) and **messaging-compliance** if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Who is this for: past customers between purchases, or leads who engaged once but aren't ready to buy yet? (A brand-new lead in its first week belongs in **follow-up-sequence**, not here.)
2. What's the natural return window for this business (weeks for a recurring service, months or longer for a big-ticket purchase)?
3. How often can you sustainably send without fatigue, on which channel?

## How to do it

1. **Define the population, and exclude the wrong people.** This cadence is for people who aren't in an active sales conversation and haven't gone fully cold. A lead still inside its first-week contact window goes to **follow-up-sequence**. Someone who's gone silent past this cadence's own defined window (see step 6) gets handed to **database-reactivation**, not kept here indefinitely.
2. **Set a frequency cap matched to the real return window.** Monthly is a reasonable default for most service businesses; a business with a short natural return window (weeks, not months) can go more often, but more frequent than the customer's own buying rhythm trains people to ignore you. There's no fixed benchmark for the right cadence; pick one and hold it.
3. **Confirm consent before any marketing text or AI-voiced call goes to this list.** A past customer's original purchase doesn't automatically carry marketing-text consent; check messaging-compliance for what the opt-in needs to say before this cadence sends anything beyond a plain transactional update.
4. **Build content by time since last contact**, using the template below: a light value touch in the first stretch, a proof point or seasonal angle in the middle stretch, and a direct but low-pressure check-in as the window closes.
5. **Build a seasonal calendar** if this business has real seasonal patterns (an HVAC company before summer, a med spa before event season), tied to something specific to that person, not a generic "thinking of you."
6. **Define the handoff point.** State plainly how long someone can sit in this cadence with zero reply before they move to **database-reactivation** instead (a commonly used starting point is one full cycle of the sequence below, e.g. 90 days, with no fixed benchmark backing that number; set your own and hold it).
7. **Route any reply into a real conversation**, not back into the cadence. Someone who responds with buying intent goes to the sales process or **repeat-purchase**, not to the next scheduled nurture touch.

## Template: nurture population tracker

```markdown
# Nurture cadence: [Business] | [month]

| Contact | Last contact (purchase or reply) | Days since | Bucket | Last touch sent | Replied? |
|---|---|---|---|---|---|

Buckets: 0-30 days (light value touch) | 30-90 days (proof point or seasonal) | 90+ days (final check-in before handoff) | past the handoff window (move to database-reactivation)
```

## Message copy by bucket

**0-30 days, light value touch:** "Hi [Name], thought you'd find this useful: [one specific tip, resource, or update tied to what they bought or asked about]. No ask, just thought of you."

**30-90 days, proof point (only with an Approved, unexpired proof-ledger row):** "[Approved claim, exact wording or weaker]. Thought this might be relevant to what you mentioned before. Proof used: P-00X."

**30-90 days, seasonal angle:** "Hi [Name], [seasonal reason, e.g. 'with [season] coming up']. If [their original interest] is still on your mind, happy to help whenever's good."

**90+ days, final check-in before handoff:** "Hi [Name], it's been a bit since we talked about [their stated goal]. Still relevant to you, or should I stop checking in?"

## Check it

- [ ] The population excludes brand-new leads (those go to follow-up-sequence) and anyone already past the handoff window (those go to database-reactivation)
- [ ] The frequency cap matches this business's real return window, not a generic default picked without thought
- [ ] Every touch provides something (a tip, a proof point, a seasonal reason), never a bare "just checking in"
- [ ] Any proof point cited is an Approved, unexpired proof-ledger row, tagged `Proof used: P-00X`
- [ ] A specific handoff point to database-reactivation is defined and applied, not left open-ended
- [ ] A reply routes into a real conversation, never back into the scheduled cadence

## Rules

- Never use this cadence as new-lead follow-up; a lead inside its first week belongs in follow-up-sequence.
- Never let someone sit in this cadence indefinitely with zero reply; apply the handoff point to database-reactivation.
- Never cite a result or proof point that isn't an Approved, unexpired proof-ledger row.
- If anyone replies, stop the scheduled cadence for them and respond as a person.
- Track reply rate by bucket; there's no fixed benchmark for it, log your own.
- Never send a marketing text or AI-voiced call without the written consent messaging-compliance defines; a past purchase alone doesn't carry that consent.

## Run it on a schedule

This is a natural fit for **marketing-loop**: a monthly check across the population tracker, moving contacts between buckets and flagging anyone who's crossed the handoff window, with a human approving the actual batch of messages each cycle.

## Related skills

- **messaging-compliance**: the consent, quiet-hours, and opt-out rules this skill's sends must follow.
- **follow-up-sequence**: the brand-new lead's first-week cadence; this skill starts where that one ends.
- **database-reactivation**: where anyone who crosses this cadence's handoff window with no reply goes next.
- **repeat-purchase**: the specific action of booking the next visit, once someone's ready.
- **marketing-loop**: to run the monthly bucket check and message batch on a schedule.

## See it worked

`references/example.md` runs this cadence for a fictional med spa's past-patient list.
