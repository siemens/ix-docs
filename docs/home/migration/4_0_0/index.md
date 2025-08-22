---
sidebar_position: 0
sidebar_title: Upgrade to v4
title: Upgrade to v4
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system v3 to v4. This guide introduces all major changes.
---
# Upgrade to v4.0.0

## TL;DR
- We renamed the [button variants](#ix-button) to better reflect their usage.
- Map and basic navigation has been removed in favor of the [application](../../../components/application/guide.mdx) component.
- Drawer has been deprecated in favor of [panes](../../../components/panes/index.mdx).

## Icons renamed or removed

TO BE DONE

## Deprecated and removed components

- Map and basic navigation
- Drawer

### Removed map and basic navigation

TO BE DONE

### Deprecated drawer

The drawer component has been deprecated and will be removed in the next major release. We recommend using [panes](../pane) instead, which provides similar functionality with improved performance and usability. Use this configuration for a similar experience:

```html
<ix-pane
	heading=”Title”
	variant="floating"
	composition=”right”
	borderless=”true”
	size="320px"
	close-on-click-outside="true"
	hide-on-collapse>
	My content  
</ix-pane>
```

Here is a comparison of the properties and events between the drawer and pane components:

| **Drawer**        | **Pane**             |
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

### ix-button

- Removed `outline` and `ghost`.
- Replaced `variant` names:
	- `primary` → `primary`
	- `primary` `outline` → `primary`
	- `secondary` → `outline`
	- `tertiary` → `ghost`

### ix-pane

- Added `close-on-click-outside` property.
- Added `aria-label-close-button` property.
- Added `aria-label-expand-button` property.
- Added `aria-label-collapse-button` property.

## Global style updates

Lorem ipsum

## Questions ❓🙋‍♀️

Check out the [Breaking Changes guide](https://github.com/siemens/ix/blob/release-4.0.0/BREAKING_CHANGES/v4.md) and if you have further questions or migration problems [contact us](./../support/contact-us).