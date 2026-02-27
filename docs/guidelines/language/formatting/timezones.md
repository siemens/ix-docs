# Time and time zones

> Time and time-related guidelines help prevent misunderstandings and errors, especially in global operations where different time zones are involved. By standardizing how times and time zones are presented, users can easily interpret and coordinate schedules, leading to more efficient and reliable operations.

# Time and Time zones

## Time

Use the 24-hour clock system (the ISO 8601 time standards) when backend localization is not possible.

- 11:00
- 23:00

- 11am
- 11PM

Use colons (:) to split times between hours, minutes, and seconds.

- hh:mm:ss

- hh.mm.ss

Use periods (.) to add milliseconds and nanoseconds, not a colon (:) according to ISO standards.

- hh:mm:ss.mms
- hh:mm:ss.sss (ISO 8601 standard)
- 0:00:00.920

- 0:00:00:920

## Time ranges

Use an en (–) dash to represent time ranges and intervals without spacing on either side of the dash.

- Routine maintenance: 08:00–11:00

- Packaging line active: 10:00-18:00

Use "from" and "to" for time ranges with separate text or input fields.

- From: 14:00
- To: 15:00

## Time duration

Use numerals to write about durations with the full or abbreviated time unit (depending on space in the UI).

- Each shift lasts 8 hrs.
- Routine maintenance takes approximately 1 hour 30 minutes.
- Cooling period: 20 minutes

## Time zones

Write "time zone" as two words, not one word "timezone".

- Select time zone

- Select timezone

When writing out the full time zone, add the UTC offset in brackets afterwards.

- British Summer Time (UTC+1)
- Central European Summer Time (UTC+2)
- Eastern European Summer Time (UTC+3)

Use abbreviated time zones with or without the UTC offset within the UI to save space.

- EST
- EST (UTC +3)

Give time zones capital letters for each word.

- Eastern Standard Time

- eastern standard time

Give abbreviated time zones capital letters.

- EST

- est

Avoid punctuation when writing time zones.

- EST

- EST.
- E.S.T.

Add a space between the time and the time zone.

- 15:23 EST

- 15:23EST

Write location and UTC offset in this order: city, country (UTC offset).

- Berlin, Germany (UTC+1)

- (UTC+1) Berlin, Germany

Present multiple time zones clearly by using either "Local time" or "Your local time" for emphasis.

- Meeting time: 2025-04-08 14:00 (Berlin, UTC+01:00)Your local time: 2025-04-08 21:00 (Tokyo, UTC+09:00)
- Support hours (New York): 09:00 - 17:00 (UTC-04:00)Your local time (Sydney): 23:00 - 07:00 (UTC+10:00)
- Deadline (San Francisco): 2025-04-08 17:00 (UTC-07:00)Your Local Time (Berlin): 2025-04-09 02:00 (UTC+01:00)

## Time-related problematic words

Use "current" for active, ongoing states and avoid "actual" when referring to time.

- Current temperature: 72°F

- Actual temperature: 72°F

Use "latest" for the newest updates or versions and "last" for final items in a sequence.

- Latest firmware update: V2.1.5
- Last firmware update before end of life: V2.1.5

Use "recent" for past events that have just happened.

- Recent alerts: 2 warnings

- Recent firmware update: V2.1.5

## Related

- [Dates](./date.mdx)
- [Time picker](../../../components/time-picker/index.mdx)
- [CLDR set of time zones (external link)](https://cldr.unicode.org/translation/time-zones-and-city-names)
