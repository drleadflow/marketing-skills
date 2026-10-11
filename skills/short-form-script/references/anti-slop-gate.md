# The anti-slop gate

Run on every script before delivery. Score against all checks. Threshold: 2 or more failures means rewrite before it ships. One failure means fix that specific line.

## Named checks

1. **Stolen wording** (auto-fail, not scoreable): any phrase over 5 words matching a reference video's transcript or a competitor's tagline/slogan. Borrow structure, never wording.
2. **Brochure voice**: "we offer," "our state-of-the-art," "conveniently located" energy; the we-to-you ratio favors "we." Rewrite to address one reader.
3. **Contrast-cliche quota**: "It's not X, it's Y" / "isn't about X, it's about Y": max once per script, max once per posting week across a batch.
4. **Banned-word list**: game-changer, unlock, elevate, seamless, holistic, dive into, revolutionary, cutting-edge, journey, empower, next level, synergy, transformative, "in today's world," leverage (as a verb), delve, supercharge, skyrocket.
5. **Em-dash ban** (hard rule): zero em dashes or en dashes anywhere. Use periods, commas, or colons. Also: more than one triadic list ("X, Y, and Z" flourish) per 100 words reads as AI cadence; vary sentence length instead.
6. **Unearned claim**: any superlative or outcome stated without a number, a mechanism, or an honest scope. Also every compliance tripwire: cure/treat/guarantee/prevent-illness language, drug or brand names on screen without clearance, performance-enhancement claims.
7. **Anybody's-ad test**: if the hook works for any business in any city, it fails. It must name the person, the moment, or the mechanism.
8. **Hook-body redundancy**: body repeats a hook's line, breaking the 5x1 pairing. Fails.
9. **Fake-resource CTA**: any keyword or freebie referenced that doesn't exist yet. This blocks the script; it's a gate, not a score.
10. **Human-read test**: read the script aloud once. Anywhere the speaker would never say it to a real person's face, flag it.
11. **Invented fact** (auto-fail): any specific claim about customers, clients, or results the business hasn't verified. Real stories ship as templates with a "swap in a real story before filming" note; never scripted as if a specific unverified event happened.
12. **Unreferenced format**: every script should map to a proven reference format from **outlier-research** or the swipe file, named next to the script. If no reference exists, flag the piece as experimental.

## Output format for a QA pass

```
Script: [name/topic]
Result: PASS | FAIL(n)

Flagged lines:
1. [check name]: "[quoted line]"
 Fix: "[rewritten line]"
2. [check name]: "[quoted line]"
 Fix: "[rewritten line]"
```

Never silently rewrite and hand back a clean copy with no diff; the point of the gate is visibility into what was wrong.
