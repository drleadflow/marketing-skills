---
name: quiz-funnel
description: "When the user wants to build a scored quiz or assessment that generates leads, a 'what's holding your business back' type diagnostic, or a results page tied to an email capture. Also use when they mention 'quiz funnel', 'assessment', 'diagnostic tool', 'scorecard', or 'which type of X are you'. For a static (non-scored) lead magnet, see lead-magnet. For the page the quiz lives on, see landing-page."
metadata:
  version: 1.0.0
  chokepoint: leads
  pack: core
---

# Quiz Funnel

You'll finish with a scored diagnostic: a short set of questions that routes each person to their weakest area, a results page that names it plainly, and an email-gated outcome that reads as personalized rather than generic.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If `business-context.md` is missing, offer to run **business-context** first, or ask only what is missing:

1. What are the 3 to 5 areas where your buyer's problem usually lives? (For a business owner this might be offer, leads, or follow-up; for a med spa patient it might be budget, timeline, or trust.)
2. What should the result point them toward: a call, a guide, a product, a community?
3. Do you already have a working rubric (like a validated lead score) you want this to reuse, or are you building one from scratch?

## How to do it

### 1. Pick the 3 to 5 areas the quiz scores

Each area becomes a dimension the quiz measures. Name them in language the buyer would use, not internal jargon. A business-growth quiz might score: offer clarity, lead volume, follow-up speed, and close rate. A med spa readiness quiz might score: goal clarity, budget comfort, timeline, and trust in the provider.

### 2. Write 5 to 10 questions, multiple choice only

7 questions is the sweet spot: enough signal, short enough to finish. Each question maps to exactly one scoring dimension. Write each answer option on a scale (low to high) for that dimension, not as unrelated choices. Show a progress indicator ("Question 3 of 7") so people can see the finish line.

### 3. Score each dimension on the same scale, then find the weakest

Assign each answer a numeric value (for example 1 to 5). **Average the value per dimension, don't sum it**, whenever dimensions don't have the same number of mapped questions; a 2-question dimension summing to 2-10 and a 1-question dimension scoring 1-5 aren't comparable as raw totals, and the smaller one will look artificially weaker (or stronger) every time just because it has fewer questions. If dimensions do have an unequal number of questions and you'd rather keep sums for some other reason, normalize first: convert every dimension's score to a percentage of its own maximum, then compare percentages, never raw sums with different ranges. The dimension with the lowest normalized score is the one the results page leads with. This is the core mechanic that separates a quiz funnel from a generic lead magnet: the result is different depending on what they answered, not a single templated page everyone sees.

Example scoring table for a 4-dimension, 7-question quiz, scored as an average (1 to 5 scale) per dimension:

| Dimension | Questions that map to it | Score shown as |
|---|---|---|
| Offer clarity | Q1, Q2 | average of the two, 1 to 5 |
| Lead volume | Q3, Q4 | average of the two, 1 to 5 |
| Follow-up speed | Q5, Q6 | average of the two, 1 to 5 |
| Close rate | Q7 | the single value, 1 to 5 |

Scoring every dimension as an average, rather than a sum, keeps a 1-question dimension and a 2-question dimension on the same 1-to-5 scale, so none of them has a structural advantage in winning (or losing) the comparison.

If a validated scoring rubric already exists for this business (a BANT-style lead score, a clinical readiness scale), reuse its categories and thresholds instead of inventing a new one from scratch.

### 4. Build the results page around the weakest dimension

The results page states, plainly: "Your biggest bottleneck right now is [weakest dimension]." Then: one paragraph on why that specific bottleneck costs them (in their terms, not a generic statement), one concrete next step, and the CTA (call, resource, product) matched to that bottleneck specifically. Someone who scores weak on "follow-up speed" should see a different recommendation than someone who scores weak on "offer clarity."

### 5. Gate the results, not the quiz

Let anyone take the quiz. Ask for an email only to reveal the scored result and send a copy. This maximizes completion (removing friction up front) while still capturing the lead at the moment of highest curiosity, right before they see their score.

### 6. Make the result shareable

A result worth sharing ("I scored Follow-Up Gap on the Growth Bottleneck Finder") extends reach for free. Name each result category something specific and a little provocative, not clinical.

### 7. Route the follow-up by result, not generically

Someone who scores weak on follow-up speed gets a different first follow-up message than someone who scores weak on lead volume. See **follow-up-sequence** for the cadence; the content of the first message should reference their actual weakest area.

## Check it

- [ ] 3 to 5 dimensions, named in the buyer's language
- [ ] 5 to 10 multiple-choice questions, each mapped to exactly one dimension
- [ ] Dimensions are scored as an average (or normalized to a percentage of their own max) before comparing them, never raw sums across dimensions with different question counts
- [ ] Scoring produces a different top result depending on answers, not one templated page
- [ ] Results page names the weakest area plainly and gives one next step matched to it
- [ ] Quiz itself is ungated; only the scored result requires an email
- [ ] Follow-up message after the quiz references the specific result, not a generic nudge

## Rules

- When this skill's output quotes a result, number, testimonial, or claim, cite the proof ledger ID inline as `Proof used: P-004`. If nothing in the ledger fits, use `[NEEDS PROOF: what kind of claim]` instead of inventing one.
- Never score a health-related dimension in a way that implies a diagnosis; a quiz may surface "you may want to discuss timeline with a provider," never a clinical conclusion. Follow **health-claims-check** when the business is health-related.
- Never invent a benchmark ("most people score higher than you") unless it's a real, tracked statistic from the proof ledger; otherwise leave it out.
- Never make every result point to the same CTA regardless of score; that defeats the purpose of scoring at all.

## Examples

A fictional business coach runs a "Growth Bottleneck Finder" scoring offer, leads, appointments, and close rate, routing each result to a different lead magnet. A fictional med spa runs a "Treatment Readiness Check" scoring goal clarity, budget, and timeline, routing a low-timeline result to a nurture sequence instead of a booking push. A fictional home-services company runs a "Is It Time to Replace or Repair" quiz scoring age, symptoms, and budget, routing to a quote request. See `references/sample-quiz.md` for the full 7-question Growth Bottleneck Finder with scoring and 3 filled-in results-page variants.

## Related skills

- **lead-magnet**: for a non-scored resource instead
- **landing-page**: for the page the quiz lives on
- **follow-up-sequence**: for the sequence that follows each scored result
- **setter-script**: for qualifying a lead further once they're in conversation
- **hook-writer**: for the headline that gets someone to start the quiz
