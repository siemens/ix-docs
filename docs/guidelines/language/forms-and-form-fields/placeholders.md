---
sidebar_position: 4
sidebar_label: Placeholders
title: Placeholders
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Placeholders offer a hint or example of the expected input, but they disappear once a user starts typing. They should never replace a label as users lose that guidance the moment they need it most.'
---

#

Use placeholder text in search fields. See [Search and filter](../menu-functions-and-ui-labels/search-and-filter.md).

![UI example showing a search field with the placeholder text Search assets….](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8392-12417&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>ARIA label: Search assets</li>
      <li>Placeholder text: Search assets…</li>
    </ul>
  </div>
</div>

Use placeholder text within text area / input fields to provide short examples and obvious hints.

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Form field label: Asset name</li>
      <li>Placeholder text: Enter asset name, e.g. pump-A-097</li>
    </ul>
  </div>
</div>

Provide helpful or precise format examples as placeholder texts when localization, helper texts or tooltips are not possible or available. See [Helper / info text](../forms-and-form-fields/helper-info-text.md).

![UI example showing field label Date with the placeholder text YYYY/MM/DD.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8406-2032&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>YYYY/MM/DD</li>
      <li>+1 (555) 123-4567</li>
      <li>name@company.com</li>
      <li>123-45-6789</li>
      <li>14:00 (24-hour clock)</li>
      <li>EQ-2024-00123</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Date</li>
      <li>Phone number</li>
      <li>Email</li>
      <li>ID number</li>
      <li>Time</li>
      <li>Equipment ID</li>
    </ul>
  </div>
</div>

Add helpful examples within text areas for comments or notes. See [Textarea](../../../components/textarea/guide.md).

![UI example showing field label Comments with the placeholder text Share any details that might help, e.g. "The issue occurs when…".](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8406-1752&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Comments</li>
      <li>Placeholder text: Share any details that might help, e.g. "The issue occurs when…"</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Comments</li>
      <li>Placeholder text: Write your comments here…</li>
    </ul>
  </div>
</div>

Never use placeholder texts instead of field labels as they are not reliably accessible and disappear on input.

<div class="dos-and-donts">
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: (empty)</li>
      <li>Placeholder text: Enter phone number</li>
      <li>Field label: (empty)</li>
      <li>Placeholder text: Enter email address</li>
    </ul>
  </div>
</div>

Never add critical information or instructions as placeholder text.

<div class="dos-and-donts">
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Password*</li>
      <li>Placeholder text: Minimum 8 characters with at least one number.</li>
      <li>Field label: Upload certificate*</li>
      <li>Placeholder text: PDF only. Max 5MB. Must be valid for at least 90 days.</li>
    </ul>
  </div>
</div>

## Dos and Don'ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do add extra, useful information for users in placeholders if helper text is not possible</li>
      <li>Do always have a label alongside placeholder text</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don't ever use placeholder text as form field or text area labels</li>
      <li>Don't repeat exact label text and placeholder text</li>
    </ul>
  </div>
</div>

## Related

- [Formatting](../formatting/addresses.mdx)
- [Accessibility](../../accessibility/overview.md)
