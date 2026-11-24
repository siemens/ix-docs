# Typography - Usage

> 

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

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-typography-body` | Default UI text — labels, controls, single-line content. | `var(--si-sys-typography-body)` | `si.sys.typography.body` |
| `--si-sys-typography-body-lg` | Lead-in text, emphasised body copy. | `var(--si-sys-typography-body-lg)` | `si.sys.typography.body-lg` |
| `--si-sys-typography-body-lg-sbold` | Lead-in text, emphasised body copy. | `var(--si-sys-typography-body-lg-sbold)` | `si.sys.typography.body-lg-sbold` |
| `--si-sys-typography-body-paragraph` | Multi-line running text. Same size as body, looser leading. | `var(--si-sys-typography-body-paragraph)` | `si.sys.typography.body-paragraph` |
| `--si-sys-typography-body-paragraph-sbold` | Multi-line running text. Same size as body, looser leading. | `var(--si-sys-typography-body-paragraph-sbold)` | `si.sys.typography.body-paragraph-sbold` |
| `--si-sys-typography-body-sbold` | Default UI text — labels, controls, single-line content. | `var(--si-sys-typography-body-sbold)` | `si.sys.typography.body-sbold` |
| `--si-sys-typography-body-sm` | Meta text, captions, table cell secondary text. | `var(--si-sys-typography-body-sm)` | `si.sys.typography.body-sm` |
| `--si-sys-typography-body-sm-sbold` | Meta text, captions, table cell secondary text. | `var(--si-sys-typography-body-sm-sbold)` | `si.sys.typography.body-sm-sbold` |
| `--si-sys-typography-code` | No description is provided by the package manifest. | `var(--si-sys-typography-code)` | `si.sys.typography.code` |
| `--si-sys-typography-code-lg` | No description is provided by the package manifest. | `var(--si-sys-typography-code-lg)` | `si.sys.typography.code-lg` |
| `--si-sys-typography-code-sm` | No description is provided by the package manifest. | `var(--si-sys-typography-code-sm)` | `si.sys.typography.code-sm` |
| `--si-sys-typography-display` | Metric / Stat | `var(--si-sys-typography-display)` | `si.sys.typography.display` |
| `--si-sys-typography-display-lg` | Primary dashboard metric | `var(--si-sys-typography-display-lg)` | `si.sys.typography.display-lg` |
| `--si-sys-typography-display-lg-sbold` | Primary dashboard metric | `var(--si-sys-typography-display-lg-sbold)` | `si.sys.typography.display-lg-sbold` |
| `--si-sys-typography-display-sbold` | Metric / Stat | `var(--si-sys-typography-display-sbold)` | `si.sys.typography.display-sbold` |
| `--si-sys-typography-display-xl` | Hero metric / section highlight | `var(--si-sys-typography-display-xl)` | `si.sys.typography.display-xl` |
| `--si-sys-typography-display-xl-sbold` | Hero metric / section highlight | `var(--si-sys-typography-display-xl-sbold)` | `si.sys.typography.display-xl-sbold` |
| `--si-sys-typography-display-xxl` | Billboard / full-screen hero maximum impact | `var(--si-sys-typography-display-xxl)` | `si.sys.typography.display-xxl` |
| `--si-sys-typography-display-xxl-sbold` | Billboard / full-screen hero maximum impact | `var(--si-sys-typography-display-xxl-sbold)` | `si.sys.typography.display-xxl-sbold` |
| `--si-sys-typography-h1` | Page title (once per page) | `var(--si-sys-typography-h1)` | `si.sys.typography.h1` |
| `--si-sys-typography-h2` | Major sections, top-level sections that divide the page's main content. | `var(--si-sys-typography-h2)` | `si.sys.typography.h2` |
| `--si-sys-typography-h3` | Subsections within H2, content that belongs under a specific H2 section, breaking it into smaller topics. | `var(--si-sys-typography-h3)` | `si.sys.typography.h3` |
| `--si-sys-typography-h4` | Subsections within H3, content that belongs under a specific H3 section, breaking it into smaller topics. | `var(--si-sys-typography-h4)` | `si.sys.typography.h4` |
| `--si-sys-typography-h5` | Subsections within H4, content that belongs under a specific H4 section, breaking it into smaller topics. | `var(--si-sys-typography-h5)` | `si.sys.typography.h5` |
| `--si-sys-typography-h5-bold` | Subsections within H4, content that belongs under a specific H4 section, breaking it into smaller topics. | `var(--si-sys-typography-h5-bold)` | `si.sys.typography.h5-bold` |
| `--si-sys-typography-h6` | Subsections within H5, reserved for the deepest nesting level in very complex applications | `var(--si-sys-typography-h6)` | `si.sys.typography.h6` |
