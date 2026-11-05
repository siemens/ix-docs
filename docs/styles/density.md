---
sidebar_position: 3
sidebar_label: Density
title: Density
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Density tokens adapt sizes, spacing, and icon dimensions so applications can switch between the default and a compact layout.'
---

import DensityTable from '@site/src/components/DensityTable';

The system supports two densities. **Default** is the base density. **Compact**
is a sparse override: it only redefines the tokens listed on this page and
inherits every other token from the default density.

Enable compact density by adding `data-ix-density="compact"` to the element that
sets the theme and color schema:

```html
<html
  data-ix-theme="classic"
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

Do not hardcode the values shown below: they are resolved from the installed
theme and differ between densities.

## Size {#token-group-sizing-size}

<DensityTable section="sizing.size" />

## Spacing X {#token-group-sizing-spacing-x}

<DensityTable section="sizing.spacing-x" />

## Spacing Y {#token-group-sizing-spacing-y}

<DensityTable section="sizing.spacing-y" />

## Icon {#token-group-sizing-icon}

<DensityTable section="sizing.icon" />
