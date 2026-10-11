---
name: morning-brief
description: "When the user wants to set the day's priorities quickly, first thing in the morning. Also use when they mention 'morning briefing,' 'what should I focus on today,' 'daily priorities,' or 'start my day.' Reads marketing-scoreboard and business-context before asking anything. For the end-of-week version, see weekly-review."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Morning Brief

You'll finish with one short priority list for today, the first move named first, built from the real numbers instead of whatever feels urgent in the moment.

## Before you start

Read `.agents/business-context.md` section 8 (Numbers), specifically the "Current chokepoint:" line written by **chokepoint-audit** and this week's figures if **marketing-scoreboard** has already run. If business-context is missing, offer to run **business-context** first, or ask only what's missing:
1. Can you pull the current unanswered-lead queue right now (who's waiting for a first reply, and how long each has been waiting)? This is checked before scoring anything else.
2. Anything time-sensitive today that the scoreboard wouldn't show (a client call, a deadline, a launch)?

Keep this brief to a couple of minutes. It's a launchpad, not a planning session.

## How to do it

1. **Check the unanswered-lead queue first, before anything else.** Any lead waiting past chokepoint-audit's red line (over 60 minutes for a call or form, over 2 hours for a social DM, during business hours) is a forced item 1, ahead of the brain dump and ahead of whatever the chokepoint line says. A lead sitting unanswered doesn't wait for a priority score to decide it matters.
2. **Brain dump, fast.** List everything else on your mind: tasks, open loops, worries, half-formed ideas.
3. **Score each item on three axes, 1 to 5 each**, using the template below: deadline pressure, impact, personal importance. Add for a combined score out of 15.
4. **Pull in the "Current chokepoint:" line from section 8** (or this week's scoreboard report if chokepoint-audit hasn't run yet) as a strong candidate for today's top item, after the lead queue.
5. **Name the top 3, in order.** If the lead queue produced a forced item, it's item 1 regardless of score. Everything else goes on a visible "not today" list.
6. **Push back on a sprawling list.** More than five real priorities isn't a priority list.
7. **Name the first move**: the literal first action, not a restated goal.
8. **Block time for it.**

## Template: morning brief

```markdown
# Morning brief: [date]

## Lead queue check (forced item 1 if any lead is over the red line)
| Lead | Waiting since | Channel | Over red line? (>60 min calls/forms, >2hr DMs) |
|---|---|---|---|

## Brain dump
- ...

## Scored (deadline + impact + importance, out of 15)
| Item | Deadline | Impact | Importance | Total |
|---|---|---|---|---|

## Current chokepoint (from section 8): [name], because: [the number behind it]

## Top 3
1. [forced lead-queue item if one exists, otherwise the highest score], do this first
2. [important, can flex timing]
3. [minimum viable progress]

## Not today
- ...

## First move
[The literal first action: the message to send, the number to pull, the call to make]

## Time block
[Window] for [Decision 1]. Notifications off. Done looks like: [specific outcome].
```

## Check it

- [ ] The lead queue was checked first, before scoring anything else
- [ ] Any lead over the red line became the forced item 1, ahead of score
- [ ] Top 3 items are scored, not just picked by feel
- [ ] The "Current chokepoint:" line (or this week's scoreboard report) was weighed, even if something else won
- [ ] No more than 3 "today" items; everything else is parked visibly, not dropped silently
- [ ] The first move is a literal, specific action, not a restated goal
- [ ] A time block exists for the top item

## Rules

- Keep it to a couple of minutes. If this turns into a planning session, it's failed its own job.
- A lead over the red line is always item 1, never scored down by "importance" or "mood."
- The second item has to be the literal highest-scoring one, not whatever's most comfortable to start with.
- Never skip checking section 8's "Current chokepoint:" line just because something else feels more urgent today; weigh it, don't ignore it.

## Related skills

- **marketing-scoreboard**: updates section 8's weekly numbers this brief reads.
- **chokepoint-audit**: owns the "Current chokepoint:" line this brief weighs.
- **weekly-review**: the end-of-week version that looks back instead of forward.

## See it worked

`references/example.md` runs this template for a fictional med spa owner's morning.
