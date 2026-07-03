---
sidebar_position: 2
sidebar_label: Grammar
title: Grammar
doc-type: banner
component-tabs:
  - ""
no_single_tab: true
description: Explore the most important grammar points in UX writing for industrial applications.
---
# 

## Use simple verb forms

Verbs can take many forms (upload, uploading, uploaded, has been uploaded, is being uploaded). To save space and increase clarity, use simple verb forms in the present or the past.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- While the software updates, work in offline mode.
- load / loaded
- File uploaded.

</div>
</div>

<div className="donts" markdown="true">

- While the software is being updated, continue working in offline mode.
- was loading / has been loaded
- File has been uploaded.

</div>
</div>

## Use active voice

We want our users to immediately understand who is doing what in our applications, e.g. the system or another user. Using active voice (instead of passive voice) puts the user in control, uses fewer words and space, and makes it clear who is responsible for actions.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Open the configuration file.
- The system saves your changes automatically.
- The system detected a network error.
- Enter your credentials to continue.
- Select Start to begin calibration.

</div>
</div>

<div className="donts" markdown="true">

- The configuration file is opened.
- Your changes are saved automatically.
- A network error was detected.
- Credentials must be entered to continue.
- Calibration will be started when Start is selected.

</div>
</div>

## Use passive voice thoughtfully

While active voice is preferred within UI text, there are specific situations where passive voice is more appropriate.

Use passive voice when the action is more important for the user, or when you want to make system errors or actions less personal. Typically, passive voice is used for system errors or unknown or unexpected events, and is formed using “to be” + past participle (was created, is processed). It is also strategically used to avoid a blaming tone towards users, such as: “The report could not be saved.” instead of “You failed to save the report.”

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- The session was ended due to inactivity.
- The connection was lost due to network timeout.
- The system will be unavailable during the update.
- Data could not be saved to the database.
- This field is required to continue.
- The payment could not be processed.

</div>
</div>

<div className="donts" markdown="true">

- You were logged out because you were inactive.
- You lost the connection because your network timed out.
- We will make the system unavailable during the update.
- You failed to save the data to the database.
- You forgot to fill in this field.
- You entered invalid payment information.

</div>
</div>

## Use imperative (command) mood

Use the imperative mood (command form) for buttons and action-oriented UI elements. This creates clear, direct instructions by using the base verb form without a subject, reducing cognitive load and speeding up user actions. The imperative is typically used for button labels, calls-to-action and instructional text.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Save changes
- Delete items
- Enter shipping address

</div>
</div>

<div className="donts" markdown="true">

- To save changes, select Save
- Click here to delete items
- You should enter your shipping address

</div>
</div>

## Use past and future tenses clearly

There are times when we need to specify something happened in the past or explain future actions and consequences. Use simple verb forms and make it clear what time period you’re referring to. We use future tense for reminders, scheduled actions and warnings, and past tense for notifications and toast or confirmation messages.

### Reminders

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Your trial will expire in 3 days.
- Maintenance will begin at 14:00 tomorrow.
- Backup will run tonight at 23:00.

</div>
</div>

### Scheduled actions

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Reports will be sent on April 1.
- Your license will renew next month.
- Data will sync in 5 minutes.
- Your report will be ready by 17:00 today.

</div>
</div>

### Warnings

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Unsaved changes will be lost.
- This action will delete all data.
- You will lose access after logout.

</div>
</div>

### Notifications

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Your password changed 2 hours ago.
- Account created on March 15.
- Download completed at 09:30.

</div>
</div>

### Toast and confirmation messages

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Settings saved
- 12 files exported
- Changes published
- Profile updated
- Team member assigned

</div>
</div>

## Articles (a / an / the)

Articles help users understand whether you're referring to something specific (the) or general (a / an). They guide users to the correct element or action when it may be unclear.

Use articles in instructional texts, messages and explanations.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- The system detected an error in the configuration.
- Enter the unique project protection password in the admin profile page.
- Select a file from your computer to upload.
- Choose a network from the list.

</div>
</div>

<div className="donts" markdown="true">

- System detected error in configuration.
- Enter unique project protection password in admin profile page.
- Select the run.csv file from your computer to upload.
- Choose the guest network from the list.

</div>
</div>

Omit articles in short UI labels, such as buttons, titles and field names, where the context is clear.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Click Start to begin.
- Open Settings menu.

</div>
</div>

<div className="donts" markdown="true">

- Click the Start button to begin.
- Open the Settings menu.

</div>
</div>

## Singular vs. plural

Use grammatically correct singular and plural forms to match the quantity being described when technically feasible. When not, use the plural without any additional punctuation.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- 1 file selected
- 5 users active
- Processing 1 request...
- Assets: 0
- Hazards: 1

</div>
</div>

<div className="donts" markdown="true">

- 1 files selected
- 5 user active
- Processing 1 requests...
- Asset(s): 0
- Hazard: 5

</div>
</div>

Use "No" for empty states instead of “0”.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- No items found
- No devices connected
- No results available

</div>
</div>

<div className="donts" markdown="true">

- 0 items found
- 0 devices connected
- 0 results available

</div>
</div>

## Conditional statements (if / when)

Use "if" for uncertain conditions or user choices, and "when" for inevitable or expected events. This distinction helps users understand whether something might happen or will definitely happen when explaining system behavior and consequences.

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- If you close this window, unsaved changes will be lost.
- When the download completes, you'll receive a notification.
- When the system restarts, your session will end.
- If you need help, contact support.
- When calibration finishes, the device will be ready.
- If you delete this file, it cannot be recovered.

</div>
</div>

<div className="donts" markdown="true">

- When you close this window, unsaved changes will be lost.
- If the download completes, you'll receive a notification.
- If the system restarts, your session will end.
- When you need help, contact support.
- If calibration finishes, the device will be ready.
- When you delete this file, it cannot be recovered.

</div>
</div>

## Related

- [Toast messages](../messaging/toast-messages.mdx)
- [Error messages](../messaging/error-messages.mdx)
- [Warning messages](../messaging/warning-messages.mdx)
- [License management](../menu-functions-and-ui-labels/license-management.md)
- [Localization](#)