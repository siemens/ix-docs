---
sidebar_position: 0
sidebar_title: Upgrade to V5
title: Upgrade to V5
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system V4 to V5. This guide supports you through all the major changes.
---

# Upgrade to V5.0.0

:::info Recommended upgrade path
We strongly recommend upgrading version by version and not skipping major versions. If your project is still on an older major release, complete each intermediate migration first before moving to Version 5.
:::

## Migrate with your agent

We optimized our [Breaking changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v5.md) with a clear structure that is easy to parse both for humans and for agents.

It starts with a high-level title and then splits the migration into isolated change domains, e.g. button accessibility, theming, ix-application, ix-toast-container, and ix-modals. Within each domain, the guide follows a repeatable pattern:

- a short explanation of what changed and why
- exact API or attribute names that were removed, added, or renamed
- concrete before/after code examples
- migration rules phrased as explicit rewrite steps
- in some sections, a mapping table from V4 behavior to the V5 replacement
- a final validation checklist to confirm the migration is complete

We recommend migrating V4 to V5 section by section, following the [Breaking changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v5.md) as the source of truth. For each change domain: 

1. search the codebase for the deprecated APIs listed in that section
2. apply the documented V5 replacement using the before/after examples and migration rules
3. validate each domain immediately before moving to the next one
4. use the final validation checklist as a whole-repository review once all domains are complete

This domain-by-domain approach is preferred over an all-at-once rewrite because it keeps changes reviewable, reduces migration risk, and makes automated transformations easier to verify.

## What changed in code

This section gives an overview of the main code-level breaking changes in Version 5. For the complete list of changes, see the [Changelog](https://github.com/siemens/ix/releases) and the [Release V5.0.0 blog post](/blog/2026/05/11/release-5) for more context on the rationale behind the update.

### Deprecated and removed components

Version 5 removes several legacy APIs and attributes that were kept for backwards compatibility in earlier releases.

- We removed legacy accessibility label properties on button-related components. Use native `aria-label` on the host element instead.
- `ix-modal` no longer supports `disableEscapeClose`. Use `beforeDismiss` to control whether a modal can be dismissed.
- `ix-toast-container` no longer creates a separate wrapper element in `document.body`. The host element is now the container.

### Component updates

Several existing components now follow clearer and more consistent API patterns in Version 5.

- `ix-time-picker` renames the `i18n-column-header` attribute to `i18n-hour-column-header` to align with the rest of the time-related API.
- `ThemeSwitcher` now uses the new theme and color schema model and updates its event payloads accordingly.
- `ix-application` now separates the theme name from the color schema, replacing combined values, e.g. `classic-dark`.

### Global style updates

Theming is the largest migration topic in Version 5.

- We replaced legacy classes, e.g. `theme-classic-light` and `theme-classic-dark`, with `data-ix-theme` and `data-ix-color-schema` on the `html` element.
- iX no longer injects a default theme automatically, so applications should set both attributes explicitly if a default theme is required.
- The remaining Bootstrap font variable has been removed. If your application still relies on it, map `--bs-font-sans-serif` to `var(--theme-font-family)`.

## What changed in the Figma library

Version 5 also introduces a broader set of updates in the iX Figma library. These changes improve visual consistency, introduce more flexible composition patterns, and align several properties and behaviors more closely with code. Make sure to update to the latest published version. You can review all design-related changes in detail in the Figma library’s release notes.

### Design and visual updates

- Siemens Reference Colors are now adopted across the library, refining status, interaction, and danger color styling.
- Default, hover and active states are visually more distinct across multiple components, including buttons, chips, icon buttons, and toggle buttons.
- Status-driven visuals are applied more consistently, e.g. through strokes or icons in components, e.g. blinds, cards, pills, and chips.

### Structural and behavior changes

- Native Figma slots and slot-based layouts are introduced in key components such as Card and Tabs, allowing more flexible and responsive compositions.
- Internal building blocks such as Tab Item and other internal atoms are moved to internal-only components to simplify the public library surface.
- Interaction behavior for scrolling, overflow, and selection has been updated in areas such as Tabs, Date Dropdown, and Chip close behavior.

### Accessibility and usability improvements

- Critical status colors such as error and info are refined to better meet WCAG contrast requirements.
- Focus, hover, and active state handling is improved across form controls and other interactive elements.
- Date-related inputs such as Date, Date Time, and Date Dropdown now provide clearer picker interactions and better separation of concerns.

### Breaking changes and migration notes

- Card, Action Card, and Push Card are deprecated in favor of new card components that support slot-based layouts.
- Card List examples now use the new Card component.
- Modal, Message Modal, and Loading Modal properties are aligned more closely with code, which can require updates to existing Figma instances.
- Input (Number) steppers are now hidden by default.

The following components were fully removed from the library after prior deprecation:

- Datepicker
- Datetimepicker
- Drawer
- Slider

## Questions ❓🙋‍♀️

Please check out the following resources and don’t hesitate to [contact us](./../support/contact-us) if you have further questions or migration problems.

- [Release V5.0.0 blog post](/blog/2026/05/11/release-5)
- [Breaking Changes guide](https://github.com/siemens/ix/blob/release-5.0.0/BREAKING_CHANGES/v5.md)
- [Changelog](https://github.com/siemens/ix/releases)
