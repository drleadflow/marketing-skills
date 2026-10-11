---
name: competitor-watch
description: "When the user wants to track what competitors are doing: pricing, offers, content, ads, or positioning changes. Also use when they mention 'competitor research,' 'competitor monitoring,' 'what are competitors doing,' 'competitive intel,' or 'track the competition.' For researching competitor ads specifically before building creative, see ad-research. Can be run as a one-off or scheduled with marketing-loop."
metadata:
  version: 1.0.0
  chokepoint: operate
  pack: core
---

# Competitor Watch

You'll finish with a competitor intel brief with an alert level per competitor, specific sourced changes, and one recommended action.

## Before you start

Read `.agents/business-context.md` section 4 (Positioning) if it exists, for this business's actual differentiator. If it's missing, offer to run **business-context** first, or ask only what's missing:
1. Who are the 3 to 5 competitors that matter most?
2. What's the last known state for each, if you've looked before?
3. How often does this need to run: a one-off snapshot, or a recurring watch (see **marketing-loop**)?

## How to do it

1. **Check pricing and packaging.** Flag anything within about 10% of your own pricing.
2. **Check offer and positioning.** Flag anything targeting your exact audience or naming you directly.
3. **Check content and ad activity.**
4. **Check team and company signals** (hires, job postings, partnerships).
5. **Compare against the last known state**, not against nothing.
6. **Set an alert level per competitor**, using the template below.
7. **Write the brief.**
8. **Give one strategic summary**: top threat, top opportunity, one recommended action for the week.

## Template: competitor intel brief

```markdown
# Competitor intel brief: [Business] | Week of [date]

| Competitor | Alert level | What changed (sourced, dated) | What it means for us | Recommended response |
|---|---|---|---|---|
| | GREEN/YELLOW/RED | | | |

Alert levels: GREEN = no significant change, hold strategy. YELLOW = notable change, consider a response within 2 weeks. RED = real threat, requires a response now.

## Strategic summary
- Top threat this week:
- Top opportunity a competitor's move just created for us:
- One recommended action for this week:
```

## Where to check each category

- **Pricing and packaging:** the competitor's own pricing page, checked directly, not from memory.
- **Offer and positioning:** homepage headline, "why us" or "about" page, any comparison page.
- **Content and ads:** their own social profiles for posting frequency, a public ad-transparency tool for the relevant platform if one exists, review sites for new testimonials.
- **Team and company signals:** their careers or job-postings page, and public professional-network profiles for notable hires or departures.

## Check it

- [ ] Every claim is backed by a source (a URL, a screenshot, a date checked)
- [ ] This week's state is compared against a last-known state, not described fresh each time
- [ ] Each competitor gets an explicit alert level
- [ ] The brief ends with exactly one recommended action
- [ ] Minor copy tweaks are distinguished from real strategic shifts

## Rules

- Include a source URL or date for every claim.
- Never recommend a panic response; recommend a measured one, or none, and say so plainly when nothing needs to change.
- Don't confuse noise with signal; call out the difference explicitly.

## Run it on a schedule

A weekly cadence fits most businesses; see **marketing-loop** for the check-cadence, state, and stop condition if this should run on autopilot.

## Related skills

- **ad-research**: the deeper competitor-ad dive used when building new ad creative.
- **marketing-scoreboard**: where a competitor-driven threat or opportunity should show up as context.
- **marketing-loop**: to run this on a recurring schedule instead of as a one-off.

## See it worked

`references/example.md` runs this brief for a fictional home-services company.
