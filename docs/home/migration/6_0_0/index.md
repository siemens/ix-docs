---
sidebar_position: 0
sidebar_title: Upgrade to V6
title: Upgrade to V6
doc-type: banner
description: Upgrade from V5 to V6 with guidance on design tokens, component changes, framework requirements, optional peer dependencies and Figma library updates.
---

import { IxBadge, IxLinkButton } from '@siemens/ix-react';
import { iconAlarm, iconCode, iconInfo, iconShapes, iconSuccess, iconWarning, iconWarningRhomb, iconWarningOctagon } from '@siemens/ix-icons/icons';

## Start here

This guide summarizes the [V6 breaking changes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#breaking-changes-v6) for code and design. For upgrade paths and migration methods, see the [migration overview](../migration-overview.md).

Pay particular attention to **design tokens, status variants and icon sizing** when migrating.

1. **Check requirements:** review the [framework and tooling requirements](#framework-and-tooling-requirements) for your application.
2. **Update dependencies:** upgrade `@siemens/ix` and any framework wrappers to V6, and use `@siemens/ix-icons@4.0.0`. Only Stencil collection consumers need to install the [optional runtime peers](#optional-peer-dependencies) explicitly.
3. **Replace legacy design tokens:** migrate custom styles to [Siemens Design Language tokens](#foundations), accounting for changed values and formats as well as names.
4. **Preserve status meaning:** migrate [status variants](#status-variants) by semantic intent, not name alone. Existing names such as `warning` and `critical` now mean something different.
5. **Update stylesheet imports:** use the supported [CSS and Sass entry points](#stylesheets-and-sass) and explicitly include any global styles you still need.
6. **Review affected components:** apply the relevant [component migrations](#migration-by-component), check the [24px-to-20px icon change](#icon-size), and address any [wrapper-type and hydration changes](#wrapper-types-and-hydration) that affect your integration.
7. **Build, run and test your application:** check affected workflows and visually review token values, status colors, typography and icon sizing.
8. **Migrate Figma files:** enable the Siemens Design Language token library, migrate colors, text and shadows using the [Foundations guidance](#foundations), and follow the component-specific migration guides for deprecated components.

## Migration by topic

### Foundations

V6 replaces legacy design tokens with **Siemens Design Language** system tokens. Updating token names alone may not preserve the previous appearance: token values and formats have changed, some tokens and typography classes have been removed, and affected components now use 20px icons instead of 24px. Use the sections below to update custom styles and review sizing changes.

[Replaced legacy tokens with Siemens Design Language tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#siemens-design-tokens)

![Token changes](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8729-378&t=gkb8iEqBC8dAIiib-4)

#### Color tokens

- [Changed shadow and typography tokens to contain complete `box-shadow` and `font` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#token-value-shapes)
- [Changed icon and component color properties to use complete token names](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties)
- [Removed legacy theme exports](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-theme-exports)
- [Removed deprecated component tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-deprecated-component-tokens)
- [Removed automatic token prefixing from ECharts computed CSS properties](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-computed-css-properties)

#### Typography

- [Changed the default monospace font family](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#monospace-font-family)
- [Renamed `ix-typography` `textColor` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-typography-textcolor-rename)
- [Removed unsupported typography utility classes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#typography-utility-classes)

#### Sizing tokens

- [Changed the default icon size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20)
- [Changed the `ix-progress-indicator` circular `sm` size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-size-scale)
- [Renamed and remapped `ix-spinner` sizes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-spinner-size-scale)
- [Replaced common border, radius, and focus tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#common-border-radius-and-focus-overrides)
- [Removed common dimension and typography tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens)

#### Community theme

- [Renamed the Classic theme to Community](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#classic-theme-renamed-to-community)


:::tip

Visit our guide in [Figma](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165984-752&t=idPsOueDoCuPRIpe-40) to migrate your Figma files to the new design tokens. First **enable** the Siemens Design Language token library and then **migrate colors, text and shadows** using the provided prompt or mapping tables on [colors](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9141),[font styles](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9313) and [effects](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=166008-10490).

:::

### Status variants

V6 renames status variants, adds missing variants and aligns their colors and icons with Siemens Design Language for consistent meaning across components. Do not migrate status variants by name alone: some existing names, such as `warning` and `critical`, have changed meaning in V6. Migrate by semantic intent using the mapping below.

<div class="table-full-width">


| Before       | After         | Example of new status variants         |
| :----------- | :------------ | :---------------------------------- |
| Primary      | Accent        | <IxBadge type="label" label="Accent" variant="accent" />             |
| Neutral      | Neutral       | <IxBadge type="label" label="Neutral" variant="neutral"  />           |
| Info         | Information   | <IxBadge type="label" label="Information" variant="information" icon={iconInfo} />     |
| Success      | Success       | <IxBadge type="label" label="Success" variant="success" icon={iconSuccess} />          |
| Warning      | Caution       | <IxBadge type="label" label="Caution" variant="caution" icon={iconWarningRhomb} />     |
| Critical     | Warning       | <IxBadge type="label" label="Warning" variant="warning" icon={iconWarning} />     |
| Alarm        | Danger        | <IxBadge type="label" label="Danger" variant="danger" icon={iconAlarm} />     |
| N/A          | Critical      | <IxBadge type="label" label="Critical" variant="critical" icon={iconWarningOctagon} />     |

</div>

- [Changed card-family status variants, `outline`, and `clickable`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable)
- [Changed `ix-blind` status variants and `outline`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-blind-status-variants-and-outline)
- [Changed chip, pill, and badge status variants](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#chip-pill-and-badge-status-variant-rename)
- [Changed `ix-message-bar` status `type` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-message-bar-status-type-rename)
- [Changed `ix-flip-tile` status `variant` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-flip-tile-status-variant-rename)
- [Changed `ix-kpi` status `state` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-kpi-status-state-rename)
- [Changed `ix-toast` status `type` values and helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-toast-status-type-rename)
- [Changed `ix-progress-indicator` status values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-status-rename)
- [Changed `showMessage` status helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#showmessage-status-helper-rename)

### Icon size

For affected components, the default icon size changed from 24px to 20px. Other components and contexts can retain different icon sizes.

Affected components are: `ix-blind`, `ix-breadcrumb`, `ix-button`, `ix-card-list`, `ix-chip`, `ix-date-dropdown`, `ix-dropdown`, `ix-event-list`, `ix-group`, `ix-icon-button`, `ix-input` (date time), `ix-date-time-picker`, `ix-key-value`, `ix-message-bar`, `ix-popover`, `ix-split-button`, `ix-tree`, `ix-upload`, `ix-workflow`

### Stylesheets and Sass

V6 separates component foundation styles from optional global and legacy styles, giving applications more control over document-wide styling. Update CSS and Sass imports to the supported public entry points, explicitly include any global styles you still need, and replace removed Sass modules, mixins, and shadow aliases.

- [Changed global CSS and Sass entry points](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#global-css-and-sass-entry-points)
- [Removed legacy Sass modules](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules)
- [Removed Sass mixins](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-sass-mixins)
- [Removed shadow utility aliases](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases)

### Architectural changes

V6 updates framework and dependency requirements, strengthens wrapper types, and replaces the hydration class with an attribute to support current tooling, improve type safety, and avoid conflicts with framework-managed classes. Update dependencies, narrow untyped callback values, and review dependency installation and hydration checks for your integration.

#### Optional peer dependencies

In `@siemens/ix` V6, the following packages are declared as optional `peerDependencies`. This is an intentional breaking contract change in V6.

<div class="table-full-width">

| Package | Supported version |
| :--- | :--- |
| `@floating-ui/dom` | `^1.6.13` |
| `luxon` | `^3.4.4` |
| `@stencil/core` | `^4.43.5` |

</div>

##### Normal consumers

Standard/root distribution, the custom-elements entry point `@siemens/ix/components`, loader, hydrate, and Angular/React/Vue wrappers remain self-contained because these runtime libraries are bundled. Users of these normal entry points do not need to install these three optional peers solely for Siemens Industrial Experience. 

:::warning

`@siemens/ix-icons` remains a required peer for all consumers. For the V6 release, use the stable `@siemens/ix-icons@4.0.0`; version 3.x still uses the legacy color-token lookup and is not compatible with the new system-token names.

:::

##### Stencil collection consumers

The published Stencil collection output, using the `collection` / `collection:main` package entries and `dist/collection`, retains bare imports for these runtime libraries. Consumers relying on this Stencil collection must explicitly install **all three packages** listed above, plus the required `@siemens/ix-icons` peer. These four packages are not optional for collection users.

[Declared Stencil collection runtime dependencies as optional peers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#stencil-collection-optional-peers)

#### Installation

If you rely on the Stencil collection, install all four packages with your preferred package manager:

```bash
pnpm add @floating-ui/dom @siemens/ix-icons@4.0.0 @stencil/core luxon
```

```bash
npm install @floating-ui/dom @siemens/ix-icons@4.0.0 @stencil/core luxon
```

```bash
yarn add @floating-ui/dom @siemens/ix-icons@4.0.0 @stencil/core luxon
```

#### Framework and tooling requirements

<div class="table-full-width">

| Package | Supported version | Migration details |
| :--- | :--- | :--- |
| `vue` | `^3.5.0` | [Vue requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-35-requirement) |
| `@angular/core`, `@angular/forms` | `>=21.2.25` | [Angular requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#angular-21-requirement) |
| `echarts` | `^6.1.0` | [ECharts requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-6-requirement) |

</div>

#### Wrapper types and hydration

- [Changed untyped React callback values to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types)
- [Changed untyped Vue modal close reasons to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-modal-types)
- [Replaced the hydration class with an attribute](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#hydration-class-changed-to-attribute)

## Migration by component

The following tables combine component-specific code and Figma changes, with components grouped into categories. Badges in the **Type** column identify the type of change, outlined badges indicate Figma-only changes. Changes shared by code and Figma are listed once. Shared theme, token, stylesheet, framework, dependency and hydration changes are covered above and also apply where relevant.


:::tip

**Identify deprecated components:** In [Figma](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=154808-15460) all deprecated components are collected in a separate page, together with a dedicated migration guide for designers.

:::

### Application frame

#### App menu

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=144092-46630" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Replaced notifications with badges. The show/hide boolean still works, but values are reset and need to be manually adapted. |

</div>

#### Application content

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=20547-253351&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application content component. Follow the migration prompt in Figma to migrate to the new application content component with updated slot properties. |

</div>

#### Application

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=21057-78216&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application frame component's Simple variant. Follow the migration prompt in Figma to migrate to the new application frame component with updated slot properties. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=21051-454994&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application frame component's Full variant. Follow the migration prompt in Figma to migrate to the new application frame component with updated slot properties. |

</div>

#### Application header

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=20920-77660&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application header component and its `_Overflow menu`, `Dropdown for App Header Avatar`, and `_Avatar Header Button` subcomponents. Follow the migration prompt in Figma to migrate to the new application header component with updated slot properties. |

</div>

#### Application switcher

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#application-switch-target-behavior" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed target behavior to use `noopener,noreferrer` for `_blank` and named targets; named targets no longer guarantee tab reuse |

</div>

#### Content header

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#content-header-text-wraps-by-default" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Enabled text wrapping by default; set `text-overflow="ellipsis"` to retain single-line truncation |

</div>

### Navigation and hierarchy

#### Breadcrumb

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=358-2971" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Group

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1036-22112" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1274-38298&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous group component. Follow the migration prompt in Figma to migrate to the new group component with updated slots. |


</div>


#### Tree

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=721-9472" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed React `renderItem` values to `unknown` and `onNodeRemoved` payloads to `CustomEvent<unknown[]>` |

</div>

#### Workflow

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1036-22111" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

### Containers and layouts

#### Action card

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and TypeScript types; replaced `passive` with `clickable`, which remains enabled by default |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous action card component. Follow the migration prompt in Figma to migrate to the new action card component with updated slot properties. |

</div>

#### Blind

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-blind-status-variants-and-outline" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, and host classes; replaced `BlindVariant` with `StatusVariant`. A bare blind now uses outline chrome, and status no longer fills the header |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Reset header icon buttons so they receive updates. |
| <IxBadge type="label" label="Removed" variant="warning" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Removed the old slot. Code slots are unchanged. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3986" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous blind component. Follow the migration prompt in Figma to migrate to the new blind component. |

</div>

#### Card

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and TypeScript types; replaced `passive` with `clickable`, which defaults to `false` |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous card component. Follow the migration prompt in Figma to migrate to the new card component with updated slot properties. |

</div>

#### Card accordion

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed card-family types and outline styling; omit the visually ineffective accordion `variant` and pass through the parent's `outline` value |

</div>

#### Card list

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=29225-90536" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Event list

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=613-8995" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=613-8995" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Renamed status variants and added missing variants using the status mapping above. |

</div>

#### Event list item

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `itemColor` to require the complete CSS custom-property name, including `--` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy empty-indicator border shorthands with system tokens; scoped overrides still accept complete borders |

</div>

#### Flip tile

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-flip-tile-status-variant-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=406-3368" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed and expanded status variants, host classes, and theming properties; retained the `outline` and `filled` variants and the `filled` default |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=407-3446&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous flip tile component. Follow the migration prompt in Figma to migrate to the new flip tile component with updated slots. |

</div>

#### Modal

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed untyped React `closeModal`, `ModalRef.close`, and `ModalRef.dismiss` results to `unknown` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-modal-types" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed untyped Vue `closeModal` reasons to `unknown` |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy modal Sass module |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=445-4906" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed modal slots. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=445-4906" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous modal component. Follow the migration prompt in Figma to migrate to the new modal component. |

</div>

#### Pane

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=19924-12291&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous pane component. Follow the migration prompt in Figma to migrate to the new pane component with updated slot properties. |

</div>

#### Push card

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and types; replaced `passive` with `clickable`, defaulting to `false` for the upper region while the accordion stays interactive |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous push card component. Follow the migration prompt in Figma to migrate to the new push card component with updated slot properties. |

</div>

#### Tile

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1431-43158&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous tile component. Follow the migration prompt in Figma to migrate to the new tile component with updated slots. |

</div>

### Input fields and selections

#### Checkbox

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed the control glyph to 20px while retaining the 24px hit area |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Applied compact density to the migrated checkbox label gap |

</div>

#### Custom field

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-52677&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous custom field component. Follow the migration prompt in Figma to migrate to the new custom field component with updated slot properties. |

</div>

#### Date dropdown

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values and added locale-independent ISO fields |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed selection and closing behavior: emit `dateRangeChange` for every pick, use `dateSelect` for applied ranges, and revert incomplete ranges on close |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added optional `requireConfirmation` with Confirm and Cancel labels |
| <IxBadge type="label" label="Deprecated" variant="critical" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#behavior-without-requireconfirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Deprecated `i18nDone`; without confirmation, complete or predefined ranges apply and close without a Done button |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=71682-192322" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy divider-border shorthands with system tokens; scoped border overrides still accept complete borders |

</div>

#### Date input

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Clarified that `locale` affects parsing and emitted `valueChange` values |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `requireConfirmation` to apply values only on Confirm and discard pending selections on cancellation |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `patternMismatch` |

</div>

#### Date picker

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values and added locale-independent ISO fields |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed change/select event handling and added optional confirmation, cancellation, and button-label properties |
| <IxBadge type="label" label="Deprecated" variant="critical" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-date-picker-daterangechange-deprecated" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Deprecated `dateRangeChange` in favor of `dateChange`; removal is planned for V7 |

</div>

#### Date time input

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed selection handling: without confirmation, apply every pick via `valueChange` and emit `ixChange` on close; changed the default `i18nDone` label to Done |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `requireConfirmation` to defer value changes until Confirm and discard pending selections on cancellation |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `typeMismatch` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Date time picker

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values, added ISO fields, and added AM/PM and time-column labels |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed change/select event handling and added optional confirmation and cancellation |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-datetime-picker-daterangechange-no-longer-bubbles" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Stopped the embedded `dateRangeChange` event from bubbling; use `dateChange` or `dateSelect` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Expanding search

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-expanding-search--box-shadow` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy active-button border shorthands with system tokens; scoped overrides still accept complete borders |

</div>

#### Input (number)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |

</div>

#### Input (text)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-input--box-shadow` |

</div>

#### Radio

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed the control glyph to 20px while retaining the 24px hit area |

</div>

#### Range field

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#behavior-without-requireconfirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed date time input `ixChange` timing so range fields move to the second input only after the first picker closes |

</div>

#### Select

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-select--box-shadow` |

</div>

#### Slider

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |

</div>

#### Textarea

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |

</div>

#### Time input

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `locale`, `i18nAm`, and `i18nPm` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Required Confirm to apply time and discarded pending selections on Cancel, Escape, or outside click; added `i18nCancel` and retained `i18nSelectTime` for the Confirm label |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#no-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `patternMismatch` |

</div>

#### Time picker

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-time-picker---locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added locale and AM/PM properties and the locale-independent `getCurrentIsoTime` method |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-i18nconfirmtime-renamed-to-i18nconfirm" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `i18nConfirmTime` to `i18nConfirm` |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-datetimepickerappearance-removed" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `dateTimePickerAppearance`; Cancel and Confirm are always shown |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed confirmation, cancellation, initial pending-time events, and getter behavior: `timeChange` reports pending values, `timeSelect` applies them, and time getters return confirmed values |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `--ix-time-picker-footer--gap`; the shared footer retains the same default gap |

</div>

#### Toggle

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |

</div>

#### Upload

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=290-1441" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

### Buttons and actions

#### Button

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=2-3" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Button group

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy button-group Sass module; use supported `.ix-button-group` styles for class-based groups |

</div>

#### Chip

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#chip-pill-and-badge-status-variant-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status variants, classes, and theming properties; changed the default variant to `accent` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed the color of the custom variant. |

</div>

#### Dropdown

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1219-25402" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy dropdown Sass module |

</div>

#### Icon button

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14086" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default glyph from 24px to 20px and added explicit size `20`; retained the 32px host for sizes `20` and `24` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `iconColor` to require complete CSS custom-property names |

</div>

#### Icon toggle button

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14087" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default glyph from 24px to 20px and added explicit size `20`; retained the 32px host for sizes `20` and `24` |

</div>

#### Link button

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1432-40622&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous link button component. Follow the migration prompt in Figma to migrate to the new link button component. |

</div>

#### Split button

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=201-3398" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

### System feedback and status

#### Badge

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#chip-pill-and-badge-status-variant-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed status variants, classes, and theming properties; changed the default to `accent` and updated status-icon mappings, including `error` |

</div>

#### Empty state

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-empty-state-subheader-renamed-to-description" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `subHeader` to `description`; removed support for `sub-header` |

</div>

#### HTML Error Page

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=27826-334&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the HTML Error Page component. Follow the migration prompt in Figma to migrate to the new info page component. |

</div>

#### Message bar

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-message-bar-status-type-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=287-421" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status `type` values, changed the default to `information`, added `error`, and updated status icons and type classes; status icons are now hidden from assistive technology |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=287-421" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Message modal

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#showmessage-status-helper-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=120048-15477" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed `showMessage` and Angular `MessageService` helpers, added status helpers, and changed the question icon color; migrate `info` to `information` and the previous warning meaning to `caution` |

</div>

#### Pill

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#chip-pill-and-badge-status-variant-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed status variants and changed the default to `accent`; use `ChipVariant` instead of deprecated `PillVariant` |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=312-1219&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the pill component. Follow the migration prompt in Figma to migrate to the badge component. |

</div>

#### Popover

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=113253-20078" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Progress indicator

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-status-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `default` to `base` and `info` to `information`, updated classes and theming properties, changed the meaning of `warning`, and updated the success track color; helper icons are decorative |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-progress-indicator-size-scale" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=22209-18970" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed circular `sm` from 24px to 20px; other size names and dimensions remain unchanged |

</div>

#### Spinner

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-spinner-size-scale" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=486-5980" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed and remapped sizes to `xxs` (12px), `xs` (16px), `sm` (20px), `md` (32px default), and `xxl` (96px) |

</div>

#### System banner

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=150034-89244" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Renamed status variants and added missing variants using the status mapping above. |

</div>

#### Toast

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-toast-status-type-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=443-6501" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status types and helpers, changed the default to `information`, and updated colors and icons; use `caution` for the previous yellow warning meaning |

</div>

#### Tooltip

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=64253-3695&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous tooltip component. Follow the migration prompt in Figma to migrate to the new tooltip component with updated slot properties. |

</div>

### Data display

#### Key value

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-key-value-divider-for-every-label-position" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Enabled dividers for all label positions; use the new `hide-divider` property to retain a divider-free item |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#default-icon-size-is-20" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=4791-124358" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Key value list

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-key-value-divider-for-every-label-position" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `hide-dividers` to hide item dividers without style overrides |

</div>

#### KPI

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-kpi-status-state-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed and expanded `state` values, updated status icons and border properties, and changed the neutral indicator line to a system token |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#accessibility" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `ariaLabelAlarmIcon` and `ariaLabelWarningIcon`; convey meaningful status in visible text or the host accessible name |

</div>

### Chat

#### Chat

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Migrated chat spacing and typography tokens; preserved default values and applied compact density to the migrated values |

</div>

#### Chat input

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#boolean-attributes-on-form-components" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-chat-input--box-shadow` |

</div>

### Charts

#### Charts

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-6-requirement" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Raised the minimum ECharts version to 6.1.0 |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-computed-css-properties" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed automatic token prefixing from `getComputedCSSProperty`; pass complete system-token names |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#classic-theme-renamed-to-community" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed Classic ECharts exports and registered theme names to Community |

</div>

### Utilities


#### Icon

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#icon-and-component-color-properties" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `color` to require the complete CSS custom-property name; updated `NotificationColor` literals to include leading `--` |

</div>

#### Scrollbar

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#global-css-and-sass-entry-points" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed scrollbar loading: foundation enables global scrollbars; use `disable-scrollbar` and the scoped scrollbar stylesheet for selected subtrees |

</div>

#### Typography

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-typography-textcolor-rename" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `textColor` values and added semantic status colors; replaced inverse and contrast names without compatibility aliases |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#token-value-shapes" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `label`, `label-xs`, `label-sm`, `label-lg`, `body-xs`, `display-xs`, and `display-sm` formats; select supported body, heading, or display roles |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#typography-utility-classes" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed matching unsupported utility classes and added paragraph typography roles |

</div>
