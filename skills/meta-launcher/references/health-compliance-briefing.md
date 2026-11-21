# Compliance briefing for health practices and regulated offers

Walk the owner through each rule in plain words. For each one they pick **Follow** or
**Override**. This is a list of rules to know about, not legal advice. Rules change; check
anything that matters against the source named on the line. Last reviewed November 2026.

Each rule has a type, so the owner knows what an override means:

- **Platform**: Meta enforces it. Overriding usually just means the ad gets rejected, and repeat
  rejections can restrict the ad account. Say that plainly.
- **Law**: a regulator or court enforces it. The owner can override; the risk is theirs. Record
  their reason.
- **Proof needed**: the agent would be the one doing the risky act. Act on an override only with a
  recorded BAA or a lawyer's written sign-off. Otherwise mark it "Override requested, not
  executed" and build it the compliant way.

## Health practices

| # | Rule | Type | If ignored |
|---|---|---|---|
| H1 | **Don't tell the reader they have a condition.** "Tired of your belly fat?" or "Your wrinkles are showing" asserts a personal health attribute. Talk about the treatment or the outcome instead: "A non-surgical option for stubborn fat." | Platform | Ad rejected. The most common rejection for health ads. |
| H2 | **Before and after images.** Meta limits them for weight loss and cosmetic procedures and rejects images that look idealized or shame a body. Same lighting, same angle, a real result, and a "results vary" line. | Platform | Ad rejected or limited reach. |
| H3 | **Every claim needs proof.** No "cure," "permanent," "guaranteed," "painless," or a number that isn't in the proof ledger. The FTC requires competent and reliable evidence for health claims. Run **health-claims-check** on every line. | Law | FTC or state action; Meta also rejects cure and guarantee language. |
| H4 | **Testimonials and reviews.** Real people, real words, typical results or a clear note that results vary. A patient testimonial needs that patient's written authorization. The FTC rule on fake reviews (2024) allows civil penalties for fake or bought reviews. | Law | Civil penalties; a privacy complaint if the patient didn't authorize it. |
| H5 | **Prescription drug and device names.** Ads that name a prescription drug may need Meta's certification (through LegitScript). Don't promote an off-label use. A compounded drug is not FDA-approved; don't call it the same as a branded drug. | Platform and Law | Ad rejected; FDA warning letter for drug claims. |
| H6 | **Prices and financing.** A price must be the real price with the real conditions ("from $X, per session, consult required"). Advertising payment terms can trigger required credit disclosures and Meta's financial products special ad category. See **ad-policy-check**. | Platform and Law | Ad rejected; a consumer-protection complaint. |
| H7 | **Age targeting.** Weight loss and cosmetic procedure ads target 18 and over at least. Some states or treatments need older; check yours. | Platform | Ad rejected. |
| H8 | **Lead forms ask for contact info only.** Name, email, phone and consent. No condition, symptom, medication or treatment history in a Meta lead form or any form a pixel can read, unless a BAA covers that tool. | Law | A HIPAA disclosure if the practice is a covered entity; the FTC Health Breach Notification Rule if it isn't. |
| H9 | **No patient lists uploaded to Meta.** That includes lookalike seeds and "exclude existing patients" lists, even with only name, email and phone. Meta does not sign a BAA. Suppress existing patients in the CRM instead. | Proof needed | A HIPAA disclosure to a third party. |
| H10 | **No treatment or condition names in tracking.** Not in ad names, campaign names, UTMs, URLs or pixel events. `utm_content={{ad.name}}` sends the ad name to every tool that reads the URL. Use an opaque offer code. Keep the pixel off pages where a visitor enters health information. HHS guidance on tracking tools (2022, updated 2024) was narrowed by a court in 2024, but booking and intake pages are still the main risk. | Proof needed | The pattern behind recent hospital pixel settlements. |
| H11 | **Optimization events may be limited.** Meta classifies many health accounts and can block lower-funnel events (lead, purchase, schedule) for optimization. A Conversions API event does not get around it. Check Events Manager, then follow the fallback in **ad-policy-check**. | Platform | The ad set can't optimize toward the event at all. Can't be overridden. |
| H12 | **Your state's rules for medical ads.** Many state medical boards set rules on naming the licensed provider, credential claims like "board certified," and who may perform a treatment. Check your own state board. | Law | A board complaint against the license. |
| H13 | **Texting or calling the leads.** Consent wording, quiet hours and opt-out handling. See **messaging-compliance**. | Law | Per-message damages under telemarketing law. |

## Other regulated offers (any business)

| # | Rule | Type | If ignored |
|---|---|---|---|
| R1 | **Special ad categories.** Loans, credit, insurance and other financial products; housing; jobs; social issues and politics. Declare the category on the campaign. It limits age, gender and location targeting. See **ad-policy-check** for current names. | Platform | Ad rejected; repeated misdeclaring can restrict the account. Can't be overridden. |
| R2 | **Income and results claims.** Coaching, courses and business offers: no "make 10K dollars a month" unless it is typical, and say what typical is. The FTC treats earnings claims as claims that need proof. Meta rejects unrealistic money promises. | Platform and Law | Ad rejected; FTC action for earnings claims. |
| R3 | **Supplements.** Structure and function wording only ("supports energy"), never "treats" or "prevents" a disease, plus the FDA disclaimer where it applies. Health rules H1 to H3 apply too. | Platform and Law | Ad rejected; FDA or FTC warning letter. |

## How to record it

Copy each row the owner sees into the test plan's "Compliance decisions" table with their choice,
their reason for any override, and the date. If an override was not executed for lack of proof,
say so on that row. On the next launch, show last time's table and ask only about rows that
changed or were overridden.
