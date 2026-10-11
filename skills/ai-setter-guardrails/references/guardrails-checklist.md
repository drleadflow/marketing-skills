# Guardrails enforcement table

Every row is enforced in code, never left to a prompt instruction alone, and never client-configurable.

| # | Guardrail | Why it's non-negotiable |
|---|---|---|
| 1 | Never commit to a specific time, a named person, or a live call claim. | Fabricated commitments are the most trust-destroying failure mode observed in live builds. |
| 2 | Crisis or distress interrupt: halt all sends, send one pre-approved response with real resources, flag a human, lock the conversation. | Distress language can appear in any inbox, in any vertical; there is no safe exception. |
| 3 | No medical, legal, or financial advice; no outcome or earnings promise. | Regulatory exposure and trust damage; always verify against the business's actual vertical. |
| 4 | Terminal-state enforcement: once declined, disqualified, or disengaged, no further pitch, link, or follow-up, ever. | Without this, a lead can be re-pitched dozens of times after already saying no. |
| 5 | Two-strike decline cap. | Same failure mode as #4, caught earlier, before it reaches a terminal flag. |
| 6 | Sign-off exit and loop detection: a mutual goodbye disengages permanently. | Prevents endless pleasantry loops that waste the lead's patience and the team's attention. |
| 7 | Post-booking cancel detection: "cancel" or "not interested" after booking clears the booked flag and disengages gracefully. | Prevents a cheerful reminder going out to someone who already cancelled. |
| 8 | Auto-DQ rules are explicit and testable per client (existing customers, out of area, competitors) and logged with a reason. | DQ has to be mechanical and auditable, not a vibe call, so the rubric itself can be reviewed. |
| 9 | Human allowlist: staff, internal test accounts, and known partners are ignored entirely by the AI. | Keep it current or the AI will "qualify" the business's own team. |
| 10 | Booking detection only from the CRM or calendar record, never inferred from chat text. | Chat language is ambiguous (sarcasm, a reply about something else, a confirmed time that was never really free), so text-matching can both falsely mark a non-booking as booked and miss a real one. |
| 11 | Explicit-consent link gate, enforced in code against the actual prior message. | A prompt-only version of this gate is unreliable: a model can be talked past an instruction mid-conversation, which a code-level check against the actual message prevents. |
| 12 | Pre-send scan for promise language (specific actions, named bookings, guarantees); block and substitute a neutral line, log every block. | Prevents the setter promising a specific action it has no authority to take. |
| 13 | If asked directly whether it's a bot or AI, disclose truthfully every time, then keep the conversation open; never deny it and never close with a hard goodbye right after disclosing. | Required by AI disclosure statutes such as Utah's and California's B.O.T. Act; a hard close right after disclosure also reads as an ending and loses conversations that were still recoverable. |
| 14 | Respect CRM state at send time, re-checked live: do-not-disturb flags, any per-channel setting, every do-not-contact tag pattern the CRM uses. | Most CRMs expose do-not-contact as more than one field (a global DND flag, a per-channel setting, and one or more custom tags); a filter that checks only the single boolean field misses contacts flagged through any of the others. |
| 15 | Never present as the business owner or a named human staff member who didn't write the message; use a disclosed assistant persona only. | Presenting an AI as a specific real person is the exact failure mode AI disclosure law targets. |

## Backtest before shipping a change

Replay any new or changed guardrail against historical conversations and count how many known-good outcomes it would have blocked. Ship only once false blocks are near zero.

## Build order

1. Read-only week: the setter drafts, a human sends.
2. Kill switch, dedupe, and logging.
3. Reporting wired before prompt tuning begins; you can't tune what you can't see.
4. Core conversation flow (see **setter-script**).
5. Guardrails 1 through 4, 10, 12, and the crisis interrupt, all live and tested, before any real volume.
6. Auto-DQ and routing, once the client's secondary-offer answer (if any) is known.
7. Follow-up cascades (see **follow-up-sequence**).
8. Booking verification from the real record.
9. Reactivation tiers and human queues.
10. Voice notes or richer media, only once the channel and the client's budget support it.
