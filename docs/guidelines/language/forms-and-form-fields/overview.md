---
sidebar_position: 1
sidebar_label: Overview
title: Overview
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Form and text input fields provide essential context for users to enter data accurately and move through processes. Clear, concise microcopy within these elements reduces friction and ensures a smooth path to completion.'
---



#

Use an asterisk (*) for required fields after (not before) UI text.

![UI example showing the label Username followed immediately by an asterisk (*) without a space, illustrating the rule for required field indicators.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7675-10143&t=ZpwJdyAT3r3yIo4A-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Username*</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Username</li>
      <li>*Username</li>
    </ul>
  </div>
</div>

Never include spaces between the word and the asterisk (*).

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Username*</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Username *</li>
    </ul>
  </div>
</div>

When all form fields are required, add clear instructions below the form heading and add the asterisk to all required form fields.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>All form fields are required</li>
      <li>Complete all fields</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>* = required</li>
      <li>Username (required) / Device name (required) / Device ID (required)</li>
    </ul>
  </div>
</div>

Use counters for form or text input fields, or text areas with character limits, and show the limit at all times.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>250 characters</li>
      <li>17/250</li>
    </ul>
  </div>
</div>

Do not use urgent error or warning messages when users are reaching or have reached limits.

![UI example of a character limit indicator: Below the input field, a blue informational 'i' icon and neutral white text state '13 characters left,' alongside a light gray '7/20' counter. This demonstrates using informational rather than urgent warning styles for reaching limits.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8388-5196&t=X9obs5i7SQGuQmue-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>120 characters left</li>
      <li>0 characters left</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Error: Exceeded maximum characters.</li>
      <li>Warning! Reaching limit!</li>
    </ul>
  </div>
</div>

## Dos and Don'ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do ensure mandatory input fields are clearly labeled</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don't alarm the user with red error messages for simple input requirements</li>
    </ul>
  </div>
</div>

## Related

- [Punctuation](../basics/punctuation.md#asterisk-)
- [Forms field (component)](../../../components/forms-field/guide.md)
