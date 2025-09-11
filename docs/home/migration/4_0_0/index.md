---
sidebar_position: 0
sidebar_title: Upgrade to v4
title: Upgrade to v4
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system V3 to V4. This guide supports you through all the major changes.
---

# Upgrade to v4.0.0

## TL;DR

- We upgraded to [Angular 20](#angular-20).
- We renamed the [button variants](#ix-button-variants) to better reflect their usage.
- Map and basic navigation have been removed in favor of the [application](#removed-basic-navigation-and-map-navigation) component.
- Drawer has been [deprecated](#drawer) in favor of [panes](/docs/components/panes/guide).
- We made changes to the [elevation principle](#updated-elevation-principle) which means teams need to check whether their components need an outline.

## Updated dependencies

### Angular 20

Important: Projects using `@siemens/ix-angular` must upgrade to Angular 20 before updating to this version. Some APIs deprecated in previous Angular versions may have been removed; review the Angular 20 changelog for migration steps. Ensure all third-party Angular libraries are compatible with V20 to avoid runtime issues.

## Renamed or removed icons

<div class="table-full-width table-column-equal-width">
| ❌ **Deprecated** | ✅ **Replace with**       |
| :----------------- | :------------------------- |
| `cam`             | Replace with `output-cam` |
</div>

## Deprecated and removed components

### Removed basic navigation and map navigation

Elements from basic and map navigation can be replaced by the following components:

<div class="table-full-width table-column-equal-width">
| ❌ **Navigation elements** | ✅ **Replace with**                                                                                                 |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| App header                 | Replace with [application header](/docs/components/application-header/guide)                                        |
| Navigation menu            | Replace with [application menu](/docs/components/application-menu/guide)                                            |
| Sidebar                    | Replace with [inline pane](/docs/components/panes/guide)                                                            |
| Sidebar icon               | Automatically replaced with collapse/expand from [inline pane](/docs/components/panes/guide)                        |
| Overlay                    | Replace with [floating pane](/docs/components/panes/guide) or replace the content with the original overlay content |
</div>

### Drawer

The drawer component has been deprecated and will be removed in the next major release. We recommend using [panes](../../../components/panes/index.mdx) instead, which provide similar functionality with improved performance and usability. Use this configuration for a similar experience:

```html
<ix-pane
  heading="Title"
  variant="floating"
  composition="right"
  borderless="true"
  size="320px"
  close-on-click-outside="true"
  hide-on-collapse
>
  My content
</ix-pane>
```

Here is a comparison of the properties and events between the drawer and pane components:

<div class="table-full-width table-column-equal-width">
| ❌ **Drawer**     | ✅ **Pane**          |
| :----------------- | :-------------------- |
| `expanded`        | `show`               |
| `width`           | `size`               |
| `min-width`       | (not available)      |
| `max-width`       | (not available)      |
| `full-height`     | (not available)      |
| `on-drawer-close` | `on-expanded-change` |
| `on-open`         | `on-expanded-change` |
</div>

Additional changes you need to consider when migrating from drawers to panes:

- You may need to adjust your content layout accordingly since pane contents have a default padding of `16px`.
- You now need to define a title for the pane using the `heading` property.

## Component updates

### ix-application

- `min-width: 0` has been added to the content-area in `ix-application` to prevent the flex container from growing beyond the screen width.
- If you have implemented a workaround for this behavior, your application's layout might be affected by this change.

### ix-button variants

Affected components:

- ix-button
- ix-dropdown-button
- ix-icon-button
- ix-split-button
- ix-toggle-button
- ix-icon-toggle-button

- Renamed variant `secondary` to `subtle`
- Removed the property `outline` in favor of new `secondary` variants
- Removed the property `ghost` in favor of new `tertiary` variants

![Buttons](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6708-52302&t=bGky2tHjBPC9fOGT-4)

To take over the changes, rename all button variants according to this table. Start with renaming `secondary` variants to `subtle` to avoid unwanted overriding.

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `secondary`    | `false`        | `false`      | `subtle-primary`   |
| `secondary`    | `true`         | `false`      | `subtle-secondary` |
| `secondary`    | `false`        | `true`       | `subtle-tertiary`  |
| `primary`      | `false`        | `false`      | `primary`          |
| `primary`      | `true`         | `false`      | `secondary`        |
| `primary`      | `false`        | `true`       | `tertiary`         |
| `danger`       | `false`        | `false`      | `danger-primary`   |
| `danger`       | `true`         | `false`      | `danger-secondary` |
| `danger`       | `false`        | `true`       | `danger-tertiary`  |
</div>

For buttons without an explicit set variant, the default is used. As defaults differ between the button components, the renaming should be component-specific.

#### Button with default variant

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `default`      | `false`        | `false`      | `primary`          |
| `default`      | `true`         | `false`      | `secondary`        |
| `default`      | `false`        | `true`       | `tertiary`         |
</div>

#### Dropdown button with default variant

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `default`      | `false`        | `false`      | `primary`          |
| `default`      | `true`         | `false`      | `secondary`        |
| `default`      | `false`        | `true`       | `tertiary`         |
</div>

#### Icon button with default variant

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `default`      | `false`        | `false`      | `subtle-primary`   |
| `default`      | `true`         | `false`      | `subtle-secondary` |
| `default`      | `false`        | `true`       | `subtle-tertiary`  |
</div>

#### Split button with default variant

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `default`      | `false`        | `false`      | `primary`          |
| `default`      | `true`         | `false`      | `secondary`        |
| `default`      | `false`        | `true`       | `tertiary`         |
</div>

#### Toggle button and icon toggle button with default variant

<div class="table-full-width table-column-equal-width">
| ❌ **Variant** | ❌ **Outline** | ❌ **Ghost** | ✅ **New variant** |
| :-------------- | :-------------- | :------------ | :------------------ |
| `default`      | `false`        | `false`      | `subtle-primary`   |
| `default`      | `true`         | `false`      | `subtle-secondary` |
| `default`      | `false`        | `true`       | `subtle-tertiary`  |
</div>

We recommend you visually review your changes. Ensure that `subtle` variants are not mixed with the default button.

### ix-pane

- Added `close-on-click-outside` property.
- Added `aria-label-close-button` property.
- Added `aria-label-expand-button` property.
- Added `aria-label-collapse-button` property.

### ix-aggrid

We are updating to the latest AG Grid version and are providing a new brand-aligned iX theme.

#### Design

- Publishing a new 'AG Grid theme' library
- Deprecating AG Grid components from 'iX components' Figma library
- Note: Manual replacement effort needed, there is no automated replacement possible

<div class="table-full-width table-column-equal-width">
| ❌ **Deprecated**                     | ✅ **Replace with**                 |
| :------------------------------------- | :----------------------------------- |
| AG Grid Building Blocks / Data Cell   | Grid Cell                           |
| AG Grid Building Blocks / Header Cell | Grid Header                         |
| AG Grid Building Blocks / Header Row  | not needed                          |
| AG Grid Building Blocks / Row         | not needed                          |
| AG Grid component / AG Grid Column    | -                                   |
| AG Grid component / AG Grid Row       | -                                   |
| AG Grid component / AG Grid Table     | AG Grid (Row & Column based layout) |
</div>

#### Implementation

TBD

## Global style updates

### Updated elevation principle

With the updated elevation principle, some components require a visual outline if they are placed on `color-2` or `component-1`. See more in the styles chapter on [elevation](https://ix.siemens.io/docs/styles/elevation).

![Elevation pricinple](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6707-50604&t=bGky2tHjBPC9fOGT-4)

<div class="table-full-width table-column-equal-width">
| **Component**                                               | **Variant** | **Property**          |
| :----------------------------------------------------------- | :----------- | :--------------------- |
| [Card, Push card, Action card](/docs/components/card/guide) | `filled`    | use variant `outline` |
| [Blind](/docs/components/blind/guide)                       | `filled`    | use variant `outline` |
</div>

### Legacy theme

The previous elevation principle (V3.x) is reflected in the legacy themes and will be available for a smooth transition phase.

- [Legacy] Brand light
- [Legacy] Brand dark

## Questions ❓🙋‍♀️

Check out the [Breaking Changes guide](https://github.com/siemens/ix/blob/release-4.0.0/BREAKING_CHANGES/v4.md) and if you have further questions or migration problems [contact us](./../support/contact-us).
