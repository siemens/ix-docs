# UX writing and accessibility

> Accessibility ensures that information is clear, inclusive and easy to understand for all users. Based on the Web Content Accessibility Guidelines (WCAG), all our UX writing guidelines help to improve overall usability and inclusive access to information and services.

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconPdfDocument } from "@siemens/ix-icons/icons";
import { iconOpenExternal } from "@siemens/ix-icons/icons";
import { iconApplicationScreen } from "@siemens/ix-icons/icons";

:::info
Many rules here direct you to further information and examples either within iX or the [Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

Our accessibility target is conformance with WCAG 2.2 Level AA (the global standard). Where technically and contextually feasible, we additionally adopt selected Level AAA best practices, e.g. plain language and reduced reading complexity.
:::

## General rules
Use simple, plain language to make the text easier to read and understand. We aim to use language at a lower secondary / grade eight education level (about the reading level of a 13- or 14-year-old), to reach the WCAG 2.2 Level AAA standard (the gold standard). See [WCAG Reading Level](https://www.w3.org/TR/WCAG22/#reading-level) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    This wording conforms to WCAG 2.2.
    This page uses ARIA labels. These are hidden tags that help screen readers describe buttons and links to blind users.
  

  
    This terminology is in full alignment with the benchmarks established by the WCAG 2.2 framework.
    This page implements ARIA labeling to enhance assistive technology compatibility.
  

Continue to use domain-specific industry and technical terms while writing in plain language. See [Vocabulary](./vocabulary.md).

  
    The system uses OAuth 2.0 to authenticate users before granting access to the API.
    The sensor measures torque in newton-meters and sends the reading to the PLC.
  

  
    The system uses a special login trick to let people use the app.
    The sensor checks the twisting force and tells the machine brain about it.
  

Use active voice as it's shorter and easier to understand. See [Grammar](./grammar.md#use-active-voice).

  
    The system detected a network error.
  

  
    A network error was detected by the system.
  

Use concise, descriptive headings so users understand the content and purpose of the page. Identify and remove unnecessary words. See [Form headings](../forms-and-form-fields/form-headings.md).

  
    Heading: Schedule maintenance
    Heading: Update payment details
  

  
    Heading: Here you can schedule all your system maintenance
    Heading: On this page you will be able to make changes to your payment information
  

Use short, descriptive form field labels so users know what information to enter. Aim to identify and remove unnecessary words. See [WCAG Headings and Labels](https://www.w3.org/TR/WCAG22/#headings-and-labels) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Asset ID
    Email address
  

  
    Enter the asset ID of the asset
    Enter your email address into the field below
  

Break complex ideas, workflow, steps and instructions into shorter sentences.

  
    Perform routine maintenance on sensors, PLCs, and actuators. Follow the manufacturer's schedule to avoid unplanned downtime.
  

  
    To ensure your system operates efficiently and to prevent unplanned downtime, you should perform routine maintenance checks on all components including sensors, PLCs, and actuators according to the manufacturer's recommended schedule.
  

Use lists for two or more items. Choose ordered lists when steps must happen in a specific sequence, and unordered lists when the order does not matter. See [WCAG Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Connect the sensor.
    Power on the PLC.
    Calibrate the system using the control panel.
  

  
    To complete the setup, first connect the sensor, then power on the PLC, and finally calibrate the system using the control panel.
  

## Accessible links

Use brief, meaningful link text to explain the function of the target web page or resource. Pair link text with universal icons, e.g. the open-external or application-screen icons.

  
    SIMATIC S7-1500 firmware updates <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    Demonstration projects <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon>
  

  
    {'https://www.company.com/s7-1500-firmware'}
    Remote access
  

Pair the download of resources with both file type and size when possible.

  
    Download User manual (2.5 MB) <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
  

  
    Download
  

Avoid generic phrases like "click here" or "read more". See [External links and resources](../menu-functions-and-ui-labels/external-links-and-resources.md).

  
    Open accessibility features.
    See accessibility features.
  

  
    Click here.
    Read more.
  

Make sure each link makes sense on its own, even out of context, as screen reader users often scan a list of links without reading the surrounding text. See [WCAG Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Read the accessibility guidelines.
  

  
    Read more.
  

## Input fields / labels

Provide descriptive labels with plain language to make the content's purpose clear. See [Forms and form fields](../forms-and-form-fields/overview.md) and [WCAG Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Email address
    First name
    Last name
    Phone number
  

Group similar labels together. See [WCAG Labels or Instructions](https://www.w3.org/TR/WCAG22/#labels-or-instructions) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    First nameLast nameMiddle name
  

  
    First nameZip codeMiddle name
  

Use an asterisk (*) for required fields. Ensure that required fields are also programmatically identified for screen readers. 

  
    Username*
  

  
    Username
    *Username
  

When all form fields are required, add a clear statement below the form heading informing users that all fields are mandatory. Add the asterisk (*) to all required form fields and ensure they are programmatically identified. Don't use the abbreviation "req." even in space-constrained UIs.

  
    All form fields are required.
    Complete all fields.
  

  
    * = required
    Username (req)
  

## Error identification and prevention

Describe errors clearly in plain text, explain what happened, and provide solutions. See our template [Error messages](../messaging/error-messages.mdx) and [WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Value out of range. Enter a number between 1 and 100.
  

  
    Invalid value.
  

Explain format requirements and constraints to prevent errors before they happen in helper texts. See [Forms and form fields](../forms-and-form-fields/overview.md) and [WCAG Error Identification](https://www.w3.org/TR/WCAG22/#error-identification) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Field label: Upload filesHelper text: Supported formats: PDF, DOCX, XLSX (max 10 MB)
  

  
    Field label: Upload filesHelper text: Use the right format.
  

Don't rely solely on colors or icons to indicate there's been an error.

  
    Error: Password must be at least 8 characters.
  

  
    Image: Red field without text
  

Provide suggestions for correction and help users fix problems with clear, actionable guidance.

  
    Error: Email format is incorrect. Use the format: {'name@example.com'}
    Missing @ symbol
  

  
    Invalid email
  

Provide clear and consistent wording for users to reverse actions and submissions.

  
    Undo
    Undo action
  

  
    Go back
    Changed your mind?
  

Warn users of any consequences before automatic or unexpected actions occur. See [Warning messages](../messaging/warning-messages.mdx) and [WCAG On Input](https://www.w3.org/TR/WCAG22/#on-input) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Warning: This action will apply changes to all sensor data immediately.
  

  
    Data submitted. This action cannot be undone.
  

Provide confirmation messages for users to review, confirm or correct their input before submitting.

  
    Message: Review your changes: Device maintenance postponed until September 2027.Buttons: Cancel, Postpone maintenance
  

## Time-related messages

Tell users when there are time limits. See [Time-related messages](../messaging/time-related-messages.mdx).

  
    Your session expires in 5 minutes.
    Your session expires in 3 minutes. Press the space bar to extend your session.
  

  
    Your session expires soon.
    Your session is over. We're logging you out.
  

Provide options to extend time limits. See [WCAG Timing Adjustable](https://www.w3.org/TR/WCAG22/#timing-adjustable) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Message: Your session will expire in 5 minutes.Buttons: Extend session, End session now
  

## Audio controls

Write clear, descriptive button labels for audio controls. If a page has only one audio control, a short, simple label is acceptable. See [WCAG Audio Control](https://www.w3.org/TR/WCAG22/#audio-control) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Start
    Stop
    Mute
    Record
    Play
  

  
    Click
  

If there is more than one audio player or recording on the same page, each label must identify which audio it controls, not just what action it performs.

  
    Start diagnostic playback
    Stop voice memo recording
    Mute machine alarm
  

  
    Start
    Stop
    Mute
  

If audio plays automatically for more than 3 seconds, provide either a mechanism to pause or stop the audio or a mechanism to adjust its volume independently of the system volume. We recommend providing pause, stop and independent volume controls, even when audio is shorter than 3 seconds.

  
    Pause audio
    Stop audio
    Volume up
    Volume down
  

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

Write clear and descriptive ALT-text for non-text content. See [WCAG Non-text Content](https://www.w3.org/TR/WCAG22/#non-text-content) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Icon without text: Success checkmarkALT-text: Submission successful
    Icon without text: Warning iconALT-text: Warning
  

  
    Icon without text: Error iconALT-text: !
  

All ALT-text must present and convey the same information as the non-text content.

  
    Image: Line graph with multiple data seriesALT-text: Line chart comparing energy consumption across three production lines over Q1 to Q4 2025, showing a 12% reduction in Line A and 8% in Line B.
    Image: Map showing colored regionsALT-text: Map of Europe highlighting service centers in 12 countries, with red pins indicating locations in Germany, France, Poland, and Italy, and blue pins for Nordic regions.
    Image: Overhead view of industrial facilityALT-text: Facility map showing the manufacturing plant in Stuttgart with green pins indicating three production halls, warehouse zones, and emergency assembly points.
    Image: Technician workingALT-text:A technician in a hard hat and safety vest is operating a CNC machine while monitoring the control panel display.
  

  
    Image: Line graph with multiple data seriesALT-text: Chart showing data.
    Image: Map showing colored regionsALT-text: Map of Europe.
    Image: Overhead view of industrial facilityALT-text: Factory map.
    Image: Technician workingALT-text: Person working with machine.
  

For decorative images, it's not necessary to write alternative text. Instead, use empty alt text (alt="") so it is ignored by assistive technology.

  
    alt=""
  

## ARIA labels

ARIA [(Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria/) labels are part of UX writing and accessibility. They represent a text name for interactive controls that have no visible text. The table below describes some of the most common interactive elements that require ARIA labels.

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

Write clear and concise ARIA labels for interactive controls without visible text. Labels should describe the action and the object, e.g. "Download report" instead of just "Download". See [WCAG Name, Role, and Value](https://www.w3.org/TR/WCAG22/#name-role-value) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.

  
    Icon without text: Download icon on download icon buttonARIA label: Download installation file
    Icon without text: Gear icon on settings menu toggleARIA label: Open settings menu
    Input field (no visible label): Search box in search fieldARIA label: Search product documentation
    Icon without text: Chevron icon to expand technical detailsARIA label: Expand technical specifications
    Icon without text: X icon to close modal dialogARIA label: Close order confirmation dialog
  

  
    Icon without text: Download icon on download icon buttonARIA label: Icon
    Icon without text: Gear icon on settings menu toggleARIA label: Settings
    Input field (no visible label): Search box in search fieldARIA label: Search
    Icon without text: Chevron icon to expand technical detailsARIA label: Expand
    Icon without text: X icon to close modal dialogARIA label: X
  

All ARIA labels must be concise, action-oriented, and match the visible context of the control.

  
    Print production report
  

  
    Click here to print the report that contains all production data for the selected month.
  

Don’t use ARIA labels to duplicate visible text. If a button displays "Submit", adding an ARIA label also titled "Submit" can confuse voice control users and assistive technology.

  
    Button with visible text: Submit (no ARIA label needed)
  

  
    Button with visible text: SubmitARIA label: Submit form
  

Use unique ARIA labels when pages have more than one navigation landmark, e.g. banners, main and navigation menus.

  
    Navigation / Main menu / Footer links
  

  
    Navigation / Navigation / Navigation
  

## Dos and Don’ts

  
    Do keep writing clear and accessible with plain language
    Do collaborate with developers to ensure ARIA labels and ALT-text are aligned with UI text
    Do provide every image, icon, and link with concise, meaningful text alternatives that make sense out of context
  

  
    Don’t rely solely on visual asterisks without checking accessibility implementation
    Don’t use vague or generic helper text, link text, or button labels that leave users guessing
    Don’t duplicate visible text with redundant ARIA labels or clutter screens with unnecessary jargon
  

## Related

- [iX Accessibility guidelines](../../accessibility/overview.md)
- [WCAG 2.2 official homepage](https://www.w3.org/TR/WCAG22/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- [WCAG 2.2 quick reference guide](https://www.w3.org/WAI/WCAG22/quickref/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>

:::info
Official Siemens accessibility resources are exclusively available for Siemens AG employees and partners and can be accessed on [Siemens Design Language Accessibility](https://design-language.siemens.io/accessibility/) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
:::
