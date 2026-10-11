---
name: objection-handling
description: "When the user wants response scripts for common sales objections, or wants help with a specific pushback a prospect gave. Also use when they say 'handle this objection', 'they said it's too expensive', 'objection scripts', or 'what do I say when they push back'. Produces the top 8 objections with response scripts that route back to the real underlying concern instead of arguing the surface complaint. For the full call this fits inside, see sales-call-playbook. For pricing/terms specifically, see proposal-and-payment."
metadata:
  version: 1.0.0
  chokepoint: closed
  pack: core
---

# Objection handling

You'll finish with response scripts for the top 8 objections, each one built to find the real concern underneath the stated objection rather than arguing with the words the prospect said.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What are the 2 or 3 objections this business hears most, in the prospect's own words?
2. Is there a real guarantee, financing option, or smaller starting point that can answer the "too expensive" objection?
3. Does the business have any proof (a result, a testimonial) in the ledger that answers the "does this work" objection?

## How to do it

### 1. The one rule: an objection is rarely the real objection

"It's too expensive" is often "I don't believe this will work for someone like me" wearing a price costume. Every script below has two parts: **acknowledge the stated objection** (so the prospect feels heard, not argued with), then **ask one question that finds the real concern** before responding to it.

Never argue with the surface-level words. Validate the logic that produced the objection before adding anything new; most objections come from a reasonable place, not a flaw in the prospect.

### 2. The 8 objections and their scripts

**1. "It's too expensive."**
> Acknowledge: "I hear you, that's a real number to commit to."
> Find the real concern: "Can I ask, is it that the price itself is more than you budgeted, or is it more that you're not sure yet it's worth it?"
> Route: if budget, ask what they're comfortable with and say honestly whether real progress is possible there. If worth-it, go to objection #2.

**2. "I'm not sure this will work for me."**
> Acknowledge: "That's a fair thing to want to know before you commit."
> Find the real concern: "What's making you unsure? Is it something about your situation that feels different, or is it more that you've tried things before that didn't work?"
> Route: name the mechanism plainly and, if available, point to a real proof point from the ledger that matches their specific situation.

**3. "I need to think about it."**
> Acknowledge: "Of course, it's worth thinking through."
> Find the real concern: "Before you go, is there something specific that's still unresolved, or is it more just wanting to sit with it?"
> Route: if specific, answer it directly. If just processing time, offer a real next step with a specific follow-up window, not a vague "let me know."

**4. "I need to talk to my spouse/partner/business partner."**
> Acknowledge: "Makes total sense, that's a decision worth including them in."
> Find the real concern: "Is there anything about this you think they'd push back on, so we can think it through together now?"
> Route: if a specific concern surfaces, handle it now. If not, offer a concrete follow-up time rather than leaving it open-ended.

**5. "I've tried something like this before and it didn't work."**
> Acknowledge: "That's frustrating, and it makes total sense you'd be cautious."
> Find the real concern: "What did you try, and what do you think went wrong with it?"
> Route: name specifically what's different about this approach, tied to what they just described, not a generic "we're different" claim.

**6. "I can get this cheaper somewhere else."**
> Acknowledge: "You might be able to, that's worth knowing."
> Find the real concern: "Can I ask what that other option includes, so we're comparing the same thing?"
> Route: compare what each option includes, not just the sticker price. Never improvise a discount to match a competitor; compare substance instead.

**7. "Now isn't the right time."**
> Acknowledge: "Timing matters, I get that."
> Find the real concern: "What would need to change for the timing to be right?"
> Route: if it's a real scheduling constraint, offer the smallest next step available now, even if the full commitment waits. If it's a disguised version of another objection, it'll usually surface here.

**8. "I don't think I need this."**
> Acknowledge: "Fair, that's worth being sure about."
> Find the real concern: "What would need to be true for you to feel like this was necessary right now?"
> Route: reconnect to the priority they named in discovery; if they never named a real priority, this may be a unqualified lead, not an objection to overcome.

### 3. Build the objection table as the final deliverable

Don't hand back loose scripts only. Fill this table from the business's own objections, not the generic 8, once real ones are known:

| Objection (their words) | Real concern | Response script | Proof used | Fallback if unresolved |
|---|---|---|---|---|
| "..." | "..." | [script] | P-xxx or [NEEDS PROOF] | [smaller approved option, or a dated "not yet"] |

The generic 8 above are starting shapes to adapt once the business names its own top 2 or 3; don't ship all 8 as final copy for a real client without checking which ones they hear.

### 4. What never belongs in any objection response

- A fabricated scarcity or urgency claim ("this price is only good today" when it isn't true).
- A guarantee or outcome that isn't offered.
- Pressure to buy "to make up for" a slow month or a shortfall; the prospect's decision is theirs, not a quota-fixing tool.
- Arguing with the prospect's stated feeling. Validate first, every time.

## Check it

- [ ] Every script has an acknowledge step before any response
- [ ] Every script asks a question to find the real concern rather than assuming it
- [ ] No fabricated urgency, scarcity, or outcome anywhere in a response
- [ ] Any proof point used is pulled from the ledger and matches the prospect's situation
- [ ] The objection table is filled with the business's own top objections, not left as the generic 8
- [ ] Under the finished script set, list `Proof used: P-xxx, P-xxx` for any ledger claims used, or "Proof used: none"

## Rules

- Never train a script to recite regardless of what the prospect said; these are shapes to adapt in the moment, not lines to force.
- Never use a competitor's objection-response wording verbatim; build your own from the business's actual differentiators.
- Health, money, legal, and outcome claims follow **health-claims-check** when the business is health-related.

## Examples

See `references/examples.md` for all 8 objections worked through for a fictional business coach and a fictional home-services company, plus the objection table format.

## Related skills

- **sales-call-playbook**: the full call these objections get handled inside
- **call-grader**: checks whether objections were handled this way on a real call
- **proposal-and-payment**: for objections that surface at the payment step
