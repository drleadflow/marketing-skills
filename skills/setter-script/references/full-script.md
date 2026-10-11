# Full opener-to-booking script

A filled-in example for a fictional business coach, Clearhead Coaching, selling a free 20-minute offer audit. Follow the same stage shape and branch logic for any business; swap the offer, voice, and named visit. `{rep_name}` here is a human setter's real name. If this script runs on an AI setter instead, swap `{rep_name}` for a disclosed assistant persona (for example "Clearhead's booking assistant") per **ai-setter-guardrails**, and add the direct "are you a bot?" branch from that skill.

## Stage: new -> warming

**Setter:** Hey {first_name}, thanks for reaching out about the offer audit! Quick one before we grab time: what's got you looking at this right now?

**Lead:** honestly my close rate is terrible, I'm getting calls but nobody's buying

**Setter:** That's a really common one, and usually fixable. When someone says no, what's the reason they give you?

## Stage: discovery -> pain identified

**Lead:** mostly "I need to think about it" and then they ghost

**Setter:** Got it, that's almost always a pricing or offer-clarity problem, not a "them" problem. How are you pricing it right now, one flat number or a few options?

**Lead:** one flat number, $2k

**Setter:** Makes sense. The audit's built exactly for this, we'd look at how it's packaged and priced against what you're promising. Want me to walk you through what that looks like?

*(readiness gate met: a handful of exchanges, a stated problem in the lead's own words)*

## Stage: pitch

**Setter:** Here's what the audit is: 20 minutes, I look at your current offer and pricing live with you, and you walk out with one specific change to make. No pitch for anything else on the call. Sound like something you want to grab time for?

## Branch: explicit yes

**Lead:** yeah let's do it

**Setter:** Perfect, here's the link: {booking_link}. Grab whatever time works, I'll see you then.

*(link sent only after this explicit yes, never earlier)*

## Branch: vague reply

**Lead:** ok cool

**Setter:** *(treat as not-yet-explicit; ask directly rather than sending the link)* Want me to just send the link so you can grab a time, or did you want to ask anything else first?

## Branch: direct question before the link

**Lead:** is this going to turn into a sales pitch?

**Setter:** No, the audit itself has no pitch in it. If at the end you want to talk about working together longer-term, that's a separate conversation you'd have to ask for. Want the link?

## Branch: declines once

**Lead:** not right now, maybe later

**Setter:** Totally fine. Want me to check back in a couple weeks, or would you rather reach out when the timing's better?

*(first decline, not yet a terminal state; log the answer and route to follow-up-sequence)*

## Branch: declines a second time (terminal)

**Lead (on a later touch):** I said I'm not interested

**Setter:** Understood, I'll stop reaching out about this. If anything changes down the line, the door's open.

*(2-strike decline cap reached; no further pitch, link, or follow-up to this lead, ever, per ai-setter-guardrails)*

## Stage: link sent -> booked

**Lead:** booked for Thursday at 2

**Setter:** *(verify against the real calendar record before confirming)* Great, I can see Thursday at 2pm on the calendar, see you then.

*(never confirm from the chat message alone; confirm only once the calendar record shows it accepted)*

## Stage: post-booking

**Setter (short acknowledgment + prep):** You're all set for Thursday at 2. One thing to have ready: your current price and what's included, so we can get straight into it.

**Lead:** sounds good thanks

**Setter:** *(bare acknowledgment gets silence, not an enthusiastic reply; see setter-script SKILL.md post-booking note)*

## Branch: cancels after booking

**Lead:** need to cancel, things came up

**Setter:** No problem at all, want me to send a new link so you can grab another time whenever works, or should I just leave it with you?

*(clears the booked flag, exits gracefully, no guilt language)*

## Branch: out of scope question

**Lead:** can you also tell me if my LLC structure is set up right?

**Setter:** That's outside what I can speak to, best to run that by an accountant or attorney. I can still help with the offer and pricing side on the call though, want to keep that booked?

*(routes the out-of-scope question honestly, doesn't improvise an answer, keeps the door open on the actual offer)*

## Branch: asked directly if this is a bot (AI setter only)

**Lead:** wait, am I talking to a real person or a bot?

**Setter:** I'm an AI assistant helping with scheduling for Clearhead, happy to say that straight up. I can still get you booked for the audit though, want the link?

*(discloses truthfully and immediately, per ai-setter-guardrails step 4a; never denies being an AI; keeps the conversation open afterward rather than closing on the disclosure)*
