---
name: marketing-loop
description: "When the user wants to run a marketing skill or task on a recurring schedule instead of doing it manually each time. Also use when they mention 'automate this,' 'run this every week,' 'put this on a schedule,' 'marketing on autopilot,' or 'recurring workflow.' Orchestrates other skills on a cadence; does not replace human approval for anything that sends, publishes, or spends. For a one-off process to document instead of schedule, see sop-generator."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Marketing Loop

You'll finish with a repeatable job, filled into the nine-part template below, with a cadence, a stop condition, state, spend or send caps, and a human checkpoint before anything goes out.

## Before you start

Read `.agents/business-context.md` if it exists. If it's missing, offer to run **business-context** first, or ask only what's missing:
1. Which skill or task should run on a cadence (database-reactivation, competitor-watch, marketing-scoreboard, review-engine, something else)?
2. What outcome should this loop protect or grow, specifically?
3. Does this business already have a way to run something on a schedule, or does scheduling need to be figured out too?

## How to do it

Fill all nine parts in the template below. A loop missing any one of them is a liability, not an asset.

1. **Check cadence**, matched to how fast the real signal changes.
2. **Acts-when condition**, separate from the check itself.
3. **Purpose**, one sentence.
4. **Skills used.**
5. **Loop body**, the ordered steps.
6. **Self-check**, run before acting.
7. **State and idempotency.**
8. **Stop and bail-out.**
9. **Output.**

**The human checkpoint, every time:** anything that sends, publishes, or spends stops for approval first, every cycle, with an explicit cap and stop rule.

## Template: loop spec

```markdown
# Marketing loop: [name] | Business: [name]

1. Check cadence: [daily/weekly/on-trigger], because: [the signal's real speed]
2. Acts-when condition: [the specific trigger to do something, distinct from just checking]
3. Purpose: [one sentence, one outcome]
4. Skills used: [list]
5. Loop body:
   - Step 1:
   - Step 2:
   - ...
6. Self-check (run before acting): [what would make this a false positive, e.g. seasonality, a tracking bug]
7. State / idempotency: [what's remembered between runs, where it's stored, how it prevents double-acting]
8. Stop / bail-out: [who/what disables it, what happens on error]
9. Output: [report / staged draft / notification / scoreboard update]

## Guardrails
- Spend cap: $[x] per [cycle]
- Send cap: [n] messages per [batch]
- Stop rule if exceeded: [what happens]
- Human checkpoint: [who approves, what they see, before what action]

## Scheduling mechanism
[Cron-capable job / agent self-paced loop or scheduled-agent feature / manual calendar reminder], because: [why this fits the cadence above]
```

## Check it

- [ ] All nine parts are filled in concretely, not left as "n/a"
- [ ] The cadence matches how fast the real signal changes, not just convenience
- [ ] State prevents the loop from double-acting on the same person or thing twice
- [ ] A spend or send cap is stated in real numbers, with a stop rule for exceeding it
- [ ] Anything that sends, publishes, or spends has an explicit human checkpoint before it fires
- [ ] The stop condition is concrete, never left blank

## Rules

- Never let a loop send a message, publish content, or spend money without a human approving that specific cycle's batch.
- Always state a cap and a stop rule before the loop goes live.
- Never run a loop without state; a loop with no memory of what it already did will double-act.
- Match cadence to the real speed of the underlying signal.
- If nobody is acting on a loop's output after a few cycles, delete the loop rather than making its report flashier.

## Scheduling options (tool-agnostic)

A cron-capable job for a fixed time of day; an agent's own self-paced loop or scheduled-agent feature (for example, Claude Code's `/loop` command or its scheduled-agent feature) for something that reacts to state rather than a fixed clock; or, for a lower-volume, high-judgment loop, a standing calendar reminder for a person to run the skill manually on the same cadence.

## Related skills

- **database-reactivation**, **competitor-watch**, **marketing-scoreboard**, **review-engine**: common skills to run inside a loop.
- **sop-generator**: for a process that should be documented for a person rather than run on a schedule.

## See it worked

`references/example.md` fills this template for a fictional med spa's weekly review-request loop.
