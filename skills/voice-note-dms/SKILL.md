---
name: voice-note-dms
description: "When the user wants to add voice notes into a setter conversation, make an AI or human setter sound more like a real person on Instagram or SMS, or decide when a voice note beats a text reply. Also use when they mention 'voice note', 'voice memo DM', or 'should I send audio instead of text'. For the rest of the conversation this sits inside, see setter-script. For the rules that still apply when sending audio, see ai-setter-guardrails."
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: core
---

# Voice Note DMs

You'll finish with a clear read on when a voice note earns its place in a setter conversation, how to script and record one so it sounds like a person rather than a recording, and how to fall back cleanly when the channel or the moment doesn't support it.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. Which channel is this for (Instagram DM, SMS/MMS), and does that channel support inbound and outbound audio reliably?
2. Who is the voice: a real person recording live, a pre-recorded set of common replies, or a cloned voice? Any cloned or synthetic voice needs the speaker's documented consent before use.
3. Is this a one-off warm touch or part of a scaled, repeatable sequence?

## How to do it

### 1. Use a voice note where it earns something text can't

A voice note works best at a moment that benefits from warmth or urgency a typed message can't carry: a personal thank-you after someone takes a first step, a warm re-engagement after a few quiet days, or answering a hesitant "I'm not sure" with tone rather than more text. It's a weak choice for anything procedural: times, prices, links, or terms belong in text, where the person can read it back and where a model or a human downstream can parse it reliably.

### 2. Keep it short and written-first

Script it before recording, even for a live human: 15 to 30 seconds, one clear idea, ending on a question or a clear next step, same as any other setter turn. A rambling unscripted voice note reads as less professional than a tight one, not more personal.

### 3. Match the identity decision already made for the conversation

If a human setter who is the business owner is recording live, the voice note is just them, in their own voice. An AI setter is never voiced to sound like the owner or any specific named human staff member; it uses a disclosed assistant persona (see **ai-setter-guardrails**), the same way it would in text, and it says so if asked whether it's an AI.

### 4. Never fabricate a voice without consent, and never let consent stand in for disclosure

A cloned or synthetic voice modeled on a real person requires that person's documented, explicit consent before it's used at all. That consent is a separate question from disclosure to the recipient: even with the speaker's full consent to clone their voice, a voice note generated or sent by an AI setter is still an AI-generated message, and the setter never claims to be that human or denies being an AI if the recipient asks. Consent from the person being cloned does not relax the disclosure obligation in **ai-setter-guardrails** step 4a.

### 5. Build the fallback before scaling this

Most DM platforms deliver media as expiring links, not stable files. Download and re-host media at the moment it's received rather than processing a remote link later; a job that runs even a few minutes after the link is handed to it can find the source already gone. If a channel or a specific message doesn't reliably support audio (some SMS carriers strip MMS, some recipients have data off), always have a text version ready to send instead, and don't let a failed audio send become a silent drop.

### 6. Treat a voice note like any other outbound send under the guardrails

Quiet hours, opt-out handling, and the explicit-consent gate before any link apply exactly the same way to a voice note as to a text message; audio doesn't exempt a send from any rule in **ai-setter-guardrails**. A voice note also never collects or references health, medical, or financial detail any more than a text message would.

### 7. Measure whether it's helping

Track reply rate and advance-to-next-stage rate for conversations that received a voice note against ones that didn't, for the same stage and the same kind of lead. If it isn't moving the number, it's a production cost without a return, and the sequence should drop back to text for that stage.

## Check it

- [ ] The moment chosen for a voice note is one that benefits from tone, not a procedural detail (time, price, link, terms)
- [ ] Script is written first, 15 to 30 seconds, ends on a question or a clear next step
- [ ] Voice used matches who's sending it: a human owner's own voice, or an AI setter's disclosed assistant persona, never an AI voiced to sound like the owner or a named staff member
- [ ] Any cloned or synthetic voice has the real speaker's documented consent on file, and that consent is treated as separate from, not a substitute for, AI disclosure to the recipient
- [ ] A text fallback exists for any channel or recipient where audio isn't reliable
- [ ] Quiet hours, opt-out, and the link-consent gate all apply to voice note sends exactly as they do to text

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never clone or synthesize a real person's voice without their documented, explicit consent.
- Never voice an AI setter to sound like the owner or a named human staff member, and never let the speaker's consent to being cloned stand in for disclosing to the recipient that the message is from an AI, if asked.
- Never put a price, a link, a time, or legal/medical/financial detail only in audio; always restate it in text in the same thread.
- Never let a failed or unsupported audio send become a silent drop; always fall back to text.
- Never send a voice note outside the business's quiet hours or to someone who has opted out.

## Examples

See `references/voice-note-scripts.md` for 3 scripts at 30 to 45 seconds each: a thank-you, a warm re-engagement, and an answer to hesitation, each for a different fictional business.

## Related skills

- **setter-script**: the conversation this fits inside
- **ai-setter-guardrails**: the rules that apply to a voice note exactly as they do to text
- **messaging-compliance**: TCPA, quiet-hours, and consent rules a voice note send must follow like any other outbound message
- **speed-to-lead**: for where a voice note might sit in a first-hour sequence
- **follow-up-sequence**: for where a voice note might sit in a reactivation or nurture cadence
