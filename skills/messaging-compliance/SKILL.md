---
name: messaging-compliance
description: "When the user wants to check whether a text, call, email, or DM campaign is compliant before sending it, or wants the consent language for a lead form. Also use when they mention 'TCPA', 'A2P 10DLC', 'is this text legal', 'CAN-SPAM', 'STOP handling', 'quiet hours', or 'consent checkbox'. Every skill that sends a message reads this first. For the AI-specific disclosure and handoff rules, see ai-setter-guardrails. This is not legal advice; it's a starting checklist to take to the business's own attorney."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Messaging Compliance

You'll finish with one shared consent and compliance checklist for US text, call, email, and DM outreach: what the opt-in has to say, what counts as consent, quiet hours, opt-out handling, registration basics, and the platform-specific messaging windows.

This is not legal advice. Rules in this space change often and vary by state; treat everything here as a starting checklist, not a final answer, and have the business's own attorney review the actual consent language and send policy before real volume goes out.

## Before you start

Read `.agents/business-context.md` if it exists. Ask only what is missing:

1. What's the business's state (and every state its leads live in)? Some states (for example Florida, Oklahoma) have stricter quiet-hours or consent rules than the federal baseline.
2. Does the business already have a registered 10DLC campaign and brand for its sending number, or is this being set up fresh?
3. Is any part of this AI-voiced (a cloned or synthetic voice on a call or voice note)? The FCC's 2024 ruling treats AI-generated voices as "artificial or prerecorded" under the TCPA, which changes the consent needed for calls.

## How to do it

### 1. Know what TCPA requires, and for what

The Telephone Consumer Protection Act requires **prior express written consent** for:
- Marketing text messages
- Autodialed or prerecorded/AI-voiced marketing calls

"Written" means a signed (including electronic signature) agreement that clearly discloses: the business will be sending marketing messages/calls, by automated means, to the specific number given, and that consent is not a condition of any purchase. A pre-checked box doesn't count as consent; an unchecked box the person actively checks does.

This is separate from TCPA's broader "prior express consent" for non-marketing informational texts and calls (appointment reminders, service updates), which has a lower bar but still requires some form of consent, not silence.

### 2. Write the consent checkbox language correctly

A compliant checkbox, adapted to the actual business name and message types sent, states:

> "I agree to receive text messages from {business_name}, including {message_types, e.g. 'appointment reminders and promotional offers'}, sent using automated technology, at the number provided. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our [Privacy Policy]({privacy_policy_link}) and [Terms]({terms_link})."

Required elements: the business is named, the message types are described, automated technology is disclosed, "not a condition of purchase" is stated, STOP/HELP is mentioned, and a privacy policy/terms link is given (the last two are also what most 10DLC campaign reviews check for). A verbal, in-person, or over-the-phone version of this only covers appointment reminders and other service messages, never marketing texts; marketing needs the written version, not a verbal substitute. See `references/consent-language.md` for checkbox and verbal-disclosure variants by use case.

### 3. Register for A2P 10DLC before sending any meaningful volume

US carriers require Application-to-Person 10-digit long code (A2P 10DLC) brand and campaign registration for business texting at scale through most platforms (GoHighLevel, Twilio, and similar). Unregistered sending gets filtered or blocked, and a mismatched use case (registering as "low volume" while sending marketing) risks suspension. Register the actual use case, not a cheaper-sounding one.

### 4. Respect quiet hours, federal and state

Federal baseline under TCPA: no outbound marketing calls or texts before 8am or after 9pm in the **recipient's** local time zone, not the sender's. Several states set a narrower window or add other restrictions (for example, Florida's telemarketing law adds further limits for in-state recipients); check the specific state law for every state leads live in, don't assume the federal baseline is sufficient everywhere.

### 5. Handle STOP, HELP, and opt-out correctly

- Any reasonable opt-out keyword (not only the literal word "STOP") must be honored. This comes from the FCC's revocation-of-consent order (adopted February 2024, published in the Federal Register March 5, 2024, most provisions effective April 11, 2025): a caller or texter must process a revocation of consent within a reasonable time, not to exceed 10 business days of the request. This is a separate rule from the one-to-one consent rule (see step 6), and it's in effect; the one-to-one rule is not. One piece is delayed: the provision that treats an opt-out from one type of message as revoking consent for all of a business's robocalls and texts was pushed to January 31, 2027 (FCC order of January 6, 2026); verify its status before relying on it.
- An opt-out from one campaign/list suppresses future marketing contact from that business across the channels it controls, not just the specific thread; a lead who texts STOP on one campaign and still gets a different campaign's blast is a real violation, not a technicality.
- HELP replies get a short message naming the business and how to get support (a phone number or email), not a canned deflection.

### 6. Check the one-to-one consent rule's current status before relying on it either way

The FCC's "one-to-one consent" rule would have required consent to one specific seller at a time, ending broad lead-gen consent shared across many buyers. On January 24, 2025, the Eleventh Circuit (Insurance Marketing Coalition v. FCC) vacated it, ruling the FCC exceeded its statutory authority; the rule never took effect. As of this writing it's vacated, not merely delayed, but this is exactly the kind of ruling that gets appealed, revised, or replaced. **Verify its current status directly against the FCC's current rules and any later court action before telling a business what a purchased or shared lead list's consent covers**, rather than relying on this note indefinitely. If the business buys leads from a third-party generator rather than capturing its own consent, this is the highest-risk assumption to get wrong.

### 7. Email: CAN-SPAM and bulk-sender rules

- Every marketing email needs a physical postal address, a clear and honest subject line, and a working one-click unsubscribe that's honored within 10 business days (sooner is better).
- Never use a deceptive "From" name or a misleading subject line.
- Gmail and Yahoo require bulk senders (roughly 5,000+ emails/day to their domains) to authenticate (SPF, DKIM, DMARC) and support one-click unsubscribe (RFC 8058) or risk being blocked outright.

### 8. Respect Meta's 24-hour messaging window for Instagram and Messenger

Automated messages to a person on Instagram or Messenger are only allowed within 24 hours of that person's last message in the thread. After 24 hours, only a human sends, or the account uses Meta's human-agent tag where it's eligible for one; an automated send past the window is a policy violation regardless of how soft or helpful it reads. See **comment-to-dm** for where this specifically applies.

### 9. Log consent, don't just assume it

Store, per contact: how consent was captured (which form, which checkbox language, timestamp, IP if captured online), and what it covers (marketing texts, marketing calls, email, or some subset). A consent record that just says "opted in" without the actual language and timestamp isn't defensible if ever challenged.

## Check it

- [ ] Every marketing text and AI-voiced or autodialed marketing call has prior express written consent on file, not just a general opt-in
- [ ] Consent checkbox language names the business, the message types, discloses automated technology, states consent isn't a condition of purchase, mentions STOP/HELP, and links a privacy policy/terms
- [ ] Any verbal or point-of-sale consent is treated as covering service messages only, never used to justify marketing texts
- [ ] 10DLC brand and campaign registration matches the actual use case being sent
- [ ] Send windows respect both the federal 8am-9pm recipient-local-time baseline and any stricter state rule for every state leads live in
- [ ] STOP suppresses the contact across every channel the business controls, honored within 10 business days
- [ ] The one-to-one consent rule's current legal status has been verified directly, not assumed, before relying on any purchased or shared lead list's consent
- [ ] Marketing emails have a postal address, honest subject lines, and a working one-click unsubscribe
- [ ] Any automated Instagram/Messenger send is inside the 24-hour window, or sent by a human/under the human-agent tag if not

## Rules

- This is a starting checklist, not legal advice. Have the business's actual attorney review consent language, scripts, and send policy before real volume goes out, and whenever a rule in this file might have changed.
- Never treat a pre-checked consent box, a purchased list's vague "opted in somewhere," or silence as valid consent for marketing texts or AI-voiced calls.
- Never assume the federal quiet-hours window is sufficient for every state; check the strictest applicable state rule.
- Never guess the one-to-one consent rule's current status; verify it directly against current FCC rules and court rulings before advising on shared or purchased lead consent.
- Never let an automated send go out on Instagram or Messenger past the 24-hour window.

## Related skills

- **speed-to-lead**: first-hour sends that must follow this checklist
- **follow-up-sequence**: multi-day cadences that must follow this checklist
- **show-rate**: confirmation and reminder sends that must follow this checklist
- **setter-script**: the conversation this checklist's consent and quiet-hours rules wrap around
- **comment-to-dm**: the 24-hour Meta messaging window specifically
- **voice-note-dms**: AI-voiced sends, which this checklist's call-consent rules cover
- **ai-setter-guardrails**: the AI-specific disclosure and handoff rules that sit alongside this checklist
- **database-reactivation**, **nurture-cadence**: cold and past-customer sends that must follow this checklist
- **review-engine**, **referral-program**, **repeat-purchase**: review asks, referral asks and win-back sends to existing customers, which still need marketing-text consent

## Examples

See `references/consent-language.md` for consent checkbox and verbal-disclosure variants for a fictional business coach, home-services company, and med spa.
