---
sidebar_label: Global styles
title: Global styles
doc-type: 'banner'
description: 'Siemens Industrial Experience components are self-contained. Applications can opt into reset, base, scoped scrollbar, complete utility and legacy global styles when needed.'
---

#

The default stylesheet contains the Classic theme, component foundation and common utilities:

```ts
import '@siemens/ix/css/default.css';
```

Foundation applies the SiemensSans Pro font stack to `[data-ix-theme]` and sets body typography, text color, background and document-wide scrollbar styles. The default entry also styles button groups, links, table classes and typography. Add further global styles deliberately so their selectors and browser defaults do not affect more of your application than intended.

## Entry points

| CSS                              | Sass                          | Includes                                                                                       | Global effect                                                                                     |
| -------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `@siemens/ix/css/default.css`    | `@siemens/ix/scss/default`    | Foundation, Classic light and dark themes, and button group, link, table and typography utilities | Provides the recommended setup, including selected native element and utility styles              |
| `@siemens/ix/css/foundation.css` | `@siemens/ix/scss/foundation` | Variables and foundation behavior required by components                                       | Sets the theme font stack and applies body typography, color, background and document scrollbars   |
| `@siemens/ix/css/reset.css`      | `@siemens/ix/scss/reset`      | Normalized browser defaults and `box-sizing`                                                   | Styles native HTML elements globally                                                              |
| `@siemens/ix/css/base.css`       | `@siemens/ix/scss/base`       | System primary text color and body margin reset                                                | Sets color on `[data-ix-theme]` and resets the `body` margin                                      |
| `@siemens/ix/css/scrollbar.css`  | `@siemens/ix/scss/scrollbar`  | Scoped themed scrollbar colors and dimensions                                                  | Styles scrollbars only on an element with `data-ix-scrollbars` and its descendants                |
| `@siemens/ix/css/utilities.css`  | `@siemens/ix/scss/utilities`  | Default utilities plus shadows and input groups                                                 | Adds the complete utility layer                                                                   |
| `@siemens/ix/css/globals.css`    | `@siemens/ix/scss/globals`    | Reset, base, scoped scrollbar and complete utilities                                            | Adds all current global styles, but no legacy native form styling                                 |
| `@siemens/ix/css/legacy.css`     | `@siemens/ix/scss/legacy`     | Previous reset, base, utilities and native form styles                                         | Restores the remaining global behavior from earlier releases without adding a theme or foundation |

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

Foundation styles document scrollbars automatically. Add `disable-scrollbar` to `body` to disable that behavior. Import the scoped scrollbar stylesheet to enable themed scrollbars for a selected subtree:

```ts
import '@siemens/ix/css/scrollbar.css';
```

```html
<html data-ix-theme="classic" data-ix-color-schema="dark">
  <body class="disable-scrollbar">
    <main data-ix-scrollbars></main>
  </body>
</html>
```

Import additional layers after the default stylesheet when needed. The complete utility entry extends the selected utilities already in `default.css` with shadow and input-group styles:

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

`legacy.css` does not include a theme or the component foundation. It keeps native form classes such as `.ix-form-control` and `.ix-form-label`; foundation provides the body and scrollbar defaults.

Use the canonical `@siemens/ix/css/*` and `@siemens/ix/scss/*` entry points. Deep internal Sass partials are no longer exported.
