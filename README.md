# Marketing Skills

Marketing skills for AI agents. Written for owners of service businesses, coaches, consultants, agencies, local businesses and health practices who run their marketing with an AI agent instead of a bigger team.

Every skill is organized around the 8 chokepoints, the eight places growth gets stuck, in funnel order:

```
Foundation
   |
   v
Offer -> Attention -> Leads -> Appointments -> Closed -> Fulfillment -> Retention -> Referrals
   ^                                                                                      |
   |______________________________________________________________________________________|
                                    Operate (runs the loop weekly)
```

Two groups sit around the chokepoints. Foundation holds the shared context every skill reads before it does anything. Operate is how you run the whole system on a weekly cadence instead of letting it drift. A Clinic pack adds health-practice skills on top of the core set.

## Shared context

Two files hold what every skill needs to know about your business, kept in your own project, not in this repo:

- `.agents/business-context.md`, built by the **business-context** skill. What you sell, to whom, your prices, your best client, your positioning, your voice, your channels, your numbers, your goals. It has a dated changelog, entries are appended, never rewritten.
- `.agents/proof-ledger.md`, built by the **proof-ledger** skill. Every result, number, testimonial and claim you're allowed to use, each with its source and permission status. If a claim isn't in the ledger, no skill will use it as proof.

Every skill reads both files first. If they don't exist yet, the skill offers to run business-context for you, or asks only the questions it can't work without.

## Install

Pick one:

**npx (recommended)**
```
npx skills add drleadflow/marketing-skills
```

**Claude Code plugin**
```
/plugin marketplace add drleadflow/marketing-skills
/plugin install dlf-marketing-skills@dlf-marketing-skills
```

**Codex plugin**
```
codex plugin marketplace add drleadflow/marketing-skills
```
Then open `/plugins` in Codex and select dlf-marketing-skills.

**Clone and copy**
```
git clone https://github.com/drleadflow/marketing-skills
```
Claude Code reads skills from `.claude/skills/`:
```
cp -r marketing-skills/skills/* your-project/.claude/skills/
```
Codex and other universal agents read skills from `.agents/skills/`:
```
cp -r marketing-skills/skills/* your-project/.agents/skills/
```

## How to start

Run **business-context** first. It builds the shared context file every other skill reads.

Then run **chokepoint-audit**. It looks at your numbers and tells you which of the 8 chokepoints is actually stuck, so you don't guess at what to fix first.

From there, go to the chokepoint the audit named and pick the skill that matches what you need.

## Skills

<!-- SKILLS:START -->

### Foundation

| Skill | Purpose |
|---|---|
| `brand-voice` | When the user wants their marketing to sound like them instead of like AI or an agency: a written voice guide built from their own best posts, emails and how they talk. |
| `business-context` | When the user wants to set up or update the shared business context file every marketing skill reads: what they sell, prices, best client, promise, voice, channels and numbers. |
| `chokepoint-audit` | When the user wants to know what to fix first in their marketing or sales, why growth stalled, or where customers are leaking out. |
| `messaging-compliance` | When the user wants to check whether a text, call, email, or DM campaign is compliant before sending it, or wants the consent language for a lead form. |
| `proof-ledger` | When the user wants to record, check or clean up the results, numbers, testimonials, reviews and credentials they're allowed to use in marketing. |

### Offer

| Skill | Purpose |
|---|---|
| `best-client-profile` | When the user wants to define exactly who their best customer is, in that customer's own words, so every ad, post and offer is aimed at one real person. |
| `offer-builder` | When the user wants to create, fix or package an offer people say yes to without a discount: what's included, the name, the promise, the guarantee, the terms. |
| `offer-ladder-pricing` | When the user wants to set or raise prices, add tiers, create an entry offer, design payment plans, or map how customers move from a first purchase to a bigger one. |
| `one-page-offer` | When the user wants a single page that explains their offer, to send before or after a sales call, walk through on screen, or pass to a partner who also decides. |
| `positioning` | When the user wants to stand out from competitors, stop being compared on price, or say in one sentence why someone should pick them. |

### Attention

| Skill | Purpose |
|---|---|
| `ad-account-audit` | When the user wants to review a live paid-ad account and decide what to scale, hold, refresh, or
  kill, on a recurring cadence. Also use when they say "optimize my ads," "weekly ad review,"
  "what should I cut," "ad account audit," "scale my ads," or "why are my ads tanking." Needs a
  live account with spend and a working conversion event. For researching before a launch instead
  of auditing a live one, see ad-research. For the launch and pre-flight process itself, see
  ad-launch. |
| `ad-angles-and-copy` | When the user wants to turn ad research into a bank of angles and then write the actual headline
  and primary text for paid ads. Also use when they say "ad angles," "write ad copy," "what should
  the ad say," "give me ad variations," or "angle bank." Needs research first; for a health
  business the belief-shift method lives here too. For the visual layout and format each angle
  renders into, see ad-creative-brief. For launching the finished copy, see ad-launch. For a clinic
  running the full belief-shift pass, see clinic-ad-launch. |
| `ad-creative-brief` | When the user wants to turn written ad copy into an actual visual layout a designer, AI image
  tool, or video editor can build from. Also use when they say "creative brief," "what should the
  ad look like," "static ad template," "design brief for ads," or "creative matrix." Needs angles
  and copy first. For the copy itself, see ad-angles-and-copy. For sizing, pre-flight and going
  live, see ad-launch. |
| `ad-launch` | When the user wants to build and go live with a paid ad campaign (Meta, Google, TikTok,
  or similar) from finished creative and copy. Also use when they say "launch the ads," "set up
  the campaign," "build the ad sets," "go live," or "pre-flight the ads." Always builds paused and
  requires a human approval gate before anything spends real money. For the research and copy that
  feed this, see ad-research, ad-angles-and-copy, and ad-creative-brief. For running a live
  account afterward, see ad-account-audit. For a clinic's version of this with belief-shift and
  awareness-audit gates, see clinic-ad-launch. |
| `ad-policy-check` | When the user wants to check ad copy against platform advertising policy before it launches or
  after it was disapproved. Also use when they say "will this ad get approved," "check this
  against Meta's policy," "ad policy check," "why was my ad rejected," or "is this claim allowed."
  Covers Meta's special ad categories and personal-attribute rules plus general health and
  financial claim risk; for the deeper health-specific claims gate (FDA wording, before/after,
  testimonials, PHI), see health-claims-check. For the copy this checks, see ad-angles-and-copy. |
| `ad-research` | When the user wants to research paid ads before writing or launching any: pull competitor ads
  from the Meta Ad Library, read their own account history, and collect customer language, so the
  ad copy comes from evidence instead of guessing. Also use when they say "research our ads",
  "what's working in this category", "competitor ads", "ad library research", "find winning
  angles", or "what should our ads say." For turning research into angles and copy, see
  ad-angles-and-copy. For a live-account read instead of pre-launch research, see
  ad-account-audit. For a clinic running this as a structured multi-day launch, see
  clinic-ad-launch. |
| `ai-search-visibility` | When the user wants their business recommended by ChatGPT, Perplexity, or Google AI answers, or wants to audit a page's readiness to be cited by an AI search system. |
| `carousel-writer` | When the user wants a full Instagram/LinkedIn carousel written slide by slide, or wants an existing carousel draft checked for weak slides. |
| `content-pillars` | When the user wants to decide what to post about, build a content strategy, fix a feed that feels random, or answer 'what should I talk about this week'. |
| `content-repurposing` | When the user has one piece of content (a long video, a podcast, a blog post, a webinar) and wants it turned into a batch of shorter pieces across platforms. |
| `google-ads` | When a service business (a clinic, a trade, a local professional, an agency) wants to research,
  build, or launch a Google Ads search campaign or a Local Services Ads profile. Also use when
  they say "Google Ads," "search ads," "Local Services Ads," "LSA," "run search campaigns," or
  "why is my Google Ads account not converting." Always builds paused and requires a human
  approval gate before anything spends real money. For the Meta/paid-social version of research,
  copy, and launch, see ad-research, ad-angles-and-copy, ad-creative-brief, and ad-launch. For the
  tracking setup this depends on, see tracking-and-attribution. For running a live account
  afterward, see ad-account-audit's method, applied to Google Ads's own metrics. |
| `hook-writer` | When the user wants an opening line for a post, video, carousel, headline, or subject line, or wants an existing opener critiqued. |
| `local-seo-gbp` | When the user wants to set up or improve their Google Business Profile, rank higher in the local map pack, or build local landing pages for a service area. |
| `meta-launcher` | When the user wants an agent to build a Facebook or Instagram ad campaign directly in their own
  Meta ad account through the Marketing API: campaign, ad sets, creatives and ads, all paused, then
  switched on only after they approve. Also use when they say "launch my Meta ads," "build the
  campaign in Ads Manager for me," "set up a Facebook ad test," "push these ads live," or "meta
  launcher." Works for any business; health practices get a compliance briefing first. For the
  launch plan and pre-flight method this executes, see ad-launch. For reading results afterward,
  see meta-report. |
| `meta-report` | When the user wants a performance report on their Facebook and Instagram ads pulled straight
  from their own Meta ad account: what is working, what is wasting money, and the exact changes to
  make, each tied to an ad ID and a dollar amount. Also use when they say "how are my ads doing,"
  "weekly Meta report," "ad performance report," "where is my ad money going," or "meta report."
  Works for any business; health practices get a privacy-safe version. For deciding and applying
  scale, hold, refresh or kill moves, see ad-account-audit. For building the campaign, see
  meta-launcher. |
| `newsletter` | When the user wants a full email newsletter issue written: subject line, body, and one CTA. |
| `outlier-research` | When the user wants to find proven content formats to copy the structure of, analyze a competitor's or their own top-performing posts, or answer 'what's working right now'. |
| `seo-article` | When the user wants a full blog article written to rank in search and read as human, not AI-generated. |
| `short-form-script` | When the user wants a talking-head video script, a batch of hooks to film against one body, or wants an existing script checked for AI slop and stolen wording. |
| `youtube-video-plan` | When the user wants to plan a full YouTube video before filming: title, thumbnail concept, hook, outline, and retention plan. |

### Leads

| Skill | Purpose |
|---|---|
| `comment-to-dm` | When the user wants to turn Instagram or Facebook comments into leads, set up a keyword that triggers an automatic DM, or run a 'comment GUIDE below' campaign. |
| `landing-page` | When the user wants to build or fix a landing page for an offer, a lead magnet, an ad campaign, or a 'book now' page. |
| `lead-magnet` | When the user wants to create a free resource that captures emails or phone numbers, a gated guide, checklist, template, or quiz result. |
| `quiz-funnel` | When the user wants to build a scored quiz or assessment that generates leads, a 'what's holding your business back' type diagnostic, or a results page tied to an email capture. |
| `speed-to-lead` | When the user wants to build or fix what happens in the first hour after a lead comes in: a form submit, a call missed, a DM, a quiz result. |

### Appointments

| Skill | Purpose |
|---|---|
| `ai-setter-guardrails` | When the user wants to build, audit, or harden an AI setter or chatbot that texts, DMs, or chats with leads. |
| `follow-up-sequence` | When the user wants to build or fix the multi-day nurture sequence after a lead comes in, a cold-list reactivation cadence, or a 'why are leads going quiet' problem. |
| `setter-script` | When the user wants to write or fix the conversation a human or AI setter runs to book an appointment: SMS, DM, or chat. |
| `show-rate` | When the user wants to fix a low show-up rate for booked calls or appointments, build a confirmation and reminder sequence, or decide whether to require a deposit or card on file. |
| `voice-note-dms` | When the user wants to add voice notes into a setter conversation, make an AI or human setter sound more like a real person on Instagram or SMS, or decide when a voice note beats a text reply. |

### Closed

| Skill | Purpose |
|---|---|
| `call-grader` | When the user wants a sales call transcript scored, or wants to know what to coach after a call. |
| `objection-handling` | When the user wants response scripts for common sales objections, or wants help with a specific pushback a prospect gave. |
| `proposal-and-payment` | When the user wants to send a proposal, quote or estimate and get paid without friction: the written scope, price, terms, payment options, deposit, and the confirmation after payment. |
| `sales-call-playbook` | When the user wants a structure and talk track for sales calls, discovery calls, consultations or estimates, so more people who show up buy. |

### Fulfillment

| Skill | Purpose |
|---|---|
| `client-assistant` | When the user wants to build or configure an AI assistant their clients or program members can talk to directly: answering FAQs, pointing to resources, tracking progress, or escalating to a human. |
| `client-onboarding` | When the user has just signed a new client or customer and needs to get them set up, or wants a repeatable new-client checklist. |
| `sop-generator` | When the user wants to turn a process they do (or someone on their team does) into a written procedure someone else can follow, or wants to delegate a task cleanly. |

### Retention

| Skill | Purpose |
|---|---|
| `database-reactivation` | When the user wants to reach back out to old leads or past customers who never bought, went cold, or stopped coming back. |
| `membership-design` | When the user wants to design, price, or fix a recurring membership, subscription, or savings-wallet offer for their business. |
| `nurture-cadence` | When the user wants a light, ongoing touch with past customers or engaged-but-not-ready leads between purchases, so the relationship doesn't go cold from neglect. |
| `repeat-purchase` | When the user wants more past buyers to come back and buy or book again, without building a formal membership. |

### Referrals

| Skill | Purpose |
|---|---|
| `case-study` | When the user wants to write up a client or customer result as a case study, success story, or testimonial piece. |
| `referral-program` | When the user wants to design or improve a referral program to get existing customers to bring in new ones. |
| `review-engine` | When the user wants to get more reviews, build a review-request system, or respond to reviews (good or bad). |

### Operate

| Skill | Purpose |
|---|---|
| `competitor-watch` | When the user wants to track what competitors are doing: pricing, offers, content, ads, or positioning changes. |
| `marketing-loop` | When the user wants to run a marketing skill or task on a recurring schedule instead of doing it manually each time. |
| `marketing-scoreboard` | When the user wants a weekly numbers sheet for their marketing and sales, or wants to know which part of their funnel is the real problem. |
| `morning-brief` | When the user wants to set the day's priorities quickly, first thing in the morning. |
| `tracking-and-attribution` | When the user needs to set up or fix how they know where a lead or booking came from: UTMs, call tracking, form source capture, CRM source fields, pixel and Conversions API basics, or 'how did you hear about us' tracking. |
| `weekly-review` | When the user wants a structured weekly look-back on their marketing and business, or wants help deciding on a specific business decision. |

### Clinic pack

| Skill | Purpose |
|---|---|
| `clinic-ad-launch` | When a med spa, aesthetic clinic, IV bar, or other patient-facing health practice wants to run a
  full ad launch, start to finish, with the extra rigor a health business needs. Also use when
  they say "launch ads for the clinic," "med spa ad campaign," "clinic ad launch," or "run the
  four-day ad launch." Ports the method from the Clinic Ad Launch Playbook
  (https://github.com/drleadflow/clinic-ad-launch-playbook, MIT) for the render tooling and the
  full phase templates. For the general, non-clinic version of each phase, see ad-research,
  ad-angles-and-copy, ad-creative-brief, ad-launch. For the claims gate this leans on constantly,
  see health-claims-check. |
| `clinic-offers` | When a med spa, aesthetic clinic, or health practice wants to design an offer for a campaign or
  a front-desk promotion without discounting the core treatment. Also use when they say "build an
  offer," "what should we bundle," "clinic promotion," "offer for the new patient special," or
  "value stack." For the general, non-clinic offer rules, see offer-builder (core pack). For the
  claims check every offer line must pass, see health-claims-check. |
| `consult-show-rate` | When a med spa or clinic wants to raise the percentage of booked consults or visits that
  show up. Also use when they say "no-shows," "show rate," "consult show rate," "people
  book and don't come in," or "reduce cancellations." Deposit and reminder mechanics, not ad copy.
  For the offer design that this booking flows from, see clinic-offers. For win-back of people who
  already missed or never booked, see patient-reactivation. |
| `health-claims-check` | When any health, wellness, med spa, or aesthetic claim is about to go into an ad, landing page,
  or patient message, run this check first. Also use when they say "is this claim allowed," "check
  this for FDA wording," "compliance check," "can we say this," or "health claims review." For
  the platform-policy side of this (Meta/Google ad standards), see ad-policy-check; this skill
  covers the stricter medical, legal, and privacy layer underneath it. For a clinic's full launch
  sequence, see clinic-ad-launch. |
| `patient-reactivation` | When a clinic wants to reach back out to patients or leads who never booked, went quiet, or
  haven't been in for a while. Also use when they say "database reactivation," "win-back
  campaign," "reach out to old leads," "work the database," or "who should we follow up with."
  This is the clinic delta on top of database-reactivation (core pack): run that skill's method
  first, then apply the PHI, consent, and claims rules here before anything about a patient goes
  out. For the booking mechanics this feeds into, see consult-show-rate. |

<!-- SKILLS:END -->

## Running Meta ads with an agent

`meta-launcher` and `meta-report` here cover building and reading a Meta campaign. The full kit, 13 skills from connecting the ad account (Pipeboard or the direct API) through tracking, audiences, creative, policy checks, split tests and the weekly optimize loop, lives in its own repo: [drleadflow/meta-ads-skills](https://github.com/drleadflow/meta-ads-skills).

## Rules every skill follows

- Never invent a number, result, testimonial or client name. Unproven claims are left as a visible placeholder instead.
- Draft, then a human approves, then send. Nothing goes out in a silent bulk send.
- Anything that spends money states a daily cap and a stop rule before it goes live.
- Health, money, legal and before/after claims get checked against platform policy and, for health practices, against health-claims-check.

See `AGENTS.md` for the full contract.

## Credit


## Want this built with you?

If you'd rather have this running in your business than running it yourself, the AI CEO Lab community is where that happens: [Join the community](https://www.skool.com/aiceolab).
