# Compatibility matrix

> Compatibility matrix for Siemens Industrial Experience Version 5.

# Compatibility matrix

**Status:** Latest &middot; **Released:** May 2026 &middot; **Latest version:** 5.3.0

This page lists the dependencies and peer dependencies of all Siemens Industrial Experience V5 packages, based on the versions published to npm. Whether peer dependencies are installed automatically depends on your package manager and its configuration. npm 7 and later install non-optional peer dependencies by default. We recommend declaring peer dependencies explicitly in your project's `package.json` when needed.

## Core packages

| Package             | Version | Peer dependencies             | Dependencies (installed automatically)                       |
| ------------------- | ------- | ----------------------------- | ------------------------------------------------------------ |
| `@siemens/ix`       | 5.x     | `@siemens/ix-icons`: ^3.5.0\* | `@floating-ui/dom` ^1.6.13, `animejs` ^4.1.2, `luxon` ^3.4.4 |
| `@siemens/ix-icons` | ^3.5.0  | -                             | -                                                            |

\* Versions 5.0.x and 5.1.x require `@siemens/ix-icons` ^3.4.0. From 5.2.0 onwards, ^3.5.0 is required.

## Framework wrappers

The framework wrappers depend on the matching minor version of `@siemens/ix` (e.g. `@siemens/ix-react` 5.3.x installs `@siemens/ix` ~5.3.0). Always use the same version for `@siemens/ix` and the wrapper package.

| Wrapper version | `@siemens/ix` dependency |
| --------------- | ------------------------ |
| 5.3.x           | ~5.3.0                   |
| 5.2.x           | ~5.2.0                   |
| 5.1.x           | ~5.1.0                   |
| 5.0.x           | ~5.0.0                   |

| Package               | Version | Peer dependencies                                                                 | Dependencies (installed automatically)                                                        |
| --------------------- | ------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `@siemens/ix-react`   | 5.x     | `react` ^18 \|\| ^19, `react-dom` ^18 \|\| ^19, `@siemens/ix-icons` ^3.5.0\*      | `@siemens/ix` (matching minor, see above), `@stencil/react-output-target` ^1.5.3\*\*, `tslib` |
| `@siemens/ix-angular` | 5.x     | `@angular/core` >=20.0.0, `@angular/forms` >=20.0.0, `@siemens/ix-icons` ^3.5.0\* | `@siemens/ix` (matching minor, see above), `tslib` ^2.3.0                                     |
| `@siemens/ix-vue`     | 5.x     | `vue` >=3.2.45, `@siemens/ix-icons` ^3.5.0\*                                      | `@siemens/ix` (matching minor, see above), `@stencil/vue-output-target` ^0.13.2\*\*           |

\* Versions 5.0.x and 5.1.x require `@siemens/ix-icons` ^3.4.0.

\*\* Version 5.0.x uses `@stencil/react-output-target` ^1.5.0 and `@stencil/vue-output-target` ^0.12.0.

## Third-party integrations

| Package               | Version | Peer dependencies                                               |
| --------------------- | ------- | --------------------------------------------------------------- |
| `@siemens/ix-aggrid`  | 5.x     | `@siemens/ix` ^5.0.0, `ag-grid-community` ^33 \|\| ^34 \|\| ^35 |
| `@siemens/ix-echarts` | 4.x     | `@siemens/ix` ^5.0.0, `echarts` ^5.0.0 \|\| ^6.0.0\*            |

\* `@siemens/ix-echarts` 4.0.x requires `echarts` ^5.3.3. Support for ECharts 6 was added in 4.1.0.

## Themes

The Siemens brand themes are available exclusively for Siemens AG products. Siemens AG employees can access them at [https://code.siemens.com/siemens-ix/ix-brand-theme](https://code.siemens.com/siemens-ix/ix-brand-theme).

| Package                       | Version | Peer dependencies    | Registry                                                                   |
| ----------------------------- | ------- | -------------------- | -------------------------------------------------------------------------- |
| `@siemens/ix-brand-theme`     | 4.x     | `@siemens/ix` ^5.0.0 |
| `@siemens-ix/corporate-theme` | 2.x     | `@siemens/ix` ^5.0.0 | code.siemens.com GitLab npm registry (no VPN, npm authentication required) |

The corporate theme is an alternative to the brand theme for external partners without VPN access. Its major version differs because it was introduced later than the brand theme, but its latest version is aligned with the latest brand theme version.

It's published to the code.siemens.com GitLab npm registry. [Authenticate with the GitLab npm registry](https://docs.gitlab.com/ee/user/packages/npm_registry/), configure the scope in your `.npmrc` and install the package:

```sh
npm config set @siemens-ix:registry https://code.siemens.com/api/v4/packages/npm/
npm install @siemens-ix/corporate-theme
```

| `@siemens/ix` | `@siemens/ix-brand-theme` | `@siemens-ix/corporate-theme` |
| ------------- | ------------------------- | ----------------------------- |
| 5.x           | 4.x                       | 2.x                           |
| 4.x           | 3.x                       | 1.x                           |

## Version history

| `@siemens/ix` | Released     | `@siemens/ix-icons` | Angular | React        | Vue      |
| ------------- | ------------ | ------------------- | ------- | ------------ | -------- |
| 5.3.0         | October 2026 | ^3.5.0              | >=20    | ^18 \|\| ^19 | >=3.2.45 |
| 5.2.x         | August 2026  | ^3.5.0              | >=20    | ^18 \|\| ^19 | >=3.2.45 |
| 5.1.x         | July 2026    | ^3.4.0              | >=20    | ^18 \|\| ^19 | >=3.2.45 |
| 5.0.x         | May 2026     | ^3.4.0              | >=20    | ^18 \|\| ^19 | >=3.2.45 |

```

```
