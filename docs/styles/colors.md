---
sidebar_position: 1
sidebar_label: Colors
title: Color palette
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'The system color tokens provide consistent, accessible roles for application surfaces, content, states, effects, and data visualization.'
---

import ColorTable from '@site/src/components/ColorTable';

#

Use system colors by referencing their complete custom-property name with the
CSS `var()` function:

```css
.some-example {
  background-color: var(--si-sys-color-background-1);
  color: var(--si-sys-color-text-primary);
}
```

Choose a token for its semantic role rather than for its current rendered
color. This allows the classic light and dark color schemes to provide the
appropriate value automatically.

## Usage guidance

- **Background** tokens establish the application layers and interactive
  surfaces.
- **Text** tokens provide foreground roles, including status and on-color
  variants. Do not select a status color solely by appearance; verify the
  required contrast in its intended context.
- **Code** tokens provide syntax-highlighting roles.
- **Data** tokens provide categorical, rating, and sequential visualization
  palettes. Preserve the documented sequence when assigning a series.
- **Effects** tokens cover color values used by visual effects.

Border colors have their own [border reference](./borders).

The reference below is generated from the system-token manifest shipped by the
installed `@siemens/ix` package. It intentionally excludes reference and legacy
tokens.

<ColorTable />
