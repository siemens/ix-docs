---
doc-type: 'tab-item'
description: 'Usage guide for workflow steps'
---

# Workflow - Usage

Workflows guide users through ordered tasks where each step builds on the previous one, such as setup, commissioning, or approval flows. We recommend workflow steps when users need clear progress and sequence, but use [tabs](../tabs) for switching between independent views and [breadcrumbs](../breadcrumb) for hierarchical page navigation.

![Workflow anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7794-3088&t=VdWD2lSX0POwEDXH-4)

1. Workflow container
2. Step item
3. Step label
4. Status indicator
5. Connector

## Variants

- **Horizontal:** Use as the default for top-aligned page flows where users move left to right
- **Vertical:** Use when horizontal space is limited or step labels are longer and need more room

## Options

- **Orientation:** Keep the default horizontal orientation for broad layouts and switch to vertical orientation for narrow containers, side panels, or modal flows
- **Status:** Use step status to communicate progress and outcomes clearly (`open`, `done`, `success`, `warning`, `error`)
- **Selected step:** Mark the current step to keep orientation clear in longer workflows
- **Clickable navigation:** Enable clickable steps only when revisiting earlier steps is safe and does not create inconsistent data
- **Disabled step:** Disable steps that depend on required input from previous steps
- **Custom icon:** Use a custom icon only when it improves recognition of a step’s meaning or state

## Behavior in context

- **Interaction:** As a general rule, users should move to the next step only after completing the current one, while optional backward navigation remains available for review and correction
- **Overflow:** If steps exceed available width, we recommend switching to vertical orientation or shortening labels instead of forcing horizontal scrolling
- **Alignment:** Place workflows close to the main step content so users can scan step state and content context together
- **Responsiveness:** In our applications, we often switch to vertical workflows on smaller viewports to preserve readable labels and predictable spacing
- **Placement:** Typically at Siemens, we place workflows at the top of multi-step views or dialogs, and the same pattern works in any software where sequence and completion state must stay visible

## States

Workflow steps use status and interaction to communicate progress: `open`, `done`, `success`, `warning`, `error`, `selected`, and `disabled`. We recommend combining status with clear labels and feedback in the content area so users understand both where they are and what to do next.

## Dos and Don’ts

<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Do keep step labels short and specific so users can scan the flow quickly</li>
    <li>Do allow users to go back to previous steps when review or correction is expected</li>
    <li>Do use warning and error states to highlight steps that need attention before completion</li>
    <li>Do keep the total number of steps manageable by grouping related inputs in one step</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Don’t use workflow steps for global page navigation and use [breadcrumbs](../breadcrumb) instead</li>
    <li>Don’t use vague labels like “Step 1” when a meaningful task label is possible</li>
    <li>Don’t enable step jumping when later steps depend on unfinished required data</li>
    <li>Don’t rely on status color alone and pair state changes with clear text or messages</li>
  </ul>
</div>
</div>

## Related

- [Breadcrumb](../breadcrumb)
- [Tabs](../tabs)
- [Forms layout](../forms-layout)
- [Progress indicator](../progress-indicator)
- [Accessibility](../../guidelines/accessibility)
- [Button labels](../../guidelines/language/menu-functions-and-ui-labels/button-labels.md)
