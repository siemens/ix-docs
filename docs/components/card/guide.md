---
doc-type: 'tab-item'
---
# Card - Usage

Cards make it easy for users to quickly scan small chunks of information. We typically use cards to create dashboards or modular, flexible designs that adapt seamlessly to various screen sizes. Additionally, cards can be used to draw attention to important content and serve as an entry point to deeper levels of navigation or detailed views.

We offer three types of cards:
1. Cards: Use flexibly to display various types of content e.g. images, charts or key data.
2. Action cards: Use to trigger key actions, similar to [buttons](../button).
3. Push cards: Use to display notifications and additional content related to the notification value.

![Card overview](https://www.figma.com/design/tfahbu7mmoTEDYYFYE2XmB/Update-card?node-id=7006-24531&t=ezJ14BAYO4fXC1jm-4)

- **Card**
	1. Card container
	2. Card content
- **Action card**
	1. Icon
	2. Heading
	3. Subheading
- **Push card**
	1. Icon
	2. Notification
	3. Heading
	4. Subheading
	5. Expand area
	6. Expandable content

## Variants

Cards are available in nine variants:

* Outline: Use as default for a balanced and subtle appearance.
* Filled
* Alarm
* Critical
* Warning
* Success
* Info
* Neutral
* Primary

Each variant emphasizes different aspects to guide the user's attention. These variants differ visually through the presence of an outline and a distinct container fill color, but they all follow the same interaction pattern.

![Card variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4969&mode=design&t=RDimbEsIHFIXIByo-1)

## Options

- **Card:**
	- **Selected:** Use the selected state to indicate that the corresponding action is currently active.
	- **Content area:** Cards can contain various types of content e.g. images, charts, key data. It is positioned below the heading and subheading. We recommend a padding of `1rem`.
- **Action card & push card**:
	- **Selected:** Use the selected state in action cards to indicate that the corresponding action is currently active.
	- **Icon:** Use icons that are widely recognized by users for the intended action.
	- **Notification:** By default, push cards display a notification value at the top of the container. This value is logically related to the items displayed in the expanding content area.
	- **Heading:** Display a heading in the top-left corner of the container.
	- **Subheading:** Display a subheading in the top-left corner of the container which is positioned below the heading.

## Behavior in context

- **Interaction:** As a general rule, the entire card container is interactive and clickable. If the card also contains interactive elements, the corresponding actions are triggered.
- **Size:**
	- By default, cards have a fixed width and height. However, content overflow is not managed automatically, so the card size must be manually adjusted.
	- Action cards have a fixed size of `8rem` width and `8rem` height.
	- Push cards have a fixed height of `11rem` and a default width of `16rem`. The width can be adjusted as needed.
- **Placement:** We typically group cards and position them in the top-left corner of the page or content area. Within the group, cards can be organized into lists or grids using [card lists](../card-list).

![Card examples](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1329-26613&mode=design&t=sOZRNgWt7R52iLSF-1)
## States

Cards have three states: Default, hover, active and focused.

![Card states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=858-4979&mode=design&t=RDimbEsIHFIXIByo-1)

## Dos and Don’ts

- Do group cards in lists or grids (use the [card list](../card-list) control)
- Do keep multiple cards equal in size
- Don’t nest cards inside each other
- Don’t use cards to collect user input

## Related

- [Card list](../card-list)
- [Flip](../flip)
- [Tile](../tile)