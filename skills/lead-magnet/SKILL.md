---
name: lead-magnet
description: "When the user wants to create a free resource that captures emails or phone numbers, a gated guide, checklist, template, or quiz result. Also use when they mention 'lead magnet', 'freebie', 'opt-in', 'gated content', 'what should I give away', or 'set up a keyword' for a social giveaway. Covers picking the format, writing the gate, and wiring delivery. For the diagnostic-quiz format specifically, see quiz-funnel. For the landing page it lives on, see landing-page. For the comment-to-DM delivery mechanic, see comment-to-dm."
metadata:
  version: 1.0.0
  chokepoint: leads
  pack: core
---

# Lead Magnet

You'll finish with one named lead magnet, in a format that matches how your audience consumes it, with a gate, a delivery path, and a measurement plan.

This is a duplication job once the first one works, not a new design exercise every time.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What is the one problem this resource solves, in the prospect's own words, not yours?
2. Where does your audience already spend time: a feed with comments, a blog, a DM inbox, a referral conversation?
3. What should happen right after someone gets it: book a call, join a list, join a community, start a trial?

## How to do it

### 1. Pick the format against the buyer's stage, not your preference

| Stage | Job | Format that fits |
|---|---|---|
| Awareness (don't know you yet) | Educate on the problem | Checklist, cheat sheet, short guide |
| Consideration (comparing options) | Build trust, prove expertise | Comparison template, swipe file, short assessment |
| Decision (ready, deciding how) | Remove friction to start | Ready-to-use template, worksheet, calculator |

Pick one format. Don't mix an ebook with a video with a spreadsheet in the same offer. See `references/format-guide.md` for build notes per format (checklist, cheat sheet, template, swipe file, mini-course, quiz, webinar).

### 2. Solve one specific problem, not a broad topic

"How to confirm an appointment so people show up" beats "A guide to running your practice." Narrow enough that it is consumable in under 10 minutes and still lands as worth paying for.

### 3. Decide the gate

| Approach | When to use |
|---|---|
| Full gate (email required before access) | High-value, bottom-funnel content |
| Partial gate (preview visible, full version gated) | Balances reach and capture |
| Ungated with an optional opt-in | Top-of-funnel education, reach over capture |

Ask for the minimum field that does the job. Email only converts best. Every extra field (name, phone, company) trades some conversion for better lead quality; add a field only if a later step in the funnel needs it.

### 4. Write the exchange, not just the download

The page or DM that offers it needs: a clear headline naming the benefit, a short preview of what's inside, 3 to 5 bullets of what they'll walk away knowing, and one visible next step. See **landing-page** for the full page structure if this lives on a dedicated page.

### 5. Build one delivery path and keep it to one destination

Comment or form submit leads to exactly one of: instant download, an email with the file, or a DM with the link (see **comment-to-dm** for the comment-to-DM mechanic specifically). Whichever path, the lead magnet itself is the only thing offered, plus at most one standing invitation (a community, a newsletter) folded into the same delivery message. Never a second button pointing somewhere else; a second destination splits attention between two asks instead of completing one.

### 6. Give every lead magnet its own trigger

If delivery is keyed to a comment keyword, a form, or a link, that trigger belongs to this lead magnet alone. A shared trigger across two offers delivers the wrong resource to someone and is the most common way a "working" system quietly breaks.

### 7. Plan the thank-you moment

After delivery, don't go silent: confirm it's on its way, name one next step, and stop there. Don't reopen the sales pitch on the thank-you screen; that's not what they said yes to.

### 8. Set a measurement plan before launch

Track landing-page or DM conversion rate, cost per lead if it's paid-promoted, and whether leads from this magnet progress to a booked call at a normal rate. See `references/benchmarks.md` for typical ranges by format so you know if your numbers are off or just normal for the format.

## Check it

- [ ] Names one specific problem, not a broad topic
- [ ] Format matches the buyer stage and is consumable in under 10 minutes
- [ ] Gate and field count are the minimum that does the job
- [ ] Exactly one delivery destination, plus at most one standing invite folded into the same message
- [ ] Has its own trigger (keyword, form, or link), not shared with another offer
- [ ] A measurement plan exists before the first lead arrives

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never invent a download count, testimonial, or result to make the offer look proven. If it's not in the proof ledger, leave `[NEEDS PROOF: ...]`.
- Never gate behind more fields than the next step requires.
- Health, money, legal, and before/after claims inside the resource follow **health-claims-check** when the business is health-related.
- Never collect health details on a lead-capture form. Name and contact info only, unless a signed business associate agreement exists for the practice.

## Examples

A fictional business coach gives away a one-page "Price Your First Offer" worksheet (template, decision stage). A fictional home-services company gives away a "10-Point Furnace Checklist" (checklist, awareness stage). A fictional med spa gives away a short "Double Chin Options: What Each One Involves" guide (short guide, consideration stage) instead of a discount code. See `references/example-magnet.md` for the full outline of the "Price Your First Offer" worksheet, section by section.

## Related skills

- **quiz-funnel**: for a scored diagnostic instead of a static download
- **landing-page**: for the dedicated page a lead magnet lives on
- **comment-to-dm**: for delivering via an Instagram or Facebook comment keyword
- **speed-to-lead**: for what happens in the first hour after someone opts in
- **follow-up-sequence**: for the nurture sequence after delivery
- **proof-ledger**: for what claims you're allowed to use inside the resource
