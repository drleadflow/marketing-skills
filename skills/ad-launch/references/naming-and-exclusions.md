# Opaque naming and exclusion alternatives, worked example

## Opaque offer codes

Fictional business "Cedarbrook Family Chiropractic" running two offers at once: a new-patient
exam and a sports-injury assessment.

Wrong (treatment name lands in every UTM and pixel event via `utm_content={{ad.name}}`):
```
offer-card-newpatientexam-maria-newpatientexam-0314
```

Right (opaque code, private lookup kept outside the repo and outside the ad platform):
```
offer-card-newpatientexam-maria-off01-0314
offer-card-sportsinjury-james-off02-0314
```
Private lookup (kept in the practice's own system, never in the ad account or this repo):
`off01` = new-patient exam, `off02` = sports-injury assessment.

## Exclusion alternatives instead of uploading a patient list

Fictional scenario: Cedarbrook wants to exclude existing patients from a prospecting campaign.

- **Wrong**: export the patient list from the practice management system and upload it to the ad
  platform as a custom audience. This is a PHI disclosure to a platform that hasn't signed a BAA.
- **Right, option 1**: suppress at the CRM/practice-management level before the lead ever reaches
  the ad platform (don't resend lead-gen forms to contacts already tagged "active patient").
- **Right, option 2**: use a server-side event the practice's own system controls (fire a "do not
  re-target" signal from the appointment system) rather than a list upload.
- **Right, option 3**: if a list-based audience is needed, get a healthcare attorney's
  sign-off on a specific, reviewed data-sharing arrangement with the platform first; don't build
  around an assumption that an upload of "just contact info" is automatically fine.
