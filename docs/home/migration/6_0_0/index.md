---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Learn about the optional peer dependency migration when upgrading from Siemens Industrial Experience design system V5 to V6.
---

# Upgrade to V6.0.0

:::info Recommended upgrade path
We strongly recommend upgrading version by version and not skipping major versions. If your project is still on an older major release, complete each intermediate migration first before moving to Version 6.
:::

## Optional peer dependencies

In `@siemens/ix` V6, the following packages are declared as optional `peerDependencies`. This is an intentional breaking contract change in V6.

| Package | Supported version |
| :--- | :--- |
| `@floating-ui/dom` | `^1.6.13` |
| `animejs` | `^4.1.2` |
| `luxon` | `^3.4.4` |
| `@stencil/core` | `^4.43.5` |

### Normal consumers

Standard/root distribution, the custom-elements entry point `@siemens/ix/components`, loader, hydrate, and Angular/React/Vue wrappers remain self-contained because these runtime libraries are bundled. Users of these normal entry points do not need to install these peers solely for Siemens Industrial Experience.

### Stencil collection consumers

The published Stencil collection output, using the `collection` / `collection:main` package entries and `dist/collection`, retains bare imports for these runtime libraries. Consumers relying on this Stencil collection must explicitly install **all four packages** listed above. These packages are not optional for collection users.

## Installation

If you rely on the Stencil collection, install all four packages with your preferred package manager:

```bash
pnpm add @floating-ui/dom animejs luxon @stencil/core
```

```bash
npm install @floating-ui/dom animejs luxon @stencil/core
```

```bash
yarn add @floating-ui/dom animejs luxon @stencil/core
```
