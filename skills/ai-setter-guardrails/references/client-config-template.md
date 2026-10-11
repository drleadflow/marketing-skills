# Per-client config template

Copy this per client. Anything left as `ASK_CLIENT` blocks that item from going live; the setter must never guess an offer, price, secondary CTA, or DQ rule. Three fictional examples follow the blank template.

## Blank template

```yaml
client_name: ASK_CLIENT
vertical: ASK_CLIENT                 # changes which compliance rules apply
ops_channel: ASK_CLIENT              # where the daily report and human queue post
escalation_channel: ASK_CLIENT       # distress/crisis escalation, can differ from ops_channel

identity:
  persona_name: ASK_CLIENT           # a named assistant persona, e.g. "Willow's booking assistant"
  presents_as: "assistant"           # always "assistant" for an AI setter; "owner" is a human-setter-only option, never set it here
  discloses_as_ai_if_asked: true     # always true, never configurable; see ai-setter-guardrails step 4a
  tech_stack_deny_script: true       # always true, never confirm the underlying vendor/tool if asked (separate from AI disclosure, which is never denied)

voice:
  sample_messages: []                # 10 to 20 of the client's real replies, verbatim
  register_notes: ASK_CLIENT

offer:
  primary_pitch: ASK_CLIENT          # one paragraph, in the client's own words
  booking_link: ASK_CLIENT           # a fixed constant, the model never generates a URL
  top_objections: []                 # 3 items, in the audience's own words
  secondary_offer:
    exists: ASK_CLIENT               # true/false; "none" is a valid, final answer
    price: ASK_CLIENT
    link: ASK_CLIENT

qualification:
  qualified_criteria: ASK_CLIENT
  auto_dq_rules: []                  # explicit and testable
  human_allowlist: []

compliance:
  vertical_specific_rules: []
  never_say: []                      # pricing, guarantees, outcomes the setter must never state
  crisis_script: ASK_CLIENT

crm_state_signals:
  do_not_contact_tags: []
  lifecycle_tags: []                 # booked / showed / no_show / cancelled equivalents

send_window: ASK_CLIENT              # e.g. "09:00 to 18:00 local time"
daily_send_cap: ASK_CLIENT
```

## Example: fictional business coach, "Clearhead Coaching"

- Persona: "Clearhead's booking assistant," always disclosed as an assistant, never as the owner. Discloses being an AI if asked.
- Primary pitch: a free 20-minute offer audit for solo service providers stuck under $10k months.
- Booking link: a fixed Calendly constant.
- Secondary offer: none; a non-fit gets a graceful exit.
- Auto-DQ: already a client, outside North America, agency owners (out of audience).
- Never say: any specific income result; references a general proof-ledger range only.

## Example: fictional home-services company, "Ridgeline HVAC"

- Persona: "Ridgeline's scheduling assistant," presents as the office, never as a named owner. Discloses being an AI if asked.
- Primary pitch: a same-week diagnostic visit for a no-cool or no-heat call.
- Booking link: fixed scheduling constant tied to real technician availability.
- Secondary offer: a maintenance plan, for anyone who declines the repair but has a working unit.
- Auto-DQ: outside the service radius, commercial accounts (different pricing track).
- Crisis script: not typically applicable to this vertical, but a safety hazard mention (gas smell, smoke) is an immediate human escalation, not a booking conversation.

## Example: fictional med spa, "Willow Aesthetics"

- Persona: "Willow's booking assistant," not a named front-desk staff member, so there's no real person's identity to misrepresent. Discloses being an AI if asked.
- Primary pitch: an introductory consult visit at one stated price, treatment separate and not guaranteed.
- Booking link: fixed constant, tied to the live calendar.
- Secondary offer: none advertised; never discounted in chat.
- Compliance: no treatment claims, no before/after description in chat, no collection of medical history in the DM thread; route any clinical question to the provider.
- Never say: any specific result, any comparison to a named competitor's price, any guarantee of outcome.
