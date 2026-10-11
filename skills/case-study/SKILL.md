---
name: case-study
description: "When the user wants to write up a client or customer result as a case study, success story, or testimonial piece. Also use when they mention 'case study,' 'success story,' 'write up this result,' 'client win,' or 'turn this testimonial into content.' This skill only writes from rows already in the Approved claims table of .agents/proof-ledger.md; for adding a new claim first, see proof-ledger. For asking a customer for a review in the first place, see review-engine."
metadata:
  version: 1.0.0
  chokepoint: referrals
  pack: core
---

# Case Study

You'll finish with a case study built entirely from rows in the **Approved claims** table of `.agents/proof-ledger.md` (columns: ID, Type, Claim, Exact wording allowed, Source, Date, Permission, Expires), with a `Proof used: P-00X` line under the draft and nothing invented to fill a gap.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md`. **This skill cannot run without the proof ledger.** If it doesn't exist yet, stop and offer to run **proof-ledger** first. If business-context is also missing, offer to run **business-context** first too.

Then confirm:
1. Which row ID (or IDs) in **Approved claims** is this case study built from (e.g. P-002, P-004)? A row in **Pending** or **Retired** is not usable.
2. Does the row's Permission column (named / anonymized / internal only, with scope in brackets if narrower) cover where this case study will run?
3. Has the row's Expires date passed? If so, it needs refreshing in proof-ledger before you write anything.

## How to do it

1. **Pull only from Approved claims.** If a number, quote, or detail isn't a row there, it doesn't go in the case study.
2. **Match the write-up to that row's Permission and Exact wording allowed.** Use the "Exact wording allowed" verbatim or weaker, never stronger.
3. **Check Expires before using anything.**
4. **Fill the template below.**
5. **Flag any gap visibly** with `[NEEDS PROOF: specific thing]` rather than inventing something plausible.
6. **List every row used** under the draft: `Proof used: P-002, P-004`.
7. **Use clearly fictional examples** when demonstrating the format itself, labeled as fictional.
8. **Route health, legal, or financial claims through the compliance check** before publishing.

## Template: case study document

```markdown
# Case study: [Client descriptor from the Approved row's Permission scope, e.g. "a coaching client" or "Dana R."]

## The situation
[Starting point, in their words if the row has a quote. Cite the row ID.]

## What changed
[The specific action taken, described accurately, no embellishment.]

## The result
[The Exact wording allowed from the row, verbatim or weaker, with its Date/window.]

## In their words
> "[Quote from the row, verbatim, respecting Permission scope.]"

---
Proof used: [row IDs, e.g. P-002]
[NEEDS PROOF: anything that would strengthen this but isn't yet an Approved row]
```

## Check it

- [ ] Every number, name, and quote traces to a specific row ID in Approved claims
- [ ] That row's Permission scope covers this specific use (channel, audience, identifying detail)
- [ ] That row's Expires date hasn't passed
- [ ] Wording matches "Exact wording allowed" or is weaker, never stronger
- [ ] No gap is filled with an invented detail; unproven pieces are flagged `[NEEDS PROOF: ...]`
- [ ] A `Proof used: P-00X` line sits under the draft
- [ ] Health, legal, or financial claims have gone through the relevant compliance check
- [ ] If this is a template or example for the repo itself, it's clearly labeled fictional

## Rules

- Never write a case study from a row in Pending or Retired, or from anything not in the ledger at all.
- Never upgrade a Permission scope without going back to confirm with the actual person and updating the ledger row.
- Never use a row past its Expires date without first getting it refreshed.
- Never invent a number, a quote, a before/after detail, or a client name, for any reason.
- Never use a real client's name, logo, or identifying detail in this public repo's own examples.
- Always end the draft with a `Proof used:` line listing the row IDs.

## Related skills

- **proof-ledger**: owns the Approved / Pending / Retired tables this skill reads from; this skill cannot run without it.
- **review-engine**: the usual source of a new result or review before it becomes a Pending, then Approved, row.
- **health-claims-check**: run before publishing any case study that touches a health claim.

## See it worked

`references/example.md` runs this template against two fictional Approved-claims rows for a fictional business coaching practice.
