---
sidebar_position: 3
sidebar_label: Shadows
title: Shadows
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Shadow tokens add depth and communicate the elevation of temporary and layered surfaces.'
---

import ShadowTable from '@site/src/components/ShadowTable';

Apply a complete system shadow value with `box-shadow`:

```css
.some-example {
  box-shadow: var(--si-sys-color-effects-shadow-1);
}
```

Choose a shadow according to the surface hierarchy. Do not decompose or
reconstruct the value: a token can contain multiple shadow layers whose colors
adapt to the selected color scheme.

<ShadowTable />
