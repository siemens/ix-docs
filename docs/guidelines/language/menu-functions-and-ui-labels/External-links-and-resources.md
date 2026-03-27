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

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- SIMATIC S7-1500 firmware updates
- Roles and permissions in the documentation
- Demonstration projects
</div>
<div className="donts" markdown>
- Learn about the latest device firmware updates
- {'https://www.company.com/s7-1500-firmware'}
- Remote access
</div>
</div>

Pair link text with universal icons, e.g. the open-external or application-screen icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Company Digital ID <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- Manage your software licenses in one place <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon>
</div>
</div>

Use descriptive link text instead of long, full URLs and remove the prefix {'https://www.'}.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Company homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- acronymfinder.com <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
<div className="donts" markdown>
- {'https://www.company.com/s9-1600-firmware'}<br/>
- {'https://support.company.com/us/en/view/107826255'}
</div>
</div>

Avoid generic link text, e.g. "click here" without context or information regarding what opens.
<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Description: The details regarding the collection and use of Analytics Data are described in Software Analytics Notice contained in the Application Function Manual.<br/><br/>
Link text: Open Application Function Manual
</div>
<div className="donts" markdown>
- Click here
- Read more
</div>
</div>

Use unique link text for each link destination so assistive technology users can distinguish between links (if all links have the same text, it makes it hard to know where each one leads).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Open Assembly Manual<br/>Open Demonstration Project App<br/>Explore Manual
</div>
<div className="donts" markdown>
- Click here<br/>Click here<br/>Click here
</div>
</div>

## General rules for resource texts

Use brief, meaningful resource texts and explain the function and type of the resource.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Generative AI chat privacy information <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
- Interface module IM 155-5 MF HF Equipment Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
- Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>
</div>
<div className="donts" markdown>
- example.company.com/downloads/file.pdf
- You can read more in the User Documentation
</div>
</div>

Pair resource text with icons, e.g. PDF-document or video-file icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Data Privacy Organization <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
- Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>
</div>
</div>

## Downloading resources

Pair the download of resources with both file type and size whenever possible.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Download User Manual (54 MB) <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
</div>
</div>

## Text alternatives (ALT-text) for icons

Describe link behavior and type in ALT-texts instead of repeating icon and visible link text.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: external
- Resource text: Function Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon><br/>ALT-text: external PDF
- Resource text:<br/> Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon><br/>ALT-text: external video in new tab
</div>
<div className="donts" markdown>
- Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: Visit our homepage.
</div>
</div>

### Icon legend

| Icon | ALT-text |
|------|----------|
| <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon> | Option 1: external<br/>Option 2: open external link in new tab |
| <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon> | Option 1: external application<br/>Option 2: open external application |
| <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon> | Option 1: PDF<br/>Option 2: external PDF |
| <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon> | video |

## Language

Specify the language when the resource language differs from the app language (WCAG 3.1.2).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Application Function Manual (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- German web page (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
</div>

## Layout

Separate external links from body text with lists to avoid disrupting user reading flow.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Our platform integrates with various tools to enhance productivity.<br/>
External resources:<br/> Documentation portal <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
GitHub repository <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
Support community <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
</div>

Split external links from body text with separate paragraphs for faster scanning and enhanced transparency.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Description: Our new automation system improves efficiency by 40% and reduces downtime through predictive maintenance algorithms.<br/>Link text: Efficiency report <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
<div className="donts" markdown>
- For more technical details, visit Automation Whitepaper <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
</div>
</div>

## Emails and telephone numbers

Avoid adding the "mailto" text and for email addresses as this is no longer visible the UI.

<div className="dos-and-donts" markdown>
<div className="donts" markdown>
- {'mailto:name@examples.com'}
</div>
</div>

Ensure email addresses and phone numbers are clickable.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- You can reach us at the following telephone number +1 555-0100
</div>
<div className="donts" markdown>
- 555 0100
</div>
</div>

## Dos and Don'ts

-  Do add link text for transparency
- Do pair link and resource icons with clear texts
- Do use icons to visualize what will open, e.g. external link, PDF, etc.
- Do use ALT-text to explain icons
- Don't include https://, http: or www in URL text
- Don't add links in headings or sub-headings

## Related

- [Link button (component)](/docs/components/link-button/guide)
- [Icon library](/docs/icons/icon-library.mdx)
- [Numbers and percentages](/docs/guidelines/language/formatting/numbers)
- Web Content Accessibility Guidelines (WCAG)
    - [WCAG 2.4.4 (Link Purpose In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 1.1.1 (Non-text Content)](https://www.w3.org/TR/WCAG21/#non-text-content) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 3.1.2 (Language of Parts)](https://www.w3.org/TR/WCAG21/#language-of-parts) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
