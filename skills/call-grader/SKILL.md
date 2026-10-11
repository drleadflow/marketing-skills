---
name: call-grader
description: "When the user wants a sales call transcript scored, or wants to know what to coach after a call. Also use when they say 'grade this call', 'score this transcript', 'what did I do wrong on this call', or 'call review'. Produces a scored rubric across sales-call-playbook's 8 stages with one specific coaching fix per weak line, not just a number. For the structure being graded against, see sales-call-playbook. For the objection scripts referenced in scoring, see objection-handling."
metadata:
  version: 1.0.0
  chokepoint: closed
  pack: core
---

# Call grader

You'll finish with a scored rubric over a call transcript, covering each of **sales-call-playbook**'s 8 stages, with one specific, actionable coaching fix for every stage that scored under a strong pass.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If business-context is missing, offer to run **business-context** first, or ask only what's missing:

1. Do you have the transcript (or recording to transcribe)?
2. Is this call being scored for coaching a specific person, or to audit the overall call process across a team?

## How to do it

### 1. Score the process, not just whether money changed hands

A call can be scored well and still not close, and a call can close and still be scored badly (a motivated prospect saying yes doesn't mean the call itself was run well). Grade the process; outcome is a separate, tracked fact, not a score input.

### 2. Score against the same 8 stages sales-call-playbook uses

| # | Stage | What to check | Score |
|---|---|---|---|
| 1 | Open | Was the agenda set, and did the rep make "not a fit" feel safe to say? | 0-10 |
| 2 | Goal | Did the rep get the prospect's goal in their own words before explaining anything they sell? | 0-10 |
| 3 | Now | Did the rep find out what the prospect already tried and what waiting is costing them, without inventing urgency? | 0-10 |
| 4 | Priority | Did the rep play the priority back and get an explicit "that's right" before recommending anything? | 0-10 |
| 5 | Recommend | Was there ONE recommendation tied explicitly to the stated priority, or a menu dump? | 0-10 |
| 6 | Price and terms | Was the full price, inclusions, and terms stated plainly before asking for a decision? | 0-10 |
| 7 | Concerns | Was the concern the prospect named found and answered, not an assumed one? | 0-10 |
| 8 | Decision | Did the rep ask for the decision directly, and agree a real next step either way? | 0-10 |

### 3. Check for hard-deduction flags

These apply regardless of how strong the rest of the call sounds. Each flagged item subtracts exactly 1 point from the total score (stage average), to a maximum of 3 points off:
- Recommendation given before the Priority stage got an explicit "that's right"
- Price or terms left vague, partial, or delayed past where the prospect needed them to decide
- A fabricated urgency, outcome, or guarantee appeared anywhere
- A named concern was argued with instead of acknowledged and explored
- The call ended with no specific next step (no date, no booked follow-up, no clean no)

### 4. Write one coaching fix per weak stage, quoting the transcript

Don't say "improve discovery." Quote the actual line from the Goal or Now stage, name what's wrong, and give the specific alternative line to use next time. The output has to be usable without a follow-up conversation.

### 5. Calculate the score exactly, showing the arithmetic

1. Average the 8 stage scores: sum the 8 scores, divide by 8.
2. Subtract 1 point per hard-deduction flag, up to a maximum of 3 points total.
3. State both numbers so the math is checkable: "Stage average: X.X, minus Y flag(s) = final score Z.Z/10."

Give a one-line verdict: what this rep does well, and the single highest-leverage thing to fix next.

## Check it

Output format:

```
Call Grade: [stage average] minus [flags] = [final]/10

| # | Stage | Score | Note |
|---|---|---|---|
| 1 | Open | X/10 | ... |
| 2 | Goal | X/10 | ... |
| 3 | Now | X/10 | ... |
| 4 | Priority | X/10 | ... |
| 5 | Recommend | X/10 | ... |
| 6 | Price and terms | X/10 | ... |
| 7 | Concerns | X/10 | ... |
| 8 | Decision | X/10 | ... |

Stage average: [sum / 8]

### Hard-deduction flags
[list any from step 3, or "none"]: [count] flag(s), [count] point(s) off

### Coaching fixes (ranked by impact)
1. **[Issue]**
 - Transcript: "[exact quote]"
 - Why it hurts: [...]
 - Fix: "[exact alternative line]"
2. ...
3. ...

### Verdict
[one line: what's working, what to fix next]
```

- [ ] Every stage has a specific note, not just a number
- [ ] The stage average and final score are both shown with the arithmetic that produced them
- [ ] At least one coaching fix quotes the actual transcript
- [ ] Hard-deduction flags are checked explicitly against all 5, not skipped
- [ ] The verdict names ONE highest-leverage fix, not five

## Rules

- Be honest, not encouraging for its own sake. A false high score wastes more coaching time than an honest low one.
- Never coach toward pressure tactics (manufactured urgency, arguing with objections) even if they happened to close that specific call.
- Don't grade a call as perfect just because it closed, or as a failure just because it didn't; grade the 8 stages above.

## Examples

See `references/example.md` for a fully worked fictional call grade (business coach discovery call), with the arithmetic shown.

## Related skills

- **sales-call-playbook**: the 8-stage structure this rubric grades against
- **objection-handling**: the scripts referenced when scoring the Concerns stage
- **marketing-scoreboard**, **weekly-review**: roll individual call grades into a team-level trend
