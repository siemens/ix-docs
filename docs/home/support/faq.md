---
sidebar_position: 2
sidebar_label: FAQ
title: FAQ
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Welcome to the Industrial Experience design system FAQ. These are your go-to resource for quick and clear answers about Industrial Experience. Whether you’re just starting with the design system or need insights into integration and functionality, you’ll find answers to the most common questions here. If you can’t find what you’re looking for, feel free to reach out. The FAQ are continuously updated, and we welcome suggestions for improvement via email to our support team. Thank you for choosing to use Siemens Industrial Experience.'
---

import Accordion from '@site/src/components/Accordion';
import './faq.css';

#

<div className="h2-faq">
## System access and use
</div>

<Accordion title="What’s the difference between the classic theme and the Siemens brand theme?" id="brand-vs-os">
The classic theme is the default that can be utilized by any application, including non-Siemens applications. In contrast, the Siemens brand theme is exclusively available to Siemens employees and business partners, incorporating specific Siemens brand elements. Both themes are offered in dark and light modes. Additionally, you have the flexibility to create custom themes that align with third-party style guides.
</Accordion>

<Accordion title="Which browsers are supported?" id="vendor-support">
Although our design system can be used with any modern browser, we recommend Chrome for the best user experience.
</Accordion>

<Accordion title="Which device types are supported?" id="device-type-support">
Our design system is tailored for tablets and desktop computers, not smartphones. However many components, including the main navigation, are mobile-ready. We support breakpoints for the following screen sizes to ensure flexibility across various devices, even though our primary focus is on larger screens:

- Small screens: &lt;768 pixels
- Medium screens: 768-1280 pixels
- Large screens: &gt;1280 pixels

</Accordion>

<Accordion title="Can I build mobile applications with Siemens Industrial Experience?" id="mobile">
With the help of our design system, you are able to swiftly build the user interface of your mobile web app or hybrid app.
Read more on the topic in our development and UX guides on mobile development with the Industrial Experience Design System [here](/docs/guidelines/mobile/mobile-app-dev).
</Accordion>

<Accordion title="What languages does Industrial Experience support?" id="i18n" showBorderBottom>
Our design system uses English as default, but it can be used with any language. All texts are fully customizable and therefore integrate nicely with third-party i18n solutions which means your software can easily be adapted for users of different cultures and languages.
</Accordion>

<div className="h2-faq">
## Contribution and development
</div>

<Accordion title="How do I contribute to or report issues in the design system?" id="contributions">
We want everyone to contribute to our design system and play a part in its development. There are three main ways to contribute to or report issues:
- As a Siemens employee or business partner: Post in our [Viva Engage community](https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI1ODIzNzc5NjM1MiJ9)
- As an open-source library user: Contribute within the [Siemens Xcelerator Community](https://community.siemens.com/c/ix/30) or open tickets in [Github](https://github.com/siemens/ix)
- Directly contact our team regarding larger topics: [team.ix.industry@siemens.com](mailto:team.ix.industry@siemens.com)
For more information, see our [GitHub Contributing Guide](https://github.com/siemens/ix/blob/main/CONTRIBUTING.md) which has guidance on bug reporting, workflow issues and suggesting enhancements.
</Accordion>

<Accordion title="Can I request new components?" id="feature-requests" showBorderBottom>
Absolutely! Please add requests for the future in [Github](https://github.com/siemens/ix) or [Siemens Xcelerator Community](https://community.siemens.com/c/ix/30).
</Accordion>

<div className="h2-faq">
## Customization and framework Support
</div>

<Accordion title="How do I use custom icons?" id="custom-icons">
The steps to incorporate your own custom SVG icon are found under the developing tab, in [Industrial Experience documentation](/docs/icons/developing-with-icons#integrate-external-icons). There is also a guide for designing new icons based on the Industrial Experience (brand) style.
</Accordion>

<Accordion title="Why can’t I customize my components?" id="component-customization">
Users are free to utilize open-source libraries at their discretion. However, customizing components may prevent future updates of our libraries from being applied to your software. Industrial Experience is built on the Web Component standard, encapsulating components within a local Shadow DOM. This prevents external styling from affecting the components, ensuring that future updates remain compatible and do not break your software due to custom styling.
</Accordion>

<Accordion title="What kind of framework support is there?" id="framework-support">
Our design system is built with plain Web Components and is, therefore, framework agnostic. For better integration, we provide support for some of the most popular web development frameworks in Angular, React and Vue. You can find more information about our frameworks [here](/docs/home/getting-started/developers#development-frameworks).
</Accordion>

<Accordion title="What does open source mean within our design system?" id="open-source" showBorderBottom>
Our codebase is openly and freely accessible for anyone to view, modify and distribute. We want to foster collaboration and innovation by allowing developers, designers and UX writers from around the world to contribute improvements and new features, leading to a more robust and versatile platform. We hope that this openness enhances digitalization while enabling rapid development and adaptation to new technologies.
</Accordion>

<div className="h2-faq">
## Files, documentation and accessibility
</div>

<Accordion title="Where are the component Figma files and how can I access them?" id="figma-files">
[Here](/docs/home/getting-started/designers#figma-library) you will find information on how to get Figma, how to access the most important Industrial Experience libraries in Figma. Remember the Siemens brand library contains Siemens specific brand elements and is only accessible to Siemens employees and business partners. For the classic theme we haven’t updated Figma files, but you can use the code components.
</Accordion>

<Accordion title="Do we meet the WCAG and accessibility levels?" id="a11y-maturity-levels">
We are working towards meeting the WCAG (Web Content Accessibility Guidelines) and other relevant accessibility standards. Our team is dedicated to ensuring that our design system is accessible to all users. While we’re still in the process of fully aligning with these guidelines, we have made significant progress and are continuously improving our accessibility features. We appreciate your patience and understanding as we strive to achieve full compliance. For specific accessibility concerns or updates on our progress, please feel free to reach out to our team.
</Accordion>

<Accordion title="How does the release schedule work?" id="release-info">
The Siemens Industrial Experience design team provides a transparent versioning and release process. For more details on our versioning, release types, frequency, and support policies, visit our [Roadmap](../releases/roadmap.md) and [Versioning and release](../releases/release-version.md).
</Accordion>

<Accordion title="Can I use the design system to build my documentation?" id="docu-theme" showBorderBottom>
The Siemens Industrial Experience design system is intended for building industrial applications. If you are a Siemens AG employee looking to create a documentation website, use the [official MkDocs theme](https://code.siemens.com/code-ops/docs-theme) for documentation purposes. This ensures consistency and alignment with Siemens documentation standards.
</Accordion>