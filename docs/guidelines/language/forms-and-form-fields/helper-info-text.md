---
sidebar_position: 5
sidebar_label: Helper / info text
title: Helper / info text
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Helper / info text gives users the extra context or instructions they need to complete input fields correctly. Unlike placeholders, they stay visible throughout the interaction, so critical guidance is not lost when a user starts typing.'
---

#

Use helper / info text to add constraints.

![UI example showing a field label Password* with the helper text Minimum 8 characters, letters and numbers only.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8392-12519&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Password</li>
      <li>Helper text: Minimum 8 characters, letters and numbers only.</li>
    </ul>
  </div>
</div>

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Upload files</li>
      <li>Helper text: Supported formats: PDF, DOCX, XLSX (max 10 MB)</li>
    </ul>
  </div>
</div>

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Phone number</li>
      <li>Helper text: Include country code, e.g. +49 30 1234567</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Phone number</li>
      <li>Helper text: Type your phone number here.</li>
    </ul>
  </div>
</div>

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Create password</li>
      <li>Helper text: Minimum 8 characters, 1 uppercase letter (A-Z), 1 special character (!@#$%^&*)</li>
    </ul>
  </div>
</div>

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Device name</li>
      <li>Helper text: Maximum 50 characters</li>
    </ul>
  </div>
</div>

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Max. threshold</li>
      <li>Helper text: Use decimal point for precision (e.g. 15.5).</li>
    </ul>
  </div>
</div>

Use clear helper texts, instead of placeholders, in high-friction and error-prone fields requiring numbers and specific formats.

![UI example showing a field label Date with the helper text Format: YYYY/MM/DD.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8406-2116&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Format: YYYY/MM/DD</li>
      <li>Enter a value between 1 and 9999</li>
      <li>Enter a future date</li>
    </ul>
  </div>
</div>

## Dos and Don'ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do add helper text to high-risk and error-prone fields</li>
      <li>Do use tooltips instead if more detailed information is needed</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don't use the same text label wording as helper text</li>
      <li>Don't use helper text when there are extensive requirements, instead use a tooltip</li>
    </ul>
  </div>
</div>

## Related

- [Logging in and out](../menu-functions-and-ui-labels/logging-in-and-out.md)
- [Tooltips](../messaging/tooltips.mdx)
- [Infotips](../messaging/infotips.mdx)
