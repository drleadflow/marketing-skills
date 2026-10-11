---
name: sop-generator
description: "When the user wants to turn a process they do (or someone on their team does) into a written procedure someone else can follow, or wants to delegate a task cleanly. Also use when they mention 'write an SOP,' 'document this process,' 'standard operating procedure,' 'how do I delegate this,' 'hand this off,' 'delegation brief,' or 'I keep being the bottleneck.' For a repeating process that should run on a schedule rather than just be documented, see marketing-loop."
metadata:
  version: 1.0.0
  chokepoint: fulfillment
  pack: core
---

# SOP Generator

You'll finish with a step-by-step procedure someone unfamiliar with the task can follow without you in the room, plus (if it's a one-off handoff rather than a recurring process) a delegation brief that sets direction once and checks quality at the end.

## Before you start

Read `.agents/business-context.md` section 6 (Voice) if it exists, for how this business talks day to day, and section 7 for the tools it uses. Ask only what's missing:
1. What's the process, described however messy ("I just kind of do it")?
2. Who will run this: someone brand new, or someone experienced who needs the gaps filled in?
3. Is this a one-time handoff (use the delegation brief) or a process that repeats (use the full SOP)?

## How to do it

### For a recurring process: fill the SOP template

Use the skeleton below. Write for someone doing it the first time. Use active voice and the imperative ("Click Save," not "Save should be clicked"). If the description you were given is messy, clean it up, but state your assumptions back before finalizing.

### For a one-time handoff: fill the delegation brief template

**First 10%, you set direction.** **Middle 80%, they execute**, no micromanaging; they flag blockers, not status updates; check in briefly at 40% and 80%. **Final 10%, you review and polish**: check against "done looks like," then sign off or send back with specific, actionable feedback.

## Template: SOP document

```markdown
# SOP: [Action-oriented title, e.g. "Process a refund request"]

- Purpose: [one sentence]
- Owner: | Last updated: | Estimated time: | Frequency: [daily/weekly/per event]

## Prerequisites
- Tools or logins needed:
- Permissions required:
- Information to gather first:
- Depends on this other process:

## Step-by-step procedure
1. **Step 1: [action-verb title]**
   - Instruction: [exact field/button names]
   - Expected outcome:
   - Time estimate:
2. **Step 2: ...**

## Decision points
- IF [condition], THEN [go to step X]. OTHERWISE [go to step Y].

## Quality checks
- CHECK: [what to verify]. Expected: [correct state]. If wrong: [recovery action].

## Troubleshooting
| Error | Fix | Escalate to |
|---|---|---|

## Completion criteria
- [ ] ...
- Logged in: [where completion gets recorded]
```

## Template: delegation brief (10-80-10)

```markdown
# Delegation brief: [Task]

- Objective (the outcome, one sentence, not the process):
- Context (why this matters):
- Playbook (detailed enough for someone unfamiliar):
- Constraints (budget, timeline, tools, brand rules):
- Examples of good output:
- Decision rights (what they decide alone / what needs sign-off):
- Done looks like (measurable):
- Checkpoints: 40% on [date], 80% on [date]

## Final review (filled in at 90%+)
- Checked against "done looks like": [y/n, notes]
- Feedback given:
- Sign-off date:
```

## Check it

- [ ] Every step uses the tool's real field and button names, not a paraphrase
- [ ] Every decision point has both branches resolved, no dead ends
- [ ] At least one quality check sits after the highest-risk step
- [ ] A person with zero context could follow it and get the expected outcome
- [ ] (Delegation brief) Objective is an outcome, not a task description; "done" is measurable

## Rules

- Write for the person with the least context, not the most.
- Never skip the decision points to save space; an SOP that only covers the happy path isn't one.
- State your cleanup assumptions back to the person who gave you the messy process.
- A delegation brief replaces micromanagement, not accountability; the final-10% review still happens.

## Related skills

- **client-onboarding**: often the first thing to turn into an SOP.
- **marketing-loop**: when the process should run itself on a schedule rather than be handed to a person each time.
- **database-reactivation**: a good example of a process with real decision points worth SOP-ing.

## See it worked

`references/example.md` fills both templates for a fictional med spa.
