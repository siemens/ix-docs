---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Upgrade from V5 to V6 with guidance on design tokens, component changes, framework requirements, optional peer dependencies, and Figma library updates.
---


## Foundations

### Color tokens

[Siemens design tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#siemens-design-tokens)

[Icon and component color properties](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties)

[Removed deprecated component tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-deprecated-component-tokens)

[ECharts computed CSS properties](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-computed-css-properties)

### Typography

[Typography utility classes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#typography-utility-classes)

### Sizing tokens

[Removed common dimension and typography tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens)

[Default icon size is 20](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20)

[`ix-spinner` size scale](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-spinner-size-scale)

[`ix-progress-indicator` size scale](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-size-scale)

## Status variants

[Card family: status variants, `outline`, and `clickable`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable)

[`ix-blind`: status variants and `outline`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-blind-status-variants-and-outline)

## Stylesheets and Sass

[Global CSS and Sass entry points](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#global-css-and-sass-entry-points)

[Removed legacy Sass modules](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules)

[Removed Sass mixins](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-sass-mixins)

## Architectural changes

### Optional peer dependencies

In `@siemens/ix` V6, the following packages are declared as optional `peerDependencies`. This is an intentional breaking contract change in V6.

| Package | Supported version |
| :--- | :--- |
| `@floating-ui/dom` | `^1.6.13` |
| `animejs` | `^4.1.2` |
| `luxon` | `^3.4.4` |
| `@stencil/core` | `^4.43.5` |

#### Normal consumers

Standard/root distribution, the custom-elements entry point `@siemens/ix/components`, loader, hydrate, and Angular/React/Vue wrappers remain self-contained because these runtime libraries are bundled. Users of these normal entry points do not need to install these peers solely for Siemens Industrial Experience.

#### Stencil collection consumers

The published Stencil collection output, using the `collection` / `collection:main` package entries and `dist/collection`, retains bare imports for these runtime libraries. Consumers relying on this Stencil collection must explicitly install **all four packages** listed above. These packages are not optional for collection users.

[Stencil collection optional peers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#stencil-collection-optional-peers)

### Installation

If you rely on the Stencil collection, install all four packages with your preferred package manager:

```bash
pnpm add @floating-ui/dom animejs luxon @stencil/core
```

```bash
npm install @floating-ui/dom animejs luxon @stencil/core
```

```bash
yarn add @floating-ui/dom animejs luxon @stencil/core
```

[React callback types](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types)

[Vue modal types](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-modal-types)

[Vue 3.5 requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-35-requirement)

[Angular 21 requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#angular-21-requirement)

[Hydration class changed to attribute](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#hydration-class-changed-to-attribute)

## Component behavior

### Content header text wraps by default
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#content-header-text-wraps-by-default

### Forms and validation

[Boolean attributes on form components](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components)

[No built-in validation feedback in `novalidate` forms](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms)

### Date and time pickers

[Date Time Picker - locale support](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support)

[`ix-time-picker`: `i18nConfirmTime` renamed to `i18nConfirm`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-i18nconfirmtime-renamed-to-i18nconfirm)

[`ix-time-picker`: `dateTimePickerAppearance` removed](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-datetimepickerappearance-removed)

[Date and time pickers: confirmation and selection](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection)

### Deprecated components

- Pill

## Figma changes

### Applying tokens across the library

Inside components and library assets we
- applied new sys colors
- applied new typography
- applied new density tokens

If you have used the previous colors in your Figma file for custom components:
- Follow the mapping table provided in [Figma](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=146865-399077&t=FAK8a9KbsJkbGeh5-4) to migrate.
- We suggest using a [skill.md](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=147439-14972&t=FAK8a9KbsJkbGeh5-4) to migrate colors.

If you have used the previous typography in your Figma file for custom components:
- Follow the font size mapping in [Figma](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=135347-2143&t=FAK8a9KbsJkbGeh5-4)

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

We changed the icon size from 24px to 20px. This change has been done globally via the Icon library.

Affected components are: ix-blind, ix-breadcrumb, ix-button, ix-card-list, ix-chip, ix-date-dropdown, ix-dropdown, ix-event-list, ix-group, ix-icon-button, ix-input (date time), ix-date-time-picker, ix-key-value, ix-message-bar, ix-popover, ix-split-button, ix-tree, ix-upload, ix-workflow

### Component changelog

| Component | Changelog |
| --- | --- |
| App frame | <strong>Changed</strong><ul><li>Applied min-width to popover news container to align with code</li></ul> |
| App menu | <strong>Changed</strong><ul><li>Changed app-menu size (with menu items, menu category and menu subitem): Collapsed to size-100, expanded to size-160</li></ul><strong>Fixed</strong><ul><li>Fixed dropdown for menu categories by replacing fixed widths with hug content and min-width to align with code</li></ul> |
| Blind | <strong>Added</strong><ul><li>New variant: critical (purple)</li></ul><strong>Changed</strong><ul><li>Adaptions needed with icon size change: changed to auto layout, max height 48px, gap between chevron and title set to 8px again</li></ul><strong>Breaking</strong><ul><li>Reset icon buttons in header so that they receive updates</li><li>Removed old slot</li></ul><strong>Deprecated</strong><ul><li>Blind has been deprecated. Access to old blind: click here (https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q?node-id=388-3986)</li></ul> |
| Button | <strong>Changed</strong><ul><li>Added auto-layout</li></ul><strong>Breaking</strong><ul><li>Reset button group default content text+icon and icon only (otherwise icon color won’t update with property changes)</li></ul> |
| Card | <strong>Added</strong><ul><li>New variants for all cards: critical (purple)</li></ul><strong>Changed</strong><ul><li>Removed color-0 (transparent colors)</li><li>Removed component set background</li></ul><strong>Breaking</strong><ul><li>New boolean property introduced for all cards: outline</li><li>Changed fill color for all outline=false to background-1</li><li>Added color strip for all status variants for outline=false</li></ul> |
| Category filter | <strong>Changed</strong><ul><li>Changed icon button for clear action from oval to rectangular</li><li>Changed height of dropdown area layer to 0px to ensure correct position on all densities</li><li>Applied min-height and center alignment to search icon</li></ul> |
| Charts | <strong>Changed</strong><ul><li>Set density mode to default for all subcomponents</li></ul> |
| Checkbox | <strong>Added</strong><ul><li>Added new slot property</li></ul><strong>Breaking</strong><ul><li>Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Chip | <strong>Changed</strong><ul><li>Changed color for custom variant</li></ul> |
| Date dropdown | <strong>Changed</strong><ul><li>Reset previous/next month icon buttons to receive the correct colors</li></ul> |
| Dropdown | <strong>Changed</strong><ul><li>Adaptions: Icon padding right changed from 4px to 2px</li></ul> |
| Flip tile | <strong>Added</strong><ul><li>Added new slot property</li><li>Added new status variants</li></ul> |
| Group | <strong>Added</strong><ul><li>Added new slot property</li></ul><strong>Changed</strong><ul><li>Replaced extra layer for status indicator with border</li><li>Changed item height from hug-content to tokenized fixed-height</li></ul> |
| Icon button | <strong>Added</strong><ul><li>Added new 20px variant (incl. specs)</li></ul><strong>Changed</strong><ul><li>Reset nested loading spinner instance to receive color changes from main component</li><li>Changed Icon button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner</li></ul> |
| 🔶 Inline notification | <strong>Added</strong><ul><li>Added new Inline notification</li></ul> |
| 🔶 Info page | <strong>Added</strong><ul><li>Component and specification added</li></ul> |
| Input (date), date picker | <strong>Changed</strong><ul><li>Added new 20px variant</li></ul><strong>Fixed</strong><ul><li>Fixed width of preset items from fix-width to hug-content and applied min-width to align with code</li></ul> |
| Input (date time), date time picker | <strong>Changed</strong><ul><li>As the date time input was released already in 5.x, removed 🔶 from name</li></ul> |
| Input (number) | <strong>Added</strong><ul><li>Added 20px end & start slot buttons</li></ul> |
| Input (text) | <strong>Added</strong><ul><li>Added 20px end & start slot buttons</li></ul> |
| Link button | <strong>Added</strong><ul><li>Added new component with new properties: Position and Icon</li></ul><strong>Changed</strong><ul><li>Adapted hover & active state</li></ul><strong>Deprecated</strong><ul><li>Deprecated previous link button</li></ul> |
| 🔶 List | <strong>Added</strong><ul><li>New component</li></ul> |
| Loading modal | <strong>Changed</strong><ul><li>Aligned background color with SDL tokens</li></ul> |
| Message bar | <strong>Changed</strong><ul><li>Changed left padding of icon container</li></ul> |
| Modal | <strong>Changed</strong><ul><li>Set slots for modal</li></ul><strong>Deprecated</strong><ul><li>Marked older version of modal as deprecated</li></ul> |
| Pagination | <strong>Changed</strong><ul><li>Reset prev/next page buttons to receive correct colors from the actual components</li><li>Changed width of nested input & select to size-110</li></ul> |
| Progress indicator | <strong>Changed</strong><ul><li>Changed circular progress indicator from 24px to 20px to align with spinner component and new icon size</li><li>Changed min-width of slots to size-80</li></ul> |
| Radio and radio group | <strong>Breaking</strong><ul><li>Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Search | <strong>Changed</strong><ul><li>Change default width to size-150</li></ul> |
| Slider | <strong>Fixed</strong><ul><li>Fixed y-position of tooltip (moved 1px up)</li></ul> |
| Spinner | <strong>Changed</strong><ul><li>Changed variant names to align with progress indicator (xxs, xs, sm, md, xxl)</li><li>Changed sm-spinner from 24px to 20px to align with new icon sizes</li></ul> |
| Split button | <strong>Breaking</strong><ul><li>Reset icon button and re-apply overrides</li></ul> |
| 🔶 System banner | <strong>Added</strong><ul><li>Added new System banner</li></ul> |
| Table | <strong>Added</strong><ul><li>Added component specification</li></ul> |
| Tabs | <strong>Changed</strong><ul><li>Changed icon size to 20px in icon+text tabs and icon-only tabs</li></ul> |
| Tile | <strong>Added</strong><ul><li>Added component specification</li></ul><strong>Changed</strong><ul><li>Set slots in tile</li></ul><strong>Deprecated</strong><ul><li>Marked older version of tile as deprecated</li></ul> |
| Toast | <strong>Changed</strong><ul><li>Updated colors of background (all variants) and warning icon (warning variant)</li><li>Reset nested button (overrides should be preserved)</li></ul> |
| Toggle | <strong>Changed</strong><ul><li>Changed height & width of thumb to size-50</li></ul><strong>Breaking</strong><ul><li>Removed separate focus variant and added it as a boolean property instead to improve performance and consistency</li></ul> |
| Toggle button | <strong>Added</strong><ul><li>Added new 20px variant</li></ul><strong>Changed</strong><ul><li>Changed Icon toggle button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner</li></ul> |
| Tooltip | <strong>Changed</strong><ul><li>Changed background to 3</li><li>Set slots in tooltip</li></ul><strong>Deprecated</strong><ul><li>Marked older version of tooltip as deprecated</li></ul> |
| Upload | <strong>Changed</strong><ul><li>Updated Icon frame</li></ul> |
| Workflow | <strong>Added</strong><ul><li>Added component specification</li></ul><strong>Changed</strong><ul><li>Changed colors for lines from border-x to text-x colors</li></ul> |
| Scrollbar | <strong>Changed</strong><ul><li>Colors adapted to SDL sys tokens</li><li>Contrast increased to meet WCAG contrast guidelines</li></ul> |
| Common atoms | <strong>Changed</strong><ul><li>Renamed typography formats to have new variant names in brackets prepared and removed 🔶 where there is already a developed variant in place</li></ul> |
