# External links and resources

> External links point users to information outside the application or to other resources. In order to make these links and resources accessible, we add alternative text (ALT-text) to icons and write clear link text.

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconApplicationScreen } from "@siemens/ix-icons/icons";
import { iconVideoFile } from "@siemens/ix-icons/icons";
import { iconPdfDocument } from "@siemens/ix-icons/icons";
import { iconOpenExternal } from "@siemens/ix-icons/icons";

#

## General rules for external links

Use brief, meaningful link text to explain the function of the target web page or resource.

  
    SIMATIC S7-1500 firmware updates <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    Roles and permissions in the documentation <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    Demonstration projects <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon>
  

  
    Learn about the latest device firmware updates
    {'https://www.company.com/s7-1500-firmware'}
    Remote access
  

Pair link text with universal icons, e.g. the open-external or application-screen icons.

  
    Company Digital ID <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    Manage your software licenses in one place <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon>
  

Use descriptive link text instead of long, full URLs and remove the prefix {'https://www'}.

  
    Company homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    acronymfinder.com <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
  

  
    {'https://www.company.com/s9-1600-firmware'}
    {'https://support.com/us/en/view/107826255'}
  

Avoid generic link text, e.g. "click here" without context or information regarding what opens.

  
    Description: The details regarding the collection and use of Analytics Data are described in Software Analytics Notice contained in the Application Function Manual.
    Link text: Open Application Function Manual
  

  
    Click here
    Read more
  

Use unique link text for each link destination so assistive technology users can distinguish between links (if all links have the same text, it makes it hard to know where each one leads).

  
    Open Assembly ManualOpen Demonstration Project AppExplore Manual
  

  
    Click hereClick hereClick here
  

## General rules for resource texts

Use brief, meaningful resource texts and explain the function and type of the resource.

  
    Generative AI chat privacy information <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
    Interface module IM 155-5 MF HF Equipment Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
    Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>
  

  
    example.company.com/downloads/file.pdf
    You can read more in the User Documentation
  

Pair resource text with icons, e.g. PDF-document or video-file icons.

  
    Data Privacy Organization <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
    Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>
  

## Downloading resources

Pair the download of resources with both file type and size whenever possible.

  
    Download User Manual (54 MB) <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>
  

## Text alternatives (ALT-text) for icons

Describe link behavior and type in ALT-texts instead of repeating icon and visible link text.

  
    Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>ALT-text: external
    Resource text: Function Manual <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon>ALT-text: external PDF
    Resource text: Industrial Copilots with Agentic AI <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon>ALT-text: external video in new tab
  

  
    Link text: Visit our homepage <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>ALT-text: Visit our homepage.
  

## Icon legend

| Icon | ALT-text |
|------|----------|
| <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon> | Option 1: externalOption 2: open external link in new tab |
| <IxIcon name={iconApplicationScreen} size="16" aria-label="external application" role="img"></IxIcon> | Option 1: external applicationOption 2: open external application |
| <IxIcon name={iconPdfDocument} size="16" aria-label="PDF" role="img"></IxIcon> | Option 1: PDFOption 2: external PDF |
| <IxIcon name={iconVideoFile} size="16" aria-label="video" role="img"></IxIcon> | Video |

## Language

Specify the language when the resource language differs from the app language (WCAG 3.1.2).

  
    Application Function Manual (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    German web page (German) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
  

## Layout

Separate external links from body text with lists to avoid disrupting user reading flow.

  
    Our platform integrates with various tools to enhance productivity.
    External resources: Documentation portal <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    GitHub repository <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    Support community <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
  

Split external links from body text with separate paragraphs for faster scanning and enhanced transparency.

  
    Description: Our new automation system improves efficiency by 40% and reduces downtime through predictive maintenance algorithms.Link text: Efficiency report <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
  

  
    For more technical details, visit Automation Whitepaper <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>.
  

## Emails and telephone numbers

Avoid adding the "mailto" text and for email addresses as this is no longer visible in the UI.

  
    {'mailto:name@examples.com'}
  

Ensure email addresses and phone numbers are clickable.

  
    You can reach us at the following telephone number [+1 555-0100](#).
  

  
    555 0100
  

## Dos and Don’ts

  
    
      Do add link text for transparency
      Do pair link and resource icons with clear texts
      Do use icons to visualize what will open, e.g. external link, PDF, etc.
      Do use ALT-text to explain icons
    
  

## Related

- [Link button (component)](/docs/components/link-button/guide)
- [Icon library](/docs/icons/icon-library.mdx)
- Web Content Accessibility Guidelines (WCAG)
    - [WCAG 2.4.4 (Link Purpose In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 1.1.1 (Non-text Content)](https://www.w3.org/TR/WCAG21/#non-text-content) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
    - [WCAG 3.1.2 (Language of Parts)](https://www.w3.org/TR/WCAG21/#language-of-parts) <IxIcon name={iconOpenExternal} size="16" aria-label="external" role="img"></IxIcon>
