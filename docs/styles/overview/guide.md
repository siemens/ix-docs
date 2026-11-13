---
doc-type: 'tab-item'
description: 'An overview of the Siemens Industrial Experience styles, design language, tokens, theming and customization guidance.'
---

# Styles - Overview

The styles chapter describes the visual foundations used by Siemens Industrial
Experience (iX). It explains how to use the available tokens and style
features in applications, and provides guidance for adapting them to your
product.

## Connection to the Siemens design language

iX is aligned with the Siemens design language (SDL). SDL is maintained in a
separate, internal repository that defines foundational topics such as colors
and their tokens centrally. This separation helps keep foundational design
decisions consistent across Siemens products and design systems.

Siemens employees can find the complete SDL token definitions on the
[SDL token page](https://design-language.siemens.io/foundation/tokens/introduction/).

## Customization and component variables

Use the documented tokens and theming mechanisms when customizing an
application. Changing component variables directly is unsupported and happens
at your own risk. This applies to both the code and the documentation: a
component's internal variables and their documented behavior can change
without notice, and overrides may break after an update.

## Theming

Themes define the visual values used by components and applications. iX
includes the Classic light and dark themes, and supports custom themes for
product-specific requirements. Select a theme with `data-ix-theme` and a
color scheme with `data-ix-color-schema`.

For implementation details, see [Developing with themes](../theming/usage-developers.md).
For Figma guidance, see [Designing with themes](../theming/usage-designers.md).

## Styles chapters

Use the following deep dives for details on each style foundation:

- [Colors](../colors.md)
- [Typography](../typography/index.mdx)
- [Sizing](../sizing.md)
- [Elevation](../elevation.md)
- [Borders](../borders.md)
- [Shadows](../shadows.md)
- [Animations](../animation.md)
- [Global styles](../global-styles.md)
- [Developing with themes](../theming/usage-developers.md)
- [Designing with themes](../theming/usage-designers.md)
