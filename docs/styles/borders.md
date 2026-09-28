---
sidebar_position: 2
sidebar_label: Borders
title: Borders
hide_table_of_contents: false
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Border color tokens define boundaries, communicate state, and structure application surfaces.'
---

import BorderTable from '@site/src/components/BorderTable';

System border tokens provide colors. Combine a semantic border color with the
appropriate width and style for the component:

```css
.some-example {
  border: var(--si-sys-sizing-border-width-default) solid
    var(--si-sys-color-border-1);
}
```

Use neutral border roles to structure surfaces, accent roles for interaction,
and status roles only when the border communicates that status. Use a
`--si-sys-sizing-border-width-*` token for the border width.

The generated swatches below set `border-color`; they do not infer a legacy
composite border or interaction-state relationship.

<BorderTable />
