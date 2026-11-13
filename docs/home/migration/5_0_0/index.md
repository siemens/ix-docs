---
sidebar_position: 0
sidebar_title: Upgrade to V5
title: Upgrade to V5
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system V4 to V5. This guide supports you through all the major changes.
---

## Code migration

This section gives an overview of the main code-level breaking changes in Version 5. For the complete list of changes, see the [Changelog](https://github.com/siemens/ix/releases) and the [Release V5.0.0 blog post](/blog/2026/05/21/release-5) for more context on the rationale behind the update.

### Deprecated and removed components and API resources

Version 5 removes several legacy APIs and attributes that were kept for backwards compatibility in earlier releases.

- We removed legacy accessibility label properties on button-related components. Use native `aria-label` on the host element instead.
- `ix-modal` no longer supports `disableEscapeClose`. Use `beforeDismiss` to control whether a modal can be dismissed.
- `showModal()` and `ModalConfig` no longer support the no-op `container`, `keyboard`, and `title` options. Remove them and define titles in the modal content instead.
- `ix-toast-container` no longer creates a separate wrapper element in `document.body`. The host element is now the container.
- `ix-split-button` no longer supports the `placement` property because it did not affect dropdown positioning.

### Component updates

Several existing components now follow clearer and more consistent API patterns in Version 5.

- `ix-breadcrumb` now requires stable `breadcrumbKey` values on items. `nextItems` also use objects with `label` and `breadcrumbKey`, and click payloads now expose the key.
- `ix-card-list` now reveals all hidden cards by default when the show-all or show-more action is triggered. If you previously implemented custom reveal behavior, call `preventDefault()` in the event handler.
- `ix-time-picker` renames the `i18n-column-header` attribute to `i18n-hour-column-header` to align with the rest of the time-related API.
- `ix-tabs` changed from index-based selection to key-based selection. Replace `selected` with `activeTabKey`, `selectedChange` with `tabChange`, and add a unique `tabKey` to every tab item.
- `ix-menu-about` and `ix-menu-settings` now use tab keys consistently. New slotted `ix-tabs` integrations require `suppressLegacyTabs`, and `ix-menu-about-news` replaces `about-item-label` with `activeAboutTabKey`.
- `ThemeSwitcher` now uses the new theme and color schema model and updates its event payloads accordingly.
- `ix-application` now separates the theme name from the color schema, replacing combined values, e.g. `classic-dark`.
- `@siemens/ix-aggrid` now expects `@siemens/ix` as a direct dependency in the consuming application.

### Global style updates

Theming is the largest migration topic in Version 5.

- We replaced legacy classes, e.g. `theme-classic-light` and `theme-classic-dark`, with `data-ix-theme` and `data-ix-color-schema` on the `html` element.
- iX no longer injects a default theme automatically, so applications should set both attributes explicitly if a default theme is required.
- `ThemeSwitcher` is now fully aligned with the split theme model: replace `setVariant()` with `setColorSchema()`, `schemaChanged` with `themeChanged`, and update handlers to read the new object payload.
- The remaining Bootstrap font variable has been removed. If your application still relies on it, map `--bs-font-sans-serif` to `var(--theme-font-family)`.

## What changed in the Figma library

Version 5 also introduces a broader set of updates in the iX Figma library. These changes improve visual consistency, introduce more flexible composition patterns, and align several properties and behaviors more closely with code. Review all design-related changes in detail in the Figma library’s release notes and ensure you update to the latest published version.

### Design and visual updates

- Siemens reference colors are now adopted across the library, refining status, interaction, and danger color styling.
- Default, hover and active states are visually more distinct across multiple components, including buttons, chips, icon buttons, and toggle buttons.
- Status-driven visuals are applied more consistently, e.g. through strokes or icons in components, such as blinds, cards, pills, and chips.

### Structural and behavior changes

- Native Figma slots and slot-based layouts are introduced in key components such as [card](/docs/components/card) and [tabs](/docs/components/tabs), allowing more flexible and responsive compositions.
- Internal building blocks such as [tab item](/docs/components/tabs) and other internal atoms have been moved to internal-only components to simplify the public library surface.
- Interaction behavior for scrolling, overflow and selection has been updated in areas such as [tabs](/docs/components/tabs), [date dropdown](/docs/components/date-dropdown), and [chip](/docs/components/chip) close behavior.

### Accessibility and usability improvements

- Critical status colors such as error and info are refined to better meet WCAG contrast requirements.
- Focus, hover, and active state handling is improved across form controls and other interactive elements.
- Date-related inputs such as [date](/docs/components/input-date), [date time](/docs/components/input-date-time), and [date dropdown](/docs/components/date-dropdown) now provide clearer picker interactions and a clearer distinction between input and picker behavior.

### Breaking changes and migration notes

- [Card](/docs/components/card), action card and push card are deprecated in favor of new card components that support slot-based layouts.
- [Card list](/docs/components/card-list) examples now use the new card component.
- [Modal](/docs/components/modal), [message modal](/docs/components/message-modal), and [loading modal](/docs/components/loading-modal) properties are aligned more closely with code, which can require updates to existing Figma instances.
- [Number input](/docs/components/input-number) steppers are now hidden by default.

The following components were fully removed from the library after prior deprecation:

- Datepicker
- Datetimepicker
- Drawer
- Slider

## Questions ❓🙋‍♀️

Please check out the following resources and don’t hesitate to [contact us](./../support/contact-us) if you have further questions or migration problems.

- [Release V5.0.0 blog post](/blog/2026/05/21/release-5)
- [Breaking Changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v5.md)
- [Changelog](https://github.com/siemens/ix/releases)
