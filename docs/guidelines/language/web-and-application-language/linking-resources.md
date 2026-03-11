---
sidebar_position: 4
sidebar_label: External links and resources
title: 'External links and resources'
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'External links point users to information outside the application or to other resources. In order to make these links and resources accessible, we add alternative text (ALT-text) to icons and write clear link text.'
---

import React from "react";
import { IxIcon, IxLinkButton } from "@siemens/ix-react";
import { iconOpenExternal } from "@siemens/ix-icons/icons";
import { iconApplicationScreen } from "@siemens/ix-icons/icons";
import { iconVideoFile } from "@siemens/ix-icons/icons";
import { iconPdfDocument } from "@siemens/ix-icons/icons";

#

## General rules for external links

Use brief, meaningful link text to explain the function of the target web page or resource.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>SIMATIC S7-1500 firmware updates<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
- <IxLinkButton>Roles and permissions in the documentation<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
- <IxLinkButton>Demonstration projects<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
</div>
<div className="donts" markdown>
- <IxLinkButton>Learn about the latest SIMATIC S7-1500 firmware updates on the homepage</IxLinkButton>
- <IxLinkButton>https://www.company.com/s7-1500-firmware</IxLinkButton>
- <IxLinkButton>Remote access</IxLinkButton>
</div>
</div>

Pair link text with universal icons, e.g. the open-external or application-screen icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>Company Digital ID<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
- <IxLinkButton>Manage your software licenses in one place<IxIcon name={iconApplicationScreen} size="16" aria-label="external Application" role="img"></IxIcon></IxLinkButton>
</div>
</div>

Use descriptive link text instead of long, full URLs and remove the prefix ([https://www.](#)).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>Company homepage<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
- <IxLinkButton>acronymfinder.com<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon></IxLinkButton>
</div>
<div className="donts" markdown>
- <IxLinkButton>https://www.company.com/s9-1600-firmware</IxLinkButton>
- <IxLinkButton>https://support.company.com/us/en/view/107826255</IxLinkButton>
</div>
</div>

Avoid generic link text, e.g. "click here" without context or information regarding what opens.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- The details regarding the collection and use of Analytics Data are described in Software Analytics Notice contained in the Application Function Manual.<br/>
- <IxLinkButton>Open Application Function Manual</IxLinkButton>
</div>
<div className="donts" markdown>
- <IxLinkButton>Click here</IxLinkButton>
- <IxLinkButton>Read more</IxLinkButton>
</div>
</div>

Use unique link text for each link destination so assistive technology users can distinguish between links (if all links have the same text, it makes it hard to know where each one leads).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- - <IxLinkButton>Open Assembly Manual</IxLinkButton> / <IxLinkButton>Open Demonstration Project App</IxLinkButton> / <IxLinkButton>Explore Manual</IxLinkButton>
</div>
<div className="donts" markdown>
- <IxLinkButton>Click here.</IxLinkButton> / <IxLinkButton>Click here.</IxLinkButton> / <IxLinkButton>Click here.</IxLinkButton>
</div>
</div>

## General rules for resource texts

Use brief, meaningful resource texts and explain the function and type of the resource.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>Generative AI chat privacy information</IxLinkButton> <IxIcon name={iconPdfDocument} size="16"></IxIcon>
- <IxLinkButton>Interface module IM 155-5 MF HF Equipment Manual</IxLinkButton> <IxIcon name={iconPdfDocument} size="16"></IxIcon>
- <IxLinkButton>Industrial Copilots with Agentic AI</IxLinkButton> <IxIcon name={iconVideoFile} size="16"></IxIcon>
</div>
<div className="donts" markdown>
- <IxLinkButton>example.company.com/downloads/file.pdf</IxLinkButton>
- <IxLinkButton>You can read more in the User Documentation</IxLinkButton>
</div>
</div>

Pair resource text with icons, e.g. PDF-document or video-file icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>Data Privacy Organization</IxLinkButton> <IxIcon name={iconPdfDocument} size="16"></IxIcon>
- <IxLinkButton>Industrial Copilots with Agentic AI</IxLinkButton> <IxIcon name={iconVideoFile} size="16"></IxIcon>
</div>
</div>

## Downloading resources

Pair the download of resources with both file type and size whenever possible.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <IxLinkButton>Download User Manual (54 MB)</IxLinkButton> <IxIcon name={iconPdfDocument} size="16"></IxIcon>
</div>
</div>

## Text alternatives (ALT-text) for icons

Describe link behavior and type in ALT-texts instead of repeating icon and visible link text.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Link text: Visit our <IxLinkButton>homepage</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: external
- Resource text: <IxLinkButton>Function Manual</IxLinkButton> <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon><br/>ALT-text: external PDF
- Resource text: <IxLinkButton>Industrial Copilots with Agentic AI</IxLinkButton> <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon><br/>ALT-text: external video in new tab
</div>
<div className="donts" markdown>
- Link text: Visit our <IxLinkButton>homepage</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>ALT-text: Visit our homepage.
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
- <IxLinkButton>Application Function Manual (German)</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
- <IxLinkButton>German web page (German)</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
</div>

## Layout

Separate external links from body text with lists to avoid disrupting user reading flow.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Our platform integrates with various tools to enhance productivity.<br/><br/>
External resources:<br/> - <IxLinkButton>Documentation portal</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
- <IxLinkButton>GitHub repository</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon><br/>
- <IxLinkButton>Support community</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
</div>

Split external links from body text with separate paragraphs for faster scanning and enhanced transparency.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Our new automation system improves efficiency by 40% and reduces downtime through predictive maintenance algorithms.<br/><br/><IxLinkButton>Efficiency report</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
</div>
<div className="donts" markdown>
- For more technical details, visit <IxLinkButton>Automation Whitepaper</IxLinkButton> <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
</div>
</div>

## Emails and telephone numbers

Avoid adding the "mailto" text and for email addresses as this is no longer added into the UI.

<div className="dos-and-donts" markdown>
<div className="donts" markdown>
- [mailto: name@examples.com](#)
</div>
</div>

Ensure email addresses and phone numbers are clickable.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- You can reach us at the following telephone number [+1 555-0100](#)
</div>
<div className="donts" markdown>
- 555 0100
</div>
</div>

## Dos and Don�ts

* Do add link text for transparency
* Do pair link and resource icons with clear texts
* Do use icons to visualize what will open, e.g. external link, PDF, etc.
* Do use ALT-text to explain icons
* Don�t include https://, http: or www in URL text
* Don�t add links in headings or sub-headings

## Related

* [Link buttons (component)](/docs/components/link-button/guide)
* [Icon library](/docs/icons/icon-library.mdx)
* [Numbers and percentages](/docs/guidelines/language/formatting/numbers)
* [WCAG 2.4.4 (Link Purpose In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
* [WCAG 1.1.1 (Non-text Content)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
* [WCAG 3.1.2 (Language of Parts)](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
