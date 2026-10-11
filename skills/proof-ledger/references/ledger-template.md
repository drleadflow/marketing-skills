# Template: .agents/proof-ledger.md

Copy this structure exactly. Other skills look for these headings and columns.

```markdown
# Proof ledger: <Business name>

> Maintained by the proof-ledger skill. Only claims in "Approved claims" may be used.
> Anything else in a draft becomes [NEEDS PROOF: ...].
> Last updated: YYYY-MM-DD

## Approved claims

| ID | Type | Claim | Exact wording allowed | Source | Date | Permission | Expires |
|---|---|---|---|---|---|---|---|

## Pending

| ID | Claim | What's missing | Owner | Chase by |
|---|---|---|---|---|

## Retired

| ID | Claim | Why retired | Retired on |
|---|---|---|---|

## Changelog

- YYYY-MM-DD: Created. Added P-001 to P-00N.
```

Types: `result`, `testimonial`, `review`, `credential`, `case`, `stat`, `media`.
Permission: `named`, `anonymized`, `internal only`, with scope in brackets if narrower.

---

## Filled example (fictional)

Everything below is invented to show the format. The business, people and numbers are fictional.

```markdown
# Proof ledger: Northgate Coaching (fictional)

> Maintained by the proof-ledger skill. Only claims in "Approved claims" may be used.
> Last updated: 2026-10-11

## Approved claims

| ID | Type | Claim | Exact wording allowed | Source | Date | Permission | Expires |
|---|---|---|---|---|---|---|---|
| P-001 | credential | Owner has run coaching business 9 years | "I've coached service-business owners since 2017." | LLC registration, Drive/Proof/credentials | 2017 to 2026 | named | review 2027-10 |
| P-002 | result | One client's monthly revenue, before and after | "One client did $14,000 the month before we started. Five months later they did $31,000. Across our 26 clients in 2026, the typical change was +$2,100 a month." | Client's accounting export, Drive/Proof/P-002; typical figure from client tracker, Drive/Proof/typical-2026 | Feb to Jul 2026 | anonymized | 2027-07-31 |
| P-003 | testimonial | Client quote on clarity | "I finally know which three numbers to look at every Monday." (Dana R., agency owner) | Email 2026-08-04, Drive/Proof/P-003 | 2026-08-04 | named (website and sales calls only) | consent on file, review 2027-08 |
| P-004 | review | 41 Google reviews, 4.9 average | "4.9 stars from 41 Google reviews" | Google profile, checked 2026-10-01 | as of 2026-10-01 | named | 2027-01-01 |
| P-005 | result | Program completion | "Most clients who start finish all 12 weeks: 22 of 26 in 2026." | Program tracker, Drive/Proof/P-005 | Jan to Sep 2026 | internal only | 2027-01-01 |

## Pending

| ID | Claim | What's missing | Owner | Chase by |
|---|---|---|---|---|
| P-006 | Client tripled leads | Date range and the base month; permission | Owner | 2026-10-25 |
| P-007 | Featured on a podcast | Episode link | Assistant | 2026-10-18 |

## Retired

| ID | Claim | Why retired | Retired on |
|---|---|---|---|
| P-000 | "Clients see 300% growth" | Percent off one unusually low month; no fair base | 2026-09-15 |

## Changelog

- 2026-09-15: Created. Added P-001 to P-005. Retired P-000.
- 2026-10-11: P-004 review count refreshed (38 → 41). P-006, P-007 added to Pending.
```

How a draft uses it:

> One client did $14,000 the month before we started. Five months later they did $31,000. Across our 26 clients in 2026, the typical change was +$2,100 a month.
>
> [NEEDS PROOF: a client result on time saved per week]
>
> Proof used: P-002
