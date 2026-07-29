---
doc-type: 'tab-item'
description: 'Usage guide for the ix-application'
---

# Application - Usage

Application is a technical and infrastructural component without a direct visual appearance. It lays out the top-level app elements like the [header](/docs/components/application-header/guide.md). The application component acts as a centralized hub for configuring aspects of your web application, such as screen breakpoints, theming and app switch configuration. By consolidating these configuration points, it simplifies the management of application-wide settings and ensures a consistent user interface across different scenarios.

The component itself is designed with modularity in mind. It can be seamlessly integrated with other components such as [application header](/docs/components/application-header/guide.md), [application menu](/docs/components/application-menu/guide.md), [content](/docs/components/content/guide.md) and more. This modular approach allows you to mix and match components based on your specific application requirements, providing flexibility and customization options.

The application component primarily manages layout and application-wide behavior.

## Application example

![Application example](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=6694-51419&t=bGky2tHjBPC9fOGT-4)

1. [Application header](/docs/components/application-header/guide)
2. [Application menu](/docs/components/application-menu/guide)
3. [Content](/docs/components/content/guide)

## Skip link

Application provides a "Skip to main content" link by default. It is the first focusable element within the application shell, remains visually hidden until it receives keyboard focus and lets users bypass repeated content such as the header, search and navigation. Activating the link moves keyboard focus to the destination and scrolls it to the beginning without changing the URL fragment.

Without additional configuration, the link targets the internal main region. Use `skipLinkTargetId` to target a more specific content boundary:

- Provide a bare element ID, without `#` or other CSS selector syntax.
- The ID must identify one visible, usable light-DOM descendant of the same `ix-application`.
- Application makes a non-interactive destination programmatically focusable when necessary and preserves an existing `tabindex`.
- An invalid target produces a console warning and falls back to the internal main region.

The built-in link is the first focusable element owned by `ix-application`. Applications remain responsible for any focusable content rendered before the component in the document.

Use `i18nSkipToContent` to localize the link text. An empty value falls back to "Skip to main content" so the link always has an accessible name.

Only set `disableSkipLink` to `true` when the page provides an equivalent bypass mechanism outside `ix-application`. Disabling it without an alternative makes repeated application-shell content harder to bypass and can cause a WCAG 2.2 [Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html) failure.

## Application switch

![Application switch and modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1665-19417&mode=design&t=I0iEEuzKJJPK4Sum-11)

1. Application switch button opens the modal
2. Application switch modal with a list of applications
3. Current application
4. Link to another application with icon, name and optional description
5. Indicator "open in a new browser tab"
6. Close icon

With the application switch, users can navigate across applications. The interaction control – the application switch button (1) – is in the [application header](../application-header). Clicking the button opens a modal (2) with a list of available applications your users can switch to. This list is technically defined in the application component and its content depends on your product strategy. Our lists typically contain applications belonging to a software suite, applications with a similar scope or applications a user has purchased.

Clicking the current application closes the modal. Clicking another application closes the modal and opens the target application in the same or in a new browser tab, depending on the defined target option. Switching between browser tabs is much faster than loading the applications each time in the same browser tab, however, switching between multiple browser tabs could confuse users.

We typically avoid opening the same application in multiple browser tabs. Instead, we recommend switching to the browser tab where the application is already open. Nonetheless, be aware this does not work under all circumstances and some browsers cannot support this feature.
<br></br>

## Options

- **forceBreakpoint:** Forces a specific breakpoint "lg", "md" or "sm". This can be used to force a specific application behavior that ignores the current browser viewport width.
- **skipLinkTargetId:** Sets the ID of a custom light-DOM destination for the built-in skip link.
- **i18nSkipToContent:** Localizes the built-in skip link text.
- **disableSkipLink:** Disables the built-in skip link when an equivalent bypass mechanism is available.

## Behavior

The application component automatically adapts, by default, to three breakpoints and changes the application layout accordingly:

- "lg" for large screens (min-width 62em)
- "md" for medium screens (min-width 48em)
- "sm" for small screens (min-width 36em)

## Related

- [Accessibility](../../guidelines/accessibility)
- [WCAG 2.2: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [W3C Technique G1: Adding a link to main content](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
