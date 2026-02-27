# Changelog

> -   [#2297](https://github.com/siemens/ix/pull/2297) [`5e138c9`](https://github.com/siemens/ix/commit/5e138c9c21737aab41d75b0b0933746f9a74bc1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Include examples into api table

## [@siemens/ix@4.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.3.0) (2026-02-03T17:29:28Z)
### Minor Changes

- [#2341](https://github.com/siemens/ix/pull/2341) [`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372) Thanks [@alexkaduk](https://github.com/alexkaduk)! - **feat(dropdown): add enableTopLayer prop for Popover API rendering**

  Introduces a new `enableTopLayer` prop for `ix-dropdown` and all consuming components to enable rendering in the browser's top layer using the Popover API. This resolves z-index and stacking context issues, particularly with AG Grid and other complex layouts.

- [#2280](https://github.com/siemens/ix/pull/2280) [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add property `passive` to **ix-card**, **ix-action-card**, and **ix-push-card** allowing to suppress mouse states.

- [#2287](https://github.com/siemens/ix/pull/2287) [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improved accessibility for the following components: `ix-menu`, `ix-menu-item`, `ix-menu-settings`, `ix-menu-about`, `ix-menu-expand-icon`, and `ix-icon-button`.

  **API changes:**

  - `ix-menu-settings`: Added `ariaLabelCloseButton` prop (default: "Close Settings")
  - `ix-menu-about`: Added `ariaLabelCloseButton` prop (default: "Close About")

  **Deprecations (will be removed in 5.0.0):**

  - `ix-menu`: `i18nExpandSidebar` prop
  - `ix-application-header`: `ariaLabelMenuExpandIconButton` prop

- [#2282](https://github.com/siemens/ix/pull/2282) [`79eed16`](https://github.com/siemens/ix/commit/79eed1645d0f9e23203b26c81e81dc21c818bde3) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - add new `hide-icon` property for _ix-toast_ component

- [#2051](https://github.com/siemens/ix/pull/2051) [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448) Thanks [@1307-Dev](https://github.com/1307-Dev)! - `ix-slider` is now `form-ready`

### Patch Changes

- [#2256](https://github.com/siemens/ix/pull/2256) [`1340274`](https://github.com/siemens/ix/commit/1340274534b269f89151452ab48093b5800951ad) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent **ix-drawer** from emitting redundant close events.

  Fixes #2086

- [#2302](https://github.com/siemens/ix/pull/2302) [`605ef5b`](https://github.com/siemens/ix/commit/605ef5b30a4cae9d6091cae48504fa42ba69f9ff) Thanks [@alexkaduk](https://github.com/alexkaduk)! - fix(message-bar): remove text truncation and fix action button alignment for examples

  - Remove text-truncation ellipsis mixin to allow text wrapping
  - Fix CSS class name from .message-bar-danger to .message-bar-alarm
  - Action buttons are now correctly right-aligned with justify-content: space-between

  Fixes #2258

- [#2337](https://github.com/siemens/ix/pull/2337) [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Add properties **tooltipText** and **ariaLabelTooltip** to **ix-menu-avatar**.

- [#2303](https://github.com/siemens/ix/pull/2303) [`04279c1`](https://github.com/siemens/ix/commit/04279c1a2bb3c92344c0958731d1f061faff6af6) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Fix scrolling behaviour for **ix-tabs** on small viewports, ensuring the selected tab will be visible at all times.

  Fixes #2260

- [#2320](https://github.com/siemens/ix/pull/2320) [`00366ae`](https://github.com/siemens/ix/commit/00366ae3fd06d74a6af7a037728de9b60694d80f) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Prevent **ix-tree** from triggering infinite calls to requestAnimationFrame while it is idle.

  Fixes #2247

- [#2230](https://github.com/siemens/ix/pull/2230) [`0847ca9`](https://github.com/siemens/ix/commit/0847ca9ca8d258ffd64657bd823fbb90cf44f250) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Fix responsive behavior of **ix-pane-layout**.

  Fixes #2157

- [#2295](https://github.com/siemens/ix/pull/2295) [`dcc06b0`](https://github.com/siemens/ix/commit/dcc06b0f924f468ae4341f729062408b6689093b) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Sync **ix-field-label** with invalid state of related form element.

  Fixes #2226

- [#2298](https://github.com/siemens/ix/pull/2298) [`07e1ad1`](https://github.com/siemens/ix/commit/07e1ad1954afb98479441c90167787535e5c432e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Set property `value` to empty string instead of empty array when clearing **ix-select** in single mode.

  Fixes #2219

- [#2373](https://github.com/siemens/ix/pull/2373) [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove blur effect from modal backdrop

- [#2261](https://github.com/siemens/ix/pull/2261) [`f7345bd`](https://github.com/siemens/ix/commit/f7345bde3489d6eea36aa7d85b7fba6f2ee0092e) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Reflect `disabled` attribute in DOM for **ix-dropdown-button** and **ix-dropdown-item**.
  Also prevent event emission for disabled components and set `aria-disabled` and `tabIndex` accrodingly.

  Fixes #2114.

- [#2328](https://github.com/siemens/ix/pull/2328) [`ca01772`](https://github.com/siemens/ix/commit/ca01772b9f6cb83b84e5ebccbdf740ca3920727b) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Prevent **ix-toast** from clipping overflowing text content.

- [#2329](https://github.com/siemens/ix/pull/2329) [`828110e`](https://github.com/siemens/ix/commit/828110eadd0658df444405fd9eb7f89bc7fa7aef) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Make sure centered **ix-modal** will get displayed in desired place on every render.

  Fixes #2190

- [#2305](https://github.com/siemens/ix/pull/2305) [`089f850`](https://github.com/siemens/ix/commit/089f85033cad045dc55133577073ab58c074f4b4) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-menu-category** now correctly collapses with **ix-menu** when programmatically changing **ix-menu's** `expand` attribute.
  Fixes #2151

- [#2243](https://github.com/siemens/ix/pull/2243) [`d2a0d17`](https://github.com/siemens/ix/commit/d2a0d17153c5c62cbee4e6a483076c9fad990984) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Prevent CSS classes from getting lost when dynamically adding **ix-tab-item**s to **ix-tabs**.

  Fixes #2043
## [@siemens/ix-vue@4.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.3.0) (2026-02-03T17:24:26Z)
### Minor Changes

- [#2341](https://github.com/siemens/ix/pull/2341) [`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372) Thanks [@alexkaduk](https://github.com/alexkaduk)! - **feat(dropdown): add enableTopLayer prop for Popover API rendering**

  Introduces a new `enableTopLayer` prop for `ix-dropdown` and all consuming components to enable rendering in the browser's top layer using the Popover API. This resolves z-index and stacking context issues, particularly with AG Grid and other complex layouts.

- [#2280](https://github.com/siemens/ix/pull/2280) [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add property `passive` to **ix-card**, **ix-action-card**, and **ix-push-card** allowing to suppress mouse states.

- [#2287](https://github.com/siemens/ix/pull/2287) [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improved accessibility for the following components: `ix-menu`, `ix-menu-item`, `ix-menu-settings`, `ix-menu-about`, `ix-menu-expand-icon`, and `ix-icon-button`.

  **API changes:**

  - `ix-menu-settings`: Added `ariaLabelCloseButton` prop (default: "Close Settings")
  - `ix-menu-about`: Added `ariaLabelCloseButton` prop (default: "Close About")

  **Deprecations (will be removed in 5.0.0):**

  - `ix-menu`: `i18nExpandSidebar` prop
  - `ix-application-header`: `ariaLabelMenuExpandIconButton` prop

- [#2051](https://github.com/siemens/ix/pull/2051) [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448) Thanks [@1307-Dev](https://github.com/1307-Dev)! - `ix-slider` is now `form-ready`

### Patch Changes

- [#2337](https://github.com/siemens/ix/pull/2337) [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Add properties **tooltipText** and **ariaLabelTooltip** to **ix-menu-avatar**.

- [#2373](https://github.com/siemens/ix/pull/2373) [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove blur effect from modal backdrop

- Updated dependencies [[`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372), [`1340274`](https://github.com/siemens/ix/commit/1340274534b269f89151452ab48093b5800951ad), [`605ef5b`](https://github.com/siemens/ix/commit/605ef5b30a4cae9d6091cae48504fa42ba69f9ff), [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768), [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64), [`04279c1`](https://github.com/siemens/ix/commit/04279c1a2bb3c92344c0958731d1f061faff6af6), [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc), [`79eed16`](https://github.com/siemens/ix/commit/79eed1645d0f9e23203b26c81e81dc21c818bde3), [`00366ae`](https://github.com/siemens/ix/commit/00366ae3fd06d74a6af7a037728de9b60694d80f), [`0847ca9`](https://github.com/siemens/ix/commit/0847ca9ca8d258ffd64657bd823fbb90cf44f250), [`dcc06b0`](https://github.com/siemens/ix/commit/dcc06b0f924f468ae4341f729062408b6689093b), [`07e1ad1`](https://github.com/siemens/ix/commit/07e1ad1954afb98479441c90167787535e5c432e), [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448), [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42), [`f7345bd`](https://github.com/siemens/ix/commit/f7345bde3489d6eea36aa7d85b7fba6f2ee0092e), [`ca01772`](https://github.com/siemens/ix/commit/ca01772b9f6cb83b84e5ebccbdf740ca3920727b), [`828110e`](https://github.com/siemens/ix/commit/828110eadd0658df444405fd9eb7f89bc7fa7aef), [`089f850`](https://github.com/siemens/ix/commit/089f85033cad045dc55133577073ab58c074f4b4), [`d2a0d17`](https://github.com/siemens/ix/commit/d2a0d17153c5c62cbee4e6a483076c9fad990984)]:
  - @siemens/ix@4.3.0

## [@siemens/ix-react@4.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.3.0) (2026-02-03T17:26:20Z)
### Minor Changes

- [#2341](https://github.com/siemens/ix/pull/2341) [`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372) Thanks [@alexkaduk](https://github.com/alexkaduk)! - **feat(dropdown): add enableTopLayer prop for Popover API rendering**

  Introduces a new `enableTopLayer` prop for `ix-dropdown` and all consuming components to enable rendering in the browser's top layer using the Popover API. This resolves z-index and stacking context issues, particularly with AG Grid and other complex layouts.

- [#2280](https://github.com/siemens/ix/pull/2280) [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add property `passive` to **ix-card**, **ix-action-card**, and **ix-push-card** allowing to suppress mouse states.

- [#2287](https://github.com/siemens/ix/pull/2287) [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improved accessibility for the following components: `ix-menu`, `ix-menu-item`, `ix-menu-settings`, `ix-menu-about`, `ix-menu-expand-icon`, and `ix-icon-button`.

  **API changes:**

  - `ix-menu-settings`: Added `ariaLabelCloseButton` prop (default: "Close Settings")
  - `ix-menu-about`: Added `ariaLabelCloseButton` prop (default: "Close About")

  **Deprecations (will be removed in 5.0.0):**

  - `ix-menu`: `i18nExpandSidebar` prop
  - `ix-application-header`: `ariaLabelMenuExpandIconButton` prop

- [#2051](https://github.com/siemens/ix/pull/2051) [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448) Thanks [@1307-Dev](https://github.com/1307-Dev)! - `ix-slider` is now `form-ready`

### Patch Changes

- [#2337](https://github.com/siemens/ix/pull/2337) [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Add properties **tooltipText** and **ariaLabelTooltip** to **ix-menu-avatar**.

- [#2373](https://github.com/siemens/ix/pull/2373) [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove blur effect from modal backdrop

- Updated dependencies [[`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372), [`1340274`](https://github.com/siemens/ix/commit/1340274534b269f89151452ab48093b5800951ad), [`605ef5b`](https://github.com/siemens/ix/commit/605ef5b30a4cae9d6091cae48504fa42ba69f9ff), [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768), [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64), [`04279c1`](https://github.com/siemens/ix/commit/04279c1a2bb3c92344c0958731d1f061faff6af6), [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc), [`79eed16`](https://github.com/siemens/ix/commit/79eed1645d0f9e23203b26c81e81dc21c818bde3), [`00366ae`](https://github.com/siemens/ix/commit/00366ae3fd06d74a6af7a037728de9b60694d80f), [`0847ca9`](https://github.com/siemens/ix/commit/0847ca9ca8d258ffd64657bd823fbb90cf44f250), [`dcc06b0`](https://github.com/siemens/ix/commit/dcc06b0f924f468ae4341f729062408b6689093b), [`07e1ad1`](https://github.com/siemens/ix/commit/07e1ad1954afb98479441c90167787535e5c432e), [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448), [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42), [`f7345bd`](https://github.com/siemens/ix/commit/f7345bde3489d6eea36aa7d85b7fba6f2ee0092e), [`ca01772`](https://github.com/siemens/ix/commit/ca01772b9f6cb83b84e5ebccbdf740ca3920727b), [`828110e`](https://github.com/siemens/ix/commit/828110eadd0658df444405fd9eb7f89bc7fa7aef), [`089f850`](https://github.com/siemens/ix/commit/089f85033cad045dc55133577073ab58c074f4b4), [`d2a0d17`](https://github.com/siemens/ix/commit/d2a0d17153c5c62cbee4e6a483076c9fad990984)]:
  - @siemens/ix@4.3.0

## [@siemens/ix-echarts@3.0.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%403.0.1) (2026-02-03T17:27:13Z)
### Patch Changes

- [#2313](https://github.com/siemens/ix/pull/2313) [`e18d391`](https://github.com/siemens/ix/commit/e18d391dc52dd29a7723c0c0dc092c11bd097ac0) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Update **eCharts** theme to match latest design spec.

- [#2317](https://github.com/siemens/ix/pull/2317) [`0a3b5c9`](https://github.com/siemens/ix/commit/0a3b5c9f482c0bcecb8e58f131ebad1baa2aedce) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Style **axisLabel** for **eCharts** gauge charts.
## [@siemens/ix-docs@4.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.3.0) (2026-02-03T17:18:50Z)
### Patch Changes

-   [#2297](https://github.com/siemens/ix/pull/2297) [`5e138c9`](https://github.com/siemens/ix/commit/5e138c9c21737aab41d75b0b0933746f9a74bc1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Include examples into api table

## [@siemens/ix-angular@4.3.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.3.0) (2026-02-03T17:25:49Z)
### Minor Changes

- [#2341](https://github.com/siemens/ix/pull/2341) [`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372) Thanks [@alexkaduk](https://github.com/alexkaduk)! - **feat(dropdown): add enableTopLayer prop for Popover API rendering**

  Introduces a new `enableTopLayer` prop for `ix-dropdown` and all consuming components to enable rendering in the browser's top layer using the Popover API. This resolves z-index and stacking context issues, particularly with AG Grid and other complex layouts.

- [#2280](https://github.com/siemens/ix/pull/2280) [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add property `passive` to **ix-card**, **ix-action-card**, and **ix-push-card** allowing to suppress mouse states.

- [#2287](https://github.com/siemens/ix/pull/2287) [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improved accessibility for the following components: `ix-menu`, `ix-menu-item`, `ix-menu-settings`, `ix-menu-about`, `ix-menu-expand-icon`, and `ix-icon-button`.

  **API changes:**

  - `ix-menu-settings`: Added `ariaLabelCloseButton` prop (default: "Close Settings")
  - `ix-menu-about`: Added `ariaLabelCloseButton` prop (default: "Close About")

  **Deprecations (will be removed in 5.0.0):**

  - `ix-menu`: `i18nExpandSidebar` prop
  - `ix-application-header`: `ariaLabelMenuExpandIconButton` prop

- [#2051](https://github.com/siemens/ix/pull/2051) [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448) Thanks [@1307-Dev](https://github.com/1307-Dev)! - `ix-slider` is now `form-ready`

### Patch Changes

- [#2337](https://github.com/siemens/ix/pull/2337) [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Add properties **tooltipText** and **ariaLabelTooltip** to **ix-menu-avatar**.

- [#2373](https://github.com/siemens/ix/pull/2373) [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove blur effect from modal backdrop

- Updated dependencies [[`0299abd`](https://github.com/siemens/ix/commit/0299abd202dcbdfb8b9483015ae8548fb7a21372), [`1340274`](https://github.com/siemens/ix/commit/1340274534b269f89151452ab48093b5800951ad), [`605ef5b`](https://github.com/siemens/ix/commit/605ef5b30a4cae9d6091cae48504fa42ba69f9ff), [`8a1de8b`](https://github.com/siemens/ix/commit/8a1de8b1c0142d8c3a162b740e40d68301330768), [`9842b69`](https://github.com/siemens/ix/commit/9842b690e3a56a585436d493dfe085ee7ded6e64), [`04279c1`](https://github.com/siemens/ix/commit/04279c1a2bb3c92344c0958731d1f061faff6af6), [`fb0edfd`](https://github.com/siemens/ix/commit/fb0edfde119ae83bcb0acb6af641a7e24401b7fc), [`79eed16`](https://github.com/siemens/ix/commit/79eed1645d0f9e23203b26c81e81dc21c818bde3), [`00366ae`](https://github.com/siemens/ix/commit/00366ae3fd06d74a6af7a037728de9b60694d80f), [`0847ca9`](https://github.com/siemens/ix/commit/0847ca9ca8d258ffd64657bd823fbb90cf44f250), [`dcc06b0`](https://github.com/siemens/ix/commit/dcc06b0f924f468ae4341f729062408b6689093b), [`07e1ad1`](https://github.com/siemens/ix/commit/07e1ad1954afb98479441c90167787535e5c432e), [`3c937af`](https://github.com/siemens/ix/commit/3c937afc722fa2d09e6c8e43756c8e7a15391448), [`3d0bbb9`](https://github.com/siemens/ix/commit/3d0bbb976b23db3b50721f198109be0a2c9aef42), [`f7345bd`](https://github.com/siemens/ix/commit/f7345bde3489d6eea36aa7d85b7fba6f2ee0092e), [`ca01772`](https://github.com/siemens/ix/commit/ca01772b9f6cb83b84e5ebccbdf740ca3920727b), [`828110e`](https://github.com/siemens/ix/commit/828110eadd0658df444405fd9eb7f89bc7fa7aef), [`089f850`](https://github.com/siemens/ix/commit/089f85033cad045dc55133577073ab58c074f4b4), [`d2a0d17`](https://github.com/siemens/ix/commit/d2a0d17153c5c62cbee4e6a483076c9fad990984)]:
  - @siemens/ix@4.3.0

## [@siemens/ix@4.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.2.0) (2025-12-10T14:26:29Z)
### Patch Changes

-   [#2285](https://github.com/siemens/ix/pull/2285) [`3cb0ab3`](https://github.com/siemens/ix/commit/3cb0ab37db2d75dac634e44ca1dfe16652836829) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Fix `invalidText` property not being applied to **ix-date-input** and **ix-time-input** when internal validation fails.

    The `invalidText` property now correctly takes precedence over the i18n error messages when both are set. Previously, the i18n message would always be shown for internal validation errors (unparsable dates/times or min/max violations), ignoring the user's custom `invalidText`.

    Fixes #2183.

-   [#2284](https://github.com/siemens/ix/pull/2284) [`9cb98da`](https://github.com/siemens/ix/commit/9cb98da8dcf6f1a30a22bfc66f36a818904290c3) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue in **ix-time-picker** where focusing numbers would scroll the page outside the component container.

    Fixes #2138

-   [#2214](https://github.com/siemens/ix/pull/2214) [`4dbed06`](https://github.com/siemens/ix/commit/4dbed06e2ace5396754eb88ac7bbe57802bdea7d) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Update counter pill background for **ix-tab-item**.

## [@siemens/ix-vue@4.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.2.0) (2025-12-10T14:26:32Z)
### Minor Changes

-   [#2267](https://github.com/siemens/ix/pull/2267) [`4b76803`](https://github.com/siemens/ix/commit/4b76803a0e2f2d2a6dae58b2502e3fa12e10fc46) Thanks [@lzeiml](https://github.com/lzeiml)! - Framework specific functions/services for modals and messages have been added to **ix-angular**, **ix-react** and **ix-vue**.

    -   `MessageService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to show messages using the `showMessage` function and different pre defined messages using the functions `info`, `warning`, `error`, `success` and `question`.
    -   `LoadingService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to display the loading modal using `showModalLoading`.
    -   `showModalLoading` utility function has been added to **ix-react** and **ix-vue**.
    -   `showMessage`, `showMessage.info`, `showMessage.warning`, `showMessage.error`, `showMessage.success`, `showMessage.question` utility functions have been added to **ix-react** and **ix-vue**.

### Patch Changes

-   Updated dependencies \[[`3cb0ab3`](https://github.com/siemens/ix/commit/3cb0ab37db2d75dac634e44ca1dfe16652836829), [`9cb98da`](https://github.com/siemens/ix/commit/9cb98da8dcf6f1a30a22bfc66f36a818904290c3), [`4dbed06`](https://github.com/siemens/ix/commit/4dbed06e2ace5396754eb88ac7bbe57802bdea7d)]:
    -   @siemens/ix@4.2.0

## [@siemens/ix-react@4.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.2.0) (2025-12-10T14:26:41Z)
### Minor Changes

-   [#2267](https://github.com/siemens/ix/pull/2267) [`4b76803`](https://github.com/siemens/ix/commit/4b76803a0e2f2d2a6dae58b2502e3fa12e10fc46) Thanks [@lzeiml](https://github.com/lzeiml)! - Framework specific functions/services for modals and messages have been added to **ix-angular**, **ix-react** and **ix-vue**.

    -   `MessageService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to show messages using the `showMessage` function and different pre defined messages using the functions `info`, `warning`, `error`, `success` and `question`.
    -   `LoadingService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to display the loading modal using `showModalLoading`.
    -   `showModalLoading` utility function has been added to **ix-react** and **ix-vue**.
    -   `showMessage`, `showMessage.info`, `showMessage.warning`, `showMessage.error`, `showMessage.success`, `showMessage.question` utility functions have been added to **ix-react** and **ix-vue**.

### Patch Changes

-   Updated dependencies \[[`3cb0ab3`](https://github.com/siemens/ix/commit/3cb0ab37db2d75dac634e44ca1dfe16652836829), [`9cb98da`](https://github.com/siemens/ix/commit/9cb98da8dcf6f1a30a22bfc66f36a818904290c3), [`4dbed06`](https://github.com/siemens/ix/commit/4dbed06e2ace5396754eb88ac7bbe57802bdea7d)]:
    -   @siemens/ix@4.2.0

## [@siemens/ix-docs@4.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.2.0) (2025-12-10T14:26:38Z)

## [@siemens/ix-angular@4.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.2.0) (2025-12-10T14:26:35Z)
### Minor Changes

-   [#2267](https://github.com/siemens/ix/pull/2267) [`4b76803`](https://github.com/siemens/ix/commit/4b76803a0e2f2d2a6dae58b2502e3fa12e10fc46) Thanks [@lzeiml](https://github.com/lzeiml)! - Framework specific functions/services for modals and messages have been added to **ix-angular**, **ix-react** and **ix-vue**.

    -   `MessageService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to show messages using the `showMessage` function and different pre defined messages using the functions `info`, `warning`, `error`, `success` and `question`.
    -   `LoadingService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to display the loading modal using `showModalLoading`.
    -   `showModalLoading` utility function has been added to **ix-react** and **ix-vue**.
    -   `showMessage`, `showMessage.info`, `showMessage.warning`, `showMessage.error`, `showMessage.success`, `showMessage.question` utility functions have been added to **ix-react** and **ix-vue**.

### Patch Changes

-   [#2267](https://github.com/siemens/ix/pull/2267) [`4b76803`](https://github.com/siemens/ix/commit/4b76803a0e2f2d2a6dae58b2502e3fa12e10fc46) Thanks [@lzeiml](https://github.com/lzeiml)! - An issue for `ModalService` and `ToastService` in **ix-angular/standalone** has been fixed and can now be injected correctly.

    Fixes #2060

-   [#2267](https://github.com/siemens/ix/pull/2267) [`4b76803`](https://github.com/siemens/ix/commit/4b76803a0e2f2d2a6dae58b2502e3fa12e10fc46) Thanks [@lzeiml](https://github.com/lzeiml)! - `defineCustomElement` is now called for modal related functions in **ix-angular/standalone**, fixing production builds. Fixes #2263, make sure to swap to the ModalService from **ix-angular/standalone** instead of **ix-angular** for this fix.

-   [#2283](https://github.com/siemens/ix/pull/2283) [`052bf07`](https://github.com/siemens/ix/commit/052bf075e250e3d6c8ea194dc1048fa1892b8e9c) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Fixed an issue where **ix-tree** with a custom `renderItem` function would throw a runtime error ("TypeError: this.renderItem is not a function")

    Fixes #2274

-   Updated dependencies \[[`3cb0ab3`](https://github.com/siemens/ix/commit/3cb0ab37db2d75dac634e44ca1dfe16652836829), [`9cb98da`](https://github.com/siemens/ix/commit/9cb98da8dcf6f1a30a22bfc66f36a818904290c3), [`4dbed06`](https://github.com/siemens/ix/commit/4dbed06e2ace5396754eb88ac7bbe57802bdea7d)]:
    -   @siemens/ix@4.2.0

## [@siemens/ix@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.1.0) (2025-12-01T08:25:27Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2156](https://github.com/siemens/ix/pull/2156) [`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Make sure arrow position is correct even after placement of **ix-tooltip** changes.

    Fixes #2076 and #2099.

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2033](https://github.com/siemens/ix/pull/2033) [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Prevent empty space if no icon is shown in **category-filter**.

-   [#2171](https://github.com/siemens/ix/pull/2171) [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent showing empty tooltip for inputs if `show-text-as-tooltip=true`. Closes #2147

-   [#2275](https://github.com/siemens/ix/pull/2275) [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Always show underline for **ix-link-button** and HTML anchor tags.

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   [#2105](https://github.com/siemens/ix/pull/2105) [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Remove filter from dropdown and input when selecting an item in **ix-select**.

-   [#2189](https://github.com/siemens/ix/pull/2189) [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Update padding and icon alignment of **ix-tooltip**.

-   [#2044](https://github.com/siemens/ix/pull/2044) [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7) Thanks [@Nadim901](https://github.com/Nadim901)! - Prevent `ix-menu-settings` and `ix-menu-about` to trigger tabChange event twice. Fixes #1596

-   [#2080](https://github.com/siemens/ix/pull/2080) [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Only focus input after user interaction with **ix-category-filter**.

-   [#2269](https://github.com/siemens/ix/pull/2269) [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Update layout for **ix-date-picker** and **ix-time-picker**.

## [@siemens/ix-vue@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.1.0) (2025-12-01T08:25:36Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix-react@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.1.0) (2025-12-01T08:25:30Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix-docs@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.1.0) (2025-12-01T08:47:03Z)
# @siemens/ix-docs

## 4.0.0

### Major Changes

-   [#2238](https://github.com/siemens/ix/pull/2238) [`416b278`](https://github.com/siemens/ix/commit/416b278b00a28308829fced379bc9cae0a04caca) Thanks [@danielleroux](https://github.com/danielleroux)! - Init deployment of component documentation as markdown files

## [@siemens/ix-angular@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.1.0) (2025-12-01T08:25:33Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.0.0) (2025-11-06T16:26:46Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2104](https://github.com/siemens/ix/pull/2104) [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48) Thanks [@danielleroux](https://github.com/danielleroux)! - - Add additional variants `primary`, `secondary`, `tertiary`, `subtle-primary`, `subtle-secondary`, `subtle-tertiary`, `danger-primary`, `danger-secondary` and `danger-tertiary`

    -   Adapt styling of `secondary` variant
    -   Remove **ghost** and **outline** property from `ix-button`, `ix-toggle-button`, `ix-dropdown-button`, `ix-icon-button` and other button components to get replaced with new introduced variants.
    -   Remove button tokens for `ghost` and `outline` variants.

    For more information please read BREAKING_CHANGES for version 4.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2135](https://github.com/siemens/ix/pull/2135) [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The **themeSwitcher**'s **setTheme** and **setVariant** methods no longer take a target parameter. Before this parameter was used to specify the target element to set/change the theme configurations on.
    Now all configuration will be made on the HTML tag.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2227](https://github.com/siemens/ix/pull/2227) [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Remove unused property **offsetBottom** from **ix-menu-about-news**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (``) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2207](https://github.com/siemens/ix/pull/2207) [`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Correct margin between **ix-toggle** swtich and label.

-   [#2202](https://github.com/siemens/ix/pull/2202) [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Prevent weekday texts from getting truncated prematurely in **ix-date-picker**.

-   [#2067](https://github.com/siemens/ix/pull/2067) [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3) Thanks [@Nadim901](https://github.com/Nadim901)! - Filter dropdown of **ix-select** even if text input is equal to currently selected item.

    Fixes #1991.

-   [#2188](https://github.com/siemens/ix/pull/2188) [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022) Thanks [@danielleroux](https://github.com/danielleroux)! - Provide fallback ARIA label for header icon in **ix-action-card**.

-   [#2218](https://github.com/siemens/ix/pull/2218) [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Preserve manual resize dimensions during re-renders of **ix-textarea**.

-   [#2175](https://github.com/siemens/ix/pull/2175) [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a) Thanks [@danielleroux](https://github.com/danielleroux)! - Add thumb border and valid state styling and update design tokens for **ix-toggle**.

-   [#2186](https://github.com/siemens/ix/pull/2186) [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df) Thanks [@danielleroux](https://github.com/danielleroux)! - Improve color contrast for warning state in these components:

    **ix-chip**
    **ix-message-bar**
    **ix-modal**
    **ix-pill**
    **ix-spinner**
    **ix-toast**
    **ix-workflow-steps**

-   [#2237](https://github.com/siemens/ix/pull/2237) [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Delegate focus to nested button for **ix-button**.

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2092](https://github.com/siemens/ix/pull/2092) [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09) Thanks [@lzeiml](https://github.com/lzeiml)! - Fix **theme-switcher** to detect and toggle theme changes on both document.body and document.documentElement.

-   [#1984](https://github.com/siemens/ix/pull/1984) [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - Update margins to match design for **ix-toggle**.

-   [#2188](https://github.com/siemens/ix/pull/2188) [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022) Thanks [@danielleroux](https://github.com/danielleroux)! - Update ix-icons to latest version 3.2.0

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#1998](https://github.com/siemens/ix/pull/1998) [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Add header slot to **ix-content-header** to allow adding elements next to title text.

-   [#1928](https://github.com/siemens/ix/pull/1928) [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - Increase active area of **ix-radio**

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components

    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Adapt border radius (2px) to fit to latest design specs

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Fix mouse states and focus visualisation for **ix-group** and **ix-group-item**.

-   [#2054](https://github.com/siemens/ix/pull/2054) [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Decrease vertical gap of **ix-radio** group

-   [#1995](https://github.com/siemens/ix/pull/1995) [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Update close button color to match Figma design for:

    -   **ix-category-filter**
    -   **ix-drawer**
    -   **ix-menu-about-news**
    -   **ix-menu-tabs**
    -   **ix-message-bar**
    -   **ix-modal-header**
    -   **ix-pane**
    -   **ix-toast**

-   [#2059](https://github.com/siemens/ix/pull/2059) [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9) Thanks [@danielleroux](https://github.com/danielleroux)! - Move safeArea variables to `:root` level

-   [#2118](https://github.com/siemens/ix/pull/2118) [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add `aria-labelledby` to **ix-action-card** only when `ariaLabelCard` property is not set and `heading` property is set.

-   [#2191](https://github.com/siemens/ix/pull/2191) [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Prevent **ix-select** from showing unwanted scrollbar.

    Fixes #2170

-   [#2193](https://github.com/siemens/ix/pull/2193) [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Hide show password button for disabled **ix-input**s of type password.

    Fixes #2180

## [@siemens/ix-vue@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.0.0) (2025-11-06T16:26:49Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (``) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-react@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.0.0) (2025-11-06T16:26:43Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (``) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2148](https://github.com/siemens/ix/pull/2148) [`663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e`](https://github.com/siemens/ix/commit/663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e) Thanks [@philSixZero](https://github.com/philSixZero)! - fix `markItemsAsDirty` typo in type definition of **IxTreeProps** to omit native property

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-docs@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.0.0) (2025-11-06T16:26:37Z)
### Major Changes

-   [#2238](https://github.com/siemens/ix/pull/2238) [`416b278`](https://github.com/siemens/ix/commit/416b278b00a28308829fced379bc9cae0a04caca) Thanks [@danielleroux](https://github.com/danielleroux)! - Init deployment of component documentation as markdown files

## [@siemens/ix-angular@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.0.0) (2025-11-06T16:26:52Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2042](https://github.com/siemens/ix/pull/2042) [`74377310d673af2219ae3ea2291e98f8b30fce2f`](https://github.com/siemens/ix/commit/74377310d673af2219ae3ea2291e98f8b30fce2f) Thanks [@danielleroux](https://github.com/danielleroux)! - Require peerDependencies to angular to be >= 20

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated Angular-specific theme switcher service has been removed. Use the theme switcher from `@siemens/ix` instead of the Angular-specific service.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (``) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-aggrid@4.0.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%404.0.1) (2025-11-06T16:26:40Z)
### Patch Changes

-   [#2198](https://github.com/siemens/ix/pull/2198) [`327eebcaef955705067473ab5d2deea8713b12db`](https://github.com/siemens/ix/commit/327eebcaef955705067473ab5d2deea8713b12db) Thanks [@lzeiml](https://github.com/lzeiml)! - Require **AG Grid** V33 or higher and support new theming API.
    Fix dependencies to use latest v4 release of `@siemens/ix`

    Fixes: #1784

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.2.0) (2025-08-04T13:36:14Z)
### Minor Changes

-   [#2004](https://github.com/siemens/ix/pull/2004) [`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Update theme files to new token structure and add support for new theming syntax (**data-ix-theme**, **data-ix-color-schema**).

-   [#1951](https://github.com/siemens/ix/pull/1951) [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa) Thanks [@danielleroux](https://github.com/danielleroux)! - Add **ix-progress-indicator**

    Fixes #651

-   [#2005](https://github.com/siemens/ix/pull/2005) [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: add method `markItemAsDirty` to flag tree items which request a hard rerender

-   [#1974](https://github.com/siemens/ix/pull/1974) [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove internal type definition from public api types.

    Fixes #1969

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1882](https://github.com/siemens/ix/pull/1882) [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Gracefully handle whitespace and undefined texts in `ix-field-wrapper`.

-   [#1950](https://github.com/siemens/ix/pull/1950) [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f) Thanks [@Nadim901](https://github.com/Nadim901)! - Keep **ix-modal** open after mouse down on backdrop and mouse up over modal or vice versa.

    Fixes #1663

-   [#1963](https://github.com/siemens/ix/pull/1963) [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Align expand/collapse arrows with design for:

    -   **ix-blind**
    -   **ix-card**
    -   **ix-dropdown-button**
    -   **ix-group**
    -   **ix-select**
    -   **ix-tree-item**

-   [#1947](https://github.com/siemens/ix/pull/1947) [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95) Thanks [@Nadim901](https://github.com/Nadim901)! - Break label text of **ix-toggle** in case of text overflow.

    Fixes #683

-   [#2014](https://github.com/siemens/ix/pull/2014) [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62) Thanks [@danielleroux](https://github.com/danielleroux)! - Increase z-index for `toast`s

    Fixes #1908

-   [#1941](https://github.com/siemens/ix/pull/1941) [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - **Ix-modal** animation is always identical regardless of poisition.
    It will appear from above and disappear towards the top of the screen again.
    It will only travel it's own height before animation ends, not the whole distance from/to top.

-   [#2016](https://github.com/siemens/ix/pull/2016) [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Ensure that setting max-width on **ix-chip** and/or **ix-pill** will affect componet width.

-   [#1980](https://github.com/siemens/ix/pull/1980) [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Set soft text as subheading color for filled and outline variant of **ix-action-card**.

    Fixes #1967

-   [#2034](https://github.com/siemens/ix/pull/2034) [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Fix styling of tooltip container height in **ix-tooltip**.

    Fixes #2009.

-   [#1994](https://github.com/siemens/ix/pull/1994) [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Set background-color explicitly for outline variants of **ix-chip** and **ix-pill**.

-   [#2022](https://github.com/siemens/ix/pull/2022) [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db) Thanks [@danielleroux](https://github.com/danielleroux)! - Add additional check if the helper text is undefined to hide empty validation text

    Fixes #2021

-   [#1943](https://github.com/siemens/ix/pull/1943) [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Remove obsolete console warning message for formerly illegal property combinations for **ix-toggle-button** and **ix-icon-toggle-button**.

-   [#1945](https://github.com/siemens/ix/pull/1945) [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Align **ix-pill** and **ix-chip** vertically flush, with or without icons.

-   [#1985](https://github.com/siemens/ix/pull/1985) [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Don't take up space for empty dropdown slot in **ix-group**.

    Fixes #1486

-   [#1993](https://github.com/siemens/ix/pull/1993) [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Improve jsdocs for **ix-date-picker** to better describe `locale` property

-   [#2015](https://github.com/siemens/ix/pull/2015) [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6) Thanks [@danielleroux](https://github.com/danielleroux)! - Update to stenciljs v4.36.0

    Fixes #1543 #1286

-   [#1873](https://github.com/siemens/ix/pull/1873) [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Align visual appearance of **ix-workflow** to component state

    Fixes #1808

-   [#1978](https://github.com/siemens/ix/pull/1978) [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Fix order of bottom menu items in **ix-menu**. Now "Settings" appears first and "About and legal information" appears last.

## [@siemens/ix-vue@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.2.0) (2025-08-04T13:36:17Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1872](https://github.com/siemens/ix/pull/1872) [`3cbebbd3b13a869ab0fd7bf3452c19adde77de6b`](https://github.com/siemens/ix/commit/3cbebbd3b13a869ab0fd7bf3452c19adde77de6b) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - add support for showModal

    Fixes #1771

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-react@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.2.0) (2025-08-04T13:36:11Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1974](https://github.com/siemens/ix/pull/1974) [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383) Thanks [@danielleroux](https://github.com/danielleroux)! - Update react-ouput-target to 1.1.0

-   [#2005](https://github.com/siemens/ix/pull/2005) [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: call render function if item data is updated

    Fixes #1948

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-angular@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.2.0) (2025-08-04T13:36:08Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1993](https://github.com/siemens/ix/pull/1993) [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Improve jsdocs for **ix-date-picker** to better describe `locale` property

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   [#1933](https://github.com/siemens/ix/pull/1933) [`7a8d7b72c00a1b303006531965233c794c9f1bcb`](https://github.com/siemens/ix/commit/7a8d7b72c00a1b303006531965233c794c9f1bcb) Thanks [@Nadim901](https://github.com/Nadim901)! - Keep **radio-value-accessor** in sync with form control.

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-aggrid@3.0.2](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.2) (2025-08-04T13:36:06Z)
### Patch Changes

-   [#1983](https://github.com/siemens/ix/pull/1983) [`bbb849d7c51b8b388f9a6d2b27e0769ae1e68442`](https://github.com/siemens/ix/commit/bbb849d7c51b8b388f9a6d2b27e0769ae1e68442) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Fix tooltip background color for **AG Grid**.

    Fixes #1932

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.1.0) (2025-06-16T10:53:12Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   [#1922](https://github.com/siemens/ix/pull/1922) [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Match icon color to border color for outline **ix-chip**.

-   [#1925](https://github.com/siemens/ix/pull/1925) [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Update global anchor tag styling.

-   [#1887](https://github.com/siemens/ix/pull/1887) [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - skip render of ix-icon on `ix-pill` and `ix-chip` when `icon` is not set.

    Fixes #1885
    Fixes #1879

-   [#1874](https://github.com/siemens/ix/pull/1874) [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6) Thanks [@danielleroux](https://github.com/danielleroux)! - Move falsy dependencies from "dependencies" to "devDependencies"

-   [#1762](https://github.com/siemens/ix/pull/1762) [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Ensure that all items can be reached via scrolling inside overflowing `ix-dropdown`. Fixes #1671

-   [#1888](https://github.com/siemens/ix/pull/1888) [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b) Thanks [@danielleroux](https://github.com/danielleroux)! - Show correct icons within predefined message modals

    Fixes #1886

-   [#1849](https://github.com/siemens/ix/pull/1849) [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Ensure that the toast position is applied correctly, even if the custom component is not defined yet.

    Fixes: #1381

-   [#1914](https://github.com/siemens/ix/pull/1914) [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Set correct margin between button and label for `ix-toggle`.

## [@siemens/ix-vue@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.1.0) (2025-06-16T10:53:15Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   [#1861](https://github.com/siemens/ix/pull/1861) [`a32fcefdda7087207ecaa354c5ce62ca18063548`](https://github.com/siemens/ix/commit/a32fcefdda7087207ecaa354c5ce62ca18063548) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - Fix triggering of events

    Fixes #1395

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0

## [@siemens/ix-react@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.1.0) (2025-06-16T10:53:18Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0
