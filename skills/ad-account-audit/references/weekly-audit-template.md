# Weekly audit output template

```
AD ACCOUNT AUDIT: <account name>, week of <date>

TRACKING HEALTH
- Event match quality / signal quality: <value, trend vs last run>
- Conversions API dedup: <checked, result>
- Last verified real conversion: <date/time>
- Verdict: healthy / degraded (if degraded, state what was fixed before any decision below)

PERFORMANCE, BY ENTITY (period: <N> days)
| Ad set / Ad | Placement | Spend | Results | Cost/result | Class | Decision |
|---|---|---|---|---|---|---|

CHANGES MADE THIS RUN
| Entity | Before | After | Reason |
|---|---|---|---|

QUEUED FOR NEXT CYCLE
- <refresh in progress, test still gathering data, etc.>
```

## Fictional worked example

Fictional business "Cedarbrook Family Chiropractic," week of a Monday in Q1.

```
TRACKING HEALTH
- Event match quality: 7.2/10, flat vs last week
- Conversions API dedup: checked, no duplicates found
- Last verified real conversion: this morning, 9:14am
- Verdict: healthy

PERFORMANCE, BY ENTITY (period: 7 days)
| Ad set / Ad | Placement | Spend | Results | Cost/result | Class | Decision |
|---|---|---|---|---|---|---|
| New-patient exam, Ad A | Feed | $210 | 9 bookings | $23.33 | Winner | Scale 25% |
| New-patient exam, Ad A | Stories | $90 | 1 booking | $90.00 | Loser (this placement only) | Turn off Stories placement, keep Feed |
| New-patient exam, Ad B | Feed | $140 | 2 bookings | $70.00 | Fatigued (CTR down 60% from week 1) | Refresh creative |

CHANGES MADE THIS RUN
| Entity | Before | After | Reason |
|---|---|---|---|
| Ad set: New-patient exam | $300/day | $375/day | Ad A winning on cost/result with 9+ bookings |
| Ad A, Stories placement | included | excluded | $90 cost/result vs $23 on Feed, same ad |

QUEUED FOR NEXT CYCLE
- Ad B refresh: 2 new creative variants off the winning Ad A family, due Thursday
```
