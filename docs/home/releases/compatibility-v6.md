---
title: Compatibility matrix
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
sidebar_label: Compatibility matrix
description: 'Compatibility matrix for Siemens Industrial Experience Version 6.'
---

# Compatibility matrix

**Status:** Latest &middot; **Released:** November 2026 &middot; **Latest version:** 6.0.0

This page lists the dependencies and peer dependencies of all Siemens Industrial Experience V6 packages, based on the versions published to npm. Whether peer dependencies are installed automatically depends on your package manager and its configuration. npm 7 and later install non-optional peer dependencies by default. We recommend declaring peer dependencies explicitly in your project's `package.json` when needed.

Update all packages your application uses together. Don't apply a blanket `@siemens/ix*` version, as the ECharts integration uses a different major version. For migration details, see the [V6 breaking changes guide](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md).

## Core packages

| Package             | Version | Peer dependencies                                                                                     | Dependencies (installed automatically) |
| ------------------- | ------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `@siemens/ix`       | 6.x     | `@siemens/ix-icons` ^4.0.0, `@floating-ui/dom` ^1.6.13\*, `luxon` ^3.4.4\*, `@stencil/core` ^4.43.5\* | -                                      |
| `@siemens/ix-icons` | ^4.0.0  | -                                                                                                     | -                                      |

\* Optional peer dependencies. They're only required when consuming the Stencil collection output. The root, custom elements, loader, hydrate and framework outputs bundle these runtime libraries.

`@siemens/ix-icons` 3.x isn't compatible with V6. It uses the legacy color tokens and can render incorrect icon colors without a build error.

## Framework wrappers

The framework wrappers depend on the matching minor version of `@siemens/ix` (e.g. `@siemens/ix-react` 6.0.x installs `@siemens/ix` ~6.0.0). Always use the same version for `@siemens/ix` and the wrapper package.

| Wrapper version | `@siemens/ix` dependency |
| --------------- | ------------------------ |
| 6.0.x           | ~6.0.0                   |

| Package               | Version | Peer dependencies                                                                   | Dependencies (installed automatically)                                                    |
| --------------------- | ------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `@siemens/ix-react`   | 6.x     | `react` ^18 \|\| ^19, `react-dom` ^18 \|\| ^19, `@siemens/ix-icons` ^4.0.0          | `@siemens/ix` (matching minor, see above), `@stencil/react-output-target` ^1.6.5, `tslib` |
| `@siemens/ix-angular` | 6.x     | `@angular/core` >=21.2.25, `@angular/forms` >=21.2.25, `@siemens/ix-icons` ^4.0.0\* | `@siemens/ix` (matching minor, see above), `tslib` ^2.3.0                                 |
| `@siemens/ix-vue`     | 6.x     | `vue` ^3.5.0, `@siemens/ix-icons` ^4.0.0                                            | `@siemens/ix` (matching minor, see above), `@stencil/vue-output-target` ^0.14.6           |

\* Angular 21 requires TypeScript `>=5.9 <6.1`.

## Third-party integrations

| Package               | Version | Peer dependencies                                                        |
| --------------------- | ------- | ------------------------------------------------------------------------ |
| `@siemens/ix-aggrid`  | 6.x     | `@siemens/ix` ^6.0.0, `ag-grid-community` ^33 \|\| ^34 \|\| ^35 \|\| ^36 |
| `@siemens/ix-echarts` | 5.x     | `@siemens/ix` ^6.0.0, `echarts` ^6.1.0                                   |

ECharts 5 is no longer supported. Review the [ECharts 6 upgrade guide](https://echarts.apache.org/handbook/en/basics/release-note/v6-upgrade-guide/) and check that third-party chart wrappers and extensions declare ECharts 6 support.

## Themes

The Siemens brand themes are available exclusively for Siemens AG products. Siemens AG employees can access them at [https://code.siemens.com/siemens-ix/ix-brand-theme](https://code.siemens.com/siemens-ix/ix-brand-theme).

| Package                       | Version | Peer dependencies    | Registry                                                                   |
| ----------------------------- | ------- | -------------------- | -------------------------------------------------------------------------- |
| `@siemens/ix-brand-theme`     | 5.x     | `@siemens/ix` ^6.0.0 |
| `@siemens-ix/corporate-theme` | 3.x     | `@siemens/ix` ^6.0.0 | code.siemens.com GitLab npm registry (no VPN, npm authentication required) |

The corporate theme is an alternative to the brand theme for external partners without VPN access. Its major version differs because it was introduced later than the brand theme, but its latest version is aligned with the latest brand theme version.

It's published to the code.siemens.com GitLab npm registry. [Authenticate with the GitLab npm registry](https://docs.gitlab.com/ee/user/packages/npm_registry/), configure the scope in your `.npmrc` and install the package:

```sh
npm config set @siemens-ix:registry https://code.siemens.com/api/v4/packages/npm/
npm install @siemens-ix/corporate-theme
```

| `@siemens/ix` | `@siemens/ix-brand-theme` | `@siemens-ix/corporate-theme` |
| ------------- | ------------------------- | ----------------------------- |
| 6.x           | 5.x                       | 3.x                           |
| 5.x           | 4.x                       | 2.x                           |
| 4.x           | 3.x                       | 1.x                           |

## Version history

| `@siemens/ix` | Released      | `@siemens/ix-icons` | Angular   | React        | Vue    |
| ------------- | ------------- | ------------------- | --------- | ------------ | ------ |
| 6.0.0         | November 2026 | ^4.0.0              | >=21.2.25 | ^18 \|\| ^19 | ^3.5.0 |

For V5 requirements, see the [V5 compatibility matrix](compatibility-v5.md).
