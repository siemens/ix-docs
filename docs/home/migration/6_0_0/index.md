---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Upgrade global CSS and Sass imports from Siemens Industrial Experience V5 to V6.
---

# Upgrade to V6.0.0

## Global CSS and Sass

Version 6 makes component styles self-contained and changes the default stylesheet to include only the Classic theme and component foundation. It no longer changes `body`, normalizes native elements, styles native links or form controls, provides utility classes or applies document-wide scrollbar styles.

Use the canonical default import for components:

```css
@import '@siemens/ix/css/default.css';
```

The existing `@siemens/ix/dist/siemens-ix/siemens-ix.css` import path remains available, but now resolves to the same minimal theme and foundation bundle. It no longer provides the previous global styles.

See [Global styles](/docs/styles/global-styles) to select reset, base, scrollbar and utility styles individually.

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

The legacy stylesheet restores native form classes, utilities, reset and base styles. It also retains the previous automatic `body:not(.disable-scrollbar)` scrollbar behavior. It does not include a theme or component foundation.

### Opt into scrollbar styles

The new scrollbar stylesheet only styles an explicitly marked subtree:

```css
@import '@siemens/ix/css/scrollbar.css';
```

```html
<body data-ix-scrollbars>
  <!-- Scrollable descendants use the themed scrollbar. -->
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
