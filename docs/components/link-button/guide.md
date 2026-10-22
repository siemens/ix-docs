---
doc-type: 'tab-item'
description: 'Usage guide for the ix-link-button'
---

# Link button - Usage

Choose a link button when a destination needs more emphasis than an inline link, such as a related resource or a next step.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1506-4003&mode=design&t=5MYmq6zAbfw7xIkC-11)

1. Icon
2. Label

<br/>

:::info
Use inline [hyperlinks](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/a) for inline links `<a href="...">` instead of link buttons, e.g. within a paragraph. They are styled and ready to use without additional configuration needed.
:::

<br/>

## Options

- **Label:** Specify the link label.
- **URL:** Specify the link destination.
- **Target:** Define where a link opens (see [official MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target)):
    - `_self`: Opens the target in the same tab.
    - `_blank`: Opens the target in a new tab.
    - `_parent`: Opens the target in the parent frame.
    - `_top`: Opens the target in the full body of the window.
- **Icon:** Use the icon to match the type of the link.
    - `none`: Shows no icon.
    - `internal`: Shows a chevron for a destination within the application.
    - `external`: Shows an open-external icon for a destination outside the application.
    - `file`: Shows a document icon for a file destination.
    - `action`: Shows an arrow for a destination that helps users continue a task.
- **Position:** Define the position of the icon relative to the link label.

![Options](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8685-960&t=26bNTa4vYaKevea2-4)

## Behavior in context

- **Interaction:** Link buttons can be triggered by pressing anywhere within the button area. When link buttons are focused, they can be triggered by pressing `Enter`.
- **Placement:** We typically place link buttons below or next to related content but not within paragraphs. You can stack related links to create a link list.
- **Line length:** Labels stay on one line and are not truncated, so allow enough space to show the full label.

## States

Link buttons take five states: Default, hover, active, disabled and focused. On hover, the link destination is shown. In a disabled state, link buttons are visually displayed but don’t offer any user interaction.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1507-9250&mode=design&t=5MYmq6zAbfw7xIkC-11)

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do use link buttons for navigation</li>
      <li>Do choose a short, descriptive label that explains the destination</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t use link buttons to trigger an operation. Use a button instead</li>
      <li>Don’t place link buttons in running text. Use an inline link instead</li>
    </ul>
  </div>
</div>
