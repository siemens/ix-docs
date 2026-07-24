# Badge - usage guide (outline)

> ![Important]
> This is a draft outline for the Badge component usage guide. It is intended to be a starting point for discussion and feedback. Please provide your input on the content, structure, and any additional information that should be included.

Writing: consider wording people may not understand what you mean / also consider punctuation within the badge e,g, 1/2 1(1)

## Purpose and usage context

- Badges are **non-interactive, visual aids** for status, counters and notification cues.
- Badges generally carry dynamic information.
- ▶️ Badge vs Chip?

## Anatomy

* **Label**: Anchor, Icon, Label
* **Counter**: Anchor, Label
* **Dot**: Anchor, Dot
* **Status icon**: Anchor, Icon

▶️ Add anchor?

## Types

Can be used **standalone or with an anchor element**. When attached to interactive anchors, interaction belongs to anchor.

Supported types:

- **label**: use for showing an entity's status (replaces pill)
- **counter** (default): use for notifications that need attention
- **status-icon**: use for notifications that need attention OR showing an entity's status
- **dot**: use for notifications that need attention

## Variants

- **primary**: highlight new features, discoveries, or exploratory information
- **alarm**: show negative values, removals, or critical information e.g. when characters are removed from a line of code in Bitbucket, or when displaying critical counts.
- **critical**: ???
- **warning**: call attention to information that requires caution or awareness, such as pending actions or items requiring attention
- **info**: draw attention to new or updated information, or to highlight informative numeric data
- **success:** show positive values or additions e.g. when characters are added to a line of code in Bitbucket, or when displaying growth metrics.
- **neutral:** for general-purpose numeric information that doesn't require semantic meaning
- **custom:** Custom colors should go through variant=custom with explicit background and badgeColor.

▶️ When to use which?

**Rule:** Use semantic variants for meaning, not decoration only. For label variant, choose icons that semantically correspond to the color meaning

> [!NOTE]
> Show ALL variants with types as figma illustration - esp. the status icon should be shown


## Options

- **Placement**:
    - **Inline** (without anchor element): Use to show entity's status in a list, e.g. a list of devices with "Online", "Offline", "Idle" etc.
    - **Top after** (default with anchor): Use as notification indicator that needs attention
    - **Bottom after**: Use for entity status information for individual elements, e.g. user status
- **Label**:
    - grows with content unless max width is configured
- **Counter**:
    - Use integers only with up to 2 digits (99+ instead of 100)
    - Should zero counters be hidden by default or visible when explicitly meaningful?
    - Exception: Use short words (e.g. new)
- **Status icon**: ?
- **Pulse animation**:
    - In which product moments is pulsing allowed? - use it for getting immediate and urgent attention
    - Should pulsing be stopped after a defined time?
- **X- and Y-offset**:
    - By default -10px for label, counter and status icon; -6px for dot
    - Do not fully overlap the anchor icon.
    - Do not place badge outside parent bounding box
    - ▶️ Any recommendations??
    - ▶️ Do we define minimum visible anchor area when badge is attached?
    - ▶️ Any mobile-specific adjustments for badge geometry?

## Behavior in context

- **Resizing**:
    - Labels are hug-width except max-width is applied
- **Overflow**:
    - If a max-width is applied on label badges text gets truncated

## Interaction behavior

- no badge interaction
- label allows text selection

## Accessibility

- Badge styling alone is not conveyed to assistive technologies. Instead, accessible naming should be clear in anchor context.
- For icon-only modes (dot/status-icon), add explicit aria labeling.
- Suggested mechanisms from sources:
    - role/status semantics for standalone use
    - optional live-region strategy for updates
    - aria-label support for icon use cases
- Intentionally define reading order for:
    - standalone label
    - standalone counter
    - standalone dot
    - standalone status icon
    - attached anchor+badge combinations
- Animation: Respects prefers-reduced-motion.
- ▶️ Default standalone role: status by default, alert for urgency, or product-controlled?
- ▶️ Should aria-live be default or opt-in?

## Add-on insights from external systems (non-binding)

- MUI - https://mui.com/material-ui/react-badge/:
    - badge is supplemental status, not primary information container
    - anchor accessible name should include badge meaning
    - dot variant for simple state
- Atlassian - https://atlassian.design/components/badge/:
    - semantic appearance naming
    - max value and optional uncapped mode
- Material 3 - https://m3.material.io/components/badges/overview:
    - upper-trailing placement pattern
    - compact character limits
- Carbon tag guidance (adjacent pattern) - https://carbondesignsystem.com/components/tag/usage/
    - overflow disclosure via tooltip
    - avoid multiline tag/badge text
    - clear separation of read-only vs interactive patterns

## Sources used

- Figma component: Badge node 138139:15345
- Web component props suggestion (props-v1)
- Element design system badges docs:
    - https://element.siemens.io/components/status-notifications/badges/
    - usage, design and accessibility sections
- Additional web sources (see above)

