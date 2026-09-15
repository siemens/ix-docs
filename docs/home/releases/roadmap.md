---
sidebar_position: 1
sidebar_label: Roadmap
title: Roadmap
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'We’re constantly improving our design system for you by extending the component library, developing our user guidance and ensuring the system is reliable and easy to use. This is what’s happening next so you know what to expect from your Siemens Industrial Experience team.'
---

# Roadmap

![Roadmap](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6992-210&t=f7ioKZ1mzPPxTW76-4)

### ✅ Completed
- **🔹 Release 5.0**: Applying reference color tokens aligned with the Siemens design language, refactoring keyboard navigation in dropdowns, new [date-time input](../../components/input-date-time) & [range field](../../components/range-field) components, [tabs](../../components/tabs) with overflow menu and style adaptions. [Read more](../../../blog/2026/05/21/release-5)
- **🔹 Release 5.1**: New [popover](../../components/popover) component, overflow option for chips in the [select](../../components/select/guide.md) component and optimized [icon search](../../icons/icon-library.mdx) with tags and related icons.
- **🔹 Release 5.2**: New [badge](../../components/badge) component and [chat](../../components/chat) components.

### 🚧 Work in progress

#### Design token foundation
- **Semantic color tokens**: The semantic color token update introduces a unified token structure making themes more consistent and easier to maintain. In parallel, the status color update aligns status communication across Siemens design systems by refining severity levels and color mappings, improving clarity, consistency and accessibility.
- **Typography tokens**: Aligned typography tokens establish a flexible and scalable typography system by defining font families, sizes, weights, and line heights as reusable design tokens, while the adoption of Siemens Sans V7 ensures a consistent, modern, and brand-aligned text experience across products.
- **Size tokens**: Size tokens replace fixed spacing, sizing and dimension values with reusable design tokens, creating a more scalable foundation that enables future capabilities such as density switching.
- **Icon size**: For better visual balance we are changing all 24px icons in our components to 20px icons.

#### New components
- **Generic list**: The generic list extends our component set with a more flexible solution for lists. It comes as a customizable variant providing a slot and a pre-defined variant with a useful default of checkbox selection, icon, title and actions.
- **Inline notification**: The inline notification offers an alternative to larger message bars. Inline notifications appear within a specific section or component of a page, rather than spanning the entire width. 
- **Settings and about as modal**: The vertical navigation menu currently presents settings and about information in an overlay. To provide more flexibility, we will provide a template for settings and about information in a modal that can have a fixed width or fill the screen. We will move access to this modal from the bottom-left menu navigation to the header.  


**🔹 Major release 6.0**: Planned for Q4 2026, see info on [release strategy](release-version.md).

### 🗓️ Scheduled

- **Patterns**: We curate patterns as copy-paste code examples that show how multiple components work together in real UI scenarios. Patterns give users practical, ready-to-use starting points beyond components.  
- **Vertical navigation menu rework**: Our vertical navigation will change in alignment with other design systems at Siemens.
- **Density options**: Density tokens allow for changing sizes and spacings of elements on the screen without creating different variants of components. They use the same mechanism as switching color modes or themes. To use density modes, all relevant dimensions of a component must use density tokens, e.g. for font size and line height, widths, heights, paddings and gaps.

### ⏳ Planned

- **Box-styled tabs**: For more flexibility, we're adding an option to our tabs component to appear in a box-style manner, containing the content below. This allows two visually distinct levels of tab navigation
- **Indeterminate progress indicator**: Improve our progress indicator component with an indeterminate state for scenarios where the progress duration or completion time is unknown.
- **Resizable panes**: Enhance the pane component with resizing capabilities, allowing users to adjust panel widths and heights to customize their workspace layout according to their needs.
- **Icon alignment**: We will semantically align icons across Siemens design system to ensure icons reliably represent the same actions, states or concepts across the libraries.


**Disclaimer**: The roadmap is subject to changes and errors. The information given in this document only contains general descriptions and/or performance features which may not always specifically reflect those described, or which may undergo modification in the course of further development of the products.
