---
name: sales-call-playbook
description: "When the user wants a structure and talk track for sales calls, discovery calls, consultations or estimates, so more people who show up buy. Also use when they say 'sales script', 'closing script', 'discovery call', 'consult script', 'how do I close', 'people say they need to think about it', 'my calls go nowhere', 'I hate selling', 'strategy call', 'enrollment call' or 'my close rate is low'. Produces a call playbook in the owner's voice: prep brief, stages with lines, the ask, and follow-up. For answers to specific objections, see objection-handling. For scoring recorded calls, see call-grader. For booking the call, see setter-script."
metadata:
  version: 1.0.0
  chokepoint: closed
  pack: core
---

# Sales call playbook

You'll finish with a **Call Playbook** for this business: a pre-call brief template, the call in eight stages with what to say and ask at each, the one-recommendation script, how to present price, how to ask for the decision, what to do with "let me think about it", and the follow-up that happens after. It's written in the owner's voice and built around their best client, so it sounds like a conversation, not a pitch.

Good calls aren't won by clever closes. They're won by asking what the person wants before explaining what you sell, playing it back in their words, making one recommendation, and asking for a decision. Most lost calls skip one of those.

## Before you start

- Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. You need section 2 (offer, price, terms), section 3 (best client and their words), section 4 (problems, promise, process) and section 6 (voice).
- If business-context is missing, offer to run **business-context** first, or ask:
  1. What do you sell on the call, at what price, and how do people pay?
  2. Who's on the other end, and what are they usually stuck on, in their words?
  3. What are the top 3 reasons people don't buy?
- Ask for one or two recordings or transcripts of real calls (one won, one lost), shared with the prospect's consent. They show where calls break.

## How to do it

### 1. Build the pre-call brief

Nobody walks into a call cold. The person who booked the call (setter, form, bot) fills this, and the person running the call reads it 5 minutes before:

```markdown
**Call brief**
- Booked for: <offer or first step> · Source: <ad, referral, content, past customer>
- What they asked or said, in their words: "..."
- What they've been told so far (price, terms, what the call is): ...
- Answers to qualifying questions: ...
- Open questions or concerns raised before the call: ...
```

If the prospect has already been told a price or a term, the call honors it. Two versions of the offer kill trust.

### 2. Run the call in eight stages

| # | Stage | Time (45-min call) | The job | Done when |
|---|---|---|---|---|
| 1 | Open | 3 min | Set the agenda and make "not a fit" safe | They agree to the agenda |
| 2 | Goal | 10 min | What they want, in their words | You can repeat their goal word for word |
| 3 | Now | 8 min | Why now, what they've tried, what it's costing | They've said the cost of waiting out loud |
| 4 | Priority | 2 min | Play it back, get agreement | They say "that's right" or correct you |
| 5 | Recommend | 7 min | One recommendation tied to their priority | You've stopped talking |
| 6 | Price and terms | 5 min | Total, what's included, terms, payment options | They've seen the written numbers |
| 7 | Concerns | 5 min | Find and answer what would stop them | The named concern is answered |
| 8 | Decision | 5 min | Ask directly; agree the next step | Paid, dated follow-up, or a clean no |

Adapt the times to the call length. Never skip 2, 4 or 8.

### 3. Write the lines for each stage

Write 2 to 4 lines per stage in the owner's voice, using the customer's words from section 3. Starting points to adapt:

**Open**
> "Thanks for making time. Here's how I'd like to use it: I'll ask about what you're trying to do and what's in the way, then if I think we can help I'll tell you exactly how, and what it costs. If it's not a fit, I'll say so. Sound OK?"

**Goal**
> "What made you book this call now?" · "If we were talking a year from today and this had gone well, what would be different?" · "Why does that matter to you?"

Ask what they want before you explain anything you sell. If they ask for the price in the first minute, give a range honestly and say you'll be specific once you understand what they need.

**Now**
> "What have you tried so far?" · "What happened?" · "What's it costing you to leave this another six months?" (time, money, stress, people)

Let them name the cost of waiting. Never invent urgency for them.

**Priority**
> "Let me make sure I've got this. You want [goal, their words], because [why]. What's in the way is [obstacle, their words], and you've tried [X] and [Y]. Is that right?"

Wait for "that's right". If they correct you, play it back again. This is the most skipped and most powerful step.

**Recommend**
> "Based on what you told me, here's what I'd recommend: [one offer]. Here's why it fits what you said: [tie to their goal]. It works like this: [the method in 3 steps]. What it won't do is [honest limit]."

Then stop talking. One recommendation you can explain beats a menu. Offer options only when two fit their situation.

**Price and terms**
> "The investment is [total]. That includes [what's included]. You can pay [options, with totals]. [Key terms: refund, cancellation, start date]."

Have the written quote ready before you ask them to choose. Say the full price plainly, once, then pause.

**Concerns**
> "What would stop you from going ahead?" · "Is there anything you'd need to be true to feel good about this?"

Answer the concern they name, not the one you expected. Use **objection-handling** for the responses. Answer the named concern before taking payment, even if they've already said yes.

**Decision**
> "Would you like to go ahead?"

Ask it directly and then wait. Three outcomes:

- **Yes:** take payment and book the first session on the call (see **proposal-and-payment**). Then: "What's the first thing you'll do this week?" Their answer tells you whether they understood.
- **Not yet:** ask once, "Is there something specific that's still unresolved?" If yes, answer it. If no, respect it and agree a dated next step: "Can we talk Thursday at 2 so you can let me know either way?"
- **No:** thank them, ask what didn't fit (it improves the offer), and close the file kindly. No pressure, no chasing.

### 4. Set the after-call rules

- Within 1 hour: send the recap (their goal in their words, the recommendation, price, terms, next step) and the **one-page-offer** if they haven't seen it.
- Every "not yet" goes on a pending list with an owner and a dated next step. Nobody gets "just checking in".
- Record the outcome separately as one of: bought, booked to decide, deferred with date, declined, not a fit. Agree what each status means so the numbers are honest.
- Track same-day and later decisions separately, and give a later decision its full window before counting it lost.

Pending list format:

```markdown
| Prospect (internal ID) | Recommendation | Open question | Owner | Next step | Date |
```

### 5. Practice the hard moments

Role-play the moments the team avoids: saying the price, the guarantee question, "I need to ask my partner", the buyer who wants only the cheapest piece. An observer checks the stage that broke, gives one specific correction, and you repeat only that moment. Use **call-grader** on real recordings weekly.

### 6. Deliver the playbook

Assemble it in this order: pre-call brief template, the eight-stage table, the lines for each stage, the decision branches, after-call rules with the recap template, and the pending list. Keep it under 3 pages so it gets used.

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Brief | A pre-call brief template exists and includes what the prospect was already told |
| 2 | Order | Goal is asked before the offer is explained |
| 3 | Playback | The priority stage plays back their words and waits for agreement |
| 4 | One recommendation | The recommendation is a single offer tied to their stated goal, with an honest limit |
| 5 | Price | Total, inclusions, payment options with totals and key terms said plainly |
| 6 | Concerns | Named concern answered before payment |
| 7 | Direct ask | The decision is asked for in one plain sentence |
| 8 | Not yet | One question, then a dated next step; no open-ended "follow up later" |
| 9 | Voice | Lines sound like the owner (section 6) and use customer words (section 3) |
| 10 | After call | Recap, pending list and outcome statuses defined |
| 11 | Proof | Any result mentioned is from the proof ledger with fitting permission |

## Rules

- Never invent urgency, fake scarcity or a deadline that isn't real.
- Never invent a problem the prospect didn't raise to make the sale bigger.
- Never improvise a discount on the call to close. If price is the issue, find out whether it's the total, the timing or the size of the commitment, and offer approved terms or a smaller approved option.
- Never guarantee an outcome. Guarantee only what the offer sheet guarantees.
- Never take payment while a named concern is unanswered.
- Never recite the script at the prospect regardless of what they say. The stages are a map; the conversation follows them.
- Use only proof from the ledger, within its permission. Internal-only proof may be said on a call only if the ledger allows sales-call use.
- Record calls only with consent, and keep recordings in the business's approved system.
- In health businesses, the clinician makes the recommendation and explains risks, limits and alternatives; whoever takes payment may not add to the approved plan.

## Ask your audience

Ask 3 to 5 recent buyers and 2 who didn't buy:

1. What made you book the call?
2. What did you need to hear before you could say yes (or no)?
3. Was there a moment on the call you felt pushed or confused?
4. What did you tell your partner or team about it afterward?
5. What almost stopped you?

## Related skills

- **objection-handling**: responses for the concerns stage.
- **call-grader**: scores recordings against these stages.
- **proposal-and-payment**: the written quote, terms and payment link.
- **one-page-offer**: sent before and after the call.
- **setter-script**: books the call and fills the brief.
- **follow-up-sequence**: the messages for "not yet".

## Examples

A full talk track for a fictional business coach is in [references/talk-track-example.md](references/talk-track-example.md).
