# Meta Insights client for meta-report

Read only. No dependencies (Node 20 or newer). Save it in the owner's project as
`scripts/meta-report-client.mjs`. A token with `ads_read` is enough.

Field and breakdown names change between Marketing API versions. Check them against the
current Insights reference for the version in `META_API_VERSION` before the first run.

```js
// scripts/meta-report-client.mjs
const { META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, META_API_VERSION } = process.env;
for (const [k, v] of Object.entries({ META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, META_API_VERSION })) {
  if (!v) throw new Error(`Missing env var ${k}`);
}
const ACCOUNT = `act_${META_AD_ACCOUNT_ID.replace(/^act_/, '')}`;
const BASE = `https://graph.facebook.com/${META_API_VERSION}`;

const FIELDS = [
  'campaign_id', 'campaign_name', 'adset_id', 'adset_name', 'ad_id', 'ad_name',
  'spend', 'impressions', 'reach', 'frequency', 'inline_link_clicks', 'inline_link_click_ctr',
  'actions', 'action_values', 'cost_per_action_type',
].join(',');

async function insights(params) {
  const rows = [];
  const url = new URL(`${BASE}/${ACCOUNT}/insights`);
  url.searchParams.set('access_token', META_ACCESS_TOKEN);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
  }
  let next = url.toString();
  while (next) {
    const json = await (await fetch(next)).json();
    if (json.error) throw new Error(`Meta Insights: ${json.error.message}`);
    rows.push(...json.data);
    next = json.paging?.next; // follow every page, or big accounts come back short
  }
  return rows;
}

const range = (since, until) => ({ time_range: { since, until } });

export const byLevel = (level, since, until) =>
  insights({ level, fields: FIELDS, ...range(since, until), limit: 500 });

// breakdowns: 'publisher_platform,platform_position' | 'device_platform' | 'age,gender'
export const byBreakdown = (breakdowns, since, until) =>
  insights({ level: 'account', breakdowns, fields: 'spend,actions,action_values',
    ...range(since, until) });

// Pull one conversion out of an actions list by its exact action type,
// for example 'offsite_conversion.fb_pixel_lead' or 'offsite_conversion.custom.<id>'.
export const countOf = (list = [], actionType) =>
  Number(list.find((a) => a.action_type === actionType)?.value ?? 0);
```

## Using it

```js
import { byLevel, byBreakdown, countOf } from './scripts/meta-report-client.mjs';

const RESULT = process.env.META_RESULT_ACTION_TYPE; // the conversion the owner chose
const ads = await byLevel('ad', '2026-11-01', '2026-11-07');
const table = ads.map((r) => {
  const results = countOf(r.actions, RESULT);
  const spend = Number(r.spend);
  return { id: r.ad_id, name: r.ad_name, spend, results,
    costPerResult: results ? spend / results : null,
    value: countOf(r.action_values, RESULT), frequency: Number(r.frequency) };
});
```

Run the same pulls for the prior window and compare. Dates are in the ad account's time zone.
