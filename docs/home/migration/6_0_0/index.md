---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Upgrade from V5 to V6 with guidance on design tokens, component changes, framework requirements, optional peer dependencies, and Figma library updates.
---

:::info

- For general migration guidance, including the recommended migration path, see the [migration overview](../migrationoverview.md).
- Here we provide an overview on the migration based on the breaking changes accessible in [GitHub](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#breaking-changes-v6).
- This guide focuses on breaking changes that require migration. A broader overview of V6 changes and new features is available on our [blog](/blog).
- For designers we provide migration guidance in the section on [Figma changes](#figma-changes).

:::

## Breaking changes

### Foundations

V6 replaces legacy color, typography, and sizing tokens with Siemens Design Language system tokens to align components with a shared visual foundation. Update custom styles and component properties by choosing tokens that match their purpose. This is not a one-to-one rename, and some values and defaults have changed.

#### Community theme

#### Color tokens

- [Replaced legacy tokens with Siemens design tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#siemens-design-tokens)
- [Changed token value shapes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#token-value-shapes)
- [Removed legacy theme exports](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-theme-exports)
- [Changed icon and component color properties to use complete token names](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties)
- [Removed deprecated component tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-deprecated-component-tokens)
- [Removed automatic token prefixing from ECharts computed CSS properties](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-computed-css-properties)

#### Typography

- [Removed unsupported typography utility classes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#typography-utility-classes)
- [Renamed `ix-typography` `textColor` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-typography-textcolor-rename)
- [Changed the default monospace font family](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#monospace-font-family)

#### Sizing tokens

- [Removed common dimension and typography tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens)
- [Replaced common border, radius, and focus tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#common-border-radius-and-focus-overrides)
- [Changed the default icon size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20)
- [Renamed and remapped `ix-spinner` sizes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-spinner-size-scale)
- [Changed the `ix-progress-indicator` circular `sm` size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-size-scale)

### Status variants

V6 aligns status names, colors, and icons with Siemens Design Language so statuses communicate the same meaning across components. Update status values, helper calls, and theming overrides using the component-specific mappings; names such as `warning` and `critical` may remain available but now represent different statuses.

- [Changed card-family status variants, `outline`, and `clickable`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable)
- [Changed `ix-blind` status variants and `outline`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-blind-status-variants-and-outline)
- [Renamed chip, pill, and badge status variants](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#chip-pill-and-badge-status-variant-rename)
- [Renamed `ix-message-bar` status `type` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-message-bar-status-type-rename)
- [Renamed `ix-flip-tile` status `variant` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-flip-tile-status-variant-rename)
- [Renamed `ix-kpi` status `state` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-kpi-status-state-rename)
- [Renamed `ix-toast` status `type` values and helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-toast-status-type-rename)
- [Renamed `ix-progress-indicator` status values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-status-rename)
- [Renamed `showMessage` status helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#showmessage-status-helper-rename)

### Stylesheets and Sass

V6 separates component foundation styles from optional global and legacy styles, giving applications more control over document-wide styling. Update CSS and Sass imports to the supported public entry points, explicitly include any global styles you still need, and replace removed Sass modules, mixins, and shadow aliases.

- [Changed global CSS and Sass entry points](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#global-css-and-sass-entry-points)
- [Removed legacy Sass modules](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules)
- [Removed Sass mixins](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-sass-mixins)
- [Removed shadow utility aliases](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases)

### Architectural changes

V6 updates framework and dependency requirements, strengthens wrapper types, and replaces the hydration class with an attribute to support current tooling, improve type safety, and avoid conflicts with framework-managed classes. Update dependencies, narrow untyped callback values, and review dependency installation and hydration checks for your integration.

#### Optional peer dependencies

In `@siemens/ix` V6, the following packages are declared as optional `peerDependencies`. This is an intentional breaking contract change in V6.

| Package | Supported version |
| :--- | :--- |
| `@floating-ui/dom` | `^1.6.13` |
| `animejs` | `^4.1.2` |
| `luxon` | `^3.4.4` |
| `@stencil/core` | `^4.43.5` |

##### Normal consumers

Standard/root distribution, the custom-elements entry point `@siemens/ix/components`, loader, hydrate, and Angular/React/Vue wrappers remain self-contained because these runtime libraries are bundled. Users of these normal entry points do not need to install these four optional peers solely for Siemens Industrial Experience. `@siemens/ix-icons` remains a required peer for all consumers. The current V6 packages require `@siemens/ix-icons@0.0.0-beta-20261021072559`; version 3.x still uses the legacy color-token lookup and is not compatible with the new system-token names.

##### Stencil collection consumers

The published Stencil collection output, using the `collection` / `collection:main` package entries and `dist/collection`, retains bare imports for these runtime libraries. Consumers relying on this Stencil collection must explicitly install **all four packages** listed above, plus the required `@siemens/ix-icons` peer. These five packages are not optional for collection users.

[Declared Stencil collection runtime dependencies as optional peers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#stencil-collection-optional-peers)

#### Installation

If you rely on the Stencil collection, install all five packages with your preferred package manager:

```bash
pnpm add @floating-ui/dom @siemens/ix-icons@0.0.0-beta-20261021072559 @stencil/core animejs luxon
```

```bash
npm install @floating-ui/dom @siemens/ix-icons@0.0.0-beta-20261021072559 @stencil/core animejs luxon
```

```bash
yarn add @floating-ui/dom @siemens/ix-icons@0.0.0-beta-20261021072559 @stencil/core animejs luxon
```

- [Changed untyped React callback values to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types)
- [Changed untyped Vue modal close reasons to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-modal-types)
- [Raised the minimum Vue version to 3.5](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-35-requirement)
- [Raised the minimum Angular version to 21.2.25](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#angular-21-requirement)
- [Raised the minimum ECharts version to 6.1.0](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-6-requirement)
- [Replaced the hydration class with an attribute](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#hydration-class-changed-to-attribute)

### Component behavior

V6 updates navigation, text wrapping, form validation, and date and time selection to improve security, readability, and consistency with native HTML behavior. Review affected properties and event handlers, especially where your application relies on previous defaults, locale-neutral values, or the distinction between pending and confirmed selections.

- [Changed application switch target behavior](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#application-switch-target-behavior)
- [Enabled content header text wrapping by default](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#content-header-text-wraps-by-default)
- Forms and validation
  - [Changed form boolean attributes to follow native HTML semantics](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components)
  - [Removed built-in validation feedback in `novalidate` forms](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms)
- Date and time pickers
  - [Localized date and time picker event values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support)
  - [Renamed `ix-time-picker` `i18nConfirmTime` to `i18nConfirm`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-i18nconfirmtime-renamed-to-i18nconfirm)
  - [Removed `ix-time-picker` `dateTimePickerAppearance`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-datetimepickerappearance-removed)
  - [Changed date and time picker confirmation and selection behavior](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection)
- Deprecated pill component

## Figma changes

### Applying tokens across the library

In V6 we replace our own local tokens with the official Siemens Design Language tokens. 

Inside components and library assets we
- applied new sys colors
- applied new typography
- applied new density tokens

Here are the steps you need to take in Figma to migrate your designs to the new colors, typography and effects:

- **Enable token library:** Go to assets, select "Add more libraries" and add the Siemens Design Language token library
- **Migrate components:** All deprecated components are collected in a separate page, together with a dedicated migration guide.
- **Migrate colors, text and shadows:** Use the prompt provided on the Figma "Migration to new design tokens" page or follow the mapping tables:
  - [Mapping table for font styles](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9313)
  - [Mapping table for colors](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9141)
  - [Mapping table for effects](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=166008-10490)


### Status variants

In alignment with Siemens Design Language and the new color tokens we renamed status variants and introduced missing status variants.

| Before      | After        |
| ----------- | ------------ |
| primary     | accent       |
| neutral     | neutral      |
| info        | information  |
| success     | success      |
| warning     | caution      |
| critical    | warning      |
| alarm       | danger       |
| N/A         | critical     |

Affected components are: ix-blind, ix-card, ix-action-card, ix-push-card, ix-chip, ix-event-list, ix-flip-tile, ix-kpi, ix-list, ix-message-bar, ix-message-modal, ix-system-banner, ix-toast

### Icon size

For affected components, the default icon size changed from 24px to 20px. Other components and contexts can retain different icon sizes.

Affected components are: ix-blind, ix-breadcrumb, ix-button, ix-card-list, ix-chip, ix-date-dropdown, ix-dropdown, ix-event-list, ix-group, ix-icon-button, ix-input (date time), ix-date-time-picker, ix-key-value, ix-message-bar, ix-popover, ix-split-button, ix-tree, ix-upload, ix-workflow

### Component changelog

| Component | Changelog |
| --- | --- |
| App frame | <ul><li>Applied min-width to popover news container to align with code</li></ul> |
| App menu | <ul><li>Changed app-menu size (with menu items, menu category and menu subitem): Collapsed to size-100, expanded to size-160</li><li>Fixed dropdown for menu categories by replacing fixed widths with hug content and min-width to align with code</li><li>Replaced notification with badge component, boolean to hide/show still works, values will be reset</li></ul> |
| Blind | <ul><li>Added new variant: critical (purple)</li><li>Adaptions needed with icon size change: changed to auto layout, max height 48px, gap between chevron and title set to 8px again</li><li>Breaking: Reset icon buttons in header so that they receive updates</li><li>Breaking: Removed old slot</li><li>Previous blind has been deprecated.</li></ul> |
| Button | <ul><li>Added auto-layout</li><li>Breaking: Reset button group default content text+icon and icon only (otherwise icon color won’t update with property changes)</li></ul> |
| Card | <ul><li>Added new variants for all cards: critical (purple)</li><li>Removed color-0 (transparent colors)</li><li>Removed component set background</li><li>Breaking: New boolean property introduced for all cards: outline</li><li>Changed fill color for all outline=false to background-1</li><li>Added color strip for all status variants for outline=false</li></ul> |
| Category filter | <ul><li>Changed icon button for clear action from oval to rectangular</li><li>Changed height of dropdown area layer to 0px to ensure correct position on all densities</li><li>Applied min-height and center alignment to search icon</li></ul> |
| Charts | <ul><li>Changed density mode to default for all subcomponents</li></ul> |
| Checkbox | <ul><li>Added new slot property</li><li>Breaking: Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Chip | <ul><li>Changed color for custom variant</li></ul> |
| Date dropdown | <ul><li>Reset previous/next month icon buttons to receive the correct colors</li></ul> |
| Dropdown | <ul><li>Changed icon padding right from 4px to 2px</li></ul> |
| Flip tile | <ul><li>Added new slot property</li><li>Added new status variants</li></ul> |
| Group | <ul><li>Added new slot property</li><li>Replaced extra layer for status indicator with border</li><li>Changed item height from hug-content to tokenized fixed-height</li></ul> |
| Icon button | <ul><li>Added new 20px variant (incl. specs)</li><li>Reset nested loading spinner instance to receive color changes from main component</li><li>Changed icon button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner</li></ul> |
| Info page | <ul><li>Added component and specification</li></ul> |
| Input (date), date picker | <ul><li>Added new 20px variant</li><li>Fixed width of preset items from fix-width to hug-content and applied min-width to align with code</li></ul> |
| Input (date time), date time picker | <ul><li>As the date time input was released already in 5.x, removed 🔶 from name</li></ul> |
| Input (number) | <ul><li>Added 20px end & start slot buttons</li></ul> |
| Input (text) | <ul><li>Added 20px end & start slot buttons</li></ul> |
| Link button | <ul><li>Added new component with new properties: Position and Icon</li><li>Adapted hover & active state</li><li>Deprecated previous link button</li></ul> |
| List | <ul><li>Added new component</li></ul> |
| Loading modal | <ul><li>Aligned background color with SDL tokens</li></ul> |
| Message bar | <ul><li>Changed left padding of icon container</li></ul> |
| Modal | <ul><li>Changed slots for modal</li><li>Marked older version of modal as deprecated</li></ul> |
| Pagination | <ul><li>Changed prev/next page buttons to receive correct colors from the actual components</li><li>Changed width of nested input & select to size-110</li></ul> |
| Progress indicator | <ul><li>Changed circular progress indicator from 24px to 20px to align with spinner component and new icon size</li><li>Changed min-width of slots to size-80</li></ul> |
| Radio and radio group | <ul><li>Breaking: Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Search | <ul><li>Changed default width to size-150</li></ul> |
| Slider | <ul><li>Fixed y-position of tooltip (moved 1px up)</li></ul> |
| Spinner | <ul><li>Changed variant names to align with progress indicator (xxs, xs, sm, md, xxl)</li><li>Changed sm-spinner from 24px to 20px to align with new icon sizes</li></ul> |
| Split button | <ul><li>Breaking: Reset icon button and re-apply overrides</li></ul> |
| Table | <ul><li>Added component specification</li></ul> |
| Tabs | <ul><li>Changed icon size to 20px in icon+text tabs and icon-only tabs</li></ul> |
| Tile | <ul><li>Added component specification</li><li>Changed slots in tile</li><li>Marked older version of tile as deprecated</li></ul> |
| Toast | <ul><li>Updated colors of background (all variants) and warning icon (warning variant)</li><li>Reset nested button (overrides should be preserved)</li></ul> |
| Toggle | <ul><li>Changed height & width of thumb to size-50</li><li>Breaking: Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Toggle button | <ul><li>Added new 20px variant</li><li>Changed Icon toggle button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner</li></ul> |
| Tooltip | <ul><li>Changed background to 3</li><li>Changed slots in tooltip</li><li>Marked older version of tooltip as deprecated</li></ul> |
| Upload | <ul><li>Updated Icon frame</li></ul> |
| Workflow | <ul><li>Added component specification</li><li>Changed: colors for lines from border-x to text-x colors</li></ul> |
| Scrollbar | <ul><li>Changed colors to SDL sys tokens</li><li>Changed contrast to meet WCAG contrast guidelines</li></ul> |
| Common atoms | <ul><li>Renamed typography formats to have new variant names in brackets prepared and removed 🔶 where there is already a developed variant in place</li></ul> |
