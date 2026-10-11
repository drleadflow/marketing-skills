# Clinic-specific phase detail

This expands the summary in SKILL.md. For the general mechanics of each phase, see the linked
core skill; this file only covers what a patient-facing business adds on top.

## Research (on top of ad-research)

- Search the modality or program name specifically. If a telehealth-only platform or a national
  chain runs the same program with no in-person physician visit, that is both a positioning
  problem and an angle: "same medication, the difference is who is examining you before
  it's prescribed."
- Pull customer language from the practice's own inbox and reviews first. For a new offer with no
  history, use adjacent intent (people who asked about a related program), plus forum and review
  threads on the medication or modality itself, then swap in real inbox lines at the week-3
  refresh.
- Note the destination type for every competitor ad logged: funnel page, native lead form, direct
  booking, or chat. This tells you what's normal for the category.

## Creative strategy

Static formats that work well in this category specifically: offer card with a price shape,
editorial callout (the patient's sentence, small physician answer), fair side-by-side comparison,
a native notes-style screenshot, a forum card ("what people are asking," no real usernames or
logos), a real photo of the visit or consult in progress.

## Launch document additions

- **Price and deposit.** Show the price on the creative. Make the action a small, refundable or
  credited deposit worded exactly as the practice operates it ("Reserve with $X, credited to your
  visit"). Hiding the price buys cheap leads and loses show rate later.
- **Consult vs. deposit-first test, and whether it's even possible right now.** When the practice
  can take a deposit online, the ideal test is two ad sets at equal budget: an instant lead form
  (more leads, staff qualifies by phone) against a deposit-first flow (ad to page to calendar
  with payment, the real conversion is the paid deposit), judged on cost per paid deposit, since
  cost per lead on the form will always look better and mean less. **Before building this**,
  check the account's actual restriction status.
  - Since early 2025, Meta has restricted health- and wellness-classified ad accounts from
    optimizing toward mid- and lower-funnel standard events (purchase, lead, schedule, contact)
    under a tiered system (reported consistently across ad-tech sources as of October 2026;
    verify current specifics in Events Manager, Data Sources, the pixel's Settings tab, "Manage
    data source categories," since enforcement has changed more than once since the policy
    began). A Tier 2 account can still optimize toward upper-funnel events (page view, view
    content, landing page view, search); a Tier 3 account may not be able to optimize toward any
    event at all.
  - **If the paid-deposit event isn't available to optimize toward**, don't build the test as
    written. Options, in order of preference: (1) optimize toward an available upper-funnel event
    (landing page view, view content) and measure the paid-deposit result offline, by pulling it
    from the practice's own booking/payment system on a delay rather than feeding it back to the
    platform's optimization loop; (2) if a custom-named event is still usable in the account's
    current tier, use one with a name that doesn't reveal the health category, understanding this
    workaround has been getting less reliable as Meta expands enforcement against custom events
    whose metadata implies a sensitive category, so don't treat it as permanent; (3) run the
    instant-lead-form side of the test alone and rely on the practice's own CRM to measure which
    leads paid a deposit.
  - Do not assume the server-side Conversions API bypasses this; multiple sources report CAPI
    events are subject to the same tier restriction as the browser pixel for a restricted
    account.

## Fictional worked example

Fictional clinic "Hazelbrook Wellness," a physician-supervised medical weight-loss program.
Research turns up several telehealth-only platforms running "starting at $X/month" ads for 90+
days (longevity signal) that never mention an in-person visit, and one national chain running a
generic "lose weight fast" claim with no physician named (the open lane: "an actual doctor
examines you before anything is prescribed, not a form"). The launch doc tests instant-form
against deposit-first at $40/day each, judged on cost per paid deposit, with a kill line at 2x
the practice's target and a review date 7 days out.
