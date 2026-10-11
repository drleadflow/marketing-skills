---
name: comment-to-dm
description: "When the user wants to turn Instagram or Facebook comments into leads, set up a keyword that triggers an automatic DM, or run a 'comment GUIDE below' campaign. Also use when they mention 'comment to DM', 'keyword trigger', 'comment automation', 'DM automation', or 'auto-reply to comments'. For what the DM delivers, see lead-magnet. For the setter conversation once someone replies in the DM, see setter-script."
metadata:
  version: 1.0.0
  chokepoint: leads
  pack: core
---

# Comment to DM

You'll finish with one working keyword: a word people comment on a post that triggers an automatic DM, asks for the minimum needed to deliver the resource, and hands off cleanly to a human or a setter once someone replies.

## Before you start

Read `.agents/business-context.md`, `.agents/proof-ledger.md`, and **messaging-compliance** if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What is the one resource (from **lead-magnet**) this keyword delivers?
2. What word should people comment, and is it short, easy to spell, and not already used by another keyword?
3. Where do DM replies land, and who answers them?

## How to do it

### 1. One keyword, one resource, one trigger

Every keyword maps to exactly one lead magnet and has its own automation trigger. A shared trigger across two keywords delivers the wrong resource to someone, which is the most common way this breaks silently. Don't reuse a keyword that's used for anything else.

### 2. Write the public comment reply

A short public reply confirms the comment landed and tells them to check their DMs. Keep a small rotation of 3 to 5 variations so every commenter doesn't see the identical line, which otherwise reads as obviously automated.

### 3. Write the DM sequence

```
comment keyword
   -> DM: "Want the [resource]? Tap below." [one button]
            |
      tap the button
            |
      "What's your best email?"  -> if no valid reply, ask once more
            |                              |
       valid email                   still no email
            |                              |
    deliver resource + "sent a copy   deliver resource only
    to your inbox too"                (DM delivery only)
```

- **One button only.** The button exists to confirm intent and move them into the ask, not to offer a menu of destinations.
- **Ask for the minimum.** Email is usually the only field worth asking for inside a DM; a phone number adds friction most giveaways don't need.
- **Deliver either way.** If they never give an email, still send the resource in the DM. Refusing to deliver because a field was skipped breaks the promise the comment made.

### 4. Send ONE resource link, and put the community link inside it

The DM carries exactly one link: the resource. Any invitation to a community, newsletter, or next step lives inside the resource itself (a line in the guide, a link on the download page), not as a second button or a second link pasted into the DM. A DM with two destinations splits the person's attention between them instead of giving them one clear thing to do, and it reads as a pitch instead of a delivery.

### 5. Route the human handoff

If someone replies to the delivery DM with a real question instead of an acknowledgment, that's a lead, not a bot interaction. Route it to whoever answers DMs, or into **setter-script** if an AI or human setter is running the conversation from there. Never let the keyword automation itself attempt to answer a real question; it exists to deliver one resource, not to hold a conversation.

### 5a. Keep any automated follow-up inside the 24-hour messaging window

Meta's messaging policy bars automated, promotional messages to someone outside the 24-hour window after their last message in the thread. An automated "did you get a chance to look at it" a few days later is outside that window on a thread they never replied to. Once 24 hours has passed since their last message, any further outreach is either sent by a human, or uses the platform's human-agent tag where the account is eligible for it, never an automated send.

### 6. Promote only what's built and live

The keyword goes in a caption or a post only after the trigger, the DM copy, and the delivery path are tested end to end. A keyword announced before it's wired up produces confused commenters and no leads.

### 7. Test it for real before posting

Comment the keyword yourself from a second account. Confirm: the public reply fires, the DM arrives, the button works, the email ask behaves correctly both with and without a reply, and the resource delivers. Fix anything that's a stub or a placeholder before it goes live.

## Check it

- [ ] The keyword maps to exactly one resource and has its own trigger, not shared
- [ ] Public reply has at least 3 rotating variations
- [ ] DM has exactly one button and asks for the minimum field needed
- [ ] Resource delivers even when the person never supplies an email
- [ ] Exactly one link in the delivery DM; any community/newsletter invite is folded inside the resource, not a second DM link
- [ ] A real question in the DM thread routes to a human or a setter, not answered by the keyword automation
- [ ] Any follow-up DM sent more than 24 hours after the person's last message is sent by a human or under the human-agent tag, never automated
- [ ] Tested end to end from a second account before the keyword is promoted anywhere

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never promise a keyword in a caption before the automation is built and tested.
- Never put a second destination button or a second link in the delivery DM.
- Never collect health, medical, or financial detail inside a DM conversation; route anything beyond name and email/phone to a proper intake form or a human.
- Follow each platform's own rules on automated messaging and business accounts; a keyword campaign that imitates a personal reply at scale risks the account, not just the campaign.
- Never send an automated message outside Meta's 24-hour window since the person's last message; see **messaging-compliance**.

## Examples

See `references/keyword-example.md` for a full worked example: the keyword, the public reply rotation, the full DM sequence, the resource page outline, and a follow-up DM, all for a fictional business coach.

## Related skills

- **lead-magnet**: for what the keyword delivers
- **messaging-compliance**: the 24-hour window and other platform messaging rules this skill must follow
- **setter-script**: for the conversation once someone replies with a real question
- **ai-setter-guardrails**: for what any automated reply may and may not say
- **speed-to-lead**: for response-time targets once a DM becomes a real conversation
- **hook-writer**: for the post copy that gets people to comment the keyword in the first place
