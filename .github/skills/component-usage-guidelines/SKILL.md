---
name: component-usage-guidelines
description: 'Create or update Industrial Experience component usage guides. Use when writing guide.md or usage tabs for docs components, including when to use a component, key options, behavior in context, states, dos and don''ts, related links, a final docs build check, and suggestion-oriented wording that works for Siemens and non-Siemens audiences.'
argument-hint: Which component needs usage guidance?
---

# Component Usage Guidelines

Use this skill when you need to create or revise usage documentation for a component in this repo.

The goal is to produce a guide that matches the existing Industrial Experience documentation style: practical, decision-oriented, and focused on helping readers choose and apply the right component.

The guidance must stay useful for readers outside Siemens as well. Always give clear recommendations, and treat Siemens-specific product habits as examples or context rather than as assumptions about the reader's environment.

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

## Procedure

1. Inspect the target component folder under `docs/components/<component>/`.
2. If the target component folder does not exist, create it and add the base documentation files following nearby component patterns, including `index.mdx`, `guide.md`, and `code.mdx`.
3. Read the existing `index.mdx`, `guide.md`, `code.mdx`, `.gemini/styleguide.md`, and any related files to understand what already exists and which house rules apply.
4. Make sure the short opening definition in `guide.md` is not a restatement of the `index.mdx` description. Use the opening to add usage context, decision support, or primary scenarios instead of repeating the summary line.
5. If Figma specifications, screenshots or related design material are provided in the chat interaction, analyze them and use them as evidence for anatomy, variants, states and behavior guidance.
6. Add an anatomy illustration near the top of the guide. If no component-specific anatomy image is available yet, use this dummy Figma illustration: `![Anatomy component](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7794-3088&t=VdWD2lSX0POwEDXH-4)`.
7. Always follow the anatomy illustration with a numbered list of annotations that names the key visible parts, for example `1. Start field`, `2. Range separator`, `3. End field`.
8. Read 2 to 3 similar component guides from the same category to mirror the established structure and level of detail.
9. Check `docs/components/overview.md` to confirm the component category and nearby alternatives users may confuse it with.
10. Draft or revise the guide around decision-making, not implementation details.
11. Phrase recommendations so they work for both Siemens and non-Siemens readers. If Siemens-specific context is useful, present it as an example, common pattern, or internal default rather than as a universal rule.
12. Add or verify cross-links to related components, writing guidelines, and accessibility guidance when those links help users choose or use the component correctly.
13. Validate headings, relative links, and anchor targets.
14. Run a docs build as the final verification step and fix any broken links or anchors introduced by the change.

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

- Prefer short, direct sentences.
- Remember that no one comes to Industrial Experience documentation to read more than necessary. Keep asking why each sentence needs to exist.
- Less is more. Remove redundancy, internal reminders and content that only helps the writer rather than the reader.
- Use "you" and "we" when that makes guidance clearer and more direct.
- Prefer visuals when they explain faster than text. If an image, anatomy graphic or example communicates the point better, do not add extra explanation around it.
- When anatomy is shown, prefer short numbered labels over long descriptive paragraphs.
- Do not repeat the `index.mdx` description sentence in the guide opening. Rephrase it and add decision-oriented context.
- Be a little less formal than more corporate style guides. Use "you" and "we" when helpful, and avoid long, heavy sentences.
- Use sentence case throughout. Start with a capital letter, then capitalize only proper nouns.
- Use typographic punctuation from the styleguide: apostrophe `’`, ellipsis `…`, opening double quote `“`, and closing double quote `”`.
- Avoid the Oxford comma where possible. If a sentence only works with the comma, simplify the sentence instead.
- Use present simple tense whenever possible, for example "buttons show..." or "users select...".
- Do not use `will` or `won't`. These guides are intended to stay true over time, so describe current behavior and guidance in present simple tense.
- Prefer contractions such as "don’t", "isn’t", "haven’t", and "aren’t".
- Prefer plurals over singular references to people and components. Write about users, buttons, icons and breadcrumbs instead of repeatedly saying "the user" or naming a single component instance.
- Use active voice instead of passive voice.
- Use product-facing language, not internal implementation language.
- Write bullets as decisions or recommendations, not as API inventories.
- In `Behavior in context`, prefer bullets for interaction, overflow, placement, and responsiveness over broader generic behavior summaries.
- Keep framework-specific code examples out of the usage guide when that content belongs in `code.mdx`.
- Reuse existing terminology from nearby component docs.
- Prefer relative links that match the surrounding docs structure.
- Use guidance language such as "We recommend...", "We usually...", "As a general rule...", "Typically at Siemens...", or "In our applications..." instead of neutral catalog text.
- Do not assume the reader works at Siemens. Explain Siemens-specific wording or patterns as one example among others.
- Do not use the abbreviation `ix` or `iX` in Industrial Experience design system content. If it appears in usage-guide wording, remove it and align with content writers if broader cleanup is needed.
- Refer to components in lowercase unless the name is an official proper noun. Write "button", "map navigation" and "breadcrumb", not "Button", "Map navigation" or "Breadcrumb". The recognized proper noun exception is "About and legal information".
- Prefer "e.g." over "for example", "such as", or "like".
- Prefer "changelog" over "change log".
- Prefer "among other things" over "inter alia".
- When naming code options in prose, keep the human-readable label aligned with the code spelling from the code section. For example, if code uses `i18nPlainText`, write "Plain text" in the description.
- Remove trailing whitespace from lines.

## What To Avoid

- Do not add text just because it feels safer to explain more
- Do not copy the `index.mdx` description into the opening paragraph of `guide.md`
- Do not repeat information across the opening, options, behavior and dos and don’ts sections
- Do not add content that is mainly a note to the writer instead of guidance for readers
- Do not explain obvious behavior that readers can already understand from the component name, image or code example
- Do not add future-tense phrasing such as `will` or `won't`
- Do not use the abbreviations `ix` or `iX` in usage-guide content

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
