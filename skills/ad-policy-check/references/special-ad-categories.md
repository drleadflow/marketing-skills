# Special ad categories: current names and a renaming note

Platforms rename and restructure these categories periodically, and a static list in a skill
file will eventually be wrong. Treat the list below as "verify against the platform's current
documentation", not as a permanent source of truth.

As of this skill's last review, Meta's special ad categories are:
- **Employment**
- **Financial products and services** (renamed from "Credit" in 2025; covers loans, credit
  cards, insurance, and similar financial offers, not just lending)
- **Housing**
- **Social issues, elections, or politics**

Each one restricts targeting (commonly: no age, gender, or zip-code-level location targeting) and
may restrict which optimization events are available. The restriction details, not just the
names, change over time; a category whose name hasn't changed can still have different rules
than it did a year ago.

## What to do, every time

1. Confirm the category name and its current rules against the platform's own ad-standards or
   business-help documentation, not from this file or from memory.
2. If a note in this file turns out to be stale, flag it in the skill's output rather than
   quietly working around it, so the file gets corrected instead of the same drift happening
   again on the next check.
3. For a health or wellness advertiser specifically, also check whether the platform currently
   limits which conversion events can be used for optimization (see SKILL.md section 3a); this
   is separate from, and changes on a different schedule than, the special-category list above.
