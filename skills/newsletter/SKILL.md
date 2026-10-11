---
name: newsletter
description: "When the user wants a full email newsletter issue written: subject line, body, and one CTA. Also use when they say 'write my newsletter', 'email this week', 'write a newsletter issue', or 'draft an email to my list'. Produces a complete, sendable issue with a tested subject line, a focused body, and a single clear CTA. For a one-off automated sequence instead of a recurring issue, see follow-up-sequence or nurture-cadence. For the opening hook/subject line alone, see hook-writer."
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Newsletter

You'll finish with one complete, sendable newsletter issue: a tested subject line, a preview text line, a focused body built around one idea, and a single CTA.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. What's the one idea this issue is about? (One idea per issue. A newsletter that covers 4 topics reads like a company update, not a piece someone wants to read.)
2. Who's on this list, and what do they already know? (A list of past customers needs a different opener than a list of cold leads from a lead magnet.)
3. What's the one action you want a reader to take after reading?

## How to do it

### 1. Write the subject line using hook-writer, then adapt for email

Email subject lines carry extra weight because they're competing in an inbox, not a feed. Generate 3 variants with **hook-writer**, then apply email-specific constraints:
- Under 60 characters so it doesn't truncate on mobile
- No ALL CAPS, no excessive punctuation, no spam-trigger phrasing ("FREE," "ACT NOW," "$$$")
- The subject line has to be true; the body must pay off exactly what it promised

Write a preview text line (the text that shows after the subject in most inboxes) that adds a second reason to open, not a repeat of the subject.

### 2. Pick the issue structure

| Structure | Shape | Best for |
|---|---|---|
| Single idea | One story/lesson/framework, start to finish | Teaching a specific insight |
| Curated roundup | 3 to 5 short items with one-line takes | Weekly digest lists |
| Behind-the-scenes update | What's happening in the business right now, framed as a lesson, not a status report | Builder-lane audiences who want to watch the business operate |
| Direct offer | Short story or reason, then a clear offer and deadline | A launch or time-limited promotion |

Default to single idea unless the list expects a roundup format already.

### 3. Write the body

- Open with the hook from step 1 restated or extended in the first line of the body (don't make the reader wait for the point).
- One idea, developed with a real example, story, or number, not a list of unrelated tips.
- Short paragraphs, 1 to 3 sentences each. Line breaks do real work in email; a wall of text gets skimmed and abandoned.
- Write like one person talking to one reader. Second person ("you"), not "our subscribers" or "readers like you."
- End the body naturally into the CTA; don't bolt the CTA on as an afterthought paragraph.

### 4. Write one CTA

Exactly one. A newsletter with 3 links and 2 CTAs gets none of them clicked at a meaningful rate. Pick the one action that matters most and ask for only that:
- "Reply and tell me [specific question]" (drives replies, strongest for list health)
- "Here's the link if you want to go deeper: [resource]"
- "[Specific, time-bound offer], here's the link."

### 5. Check the technical basics

- Plain-text-feeling formatting over heavy HTML design; newsletters that read like a person wrote them outperform ones that look like a brochure.
- One clear unsubscribe-compliant footer per platform's requirements.
- If sending cold outreach rather than to an opted-in list, this isn't a newsletter, it's cold email, a different discipline with its own compliance rules (CAN-SPAM at minimum: a real postal address, a working unsubscribe, no deceptive subject lines). Don't repurpose this skill's structure for a cold list.

## Check it

- [ ] Subject line passes the hook-writer first-3-words test and is under 60 characters
- [ ] Preview text adds a reason to open, doesn't repeat the subject
- [ ] One idea in the body, not three
- [ ] Exactly one CTA
- [ ] Every stat or claim traces to the proof ledger or is marked `[NEEDS PROOF: ...]`
- [ ] Under the finished issue, list `Proof used: P-xxx, P-xxx` naming every approved claim ID relied on, or "Proof used: none"
- [ ] Zero em dashes or en dashes, no hype words

## Rules

- Never send to a list that didn't opt in; that's spam, not a newsletter.
- Don't promise something in the subject line the body doesn't deliver; that's the fastest way to kill open rates long-term.
- Draft, then a human approves, then send. Never a silent bulk send.

## Examples

See `references/example.md` for a fully worked fictional newsletter issue (home-services company, single-idea structure).

## Related skills

- **hook-writer**: generate and score the subject line
- **content-repurposing**: pull a newsletter-shaped moment from a longer source asset
- **follow-up-sequence**, **nurture-cadence**: for automated sequences instead of a one-off issue
