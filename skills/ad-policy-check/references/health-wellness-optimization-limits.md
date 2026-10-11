# Meta health and wellness optimization limits

**Verified via web search, October 2026.** This is a fast-moving area; re-verify against Meta's
own current documentation and the account's own Events Manager status before relying on anything
below, rather than treating this file as a permanent reference.

## What triggers the classification

Meta classifies an ad account, Page, or pixel as "health and wellness" based on the business,
its website, and how the product is marketed, not a single flag the advertiser sets. Meta's own
definition (used across its restricted-categories guidance) centers on association with medical
conditions, specific health statuses, or a provider/patient relationship: disease- or
condition-specific treatment, device, or app companies; mental and physical health providers;
telehealth and teletherapy; pharmacies. Not every health-adjacent business is classified the
same way, and the classification can change.

## The tiers, as reported across multiple independent ad-tech sources

| Tier | What it restricts |
|---|---|
| 1, Core setup | Can't share custom URL parameters; custom audience sizes may shrink; catalog uploads via pixel may stop working; automatic advanced matching may be unavailable |
| 2, Mid-restricted | Blocks optimization toward mid- and lower-funnel standard events: purchase, add to cart, lead, schedule, contact, subscribe, find location. Upper-funnel events (page view, view content, landing page view, search, donate, app install) and some custom-named events remain usable |
| 3, Full restriction | May block all event-based optimization in affected regions; broad demographic targeting only |

Most general health and wellness businesses land in Tier 1 or 2; Tier 3 has mainly been applied
to businesses linking to especially sensitive properties (patient portals and similar).

## What does not work around this

- **The Conversions API does not bypass a tier restriction.** CAPI is a transport mechanism; the
  same category-based rule applies to events sent through it as through the browser pixel.
  Sources explicitly describe Meta refusing to accept the restricted event regardless of which
  channel sent it.
- **Renaming a custom event is a shrinking workaround, not a fix.** Early guidance suggested
  using a coded custom-event name (e.g. "EVENT_001") instead of "Purchase" to keep optimizing.
  Through 2025 into 2026, Meta has been actively expanding enforcement against custom
  conversions and custom/lookalike audiences whose names, rules, or metadata imply a sensitive
  trait, flagging and disabling them. Don't build a durable strategy on this; treat it as
  something that may stop working without notice.

## What works

1. **Optimize toward an available upper-funnel event** (page view, view content, landing page
   view) and accept that the platform's own automated bidding is working with weaker signal.
2. **Offline measurement.** Keep the real result (a booked appointment, a paid deposit, a closed
   sale) inside the practice's own system and measure it there, on a delay, instead of feeding it
   back into the ad platform's optimization loop. This is slower to read and doesn't improve the
   algorithm's targeting the way an in-platform event would, but it gives an honest number.
3. **Check the account's actual status before planning around an assumption.** Events Manager,
   Data Sources, select the pixel, Settings tab, "Manage data source categories." Do this at the
   start of every launch or audit for a health or wellness account, not just once.

## How this connects to the rest of this skill set

- **ad-launch** and **ad-account-audit** both read business-context's "Paid ads targets" table
  for the conversion event and cost bands; for a restricted account, confirm that recorded event
  is still the one available before trusting it.
- **clinic-ad-launch**'s deposit-first test is the clearest place this bites: see its
  `references/phases.md` for the full fallback sequence if the paid-deposit event isn't
  available in the account's current tier.
