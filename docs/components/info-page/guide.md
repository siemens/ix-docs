---
doc-type: 'tab-item'
description: 'Usage guide for the ix-info-page'
---

# Info page - Usage

Use info pages when a page-level situation interrupts the normal route and users need a clear explanation and a way forward. Info pages suit missing routes, unavailable resources, authorization boundaries and server-side failures, as well as other standalone informational pages that need the same focused layout.

![Info page anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8464-3)

1. Illustration or icon slot
2. Title
3. Instruction text
4. Action slot
5. Page background

## Options

- **Icon:** The default icon is `warning`. Choose another icon when the situation needs a different visual cue.
- **Image:** Replace the icon with a suitable illustration whenever one is available. Use the default icon only when no meaningful image fits the situation. We recommend a size of `260 × 196 px`.
- **Header:** Provide a short, specific title as the main page heading (see [writing guidelines](./language)).
- **Description:** Add brief supporting text that explains the situation or the next step (see [writing guidelines](./language)).
- **Actions:** Add buttons that help users recover, navigate away or request support (see [writing guidelines](./language)).

## Behavior in context

- **Interaction:** Actions follow the heading and message in normal document order. Keep every action keyboard reachable. The first focusable element is the first button.
- **Overflow:** All elements wrap in multiple lines. Additionally, buttons stack and fill the available width on small screens.
- **Placement:** Place info pages as a full-page or full-content-area message. In a smaller content region, use [empty states](../empty-state/) when no content is available, or [message bars](../messagebar/) when the user should remain in the current workflow.

## States

Info pages have no separate hover, active, disabled, loading or error state. The states of controls in the `actions` slot come from those controls. The default icon is decorative; slotted images need their own meaningful alternative text when they convey information.

![Info page states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8464-68)

## Dos and Don'ts

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Do focus the page on one situation and one clear next step</li>
    <li>Do generally use info pages as full-page messages, with exceptions such as flows that include app-header (e.g. workspace invite) or micro-frontend and iframe contexts</li>
    <li>Do use the [error-page writing guidelines](../../guidelines/language/messaging/error-pages.md) when writing status messages and recovery actions</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Don't use info pages for transient failures while users remain in their current workflow</li>
    <li>Don't use info pages for an ordinary lack of content, use an [empty state](../empty-state/) instead</li>
    <li>Don't replace the writing guidance with longer technical diagnostics in the main message</li>
  </ul>
</div>
</div>

## Related

- [Empty state](../empty-state/)
- [Message bar](../messagebar/)
- [Error-page writing guidelines](../../guidelines/language/messaging/error-pages.md)
- [Accessibility](../../guidelines/accessibility)
