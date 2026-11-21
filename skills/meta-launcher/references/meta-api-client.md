# Meta Marketing API client for meta-launcher

A small client with no dependencies (Node 20 or newer, built-in `fetch`). Save it in the owner's
project as `scripts/meta-client.mjs`. It reads everything from env vars, forces `PAUSED` on
every create call, and turns dollar budgets into the cents the API expects.

Field names on the Marketing API change between versions. Before the first run, check each call
below against the current reference for the version in `META_API_VERSION`, and fix the client if a
field was renamed. A failed call prints Meta's own error message; read it before retrying.

```js
// scripts/meta-client.mjs
const { META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, META_API_VERSION } = process.env;
for (const [k, v] of Object.entries({ META_ACCESS_TOKEN, META_AD_ACCOUNT_ID, META_API_VERSION })) {
  if (!v) throw new Error(`Missing env var ${k}`);
}
const ACCOUNT = `act_${META_AD_ACCOUNT_ID.replace(/^act_/, '')}`;
const BASE = `https://graph.facebook.com/${META_API_VERSION}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const cents = (dollars) => String(Math.round(Number(dollars) * 100));

async function request(path, params = {}, method = 'POST') {
  const url = new URL(`${BASE}/${path}`);
  const body = new URLSearchParams({ access_token: META_ACCESS_TOKEN });
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    const value = typeof v === 'object' ? JSON.stringify(v) : String(v);
    if (method === 'GET') url.searchParams.set(k, value);
    else body.set(k, value);
  }
  if (method === 'GET') url.searchParams.set('access_token', META_ACCESS_TOKEN);
  const res = await fetch(url, method === 'GET' ? {} : { method, body });
  const json = await res.json();
  if (json.error) throw new Error(`Meta API ${path}: ${json.error.message}`);
  await sleep(2000); // stay well under rate limits between writes
  return json;
}

// Campaign. Leave dailyBudget out to use ad set budgets (the default for tests).
export const createCampaign = ({ name, objective, specialAdCategories = [], dailyBudget }) =>
  request(`${ACCOUNT}/campaigns`, {
    name,
    objective,
    status: 'PAUSED',
    special_ad_categories: specialAdCategories,
    daily_budget: dailyBudget ? cents(dailyBudget) : undefined,
    is_adset_budget_sharing_enabled: dailyBudget ? undefined : false,
  });

// Ad set. promotedObject is { pixel_id, custom_event_type } or { pixel_id, custom_conversion_id }.
export const createAdSet = ({ campaignId, name, dailyBudget, targeting, promotedObject,
  optimizationGoal = 'OFFSITE_CONVERSIONS' }) =>
  request(`${ACCOUNT}/adsets`, {
    campaign_id: campaignId,
    name,
    status: 'PAUSED',
    daily_budget: dailyBudget ? cents(dailyBudget) : undefined,
    billing_event: 'IMPRESSIONS',
    optimization_goal: optimizationGoal,
    bid_strategy: 'LOWEST_COST_WITHOUT_CAP',
    targeting,
    promoted_object: promotedObject,
  });

// Image: pass base64 bytes, get back images[filename].hash.
export const uploadImage = ({ filename, base64 }) =>
  request(`${ACCOUNT}/adimages`, { filename, bytes: base64 });

// Video: pass a public URL to the file, get back an id. Wait until it finishes processing.
export const uploadVideo = ({ name, fileUrl }) =>
  request(`${ACCOUNT}/advideos`, { name, file_url: fileUrl });

export const createCreative = ({ name, objectStorySpec, urlTags }) =>
  request(`${ACCOUNT}/adcreatives`, { name, object_story_spec: objectStorySpec, url_tags: urlTags });

export const createAd = ({ adSetId, name, creativeId }) =>
  request(`${ACCOUNT}/ads`, { adset_id: adSetId, name, creative: { creative_id: creativeId },
    status: 'PAUSED' });

// Read back any entity to confirm its status before and after switching on.
export const getStatus = (id) => request(id, { fields: 'name,status,effective_status' }, 'GET');

// Only call after the owner's explicit go for this launch.
export const switchOn = async (id) => {
  const out = await request(id, { status: 'ACTIVE' });
  await sleep(3000);
  return out;
};

export const searchInterests = (q) => request('search', { type: 'adinterest', q }, 'GET');
export const listAudiences = () =>
  request(`${ACCOUNT}/customaudiences`, { fields: 'id,name,subtype,approximate_count_lower_bound' },
    'GET');
```

## A creative's object story spec, for a single image ad

```js
{
  page_id: process.env.META_PAGE_ID,
  link_data: {
    link: 'https://example.com/offer',     // the landing page, no UTMs here (they go in urlTags)
    message: 'Primary text',
    name: 'Headline',
    description: 'Description',
    image_hash: '<hash from uploadImage>',
    call_to_action: { type: 'LEARN_MORE', value: { link: 'https://example.com/offer' } },
  },
}
```

## Targeting, a starting point

```js
{
  geo_locations: { countries: ['US'] },
  age_min: 18,
  targeting_automation: { advantage_audience: 1 }, // broad; set 0 to keep targeting strict
}
```

A health or cosmetic offer sets `age_min` to 18 at least, and to 21 or higher where state law
or the owner's own policy requires it. A special ad category limits age, gender and location
options; Meta rejects targeting the category does not allow.
