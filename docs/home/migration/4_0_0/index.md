---
sidebar_position: 0
sidebar_title: Upgrade to v4
title: Upgrade to v4
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system v3 to v4. This guide introduces all major changes.
---
# Upgrade to v4.0.0

## TL;DR
- We upgrade to [Angular 20](#angular-20).
- We renamed the [button variants](#ix-button) to better reflect their usage.
- Map and basic navigation have been removed in favor of the [application](#basic-navigation-and-map-navigation) component.
- Drawer has been deprecated in favor of [panes](#deprecated-drawer).
- We made changes to the [elevation principle](#updated-elevation-principle), you need to check if your components need an outline.

## Updating dependencies

### Angular 20

Projects using `@siemens/ix-angular` must upgrade to Angular 20 before updating to this version. Some APIs deprecated in previous Angular versions may have been removed; review the Angular 20 changelog for migration steps. Ensure all third-party Angular libraries are compatible with v20 to avoid runtime issues.

## Icons renamed or removed

| ❌ **Deprecated**    | ✅ **Replace with**      |
| -------------------------------- | ------------------------ |
| `cam`                      | Replace with `output-cam`                  |

## Deprecated and removed components

### Basic navigation and map navigation

Elements from basic and map navigation can be replaced by the following components:

| ❌ **Navigation elements**    | ✅ **Replace with**      |
| -------------------------------- | ------------------------ |
| App header                      | Replace with [application header](/docs/components/application-header/guide)                  |
| Navigation menu                      | Replace with [application menu](/docs/components/application-menu/guide)                  |
| Sidebar                    | Replace with [inline pane](/docs/components/panes/guide)                  |
| Sidebar icon                    | Automatically replaced with collapse/expand from [inline pane](/docs/components/panes/guide)                  |
| Overlay                    | Replace with [floating pane](/docs/components/panes/guide) or replace the content with the original overlay content                  |


### Deprecated drawer

The drawer component has been deprecated and will be removed in the next major release. We recommend using [panes](../../../components/panes/index.mdx) instead, which provide similar functionality with improved performance and usability. Use this configuration for a similar experience:

```html
<ix-pane
	heading="Title"
	variant="floating"
	composition="right"
	borderless="true"
	size="320px"
	close-on-click-outside="true"
	hide-on-collapse>
	My content
</ix-pane>
```

Here is a comparison of the properties and events between the drawer and pane components:

| ❌ **Drawer**        | ✅ **Pane**             |
| ----------------- | -------------------- |
| `expanded`        | `show`               |
| `width`           | `size`               |
| `min-width`       | (not available)      |
| `max-width`       | (not available)      |
| `full-height`     | (not available)      |
| `on-drawer-close` | `on-expanded-change` |
| `on-open`         | `on-expanded-change` |

Additional changes you need to consider when migrating from drawers to panes:
- You may need to adjust your content layout accordingly since pane contents have a default padding of `16px`.
- You now need to define a title for the pane using the `heading` property.

## Component updates

### ix-application
- `min-width: 0` has been added to the content-area in ix-application to prevent the flex container from growing beyond the screen width.
- If you currently have implemented a workaround for this behavior your application's layout might be affected by this change.

### ix-button

- Renamed variant `secondary` to `subtle`
- Removed the property `outline` in favor of new `secondary` variants
- Removed the property `ghost` in favor of new `tertiary` variants

To take over the changes, rename all button variants according to this table. Start with renaming `secondary` variants to `subtle` to avoid unwanted overriding.

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `secondary`       | `false`              | `false`              | `subtle-primary`     |
| `secondary`       | `true`               | `false`              | `subtle-secondary`   |
| `secondary`       | `false`              | `true`               | `subtle-tertiary`    |
| `primary`         | `false`              | `false`              | `primary`            |
| `primary`         | `true`               | `false`              | `secondary`          |
| `primary`         | `false`              | `true`               | `tertiary`           |
| `danger`          | `false`              | `false`              | `danger-primary`     |
| `danger`          | `true`               | `false`              | `danger-secondary`   |
| `danger`          | `false`              | `true`               | `danger-tertiary`    |

For buttons without explicitly set variant, the default is used. As defaults differ between the button components, the renaming should happen component-specific

#### Button

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `default`         | `false`              | `false`              | `primary`            |
| `default`         | `true`               | `false`              | `secondary`          |
| `default`         | `false`              | `true`               | `tertiary`           |

#### Dropdown button

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `default`         | `false`              | `false`              | `primary`            |
| `default`         | `true`               | `false`              | `secondary`          |
| `default`         | `false`              | `true`               | `tertiary`           |

#### Icon button

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `default`         | `false`              | `false`              | `subtle-primary`            |
| `default`         | `true`               | `false`              | `subtle-secondary`          |
| `default`         | `false`              | `true`               | `subtle-tertiary`           |

#### Split button

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `default`         | `false`              | `false`              | `primary`            |
| `default`         | `true`               | `false`              | `secondary`          |
| `default`         | `false`              | `true`               | `tertiary`           |

#### Toggle button

| ❌ **Variant**       | ❌ **Outline**          | ❌ **Ghost**            | ✅ **New variant**      |
| ----------------- | -------------------- | -------------------- | -------------------- |
| `default`         | `false`              | `false`              | `subtle-primary`            |
| `default`         | `true`               | `false`              | `subtle-secondary`          |
| `default`         | `false`              | `true`               | `subtle-tertiary`           |


Visually review your changes. Ensure that `subtle` variants are not mixed with the default button.

### ix-pane

- Added `close-on-click-outside` property.
- Added `aria-label-close-button` property.
- Added `aria-label-expand-button` property.
- Added `aria-label-collapse-button` property.

### ix-aggrid

With this release we are updating to the latest AG Grid version and are providing a new brand-aligned iX theme. 

#### Design

We are providing a copy of the official AG Grid Figma file with an added iX theme. This allows designers to use the powerful AG Grid's native componenents and layout logic in brand consistent style.

To make the iX themed AG Grid components available for designers, we publish it in our Design System workspace. It is added per default as a suggested library for all Figma projects within the Siemens organization.

With this new library in place, we are deprecating the AG Grid components within the iX components Figma library. Unfortunately, there is no automated replacement possible.

#### Implementation
TBD

## Global style updates

### Updated elevation principle

With the updated elevation principle, some components require a visual outline if they are placed on `color-2` or `component-1`:

| **Component**                                               | **Variant**          | **Property**             |
| ----------------------------------------------------------- | -------------------- | ------------------------ |
| [Card, Push card, Action card](/docs/components/card/guide) | `filled`             | set `outline = true`     |
| [Blind](/docs/components/blind/guide)                       | `filled`             | set `outline = true`     |



## Questions ❓🙋‍♀️

Check out the [Breaking Changes guide](https://github.com/siemens/ix/blob/release-4.0.0/BREAKING_CHANGES/v4.md) and if you have further questions or migration problems [contact us](./../support/contact-us).