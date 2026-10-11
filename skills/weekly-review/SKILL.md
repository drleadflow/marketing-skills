---
name: weekly-review
description: "When the user wants a structured weekly look-back on their marketing and business, or wants help deciding on a specific business decision. Also use when they mention 'weekly review,' 'Friday review,' 'how did this week go,' 'should I do X or Y,' or 'help me decide.' Reads marketing-scoreboard and business-context first. For the quick daily version, see morning-brief."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Weekly Review

You'll finish with a factual look-back built on this week's scoreboard, with next week's top 3 outcomes set, and (if there's a real decision pending) a clear go / conditional-go / no-go verdict.

## Before you start

Read `.agents/business-context.md` section 8 (Numbers), including the "Current chokepoint:" line, and this week's **marketing-scoreboard** output before asking anything. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Is this a standard weekly review, or is there a specific decision that needs a verdict this week (a new hire, a new offer, a pricing change, a new channel)?

## How to do it

### Standard weekly review

1. **Wins, backed by the scoreboard.**
2. **Lessons.** Ask these as questions and let the person answer; push for specifics.
3. **The weakest chokepoint**, straight from section 8's "Current chokepoint:" line (or this week's scoreboard report), named plainly, with the number that proves it.
4. **Close out the tests run this week.** For every change made on purpose (a new ad angle, a tweaked message, a price test), log what the hypothesis was, which metric it was supposed to move, the before and after number, and whether it gets kept, killed, or needs another week to read. A fix nobody checks against the number it was supposed to move is a guess wearing a conclusion's clothes.
5. **Next week's top 3 outcomes.** The first should directly target the weakest chokepoint unless there's a clear reason not to.
6. **One thing to say no to next week.**

### When there's a real decision pending: the four-filter verdict

Score each filter Strong, Moderate, or Weak, with actual evidence:
- **Business case:** revenue impact, real execution capacity, alignment with the 1-year goal, reversibility of the downside.
- **Customer case:** does it solve a real stated problem, not an assumed one.
- **Team case:** will the team rally behind this, or just tolerate it.
- **Competitive case:** does it make the business harder to copy.

Deliver: **GO / CONDITIONAL GO / NO-GO**, the conditions if conditional, the single biggest risk, the next action with a date.

## Template: weekly review

```markdown
# Weekly review: [week ending date]

## Wins (with the scoreboard number behind each)
-

## Lessons
- What surprised me this week?
- What should I stop doing?
- What worked well enough to do more of?

## Weakest chokepoint: [from section 8], because: [the number]

## Tests run this week
| Hypothesis | Metric | Before | After | Keep / kill / read longer |
|---|---|---|---|---|

## Next week's top 3
1. [targets the weakest chokepoint]
2.
3.

## One thing to say no to next week


## Decision verdict (only if a decision is pending)
| Filter | Score | Evidence |
|---|---|---|
| Business case | | |
| Customer case | | |
| Team case | | |
| Competitive case | | |

Verdict: [GO / CONDITIONAL GO / NO-GO]
Conditions (if conditional):
Biggest risk:
Next action: [what, by when]
```

## Check it

- [ ] Every "win" traces to an actual scoreboard number
- [ ] The weakest chokepoint named matches section 8's "Current chokepoint:" line
- [ ] Every test run this week has a before/after number and a keep/kill/read-longer call, not left open forever
- [ ] Next week's top 3 are measurable, not vague intentions
- [ ] (If a decision was reviewed) every filter has actual evidence, not an assumed score
- [ ] The verdict is direct: GO, CONDITIONAL GO, or NO-GO, no hedging

## Rules

- Don't fill in the person's own reflection answers for them; ask, and push for specifics.
- Never leave a test running for more than two to three weeks without a keep/kill call; small numbers don't settle a test, but an indefinite "still watching" isn't a review either.
- Celebrate real progress, but don't soften a real regression to be polite.
- A decision verdict has to be direct. No weasel words.
- Next week's top priority should target the weakest chokepoint unless there's a stated reason to prioritize something else.

## Related skills

- **marketing-scoreboard**: updates section 8's weekly numbers this review runs on.
- **morning-brief**: the daily version that looks forward instead of back.
- **chokepoint-audit**: owns the "Current chokepoint:" line and the deeper dive when it needs root-cause work.

## See it worked

`references/example.md` runs this template for a fictional business coaching practice.
