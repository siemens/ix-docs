---
sidebar_position: 7
sidebar_label: Button labels
title: 'Button labels'
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'We ensure clear, actionable button instructions by crafting effective prompts and calls to action that enhance user interaction.'
---

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconOpenExternal } from "@siemens/ix-icons/icons";

# 

## General rules

Aim for one action per button.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Acknowledge</li>
    <li>Edit</li>
    <li>Delete</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Acknowledge the error and prepare for restart</li>
    <li>Edit or delete</li>
  </ul>
</div>
</div>

In limited cases, two closely related actions can be combined using "and".

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Save and close</li>
    <li>Save and restart</li>
    <li>Create and view account</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here to save & close</li>
    <li>Save data to drive and restart</li>
    <li>Create / view account</li>
  </ul>
</div>
</div>

Don't use more than five words on one button, ideally between 1-3.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Go back and edit details</li>
    <li>Save and close</li>
    <li>Compare and update</li>
    <li>Start firmware update</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here to save and close</li>
    <li>Save data to drive and restart</li>
    <li>I'd like to create a new user account</li>
  </ul>
</div>
</div>

Don't use OK as a button label. If a legacy system requires OK, use capital letters.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Error uploading file<br/>Description: The file could not be uploaded due to a network error.<br/>Button: Close</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Error uploading file<br/>Description: The file could not be uploaded due to a network error.<br/>Button: OK</li>
  </ul>
</div>
</div>

Clearly state specific actions on primary buttons that will occur when clicked, rather than generic terms, such as Submit, OK, Yes, Dismiss.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Save changes to project<br/>Buttons: Cancel, Save changes</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Add new device<br/>Buttons: Cancel, OK</li>
    <li>Heading: Remove device<br/>Buttons: Cancel, Dismiss</li>
  </ul>
</div>
</div>

Ensure the button label text verb and noun match the heading verb and noun making the user's choice easier. Only leave out the noun in extremely space-constrained mobile views where the context is clear and immediate.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Add case<br/>Buttons: Cancel, Add case</li>
    <li>Heading: Create new device<br/>Buttons: Cancel, Create device</li>
    <li>Heading: Remove sensor from dashboard<br/>Button: Remove sensor</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Browse tags<br/>Buttons: Cancel, Update tags</li>
    <li>Heading: Update list<br/>Buttons: Delete, Refresh list</li>
    <li>Heading: Remove sensor from dashboard<br/>Button: Remove it</li>
  </ul>
</div>
</div>

When headings are far from the button within the UI or there are multiple steps or pages, always repeat nouns on buttons to lessen the cognitive load (even for space-constrained mobile views).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Create gateway (step 5)<br/>Buttons: Cancel, Create gateway</li>
    <li>Heading: Edit user role "Administrator"<br/>Description: Saves all modifications to the "Administrator" user role.<br/>Buttons: Cancel, Save user role changes</li>
    <li>Heading: Configure "Temperature Sensor 01"<br/>Description: Confirm all current changes to settings across all tabs for "Temperature Sensor 01" and activate the new configuration.<br/>Buttons: Cancel, Apply sensor configuration</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Initiate new project<br/>Description: Your new project has been initiated and is now visible in the project portfolio.<br/>Buttons: Cancel, Initiate</li>
  </ul>
</div>
</div>

Use our [UI terminology](../menu-functions-and-ui-labels/ui-terminology.md) section to clearly explain, differentiate and define what happens when buttons are activated, such as using Add to insert items and Create to make new items.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Add calendar entry<br/>Buttons: Cancel, Add</li>
    <li>Heading: Confirm settings<br/>Buttons: Cancel, Apply</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Add calendar entry<br/>Buttons: Cancel, Create</li>
    <li>Heading: Confirm settings<br/>Buttons: Cancel, Save</li>
  </ul>
</div>
</div>

Use sentence case for all button labels.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Save and close</li>
    <li>Add user</li>
    <li>Save</li>
    <li>Delete account</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Save and Close</li>
    <li>Add User</li>
    <li>SAVE</li>
    <li>DELETE Account</li>
  </ul>
</div>
</div>

Use direct, professional and action-oriented wording to be concise and to the point.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Apply</li>
    <li>Send email</li>
    <li>Save</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Got it!</li>
    <li>Go</li>
    <li>Save it</li>
  </ul>
</div>
</div>

## Buttons and punctuation

Don't use periods (full stops) as button labels are never full sentences.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Delete user</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Delete user.</li>
  </ul>
</div>
</div>

Don't use exclamation marks in button labels. Instead add urgency to the messaging.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Save</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Save!</li>
  </ul>
</div>
</div>

Don't use question marks in button labels. Instead show the consequences of the user's actions and avoid questioning their choice.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Delete file<br/>Description: Deleting files results in immediate removal from the system. This action cannot be undone.<br/>Buttons: Cancel, Delete</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Delete file?<br/>Description: Are you sure you want to delete this file?<br/>Buttons: Cancel, Delete?</li>
  </ul>
</div>
</div>

Use ellipses (…) sparingly to indicate that an action requires significant further input or a secondary step before it is performed, such as opening a file explorer or a complex configuration dialog. See [Punctuation](#).

Avoid using ellipses for standard actions or simple navigation to keep the interface clean and modern. The ellipsis serves as a signal that the action is not immediate and requires the user to specify details in a new window or modal.

Note: This is a classic desktop convention (Windows/macOS). In modern web and mobile apps, ellipses are increasingly being removed to reduce visual noise unless the action is a complex, multi-step wizard. We recommend removing them in our Siemens applications.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Save as…</li>
    <li>Browse…</li>
    <li>Export to…</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Save…</li>
    <li>OK…</li>
    <li>Close…</li>
  </ul>
</div>
</div>

## Destructive actions

Clearly label destructive actions on button labels.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Delete account<br/>Description: This action will permanently delete your account and cannot be undone.<br/>Button: Cancel, Delete account</li>
    <li>Heading: Factory reset device<br/>Description: Resetting will revert all settings to their original state.<br/>Button: Factory reset device</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Are you sure you want to delete your account?<br/>Description: This action will permanently delete your account and cannot be undone.<br/>Button: Sure</li>
    <li>Heading: Factory reset device<br/>Description: Are you absolutely sure you want to proceed?<br/>Button: CONFIRM</li>
  </ul>
</div>
</div>

## Dropdown menu options

Clearly state specific actions in the dropdown list, starting with an active verb.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Primary button: Share<br/>Dropdown list: Email link, Share link, Copy link</li>
    <li>Primary button: Manage document<br/>Dropdown list: Rename, Delete, Share</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Primary button: Settings<br/>Dropdown list: Profile, Notification, Privacy</li>
    <li>Primary button: File<br/>Dropdown list: New, Recent, Changes</li>
  </ul>
</div>
</div>

Keep dropdown list text short, ideally between 1-2 words.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Primary button: Manage account<br/>Dropdown list: Change password, Adjust notifications, Update privacy</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Primary button: Manage account<br/>Dropdown list: Modify your security credentials and password, Review and adjust your notification settings for alerts, Update your privacy settings and data sharing options</li>
  </ul>
</div>
</div>

## Workflow and navigation buttons

Use specific and matching verbs within workflows with a series of steps to guide users through processes.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Buttons: Cancel, Back, Create</li>
    <li>Buttons: Cancel, Back, Add</li>
    <li>Buttons: Cancel, Back, Apply</li>
    <li>Buttons: Cancel, Back, Configure</li>
    <li>Buttons: Cancel, Back, Save</li>
    <li>Buttons: Cancel, Previous, Remove</li>
    <li>Buttons: Cancel, Back, Skip</li>
    <li>Buttons: Cancel, Back, Open</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Buttons: Next, Next, Next</li>
  </ul>
</div>
</div>

Avoid the generic Next button label in workflows unless there are no other alternatives.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading of workflow: Add new edge device<br/>Step 1: Device<br/>Buttons: Cancel, Back, Next<br/>Step 2: Network interface<br/>Buttons: Cancel, Back, Next<br/>Step 3: Proxy<br/>Buttons: Cancel, Back, Add edge device</li>
  </ul>
</div>
</div>

## Buttons and state changes

When loading states are displayed within modal, toast or inline messages, use the same button label verb in gerund (-ing) form with an ellipsis (…).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Saving…</li>
    <li>Loading…</li>
    <li>Uploading…</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Save</li>
    <li>Load</li>
    <li>Upload</li>
  </ul>
</div>
</div>

Use the same button label verb in the simple past tense in status messages within modal, toast or inline messages.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Request access → Requested</li>
    <li>Save changes → Saved</li>
    <li>Export data → Exported</li>
    <li>Send message → Sent</li>
    <li>Approve document → Approved</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Request access → Request access</li>
    <li>Save changes → Being saving</li>
    <li>Export data → Export done</li>
    <li>Send message → Send</li>
    <li>Approve document → Have approved</li>
  </ul>
</div>
</div>

## Accessibility

Use aria-labels if the button has no visible label, e.g. icon buttons. See [Text alternatives and labels](../../../guidelines/accessibility/code.md#text-alternatives-and-labels).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Aria-label: Close dialog</li>
    <li>Aria-label: Add chart</li>
    <li>Aria-label: More information</li>
    <li>Aria-label: Help</li>
  </ul>
</div>
</div>

Do not include the word "button" in the aria-label. The screen reader announces the component automatically.

<div className="dos-and-donts">
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Aria-label: Close button</li>
    <li>Aria-label: Save button</li>
  </ul>
</div>
</div>

Make sure tooltips and aria-labels match. See [Accessibility guidelines](../../accessibility/overview.md).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Aria-label: Close dialog</li>
    <li>Tooltip: Close dialog</li>
  </ul>
</div>
</div>

## Dos and Don'ts

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Do ensure button label text matches the heading</li>
    <li>Do define actions clearly on button labels</li>
    <li>Do add aria-label for icon buttons</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Don't ask questions in any part of the button label text</li>
    <li>Don't add multiple actions in one button</li>
  </ul>
</div>
</div>

## Related

- [Button (component)](../../../components/button/guide.md)
- [Warning messages](../messaging/warning-messages.mdx)
- [UI terminology](../menu-functions-and-ui-labels/ui-terminology.md)
- [External links and resources](../menu-functions-and-ui-labels/external-links-and-resources.md)
- [WCAG: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
