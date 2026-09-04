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

- **Breakpoint:** Use “lg”, “md” or “sm” to override responsive behavior regardless of the browser viewport width.
- **Skip link target:** Set a custom destination when users should bypass the application shell and land at a more specific content boundary.
- **Disable skip links:** Disable skip links only when you already provide an equivalent document-level bypass.

## Behavior in context

- **Interaction:** The application component provides a skip-link list by default. “Skip to main content” is always the first focusable element within the application shell. “Skip to footer” follows when the application footer contains meaningful content. Skip links remain hidden until they receive keyboard focus and help users bypass repeated application content. We recommend keeping them enabled unless the page provides an equivalent bypass mechanism.
- **Responsiveness:** The application component automatically adapts to three breakpoints and changes the application layout accordingly:
  - `lg` for large screens (min-width 62em)
  - `md` for medium screens (min-width 48em)
  - `sm` for small screens (min-width 36em)

## Related

- [Accessibility](../../guidelines/accessibility)
- [WCAG 2.2: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)
- [W3C Technique G1: Adding a link to main content](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
