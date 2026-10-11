# Grading rubric (out of 10)

Run a QA pass first: text defects, duplicated price, provider shown as the hero instead of the
patient, skeleton missing an element, any banned word. Then grade every asset:

| Weight | Dimension | Question |
|---|---|---|
| 3 | Scroll stop | Is the headline the patient's own sentence, specific enough that they feel found out? |
| 2 | Two-second clarity | Is the face, the service, and the city readable without the small print? |
| 2 | Belief bridge | Does it start from something they already believe and move them one step? |
| 1.5 | Booking pull | Is the next action obvious and low-risk (a deposit, a consult, "see if you're a candidate")? |
| 1 | Visual execution | Patient is the hero, skeleton intact, no defects, native-feeling where that's the intent |
| 0.5 | Compliance | Nothing here needs a lawyer or the medical director's second look |

**A compliance fail caps the asset at Tier C regardless of the other five scores.** A strong
scroll-stop headline does not buy back a universal recovery claim, an unproven mechanism claim,
or anything else **health-claims-check** would flag; those are rewritten and regraded, never
shipped with a markdown-only deduction.

Tier A (8.5 or higher, and zero compliance flags) runs as is. Tier B (7 to 8.4, zero compliance
flags) runs after the one listed fix. Tier C is anything with a compliance flag, or anything
below 7, and is benched or retargeting-only. A wave-1 slate is 12 cells from A and B tiers, 3 per
angle group. Write the specific fix next to every Tier B asset, not just the score.

## Fictional example (Hazelbrook Wellness, medical weight-loss program, three variants)

| Asset | Score | Tier | Fix |
|---|---|---|---|
| "You've done the diets. This time a doctor is watching the numbers, not an app." | 9.0 | A | ship as is |
| "Medical Weight Loss Program, starting at $199/month" (generic offer card) | 7.5 | B | headline is the program name, not the patient's sentence; swap to patient-language headline, keep the price line |
| "Lose the weight for good, guaranteed" | n/a | C, compliance fail | "guaranteed" and an implied permanent result are both banned claims (see health-claims-check); rewrite from scratch, cannot ship with a deduction |
