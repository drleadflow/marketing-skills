---
name: tracking-and-attribution
description: "When the user needs to set up or fix how they know where a lead or booking came from: UTMs, call tracking, form source capture, CRM source fields, pixel and Conversions API basics, or 'how did you hear about us' tracking. Also use when they mention 'we don't know which ads work,' 'conversion tracking,' 'UTM parameters,' 'call tracking,' 'attribution,' or 'set up my pixel.' Every ad and funnel skill in this repo assumes a working conversion event already exists; this is the skill that builds one. For a health business, see step 5 before sending any patient-level event to an ad platform; it's off by default."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Tracking and Attribution

You'll finish with a source-tracking setup: UTM naming, call tracking, form source capture, the CRM fields that hold it all, pixel and Conversions API basics split by whether patient-level events are even allowed to leave the business, the booked/showed/closed events every other skill in this repo assumes exist, and a weekly source report.

## Before you start

Read `.agents/business-context.md` (sections 1, 2, and 7: Business, Offers and prices, Channels) if it exists. If it's missing, offer to run **business-context** first, or ask only what's missing:
1. What platforms send paid traffic today (Meta, Google, something else), and is a pixel or tag already installed anywhere?
2. Is this a health, legal, or otherwise regulated business where a treatment, condition, or case type could leak into a tracking URL or event name?
3. Where do leads land today: a form, a phone call, a DM, a walk-in? Each needs its own source-capture method.

## How to do it

1. **Name UTMs with a fixed, documented pattern**, not a free-for-all per campaign. A reasonable structure: `utm_source` (platform), `utm_medium` (paid-social, email, sms), `utm_campaign` (a short campaign code), `utm_content` (the specific ad or creative). **If this is a health business, every one of these uses an opaque code, never the treatment or condition name.** `offer=W29` in a lookup table beats `offer=botox-leg-syndrome` in a URL that gets logged by browsers, shared in screenshots, and sent to ad platforms.
2. **Set up call tracking** if phone is a real lead channel: a tracking number per major source (one for the website, one for each major ad campaign if volume justifies it), routed to the real line, with the source visible in the CRM the moment the call lands.
3. **Capture source on every form**, not just paid ones: a hidden field populated from the UTM parameters present at submission, plus a visible "How did you hear about us?" field as a fallback for sources a hidden field can't catch (word of mouth, driving past, a referral).
4. **Add the CRM source fields** from the template below if they don't exist yet. Source has to live on the contact record itself, not just in an ad platform's own reporting, or it's lost the moment someone looks at the CRM instead of the ad account.
5. **Install the pixel and Conversions API (or platform equivalent), and split the rule by business type:**
   - **Non-health business:** standard practice applies. A "Lead" or "Booked" event fires to the ad platform with a timestamp and a hashed contact identifier (email or phone, hashed before it leaves your system), and it never carries free-text form content in its parameters.
   - **Health business (the default, unless the business's own counsel has signed off otherwise): send no patient-level event to any ad platform or analytics tool, hashed or not.** A hashed email plus "booked an appointment at this clinic" is itself protected health information under HHS's guidance on tracking technologies; hashing the identifier doesn't change what the combination reveals, and neither Meta nor Google signs a business associate agreement for its standard ad products (Pixel, Conversions API, Google Ads conversion import, GA4). Sending a Lead, Booked, or Closed event with any identifier to one of these tools is a disclosure, not a technicality. What's safe to send: upper-funnel page-view or engagement events that carry no health context (a homepage visit, a "contact us" click, nothing tied to a specific treatment or appointment), reported as aggregate counts, not per-person events, with campaign performance measured through opaque codes and offline/aggregated modeling kept inside the CRM rather than sent out. If the business wants real patient-level ad measurement, that requires a HIPAA-compliant server-side tool with a signed BAA on file, plus a legal review of the integration before it ships, not an assumption that one exists.
6. **Define the three events every other skill in this repo assumes exist**: Lead (a real contact, not a page view), Booked (an appointment on the calendar, not just requested), and Closed (money changed hands, or the service was delivered for a non-sales business). These live in the CRM as the internal system of record regardless of business type; step 5 only governs what, if anything, gets sent onward to an ad platform. Pick one system of record for each and never let two systems silently disagree about whether one fired.
7. **Run the weekly source report** using the template below, feeding **marketing-scoreboard**'s paid-lead and paid-booked numbers directly from this tracking, not from memory or an ad platform's own self-reported conversions.

## Template: UTM naming key

```markdown
# UTM naming: [Business]

utm_source: [platform, e.g. meta, google, ig]
utm_medium: [paid-social / paid-search / email / sms / organic]
utm_campaign: [short code, e.g. oct-promo-01]
utm_content: [specific ad/creative id]

## Health-business exception (delete this section if not applicable)
Every code above is opaque. The lookup table mapping codes to real campaign names and offers lives in [CRM custom field / internal spreadsheet], never in the URL, the ad name shown to the platform, or any field a patient could see.

| Code | What it means (internal only) |
|---|---|
```

## Template: CRM source fields

```markdown
- Source (platform): [meta/google/organic/referral/walk-in]
- Source (campaign code): [matches UTM naming key]
- Source captured by: [hidden form field / call-tracking number / manual "how did you hear" entry]
- First-touch date:
- Lead event fired: [y/n, date/time]
- Booked event fired: [y/n, date/time]
- Closed event fired: [y/n, date/time]
```

## Template: weekly source report

```markdown
# Source report: [Business] | Week of [date]

| Source | Leads | Booked | Closed | Spend (paid sources only) | Cost per lead | Cost per booked |
|---|---|---|---|---|---|---|

- Any source with leads but zero bookings this week:
- Any lead missing a source field entirely (a tracking gap, not a real "unknown" source):
```

This report lives entirely inside the CRM, built from the source fields captured in step 3 and the UTM/call-tracking codes from steps 1-2. For a health business, this is exactly how cost-per-booked-appointment gets measured without sending a single patient-level event to an ad platform: the identifying data never leaves the CRM, and the ad platform only ever sees aggregate spend and, if anything, de-identified upper-funnel events.

## Check it

- [ ] UTMs follow a fixed, documented pattern, not ad-hoc per campaign
- [ ] If this is a health or regulated business, every UTM and event parameter is an opaque code with a separate internal lookup table, nothing identifying in the URL or event name
- [ ] Every lead channel (form, call, DM, walk-in) has a defined source-capture method, not just paid clicks
- [ ] Source lives on the CRM contact record itself, not only in an ad platform's dashboard
- [ ] Lead, Booked, and Closed events are each defined once and fired from one system of record (the CRM), regardless of what, if anything, also goes to an ad platform
- [ ] If this is a health business, no Lead, Booked, or Closed event, hashed or not, goes to an ad platform or analytics tool unless a signed BAA and a legal review are both on file; the default is aggregate, de-identified reporting only
- [ ] For a non-health business, the pixel/CAPI setup still sends no free-text form content in any event parameter
- [ ] The weekly source report runs and feeds marketing-scoreboard's paid-only numbers

## Rules

- Never put a treatment, condition, diagnosis, or other sensitive detail in a UTM parameter, ad name, or event parameter for a health or otherwise regulated business. Use an opaque code and keep the real meaning in an internal lookup table only.
- For a health business, never send a Lead, Booked, or Closed event to an ad platform or analytics tool with any identifier attached, hashed or not. A hashed email or phone number combined with "booked at this clinic" is itself protected health information under HHS's tracking-technology guidance, not a safely anonymized data point. The default is no patient-level events leave the business; only a signed business associate agreement with that specific tool, plus a legal review of the actual integration, changes that, and neither Meta nor Google offers a BAA for its standard advertising or analytics products.
- Never send a patient list, email list, or other identifying customer data to an ad platform's custom-audience tool for a HIPAA-covered practice unless that platform has signed a business associate agreement; most consumer ad platforms have not. This is the same rule as above, applied to audience uploads instead of conversion events.
- Never report a "paid lead" or "paid booked appointment" number that can't be traced to an actual UTM, call-tracking number, or form source field; a guess isn't a tracked number. For a health business, this reporting happens inside the CRM from aggregate counts, not from a per-person event sent to the ad platform.
- Never let two systems of record disagree about whether a Booked or Closed event fired; pick one owner per event.

## Related skills

- **marketing-scoreboard**: reads this skill's paid-source leads and bookings directly for its cost-per-booked-appointment line.
- **chokepoint-audit**: the Lead, Booked, and Closed events this skill defines are what its benchmark table measures against.
- **health-claims-check**: for any health business, check this skill's opaque-code rule alongside the broader claims and ad-copy compliance review.

## See it worked

`references/example.md` runs this setup for a fictional home-services company and a fictional med spa (showing the opaque-code difference).
