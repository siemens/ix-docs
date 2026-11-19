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

1. **Check requirements:** review the [package requirements](#package-requirements) for your application.
2. **Update dependencies:** upgrade `@siemens/ix` and any framework wrappers to `6.0.0`, and use `@siemens/ix-icons@4.0.0`. If your application uses `@siemens/ix-aggrid` or `@siemens/ix-echarts`, upgrade them to `@siemens/ix-aggrid@6.0.0` and `@siemens/ix-echarts@5.0.0` in the same install command. Both integration versions require `@siemens/ix@^6.0.0`; update these packages together to avoid npm peer-dependency conflicts. Only Stencil collection consumers need to install the [optional runtime peers](#optional-peer-dependencies) explicitly.
3. **Replace legacy design tokens:** search all source files, including JavaScript and TypeScript as well as CSS and Sass, and migrate removed tokens to [Siemens Design Language tokens](#foundations), accounting for changed values and formats as well as names.
4. **Preserve status meaning:** migrate [status variants](#status-variants) by semantic intent, not name alone. Existing names such as `warning` and `critical` now mean something different.
5. **Update stylesheet imports:** use the supported [CSS and Sass entry points](#stylesheets-and-sass) and explicitly include any global styles you still need.
6. **Review affected components:** apply the relevant [component migrations](#migration-by-component), check the [24px-to-20px icon change](#icon-size), and address any [wrapper-type and hydration changes](#wrapper-types-and-hydration) that affect your integration.
7. **Search, build, run and test your application:** [search for removed or renamed string values](#validate-string-values) before relying on a successful build, then check affected workflows and visually review token values, status colors, typography and icon sizing. Complete the [V6 migration validation checklist](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#v6-migration-validation-checklist).
8. **Migrate Figma files:** enable the Siemens Design Language token library, migrate colors, text and shadows using the [Foundations guidance](#foundations), and follow the component-specific migration guides for deprecated components.

### Package requirements

Update the packages your application uses together. Do not apply a blanket `@siemens/ix*` version: the ECharts integration has a different major version.

<div class="table-full-width">

| Package | Required version | Migration details |
| :--- | :--- | :--- |
| `@siemens/ix` | `6.0.0` | Upgrade core and framework wrappers together. |
| `@siemens/ix-angular`, `@siemens/ix-react`, `@siemens/ix-vue` | `6.0.0` | Install the wrapper for your framework. |
| `@siemens/ix-aggrid` | `6.0.0` | Requires iX `^6.0.0` and the AG Grid range below. |
| `@siemens/ix-echarts` | `5.0.0` | Requires iX `^6.0.0` and ECharts `^6.1.0`. |
| `@siemens/ix-icons` | `4.0.0` | Planned stable release for V6; required by core and framework wrappers. |
| `echarts` | `^6.1.0` | [ECharts requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-requirement); [ECharts 6 upgrade guide](https://echarts.apache.org/handbook/en/basics/release-note/v6-upgrade-guide/). |
| `ag-grid-community` | `^33`, `^34`, `^35`, or `^36` | Use a supported major with `@siemens/ix-aggrid`. |
| `@angular/core`, `@angular/forms` | `>=21.2.25`; TypeScript `>=5.9 <6.1` for Angular 21 | [Angular requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#angular-requirement). |
| `vue` | `^3.5.0` | [Vue requirement](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-requirement). |

</div>

:::warning[Use compatible icons]

`@siemens/ix-icons@3.x` still uses the legacy color-token lookup and can render incorrect icon colors without a build error. This guide targets the planned stable `@siemens/ix-icons@4.0.0` release.

:::

Check third-party ECharts wrappers and extensions as well as `echarts` itself. For example, `echarts-for-react@3.0.6` and `echarts-gl@2.1.0` declare ECharts 6 peer support; use these or newer compatible versions and verify their peer dependencies before upgrading.

### Validate string values

:::warning[Successful builds can miss removed values]

Angular templates can still compile removed or renamed string attribute values with `ng build`, even with `strictTemplates`. Vue templates can also pass `vue-tsc` with these values. For example, `format="label-lg"` can pass both checks even though V6 removes that typography format. React/TSX type checking rejects this value, but it does not detect changed meanings of still-valid values.

Search your source for **each old value** listed in the breaking changes, including template attributes, property bindings, and values supplied through application code. Do not treat a successful build or type check as confirmation that these values have been migrated.

:::

Run these example searches from your application root (replace `src` with your source directories):

```bash
# Removed typography formats
rg -n "['\"](label(-xs|-sm|-lg)?|body-xs|display-(xs|sm))['\"]" src

# Renamed or removed typography textColor values
rg -n "['\"](alarm(-contrast)?|info-contrast|success-contrast|neutral-contrast|primary-contrast|warning-contrast|critical-contrast|std|contrast|soft|weak|inv-(contrast|soft|std|weak))['\"]" src

# Status values to review against each component's mapping
rg -n "['\"](primary|info|alarm|default|warning|critical)['\"]" src
```

These are starting points, not an exhaustive migration check. They match quoted literals, including unrelated uses; also inspect computed values and search for the old values in every applicable component migration. Review each match in context rather than replacing globally. In particular, `warning` and `critical` remain valid but change meaning; follow the [status mapping](#status-variants) to preserve intent.

## Migration by topic

### Foundations

V6 replaces legacy design tokens with **Siemens Design Language** system tokens. Updating token names alone may not preserve the previous appearance: token values and formats have changed, some tokens and typography classes have been removed, and affected components now use 20px icons instead of 24px. Use the sections below to update custom styles and review sizing changes.

Search **all source files**, not only stylesheets, for legacy `--theme-*` tokens. Include JavaScript/TypeScript strings used in chart configurations, inline styles, and calls such as `getComputedStyle().getPropertyValue()` and `style.setProperty()`. For example, run the following from your application root, replacing `src` with all of your source directories:

```bash
rg -n -- '--theme-' src
```

Review each match against the token mappings rather than replacing the prefix globally; the five timing compatibility variables remain supported. Also inspect code that constructs token names dynamically, which this literal search may not find.

Use the [V6 component-token migration table](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6_components_tokens.md) to replace removed component tokens, and review entries without a direct replacement.

[Replaced legacy tokens with Siemens Design Language tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#replaced-legacy-tokens-with-siemens-design-language-tokens)

![Token changes](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8733-37&t=MXfjpPOICnCLiEZ3-4)

#### Color tokens

- [Changed shadow and typography tokens to contain complete `box-shadow` and `font` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-shadow-and-typography-tokens-to-contain-complete-box-shadow-and-font-values)
- [Changed icon and component color properties to use complete token names](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-icon-and-component-color-properties-to-use-complete-token-names)
- [Removed legacy theme exports](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-theme-exports)
- [Removed deprecated component tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-deprecated-component-tokens)
- [Removed automatic token prefixing from ECharts computed CSS properties](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-automatic-token-prefixing-from-echarts-computed-css-properties)

#### Typography

Typography has been aligned with the Siemens Design Language, adding Siemens Font V7 and updated typography tokens and styles. The new font can introduce a 1px difference in text height, so review affected layouts and vertical alignment when migrating.

- [Changed the default monospace font family](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-monospace-font-family)
- [Renamed `ix-typography` `textColor` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-ix-typography-textcolor-values)
- [Removed unsupported typography utility classes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-unsupported-typography-utility-classes)

#### Icon size

- [Changed the default icon size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px)
- Affected components are: application header (overflow button), blind, breadcrumb, button, card list, checkbox, chip, content header (back button), date dropdown, dropdown, dropdown button, event list, group, icon button, icon toggle button, date time input, date time picker, key value, menu, menu item and menu category, message bar, popover, radio, range field (arrow between fields), split button, toast (type and custom icons), tree, upload, workflow. Other components and contexts can retain different icon sizes.

#### Sizing tokens

- [Changed the `ix-progress-indicator` circular `sm` size to 20px](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-ix-progress-indicator-circular-sm-size-to-20px)
- [Renamed and remapped `ix-spinner` sizes](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-and-remapped-ix-spinner-sizes)
- [Replaced common border, radius, and focus tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#replaced-common-border-radius-and-focus-tokens)
- [Removed common dimension and typography tokens](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens)

#### Community theme

- [Renamed the Classic theme to Community](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-the-classic-theme-to-community)

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

- [Changed card-family status variants, `outline`, and `clickable`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-card-family-status-variants-outline-and-clickable)
- [Changed `ix-blind` status variants and `outline`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-blind-status-variants-and-outline)
- [Changed chip, pill, and badge status variants](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-chip-pill-and-badge-status-variants)
- [Changed `ix-message-bar` status `type` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-message-bar-status-type-values)
- [Changed `ix-flip-tile` status `variant` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-flip-tile-status-variant-values)
- [Changed `ix-kpi` status `state` values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-kpi-status-state-values)
- [Changed `ix-toast` status `type` values and helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-toast-status-type-values-and-helpers)
- [Changed `ix-progress-indicator` status values](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-progress-indicator-status-values)
- [Changed `showMessage` status helpers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-showmessage-status-helpers)


### Appearance and interaction changes

The following is a selection of the most important appearance and interaction changes in V6, not a complete list. Review affected layouts and workflows, and check visual regression tests before accepting new baselines. Further changes are covered under [Foundations](#foundations), [Status variants](#status-variants) and [Migration by component](#migration-by-component).

![Appearance changes](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8733-123&t=MXfjpPOICnCLiEZ3-4)

#### Status color indicators

Affected card components and blinds now indicate status with a colored stripe instead of a full status-color fill. Check that status remains clear in your application, especially where custom styles rely on the previous background fill.

#### Icon sizing

The default icon size changes from 24px to 20px in affected components. Review alignment and spacing, especially in layouts with custom sizing. This does not necessarily reduce the size of the interactive area. See [Icon size](#icon-size) for the affected components.

#### Link button icons

Link button icons are now opt-in: `icon` defaults to `none`, so existing link buttons no longer show a chevron. Set `icon="internal"` to retain the previous leading chevron. The new `iconPosition` property defaults to `start`; use `end` to place the icon after the label. See [Link button](#link-button) for the component migration.

#### Information icon

The information status icon now has a square shape to help distinguish it from the alarm icon. Review any custom status icons for consistency.

#### Focus outline

The focus outline now uses a 2px width and a 1px offset. Check that it remains visible and is not clipped by custom containers, and that custom focus styles provide sufficient contrast against adjacent colors.

#### Input shadows

Decorative input shadows have been removed from text inputs, selects, expanding search and chat inputs. Review custom styling that relied on these shadows to distinguish controls from their surroundings.

#### Confirmation buttons in date and time components

Date and time components now show Confirm and Cancel buttons when confirmation is required. Confirmation is optional for date and date-time components and always required for time-only pickers and inputs. Confirm applies pending selections; cancellation discards them. Review event handlers to account for the updated selection workflow.


### Stylesheets and Sass

V6 separates component foundation styles from optional global and legacy styles, giving applications more control over document-wide styling. The default bundle (`@siemens/ix/css/default.css`, also available at `@siemens/ix/dist/siemens-ix/siemens-ix.css`) still includes the Community theme, foundation, typography utilities and native heading/link styling, table utilities, and button groups. **Native link styles and supported typography utilities have not been dropped from the default bundle.**

#### V5 stylesheet import replacements

V6 removes `siemens-ix-core.css` and `siemens-ix-standalone.css` without compatibility aliases. Search stylesheet imports and build configuration (such as Angular's `styles` array) for these paths:

| V5 import | V6 import(s), in order |
| :--- | :--- |
| `@siemens/ix/dist/siemens-ix/siemens-ix.css` | `@siemens/ix/css/default.css` + `@siemens/ix/css/legacy.css` to retain legacy/global styles |
| `@siemens/ix/dist/siemens-ix/siemens-ix-core.css` | `@siemens/ix/css/default.css` + `@siemens/ix/css/legacy.css` for the bundled Community theme; see the theme-free alternative below |
| `@siemens/ix/dist/siemens-ix/siemens-ix-standalone.css` | `@siemens/ix/css/foundation.css` + `@siemens/ix/css/base.css`; retain a separately selected theme |
| `@siemens/ix/dist/siemens-ix/theme/classic-dark.css` | `@siemens/ix/css/theme/community-dark.css` |
| `@siemens/ix/dist/siemens-ix/theme/classic-light.css` | `@siemens/ix/css/theme/community-light.css` |

V5 core and standalone did not bundle a theme. If you select a theme separately, replace the core bundle with `foundation.css`, your selected theme, then `legacy.css` instead of adding the combined Community theme through `default.css`. For standalone, import foundation before your selected theme; `base.css` restores the previous body margin reset and theme text color. See the [Classic-to-Community migration](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-the-classic-theme-to-community) for theme-switcher and Sass changes.

The original `siemens-ix.css` distribution path remains available, but its contents have changed. Add `legacy.css` only if you need the omitted styles; the supported default utilities do not require it.

#### Restore omitted global styles

The following styles are no longer included by default. Import the corresponding stylesheet after `default.css` if your application relies on them:

| Styles omitted from the default bundle | Import to restore them |
| :--- | :--- |
| Native HTML normalization and universal `box-sizing: border-box` | `@siemens/ix/css/reset.css` |
| Body margin reset and additional `[data-ix-theme]` text color | `@siemens/ix/css/base.css` |
| Legacy native form-control styles | `@siemens/ix/css/legacy.css` (also includes reset, base, and utilities) |
| Input-group helpers such as `.input-group-label` | `@siemens/ix/css/utilities.css` |

To include the legacy styles together while migrating:

```css
@import '@siemens/ix/css/default.css';
@import '@siemens/ix/css/legacy.css';
```

If you retain the existing distribution import, add the same legacy bundle:

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
@import '@siemens/ix/css/legacy.css';
```

For applications using only `foundation.css` and a separately selected theme, import `@siemens/ix/css/utilities.css` to add native link styling and the supported utilities. No import restores removed typography selectors or shadow aliases; migrate those usages to their documented replacements.

See [Global CSS and Sass entry points](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-global-css-and-sass-entry-points) for the complete bundle contents and composition examples. Update CSS and Sass imports to the supported public entry points and replace removed Sass modules, mixins, and shadow aliases.

- [Changed global CSS and Sass entry points](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-global-css-and-sass-entry-points)
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

`@siemens/ix-icons` remains a required peer for all consumers. For V6, use the planned stable `@siemens/ix-icons@4.0.0`, as listed in [Package requirements](#package-requirements); version 3.x still uses the legacy color-token lookup and is not compatible with the new system-token names.

:::

##### Stencil collection consumers

The published Stencil collection output, using the `collection` / `collection:main` package entries and `dist/collection`, retains bare imports for these runtime libraries. Consumers relying on this Stencil collection must explicitly install **all three packages** listed above, plus the required `@siemens/ix-icons` peer. These four packages are not optional for collection users.

[Declared Stencil collection runtime dependencies as optional peers](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#declared-stencil-collection-runtime-dependencies-as-optional-peers)

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

See [Package requirements](#package-requirements) for framework versions, chart and grid dependencies, and third-party ECharts compatibility checks.

#### Wrapper types and hydration

- [Changed untyped React callback values to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-untyped-react-callback-values-to-unknown)
- [Changed untyped Vue modal close reasons to `unknown`](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-untyped-vue-modal-close-reasons-to-unknown)
- [Replaced the hydration class with an attribute](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#replaced-the-hydration-class-with-an-attribute)

### Slots in Figma

V6 continues the transition from custom content-replacement slots to **native Figma slots**, first introduced in the iX Figma library in V5. Native slots let you add content directly to component instances without detaching them or creating custom content components.

For most affected components, the previous Figma component has been deprecated and replaced with a new version that uses native slots. Follow the component's migration prompt in Figma to update existing instances, then review the slot content and layout.

## Migration by component

The following tables combine component-specific code and Figma changes, with components grouped into categories. Badges in the **Type** column identify the type of change, outlined badges indicate Figma-only changes. Changes shared by code and Figma are listed once. Shared theme, token, stylesheet, framework, dependency and hydration changes are covered above and also apply where relevant.


:::tip

**Identify deprecated components:** In [Figma](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=154808-15460) all deprecated components are collected in a separate page, together with a dedicated migration guide for designers.

:::

### Application frame

#### App menu

![App menu](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8745-957&t=hNTaZnRWqmj2iF50-4)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=144092-46630" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed the collapsed and expanded menu widths. Review surrounding layouts after updating. |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=144092-46630" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Replaced notifications with badges. The show/hide boolean still works, but values are reset and need to be manually adapted. |

</div>

#### Application content

![Application content](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8745-1897)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=20547-253351&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application content component. Follow the migration prompt in Figma to migrate to the new application content component with updated slot properties. |

</div>

#### Application

![Application](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8746-2442)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=21057-78216&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application frame component's Simple variant. Follow the migration prompt in Figma to migrate to the new application frame component with updated slot properties. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=21051-454994&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application frame component's Full variant. Follow the migration prompt in Figma to migrate to the new application frame component with updated slot properties. |

</div>

#### Application header

![Application header](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8748-897)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=20920-77660&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous application header component and its `_Overflow menu`, `Dropdown for App Header Avatar`, and `_Avatar Header Button` subcomponents. Follow the migration prompt in Figma to migrate to the new application header component with updated slot properties. |

</div>

#### Application switcher

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-target-behavior-to-use-noopenernoreferrer-for-_blank-and-named-targets" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed target behavior to use `noopener,noreferrer` for `_blank` and named targets; named targets no longer guarantee tab reuse |

</div>

#### Content header

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#enabled-text-wrapping-by-default" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Enabled text wrapping by default; set `text-overflow="ellipsis"` to retain single-line truncation |

</div>

### Navigation and hierarchy

#### Breadcrumb

![Breadcrumb](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8749-6381)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=358-2971" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Group

![Group](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8749-7076)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1036-22112" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1274-38298&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous group component. Follow the migration prompt in Figma to migrate to the new group component with updated slots. |


</div>


#### Tree

![Tree](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8772-14177)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=721-9472" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-untyped-react-callback-values-to-unknown" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed React `renderItem` values to `unknown` and `onNodeRemoved` payloads to `CustomEvent<unknown[]>` |

</div>

#### Workflow

![Workflow](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8780-29527)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1036-22111" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Tabs

![Tabs](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8805-37439)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Changed icons to 20px. Review icon alignment and spacing. |

</div>

### Containers and layouts

#### Action card

![Action card](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8805-40241)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and TypeScript types; replaced `passive` with `clickable`, which remains enabled by default |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous action card component. Follow the migration prompt in Figma to migrate to the new action card component. |

</div>

#### Blind

![Blind](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8805-41337)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-blind-status-variants-and-outline" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, and host classes; replaced `BlindVariant` with `StatusVariant`. A bare blind now uses outline chrome, and status no longer fills the header |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Reset header icon buttons so they receive updates. |
| <IxBadge type="label" label="Removed" variant="warning" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3951" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Removed the old slot. Code slots are unchanged. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=388-3986" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous blind component. Follow the migration prompt in Figma to migrate to the new blind component. |

</div>

#### Card

![Card](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8805-43085)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and TypeScript types; replaced `passive` with `clickable`, which defaults to `false` |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous card component. Follow the migration prompt in Figma to migrate to the new card component with updated slot properties. |

</div>

#### Card accordion

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed card-family types and outline styling; omit the visually ineffective accordion `variant` and pass through the parent's `outline` value |

</div>

#### Card list

![Card list](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8805-43600)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=29225-90536" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Event list

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=613-8995" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=613-8995" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Renamed status variants and added missing variants using the status mapping above. |

</div>

#### Event list item

![Event list item](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8807-43948)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-icon-and-component-color-properties-to-use-complete-token-names" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `itemColor` to require the complete CSS custom-property name, including `--` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy empty-indicator border shorthands with system tokens; scoped overrides still accept complete borders |

</div>

#### Flip tile

![Flip tile](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-45881)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-flip-tile-status-variant-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=406-3368" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed and expanded status variants, host classes, and theming properties; retained the `outline` and `filled` variants and the `filled` default |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=407-3446&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous flip tile component. Follow the migration prompt in Figma to migrate to the new flip tile component with updated slots. |

</div>

#### Modal

![Modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-46348)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=445-4906" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Added fixed-width modal variants. Review the selected width when migrating instances. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-untyped-react-callback-values-to-unknown" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed untyped React `closeModal`, `ModalRef.close`, and `ModalRef.dismiss` results to `unknown` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-untyped-vue-modal-close-reasons-to-unknown" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed untyped Vue `closeModal` reasons to `unknown` |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy modal Sass module |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=445-4906" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed modal slots. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=445-4906" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous modal component. Follow the migration prompt in Figma to migrate to the new modal component. |

</div>

#### Pane

![Pane](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-46643)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=19924-12291&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous pane component. Follow the migration prompt in Figma to migrate to the new pane component with updated slot properties. |

</div>

#### Push card

![Push card](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-48550)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-card-family-status-variants-outline-and-clickable" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=5221-130098" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed status variants, outline styling, host classes, theming overrides, and types; replaced `passive` with `clickable`, defaulting to `false` for the upper region while the accordion stays interactive |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=163078-224910&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous push card component. Follow the migration prompt in Figma to migrate to the new push card component with updated slot properties. |

</div>

#### Tile

![Tile](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-51207)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1431-43158&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous tile component. Follow the migration prompt in Figma to migrate to the new tile component with updated slots. |

</div>

### Input fields and selections

#### Checkbox

![Checkbox](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-51315)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Replaced the focus variant with a boolean property. Review the focus setting on existing instances. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Deprecated the previous checkbox component. Follow the migration prompt in Figma to migrate to the new checkbox component with native slots. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed the control glyph to 20px while retaining the 24px hit area |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-common-dimension-and-typography-tokens" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Applied compact density to the migrated checkbox label gap |

</div>

#### Custom field

![Custom field](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-51435)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-52677&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous custom field component. Follow the migration prompt in Figma to migrate to the new custom field component with updated slot properties. |

</div>

#### Date dropdown

![Date dropdown](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-51869)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values and added locale-independent ISO fields |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed selection and closing behavior: emit `dateRangeChange` for every pick, use `dateSelect` for applied ranges, and revert incomplete ranges on close |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added optional `requireConfirmation` with Confirm and Cancel labels |
| <IxBadge type="label" label="Deprecated" variant="critical" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#behavior-without-requireconfirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Deprecated `i18nDone`; without confirmation, complete or predefined ranges apply and close without a Done button |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=71682-192322" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy divider-border shorthands with system tokens; scoped border overrides still accept complete borders |

</div>

#### Date input

![Date input](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-54637)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Clarified that `locale` affects parsing and emitted `valueChange` values |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `requireConfirmation` to apply values only on Confirm and discard pending selections on cancellation |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `patternMismatch` |

</div>

#### Date picker

![Date picker](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-61745)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values and added locale-independent ISO fields |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed change/select event handling and added optional confirmation, cancellation, and button-label properties |
| <IxBadge type="label" label="Deprecated" variant="critical" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-date-picker-daterangechange-deprecated" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Deprecated `dateRangeChange` in favor of `dateChange`; removal is planned for V7 |

</div>

#### Date time input

![Date time input](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-62987)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed selection handling: without confirmation, apply every pick via `valueChange` and emit `ixChange` on close; changed the default `i18nDone` label to Done |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#new-requireconfirmation-property" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `requireConfirmation` to defer value changes until Confirm and discard pending selections on cancellation |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `typeMismatch` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Date time picker

![Date time picker](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8819-70898)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Localized event values, added ISO fields, and added AM/PM and time-column labels |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#date-and-time-pickers-confirmation-and-selection" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed change/select event handling and added optional confirmation and cancellation |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-datetime-picker-daterangechange-no-longer-bubbles" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Stopped the embedded `dateRangeChange` event from bubbling; use `dateChange` or `dateSelect` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Expanding search

![Expanding search](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-5756)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-expanding-search--box-shadow` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#borders-and-effects" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Replaced legacy active-button border shorthands with system tokens; scoped overrides still accept complete borders |

</div>

#### Input (number)

![Input (number)](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-9397)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Changed start and end slot buttons to 20px. Review custom slot content and alignment. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |

</div>

#### Input (text)

![Input (text)](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-16095)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Changed start and end slot buttons to 20px. Review custom slot content and alignment. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-input--box-shadow` |

</div>

#### Radio

![Radio](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-16249)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Replaced the focus variant with a boolean property and aligned validation-state names with code. Review focus and validation settings on existing instances. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed the control glyph to 20px while retaining the 24px hit area |

</div>

#### Range field

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#behavior-without-requireconfirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed date time input `ixChange` timing so range fields move to the second input only after the first picker closes |

</div>

#### Select

![Select](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-19049)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-select--box-shadow` |

</div>

#### Slider

![Slider](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-25154)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |

</div>

#### Textarea

![Textarea](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-33194)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms |

</div>

#### Time input

![Time input](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-34907)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Replaced the 12-hour variant with a boolean property and removed the internal AM/PM button. Review the time-format setting and any overrides after updating. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `locale`, `i18nAm`, and `i18nPm` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Required Confirm to apply time and discarded pending selections on Cancel, Escape, or outside click; added `i18nCancel` and retained `i18nSelectTime` for the Confirm label |
| <IxBadge type="label" label="Fixed" variant="information" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-built-in-validation-feedback-in-novalidate-forms" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed built-in validation feedback in `novalidate` forms; unparseable input reports `patternMismatch` |

</div>

#### Time picker

![Time picker](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-42444)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-date-and-time-picker-locale-support" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added locale and AM/PM properties and the locale-independent `getCurrentIsoTime` method |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-i18nconfirmtime-to-i18nconfirm" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `i18nConfirmTime` to `i18nConfirm` |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-datetimepickerappearance" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `dateTimePickerAppearance`; Cancel and Confirm are always shown |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed confirmation, cancellation, initial pending-time events, and getter behavior: `timeChange` reports pending values, `timeSelect` applies them, and time getters return confirmed values |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#ix-time-picker-and-ix-time-input-always-require-confirmation" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `--ix-time-picker-footer--gap`; the shared footer retains the same default gap |

</div>

#### Toggle

![Toggle](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-42803)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Replaced the focus variant with a boolean property. Review the focus setting on existing instances. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |

</div>

#### Upload

![Upload](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-43275)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=290-1441" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated "check fast" to align with code. Review instances using this option. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=290-1441" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

### Buttons and actions

#### Button

![Button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-43794)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=2-3" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Reset nested icons so they receive updates. Check and reapply any required icon overrides. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=2-3" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Button group

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy button-group Sass module; use supported `.ix-button-group` styles for class-based groups |

</div>

#### Chip

![Chip](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-43850)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-chip-pill-and-badge-status-variants" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status variants, classes, and theming properties; changed the default variant to `accent` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=276-397" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed the color of the custom variant. |

</div>

#### Dropdown

![Dropdown](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-45405)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1219-25402" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-legacy-sass-modules" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed the legacy dropdown Sass module |

</div>

#### Dropdown button

![Dropdown button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-46086)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Added Danger variants. Use them where the action's semantic intent calls for danger styling. |

</div>

#### Icon button

![Icon button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-47841)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14086" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Reset nested icons so they receive updates. Check and reapply any required icon overrides. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14086" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default glyph from 24px to 20px and added explicit size `20`; retained the 32px host for sizes `20` and `24` |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-icon-and-component-color-properties-to-use-complete-token-names" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `iconColor` to require complete CSS custom-property names |

</div>

#### Icon toggle button

![Icon toggle button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-48037)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=107193-14087" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default glyph from 24px to 20px and added explicit size `20`; retained the 32px host for sizes `20` and `24` |

</div>

#### Link button

![Link button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-51542)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#made-ix-link-button-icons-opt-in" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Icons are now opt-in (`icon` defaults to `none`), so existing link buttons lose their chevron. Set `icon="internal"` to retain it; `iconPosition` defaults to `start`, preserving the previous placement, or use `end` to place the icon after the label. |
| <IxBadge type="label" label="Added" variant="success" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1432-40622" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Added a replacement link button component with position and icon options. Review these settings when migrating instances. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=1432-40622&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous link button component. Follow the migration prompt in Figma to migrate to the new link button component. |

</div>

#### Split button

![Split button](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-51727)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=201-3398" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Reset nested icons so they receive updates. Check and reapply any required icon overrides. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=201-3398" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

### System feedback and status

#### Badge

![Badge](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8821-52024)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-chip-pill-and-badge-status-variants" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed status variants, classes, and theming properties; changed the default to `accent` and updated status-icon mappings, including `error` |

</div>

#### Empty state

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-subheader-to-description" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `subHeader` to `description`; removed support for `sub-header` |

</div>

#### HTML Error Page

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=27826-334&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the HTML Error Page component. Follow the migration prompt in Figma to migrate to the new info page component. |

</div>

#### Message bar

![Message bar](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8826-2210)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-message-bar-status-type-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=287-421" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status `type` values, changed the default to `information`, added `error`, and updated status icons and type classes; status icons are now hidden from assistive technology |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=287-421" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Message modal

![Message modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8826-5192)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-showmessage-status-helpers" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=120048-15477" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed `showMessage` and Angular `MessageService` helpers, added status helpers, and changed the question icon color; migrate `info` to `information` and the previous warning meaning to `caution` |

</div>

#### Pill

![Pill](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8826-5548)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-chip-pill-and-badge-status-variants" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed status variants and changed the default to `accent`; use `ChipVariant` instead of deprecated `PillVariant` |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=312-1219&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the pill component. Follow the migration prompt in Figma to migrate to the badge component. |

</div>

#### Popover

![Popover](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-5904)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=113253-20078" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Progress indicator

![Progress indicator](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-9082)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-progress-indicator-status-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `default` to `base` and `info` to `information`, updated classes and theming properties, changed the meaning of `warning`, and updated the success track color; helper icons are decorative |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-ix-progress-indicator-circular-sm-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=22209-18970" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed circular `sm` from 24px to 20px; other size names and dimensions remain unchanged |

</div>

#### Spinner

![Spinner](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-10723)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-and-remapped-ix-spinner-sizes" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=486-5980" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed and remapped sizes to `xxs` (12px), `xs` (16px), `sm` (20px), `md` (32px default), and `xxl` (96px) |

</div>


#### Toast

![Toast](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-10903)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=443-6501" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Added a striped color indicator for status. Review the updated appearance in existing layouts. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-toast-status-type-values-and-helpers" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=443-6501" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Renamed status types and helpers, changed the default to `information`, and updated colors and icons; use `caution` for the previous yellow warning meaning |

</div>

#### Tooltip

![Tooltip](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-11275)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=64253-3695" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed the default icon from `info` to `about` and added native max-width. Review icon overrides and text wrapping. |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=64253-3695&t=uyzhGeD7C5A58xnU-4" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous tooltip component. Follow the migration prompt in Figma to migrate to the new tooltip component with updated slot properties. |

</div>

### Data display

#### Key value

![Key value](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-11426)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#enabled-dividers-for-every-label-position" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Enabled dividers for all label positions; use the new `hide-divider` property to retain a divider-free item |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-the-default-icon-size-to-20px" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton><br /><IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=4791-124358" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Changed the default icon size to 20px in affected slots |

</div>

#### Key value list

![Key value list](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-15483)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#enabled-dividers-for-every-label-position" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Added `hide-dividers` to hide item dividers without style overrides |

</div>

#### KPI

![KPI](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-16433)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-ix-kpi-status-state-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed and expanded `state` values, updated status icons and border properties, and changed the neutral indicator line to a system token |
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

![Chat input](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8829-17146)

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-boolean-attributes-to-follow-native-html-semantics" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed boolean attributes to follow native HTML semantics |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-shadow-utility-aliases" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed decorative input shadows and `--ix-chat-input--box-shadow` |

</div>

### Charts

#### Charts

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#echarts-requirement" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Raised the minimum ECharts version to 6.1.0 |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-automatic-token-prefixing-from-echarts-computed-css-properties" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed automatic token prefixing from `getComputedCSSProperty`; pass complete system-token names |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-the-classic-theme-to-community" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed Classic ECharts exports and registered theme names to Community |

</div>

### Utilities


#### Common foundations

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165984-752" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Migrated to Siemens Design Language system tokens v0.17 and deprecated local color tokens and styles. Overrides may reset after updating; review and reapply required overrides using the new tokens. |
| <IxBadge type="label" label="Added" variant="success" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165984-752" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Added density tokens. Review spacing and sizing in affected layouts. |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=166008-10490" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Changed the common focus outline to use a shadow and removed the old focus-offset and typography-format variants from common atoms. Review affected atom instances and focus overrides. |

</div>

#### Icon

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Added" variant="success" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Added an `xxl` icon size to common atoms. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-icon-and-component-color-properties-to-use-complete-token-names" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed `color` to require the complete CSS custom-property name; updated `NotificationColor` literals to include leading `--` |

</div>

#### Scrollbar

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Changed" variant="caution" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components" icon="external" aria-label="View Figma library" title="View Figma library">Figma</IxLinkButton> | Figma: Migrated scrollbars to Siemens Design Language tokens and increased contrast for WCAG accessibility. Review scrollbar visibility against surrounding surfaces. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-global-css-and-sass-entry-points" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Changed scrollbar loading: foundation enables global scrollbars; use `disable-scrollbar` and the scoped scrollbar stylesheet for selected subtrees |

</div>

#### Typography

<div class="table-full-width table-migration-changelog">

| Type | Details | Description |
| :--- | :--- | :--- |
| <IxBadge type="label" label="Deprecated" variant="critical" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9313" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Deprecated the previous typography styles. Migrate text layers to the Siemens Design Language styles using the provided mapping. |
| <IxBadge type="label" label="Removed" variant="warning" outline icon={iconShapes} /> | <IxLinkButton url="https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=165976-9313" icon="external" aria-label="View design change" title="View design change">Figma</IxLinkButton> | Figma: Removed experimental typography styles and the old typography specification. Review affected text layers against the current styles. |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#renamed-ix-typography-textcolor-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Renamed `textColor` values and added semantic status colors; replaced inverse and contrast names without compatibility aliases |
| <IxBadge type="label" label="Removed" variant="warning" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#changed-shadow-and-typography-tokens-to-contain-complete-box-shadow-and-font-values" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed `label`, `label-xs`, `label-sm`, `label-lg`, `body-xs`, `display-xs`, and `display-sm` formats; select supported body, heading, or display roles |
| <IxBadge type="label" label="Changed" variant="caution" icon={iconCode} /> | <IxLinkButton url="https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#removed-unsupported-typography-utility-classes" icon="external" aria-label="View code change" title="View code change">Code</IxLinkButton> | Removed matching unsupported utility classes and added paragraph typography roles |

</div>
