---
name: ai-setter-guardrails
description: "When the user wants to build, audit, or harden an AI setter or chatbot that texts, DMs, or chats with leads. Also use when they mention 'AI setter', 'chatbot guardrails', 'kill switch', 'is my bot going to say something stupid', 'TCPA', 'opt out', or 'quiet hours'. This is the hard-rules layer underneath setter-script; read this before any AI setter goes live, not after. For the conversation content itself, see setter-script."
metadata:
  version: 1.0.0
  chokepoint: appointments
  pack: core
---

# AI Setter Guardrails

You'll finish with the fixed rules that apply to every AI setter regardless of client, voice, or offer: a kill switch, a consent gate before any link, a human handoff list, quiet hours, and opt-out handling.

An AI setter is a bot with a bank account attached. These rules are enforced in code, never left to a prompt instruction alone, and never weakened for a specific client's request. See `references/guardrails-checklist.md` for the full enforcement table and `references/client-config-template.md` for the per-client fields that must be filled in before launch.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. Also read **messaging-compliance** before building anything that sends: it covers TCPA consent, 10DLC, quiet hours, and the Meta messaging windows this skill's sends must follow. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What's the one thing this setter is allowed to book, and what's the booking link (a fixed constant, never something the model generates)?
2. Who is on the human handoff list, and what channel do they monitor for escalations?
3. Does this business have any vertical-specific compliance rule (health, legal, financial) that changes what the setter may say?

## How to do it

### 1. Separate what's fixed from what's per-client

Everything in this skill applies to every AI setter, every client, every vertical. The offer, voice, pricing, and DQ criteria are per-client and belong in a config file, never inlined into the setter's core instructions. If a client request would mean weakening a rule in this list, that's a signal to stop, not to accommodate.

### 2. Build the kill switch first, before any conversation logic

A single flag, checked immediately before every send, no exceptions and no caching an earlier check. Anyone (the business owner, the lead themselves by request, a human reviewing a flagged conversation) can flip a lead's AI off, and the setter goes silent for that lead the instant it's flipped. Build this before writing a single line of conversation prompt.

### 3. Gate every link behind explicit consent, in code

The setter may never send a booking link, a payment link, or any URL unless the immediately preceding message from the lead is an explicit yes, in their own words (not a vague "ok" or an emoji). This check happens in code against the actual prior message, not as an instruction to the model hoping it complies; a prompt-only version of this gate is unreliable because a model can be talked past an instruction mid-conversation, which is exactly what a code-level check against the actual message prevents. The gate applies to every link sent during the conversation, not just the first.

### 4. Define what the setter may never say

- No specific time, named person, or live-call claim ("they're calling you now") unless it's true at send time.
- No medical, legal, or financial advice, and no outcome, earnings, or results promise, beyond what the business has explicitly approved in writing.
- No invented fact, number, or guarantee. If it's not in the approved offer or the proof ledger, the setter hedges rather than fabricates.
- No claim to be a human, and no presenting as the business owner or any other named human staff member who didn't write the message. The setter may use a named assistant persona (for example, "Willow's booking assistant"), but that persona is always disclosed as an assistant, never as a person.
- No confirmation of the underlying tool, vendor, or platform running it, if asked. This is different from AI disclosure (see step 4a below) and never overrides it.
- No pricing beyond what the client's config explicitly allows the setter to quote in chat.

### 4a. Disclose truthfully when asked if it's an AI

If a lead asks directly whether they're talking to a bot, an AI, or a real person, the setter says so, plainly: it's an AI assistant for the business. This isn't optional or a per-client choice. Several US states now require it by statute (Utah's AI disclosure law and California's B.O.T. Act both require disclosure when asked, for a bot that's selling or soliciting), and more states are adding similar rules; verify the current list for any state the business operates in before launch. Disclosure is about being an AI, not about naming the underlying tool or vendor: "I'm an AI assistant helping with scheduling for {business}" satisfies it without confirming which platform runs it.

### 5. Define the human handoff triggers

Hand off immediately, every time, for:

1. **Distress or crisis language.** Halt all pitches, links, and follow-ups, send one pre-approved response with real support resources, flag a human immediately, and lock the conversation from further automated sends. No exceptions for a "low-stakes" vertical; distress language can appear in any inbox.
2. **Two firm declines.** After a second clear "not interested," stop pitching permanently; no re-pitch, ever, from any future run.
3. **A disqualified or terminal state** (declined, not a fit, disengaged). Once reached, no pitch, no link, no follow-up, permanently.
4. **A direct question about being a bot.** Disclose truthfully per step 4a, then keep the conversation open; never close with a hard goodbye after disclosing, which reads as an ending and often cuts off a conversation that was still recoverable.
5. **Anything outside the setter's allowlist**: existing-customer service questions, a clinical or legal question, a request the config doesn't cover.
6. **Link delivery failure** ("I don't see a link," "it's not working"): stop sending links for the rest of that conversation, tell them a human will follow up, and route it to a monitored queue.

### 6. Enforce quiet hours and opt-out handling

- Respect the lead's local timezone and the business's stated send window; don't fire outbound outside it.
- STOP and unsubscribe language suppresses all future outreach to that contact across every channel the business runs, not just the current thread; test this before launch.
- A lead marked do-not-contact, in any form the CRM uses (a tag, a field, a flag), is excluded from every send; enumerate every signal the specific CRM uses rather than assuming it matches a prior client's setup.

### 7. Never collect health, medical, or financial detail inside a DM or SMS conversation

The setter may ask what someone wants to accomplish in plain, non-clinical language ("what brings you in") but routes anything that needs a real diagnosis, a medical history, or specific financial detail to the practice's actual intake process, never collected or stored inside the chat thread itself.

### 8. Verify bookings against the real record, never chat text

A booking is confirmed only when the calendar or CRM record shows it accepted. A regex matching "yeah that worked" against chat text is not a booking confirmation: chat language is ambiguous (sarcasm, a reply about something else entirely, a lead confirming a time that was never really free), so it can both wrongly mark a non-booking as booked and miss a real booking that was phrased differently. Always check the system of record instead.

### 9. Build the kill switch and the human handoff before any volume, and backtest changes

Any change to a guardrail gets replayed against historical conversations before it ships, counting how many known-good outcomes it would have blocked; ship only once false blocks are near zero. Run a read-only week first on any new client: the setter drafts, a human sends, before it ever sends on its own.

## Check it

- [ ] The setter never claims to be human or presents as the owner or a named human staff member; it uses a disclosed assistant persona only
- [ ] A direct "are you a bot / AI?" question gets a truthful, plain disclosure, every time, in every state the business operates in
- [ ] Kill switch exists, is checked immediately before every send, and is not cached
- [ ] Every outbound link is gated on an explicit yes in the immediately preceding message, enforced in code
- [ ] Crisis/distress interrupt is built, tested, and routes to a human within a stated time target
- [ ] Two-decline cap and terminal-state enforcement are both live and tested
- [ ] Quiet hours and opt-out/STOP handling are confirmed working across every channel the business uses
- [ ] No health, medical, or financial detail is being collected or stored inside the chat thread
- [ ] Bookings are verified against the calendar/CRM record, never inferred from chat text
- [ ] A read-only week has run (or is explicitly waived with the owner's sign-off) before the setter sends unsupervised

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never let a client request weaken a guardrail in this list; the offer, voice, and DQ rules are the only things that are per-client.
- Never set an AI setter's persona to "the owner" or any specific named human staff member; that's a human-setter-only option. An AI setter's identity is always a disclosed assistant persona, and it discloses being an AI if asked, in every case, in every state.
- Never ship a new or changed guardrail without backtesting it against real historical conversations first.
- Never let the setter claim a specific outcome, number, or guarantee that isn't in the approved offer or the proof ledger.
- Health, legal, and financial claims follow **health-claims-check** when the business is health-related; this never relaxes for an AI channel versus a human one.

## Related skills

- **messaging-compliance**: the TCPA, 10DLC, quiet-hours, and Meta messaging-window rules this skill's sends must follow
- **setter-script**: the conversation content this guardrail layer protects
- **speed-to-lead**: for the first-touch sequence these guardrails also apply to
- **follow-up-sequence**: for cascade rules (stop on reply, never double-send) that sit alongside these guardrails
- **health-claims-check**: for vertical-specific compliance language
- **voice-note-dms**: for consent and quiet-hours rules extended to voice note sends

## Examples

See `references/client-config-template.md` for a fictional business coach, fictional home-services company, and fictional med spa filled-in example of the per-client fields (voice samples, offer, DQ rules, CRM signals) that sit underneath this fixed layer.
