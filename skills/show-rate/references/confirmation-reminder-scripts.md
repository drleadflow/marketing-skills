# Confirmation and reminder scripts

Fill-in drafts for the sequence in SKILL.md step 2. The no-show recovery script lives in `no-show-script.md` in this same folder. Fictional businesses: Clearhead Coaching, Ridgeline HVAC, Willow Aesthetics.

## Clearhead Coaching (business coach)

**Immediately on booking, SMS**
> You're confirmed for your Offer Audit on {full_date} at {time} {timezone}. I'll send the video link the morning of. One thing to have ready: your current price and what's included.

**24 hours before, email**
> Subject: tomorrow at {time}, here's what to have ready
>
> Quick reminder: your Offer Audit is tomorrow, {full_date} at {time} {timezone}. Link: {meeting_link}. Have your current pricing on hand, that's the only prep needed.

**3 hours before, SMS**
> Looking forward to our call at {time} today! Here's the link: {meeting_link}

**1 hour before, SMS**
> See you in about an hour! Quick reminder: grab your current pricing before we start.

## Ridgeline HVAC (home services)

**Immediately on booking, SMS**
> Confirmed: diagnostic visit at {address} on {full_date}, arrival window {time_window} {timezone}. We'll text when the tech is on the way.

**24 hours before, email**
> Subject: your visit tomorrow, {time_window}
>
> Reminder: we'll be at {address} tomorrow, {full_date}, between {time_window}. Please make sure the unit is accessible (cleared pathway, pets secured).

**Morning of, SMS**
> Good morning, {first_name}! Your tech is scheduled for {time_window} today. We'll text when they're about 30 minutes out.

**On the way, SMS**
> {tech_name} is on the way, about 30 minutes out.

## Willow Aesthetics (med spa)

**Immediately on booking, SMS**
> Your consult is confirmed for {full_date} at {time} {timezone} with {provider_name}. Please arrive 10 minutes early for a quick intake form.

**24 hours before, email**
> Subject: your consult tomorrow at {time}
>
> Reminder: your consult with {provider_name} is tomorrow, {full_date} at {time} {timezone}. This is a consultation only, no treatment is scheduled or required. Reply here with any questions.

**3 hours before, SMS**
> See you at {time} today for your consult! Reply here if anything's changed.

**1 hour before, SMS**
> Just a reminder, your consult is in about an hour, {provider_name} is looking forward to it.

## Rules these scripts follow

- Every confirmation pulls the full date, time, and timezone from the actual accepted booking record (see SKILL.md step 1), never a weekday name alone.
- Sent from a channel someone monitors for replies.
- None of these claims a payment is recorded unless it's been verified in the system.
