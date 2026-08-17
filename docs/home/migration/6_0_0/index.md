---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Upgrade global CSS and Sass imports from Siemens Industrial Experience V5 to V6.
---

# Upgrade to V6.0.0

## Global CSS and Sass

Version 6 makes component styles self-contained and changes the default stylesheet to include the Classic theme, component foundation and common utilities for button groups, links, table classes and typography. Foundation applies the SiemensSans Pro font stack to `[data-ix-theme]` and sets body typography, text color, background and document-wide scrollbar styles. The default stylesheet no longer normalizes native elements, resets the body margin or styles native form controls.

Use the canonical default import for components:

```css
@import '@siemens/ix/css/default.css';
```

The existing `@siemens/ix/dist/siemens-ix/siemens-ix.css` import path remains available and resolves to the same default bundle. It includes the selected utilities and foundation defaults, but not the reset, body margin reset, complete utility layer or legacy native form styles.

See [Global styles](/docs/styles/global-styles) to select reset, base, scoped scrollbar, complete utility and legacy styles individually.

### Preserve previous global behavior

Combine the default and legacy stylesheets while migrating an application that depends on the previous global behavior:

```css
@import '@siemens/ix/css/default.css';
@import '@siemens/ix/css/legacy.css';
```

Applications that keep the existing distribution path can restore the same behavior with:

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
@import '@siemens/ix/css/legacy.css';
```

The legacy stylesheet restores native form classes, utilities, reset and base styles. It does not include a theme or component foundation.

### Opt into scrollbar styles

Foundation styles document scrollbars automatically. Add `disable-scrollbar` to `body` to disable that behavior. The scoped scrollbar stylesheet can then enable themed scrollbars for a selected subtree:

```css
@import '@siemens/ix/css/scrollbar.css';
```

```html
<body class="disable-scrollbar">
  <main data-ix-scrollbars>
    <!-- Scrollable descendants use the themed scrollbar. -->
  </main>
</body>
```

### Update Sass imports

Use the supported purpose-based Sass entry points:

```scss
@use '@siemens/ix/scss/default';
@use '@siemens/ix/scss/globals';
@use '@siemens/ix/scss/tokens/system' as system;
@use '@siemens/ix/scss/tokens/legacy' as legacy;
```

Use the legacy token entry point only while migrating styles that depend on the previous Sass constants. The `@siemens/ix/scss/misc/common-variables` path remains available during Version 6 for generated corporate themes.

Other deep files below `@siemens/ix/scss/*` are no longer exported. `@siemens/ix/scss/deprecated/components` and selected public mixins remain available for compatibility.
