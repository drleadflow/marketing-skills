# Worked examples (fictional): Ridgeline Home Services and Lumen Aesthetics

Both businesses are fictional, used here only to show the templates filled in, including the difference an opaque-code rule makes for a health business. No real client, number, or result.

## Ridgeline Home Services (not a regulated health business, no opaque-code requirement)

```markdown
# UTM naming: Ridgeline Home Services (fictional)

utm_source: meta
utm_medium: paid-social
utm_campaign: oct-tuneup-promo
utm_content: video-01-fast-response-hook
```

```markdown
# Source report: Ridgeline Home Services (fictional) | Week of 2026-10-20

| Source | Leads | Booked | Closed | Spend (paid only) | Cost per lead | Cost per booked |
|---|---|---|---|---|---|---|
| Meta paid | 29 | 14 | 12 | $1,900 | $66 | $136 |
| Google paid search | 6 | 4 | 4 | $400 | $67 | $100 |
| Organic/referral | 9 | 7 | 7 | n/a | n/a | n/a |

- Sources with leads but zero bookings: none this week
- Leads missing a source field: 2 (form submitted before the hidden-field fix shipped on 10-22, flagged as a tracking gap, not reported as "organic")
```

Ridgeline isn't a health business, so standard practice applies: its Meta pixel and Conversions API send Lead and Booked events with a hashed email or phone number, the normal way Meta measures ad performance. No BAA question applies here because no protected health information is involved.

## Lumen Aesthetics (health business: opaque codes, and no patient-level events leave the practice)

```markdown
# UTM naming: Lumen Aesthetics (fictional)

utm_source: meta
utm_medium: paid-social
utm_campaign: q4-w29
utm_content: cr-114

## Health-business exception
The codes above are opaque. The real meaning lives only in the practice's internal spreadsheet, never in the ad name shown to Meta, the URL, or any patient-facing field.

| Code | What it means (internal only) |
|---|---|
| q4-w29 | Q4 2026, offer W29 (internal offer code, maps to a specific injectable promotion) |
| cr-114 | Creative 114, the "before the holidays" angle |
```

```markdown
# Source report: Lumen Aesthetics (fictional) | Week of 2026-10-20

| Source | Leads | Booked | Closed | Spend (paid only) | Cost per lead | Cost per booked |
|---|---|---|---|---|---|---|
| Meta paid (q4-w29) | 18 | 9 | 7 | $1,200 | $67 | $133 |
| Organic/referral | 11 | 8 | 6 | n/a | n/a | n/a |

- No treatment or condition name appears anywhere in this report, the UTM codes, or the Meta ad name.
- Lumen hasn't signed a BAA with Meta (Meta doesn't offer one for its standard ad products), so no Lead, Booked, or Closed event with any identifier, hashed or not, is sent to Meta at all. The 18 leads, 9 booked, and 7 closed above are counted entirely inside the practice's own CRM from the UTM-tagged form and call-tracking source fields; Meta only ever sees that $1,200 was spent against campaign q4-w29 in aggregate, with no per-person data flowing back to it.
- The only event Meta's pixel fires on Lumen's site is a generic page-view on the general contact page, carrying no health context and no identifier; it's used only as a rough upper-funnel signal, not as the real conversion measurement.
- Sources with leads but zero bookings: none this week
```
