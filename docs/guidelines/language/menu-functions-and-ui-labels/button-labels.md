# Button labels

> We ensure clear, actionable button instructions by crafting effective calls to action that enhance user interaction.

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconOpenExternal } from "@siemens/ix-icons/icons";

# 

## General rules

Aim for one action per button.

  
    Acknowledge
    Edit
    Delete
  

  
    Acknowledge the error and prepare for restart
    Edit or delete
  

In limited cases, two closely related actions can be combined using "and".

  
    Save and close
    Save and restart
    Create and view account
  

  
    Click here to save & close
    Save data to drive and restart
    Create / view account
  

Don't use more than five words on one button, ideally between 1-3.

  
    Go back and edit details
    Save and close
    Compare and update
    Start firmware update
  

  
    Click here to save and close
    Save data to drive and restart
    I'd like to create a new user account
  

Don't use OK as a button label. If a legacy system requires OK, use capital letters.

  
    Heading: Error uploading fileDescription: The file could not be uploaded due to a network error.Button: Close
  

  
    Heading: Error uploading fileDescription: The file could not be uploaded due to a network error.Button: OK
  

Clearly state specific actions on primary buttons that will occur when clicked, rather than generic terms, such as Submit, OK, Yes, Dismiss.

  
    Heading: Save changes to projectButtons: Cancel, Save changes
  

  
    Heading: Add new deviceButtons: Cancel, OK
    Heading: Remove deviceButtons: Cancel, Dismiss
  

Ensure the button label text verb and noun match the heading verb and noun making the user's choice easier. Only leave out the noun in extremely space-constrained mobile views where the context is clear and immediate.

  
    Heading: Add caseButtons: Cancel, Add case
    Heading: Create new deviceButtons: Cancel, Create device
    Heading: Remove sensor from dashboardButton: Remove sensor
  

  
    Heading: Browse tagsButtons: Cancel, Update tags
    Heading: Update listButtons: Delete, Refresh list
    Heading: Remove sensor from dashboardButton: Remove it
  

When headings are far from the button within the UI or there are multiple steps or pages, always repeat nouns on buttons to lessen the cognitive load (even for space-constrained mobile views).

  
    Heading: Create gateway (step 5)Buttons: Cancel, Create gateway
    Heading: Edit user role "Administrator"Description: Saves all modifications to the "Administrator" user role.Buttons: Cancel, Save user role changes
    Heading: Configure "Temperature Sensor 01"Description: Confirm all current changes to settings across all tabs for "Temperature Sensor 01" and activate the new configuration.Buttons: Cancel, Apply sensor configuration
  

  
    Heading: Initiate new projectDescription: Your new project has been initiated and is now visible in the project portfolio.Buttons: Cancel, Initiate
  

Use our [UI terminology](../menu-functions-and-ui-labels/ui-terminology.md) section to clearly explain, differentiate and define what happens when buttons are activated, such as using Add to insert items and Create to make new items.

  
    Heading: Add calendar entryButtons: Cancel, Add
    Heading: Confirm settingsButtons: Cancel, Apply
  

  
    Heading: Add calendar entryButtons: Cancel, Create
    Heading: Confirm settingsButtons: Cancel, Save
  

Use sentence case for all button labels.

  
    Save and close
    Add user
    Save
    Delete account
  

  
    Save and Close
    Add User
    SAVE
    DELETE Account
  

Use direct, professional and action-oriented wording to be concise and to the point.

  
    Apply
    Send email
    Save
  

  
    Got it!
    Go
    Save it
  

## Buttons and punctuation

Don't use periods (full stops) as button labels are never full sentences.

  
    Delete user
  

  
    Delete user.
  

Don't use exclamation marks in button labels. Instead add urgency to the messaging.

  
    Save
  

  
    Save!
  

Don't use question marks in button labels. Instead show the consequences of the user's actions and avoid questioning their choice.

  
    Heading: Delete fileDescription: Deleting files results in immediate removal from the system. This action cannot be undone.Buttons: Cancel, Delete
  

  
    Heading: Delete file?Description: Are you sure you want to delete this file?Buttons: Cancel, Delete?
  

Use ellipses (…) sparingly to indicate that an action requires significant further input or a secondary step before it is performed, such as opening a file explorer or a complex configuration dialog.

Avoid using ellipses for standard actions or simple navigation to keep the interface clean and modern. The ellipsis serves as a signal that the action is not immediate and requires the user to specify details in a new window or modal.

Note: This is a classic desktop convention (Windows/macOS). In modern web and mobile apps, ellipses are increasingly being removed to reduce visual noise unless the action is a complex, multi-step wizard. We recommend removing them in our Siemens applications.

  
    Save as…
    Browse…
    Export to…
  

  
    Save…
    OK…
    Close…
  

## Destructive actions

Clearly label destructive actions on button labels.

  
    Heading: Delete accountDescription: This action will permanently delete your account and cannot be undone.Button: Cancel, Delete account
    Heading: Factory reset deviceDescription: Resetting will revert all settings to their original state.Button: Factory reset device
  

  
    Heading: Are you sure you want to delete your account?Description: This action will permanently delete your account and cannot be undone.Button: Sure
    Heading: Factory reset deviceDescription: Are you absolutely sure you want to proceed?Button: CONFIRM
  

## Dropdown menu options

Clearly state specific actions in the dropdown list, starting with an active verb.

  
    Primary button: ShareDropdown list: Email link, Share link, Copy link
    Primary button: Manage documentDropdown list: Rename, Delete, Share
  

  
    Primary button: SettingsDropdown list: Profile, Notification, Privacy
    Primary button: FileDropdown list: New, Recent, Changes
  

Keep dropdown list text short, ideally between 1-2 words.

  
    Primary button: Manage accountDropdown list: Change password, Adjust notifications, Update privacy
  

  
    Primary button: Manage accountDropdown list: Modify your security credentials and password, Review and adjust your notification settings for alerts, Update your privacy settings and data sharing options
  

## Workflow and navigation buttons

Use specific and matching verbs within workflows with a series of steps to guide users through processes.

  
    Buttons: Cancel, Back, Create
    Buttons: Cancel, Back, Add
    Buttons: Cancel, Back, Apply
    Buttons: Cancel, Back, Configure
    Buttons: Cancel, Back, Save
    Buttons: Cancel, Previous, Remove
    Buttons: Cancel, Back, Skip
    Buttons: Cancel, Back, Open
  

  
    Buttons: Next, Next, Next
  

Avoid the generic Next button label in workflows unless there are no other alternatives.

  
    Heading of workflow: Add new edge deviceStep 1: DeviceButtons: Cancel, Back, NextStep 2: Network interfaceButtons: Cancel, Back, NextStep 3: ProxyButtons: Cancel, Back, Add edge device
  

## Buttons and state changes

When loading states are displayed within modal, toast or inline messages, use the same button label verb in gerund (-ing) form with an ellipsis (…).

  
    Saving…
    Loading…
    Uploading…
  

  
    Save
    Load
    Upload
  

Use the same button label verb in the simple past tense in status messages within modal, toast or inline messages.

  
    Request access → Requested
    Save changes → Saved
    Export data → Exported
    Send message → Sent
    Approve document → Approved
  

  
    Request access → Request access
    Save changes → Being saving
    Export data → Export done
    Send message → Send
    Approve document → Have approved
  

## Accessibility

Use aria-labels if the button has no visible label, e.g. icon buttons. See [Text alternatives and labels](../../../guidelines/accessibility/code.md#text-alternatives-and-labels).

  
    Aria-label: Close dialog
    Aria-label: Add chart
    Aria-label: More information
    Aria-label: Help
  

Do not include the word "button" in the aria-label. The screen reader announces the component automatically.

  
    Aria-label: Close button
    Aria-label: Save button
  

Make sure tooltips and aria-labels match. See [Accessibility guidelines](../../accessibility/overview.md).

  
    Aria-label: Close dialog
    Tooltip: Close dialog
  

## Dos and Don'ts

  
    Do ensure button label text matches the heading
    Do define actions clearly on button labels
    Do add aria-label for icon buttons
  

  
    Don't ask questions in any part of the button label text
    Don't add multiple actions in one button
  

## Related

- [Button (component)](../../../components/button/guide.md)
- [Warning messages](../messaging/warning-messages.mdx)
- [UI terminology](../menu-functions-and-ui-labels/ui-terminology.md)
- [External links and resources](../menu-functions-and-ui-labels/external-links-and-resources.md)
- [WCAG: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA6) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
