---
title: 'Info page - ideation'
description: 'Research and design notes for the info page component.'
---

# Info page - ideation

This document collects design, usage, and implementation evidence for the info page. Confirmed Figma and implementation behavior is separated from recommendations and open questions.

▶️ In which group should we put it?

- Separate group "Page"?
- System feedback and status?
- Application frame?

We will add this as writing tab: https://ix.siemens.io/docs/guidelines/language/messaging/error-pages

## 1. Anatomy

The Figma specification shows a centered info page content area with a single vertical reading order:

1. **Illustration or icon slot**: The optional named `image` slot replaces the default icon with an illustration, image, or custom icon. Without slotted content, the component renders the configured icon in a `260 × 196 px` container.
2. **Title**: The primary heading that names the problem, status, or purpose of the page.
3. **Instruction text**: Optional supporting text that explains the situation and guides the user toward the next step.
4. **Action slot**: Optional content in the named `actions` slot. The implementation displays this region only when the slot contains an element or non-empty text.
5. **Page background**: The component is presented as a full-page message rather than as an inline notification or modal.

Six predefined HTTP illustrations (400, 401, 404, 418, 500, and 504) are mapped to families of error codes: magnifier, hourglass, lock, plug, document and teapot.

The implementation renders the title as an `h1`, followed by optional copy text and optional instructions. The default icon is decorative and uses `aria-hidden="true"`; slotted images remain responsible for their own accessible alternative text.

**Open discussion points**

- ▶️ Is it always used for a full page? (what about if e.g. user enters the correct main url with the wrong query parameters)
- ▶️ Which components are allowed in the action slot? (e.g. only button, or icon button, button link, custom components) Should we recommend a specific action component set for the `actions` slot?

▶️ TODO IN FIGMA: Fix typo `Tilte` in the component layer name before the final specification is published.

## 2. When to use

We recommend an info page as base layout for standalone error pages = when the user has reached a page-level state that needs a clear explanation and a meaningful next step, e.g. missing permissions, a missing route, an unavailable resource, an authorization boundary, a server-side failure

Do **not** use an info page...

- for transient failures while the user remains in the current workflow -> use inline notifications or toast instead so users can continue working in context
- for non-full-page layouts -> use empty state instead ▶️ is this the separation from empty state?

Note: Element’s HTTP error-page pattern identifies missing resources, blocked resources, and standalone 401, 403, 404, and 500 routes as appropriate full-page cases.

Keep the page focused on one situation. Choose a clear title, a short explanation, and only the actions that help the user recover or leave the dead end. For HTTP responses, preserve the official status code and definition so users can search for the problem independently. ▶️ writing tab?!

**Additional information**

- Element lists error reporting and user information or actions as primary use cases for info pages.
- The local [error-page language guidance](../../guidelines/language/messaging/error-pages.md) recommends giving users a way out and adapting actions to what the application can technically support.
- The current components overview does not yet list an info page component.
- The design-systems assistant comparison found a converging principle in Carbon: do not truncate page headers, titles, or error messages. This supports keeping the info-page title and recovery message readable at narrow widths.
- Polaris guidance similarly recommends short labels that clearly communicate an action’s purpose. This supports using concise, outcome-oriented labels in the `actions` slot.

**Open discussion points**

- ▶️ How are non-error informational pages in scope for the component or should use a separate pattern? (as it is called "Info" page)

## 3. Options

The implementation in [siemens/ix#2777](https://github.com/siemens/ix/pull/2777) confirms five public properties and two named slots. The component is available through the web-component package and Angular, React, and Vue wrappers.

### Content

- **`icon`**: Icon name displayed above the title when no `image` slot is populated. The default is `iconWarning`.
- **`iconColor`**: Color token or value for the default icon. The PR declares `color-warning-text` as the default; the implementation review notes that the token may need to change to `--si-sys-background-warning` to match the latest main-branch token refactoring.
- **`titleText`**: Required short title (H1!)
- **`copyText`**: Optional explanation of the topic and how it can be resolved. ▶️?
- **`instructions`**: Optional instructions describing what the user should do next. The implementation renders this text with a soft text color.
- **`image` slot**: Optional illustration or custom icon that replaces the default icon. Slotted content is constrained to the image container with `max-width: 100%`, `max-height: 100%`, and `object-fit: contain`. ▶️  Alt text needed?
- **`actions` slot**: Optional actions related to the message. The component supports arbitrary slotted content at the API level; the implementation does not impose a button count or emit action events.

### Illustration mapping

The Figma specification documents six predefined HTTP illustrations - ▶️ how do we handle these? - example, pattern?

- **Magnifier**: 404 Not found and 410 Gone
- **Hourglass**: 408 Request timeout, 425 Too early, 426 Too many requests, and 504 Gateway timeout
- **Lock**: 401 Unauthorized, 403 Access forbidden, 407 Proxy auth required, 423 Locked, 451 Unavailable for legal reasons, and 511 Network auth required
- **Plug**: 500 Internal server error, 501 Not implemented, 502 Bad gateway, 503 Service unavailable, 505 Version not supported, 506 Variant also negotiates, 507 Insufficient storage, 508 Loop detected, and 510 Not extended
- **Document**: 400 Bad request, 405 Method not allowed, 406 Not acceptable, 409 Conflict, 411 Length required, 412 Precondition failed, 413 Payload too large, 414 URL too long, 415 Unsupported media type, 417 Expectation failed, 421 Misdirected request, 422 Unprocessable entity, 428 Precondition required, and 431 Headers too large
- **Teapot**: 418 This is not a real error code

### Size and layout

- **Illustration slot size**: The default documented size is `260 × 196 px`; the specification also shows a larger resizable illustration example at `675 × 509 px`. ▶️ so can we have bigger images or not?
- **Content width**: The primary example uses an `820 px` content width inside a `1440 px` page. Smaller examples use a `448 px` or `520 px` content width.
- **Action count**: The examples show up to two visible primary actions and an optional secondary action. Treat this as design evidence, not an enforced limit.

## 4. Behavior in context

### Interaction

The Figma specification includes a keyboard interaction section with Tab movement and a visible focus example. The component renders slotted actions in normal document order after the heading and message. Make every supplied action reachable with the keyboard; focus behavior belongs to the slotted controls because the info page has no custom focus API.

▶️ Where is the focus when it's shown e.g. on a failed route? Is it part of the component, or do applications need to take care of that?

### Responsive behavior

The Figma edge-case specification shows the component at wide and narrow content widths. Titles and instruction text wrap when space is constrained, while the illustration remains centered above the text. The implementation gives the content a maximum width of `50rem`, the message a maximum width of `40rem`, and allows the action row to wrap with a small gap. On small screens, the host padding changes from extra-large/default spacing to large/default spacing.

▶️ Do actions stack at some point or only wrap according to available width?

### Overflow and content

Figma documents text truncation based on container width. The implementation allows the title, copy, and instructions to flow within their max-width containers rather than providing a truncation or tooltip API. Prefer concise copy or a responsive layout that allows the message to wrap. Do not place long technical diagnostics in the main message; expose them through a separate detail or support path when needed.

## 5. Statuses

Hover, active, disabled, loading, and error states of the component itself are not established. An error page is a content use case, not proof that the info-page container has an error state of its own. States of slotted actions are provided by those child components.

## 6. Other Dos and Don’ts

### Do

- Do ...?
- Where security requires it, the server may deliberately return a less revealing public error page, such as showing 404 instead of 403.

### Don’t

- Don’t use an info page for transient background failures, instead use an inline notification or toast
- Don’t make an error page a dead end with only “Try again” when another useful way out is available
- Don’t let long diagnostics or action labels force important content to truncate

**Open discussion points**

- ▶️ Should we include a dedicated error-page composition example or link to a separate pattern page?

## References

- [iX PR #2777: Add info page component](https://github.com/siemens/ix/pull/2777)
- [iX implementation: info-page.tsx](https://github.com/siemens/ix/blob/feat/info-page/packages/core/src/components/info-page/info-page.tsx)
- [iX implementation: info-page.scss](https://github.com/siemens/ix/blob/feat/info-page/packages/core/src/components/info-page/info-page.scss)
- [iX implementation tests: info-page.ct.ts](https://github.com/siemens/ix/blob/feat/info-page/packages/core/src/components/info-page/test/info-page.ct.ts)
- [Figma: Add Info Page](https://www.figma.com/design/iWp1z1dCQ7HrTLz5nL1LMm/Add-Info-Page?node-id=145668-12021)
- [Element: Info page](https://element.siemens.io/development/components/pages/info-page/)
- [Element: HTTP error pages](https://element.siemens.io/development/patterns/http-error-pages/)
- [Carbon: Overflow content](https://carbondesignsystem.com/patterns/overflow-content/)
- [Polaris: Common actions best practices](https://raw.githubusercontent.com/Shopify/polaris-react-archive/main/polaris.shopify.com/content/patterns/common-actions/variants/best-practices.mdx)
- [Local error-page language guidance](../../guidelines/language/messaging/error-pages.md)
- [Local empty-state component](../empty-state/)
