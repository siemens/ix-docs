---
authors: [felixleist]
tags: [release]
---

# Release V5.0.0

![banner](../2026-05-11-release-5/2605_blog_5-0.png)

Version 5 marks a step forward for the Industrial Experience Design System. This major release focuses on improving accessibility, removing outdated components and strengthening the connection between design tokens, Figma, and code.

<!-- truncate -->

# Why Version 5?

With Version 5, we took the opportunity of a major release to address topics that require breaking changes, areas where incremental updates were no longer enough.

Our goals were clear:

- reduce legacy APIs and outdated approaches
- align components with modern web and accessibility standards
- strengthen the connection between design tokens, Figma, and code

# Color Tokens: Aligned foundations

![color-tokens](../2026-05-11-release-5/2605_blog_tokens.png)

One of the most important improvements in Version 5 is the alignment of color tokens.

This activity is driven by the Siemens Design Language, with the goal of sharing tokens across the different design systems in the organization.

- color tokens are now strictly reference-based
- background, text, and accent tokens follow a clear hierarchy
- token naming is aligned to support shared reference tokens across Siemens design systems
- interaction colors allow distinctive interaction states for keyboard interactions

# Accessibility: Stronger by default

![accessibility](../2026-05-11-release-5/2605_blog_accessibility.png)

Accessibility was a core driver for Version 5. In this release, we focused on keyboard navigation and interaction clarity, especially in complex components such as:

- dropdowns
- menus
- tabs
- composite form elements

Key improvements include:

- refactored keyboard flows
- clearer focus handling
- reduced reliance on custom workarounds

# Date and Time: New input capabilities

![date-and-time](../2026-05-11-release-5/2605_blog_datetime.png)

Version 5 introduces new and improved date- and time-related components, including:

- a new date-time input
- a dedicated range field concept
- improved interaction consistency across date pickers

These updates improve:

- usability in data-heavy applications
- consistency across locales
- integration with forms and validation logic

This area also benefited from architectural cleanup, making future extensions much simpler.

# Tabs: Smarter overflow handling

![tabs-overflow](../2026-05-11-release-5/2605_blog_tab-overflow.png)

Tabs have been reworked to better handle responsive scenarios.

- tab overflow is handled more intelligently
- a "More menu" keeps all tabs accessible, regardless of viewport size
- visual styling is aligned with updated layout conventions
- a continuous border helps separate the content below the tabs
- updated visuals make the selected tab more distinctive

# Cards: Reworked for Figma native slots

![Cards](../2026-05-11-release-5/2605_blog_Cards.png)

The card updates in Version 5 are focused on the Figma library and are not related to code changes.

This rework introduces native Figma slots for card components, making composition more flexible and enabling more responsive card behavior directly in the library.

This improvement required a breaking change in the Figma library:

- older versions of card components are now deprecated
- reworked card components are now provided under the same existing names

Additional improvements include:

- a new property for switching between outline and filled variants
- an example showing slot usage for responsive card behavior


# ...and lots more

Beyond the bigger themes, Version 5 also includes:

- non-blocking modal behavior improvements
- architectural refactoring under the hood
- bug fixes and performance improvements
- updated component specifications in Figma

While these may not always be visible at first glance, they contribute significantly to stability, consistency, and future development speed.

# Breaking changes: Meaningful, not accidental

Because Version 5 is a major release, some breaking changes were unavoidable and intentional.

A dedicated [migration guide](/docs/home/migration/5_0_0) walks through the required updates step by step and highlights what has changed for developers and designers.

# What this means for you

If you are already on Version 4:

- expect a manageable one-time migration effort
- benefit from cleaner APIs and more predictable behavior afterward

If you are starting new:

- Version 5 offers a stronger baseline
- fewer legacy constructs
- a clearer path forward
