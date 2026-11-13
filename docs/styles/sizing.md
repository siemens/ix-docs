---
sidebar_position: 3
sidebar_label: Sizing
title: Sizing
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Sizing tokens adapt sizes, spacing and icon dimensions to enable applications to switch between the default and a compact layout. Compact mode is experimental and may change.'
---

import DensityTable from '@site/src/components/DensityTable';

:::warning Experimental feature

Compact mode is a new feature and is currently experimental. We are still
evaluating how well it works across components and use cases. Its token
coverage, values and behavior may change as we learn from its use and make
further adaptations. Test compact mode with your application before relying
on it in production.

:::

The system supports two densities. **Default** is the base density. **Compact**
is a sparse override: it only redefines the tokens listed on this page and
inherits every other token from the default density.

![Default and compact density comparison](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8742-7072&t=Mmsji7qvSnFGiH3D-11)

Enable compact density by adding `data-ix-density="compact"` to the element that
sets the theme and color schema:

```html
<html
  data-ix-theme="community"
  data-ix-color-schema="dark"
  data-ix-density="compact"
>
  ...
</html>
```

Reference the tokens with the CSS `var()` function. Their values switch
automatically when the density changes:

```css
.some-example {
  min-height: var(--si-sys-sizing-size-100);
  padding-inline: var(--si-sys-sizing-spacing-x-40);
}
```

Do not hardcode the values shown below. They are resolved from the installed theme and differ between densities.

## Size {#token-group-sizing-size}

<DensityTable section="sizing.size" />

## Spacing X {#token-group-sizing-spacing-x}

<DensityTable section="sizing.spacing-x" />

## Spacing Y {#token-group-sizing-spacing-y}

<DensityTable section="sizing.spacing-y" />

## Icon {#token-group-sizing-icon}

<DensityTable section="sizing.icon" />
