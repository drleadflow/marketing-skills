---
name: landing-page
description: "When the user wants to build or fix a landing page for an offer, a lead magnet, an ad campaign, or a 'book now' page. Also use when they mention 'landing page', 'opt-in page', 'offer page', 'claim page', or 'why isn't my page converting'. Covers page structure, the congruency rule between ad and page, form fields, and the booking-vs-request distinction. For the lead magnet the page delivers, see lead-magnet. For the setter conversation after someone submits, see speed-to-lead."
metadata:
  version: 1.0.0
  chokepoint: leads
  pack: core
---

# Landing Page

You'll finish with a landing page structure, a form that asks for only what the next step needs, and a checklist that catches the most common reason a working page still underperforms.

That reason is usually that the page says something different than the ad that sent the traffic.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What is the one offer this page sells, and what is its one price or starting price?
2. Where is traffic coming from (an ad, a bio link, a referral, organic search), and what does that traffic already believe?
3. What happens the moment someone submits the form: an instant booking, a text-back flow, a human callback?

## How to do it

### 1. Fix one version of the offer before writing a word of page copy

Price, terms, what's included, what's excluded. Write it once and carry that exact version into the ad, the page, the form confirmation, and the first follow-up message. The most common landing-page failure isn't the page, it's a page that states the offer slightly differently than the ad that sent the traffic. Walk the ad and the page side by side and confirm every number matches before launch.

### 2. Build the page in this order

1. **Headline**: the benefit, stated plainly, matching the ad's hook
2. **Sub-headline or scarcity line**: only if it's true and dated; see the no-pressure rule below
3. **Visual proof**: a photo, a product shot, or a screenshot; before/after photos belong on the page and in the consult, never in the ad itself
4. **What you get**: 3 to 5 bullets naming the concrete deliverable, not vague benefits
5. **The form**: see step 3
6. **Credibility**: named providers or team with credentials, real testimonials from the proof ledger, or a comparison table that uses the same numbers as the ad
7. **How it works**: the steps between submitting the form and getting the result
8. **FAQ**: pre-answer the 2 to 3 objections you hear most on calls
9. **Footer**: any required disclaimer, contact info, and a map embed for a local business

### 3. Ask for only what this step needs

Name, email, phone, and consent is the default. Don't route clinical, medical, or financial detail through a marketing form; that belongs in the practice's own intake process, not a lead-capture page. Every extra field trades conversion for qualification; add one only when a later step requires it.

### 4. Say plainly what submitting the form does

If it creates a request rather than a confirmed appointment, say so on the page, before they submit. A request is not a booking. Confirm it only after the appointment is accepted on the calendar, never from the thank-you page alone.

### 5. Write urgency only if you can date it

No "today only," "spots going fast," or "last chance" language unless there's a real, dated reason. When a scarcity window closes, let it go silent; never quietly resurrect the same expired deadline on the next campaign.

### 6. Walk the whole journey yourself before spending on traffic

Submit a clearly labeled test through the live page, confirm the submission lands in the system that's supposed to receive it (not just a success message on screen), and exclude the test record from reporting. Test the awkward paths too: a mobile submission, a declined field, a double-submit.

### 7. Build the confirmation from the real record

Once a booking is accepted, the confirmation message pulls the actual date, time, and timezone from the booking record, not a weekday name or a guess. Never state that a payment is recorded unless the system has verified it.

## Check it

- [ ] Every number on the page (price, terms, what's included) matches the ad word for word
- [ ] Headline matches the belief the traffic source already holds
- [ ] Form asks for name, email, phone, and consent only, unless a signed BAA exists for clinical fields
- [ ] Page states plainly whether submitting creates a request or a confirmed booking
- [ ] No undated urgency language anywhere on the page
- [ ] A test submission has been run through the live page and confirmed in the receiving system, not just the success screen
- [ ] Any claim, number, or testimonial traces to the proof ledger or is marked `[NEEDS PROOF: ...]`

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never show a struck-through "value if bought separately" total unless every line item in it is a confirmed, real price.
- Never put before/after photos in the ad; the page and the in-person consult are the only places for them, and only with documented, HIPAA-compliant consent when the business is a health practice.
- Never bundle a financing pre-qualification into the general marketing consent checkbox; financing needs its own explicit step and, if shown, must state the example amount, the term, and the annual percentage rate together, never a bare monthly number.
- Health, money, legal, and before/after claims follow **health-claims-check** when the business is health-related.
- When you borrow a competitor's page structure, copy the sequence of sections, never their claims or numbers.

## Examples

A fictional business coach's page sells a "90-Minute Offer Audit" at one stated price with a 2-field form (email, phone). A fictional home-services company's page states a flat diagnostic fee and a same-week scheduling promise. A fictional med spa's page states one introductory visit price, names the provider by credential, states plainly that treatment is separate and not guaranteed, and links to a deposit policy that matches how the practice credits it. See `references/page-template.md` for the full section-by-section build with example copy for the med spa.

## Related skills

- **lead-magnet**: for the resource a page might be delivering instead of a paid offer
- **speed-to-lead**: for what happens the moment the form is submitted
- **ad-angles-and-copy**: for matching the ad that sends traffic here
- **offer-builder**: for fixing the offer itself before building the page around it
- **health-claims-check**: for any health, before/after, or outcome claim on the page
