---
doc-type: 'tab-item'
description: 'Usage guide for the ix-content-header'
---
# Content header - Usage

The content header helps users understand what the page is about. We typically use it at the very top of the page to show a clear page hierarchy.

![Content header overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2250-4784&mode=design&t=XmCepM9jPR9PImPw-4)

1. Back button
2. Header title
3. Header subtitle
4. Header slot
5. Action buttons

## Variants

Our content header variants makes it easier to achieve a well-balanced visual hierarchy throughout the page.

- Primary: In our applications, we most often use the primary variant for main pages or primary sections.
- Secondary: We typically use this variant when we want to provide context or actions for a specific section of a page, such as when displaying detailed information related to a selected item from a list.

![Content header variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2250-9102&mode=design&t=XmCepM9jPR9PImPw-4)

## Options

- **Back button**: Enable if you want to provide a way for the user to navigate back.
- **Header title**: Set your page title here. Use a clear, short and descriptive wording.
- **Header subtitle**: Provide additional info for your content such as a descriptive sentence when required.
- **Header slot**: Use this slot to add additional content that is relevant to the page. We typically use it to display an object's status or a counter displaying the number of children by using a [pill](../pill).
- **Action buttons**: Offer convenient shortcuts for actions that the user might need to perform frequently, for example "Add" or "Edit".

## Behavior

- **Interaction**: The back button navigates usually one step back or behaves the same as the browser back. Action buttons typically navigate to another view.
- **Alignment**:
	- Place the content header at the very top left corner related to the content position.
	- Back button, title and subtitle are automatically aligned on the left side while the action buttons are aligned on the right side.
	- Elements in the header slot are top aligned by default. Use top margin to center align it with the title.
- **Cluster action buttons**: Action buttons are automatically aligned to the right. An example for the primary content header has the back button, title and subtitle at the left top corner of the whole page, and the action buttons at the right top corner of the page.

### Responsive text

The title and subtitle wrap onto multiple lines by default when their available space is limited. Wrapping responds to the width of the content header rather than a specific viewport breakpoint, so the same behavior applies in pages, panes, dialogs and other constrained containers.

- Title and subtitle text remain fully visible and can use as many lines as needed.
- Long text without natural break opportunities wraps when necessary to prevent horizontal overflow.
- Content in the header slot remains beside the title and aligned with its first line.
- The back button and action buttons remain aligned with the first title line.

Set the `textOverflow` property to `truncate` only when the header must retain a compact height. In HTML, use `text-overflow="truncate"`. In this mode, the title and subtitle each use a single line and are truncated with an ellipsis when needed. The complete values remain available as native browser tooltips.

### Responsive actions

Action button labels remain on one line and continue to occupy their required width. The content header does not automatically prioritize actions or move them into an overflow menu.

Keep the most important actions visible. When all actions do not fit comfortably, move secondary actions into a consumer-managed overflow menu, for example using the [dropdown](../dropdown) pattern. Test the resulting composition at all supported viewport and container widths to ensure that actions do not overlap the title or subtitle.

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do use to provide quick access to common tasks for the whole content area</li>
      <li>Do place only items in the header slot that don’t take up too much space, such as a status or a counter</li>
      <li>Do allow titles and subtitles to wrap when the available width is limited</li>
      <li>Do move secondary actions into an overflow menu when they compete with important header text</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t use a secondary content header as a page title</li>
      <li>Don’t use more than one primary headline in one page</li>
      <li>Don’t use truncation by default when users need the complete title or subtitle for context</li>
      <li>Don’t allow action labels to wrap or overlap header text</li>
    </ul>
  </div>
</div>

## Related

- [Application header](../application-header)
- [Content](../content)
- [Button](../button)