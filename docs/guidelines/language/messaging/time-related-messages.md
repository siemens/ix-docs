# Time-related messages

> Time-related messages help users understand how long processes take. Use clear, specific time frames and pair them with actionable guidance to support fast, informed user decisions whilst managing user expectations.

#

## Rules for known time frames

Use a specific time or time frame whenever possible.

  
    - System update on Monday, August 22, 2025: 06:00–08:00
  
  
    - Upcoming system update: 22 August
  

Use the user’s time zone when providing any kind of time indication.

  
    - Failed to synchronize data. Synchronized at 12:45 BST. - System
    maintenance scheduled for Wednesday, August 22: 02:00–04:00 BST
  

When necessary, add time zones with the UTC in brackets.

  
    - Failed to synchronize data. Last successful sync: 12:45 BST (UTC+1) -
    System maintenance scheduled for Wednesday, August 22, 02:00–04:00 BST
    (UTC+1).
  

Avoid generic time-related terms like later, soon, sometime, etc.

  
    - Update starts Tuesday, October 1, 2026: 02:00–04:00
  
  
    - Update starts soon. - Update starts later today. - Update takes a few
    moments. - Update takes a while.
  

Use "will" to indicate certainty and avoid "may" or "might" which sound uncertain.

  
    - Update will take a few minutes.
  
  
    - Update may take a few minutes. - Update might take a few minutes.
  

Avoid adding messages when the process takes less than ten seconds.

  
    - This process takes a few seconds.
  

Use countdowns to alert users to time-sensitive information.

  
    - Session expiring in 04:25 minutes. - Automatic logout in 03:45 minutes. -
    Meeting starts in 5 minutes.
  
  
    - Migration starts in 1 hour.
  

Use consistent wording in the UI and add specific volumes with progress indicators.

  
    - Data volume: 45/300 MB - Saving data… 50 of 300 MB saved - System update:
    45% complete
  

## Rules for unknown time frames

Use a realistic time range or an estimated time window if possible.

  
    - The system update can take a few hours. - The update will finish within
    the next 60 minutes.
  

Be transparent and use passive voice when you need to be unspecific.

  
    - Due to the size of the data migration, it is estimated to take between 4-6
    hours. - Data is being fetched from multiple sources, and the completion
    time varies depending on system conditions.
  
  
    - Due to the size of the migration, we have no idea when it will finish.
  

## Rules for expectations and consequences

Inform users whether or not they can continue working during a process.

  
    - The application will not be available during the update. We’ll notify you
    when it’s ready. - The application is not available during the update. - You
    can continue working until the update begins. - Installation files are
    downloaded in the background.
  

Clearly communicate any consequences related to user actions (or inaction).

  
    - You can only postpone this update once. - An update is scheduled to
    automatically install tonight. - The installation will be updated tonight. -
    Update must be installed before Friday, September 12, 2026. - The device
    will restart during the update.
  

Provide clear, actionable choices for next steps and user autonomy.

  
    - Postpone - Remind me tomorrow - Update now - More information - Stop -
    Pause
  

## Dos and Don’ts

- Do add user actions when possible, e.g. buttons or links
- Don’t leave users wondering if the app is stuck or broken
- Don’t guess unknown time frames

## Related

- [Progress updates](./progress-updates.mdx)
- [Time and time zones](../formatting/timezones.mdx)
