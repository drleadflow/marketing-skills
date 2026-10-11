---
name: ad-policy-check
description: >
  When the user wants to check ad copy against platform advertising policy before it launches or
  after it was disapproved. Also use when they say "will this ad get approved," "check this
  against Meta's policy," "ad policy check," "why was my ad rejected," or "is this claim allowed."
  Covers Meta's special ad categories and personal-attribute rules plus general health and
  financial claim risk; for the deeper health-specific claims gate (FDA wording, before/after,
  testimonials, PHI), see health-claims-check. For the copy this checks, see ad-angles-and-copy.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Ad policy check

You'll finish with a verdict (pass, fix required, or block) for each piece of ad copy, with
the specific phrase flagged, why it is risky, and a rewrite that keeps the intent.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist, particularly
business-context section 10 (Constraints) for industry rules, claims the business may not make,
and platform limits already on file; a claim this skill is asked to check still has to be an
Approved entry in the proof ledger, or it's `[NEEDS PROOF: ...]` regardless of whether the
platform would approve the wording. If business-context is missing, offer to run
**business-context** first. Gather:
1. What the business does and what is being advertised (one or two sentences).
2. The exact headline, primary text, description, and CTA for each ad being checked.
3. Whether this ad falls into a special ad category: none, employment, **financial products and
   services**, housing, or social issues/elections/politics. Platforms periodically rename these
   categories (Meta renamed "credit" to "financial products and services" in 2025); verify the
   current name and definition against the platform's own documentation before relying on the
   label below, rather than assuming it's still current.
4. The destination URL, if available, to cross-check the landing page says the same thing the ad
   claims.

## How to do it

### 1. Check the baseline, every ad

- No claim or implication the platform's community standards would flag (hate, violence, adult
  content, misleading intent).
- No engagement bait ("comment YES," "tag someone who needs this" used as a manipulation, rather
  than a genuine CTA).
- No profanity or inflammatory language.
- The destination loads and matches what the ad promises (non-functional landing pages
  are their own violation).

### 2. Check content-driven triggers

| If the ad mentions... | Check for |
|---|---|
| Income, earnings, "make money," a specific dollar result | unrealistic or unsubstantiated outcome claims |
| Health, weight, supplements, wellness | implied diagnosis, cure/guarantee language, before/after |
| Age, gender, race, religion, a life event (divorce, bereavement) | personal-attribute targeting or copy that assumes something about the reader |
| Crypto, weapons, adult content, drugs, alcohol, gambling | restricted-category rules, which are often platform-specific and strict |
| Political or social-issue content | special ad category disclosures |

### 3. Check the special ad category, if declared

Employment, financial products and services, and housing categories carry their own targeting
restrictions (no age, gender, or location-based exclusions in most cases). Confirm the campaign
is flagged in that category on the platform side, not just written correctly in the
copy. See `references/special-ad-categories.md` for the current category list and a note on how
often these rename, so the list doesn't go stale silently.

### 3a. Check for lower-funnel optimization limits on health and wellness advertisers

Since early 2025, Meta has restricted health- and wellness-classified ad accounts from
optimizing toward (and, in the most restricted tier, from using at all) mid- and lower-funnel
standard events: purchase, lead, schedule, contact, add-to-cart. This is implemented as a tiered
system, roughly: Tier 1 (core setup limits on custom parameters and catalog features), Tier 2
(blocks optimization toward the events above; upper-funnel events like page view, view content,
landing page view, and search remain usable), Tier 3 (may block event-based optimization
entirely in affected regions, broad targeting only). A server-side Conversions API event does
not bypass a tier's restriction; multiple sources report CAPI is held to the same rule as the
pixel for a restricted account. See `references/health-wellness-optimization-limits.md` for the
full detail, the fallback options, and the verification date. Before a launch plan assumes a
specific optimization event is available (see **clinic-ad-launch**'s deposit-first test), check
the account's actual category and tier in Events Manager rather than assuming last time's status
still holds; both the classification criteria and Meta's enforcement have changed more than once
since this policy began, and other platforms may have, or may later add, similar restrictions
that need the same verify-don't-assume treatment.

### 4. Personal attributes: the rule that catches the most ads

Never write copy that tells the reader what you believe is true about them personally ("Are you
overweight?" "Going through a divorce?" "Struggling with debt?"). Describe who you help and what
you offer; let the reader self-identify. This single pattern is behind a large share of
disapprovals in health, finance, and relationship-adjacent categories.

### 5. Produce the verdict

For each ad, in this format:

```
VERDICT: PASS | FIX REQUIRED | BLOCK
Issue: [exact phrase]
Why: [one-line reason]
Severity: Block | Fix Required | Caution
Suggested rewrite: [keeps the same offer and intent, removes the risk]
```

Severity guide: **Block** = will almost certainly be rejected, do not submit. **Fix Required** =
real risk of rejection or restricted delivery, fix before submitting. **Caution** = an edge case
that sometimes gets flagged and sometimes doesn't; worth knowing, not necessarily worth changing.

## Check it

- [ ] Every ad has a verdict, not a vague "looks fine."
- [ ] Every flagged issue names the exact phrase, not a general area of concern.
- [ ] Every rewrite preserves the offer and the audience; a rewrite that changes what's being
  offered is a different ad, not a fix.
- [ ] Personal-attribute language specifically checked on every ad, not just the obvious ones.
- [ ] If a URL was provided, the landing page was checked for matching claims.

## Rules

- This is a pre-flight check, not the platform's actual review. State that plainly; a pass here
  reduces risk, it does not guarantee approval.
- Never approve a claim just because a competitor's ad with the same claim is currently live;
  that shows the platform hasn't caught it yet, not that it's allowed.
- A rewrite that changes the offer or audience is not a fix; flag it as a bigger problem instead.
- For a health-related business, run **health-claims-check** as well; this skill does not replace
  the deeper FDA/FTC/PHI gate that skill covers.

## Related skills

- **ad-angles-and-copy**: produces the copy this skill checks.
- **proof-ledger**: a claim still needs an Approved entry here even if the platform would allow
  the wording.
- **health-claims-check**: the deeper, health-specific version of this gate.
- **ad-launch**: this check is a required pre-flight item before anything goes live.
- **ad-creative-brief**: on-image text in a static also needs this check, not just the primary
  text and headline.
