---
name: meta-launcher
description: >
  When the user wants an agent to build a Facebook or Instagram ad campaign directly in their own
  Meta ad account through the Marketing API: campaign, ad sets, creatives and ads, all paused, then
  switched on only after they approve. Also use when they say "launch my Meta ads," "build the
  campaign in Ads Manager for me," "set up a Facebook ad test," "push these ads live," or "meta
  launcher." Works for any business; health practices get a compliance briefing first. For the
  launch plan and pre-flight method this executes, see ad-launch. For reading results afterward,
  see meta-report.
metadata:
  version: 1.0.0
  chokepoint: attention
  pack: core
---

# Meta launcher

You'll finish with a test campaign built in the owner's own Meta ad account, every entity paused,
a saved test plan listing every ID, and the ads switched on only after the owner gave an explicit
go for that exact spend.

## Before you start

Read `.agents/business-context.md` and `.agents/proof-ledger.md` if they exist. If
business-context is missing, offer to run **business-context** first. Pull the conversion event,
target cost per result, pause line and daily spend cap from its "Paid ads targets" table. This
skill builds what **ad-launch** plans; if there is no launch document yet, write one with
**ad-launch** first.

Check these before any API call. If one is missing, stop and say where to get it. Never write
placeholder code around a missing value.

| Needed | How to check | Where it comes from |
|---|---|---|
| `META_ACCESS_TOKEN` with `ads_management` | env var is set | a system user token from the owner's Meta Business settings |
| `META_AD_ACCOUNT_ID` | env var is set, starts with `act_` | Ads Manager account menu |
| `META_PAGE_ID` | env var is set | the Facebook Page the ads run from |
| `META_PIXEL_ID` (the dataset ID) | env var is set | Events Manager |
| `META_API_VERSION` | env var is set, like `v24.0` | the Marketing API changelog; use the current version |
| A conversion event that fires | a test conversion shows in Events Manager, Test Events | **tracking-and-attribution** |
| Approved creative and copy | files on disk, copy approved by the owner | **ad-creative-brief**, **ad-angles-and-copy** |

Work in this order: missing prerequisites first (stop there), then step 1 if it applies, then
the questions below. Ask, at most 3 at a time, what is still missing:
1. What is being advertised, and the landing page URL.
2. Daily budget per ad set and the test window (default 7 days). If the owner says "25 a day"
   and several ad sets, confirm whether that is per ad set or the total before any math.
3. **What kind of business is this?** If the answer, or business-context, says health,
   medical, med spa, aesthetics, dental, chiropractic, IV therapy, weight loss, mental health,
   supplements or any other health or wellness offer, run step 1 before anything else. If the offer
   is a loan, credit, insurance, housing, a job, or a coaching program that promises income, run
   the "Other regulated offers" part of step 1.

## How to do it

### 1. Compliance briefing (health practices and regulated offers)

Skip this step for a business with no health, money, housing or job angle.

For a health business, walk the owner through every rule in
`references/health-compliance-briefing.md`, one at a time, in plain words: what the rule is, who
enforces it, and what happens if it is ignored. For each one the owner picks **Follow** or
**Override**. An override needs a one-line reason in the owner's words. Record every choice in a
"Compliance decisions" table in the test plan:

| Rule | Owner's choice | Reason (if override) | Date |
|---|---|---|---|

Tell the owner once, up front: this is a checklist so they know the rules, not legal advice, and
their state medical board, their lawyer and Meta's own policy pages have the final word.

Two rules need proof, not just a reason, before you act on an override, because the agent would
be the one doing the act: uploading a patient or customer list to Meta, and putting a treatment
or condition name into an ad name, URL, UTM or pixel event. For either, ask for written
confirmation that a business associate agreement (BAA) or a lawyer's sign-off covers it, and
record it. Without that, mark it "Override requested, not executed" and build the campaign the
compliant way.

The owner can also say "I know the rules, skip the walkthrough." Then show the table with every
rule set to Follow, let them change any line, and record it the same way. Even then, call out by
number every rule their request already touches (a drug brand name in the offer is H5; a patient
list upload is H9; a treatment in the ad name is H10), and still say the "not legal advice" line
once. Skipping the walkthrough skips the explanations, not the rules.

### 2. Pick the test structure

| Structure | Build | Answers |
|---|---|---|
| Audience test | 1 campaign, 2 to 3 ad sets, same ads in each | which audience converts |
| Creative test | 1 campaign, 1 ad set, 3 to 5 ads with different visuals | which visual wins |
| Copy test | 1 campaign, 1 ad set, 3 ads, same visual, different text | which message wins |
| Full launch | 1 campaign, 3 ad sets x 3 ads | audience and creative together, needs more budget |
| Advantage+ | Meta's consolidated campaign | run it against a manual baseline, not instead of one |

Test one variable at a time unless the owner chose a full launch. Ad set budgets (not a campaign
budget) by default, so each ad set gets the spend it needs to be judged.

### 3. Name everything and tag every link

Use **ad-launch**'s naming convention, `[format]-[hook]-[avatar]-[offer]-[MMDD]`, on campaign, ad
set and ad. Every creative gets these URL tags, so each result traces back to one ad:

```
utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_term={{adset.name}}&utm_content={{ad.name}}
```

Because `{{ad.name}}` goes into every click URL, a health business uses an opaque offer code
(`OFR3`), never a treatment or condition, unless step 1 recorded a covered override. Keep a plain
lookup in the test plan (`OFR3 = spring lip special`) so the owner can still find their ads.

### 4. Build it, paused

Save the client in `references/meta-api-client.md` into the owner's project. It forces
`PAUSED` on every create call. Then, in order, with about 2 seconds between calls:

1. Create the campaign with the objective (`OUTCOME_LEADS`, `OUTCOME_SALES` or `OUTCOME_TRAFFIC`)
   and any special ad category the offer falls under (see **ad-policy-check**).
2. Create each ad set with its daily budget, targeting, and the conversion event as the
   optimization goal. For a health account, check first that the event is still allowed for
   optimization; if Meta has restricted it, fall back as **ad-policy-check** describes.
3. Upload each image or video and keep the returned hash or video ID.
4. Create each ad creative with the Page, the copy, the link and the URL tags.
5. Create each ad, one per ad set and creative pair.
6. Save the test plan (`meta-test-plan-YYYY-MM-DD.json`): every entity ID, name, budget, the
   compliance decisions table, and the review date.

Audiences: cold traffic gets broad or a 1% lookalike from the best customers, with existing
customers excluded. Warm traffic gets site visitors and engagers from the last 30 days. **For a
health practice, never build a lookalike or exclusion from an uploaded patient list** unless step
1 recorded a covered override; suppress existing patients in the CRM instead.

After the build, open one ad in Ads Manager preview and turn off any automatic creative changes
Meta switched on (text rewrites, auto crops, added music). They garble on-image text.

### 5. Pre-flight, every box

- [ ] Every campaign, ad set and ad reads PAUSED in the API response.
- [ ] Landing page returns 200 and a test submission reaches the CRM or inbox.
- [ ] URL tags present on every creative.
- [ ] Copy fits: headline about 40 characters, primary text front-loads in the first 125,
  description about 30.
- [ ] Each static has a feed size (1:1 or 4:5) and a story size (9:16).
- [ ] Budget math written out: $X a day x N ad sets = $Y a day.
- [ ] Optimization event is the real conversion and shows recent activity.
- [ ] Copy passed **ad-policy-check**, and **health-claims-check** for a health business.
- [ ] Compliance decisions table filled in, if step 1 ran.

### 6. Ask for the go, then switch on

Show the owner the plan, the total daily spend and, for a health business, the compliance
table. Warn plainly if total daily spend passes 100 dollars a day or the cap in business-context. Switch
on only after an explicit go for this launch ("launch it," "turn it on"), not an earlier "sounds
good." Activate the campaign, then the ad sets, then the ads, about 5 seconds apart, and re-read
each status after.

Set the first review for 72 hours out and hand it to **meta-report**.

## Examples

Fictional businesses, for illustration only.

**A business coach, no regulated angle.** Owner: "Launch my webinar ads, 20 dollars a day, three
audiences." Step 1 is skipped. You build an audience test: 1 campaign, 3 ad sets at 20 dollars each,
the same 2 ads in each, total 60 dollars a day, all paused. You show the plan and wait. Owner: "Launch
it." You switch on and set the review date.

**A med spa.** Owner: "Run my lip filler ads." Step 1 runs. The owner follows every rule except
the before and after photos, and overrides with "our photos are our own consented patients,
same lighting." You record that and note Meta may still reject the image. They ask you to
upload their patient list as a lookalike seed. You ask for a BAA or legal sign-off, none
exists, so you mark it "not executed" and build broad targeting with CRM suppression instead.
Ad names use `OFR2`, not "lip-filler."

## Check it

- [ ] Every prerequisite was checked before the first API call.
- [ ] For a health or regulated business, the compliance table exists with a choice and date on
  every row, and no override needing proof was executed without it.
- [ ] Every entity was created paused, and the test plan lists every ID.
- [ ] Nothing was switched on without an explicit go for this spend.
- [ ] The first review date is set and handed to **meta-report**.

## Rules

- Never create an entity in any status but PAUSED.
- Never switch anything on without an explicit, specific go for that launch.
- Never skip the pre-flight checklist, even on a deadline.
- Never put an access token in a file, a commit or a chat message. Env vars only.
- Never upload customer or patient data to Meta for a health business without a recorded BAA or
  legal sign-off.
- Never treat the compliance briefing as legal advice, and never hide a rule to save time.
- Log every ID and every change, so any of it can be undone.

## Related skills

- **ad-launch**: the launch document, kill and scale rules, and four-week plan this skill builds
  from.
- **ad-policy-check**: platform policy, special ad categories and health optimization limits.
- **health-claims-check**: the claim-by-claim check for health copy.
- **clinic-ad-launch**: the full four-day launch method for a health practice.
- **tracking-and-attribution**: set up the conversion event before launching.
- **meta-report**: read the results after launch.
