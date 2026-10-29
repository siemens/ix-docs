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

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>While the software updates, work in offline mode.</li>
    <li>load / loaded</li>
    <li>File uploaded.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>While the software is being updated, continue working in offline mode.</li>
    <li>was loading / has been loaded</li>
    <li>File has been uploaded.</li>
  </ul>
</div>
</div>

## Use active voice

We want our users to immediately understand who is doing what in our applications, e.g. the system or another user. Using active voice (instead of passive voice) puts the user in control, uses fewer words and space, and makes it clear who is responsible for actions.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Open the configuration file.</li>
    <li>The system saves your changes automatically.</li>
    <li>The system detected a network error.</li>
    <li>Enter your credentials to continue.</li>
    <li>Select Start to begin calibration.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>The configuration file is opened.</li>
    <li>Your changes are saved automatically.</li>
    <li>A network error was detected.</li>
    <li>Credentials must be entered to continue.</li>
    <li>Calibration will be started when Start is selected.</li>
  </ul>
</div>
</div>

## Use passive voice thoughtfully

While active voice is preferred within UI text, there are specific situations where passive voice is more appropriate.

Use passive voice when the action is more important for the user, or when you want to make system errors or actions less personal. Typically, passive voice is used for system errors or unknown or unexpected events, and is formed using “to be” + past participle (was created, is processed). It is also strategically used to avoid a blaming tone towards users, such as: “The report could not be saved.” instead of “You failed to save the report.”

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>The session was ended due to inactivity.</li>
    <li>The connection was lost due to network timeout.</li>
    <li>The system will be unavailable during the update.</li>
    <li>Data could not be saved to the database.</li>
    <li>This field is required to continue.</li>
    <li>The payment could not be processed.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>You were logged out because you were inactive.</li>
    <li>You lost the connection because your network timed out.</li>
    <li>We will make the system unavailable during the update.</li>
    <li>You failed to save the data to the database.</li>
    <li>You forgot to fill in this field.</li>
    <li>You entered invalid payment information.</li>
  </ul>
</div>
</div>

## Use imperative (command) mood

Use the imperative mood (command form) for buttons and action-oriented UI elements. This creates clear, direct instructions by using the base verb form without a subject, reducing cognitive load and speeding up user actions. The imperative is typically used for button labels, calls-to-action and instructional text.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Save changes</li>
    <li>Delete items</li>
    <li>Enter shipping address</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>To save changes, select Save</li>
    <li>Click here to delete items</li>
    <li>You should enter your shipping address</li>
  </ul>
</div>
</div>

## Use past and future tenses clearly

There are times when we need to specify something happened in the past or explain future actions and consequences. Use simple verb forms and make it clear what time period you’re referring to. We use future tense for reminders, scheduled actions and warnings, and past tense for notifications and toast or confirmation messages.

### Reminders

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Your trial will expire in 3 days.</li>
    <li>Maintenance will begin at 14:00 tomorrow.</li>
    <li>Backup will run tonight at 23:00.</li>
  </ul>
</div>
</div>

### Scheduled actions

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Reports will be sent on April 1.</li>
    <li>Your license will renew next month.</li>
    <li>Data will sync in 5 minutes.</li>
    <li>Your report will be ready by 17:00 today.</li>
  </ul>
</div>
</div>

### Warnings

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Unsaved changes will be lost.</li>
    <li>This action will delete all data.</li>
    <li>You will lose access after logout.</li>
  </ul>
</div>
</div>

### Notifications

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Your password changed 2 hours ago.</li>
    <li>Account created on March 15.</li>
    <li>Download completed at 09:30.</li>
  </ul>
</div>
</div>

### Toast and confirmation messages

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Settings saved</li>
    <li>12 files exported</li>
    <li>Changes published</li>
    <li>Profile updated</li>
    <li>Team member assigned</li>
  </ul>
</div>
</div>

## Articles (a / an / the)

Articles help users understand whether you're referring to something specific (the) or general (a / an). They guide users to the correct element or action when it may be unclear.

Use articles in instructional texts, messages and explanations.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>The system detected an error in the configuration.</li>
    <li>Enter the unique project protection password in the admin profile page.</li>
    <li>Select a file from your computer to upload.</li>
    <li>Choose a network from the list.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>System detected error in configuration.</li>
    <li>Enter unique project protection password in admin profile page.</li>
    <li>Select the run.csv file from your computer to upload.</li>
    <li>Choose the guest network from the list.</li>
  </ul>
</div>
</div>

Omit articles in short UI labels, such as buttons, titles and field names, where the context is clear.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Click Start to begin.</li>
    <li>Open Settings menu.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click the Start button to begin.</li>
    <li>Open the Settings menu.</li>
  </ul>
</div>
</div>

## Singular vs. plural

Use grammatically correct singular and plural forms to match the quantity being described when technically feasible. When not, use the plural without any additional punctuation.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>1 file selected</li>
    <li>5 users active</li>
    <li>Processing 1 request...</li>
    <li>Assets: 0</li>
    <li>Hazards: 1</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>1 files selected</li>
    <li>5 user active</li>
    <li>Processing 1 requests...</li>
    <li>Asset(s): 0</li>
    <li>Hazard: 5</li>
  </ul>
</div>
</div>

Use "No" for empty states instead of “0”.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>No items found</li>
    <li>No devices connected</li>
    <li>No results available</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>0 items found</li>
    <li>0 devices connected</li>
    <li>0 results available</li>
  </ul>
</div>
</div>

## Conditional statements (if / when)

Use "if" for uncertain conditions or user choices, and "when" for inevitable or expected events. This distinction helps users understand whether something might happen or will definitely happen when explaining system behavior and consequences.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>If you close this window, unsaved changes will be lost.</li>
    <li>When the download completes, you'll receive a notification.</li>
    <li>When the system restarts, your session will end.</li>
    <li>If you need help, contact support.</li>
    <li>When calibration finishes, the device will be ready.</li>
    <li>If you delete this file, it cannot be recovered.</li>
  </ul>
</div>

<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>When you close this window, unsaved changes will be lost.</li>
    <li>If the download completes, you'll receive a notification.</li>
    <li>If the system restarts, your session will end.</li>
    <li>When you need help, contact support.</li>
    <li>If calibration finishes, the device will be ready.</li>
    <li>When you delete this file, it cannot be recovered.</li>
  </ul>
</div>
</div>

## Related

- [Toast messages](../messaging/toast-messages.mdx)
- [Error messages](../messaging/error-messages.mdx)
- [Warning messages](../messaging/warning-messages.mdx)
- [License management](../menu-functions-and-ui-labels/license-management.md)