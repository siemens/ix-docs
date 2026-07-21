---
doc-type: 'tab-item'
sidebar_label: 'Localization'
description: 'Overview'
---

# Overview

Localization adapts a product to a specific language, region, and culture. It includes
translation, formats, visual conventions, legal requirements, and user expectations.

## Language and tone

Language and tone must be clear, accurate, and appropriate for the target audience. Good
localization preserves meaning, not just words, and must also account for plural rules and
punctuation.

### Best practice

- Support translatable strings and integration with translation frameworks.
- Support fallback text for missing translations.
- Use the [UX Writing Guidelines](../../writing-style-guide-getting-started.md) for tone or wording.

## Imagery and colors

Images, symbols, and colors can have different meanings across markets. Review them for cultural
fit and local expectations.

### Best practice

- Validate visuals and semantics per market.

## Currency, date, time, measurement, and measurement system formats

Users expect values to follow local conventions. This includes currencies, dates, times, numbers,
units, and measurement systems such as °C/°F, km/mi, or kg/lb.

### Best practice

- Use locale-aware formatting for dates, times, numbers, percentages, and currencies.
- Allow users locale selection and persistence, e.g. via the `SiLocaleService`.
- Use translated unit labels in components where units are shown.

## User experience and design

Localized interfaces must work with different text lengths and different reading directions. Use
design options such as flexible growing areas, line wrapping, or fixed layouts with scrollbars,
and plan enough space for longer translations.

## LTR & RTL {#ltr-rtl}

LTR (Left-to-Right) refers to languages and scripts that are written and read from left to right.

RTL (Right-to-Left) refers to languages and writing systems that are written and read from right to left.
RTL can require mirrored navigation, icon direction, alignment, and interaction patterns.

### Best practice

- Support RTL-aware behavior in components and overlays.
- Provide dynamic directionality support for Angular CDK integrations.
- Layout and design with variable text length in mind.

## Payment methods

Payment expectations differ by country, including preferred methods, flows, and trust signals.

## Legal and Safety

Legal notices, safety texts, consent flows, and compliance content may vary by market and
jurisdiction.

### Best practice

- Request local lawyers to provide tailored legal artifacts for relevant markets and regions.
- Manage market-specific legal and safety requirements, compliance logic, and legal services in your application.

:::info
The About and Legal components require specific content to comply with Siemens AG regulations. The official content and guidelines are exclusively available for Siemens employees and can be accessed [here](https://code.siemens.com/siemens-ix/ix-brand-theme/-/blob/main/apps/documentation/src/pages/about-legal-information.md?ref_type=heads).
:::

## Customer support

Support channels, contact details, hours, and escalation paths often differ by country or
language.

## Localization (l10n) vs. Internationalization (i18n)

Internationalization (i18n) is the technical preparation that makes localization possible without
code changes. Typical activities include separating translatable text from code, enabling
locale-aware formatting, supporting plural rules, and preparing layouts for text expansion and
RTL.

Localization (l10n) is the adaptation of content and behavior for a specific market, language, or
region. Typical activities include translation, terminology review, adapting formats and units,
checking imagery and legal content, and validating the user experience for the target audience.
