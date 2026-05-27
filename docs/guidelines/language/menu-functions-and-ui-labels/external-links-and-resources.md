---
sidebar_position: 7
sidebar_label: External links and resources
title: 'External links and resources'
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'External links point users to information outside the application or to other resources. In order to make these links and resources accessible, we add alternative text (ALT-text) to icons and write clear link text.'
---

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconApplicationScreen } from "@siemens/ix-icons/icons";
import { iconVideoFile } from "@siemens/ix-icons/icons";
import { iconPdfDocument } from "@siemens/ix-icons/icons";
import { iconOpenExternal } from "@siemens/ix-icons/icons";

#

## General rules for external links

Use brief, meaningful link text to explain the function of the target web page or resource.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>SIMATIC S7-1500 firmware updates <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>Roles and permissions in the documentation <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>Demonstration projects <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Learn about the latest device firmware updates</li>
    <li>{'https://www.company.com/s7-1500-firmware'}</li>
    <li>Remote access</li>
  </ul>
</div>
</div>

Pair link text with universal icons, e.g. the open-external or application-screen icons.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Company Digital ID <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>Manage your software licenses in one place <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon></li>
  </ul>
</div>
</div>

Use descriptive link text instead of long, full URLs and remove the prefix {'https://www'}.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Company homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>acronymfinder.com <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>{'https://www.company.com/s9-1600-firmware'}<br/></li>
    <li>{'https://support.com/us/en/view/107826255'}</li>
  </ul>
</div>
</div>

Avoid generic link text, e.g. "click here" without context or information regarding what opens.
<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Description: The details regarding the collection and use of Analytics Data are described in Software Analytics Notice contained in the Application Function Manual.<br/><br/>
    Link text: Open Application Function Manual</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here</li>
    <li>Read more</li>
  </ul>
</div>
</div>

Use unique link text for each link destination so assistive technology users can distinguish between links (if all links have the same text, it makes it hard to know where each one leads).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Open Assembly Manual<br/>Open Demonstration Project App<br/>Explore Manual</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Click here<br/>Click here<br/>Click here</li>
  </ul>
</div>
</div>

## General rules for resource texts

Use brief, meaningful resource texts and explain the function and type of the resource.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Generative AI chat privacy information <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon></li>
    <li>Interface module IM 155-5 MF HF Equipment Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon></li>
    <li>Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>example.company.com/downloads/file.pdf</li>
    <li>You can read more in the User Documentation</li>
  </ul>
</div>
</div>

Pair resource text with icons, e.g. PDF-document or video-file icons.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Data Privacy Organization <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon></li>
    <li>Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon></li>
  </ul>
</div>
</div>

## Downloading resources

Pair the download of resources with both file type and size whenever possible.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Download User Manual (54 MB) <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon></li>
  </ul>
</div>
</div>

## Text alternatives (ALT-text) for icons

Describe link behavior and type in ALT-texts instead of repeating icon and visible link text.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: external</li>
    <li>Resource text: Function Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon><br/>ALT-text: external PDF</li>
    <li>Resource text:<br/> Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon><br/>ALT-text: external video in new tab</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: Visit our homepage.</li>
  </ul>
</div>
</div>

## Icon legend

| Icon | ALT-text |
|------|----------|
| <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon> | Option 1: external<br/>Option 2: open external link in new tab |
| <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon> | Option 1: external application<br/>Option 2: open external application |
| <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon> | Option 1: PDF<br/>Option 2: external PDF |
| <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon> | Video |

## Language

Specify the language when the resource language differs from the app language (WCAG 3.1.2).

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Application Function Manual (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
    <li>German web page (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
  </ul>
</div>
</div>

## Layout

Separate external links from body text with lists to avoid disrupting user reading flow.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Our platform integrates with various tools to enhance productivity.<br/>
    External resources:<br/> Documentation portal <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
    GitHub repository <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
    Support community <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
  </ul>
</div>
</div>

Split external links from body text with separate paragraphs for faster scanning and enhanced transparency.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Description: Our new automation system improves efficiency by 40% and reduces downtime through predictive maintenance algorithms.<br/><br/>Link text: Efficiency report <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>For more technical details, visit Automation Whitepaper <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.</li>
  </ul>
</div>
</div>

## Emails and telephone numbers

Avoid adding the "mailto" text and for email addresses as this is no longer visible in the UI.

<div className="dos-and-donts">
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>{'mailto:name@examples.com'}</li>
  </ul>
</div>
</div>

Ensure email addresses and phone numbers are clickable.

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>You can reach us at the following telephone number [+1 555-0100](#).</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>555 0100</li>
  </ul>
</div>
</div>

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do add link text for transparency</li>
      <li>Do pair link and resource icons with clear texts</li>
      <li>Do use icons to visualize what will open, e.g. external link, PDF, etc.</li>
      <li>Do use ALT-text to explain icons</li>
    </ul>
  </div>
</div>

## Related

- [Link button (component)](/docs/components/link-button/guide)
- [Icon library](/docs/icons/icon-library.mdx)
- Web Content Accessibility Guidelines (WCAG)
    - [WCAG 2.4.4 (Link Purpose In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 1.1.1 (Non-text Content)](https://www.w3.org/TR/WCAG21/#non-text-content) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 3.1.2 (Language of Parts)](https://www.w3.org/TR/WCAG21/#language-of-parts) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
