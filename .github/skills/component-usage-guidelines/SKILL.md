---
name: component-usage-guidelines
description: 'Create or update component usage guides in the Industrial Experience design system. Use when writing guide.md or usage tabs for docs components, including when to use a component, key options, behavior in context, states, dos and don''ts, related links, a final docs build check, and suggestion-oriented wording that works for Siemens and non-Siemens audiences.'
argument-hint: Which component needs usage guidance? Include the component name and the iX Figma component link if available.
---

# Component usage guidelines

Use this skill when you need to create or revise usage documentation for a component in this repo.

The goal is to produce a guide that matches the existing Industrial Experience documentation style: practical, decision-oriented, and focused on helping readers choose and apply the right component.

The guidance must stay useful for readers outside Siemens as well. Always give clear recommendations, and treat Siemens-specific product habits as examples or context rather than as assumptions about the reader's environment.

## Required Inputs

At the start of each guide task, ask the user for:

- The component name, e.g. `date-picker`
- The link to the Figma component in the iX Figma library

Use the Figma component link to:

- place accurate component instances in illustrations instead of generic placeholders
- inspect the layer structure and identify anatomy parts

If either input is missing, stop and prompt the user before proceeding.

## Figma MCP Prerequisite

Before doing any Figma-based illustration or anatomy work, confirm that Figma MCP is available.

- If the workspace uses a project-level `mcp.json`, check that it contains a Figma server entry such as:

```json
{
	"servers": {
		"figma": {
			"url": "https://mcp.figma.com/mcp",
			"type": "http"
		}
	}
}
```

- Verify tool access with a lightweight Figma MCP call before proceeding with illustration work.
- Prefer a lightweight read operation such as reading metadata for the provided Figma component link or another minimal node inspection.
- If Figma MCP is unavailable, stop and tell the user:

	"The Figma MCP server is not reachable. Please check that:

	- `mcp.json` contains the Figma server entry above if your workspace uses project-level MCP configuration
	- MCP access is enabled in your Figma account settings under Account → Security → MCP Access

	Once enabled, restart the MCP session and try again."

Do not proceed with any Figma illustration steps until the connection is confirmed.

## When To Use

- Writing a new `guide.md` or usage tab for a component under `docs/components/`
- Creating a new component documentation folder when the target component does not exist yet
- Refreshing an existing component guide to match current documentation patterns
- Adding missing usage guidance, states, variants, or dos and don’ts
- Clarifying when to use one component instead of a related alternative
- Analyzing Figma specifications provided in the chat interaction and translating them into usage guidance

Do not use this skill for general overview pages unless the task is specifically to write or revise a component usage page.

## Outcome

Produce usage guidance that:

- explains what the component is for in plain language
- uses a short opening definition in `guide.md` that complements, rather than repeats, the `index.mdx` description
- helps readers decide when to use it and when not to
- includes an anatomy illustration and a numbered annotation list for the most important parts
- documents the most relevant options and behaviors in context
- treats `Behavior in context` primarily as guidance for interaction, overflow, text truncation, placement, and responsiveness
- links to related components and writing or accessibility guidance where relevant
- stays separate from API-heavy or framework-specific implementation details
- gives explicit suggestions and recommendations instead of only describing the component
- remains readable for non-Siemens audiences even when Siemens-specific examples are included
- follows the repo styleguide for section order, formatting, grammar, voice and tone
- uses uploaded Figma specifications when available to ground the guidance in actual design intent

## Industrial B2B UX Context

Keep the Industrial Experience product context in mind when writing usage guides.

- Users are often operators, engineers, or technicians working under time pressure or in safety-critical environments.
- Interfaces are often dense with data, so components need to support efficient scanning rather than decorative layouts.
- Dark and light themes both matter. Avoid guidance that only works well in one theme.
- Accessibility in industrial environments can include high contrast displays, glare, gloved input, and similar operational constraints alongside standard accessibility guidance.
- Consistency and predictability matter more than novelty because users rely on pattern recognition.

## Procedure

1. Ask for the component name and the iX Figma component link if they are not already provided. Do not proceed until both inputs are available.
2. Confirm that Figma MCP is available before doing any Figma-based illustration work. If the connection cannot be confirmed, stop and ask the user to fix the MCP setup first.
3. Inspect the target component folder under `docs/components/<component>/`.
4. If the target component folder does not exist, create it and add the base documentation files following nearby component patterns, including `index.mdx`, `guide.md`, and `code.mdx`.
5. Read the existing `index.mdx`, `guide.md`, `code.mdx`, `.gemini/styleguide.md`, and any related files to understand what already exists and which house rules apply.
6. Make sure the short opening definition in `guide.md` is not a restatement of the `index.mdx` description. Use the opening to add usage context, decision support, or primary scenarios instead of repeating the summary line.
7. Analyze the Figma component link and any related design material provided in the chat interaction. Use them as evidence for anatomy, variants, states and behavior guidance.
8. Add an anatomy illustration near the top of the guide. If no component-specific anatomy image is available yet, use this dummy Figma illustration: `![Anatomy component](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7794-3088&t=VdWD2lSX0POwEDXH-4)`.
9. Always follow the anatomy illustration with a numbered list of annotations that names the key visible parts, for example `1. Start field`, `2. Range separator`, `3. End field`.
10. Read 2 to 3 similar component guides from the same category to mirror the established structure and level of detail.
11. Check `docs/components/overview.md` to confirm the component category and nearby alternatives users may confuse it with.
12. Draft or revise the guide around decision-making, not implementation details.
13. Phrase recommendations so they work for both Siemens and non-Siemens readers. If Siemens-specific context is useful, present it as an example, common pattern, or internal default rather than as a universal rule.
14. If design-system comparison would strengthen the recommendation and the tools are available, use the design-systems MCP (southleft/design-systems-mcp) to check relevant patterns from established external design systems such as Carbon, Material, or Atlassian.
15. If alignment with Siemens Element would help and the tools are available, use the Element MCP server (element-mcp) for comparison with the sister design system.
16. Add or verify cross-links to related components, writing guidelines, and accessibility guidance when those links help users choose or use the component correctly.
17. Validate headings, relative links, and anchor targets.
18. Run a docs build as the final verification step and fix any broken links or anchors introduced by the change.

## Figma Illustration Workflow

When the task includes creating or updating illustrations, use the dedicated Figma illustrations file:

- `https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o`

Treat each page in that file as the illustration space for one documentation page. Locate the page matching `{componentName}` or create it if it does not exist. Treat each illustration as a separate frame on that page.

All illustration frames must use:

- width `1000px`
- background `color-1` token from the iX library
- padding `56px` on all sides
- component instances sourced from the Figma component link provided by the user

### Illustration 1 - Anatomy

- Frame title: `{componentName}-anatomy`
- Place an instance of the component in the frame.
- Add annotation arrows for each anatomy part identified during layer inspection.
- Match the annotation labels to the numbered list in the Anatomy section of the guide.

### Illustration 2 - States

- Frame title: `{componentName}-states`
- Show one instance per relevant state, e.g. default, hover, active, disabled, loading, and focused.
- Include only the states that are relevant to the component.
- Place a text label above each state instance.

### Additional illustrations

- Create additional illustrations for Dos and Don’ts only when the point is not clear enough from text alone.
- Use the same frame specification for any additional illustration.

### After creating each frame

- Retrieve the shareable frame link through Figma MCP.
- Embed the frame in the draft markdown using `![{Descriptive alt text}](link-to-figma-frame)`.
- Place the anatomy illustration in the Anatomy section and the states illustration in the States section.

### Fetch illustration assets

- Run `pnpm update-figma 'docs/components/{componentName}/guide.md'` to download PNG versions of the illustrations referenced from the guide.
- Report success to the user once the command completes.

## Recommended Structure

Use the sections that fit the component. Do not invent sections that the component does not need.

- Frontmatter matching the repo's existing doc type and description style
- Title in the established pattern, such as `# Component name - Usage`
- Short opening definition with primary use cases that adds context beyond the `index.mdx` description
- Anatomy or overview image using the component-specific illustration when available, otherwise the dummy Figma image above
- Numbered annotations directly below the anatomy image that name the visible parts readers need to understand
- `## Variants` for meaningful visual or semantic variants
- `## Options` for authoring choices, labels, placements, targets, or configurable behavior
- `## Behavior in context` focused on interaction, overflow, placement, hierarchy, responsiveness or adjacent content rules
- `## States` for default, hover, focus, disabled, open, loading, error, or similar states
- `## Dos and Don’ts` with concise imperative bullets always starting with "Do" or "Don’t" and balanced between dos and don’ts
- `## Related` for adjacent components or broader guidelines

Keep the ordering consistent whenever the sections exist:

1. Frontmatter
2. Short description and anatomy, without a heading, with image and list
3. Variants
4. Options
5. Behavior in context
6. States
7. Dos and Don’ts
8. Related

If you create or revise `code.mdx` together with `guide.md`, follow this structure:

1. Basic
2. Further examples
3. API for the component
	- Properties
	- Events, if relevant
	- Slots, if relevant

## Decision Points

- If the component is often confused with another one, explicitly explain when to choose each option.
- If the component is navigational, distinguish navigation from actions.
- If the component is used inside forms, tables, layouts, or modals, describe placement and interaction constraints in that context.
- Use `Behavior in context` to explain how users interact with the component, how content behaves when space is limited, where the component should appear, and how it adapts across viewport sizes.
- If the component has predefined action patterns, explain what authors can and cannot customize.
- If copy, labels, or messaging are critical, link to the appropriate language guidelines instead of duplicating them.
- If accessibility guidance materially changes usage, link to the relevant accessibility docs.
- If a section would be speculative because the behavior is not documented or visible in existing sources, omit it and keep the guide factual.
- Always include suggestions. Readers should leave with clear advice, not just a description of possible configurations.
- When Siemens-specific practice is relevant, label it clearly as an example such as "Typically at Siemens...", "In our applications...", or "For our software...".
- When possible, pair Siemens-specific examples with a broader recommendation that also makes sense for teams outside Siemens.

## Writing Rules

- Follow `.gemini/styleguide.md` for formatting, grammar, voice and tone. It is the single source of truth. If this skill conflicts with the styleguide, the styleguide wins.
- Keep the tone helpful, expert and approachable. Write as a collaborator guiding other writers, not as a neutral catalog or strict reviewer.
- Keep usage guides decision-oriented. Write recommendations and tradeoffs, not API inventories.
- Use suggestion-led phrasing such as "We recommend...", "We usually...", "As a general rule...", "Typically at Siemens...", or "In our applications..." instead of direct commands.
- Keep Siemens-specific guidance clearly framed as an example or common internal pattern, and pair it with a recommendation that also works for readers outside Siemens.
- Do not repeat the `index.mdx` description sentence in the guide opening. Rephrase it and add decision-oriented context.
- Prefer visuals and short annotations over extra explanation when an image already communicates the point.
- Keep framework-specific code examples out of the usage guide when that content belongs in `code.mdx`.
- Reuse existing terminology from nearby component docs, and prefer relative links that match the surrounding docs structure.

## What To Avoid

- Do not add text just because it feels safer to explain more
- Do not add an `## Anatomy` headline. Start the anatomy section directly with body text, the illustration, and the numbered list.
- Do not copy the `index.mdx` description into the opening paragraph of `guide.md`
- Do not repeat information across the opening, options, behavior and dos and don’ts sections
- Do not add content that is mainly a note to the writer instead of guidance for readers
- Do not write placeholder text for empty sections. Omit the section instead.
- Do not explain obvious behavior that readers can already understand from the component name, image or code example
- Do not describe illustrations only in prose when Figma MCP is available for creating them.
- Do not source component instances from generic shapes. Use the user-provided Figma component link.
- Do not start Figma-based illustration work before checking Figma MCP availability.
- Do not link the Related section to specific files such as `code.mdx`. Link to the component folder instead.
- Do not add future-tense phrasing such as `will` or `won't`
- Do not use the abbreviations `ix` or `iX` in usage-guide content
- Do not use punctuation that conflicts with `.gemini/styleguide.md`. Use `’`, `…`, `“`, and `”`.

## Dos and Don’ts Rules

The section title is ## Dos and Don’ts.

- Use the exact heading ## Dos and Don’ts.
- Start every do with "Do ...".
- Start every don’t with "Don’t ...".
- Keep each bullet to one sentence only.
- Do not use full stops or extra punctuation at the end of bullets.
- Keep dos first and don’ts second.
- Always balance the section. Do not write only dos or only don’ts.
- Aim for multiple dos and don’ts so the section does not feel empty.
- Do not exceed 5 dos and 5 don’ts.
- Keep the tone positive and constructive. Do not shame or blame users.
- When a don’t suggests a better alternative, name the alternative component or pattern and link to the related pattern when possible.

## Section-specific Rules

### Options

- Keep option names aligned with the code section naming, but translate technical names into readable labels.
- Format option labels as bold text followed by a colon, e.g. `**Label:**`.

### Behavior in context

- Keep the section title exactly `Behavior in context`.
- Common bullets are `Interaction`, `Overflow`, `Alignment`, `Responsiveness`, and `Placement`.

### States

- When the component has a state overview image, introduce the section with a concise state summary sentence, then place the image directly below it.
- Prefer the pattern `{component} have x states: Default, hover, active, disabled, loading and focused.` and then add any short clarifying sentence that is necessary.

## Preferred Voice Patterns

- Prefer "Buttons show the current state" over "The button will show the current state"
- Prefer "Users select tabs to switch between related views" over "The user can select a tab in order to switch views"
- Prefer "As a general rule, we use tables for structured comparison, but don’t use them for dense editing workflows" over longer, more formal phrasing
- Prefer "In our applications, we ..." or "For our software, we ..." when Siemens context is helpful, but keep the recommendation useful for readers outside Siemens as well

## Framing Siemens Examples

Use Siemens-specific phrasing when it adds helpful context, but keep it inclusive and recommendation-led.

- Preferred: "As a general rule, we use tables for structured comparison, but don’t use them for dense editing workflows."
- Preferred: "Typically at Siemens, we place this component in the page header, but the same pattern also works in any application that needs persistent context switching."
- Preferred: "In our applications, we use this variant for monitoring views. For other products, use it when users need quick access to parallel content sections."
- Preferred: "For our software, we keep labels short and specific. The same recommendation applies in any industrial UI where fast scanning matters."
- Avoid wording that turns Siemens habits into universal requirements without explanation.

## Quality Checks

Before considering the guide complete, verify that it:

- answers what the component is for
- answers when to use it and when not to use it
- uses an opening definition that does not duplicate the `index.mdx` description
- includes the anatomy illustration and a numbered list of key parts
- explains the most important options or variants
- covers interaction, overflow, placement, and responsiveness without duplicating API reference content
- includes concrete dos and don’ts where that pattern exists for comparable components
- links to the most relevant related components or guidelines
- does not introduce broken links or broken anchors
- passes a docs build before completion

## Completion Standard

The guide is done when a reader can choose the component confidently, understand its intended usage, avoid common misuse, and navigate to deeper implementation or related guidance without ambiguity.
