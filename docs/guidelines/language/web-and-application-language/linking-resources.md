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

const ExternalLink = ({ href = "#", children, target = "_blank" }) => (
	<>
		<IxLinkButton href={href} target={target}>{children}</IxLinkButton>{" "}
		<IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
	</>
);

const AppLink = ({ href = "#", children, target = "_blank" }) => (
	<>
		<IxLinkButton href={href} target={target}>{children}</IxLinkButton>{" "}
		<IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon>
	</>
);

const PdfLink = ({ href = "#", children, target = "_blank" }) => (
	<>
		<IxLinkButton href={href} target={target}>{children}</IxLinkButton>{" "}
		<IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
	</>
);

const VideoLink = ({ href = "#", children, target = "_blank" }) => (
	<>
		<IxLinkButton href={href} target={target}>{children}</IxLinkButton>{" "}
		<IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>
	</>
);

#

## General rules for external links

Use brief, meaningful link text to explain the function of the target web page or resource.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <ExternalLink>SIMATIC S7-1500 firmware updates</ExternalLink>
- <ExternalLink>Roles and permissions in the documentation</ExternalLink>
- <AppLink>Demonstration projects</AppLink>
</div>
<div className="donts" markdown>
- <ExternalLink>Learn about the latest SIMATIC S7-1500 firmware updates on the Siemens homepage</ExternalLink>
- <ExternalLink>https://www.company.com/s7-1500-firmware</ExternalLink>
- <ExternalLink>Remote access</ExternalLink>
</div>
</div>

Pair link text with universal icons, e.g. the open-external or application-screen icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <ExternalLink>Company Digital ID</ExternalLink>
- <AppLink>Manage your software licenses in one place</AppLink>
</div>
</div>

Use descriptive link text instead of long, full URLs and remove the prefix ([https://www.](#)).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <ExternalLink>Company homepage</ExternalLink>
- <ExternalLink>acronymfinder.com</ExternalLink>
</div>
<div className="donts" markdown>
- <ExternalLink>https://www.company.com/s9-1600-firmware</ExternalLink>
- <ExternalLink>https://support.industry.company.com/cs/us/en/view/107826255</ExternalLink>
</div>
</div>

Avoid generic link text, e.g. “click here” without context or information regarding what opens.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- The details regarding the collection and use of Analytics Data are described in Software Analytics Notice contained in the Application Function Manual.<br/>
<PdfLink>Open Application Function Manual</PdfLink>
</div>
<div className="donts" markdown>
- <ExternalLink>Click here</ExternalLink>
- <ExternalLink>Read more</ExternalLink>
</div>
</div>

Use unique link text for each link destination so assistive technology users can distinguish between links (if all links have the same text, it makes it hard to know where each one leads).

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <PdfLink>Open Assembly Manual</PdfLink> / <AppLink>Open Demonstration Project App</AppLink> / <PdfLink>Explore Manual</PdfLink>
</div>
<div className="donts" markdown>
- <ExternalLink>Click here</ExternalLink>. / <ExternalLink>Click here</ExternalLink>. / <ExternalLink>Click here</ExternalLink>.
</div>
</div>

## General rules for resource texts

Use brief, meaningful resource texts and explain the function and type of the resource.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <PdfLink>Generative AI chat privacy information</PdfLink>
- <PdfLink>Interface module IM 155-5 MF HF Equipment Manual</PdfLink>
- <VideoLink>Industrial Copilots with Agentic AI</VideoLink>
</div>
<div className="donts" markdown>
- <PdfLink>example.company.com/downloads/file.pdf</PdfLink>
- <PdfLink>You can read more in the User Documentation</PdfLink>
</div>
</div>

Pair resource text with icons, e.g. PDF-document or video-file icons.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <PdfLink>Data Privacy Organization</PdfLink>
- <VideoLink>Industrial Copilots with Agentic AI</VideoLink>
</div>
</div>

## Downloading resources

Pair the download of resources with both file type and size whenever possible.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- <PdfLink>Download User Manual (54 MB)</PdfLink>
</div>
</div>

## Text alternatives (ALT-text) for icons

Describe link behavior and type in ALT-texts instead of repeating icon and visible link text.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Link text: Visit our <ExternalLink>homepage</ExternalLink><br/>ALT-text: external
- Resource text: <PdfLink>Function Manual</PdfLink><br/>ALT-text: external PDF
- Resource text: <VideoLink>Industrial Copilots with Agentic AI</VideoLink><br/>ALT-text: external video in new tab
</div>
<div className="donts" markdown>
- Link text: Visit our <ExternalLink>homepage</ExternalLink><br/>ALT-text: Visit our homepage.
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
- <ExternalLink>Application Function Manual (German)</ExternalLink>
- <ExternalLink>German web page (German)</ExternalLink>
</div>
</div>

## Layout

Separate external links from body text with lists to avoid disrupting user reading flow.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Our platform integrates with various tools to enhance productivity.<br/><br/>
External resources:<br/> - <ExternalLink>Documentation portal</ExternalLink><br/>- <ExternalLink>GitHub repository</ExternalLink><br/>- <ExternalLink>Support community</ExternalLink>
</div>
</div>

Split external links from body text with separate paragraphs for faster scanning and enhanced transparency.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- Our new automation system improves efficiency by 40% and reduces downtime through predictive maintenance algorithms.<br/><br/><ExternalLink>Efficiency report</ExternalLink>
</div>
<div className="donts" markdown>
- For more technical details, visit <ExternalLink>Automation Whitepaper</ExternalLink>.
</div>
</div>

## Emails and telephone numbers

Avoid adding the “mailto” text and for email addresses as this is no longer added into the UI.

<div className="dos-and-donts" markdown>
<div className="donts" markdown>
- <ExternalLink>mailto: name@examples.com</ExternalLink>
</div>
</div>

Ensure email addresses and phone numbers are clickable.

<div className="dos-and-donts" markdown>
<div className="dos" markdown>
- You can reach us at the following telephone number <ExternalLink>+1 555-0100</ExternalLink>
</div>
<div className="donts" markdown>
- 555 0100
</div>
</div>

## Dos and Don’ts

* Do add link text for transparency
* Do pair link and resource icons with clear texts
* Do use icons to visualize what will open, e.g. external link, PDF, etc.
* Do use ALT-text to explain icons
* Don’t include https://, http: or www in URL text
* Don’t add links in headings or sub-headings

## Related

* <AppLink href="/docs/components/link-button/guide" target="_self">Link buttons (component)</AppLink>
* <AppLink href="/docs/icons/icon-library.mdx" target="_self">Icon library</AppLink>
* <AppLink href="/docs/guidelines/language/formatting/numbers" target="_self">Numbers and percentages</AppLink>
* <ExternalLink href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html">WCAG 2.4.4 (Link Purpose In Context)</ExternalLink>
* <ExternalLink href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html">WCAG 1.1.1 (Non-text Content)</ExternalLink>
* <ExternalLink href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html">WCAG 3.1.2 (Language of Parts)</ExternalLink>
