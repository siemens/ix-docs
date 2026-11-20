---
sidebar_position: 3
sidebar_label: Density
title: Density
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Density tokens adapt sizes, spacing, and icon dimensions so applications can switch between the default and a compact layout, for the whole page or for individual sections.'
---

import DensityTable from '@site/src/components/DensityTable';

The system supports two densities. **Default** is the base density. **Compact**
is a sparse override: it only redefines the tokens listed on this page and
inherits every other token from the default density.

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

## Scoped density {#scoped-density}

`data-ix-density` also works on any element inside the themed root. The density
applies to that element and its descendants. Density scopes can be nested, and
the closest `data-ix-density` ancestor wins:

```html
<html data-ix-theme="community" data-ix-color-schema="dark">
  <body>
    <!-- Default density -->
    <section data-ix-density="compact">
      <!-- Compact density -->
      <div data-ix-density="default">
        <!-- Default density again -->
      </div>
    </section>
  </body>
</html>
```

## Using the tokens {#using-the-tokens}

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

## Sizing unit {#sizing-unit}

Size and spacing tokens (`--si-sys-sizing-size-*` and
`--si-sys-sizing-spacing-*`) resolve to `px`. Component dimensions driven by
these tokens therefore stay the same when the root font size changes. Icon,
avatar and typography tokens use `rem`, so text and icons still scale with the
root font size and components grow to fit them.

If your application changes the root font size and expects component dimensions
to scale with it, add `data-ix-sizing="rem"`. It switches the size and spacing
tokens back to `rem` for that element and its descendants. Nested density scopes
inside it keep `rem` sizing:

```html
<html
  data-ix-theme="community"
  data-ix-color-schema="dark"
  data-ix-sizing="rem"
>
  ...
</html>
```

Every size and spacing token also has a `--si-sys-sizing-rem-*` twin that always
resolves to `rem`, for example `--si-sys-sizing-rem-size-80`. Use the twins when
custom styles need `rem` values regardless of the sizing unit.

`data-ix-sizing="rem"` only affects the tokens. Fixed values in component and
global styles use `px` and do not change.

## Size {#token-group-sizing-size}

<DensityTable section="sizing.size" />

## Spacing X {#token-group-sizing-spacing-x}

<DensityTable section="sizing.spacing-x" />

## Spacing Y {#token-group-sizing-spacing-y}

<DensityTable section="sizing.spacing-y" />

## Icon {#token-group-sizing-icon}

<DensityTable section="sizing.icon" />
