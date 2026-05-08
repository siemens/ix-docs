# Dates

> Accurate dates and times are essential in industrial settings, serving as the backbone for effective scheduling, seamless coordination, and overall efficiency. Deciding on the right format to convey this information is challenging due to varying guidelines across different regions and industries.

# Dates

## General rules

Use the ISO 8601 date and time format standards when backend localization is not possible.

- 2025-04-08 (April 8, 2025)
- 14:30:00 (24-hour format)

- 2025/04/08
- 2:30 PM

Add tooltips or in-line text to support users and clarify which format is being used.

- YYYY-MM-DD
- 24-hour format
- Times are formatted in 24-hour format as HH:MM. For example, 2:30 PM is written as 14:30.
- Dates and times include time zones. For example, April 8, 2025, at 2:30 PM in Berlin is written as 2025-04-08T14:30:00+02:00.

Avoid adding unnecessary punctuation to abbreviated dates.

- Jan

- Jan.

## Dates

Write out full dates using commas to separate elements within longer texts and paragraphs.

- Monday, January 12, 2025

- Monday: January 12th: 2025

Write out dates with the abbreviated form using dashes (hyphens) instead of slashes for better readability.

- Dec-26-2025
- Apr-09-2025

- Apr/09/2025
- Apr 09/2025

Write dates in tables using abbreviated months to avoid confusion and the need for further tooltips or explanation.

- Apr-09

- 04-09

Avoid using "st" (as in 1st) or "th" (as in 5th) for a cleaner user interface.

- Monday, January 12, 2025

- Monday, January 12th, 2025

## Days

Start all days with a capital letter. Use three-letter abbreviations without punctuation when there isn’t enough space.

- Monday, Tuesday, Wednesday, etc.
- Mon

- Mon.

## Weeks

Avoid calendar weeks (CW) whenever possible as these are very specific to certain regions.

- Week 15 (April 7 – April 13, 2025)

- CW 15 (15th week of the year)
- CW 15/2025 (15th calendar week year 2025)
- Calendar week 05 in year 2025

## Months

Start all months with a capital letter. Use abbreviations without punctuation when there isn’t enough space.

- January, February, March, etc.
- Jan

- Jan.

## Years

Use the four-digit format and never abbreviate in industrial applications.

- 2023

- ’23

## Decades

Use plural -s when talking about decades.

- 1980s

- 1980’s

## Centuries

Use "th" and "nd" to reference centuries with ordinal numbers (sequencing) without using superscript.

- Welcome to the 21st century of industrial innovation! Our app uses AI to deliver efficiency in your operations.

- Welcome to the 21<sup>st</sup> century of industrial innovation! Our app uses AI to deliver efficiency in your operations.

## Related

- [Date input](../../../components/input-date/index.mdx)
- [Date picker](../../../components/date-picker/index.mdx)
- [Time input](../../../components/input-time/index.mdx)
