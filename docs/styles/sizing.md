# Sizing

> Sizing tokens adapt sizes, spacing and icon dimensions to enable applications to switch between the default and a compact layout. Compact mode is experimental and may change.

:::warning Experimental feature

Compact mode is a new feature and is currently experimental. We are still evaluating how well it works across components and use cases. Its token coverage, values and behavior may change as we learn from its use and make further adaptations. Test compact mode with your application before relying on it in production.

:::

The system supports two densities. **Default** is the base density. **Compact** is a sparse override: it only redefines the sizing tokens listed on this page, and the font-size and line-height from the [typography](./typography) variables. Every other token is inherited from the default density.

![Default and compact density comparison](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8742-7072&t=Mmsji7qvSnFGiH3D-11)

Enable compact density by adding `data-ix-density="compact"` to the element that sets the theme and color schema:

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
      
        <!-- Default density again -->
      
    </section>
  </body>
</html>
```

## Using the tokens {#using-the-tokens}

Reference the tokens with the CSS `var()` function. Their values switch automatically when the density changes:

```css
.some-example {
  min-height: var(--si-sys-sizing-size-100);
  padding-inline: var(--si-sys-sizing-spacing-x-40);
}
```

Do not hardcode the values shown below. They are resolved from the installed theme and differ between densities.

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
resolves to `rem`, for example `--si-sys-sizing-rem-size-80`. The twins are
converted from the `px` values (see [Rem size](#token-group-sizing-rem-size)).

`data-ix-sizing="rem"` only affects the tokens. Fixed values in component and
global styles use `px` and do not change.

## Size {#token-group-sizing-size}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-size-10` | Hairline. Active-state indicator bars and focus underlines. | `var(--si-sys-sizing-size-10)` | `si.sys.sizing.size.10` |
| `--si-sys-sizing-size-20` | Smallest visual marker — status dots, unread indicators. | `var(--si-sys-sizing-size-20)` | `si.sys.sizing.size.20` |
| `--si-sys-sizing-size-30` | Badge dots and collapsed-rail markers. | `var(--si-sys-sizing-size-30)` | `si.sys.sizing.size.30` |
| `--si-sys-sizing-size-40` | Smallest inline indicator that still reads as a shape. | `var(--si-sys-sizing-size-40)` | `si.sys.sizing.size.40` |
| `--si-sys-sizing-size-50` | Small square elements — checkbox glyph, compact icon well. | `var(--si-sys-sizing-size-50)` | `si.sys.sizing.size.50` |
| `--si-sys-sizing-size-60` | Checkbox and radio hit area. Smallest inline avatar. | `var(--si-sys-sizing-size-60)` | `si.sys.sizing.size.60` |
| `--si-sys-sizing-size-70` | Minimum height of a small component. Meets the WCAG 2.5.8 (AA) 24px minimum target size in Default — but this step is density-sensitive and drops to 20px in Compact, so do not rely on it for a standalone interactive element across densities. | `var(--si-sys-sizing-size-70)` | `si.sys.sizing.size.70` |
| `--si-sys-sizing-size-80` | Minimum height of a default component. | `var(--si-sys-sizing-size-80)` | `si.sys.sizing.size.80` |
| `--si-sys-sizing-size-90` | Minimum height of a large component. | `var(--si-sys-sizing-size-90)` | `si.sys.sizing.size.90` |
| `--si-sys-sizing-size-100` | Minimum height of an extra large component. Toolbar height. | `var(--si-sys-sizing-size-100)` | `si.sys.sizing.size.100` |
| `--si-sys-sizing-size-110` | Application header height. Tall toolbars. | `var(--si-sys-sizing-size-110)` | `si.sys.sizing.size.110` |
| `--si-sys-sizing-size-120` | Minimum width of a button. | `var(--si-sys-sizing-size-120)` | `si.sys.sizing.size.120` |
| `--si-sys-sizing-size-130` | Collapsed navigation rail width. | `var(--si-sys-sizing-size-130)` | `si.sys.sizing.size.130` |
| `--si-sys-sizing-size-140` | Narrow fixed column — icon-only sidebars. | `var(--si-sys-sizing-size-140)` | `si.sys.sizing.size.140` |
| `--si-sys-sizing-size-150` | Compact panel width. Minimum width of a dropdown or menu. | `var(--si-sys-sizing-size-150)` | `si.sys.sizing.size.150` |
| `--si-sys-sizing-size-160` | Navigation sidebar width. | `var(--si-sys-sizing-size-160)` | `si.sys.sizing.size.160` |
| `--si-sys-sizing-size-170` | Side panel and drawer width. Small dialog. | `var(--si-sys-sizing-size-170)` | `si.sys.sizing.size.170` |
| `--si-sys-sizing-size-180` | Default dialog width. | `var(--si-sys-sizing-size-180)` | `si.sys.sizing.size.180` |
| `--si-sys-sizing-size-190` | Large dialog width. Comfortable single-column reading measure. | `var(--si-sys-sizing-size-190)` | `si.sys.sizing.size.190` |
| `--si-sys-sizing-size-200` | Widest measure the system offers — extra large dialogs, maximum content width. | `var(--si-sys-sizing-size-200)` | `si.sys.sizing.size.200` |

## Spacing X {#token-group-sizing-spacing-x}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-spacing-x-10` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-10)` | `si.sys.sizing.spacing-x.10` |
| `--si-sys-sizing-spacing-x-20` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-20)` | `si.sys.sizing.spacing-x.20` |
| `--si-sys-sizing-spacing-x-30` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-30)` | `si.sys.sizing.spacing-x.30` |
| `--si-sys-sizing-spacing-x-40` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-40)` | `si.sys.sizing.spacing-x.40` |
| `--si-sys-sizing-spacing-x-50` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-50)` | `si.sys.sizing.spacing-x.50` |
| `--si-sys-sizing-spacing-x-60` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-60)` | `si.sys.sizing.spacing-x.60` |
| `--si-sys-sizing-spacing-x-70` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-70)` | `si.sys.sizing.spacing-x.70` |
| `--si-sys-sizing-spacing-x-80` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-80)` | `si.sys.sizing.spacing-x.80` |
| `--si-sys-sizing-spacing-x-90` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-90)` | `si.sys.sizing.spacing-x.90` |
| `--si-sys-sizing-spacing-x-100` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-100)` | `si.sys.sizing.spacing-x.100` |
| `--si-sys-sizing-spacing-x-110` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-110)` | `si.sys.sizing.spacing-x.110` |
| `--si-sys-sizing-spacing-x-120` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-120)` | `si.sys.sizing.spacing-x.120` |
| `--si-sys-sizing-spacing-x-130` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-130)` | `si.sys.sizing.spacing-x.130` |
| `--si-sys-sizing-spacing-x-140` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-x-140)` | `si.sys.sizing.spacing-x.140` |

## Spacing Y {#token-group-sizing-spacing-y}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-spacing-y-10` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-10)` | `si.sys.sizing.spacing-y.10` |
| `--si-sys-sizing-spacing-y-20` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-20)` | `si.sys.sizing.spacing-y.20` |
| `--si-sys-sizing-spacing-y-30` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-30)` | `si.sys.sizing.spacing-y.30` |
| `--si-sys-sizing-spacing-y-40` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-40)` | `si.sys.sizing.spacing-y.40` |
| `--si-sys-sizing-spacing-y-50` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-50)` | `si.sys.sizing.spacing-y.50` |
| `--si-sys-sizing-spacing-y-60` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-60)` | `si.sys.sizing.spacing-y.60` |
| `--si-sys-sizing-spacing-y-70` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-70)` | `si.sys.sizing.spacing-y.70` |
| `--si-sys-sizing-spacing-y-80` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-80)` | `si.sys.sizing.spacing-y.80` |
| `--si-sys-sizing-spacing-y-90` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-90)` | `si.sys.sizing.spacing-y.90` |
| `--si-sys-sizing-spacing-y-100` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-100)` | `si.sys.sizing.spacing-y.100` |
| `--si-sys-sizing-spacing-y-110` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-110)` | `si.sys.sizing.spacing-y.110` |
| `--si-sys-sizing-spacing-y-120` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-120)` | `si.sys.sizing.spacing-y.120` |
| `--si-sys-sizing-spacing-y-130` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-130)` | `si.sys.sizing.spacing-y.130` |
| `--si-sys-sizing-spacing-y-140` | No description is provided by the package manifest. | `var(--si-sys-sizing-spacing-y-140)` | `si.sys.sizing.spacing-y.140` |

## Icon {#token-group-sizing-icon}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-icon-lg` | Standard standalone icons. Matches line-height lg — fits a lg control, but grows a table row. | `var(--si-sys-sizing-icon-lg)` | `si.sys.sizing.icon.lg` |
| `--si-sys-sizing-icon-md` | Default inline icons (buttons, inputs, table rows). Matches line-height md. | `var(--si-sys-sizing-icon-md)` | `si.sys.sizing.icon.md` |
| `--si-sys-sizing-icon-sm` | Inline icons in compact components and table rows. Matches line-height sm. | `var(--si-sys-sizing-icon-sm)` | `si.sys.sizing.icon.sm` |
| `--si-sys-sizing-icon-xl` | Featured icons, empty-state illustrations | `var(--si-sys-sizing-icon-xl)` | `si.sys.sizing.icon.xl` |
| `--si-sys-sizing-icon-xxl` | Hero icons, onboarding illustrations | `var(--si-sys-sizing-icon-xxl)` | `si.sys.sizing.icon.xxl` |

## Rem size {#token-group-sizing-rem-size}

The `--si-sys-sizing-rem-*` tokens are converted from the `px` size and spacing
tokens above. iX components only use the standard `px` tokens, never the `rem`
twins, so prefer the standard tokens in your own styles as well. Only use the `rem` twins when you know a custom
element must scale with the root font size, for example a container that wraps
text-driven content.

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-rem-size-10` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-10)` | `si.sys.sizing.rem.size.10` |
| `--si-sys-sizing-rem-size-20` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-20)` | `si.sys.sizing.rem.size.20` |
| `--si-sys-sizing-rem-size-30` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-30)` | `si.sys.sizing.rem.size.30` |
| `--si-sys-sizing-rem-size-40` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-40)` | `si.sys.sizing.rem.size.40` |
| `--si-sys-sizing-rem-size-50` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-50)` | `si.sys.sizing.rem.size.50` |
| `--si-sys-sizing-rem-size-60` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-60)` | `si.sys.sizing.rem.size.60` |
| `--si-sys-sizing-rem-size-70` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-70)` | `si.sys.sizing.rem.size.70` |
| `--si-sys-sizing-rem-size-80` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-80)` | `si.sys.sizing.rem.size.80` |
| `--si-sys-sizing-rem-size-90` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-90)` | `si.sys.sizing.rem.size.90` |
| `--si-sys-sizing-rem-size-100` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-100)` | `si.sys.sizing.rem.size.100` |
| `--si-sys-sizing-rem-size-110` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-110)` | `si.sys.sizing.rem.size.110` |
| `--si-sys-sizing-rem-size-120` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-120)` | `si.sys.sizing.rem.size.120` |
| `--si-sys-sizing-rem-size-130` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-130)` | `si.sys.sizing.rem.size.130` |
| `--si-sys-sizing-rem-size-140` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-140)` | `si.sys.sizing.rem.size.140` |
| `--si-sys-sizing-rem-size-150` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-150)` | `si.sys.sizing.rem.size.150` |
| `--si-sys-sizing-rem-size-160` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-160)` | `si.sys.sizing.rem.size.160` |
| `--si-sys-sizing-rem-size-170` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-170)` | `si.sys.sizing.rem.size.170` |
| `--si-sys-sizing-rem-size-180` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-180)` | `si.sys.sizing.rem.size.180` |
| `--si-sys-sizing-rem-size-190` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-190)` | `si.sys.sizing.rem.size.190` |
| `--si-sys-sizing-rem-size-200` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-size-200)` | `si.sys.sizing.rem.size.200` |

## Rem spacing X {#token-group-sizing-rem-spacing-x}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-rem-spacing-x-10` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-10)` | `si.sys.sizing.rem.spacing-x.10` |
| `--si-sys-sizing-rem-spacing-x-20` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-20)` | `si.sys.sizing.rem.spacing-x.20` |
| `--si-sys-sizing-rem-spacing-x-30` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-30)` | `si.sys.sizing.rem.spacing-x.30` |
| `--si-sys-sizing-rem-spacing-x-40` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-40)` | `si.sys.sizing.rem.spacing-x.40` |
| `--si-sys-sizing-rem-spacing-x-50` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-50)` | `si.sys.sizing.rem.spacing-x.50` |
| `--si-sys-sizing-rem-spacing-x-60` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-60)` | `si.sys.sizing.rem.spacing-x.60` |
| `--si-sys-sizing-rem-spacing-x-70` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-70)` | `si.sys.sizing.rem.spacing-x.70` |
| `--si-sys-sizing-rem-spacing-x-80` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-80)` | `si.sys.sizing.rem.spacing-x.80` |
| `--si-sys-sizing-rem-spacing-x-90` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-90)` | `si.sys.sizing.rem.spacing-x.90` |
| `--si-sys-sizing-rem-spacing-x-100` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-100)` | `si.sys.sizing.rem.spacing-x.100` |
| `--si-sys-sizing-rem-spacing-x-110` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-110)` | `si.sys.sizing.rem.spacing-x.110` |
| `--si-sys-sizing-rem-spacing-x-120` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-120)` | `si.sys.sizing.rem.spacing-x.120` |
| `--si-sys-sizing-rem-spacing-x-130` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-130)` | `si.sys.sizing.rem.spacing-x.130` |
| `--si-sys-sizing-rem-spacing-x-140` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-x-140)` | `si.sys.sizing.rem.spacing-x.140` |

## Rem spacing Y {#token-group-sizing-rem-spacing-y}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-sizing-rem-spacing-y-10` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-10)` | `si.sys.sizing.rem.spacing-y.10` |
| `--si-sys-sizing-rem-spacing-y-20` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-20)` | `si.sys.sizing.rem.spacing-y.20` |
| `--si-sys-sizing-rem-spacing-y-30` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-30)` | `si.sys.sizing.rem.spacing-y.30` |
| `--si-sys-sizing-rem-spacing-y-40` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-40)` | `si.sys.sizing.rem.spacing-y.40` |
| `--si-sys-sizing-rem-spacing-y-50` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-50)` | `si.sys.sizing.rem.spacing-y.50` |
| `--si-sys-sizing-rem-spacing-y-60` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-60)` | `si.sys.sizing.rem.spacing-y.60` |
| `--si-sys-sizing-rem-spacing-y-70` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-70)` | `si.sys.sizing.rem.spacing-y.70` |
| `--si-sys-sizing-rem-spacing-y-80` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-80)` | `si.sys.sizing.rem.spacing-y.80` |
| `--si-sys-sizing-rem-spacing-y-90` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-90)` | `si.sys.sizing.rem.spacing-y.90` |
| `--si-sys-sizing-rem-spacing-y-100` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-100)` | `si.sys.sizing.rem.spacing-y.100` |
| `--si-sys-sizing-rem-spacing-y-110` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-110)` | `si.sys.sizing.rem.spacing-y.110` |
| `--si-sys-sizing-rem-spacing-y-120` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-120)` | `si.sys.sizing.rem.spacing-y.120` |
| `--si-sys-sizing-rem-spacing-y-130` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-130)` | `si.sys.sizing.rem.spacing-y.130` |
| `--si-sys-sizing-rem-spacing-y-140` | No description is provided by the package manifest. | `var(--si-sys-sizing-rem-spacing-y-140)` | `si.sys.sizing.rem.spacing-y.140` |
