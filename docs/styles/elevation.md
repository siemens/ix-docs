---
sidebar_position: 2
sidebar_label: Elevation
title: Elevation
hide_table_of_contents: false
doc-type: banner
component-tabs:
  - ""
no_single_tab: true
description: Elevation in our design system defines the perceived distance of a surface from the background along the z-axis, establishing content hierarchy and guiding user focus.
---

# Elevation

Our design system achieves elevation through the application of background color layers, borders and selective shadows to achieve depth and clarity.

:::info
**Important note:** We changed the elevation approach starting with version 4.0 of our design system, so it is only partially applicable for v3.x (see [migration guide](../home/migration/4_0_0/index.md) for guidance).
:::

Our approach to elevation is two-fold:
1. **Background color layers:** Primarily achieved through a system of distinct `color-` and `color-component-` tokens and additional border-colors. This defines the foundational stacking order for static content.
2. **Selective drop shadows:** Used as a separate visual cue for elements that float above the UI, demanding immediate attention or representing a temporary interaction.

When you use it intentionally, you can achieve:
* **Clarity:** Help users understand the relationship between different UI elements.
* **Hierarchy:** Guide the user's eye to the most important information or interactive elements.
* **Focus:** Draw attention to temporary or critical content (e.g. toasts).
* **Consistency:** Ensuring a predictable and intuitive user experience across all applications.

### The layering model

This model outlines the primary elevation levels for static UI elements:

![Layering model](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6605-276&t=QnYYtjAA8l2uj4Mu-4)

#### Base layer
- **Purpose:** Main page background for the entire user interface.
- **Usage:** Use `color-1` for the main canvas of your application, large sections, or the default background of a page.

:::tip
Visually separate large sections on the base layer by applying [borders](borders.md) (e.g. `color-soft-bdr` or `color-weak-bdr`). When using our components, we recommend using the available `outline` variants.
:::

#### First-level containers
- **Purpose:** Container elements that need to stand out from the main background.
- **Usage:** Apply `color-2` or `component-1` (which shares the same color value in the new theme introduced in v4.0) to components like cards, side panels, distinct content blocks, or primary interactive elements.

#### Second-level containers
- **Purpose:** Nested containers within a container (e.g., a sub-section inside a card).
- **Usage:** Maintain `color-2` as the background, but visually separate these nested containers with [borders](borders.md) (e.g. `color-soft-bdr` or `color-weak-bdr`). Alternatively, use `color-component-2` which is semi-transparent.

#### Floating elements
- **Purpose:** Elements that float above the main UI, demanding immediate attention or representing a temporary interaction.
- **Usage:** Use selective shadows (primarily `shadow-4`, see [shadow](shadows.md)) to indicate physical overlap for components like [dropdowns](../components/dropdown/index.mdx), [tooltips](../components/tooltip/index.mdx), [modals](../components/modal/index.mdx), and [toasts](../components/toast/index.mdx).

We don't use shadows that are part of the primary layout flow e.g. [navigation elements](../components/application-menu) or [cards](../components/card/index.mdx).

![Elevation example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6680-26&t=4CbXG1ZxBCDn6JYS-4)
### Other `color-` tokens

We recommend to stick to the `color-1` and `color-2` model for primary background layering. `color-3` to `color-8` are preserved for specific component use cases and should not be used.

### Interaction states (hover & active)

For interactive elements, additional `--hover` and `--active` color tokens are available. These are applied consistently across all elevation layers to indicate interaction states. Refer to the [colors](colors.md) chapter for specific `--hover` and `--active` token names.

![Hover and active colors](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6680-111492&t=4CbXG1ZxBCDn6JYS-4)