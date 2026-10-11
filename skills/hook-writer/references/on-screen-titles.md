# On-screen video title hooks: the visual spec

Governs on-screen title hooks burned into short-form video only. Written hooks for carousels, posts, and headlines use the main hook library instead.

## The one rule

**A title that labels the topic is a dead title.**

- Fails: "LAY-UPS OVER MOONSHOTS" (tells you what the clip is about, no reason to watch)
- Works: "THE BORING PATH / THAT BUILDS WEALTH" (withholds the payoff)

Test: if a viewer reads it and nods "makes sense," rewrite it. The job of a title is to open a loop the clip then closes.

## Shape

| Constraint | Value |
|---|---|
| Lines | exactly 2 |
| Words per line | 2 to 4 |
| Case | ALL CAPS |
| Tension | carried by the first 3 words |
| Line 1 | neutral color (white or the brand's lightest neutral) |
| Line 2 | color-accented by hook type |
| Hold | roughly 3 to 4 seconds, fade out |

## Color taxonomy (adapt hues to the brand, keep the mapping)

| Color role | Hook type |
|---|---|
| Red/warning tone | Contrarian / warning |
| Green/go tone | How-to / optimize |
| Blue/cool tone | Framework / reframe / open question |
| Gold/yellow tone | Wealth / opportunity / named mechanism |

Keep the mapping consistent within one series so repeat viewers learn the code.

## Patterns

| Pattern | Shape | Fictional example |
|---|---|---|
| Contrarian confession | [credential/identity], and [belief-breaking admission] | "THIS COACH SAYS / THE FUNNEL IS DEAD" |
| Withheld mechanism | Names the result, hides the how | "THE ONE THING / YOUR CRM WON'T TELL YOU" |
| Cost reveal | Why a common action is quietly costing you | "THAT LOWBALL QUOTE / IS QUIETLY COSTING YOU" |
| Backwards truth | Inverts common advice | "THE BORING PATH / THAT BUILDS WEALTH" |
| Named mechanism | A specific number or window | "FIX THE QUOTE / IN UNDER 2 MINUTES" |
| Absolution | Removes blame the viewer carries | "NOTHING IS WRONG / WITH YOUR OFFER" |

## Keep a ledger

Before writing a new title, check what's already shipped for this account or series, and log every title rendered (shipped or rejected) so the same shape doesn't get reinvented every session. A simple running list of line 1 / line 2 / pattern used is enough.

## Render notes (if building titles as actual video overlays)

- Use a true bold display font with a hard outline so the text survives over moving footage; a thin weight disappears on bright backgrounds.
- Position titles in the upper-middle third so they don't collide with platform UI or burned-in captions lower on the frame.
- If exporting as an overlay file, confirm the export format preserves transparency; some common video formats render titles as an opaque black box instead of a transparent overlay.
- Check actual rendered output, not just "did the render finish without an error." A wrapped line, a transparent title, or a caption collision never throws an error; it just ships broken.
