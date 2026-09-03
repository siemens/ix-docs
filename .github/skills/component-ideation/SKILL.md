---
name: component-ideation
description: 'Create or update component ideation documents for Siemens Industrial Experience docs. Use when researching a component from its implementation branch, Figma specification, Siemens Element, IX design-system knowledge, and external design systems, then structuring the result into Anatomy, When to use, Options, Behavior in context, Statuses, and Other Dos and Don’ts.'
argument-hint: 'Which component should be researched? Provide its docs folder, implementation branch or pull request, Figma component URL, and Element URL when available.'
---

# Component ideation

Use this skill to create a reusable, source-backed `ideation.md` for a component under `docs/components/<component>/`.

The purpose is to collect product, design, interaction, accessibility, and implementation evidence before writing the final usage guide. Keep the result useful for Siemens and non-Siemens audiences. Separate confirmed behavior from recommendations and unresolved questions.

## Required inputs

Ask for or identify these inputs before researching:

- Component name and repository docs folder
- Implementation branch, pull request, or source path
- Figma component URL with a node ID
- Siemens Element component URL, if a related component exists
- IX design-system knowledge category or search topic

When a source is unavailable, record that limitation in the document and continue with the remaining sources. Do not invent missing properties or behavior.

## Source-gathering workflow

### 1. Inspect the repository

Read the target component folder and nearby component documentation to learn the local terminology and file conventions. Check the component overview, code examples, generated API references, related components, and any existing guide.

From the implementation branch or pull request, collect:

- Public properties, types, defaults, and inheritance behavior
- Events and event payloads
- Slots and their intended content
- Built-in keyboard, pointer, touch, focus, screen-reader, responsive, and overflow behavior
- Built-in states and constraints
- Component names and source file paths

Treat the code as authoritative for implemented behavior. Do not turn internal implementation details into public guidance unless they affect how authors use the component.

### 2. Inspect Figma

Use the Figma MCP for the supplied component URL. Extract the node ID and file key from the URL. Read the design context first when available; use metadata as a fallback for anatomy and option discovery if the design-context call is unavailable.

Collect:

- Anatomy and reading order
- Component dimensions, sizing rules, spacing, and alignment
- Variants and option names
- Visible states and interaction examples
- Slot or content patterns
- Overflow, responsive, touch, keyboard, and screen-reader annotations
- Figma-specific recommendations, warnings, and open notes

If Figma reports that no layer is selected or returns only metadata, state that limitation explicitly. Do not describe invisible visual details as confirmed facts.

### 3. Inspect Siemens Element

Read the related Element page and collect its purpose, when-to-use guidance, alternatives, best practices, responsive behavior, and accessibility implications. Use Element as a sister-system comparison, not as proof of IX implementation behavior.

### 4. Search IX design-system knowledge

Use the available IX design-system search and browse tools. Search the relevant component category and, when useful, guidelines, patterns, accessibility, tokens, and quality topics.

Collect recommendations about:

- Component choice and alternatives
- Content and layout
- Interaction and focus
- Responsive behavior and overflow
- Accessibility and localization
- Reuse of existing IX components and tokens

Prefer specific, relevant results over a broad catalogue dump. Record the category or query used so the final references remain traceable.

### 5. Compare external design systems

Use two or three established design systems with strong, relevant guidance. Good defaults include Material 3, Carbon, Fluent, Spectrum, Atlassian, or PatternFly. Fetch their usage guidance rather than relying on component names alone.

Compare:

- Intended use and boundaries
- Anatomy and density
- Selection and actions
- Keyboard and screen-reader behavior
- Overflow and responsive rules
- Guidance for tables, trees, grids, and other alternatives

Use comparisons to identify converging principles and useful questions. Do not copy another system’s API or terminology into IX guidance.

## Output location and frontmatter

Create or update:

`docs/components/<component>/ideation.md`

Use frontmatter that matches the docs repository, for example:

```yaml
---
title: 'Component name - ideation'
description: 'Research and design notes for the component.'
---
```

## Required document structure

Use this exact order:

1. `## 1. Anatomy`
2. `## 2. When to use`
3. `## 3. Options`
4. `## 4. Behavior in context`
5. `## 5. Statuses`
6. `## 6. Other Dos and Don’ts`
7. `## References`

The document may have a short title and introduction before section 1. Keep all references at the end of the file. Do not add a separate references section earlier in the document.

### 1. Anatomy

Describe the visible and semantic parts in reading order. Include:

- Container and sizing behavior
- Leading, primary, supporting, status, and trailing content
- Slots and custom content
- Dividers, separators, grouping, or hierarchy
- Semantic roles when confirmed by code

End the section with these subsections, in this order:

```markdown
**Additional information**

- Supporting facts, source limitations, or useful related context

**Open discussion points**

- ▶️ Question or decision that still needs confirmation
```

### 2. When to use

Explain when the component is appropriate and when to choose an alternative. Cover likely alternatives such as tables, grids, trees, event lists, card lists, menus, or native HTML where relevant.

Include practical guidance for single-column content, complexity, placement, scanning, and operational context. Keep recommendations useful outside Siemens as well.

End with `**Additional information**`, then `**Open discussion points**`; every open question must begin with `▶️`.

### 3. Options

List all public options found in the code API and all meaningful options found in Figma. For each option, include the readable name, technical property where useful, supported values, default, and usage recommendation.

Also include:

- Events and payloads when they affect author decisions
- Slots and content patterns
- Inherited defaults and item-level overrides
- Recommendations and best practices from IX, Element, and external systems
- Token, density, and action limits only when supported by evidence

Do not omit an API property simply because it is not shown in Figma. Label implementation-only or advanced options clearly.

End with `**Additional information**`, then `**Open discussion points**`; every open question must begin with `▶️`.

### 4. Behavior in context

Describe built-in behavior in practical usage terms. Cover the subsections that apply:

- Interaction
- Keyboard navigation
- Pointer and touch behavior
- Screen readers and accessible input
- Focus management
- Responsive behavior
- Overflow, wrapping, truncation, tooltips, and scrolling
- Alignment and placement
- Selection, activation, actions, drag and drop, or other component-specific workflows

Distinguish implemented behavior from author responsibility. Avoid duplicating the generated API reference without explaining how the behavior affects usage.

End with `**Additional information**`, then `**Open discussion points**`; every open question must begin with `▶️`.

### 5. Statuses

List all relevant visual and semantic states, such as:

- Default
- Hover
- Focus
- Active or pressed
- Selected
- Disabled
- Loading
- Error or validation
- Open or expanded
- Dragging or reorder target
- Overflow or scrollable
- Empty

Only include states supported by the component or clearly relevant to its surrounding workflow. Describe what changes and what remains actionable in each state. Include both code-confirmed states and Figma-documented states, labeling uncertainty.

End with `**Additional information**`, then `**Open discussion points**`; every open question must begin with `▶️`.

### 6. Other Dos and Don’ts

Use concise imperative bullets. Keep dos first and don’ts second. Start every bullet with `Do` or `Don’t`. Keep each bullet to one sentence and no more than five dos and five don’ts.

Recommendations should cover content clarity, consistency, accessibility, responsive use, interaction boundaries, and choosing a better alternative when appropriate.

End with `**Additional information**`, then `**Open discussion points**`; every open question must begin with `▶️`.

## Evidence and writing rules

- Prefer source-backed statements and name the source in the surrounding text when the distinction matters
- Use “The branch implements…” for code facts, “The Figma specification shows…” for design evidence, and “We recommend…” for proposed guidance
- Keep implementation properties complete under Options, but keep the rest of the document decision-oriented
- Do not merge speculative recommendations into confirmed API behavior
- Use suggestion-oriented language that works for Siemens and other teams
- Treat Siemens-specific product habits as examples or context, not universal requirements
- Prefer existing IX components, tokens, icons, and accessibility patterns
- Do not create new component APIs, slots, states, or limits from comparison systems
- Keep terminology consistent with nearby docs and the source component
- Use relative links for local component alternatives and direct links for external references
- Avoid duplicated content across sections; place API details in Options and usage consequences in Behavior in context
- Use ASCII by default when creating the file, except where the repository’s established prose uses typographic punctuation

## Validation checklist

Before finishing:

1. Confirm the file exists under the intended component folder.
2. Check frontmatter delimiters and the presence of `title` and `description`.
3. Confirm the six requested sections appear in the required order.
4. Confirm every section ends with additional information followed by open discussion points.
5. Confirm every open discussion point begins with `▶️`.
6. Confirm References is the final section.
7. Run `git diff --check -- docs/components/<component>/ideation.md`.
8. Run repository diagnostics for the file when available.
9. Run the docs build. If the build is blocked by repository credentials, missing generated artifacts, or another unrelated environment problem, report the exact blocker and run the narrowest available direct documentation build.
