# Worked example (fictional): Lumen Aesthetics

Lumen Aesthetics is a fictional med spa. No real client, number, or result.

```markdown
# Marketing loop: Weekly review-request sweep | Business: Lumen Aesthetics (fictional)

1. Check cadence: weekly, because new reviews and themes don't shift meaningfully day to day; a daily check would just be noise.
2. Acts-when condition: only sends requests to patients whose visit completed in the last 7 days AND who haven't already been sent a request for that visit (checked against state).
3. Purpose: keep review volume and recency healthy without over-asking any one patient.
4. Skills used: review-engine.
5. Loop body:
   - Pull the list of visits completed in the last 7 days from the scheduling system.
   - Filter out anyone already sent a request for this visit (state check).
   - Draft the request message per review-engine's template.
   - Stage the batch for the front-desk lead to approve.
6. Self-check: confirm the visit list isn't inflated by a scheduling-system sync error (cross-check count against last week's typical volume before staging).
7. State / idempotency: a "requested" flag per visit ID, stored in the practice's CRM custom field, checked before every run so nobody gets asked twice for the same visit.
8. Stop / bail-out: the front-desk lead can disable the loop any time via a toggle; if the visit-count self-check fails by more than 50% versus last week's typical volume, the loop halts and flags a person instead of sending.
9. Output: a staged batch in the CRM, awaiting the front-desk lead's approval before anything sends.

## Guardrails
- Spend cap: $0 (no paid component, just messages)
- Send cap: no more than 1 request per patient per visit, ever
- Stop rule if exceeded: n/a, the per-visit state flag enforces this structurally
- Human checkpoint: front-desk lead reviews and approves the staged batch every Monday before any message sends

## Scheduling mechanism
Agent self-paced scheduled-agent feature, set to run every Monday morning, because the cadence is fixed and doesn't need to react to an external trigger mid-week.
```
