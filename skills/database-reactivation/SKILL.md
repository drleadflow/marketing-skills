---
name: database-reactivation
description: "When the user wants to reach back out to old leads or past customers who never bought, went cold, or stopped coming back. Also use when they mention 'reactivation campaign,' 'win-back,' 'work the database,' 'reach out to old leads,' 'dead leads,' 'who should we follow up with,' or 'database play.' For reaching a brand-new lead in its first week, see follow-up-sequence. For past customers specifically who haven't gone cold, see repeat-purchase. For a light ongoing touch with past customers between purchases, see nurture-cadence."
metadata:
  version: 1.0.0
  chokepoint: retention
  pack: core
---

# Database Reactivation

You'll finish with a reactivation campaign built in eight layers (segment, offer, size, personalize, prioritize, draft, check compliance, measure), with real message copy for each bucket, and nothing sent until a human approves the specific batch.

## Before you start

Read `.agents/business-context.md` (sections 2 and 8: Offers and prices, Numbers), `.agents/proof-ledger.md`, and **messaging-compliance** if they exist: what's sold, the real price, what proof you're allowed to reference, and the consent and send rules this campaign has to follow. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. How far back should the list go: 14 to 30 days (warm follow-up, not really a database play), 60 to 90 days (the edge, still referencable), or 6 to 24 months (the real database play, where the forgotten money sits)?
2. What channel is this list reachable on, and do you already have consent on record for that channel?
3. How many new bookings or purchases can this business absorb this week? (This sizes the send, it doesn't come later.)

## How to do it

1. **Exclude, then segment.** Remove: unreachable records, anyone opted out or do-not-contact on *any* signal your system tracks, anyone already active or booked, test/internal records, and duplicates (collapse on normalized phone and email, keep the richest thread). Then bucket what's left using the table below.
2. **Give each bucket a real offer, not just a message** (see the offer map and message templates below).
3. **Size the send to real capacity, and hold a group back.** Check real appointment or purchase capacity this round before deciding volume. Hold back a small, randomly chosen group per bucket and send them nothing this round, so you can tell what the campaign caused versus what would have happened anyway. There's no fixed benchmark for a reactivation holdout size; a commonly used starting point is 10% per bucket, which you should replace once you've run a cycle or two and can judge your own numbers.
4. **Draft messages grounded in the real thread**, using the templates below as a starting structure, not a script to paste verbatim.
5. **Prioritize** by real booking or purchase likelihood so whoever handles replies knows where to spend attention first.
6. **Run compliance and safety checks immediately before sending.**
7. **Draft, then a human approves, then send.** One batch at a time.
8. **Measure against the holdout**, tracked in the scoreboard below.

## Bucket map and offer per bucket

| Bucket | Who's in it | The real offer | Starting-point message angle |
|---|---|---|---|
| Reached out, never got a reply | Inbound contact, no response sent back | The reply they're owed, not a new pitch | "Hey [Name], I owe you a reply on [what they asked]. Here it is: [answer]." |
| Raised a specific objection | Named a real obstacle (price, timing, location) | Whatever resolves that specific objection | "You mentioned [objection]. Here's how we handle that: [specific answer]." |
| Engaged, then went quiet | Real replies, no objection, no purchase | A reason to look again (new availability, related option, light incentive) | "Been a bit since we talked about [their stated goal]. [What's new] might be worth a second look." |
| Never truly engaged | Form fill or claim, zero real reply | A clearly different angle, not a repeat | A content-led or value-first message, never the original pitch again |

## Template: reactivation record (one per batch)

```markdown
# Reactivation batch: [date] | Window: [lookback]

- Total list before exclusions:
- Excluded (opt-out/DND): | Excluded (already active): | Excluded (duplicates):
- Bucket counts: reached-out-no-reply [n] | objection [n] | went-quiet [n] | never-engaged [n]
- Capacity this round: [n] appointments/purchases
- Send size (after capacity cap): [n] | Holdout size: [n] (10% per bucket, starting point)
- Named reply owner: [name] | Target reply time: [n] minutes

## Compliance checklist (run right before send; see messaging-compliance for the full checklist)
- [ ] Consent basis confirmed for this channel, matched word for word against what the original opt-in checkbox said (see messaging-compliance steps 1-2 on what counts as valid written consent for a marketing text or call; "submitted a form 12 months ago" is not itself consent unless that form carried the right language)
- [ ] Do-not-contact re-checked against live data, not the original pull
- [ ] Duplicate collapse still holds on final list
- [ ] Quiet hours checked by lead's own timezone, against both the federal baseline and any stricter state rule
- [ ] Opt-out language present on first message

## Approval
- Approved by: | Date: | Batch size approved:
```

## Message templates by bucket

**Reached out, never got a reply** (SMS, same day as send):
> "Hi [Name], it's [Your name] from [Business]. I owe you a reply on [what they asked about] and never followed through, sorry about that. [Direct answer]. Still a good fit?"

**Raised an objection** (SMS, Day 1):
> "Hi [Name], you'd mentioned [specific objection] when we last talked. Wanted to let you know [specific resolution]. Worth another look?"

**Engaged, went quiet** (SMS, Day 1, then Day 3 if no reply):
> Day 1: "Hey [Name], been a while since we talked about [their goal]. [New availability / related option] just opened up, thought of you."
> Day 3 (different angle, not a repeat): "No worries if the timing's off. If it's still on your mind, happy to send over [specific resource]."

**Never truly engaged** (content-led, Day 1 only, lighter touch, batchable):
> "Hi [Name], thought you'd want to see this: [specific, real, verified piece of content relevant to what they originally asked]. No pressure, just thought it was worth sending."

## Template: scoreboard (fill weeks later, against the holdout)

| Bucket | Sent | Holdout | Replied (sent) | Replied (holdout) | Booked/purchased (sent) | Booked/purchased (holdout) | Revenue |
|---|---|---|---|---|---|---|---|
| Reached-out-no-reply | | | | | | | |
| Objection | | | | | | | |
| Went-quiet | | | | | | | |
| Never-engaged | | | | | | | |

There's no fixed benchmark for reactivation reply or booking rates; log your own numbers here for two to three cycles before treating any rate as a target. For the business's general lead-to-booked and show-rate benchmarks, see chokepoint-audit's thresholds.

## Check it

- [ ] Every excluded signal is checked against live data, not just the obvious one
- [ ] Duplicate records collapsed before drafting
- [ ] Each bucket has a stated, specific offer, not a rephrase of the last failed pitch
- [ ] Send size matches real, confirmed capacity this week, with a holdout set aside
- [ ] Every message grounded in that specific person's real history where one exists
- [ ] A named person is watching for replies with a stated reply-time target
- [ ] Nothing has gone out without explicit human approval of this specific batch
- [ ] The scoreboard template is ready before send, not improvised after

## Rules

- Draft, then a human approves, then send. One batch at a time, never a silent bulk send.
- Confirm valid consent for the channel against messaging-compliance's definition of consent, not just "they filled out a form once"; and re-check do-not-contact signals right before sending, not just at list-pull time.
- State a send cap (per batch, per day) and a stop rule before anything goes live.
- Never invent urgency, scarcity, or a result that isn't an unexpired row in proof-ledger's Approved claims with permission that fits this channel. If a draft references a specific result, add `Proof used: P-00X` under it.
- Never send more messages in a window than the team can answer that day.
- If someone replies at any point in a sequence, stop the automated sequence for them and have a real conversation.
- Keep the working list inside your own approved system; never export it, paste it elsewhere, or hand it to a tool outside the consent basis.

## Run it on a schedule

See **marketing-loop** for the check cadence, the state that prevents re-contacting the same person twice, the spend/send cap, and the human checkpoint before each batch.

## Related skills

- **messaging-compliance**: the consent, quiet-hours, and opt-out rules this skill's sends must follow before anything goes out.
- **follow-up-sequence**: for a brand-new lead still in its first contact window, not a cold database.
- **nurture-cadence**: for a light, ongoing touch with past customers who haven't gone cold.
- **repeat-purchase**: for customers who already bought once and are overdue for the next one.
- **marketing-scoreboard**: logs the reactivation numbers alongside every other chokepoint.
- **marketing-loop**: to run this on a recurring cadence instead of as a one-off.

## See it worked

`references/example.md` runs one batch of this for a fictional business coaching practice.
