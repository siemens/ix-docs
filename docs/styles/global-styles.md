---
sidebar_label: Global styles
title: Global styles
doc-type: 'banner'
description: 'Siemens Industrial Experience components are self-contained. Applications can opt into reset, base, scrollbar, utility and legacy global styles when needed.'
---

#

The default stylesheet contains the Classic theme and component foundation only:

```ts
import '@siemens/ix/css/default.css';
```

Add global styles deliberately so their selectors and browser defaults do not affect more of your application than intended.

## Entry points

| CSS | Sass | Includes | Global effect |
| --- | --- | --- | --- |
| `@siemens/ix/css/default.css` | `@siemens/ix/scss/default` | Foundation and the Classic light and dark themes | Provides the recommended component setup without global styles |
| `@siemens/ix/css/foundation.css` | `@siemens/ix/scss/foundation` | Variables and foundation behavior required by components | Applies foundation variables under the theme attributes |
| `@siemens/ix/css/reset.css` | `@siemens/ix/scss/reset` | Normalized browser defaults and `box-sizing` | Styles native HTML elements globally |
| `@siemens/ix/css/base.css` | `@siemens/ix/scss/base` | Theme font and text color plus body typography, color, background and margin | Styles `[data-ix-theme]` and `body` |
| `@siemens/ix/css/scrollbar.css` | `@siemens/ix/scss/scrollbar` | Themed scrollbar colors and dimensions | Styles scrollbars only on an element with `data-ix-scrollbars` and its descendants |
| `@siemens/ix/css/utilities.css` | `@siemens/ix/scss/utilities` | Typography, links, shadows, input groups, button groups and native table classes | Adds utility classes and styles native links and headings |
| `@siemens/ix/css/globals.css` | `@siemens/ix/scss/globals` | Reset, base, scrollbar and utilities | Adds all current global styles, but no legacy native form styling |
| `@siemens/ix/css/legacy.css` | `@siemens/ix/scss/legacy` | Previous reset, base, utilities, native form styles and automatic body scrollbar styling | Restores the global behavior from earlier releases without adding a theme or foundation |

## Import order

We recommend this order:

1. Foundation and theme
2. Optional global styles
3. Application styles and overrides

For the standard setup with all current global styles:

```ts
import '@siemens/ix/css/default.css';
import '@siemens/ix/css/globals.css';
import './app.css';
```

The scrollbar stylesheet only takes effect when you opt in on a container:

```html
<html
  data-ix-theme="classic"
  data-ix-color-schema="dark"
>
  <body data-ix-scrollbars></body>
</html>
```

Import individual layers when your application already has a reset or its own global typography:

```ts
import '@siemens/ix/css/default.css';
import '@siemens/ix/css/scrollbar.css';
import '@siemens/ix/css/utilities.css';
```

## Migrating existing applications

The previous monolithic stylesheet applied global native element and form styles. To preserve that behavior during migration, combine the new default and legacy stylesheets:

```ts
import '@siemens/ix/css/default.css';
import '@siemens/ix/css/legacy.css';
```

`legacy.css` does not include a theme or the component foundation. It keeps the previous `body:not(.disable-scrollbar)` behavior and native form classes such as `.ix-form-control` and `.ix-form-label`.

Use the canonical `@siemens/ix/css/*` and `@siemens/ix/scss/*` entry points. Deep internal Sass partials are no longer exported.
