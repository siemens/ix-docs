---
sidebar_position: 6
sidebar_label: Feedback and validation
title: Feedback and validation
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Field input validation gives users feedback on their input to ensure accurate, consistent data is submitted. Careful wording is required here to ensure users do not feel stupid or shamed for getting it wrong.'
---

#

Provide any requirements first as helper / info text to avoid users falling immediately into invalid states. See [Forms validation](../../../components/forms-validation/guide.md).

![UI example showing a field label Password with the helper text Minimum 8 characters, 1 uppercase letter (A-Z), 1 special character (!@#$%^&*).](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8399-8833&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Password</li>
      <li>Helper text: Minimum 8 characters, 1 uppercase letter (A-Z), 1 special character (!@#$%^&*)</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Password</li>
      <li>Helper text: (empty and requirement only appears after user starts typing) Invalid: Password must have 8 characters.</li>
    </ul>
  </div>
</div>

Provide clear, valid wording when the user has met all the validation criteria and can move on.

![UI example showing a field label Username with the Valid text Username available.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8392-12664&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Username</li>
      <li>Valid text: Username available</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Username</li>
      <li>Valid text: OK</li>
    </ul>
  </div>
</div>

Provide invalid text when the user input has not met the specified requirements and explain exactly what requirement is missing.

![UI example showing a field label Username with the Invalid text Username unavailable.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8399-8321&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Username</li>
      <li>Invalid text: Username unavailable</li>
      <li>Field label: Email address</li>
      <li>Invalid text: Missing @ symbol</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Username</li>
      <li>Invalid text: Bad username</li>
      <li>Field label: Email address</li>
      <li>Invalid text: Invalid email address</li>
    </ul>
  </div>
</div>

Provide warning text when there is a critical issue or a suggestion related to the success or failure of the users' input and explain any consequences clearly.

![UI example showing a field label Upload file with the Warning text Upload max. 10 MB. Select another file.](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8399-8594&t=EjTZKAJDhIkv5ICF-4)

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Field label: Upload file</li>
      <li>Warning text: Upload max. 10 MB. Select another file.</li>
      <li>Field label: Temperature</li>
      <li>Warning text: Hot water temperature limit is too high. There is a risk of scalding.</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Field label: Password</li>
      <li>Warning text: Warning: This is a weak password and not secure.</li>
      <li>Field label: Min threshold</li>
      <li>Warning text: Warning! Wrong threshold!</li>
    </ul>
  </div>
</div>

## Dos and Don'ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do provide all the information the user needs upfront</li>
      <li>Do ensure all constraints are clear</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don't shame the user for making a mistake</li>
      <li>Don't use wording that makes the user feel stupid when their input is invalid</li>
    </ul>
  </div>
</div>

## Related

- [Tooltips](../messaging/tooltips.mdx)
- [Forms validation](../../../components/forms-validation/guide.md)
