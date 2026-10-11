# Style quick reference

The full writing rules are in `AGENTS.md`. This is the quick checklist to run against a `SKILL.md` before it ships.

- **Title**: an H1 in Title Case, matching the skill's purpose, not its folder name verbatim if the folder name reads awkwardly as a title.
- **Opening paragraph**: one sentence, directly under the H1, starting with "You'll finish with". It states the deliverable, not the process.
- **H2 headings**: exactly as the spec names them, in order: `## Before you start`, `## How to do it`, `## Check it`, `## Rules`, `## Related skills`. Never rename, reorder, or merge them. Optional sections (`## Ask your audience`, `## Run it on a schedule`, `## Examples`) use that exact wording too.
- **Customers**: refer to a customer, lead, or client as "they", never "he or she", "s/he", or a gendered pronoun guessed from a name.
- **Words to avoid**: "actually", "genuinely", and "the single most" (or "the single biggest"). These soften or oversell a claim instead of stating it. Say the thing plainly, or cite the number that backs it up.
- **Dashes**: zero em dashes or en dashes anywhere in `SKILL.md` or `references/*.md`. Use a period, comma, colon or parentheses instead.
- **Hype words**: also banned per `AGENTS.md`: revolutionary, game-changer, unlock, supercharge, skyrocket, delve, leverage (as a verb), "in today's fast-paced world".
- **Plain words, short sentences, active voice.** Talk to the business owner, not about them.

Run `node scripts/validate-skills.mjs --skill <name>` after a pass on this checklist. The validator catches the dash rule and the required sections; it does not catch pronoun choice, the opening-sentence pattern, or the banned-words list, so check those by eye.
