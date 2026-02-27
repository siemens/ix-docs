# Tooltips

> Tooltips are small, informative pop-up elements that often appear when a user hovers over or focuses on a user interface element. They provide helpful context or explanations without cluttering the main interface, making them a valuable tool for enhancing usability and guiding users through complex features.

import React from "react";
import { IxIcon } from "@siemens/ix-react";
import { iconEditDocument } from "@siemens/ix-icons/icons";

#

## General rules

Use tooltips to define icons and show control names.

- Edit
- Delete
- Log out

Avoid punctuation or periods for tool names or icons.

- Edit
- Open file

- Edit.
- Open file.

Use sentence case and a period if the tooltip is a complete sentence or multiple sentences.

- Add users to project.

- Add new users to project

Use verbs to start your tooltip and avoid passive voice.

- Create KPI tables.

- Tables are created.

Avoid complicated sentence constructions, e.g. no relative clauses.

- Share with team members.

- Projects can be shared with team members who work with you.

Use a heading with a short description for longer tooltips.

- Heading: Cycle time input
Description: Set the duration of each production cycle in seconds.
- Heading: Log history
Description: View historical logs of machine activity and operator actions.

Avoid repeating text already visible and readable on the screen.

- Edit (as icon<IxIcon name={iconEditDocument} size="16"></IxIcon>) Tooltip: Edit

- Edit (as text) Tooltip: Edit

## Dos and Don'ts

* Do write tooltips to give more context about complex features
* Do write tooltips to support beginners
* Don’t use tooltips to convey lengthy or critical information
* Don’t add irrelevant information, instead focus on context

## Related

* [Toast messages](./toast-messages.mdx)
* [Infotips (component)](../../../components/tooltip/code.mdx#a11y)
* [Non-critical information messages](./non-critical-information-messages.mdx)
* [Messages overview](./messages-overview.md)
