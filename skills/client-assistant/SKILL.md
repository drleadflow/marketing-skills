---
name: client-assistant
description: "When the user wants to build or configure an AI assistant their clients or program members can talk to directly: answering FAQs, pointing to resources, tracking progress, or escalating to a human. Also use when they mention 'client-facing bot,' 'member assistant,' 'program assistant,' 'client portal AI,' 'help my clients without me,' or 'answer client questions automatically.' For the bot that qualifies and books new leads before they're a client, see setter-script and ai-setter-guardrails. For onboarding the client who will use this assistant, see client-onboarding."
metadata:
  version: 1.0.0
  chokepoint: fulfillment
  pack: core
---

# Client Assistant

You'll finish with a scoped, client-facing assistant spec: its question categories, its sources, and its escalation rules, filled in for one real business, not a generic chatbot brief.

## Before you start

Read `.agents/business-context.md` (sections 1, 6, and 7: Business, Voice, Channels) and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. What does the client ask your team most often, in their own words (pull from real threads, tickets, or calls)?
2. Where does "I don't know, let me find out" need to happen today? What's too specific, sensitive, or high-stakes for an automated answer?
3. What channel does the client already use (SMS, a portal, a chat widget, email)?

## How to do it

1. **Mine real questions, don't guess them.** Pull the last 30 to 60 days of actual client questions and group them into repeating categories.
2. **Write the scope, in both directions**, using the template below.
3. **Ground every answer in a real source.** Link each category to the actual document it should pull from (an SOP from **sop-generator**, a live order status). Never let the assistant invent a policy, price, or timeline.
4. **Design the escalation path**: who's notified, how fast, and what the assistant says while the client waits.
5. **Set the tone to match business-context section 6 (Voice)**, not a generic customer-service register.
6. **Pilot on a small group first** and read the actual transcripts for three specific failure modes: a wrong answer stated as fact, a tone that doesn't match business-context section 6, and a moment a client clearly wanted a human and didn't get escalated.
7. **Review monthly.** A new repeating question category means the scope needs to grow; a spike in escalations on one topic means a source document is missing or out of date, not that the assistant needs a smarter guess.

## Template: assistant scope sheet

```markdown
# Client assistant scope: [Business name]

## Answers directly
| Question category | Real source document | Example question |
|---|---|---|
| | | |

## Always escalates
| Trigger | Who's notified | Target response time | What the assistant says while waiting |
|---|---|---|---|
| Billing dispute | | | |
| Anything sounding like a complaint | | | |
| Health / legal / financial question | | | |
| Explicit request for a human | | | |

## Tone
- Traits (from business-context section 6):
- One real sample line this assistant should sound like:

## Pilot
- Pilot group size: | Start date: | Transcripts reviewed by: | Go/no-go date:
```

## Check it

- [ ] Every answer category traces to a real, current source document
- [ ] Escalation triggers are explicit, not left to judgment on sensitive topics
- [ ] A human is notified and responds inside the stated window, tested for real, not assumed
- [ ] Tone matches business-context section 6
- [ ] Piloted on a subset before full rollout, with transcripts read start to finish, not skimmed
- [ ] No health, legal, or financial advice given directly; those always escalate

## Rules

- Never let the assistant state a price, policy, or timeline it can't point to a real source for.
- Never answer a health, legal, or financial question directly; escalate every time.
- Never hide that it's an assistant; clients can ask for a human and get one.
- Never go live to the full client base without a pilot and a human reading real transcripts.
- If a client says stop, upset, or complaint, escalate immediately and don't let the assistant try to resolve it alone.

## Related skills

- **client-onboarding**: stand this assistant up as part of a new client's kickoff.
- **sop-generator**: write the source documents the assistant should ground its answers in.
- **setter-script**: the pre-client version of this, for leads who haven't bought yet.

## See it worked

`references/example.md` runs this scope sheet for a fictional home-services company.
