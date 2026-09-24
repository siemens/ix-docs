---
sidebar_position: 5
sidebar_label: Accessibility and UX writing
title: UX writing and accessibility
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Accessibility ensures that information is clear, inclusive and easy to understand for all users. Based on the Web Content Accessibility Guidelines (WCAG), all our UX writing guidelines help to improve overall usability and inclusive access to information and services.'
---

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconPdfDocument } from "@siemens/ix-icons/icons";
import { iconOpenExternal } from "@siemens/ix-icons/icons";

:::info
Many rules here direct you to further information and examples either within iX or the Web Content Accessibility Guidelines (WCAG).

We aim to conform to WCAG 2.2 level AA (the global standard) which includes level A (the basic foundation) plus more standards to ensure your UX writing is accessible for all readers. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
:::

## General rules
Use simple, plain language to make the text easier to read and understand. We aim to use language at a lower secondary / grade eight education level, i.e. the reading level of a 13 or 14-year-old, to reach the WCAG 2.2. level AAA standard (the gold standard). See [WCAG Reading level](https://www.w3.org/TR/WCAG22/#reading-level) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>This wording conforms to WCAG 2.2.</li>
    <li>This page uses ARIA labels. These are hidden tags that help screen readers describe buttons and links to blind users.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>This terminology is in full alignment with the benchmarks established by the WCAG 2.2 framework.</li>
    <li>This page implements ARIA labeling to enhance assistive technology compatibility.</li>
  </ul>
</div>
</div>

Continue to use domain-specific industry and technical terms while writing in plain language. See [Vocabulary](./vocabulary.md).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>The system uses OAuth 2.0 to authenticate users before granting access to the API.</li>
    <li>The sensor measures torque in newton-meters and sends the reading to the PLC.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>The system uses a special login trick to let people use the app.</li>
    <li>The sensor checks the twisting force and tells the machine brain about it.</li>
  </ul>
</div>
</div>

Use active voice as it's shorter and easier to understand. See [Use active voice](./grammar.md#use-active-voice).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>The system detected a network error.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>A network error was detected by the system.</li>
  </ul>
</div>
</div>

Use concise, descriptive headings so users understand the content and purpose of the page. Identify and remove unnecessary words. See [Form headings](#).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Heading: Schedule maintenance</li>
    <li>Heading: Update payment details</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Heading: Here you can schedule all your system maintenance</li>
    <li>Heading: On this page you will be able to make changes to your payment information</li>
  </ul>
</div>
</div>

Use short, descriptive form field labels so users know what information to enter. Aim to identify and remove unnecessary words. See [WCAG Headings and Labels](https://www.w3.org/TR/WCAG22/#headings-and-labels) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Asset ID</li>
    <li>Email address</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Enter the asset ID of the asset</li>
    <li>Enter your email address into the field below</li>
  </ul>
</div>
</div>

Break complex ideas, workflow, steps and instructions into shorter sentences.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Perform routine maintenance on sensors, PLCs, and actuators. Follow the manufacturer's schedule to avoid unplanned downtime.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>To ensure your system operates efficiently and to prevent unplanned downtime, you should perform routine maintenance checks on all components including sensors, PLCs, and actuators according to the manufacturer's recommended schedule.</li>
  </ul>
</div>
</div>

Use lists for two or more items. Choose ordered lists when steps must happen in a specific sequence, and unordered lists when the order does not matter. See [WCAG Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ol aria-label="Recommended practices">
    <li>Connect the sensor.</li>
    <li>Power on the PLC.</li>
    <li>Calibrate the system using the control panel.</li>
  </ol>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>To complete the setup, first connect the sensor, then power on the PLC, and finally calibrate the system using the control panel.</li>
  </ul>
</div>
</div>

## Accessible links

Describe what happens when users click on the link, e.g. opens a new tab or an external link. 

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>SIMATIC S7-1500 firmware updates <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>Demonstration projects <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>{'https://www.company.com/s7-1500-firmware'}</li>
    <li>Remote access</li>
  </ul>
</div>
</div>

Describe the resource function and type and pair the download of resources with both file type and size whenever possible.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Download User manual (2.5 MB) <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Download</li>
  </ul>
</div>
</div>

Avoid generic phrases like "click here" or "read more". See [External links and resources](../menu-functions-and-ui-labels/external-links-and-resources.md).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Open accessibility features.</li>
    <li>See accessibility features.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here.</li>
    <li>Read more.</li>
  </ul>
</div>
</div>

Make sure each link makes sense on its own, even out of context, as screen reader users often scan a list of links without reading the surrounding text. See [WCAG Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Read the accessibility guidelines.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Read more.</li>
  </ul>
</div>
</div>

## Input fields / labels

Provide descriptive labels with plain language to make the content's purpose clear. See [Forms and form fields](#) and [WCAG Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Email address</li>
    <li>First name</li>
    <li>Last name</li>
    <li>Phone number</li>
  </ul>
</div>
</div>

Group similar labels together. See [WCAG Labels or Instructions](https://www.w3.org/TR/WCAG22/#labels-or-instructions) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>First name<br/>Last name<br/>Middle name</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>First name<br/>Zip code<br/>Middle name</li>
  </ul>
</div>
</div>

Use an asterisk (*) for required fields. 

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Username*</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Username</li>
    <li>*Username</li>
  </ul>
</div>
</div>

When all form fields are required, add clear instructions below the form heading and add the asterisk to all required form fields. Don't use the abbreviation "req." even in space-constrained UIs.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>All form fields are required.</li>
    <li>Complete all fields.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>* = required</li>
    <li>Username (req)</li>
  </ul>
</div>
</div>

## Error identification and prevention

Describe errors clearly in plain text, explain what happened, and provide solutions. See our template [Error messages](../messaging/error-messages.mdx) and [WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Value out of range. Enter a number between 1 and 100.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Invalid value.</li>
  </ul>
</div>
</div>

Explain format requirements and constraints to prevent errors before they happen in helper texts. See [Forms and form fields](#) and [WCAG Error Prevention](https://www.w3.org/TR/WCAG22/#error-identification) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Field label: Upload files<br/>Helper text: Supported formats: PDF, DOCX, XLSX (max 10 MB)</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Field label: Upload files<br/>Helper text: Use the right format.</li>
  </ul>
</div>
</div>

Don't rely solely on colors or icons to indicate there's been an error.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Error: Password must be at least 8 characters.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Image: Red field without text</li>
  </ul>
</div>
</div>

Provide suggestions for correction and help users fix problems with clear, actionable guidance.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Error: Email format is incorrect. Use the format: {'name@example.com'}</li>
    <li>Missing @ symbol</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Invalid email</li>
  </ul>
</div>
</div>

Provide clear and consistent wording for users to reverse actions and submissions.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Undo</li>
    <li>Undo action</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Go back</li>
    <li>Changed your mind?</li>
  </ul>
</div>
</div>

Warn users of any consequences before automatic or unexpected actions occur. See [Warning messages](../messaging/warning-messages.mdx) and [WCAG On Input](https://www.w3.org/TR/WCAG22/#on-input) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Warning: This action will apply changes to all sensor data immediately.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Data submitted. This action cannot be undone.</li>
  </ul>
</div>
</div>

Provide confirmation messages for users to review, confirm or correct their input before submitting.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Message: Review your changes: Device maintenance postponed until September 2027.<br/>Buttons: Cancel, Postpone maintenance</li>
  </ul>
</div>
</div>

## Time-related messages

Tell users when there are time limits. See [Time-related messages](../messaging/time-related-messages.mdx).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Your session will expire in 5 minutes.</li>
    <li>Your session will expire in 3 minutes. Press the space bar to extend your session.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Your session will expire soon.</li>
    <li>Your session is over. We're logging you out.</li>
  </ul>
</div>
</div>

Provide options to extend time limits. See [WCAG 2.2 - 2.2.1 Timing Adjustable (Level A)](https://www.w3.org/TR/WCAG22/#timing-adjustable) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Message: Your session will expire in 5 minutes.<br/>Button label: Extend session<br/>Button label: End session now</li>
  </ul>
</div>
</div>

## Audio controls

Write clear, descriptive button labels for audio controls. If a page has only one audio control, a short, simple label is acceptable. See [WCAG 2.2 - 1.4.2 Audio Control (Level A)](https://www.w3.org/TR/WCAG22/#audio-control) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Start</li>
    <li>Stop</li>
    <li>Mute</li>
    <li>Record</li>
    <li>Play</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click</li>
  </ul>
</div>
</div>

If there is more than one audio player or recording on the same page, each label must identify which audio it controls, not just what action it performs.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Start diagnostic playback</li>
    <li>Stop safety announcement</li>
    <li>Stop voice memo recording</li>
    <li>Mute machine alarm</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Start</li>
    <li>Stop</li>
    <li>Stop</li>
    <li>Mute</li>
  </ul>
</div>
</div>

If audio plays automatically for more than 3 seconds, provide either a mechanism to pause or stop the audio or a mechanism to adjust its volume independently of the system volume. We recommend providing pause, stop and independent volume controls, even when audio is shorter than 3 seconds.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Pause audio</li>
    <li>Volume</li>
  </ul>
</div>
</div>

## Text alternatives (ALT-text)

Alternative text is part of UX writing and accessibility. It represents a text replacement for content that has no text. The table below describes the most common non-text content that requires alternative text.

| Non-text content | Describe |
| ---- | ---- |
| Photograph / illustration / imagery | Content, relevance and context |
| Icon (standalone or in button) | Action or purpose, e.g. Close dialog |
| Chart / graph / data visualization | Key data or trends |
| Infographic | Main message and key takeaways |
| Logo with link | Destination or action, e.g. Homepage |
| Screenshot | Content, relevance and context |
| Diagram / flowchart | Key relationships or flows |
| Map | Location and what it shows, e.g. Factory site areas in Europe |
| Video thumbnail | Video theme |

Write clear and descriptive ALT-text for non-text content. See [WCAG 2.2 - 1.1.1 Non-text Content (Level A)](https://www.w3.org/TR/WCAG22/#non-text-content) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Icon without text: Success checkmark<br/>ALT-text: Submission successful</li>
    <li>Icon without text: Warning icon<br/>ALT-text: Warning</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Icon without text: Error icon<br/>ALT-text: !</li>
  </ul>
</div>
</div>

All ALT-text must present and convey the same information as the non-text content.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Image: Line graph with multiple data series<br/>ALT-text: Line chart comparing energy consumption across three production lines over Q1 to Q4 2025, showing a 12% reduction in Line A and 8% in Line B.</li>
    <li>Image: Map showing colored regions<br/>ALT-text: Map of Europe highlighting service centers in 12 countries, with red pins indicating locations in Germany, France, Poland, and Italy, and blue pins for Nordic regions.</li>
    <li>Image: Overhead view of industrial facility<br/>ALT-text: Facility map showing the manufacturing plant in Stuttgart with green pins indicating three production halls, warehouse zones, and emergency assembly points.</li>
    <li>A technician in a hard hat and safety vest is operating a CNC machine while monitoring the control panel display.</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>ALT-text: Chart showing data.</li>
    <li>ALT-text: Map of Europe.</li>
    <li>ALT-text: Factory map.</li>
    <li>Person working with machine.</li>
  </ul>
</div>
</div>

For decorative images, it's not necessary to write alternative text. Instead, use empty alt text (alt="") so it is ignored by assistive technology.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>alt=""</li>
  </ul>
</div>
</div>

## ARIA labels

ARIA (Accessible Rich Internet Applications) labels are part of UX writing and accessibility. They represent a text name for interactive controls that have no visible text. The table below describes some of the most common interactive elements that require ARIA labels.

| Interactive control | Name |
| ---- | ---- |
| Icon-only button | Action verb, e.g. Download file |
| Icon-only link | Destination or action, e.g. Homepage |
| Search box | Purpose, e.g. Search devices |
| Menu button / toggle | State or action, e.g. Open menu |
| Close / dismiss button | Action, e.g. Close dialog |
| Social media icon link | Platform and action, e.g. Follow us on LinkedIn |
| Expandable section / accordion | Section name, e.g. Expand technical specifications |
| Modal / dialog | Dialog purpose, e.g. Confirm additional users |
| Navigation landmarks (banners, search, main menu, etc.) | Navigation type, e.g. Main navigation, Sidebar menu, Quick links, Banner |

Write clear and concise ARIA labels for interactive controls without visible text. Labels should describe the action and the object, e.g. Download report instead of just Download. See [WCAG Name, Role, Value] https://www.w3.org/TR/WCAG22/#name-role-value <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Icon without text: Download icon on download icon button<br/>ARIA-label: Download installation file</li>
    <li>Icon without text: Gear icon on settings menu toggle<br/>aria-label: Open settings menu</li>
    <li>Input field (no visible label): Search box in search field<br/>aria-label: Search product documentation</li>
    <li>Icon without text: Chevron icon to expand technical details<br/>aria-label: Expand technical specifications</li>
    <li>Icon without text: X icon to close modal dialog<br/>aria-label: Close order confirmation dialog</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Icon without text: Download icon<br/>ARIA-label: Icon</li>
    <li>Icon without text: Gear icon<br/>aria-label: Settings</li>
    <li>aria-label: Search</li>
    <li>aria-label: Expand</li>
    <li>aria-label: X</li>
  </ul>
</div>
</div>

All ARIA labels must be concise, action-oriented, and match the visible context of the control.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Print production report</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here to print the report that contains all production data for the selected month.</li>
  </ul>
</div>
</div>

Don’t use aria labels to duplicate visible text. If a button displays "Submit", adding an aria-label also titled “Submit” can confuse voice control users and assistive technology. 

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Button with visible text: Submit (no aria-label needed)</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Button with visible text: Submit<br/>aria-label: Submit form</li>
  </ul>
</div>
</div>

Use unique ARIA labels when pages have more than one navigation landmark, e.g. banners, main and navigation menus.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Navigation / Main menu / Footer links</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Navigation / Navigation / Navigation</li>
  </ul>
</div>
</div>

## Related

- [iX Accessibility guidelines](../../accessibility/overview.md)
- [WCAG 2.2 official homepage](https://www.w3.org/TR/WCAG22/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- [WCAG 2.2 explanations and success criteria](https://www.w3.org/WAI/WCAG22/Understanding/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- [WCAG 2.2 quick reference guide](https://www.w3.org/WAI/WCAG22/quickref/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>

:::info
Official Siemens accessibility resources are exclusively available for Siemens AG employees and partners and can be accessed on [Siemens Brandville](https://brandville.siemens.com/en/design-elements/accessibility) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
:::


