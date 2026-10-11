---
name: proof-ledger
description: "When the user wants to record, check or clean up the results, numbers, testimonials, reviews and credentials they're allowed to use in marketing. Also use when they say 'add this testimonial', 'can I use this result', 'what proof do we have', 'a client said', 'is this claim OK', 'we got a new review', 'proof bank', 'case study numbers', or when a draft contains a [NEEDS PROOF] placeholder. Maintains .agents/proof-ledger.md. For the business facts file, see business-context. For a full written case study, see case-study. For health claims, see health-claims-check."
metadata:
  version: 1.0.0
  chokepoint: foundation
  pack: core
---

# Proof ledger

You'll finish with `.agents/proof-ledger.md`: a table of every result, number, testimonial, review and credential the business may use, each with the exact wording allowed, where it came from, when, who gave permission and when it expires. Every skill in this repo uses only what's in this file. Anything else becomes a visible `[NEEDS PROOF: ...]` placeholder, so nothing invented ever reaches a customer.

## Before you start

- Read `.agents/business-context.md` if it exists (section 10 lists the claims this business may not make). If it's missing, offer to run **business-context** first, or ask: What do you sell? Is this a health, money, legal or licensed-trade business?
- Read `.agents/proof-ledger.md` if it exists. You are adding to it, never replacing it.
- Ask the owner to gather raw proof in one go: screenshots of results, dashboards, review pages, texts and emails from clients, certificates, press mentions. Rough is fine.

## How to do it

### 1. Know the file

Use the exact structure in [references/ledger-template.md](references/ledger-template.md). Four parts:

- **Approved claims**: may be used, exactly as worded, within the permission shown.
- **Pending**: the claim exists but something is missing (receipt, permission, date range). Not usable yet.
- **Retired**: never use again, with the reason, so it doesn't sneak back.
- **Changelog**: dated, append only.

Approved claims table columns, in this order:

| ID | Type | Claim | Exact wording allowed | Source | Date | Permission | Expires |
|---|---|---|---|---|---|---|---|

- **ID**: `P-001`, `P-002`... never reused.
- **Type**: result, testimonial, review, credential, case, stat, media.
- **Claim**: the fact in plain words, for internal reading.
- **Exact wording allowed**: the sentence copy may use, word for word. Shorter or softer versions are fine; stronger versions are not.
- **Source**: the receipt (dashboard export, screenshot file name, review URL, signed form) and where it's stored.
- **Date**: when the result happened or the quote was given, plus the date range for any number.
- **Permission**: `named` (may use name and details), `anonymized` (use the result, strip identity), `internal only` (sales calls and team use, never public).
- **Expires**: a date. Default 12 months for results and stats, until consent is withdrawn for testimonials (review yearly), never for credentials (review yearly).

### 2. Collect proof

Work through these sources in order. Most businesses have more proof than they think, buried in texts and dashboards.

1. **Reviews already public** (Google, Yelp, Facebook, industry sites). Copy the text and URL. Public reviews still need care: you may quote them on your site, but name the platform, keep the wording exact, and don't edit them to sound better.
2. **Messages from clients** (texts, emails, DMs, voice notes). Screenshot and ask permission (step 4).
3. **Dashboards and records** (revenue, bookings, jobs done, response times). Export with the date range visible.
4. **Before and after** in whatever form the business has (photos, scores, timelines). Check section 10 of business-context first; many industries restrict these.
5. **Credentials** (licenses, certifications, years in practice, awards, press). Record the exact title. "Licensed master plumber" and "master plumber" are different claims.
6. **The owner's own story** (how they learned, what they built). Still needs a receipt if it includes a number.

For a new client result, ask these 4 questions while it's fresh:

1. What was it like before? (their words)
2. What changed, and by how much, over what dates?
3. What did they do on their side to get there?
4. May we share this, with your name, without your name, or not at all?

### 3. Write each claim with its limits

A number without its context misleads, even when it's true. For every result, write the wording so it carries:

- **The base**: what it's compared to. Never compare against a cherry-picked bad month. If the month before was unusually low, say so or pick a fair base.
- **The window**: "over 90 days", "from March to June", never just "in months".
- **The scope**: total revenue or revenue you caused? "Revenue during the months we ran their marketing" is not "revenue from our marketing".
- **What's typical.** A disclaimer like "results not typical" or "individual results vary" is not enough. Under US consumer-protection rules (the FTC's endorsement guides), if a result isn't what customers generally get, you must also say what they generally get, from real data: "One client went from $14,000 to $31,000 a month. Across all 26 clients this year, the typical change was +$2,100 a month." If you don't have the typical figure, don't use the standout result in public; mark it internal only until you do. Record the typical figure in the same ledger row.

Say a before-and-after as two facts, not a percent: "$9,000 the month before. $21,000 four months later." A big percent off a small base invites doubt and hides the real numbers.

### 4. Get permission in writing

Use the request in [references/collecting-proof.md](references/collecting-proof.md). Record the reply (screenshot or email) as the source of the permission. Permission covers the use asked about: a client who agreed to "on your website" didn't agree to "in paid ads". Note the scope in the Permission cell if it's narrower than everything: `named (website and sales calls only)`.

### 5. Anonymize properly

When permission is `anonymized`, strip anything that identifies the person to someone who knows them:

- Name, face, voice, handle, company name, logo.
- Exact location smaller than a metro area, rare job titles, unusual family details.
- Dates precise enough to pin a person (use the month or quarter).
- Any combination that points to one person in a small town or small niche.

Keep: the type of customer ("a two-location dental practice"), the starting point, the change, the window. In health businesses, never use a patient's story, image or details without written consent under the practice's privacy process, and check **health-claims-check** before publishing.

Never put a client's name next to their own anonymized result anywhere, including captions, alt text and file names.

### 6. Use the ledger in drafts

Every skill that writes copy follows this:

- Use a claim only if it's in **Approved claims**, not expired, and the channel fits the permission.
- Use the exact wording or a weaker version. Never round up, extend the window or drop the scope line.
- When a draft needs proof that isn't there, insert `[NEEDS PROOF: what kind of claim, e.g. a client result on show rate]` in the copy. Leave it visible. Don't write around it.
- Under the draft, list `Proof used: P-004, P-011` so a reviewer can check each one.

### 7. Run the monthly sweep

Once a month (or before any campaign launch):

1. Move anything past its expiry date to Pending with "expired, re-confirm".
2. Move anything a client has withdrawn to Retired.
3. Check every Pending item: chase the missing receipt or permission, or retire it.
4. Search live copy (site, ads, pages, scripts) for claims not in the ledger. Each one is either added with a receipt or removed.
5. Append a changelog line with what moved.

## Check it

| # | Check | Pass when |
|---|---|---|
| 1 | Structure | Approved, Pending, Retired and Changelog sections exist with the template columns |
| 2 | Receipts | Every approved row names a source a third person could find |
| 3 | Permission | Every row is named, anonymized or internal only, with scope if narrower |
| 4 | Dates | Every number has a date range; every row has an expiry date |
| 5 | Fair base | No result compares against a cherry-picked month or hides the base |
| 6 | Scope | Revenue claims say whether it's total or caused by the work |
| 7 | Typical | Any standout result states the typical result from real data, or is internal only |
| 8 | Anonymized | Anonymized rows contain nothing that identifies the person |
| 9 | Wording | Exact wording allowed is a usable sentence, not a summary |
| 10 | No invented proof | Nothing in Approved came from you; all of it came from the owner with a receipt |
| 11 | Changelog | Today's entry exists; no older entry changed |

## Rules

- Never invent a number, result, testimonial, review, credential or client name. Not as an example, not as a placeholder that looks real.
- A claim not in Approved claims is not proof. Use `[NEEDS PROOF: ...]`.
- Never upgrade wording. "About 60 a month" never becomes "60+ every month".
- Never use an expired claim, and never use a claim outside its permission scope.
- Never incentivize a review or ask only happy customers for one. Ask everyone at the same point in the journey.
- Never store private customer data (contact details, health details, payment details) in the ledger. Store where the receipt lives, not the receipt's private content.
- Third-party stats (industry studies) are type `stat`, need the source and year, and are never presented as the business's own result.
- In a health business, a patient result is also a health claim. Run **health-claims-check** before it's used publicly.

## Related skills

- **business-context**: the facts file this ledger sits next to.
- **case-study**: turns an approved result into a full story.
- **review-engine**: brings in new reviews to add here.
- **health-claims-check**: required before health results go public.
- **ad-policy-check**: before any ledger claim runs in a paid ad.

## Examples

A filled ledger for a fictional business coach, with approved, pending and retired rows, is in [references/ledger-template.md](references/ledger-template.md).
