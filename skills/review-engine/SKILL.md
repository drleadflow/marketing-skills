---
name: review-engine
description: "When the user wants to get more reviews, build a review-request system, or respond to reviews (good or bad). Also use when they mention 'get more Google reviews,' 'review request,' 'respond to a bad review,' 'reputation,' 'star rating,' or 'review automation.' For turning a review or result into a published proof piece, see case-study. For asking happy customers to refer others instead of leaving a review, see referral-program."
metadata:
  version: 1.0.0
  chokepoint: referrals
  pack: core
---

# Review Engine

You'll finish with a system that asks every customer who shows up for a review, at a consistent point, with real message copy, reply templates, and a logging path into the proof ledger.

## Before you start

Read `.agents/business-context.md` (section 7: Channels, section 6: Voice) and **messaging-compliance** if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Which platform matters most for this business's buyers?
2. What's the consistent moment right after delivery when a request should go out (end of visit, after delivery, X days after purchase)?
3. Is there a current review request process at all, or is this starting from zero?

## How to do it

1. **Ask everyone, at the same point, every time** (see timing note below; there's no fixed benchmark for the right number of days, so pick one moment and hold it constant).
2. **Never gate or incentivize the review itself.**
3. **Make the ask one click**, using the message templates below.
4. **Keep the review request separate from any clinical, legal, or sensitive consent.**
5. **Track invitations sent, reviews received, and themes**, using the template below.
6. **Reply to every review within a set window**, using the reply templates below. **If this is a health practice, use the health-practice reply template, never the general one**: a public reply from a covered practice can't confirm someone is a patient or name the service they received, even when responding to a positive review.
7. **For a public complaint:** reply briefly, move it private.
8. **Log a strong new review into `.agents/proof-ledger.md` as a Pending row**, not straight into Approved claims.
9. **Cap and track who's been asked.** No more than one initial ask and one follow-up per visit, ever, and track that state so the same visit never gets asked a third time.

## Message templates (the ask)

**Immediately after delivery, in person or by text (same day):**
> "Thanks for choosing us today! If you've got 60 seconds, a review really helps other folks find us: [link]."

**If no review within a few days, one follow-up only (don't repeat the ask endlessly):**
> "Hey [Name], hope everything's holding up well since [service/visit]. If you have a minute, we'd appreciate a quick review: [link]. No worries if not!"

## Reply templates: general business

**Positive review:** "Thank you, [Name]! Really glad [specific thing they mentioned] worked out. Hope to see you again for [natural next step]."

**Negative review, public reply:** "Thanks for the feedback. We'd like to make this right. Please reach out to [contact] so we can look into this directly." Then move it private.

**Negative review, private follow-up:** "Hi [Name], saw your review and wanted to hear more about what happened. Can you walk me through it?" Ask before offering a fix; don't lead with a refund or discount.

## Reply templates: health practice (never confirms a patient relationship)

A health practice's public reply, positive or negative, never confirms the reviewer was a patient and never names the service, condition, or visit, even when the reviewer named it themselves. The reviewer disclosed their own information; the practice still can't confirm or add to it in public.

**Positive review:** "Thank you for the kind words, we appreciate you taking the time to share this."

**Negative review, public reply:** "We take all feedback seriously and would welcome the chance to discuss this directly. Please contact our office at [contact] at your convenience." Never move specifics into the public thread, before or after this reply.

**Negative review, private follow-up (only after the person reaches out through a private channel):** "Thank you for reaching out. Can you tell me more about what happened?" Ask before offering a fix.

## Template: review tracker

```markdown
# Review tracker: [month]

| Date requested | Customer | Channel | Review left? | Rating | Theme | Reply sent? |
|---|---|---|---|---|---|---|

- Invitations sent: [n] | Reviews received: [n] | Response rate: [n]% (no fixed benchmark for this; log your own baseline)
- Recurring themes this month:
```

## Template: proof-ledger Pending row for a new review

```markdown
| ID | Claim | What's missing | Owner | Chase by |
|---|---|---|---|---|
| P-0XX | [star rating / specific quote] | Permission scope not yet confirmed with reviewer | [owner] | [date] |
```

## Check it

- [ ] The request goes to every customer at the same journey point, not a filtered subset
- [ ] No incentive or discount is offered in exchange for a review
- [ ] The request is a one-click link on a channel the customer already uses
- [ ] Reviews and themes are tracked in the tracker, beyond the star count
- [ ] Every review gets a reply within the stated window
- [ ] Negative reviews move to a private channel without confirming sensitive details publicly
- [ ] If this is a health practice, every public reply (positive or negative) uses the health-practice template and never confirms a patient relationship or names a service
- [ ] A strong new review is added to proof-ledger's Pending table, not straight to Approved claims
- [ ] No visit has been asked more than once for an initial request plus one follow-up; state tracks who's already been asked

## Rules

- Never gate who gets asked for a review based on how happy they seemed.
- Never offer money, discounts, or entries in exchange for a review; check the specific platform's rules before any campaign goes live.
- Never make further help with a complaint conditional on changing or removing a review.
- Never confirm in a public reply that the reviewer was a customer, or describe their specific service, purchase, or payment. For a health practice, this applies to positive replies too, and applies even when the reviewer named the service themselves.
- Keep the review ask separate from any required consent paperwork.
- Never ask the same visit more than twice total (one initial ask, one follow-up); track who's been asked so this can't slip.
- Never move a review straight into proof-ledger's Approved claims; it goes to Pending until permission and exact wording are confirmed.
- Never send a review request by text without the consent messaging-compliance requires for that channel; a transactional "your visit is confirmed" consent doesn't automatically cover a marketing-style review ask.

## Related skills

- **messaging-compliance**: the consent, quiet-hours, and opt-out rules this skill's review-request sends must follow.
- **proof-ledger**: owns the Pending and Approved tables a strong review gets logged into.
- **case-study**: turns an Approved-claims row built from a review into a published proof piece.
- **referral-program**: the parallel ask, pointing happy customers toward bringing a friend instead of leaving a review.

## See it worked

`references/example.md` runs this system for a fictional home-services company.
