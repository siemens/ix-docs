---
doc-type: 'tab-item'
---

import TypographyTable from '@site/src/components/TypographyTable';

# Typography - Usage

System typography tokens are complete CSS `font` shorthand values. Apply them
to text with the `font` property:

```css
.heading {
  font: var(--si-sys-typography-h2);
}
```

Use heading roles to communicate information hierarchy, body and paragraph
roles for readable content, display roles for prominent short values, and code
roles for source text. Semibold variants add emphasis without changing the
semantic role.

The rendered reference reads browser-computed font longhands for each token.
These CSS token names are not automatically equivalent to `ix-typography`
`format` values; use only formats documented by that component.

<TypographyTable />
