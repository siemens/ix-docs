---
sidebar_position: 9
sidebar_label: Dialogs and buttons
title: Dialogs and buttons
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Discover guidelines for writing dialogs and button labels to ensure clear and actionable instructions. This section helps you create effective prompts and calls to action that enhance user interaction.'
---

#

## Clear title and button options

- Concise and descriptive dialog title: Add user

- Option buttons should describe what will happen and relate to the dialog title: Cancel, Add

- Forms: When asking for user input using a dialog and there is no clear action verb in the title, provide Cancel and Save as buttons

- One button only reflects one action

- Users should be able to understand the choices based on the title and button text alone

- Only use ‘OK’ as an option if you cannot find an appropriate verb

<div className="dos-and-donts">
  <div className="dos">
    <ul aria-label="Recommended practices">
      <li>Title: Add user  / Buttons: Cancel, Add</li>
      <li>Title: Delete file  / Buttons: Cancel, Delete</li>
      <li>Title: Edit details  / Buttons: Cancel, Save</li>
    </ul>
  </div>
  <div className="donts">
    <ul aria-label="Practices to avoid">
      <li>Title: Add user  / Buttons: Cancel, OK</li>
      <li>Title: Are you sure  / Buttons: Cancel, Delete</li>
      <li>Title: Edit details  / Buttons: Cancel, Edit</li>
    </ul>
  </div>
</div>

## Primary and secondary actions

- Primary on the right, secondary left (Cancel, OK) not (OK, Cancel)

- Primary actions can either be positive (Send, Save) or negative (Delete)

<div className="dos-and-donts">
  <div className="dos">
    <ul aria-label="Recommended practices">
      <li>Cancel, Save</li>
    </ul>
  </div>
  <div className="donts">
    <ul aria-label="Practices to avoid">
      <li>Save, Cancel</li>
    </ul>
  </div>
</div>
