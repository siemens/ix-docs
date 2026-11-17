---
sidebar_label: Agent skill
title: Agent skill
doc-type: 'banner'
description: 'Install the Siemens Industrial Experience agent skill to help AI coding agents implement,
review and migrate iX applications using version-matched documentation.'
---

The iX repository provides an [agent skill](https://github.com/siemens/ix/blob/main/skills/ix/SKILL.md)
that teaches AI coding agents (e.g. GitHub Copilot, Claude Code, OpenCode) how to work with Siemens
Industrial Experience. The skill guides the agent to use version-matched component APIs, examples,
patterns and Figma mappings, as well as the official design-system guidance.

The skill is currently experimental. We would welcome your feedback, so please share your experience
or suggestions by [creating an issue on GitHub](https://github.com/siemens/ix/issues).

## Installation

Run the following command in the root of your project:

```bash
npx skills add siemens/ix --skill ix
```

The skill only needs file reading or HTTP fetch access to the iX registry and documentation.
No additional scripts or runtimes are required.

## When to use

The agent uses the skill to:

- Select and implement iX components in React, Angular, Vue or web components/native HTML applications
- Look up component properties, events, methods, slots, examples or related components
- Build larger UI sections from available iX patterns
- Translate Figma components into the matching iX implementation
- Find and use iX icons
- Apply iX design, accessibility, UX writing, chart or migration guidance
- Review generated or existing iX code for API, framework, accessibility and setup mistakes

## Code generation from Figma

The skill lets agents generate iX code from Figma designs without setting up
[Figma Code Connect](https://www.figma.com/code-connect-docs/). iX publishes a version-matched mapping
between Figma main component IDs and iX components, which the agent uses to:

1. Extract the main component ID from the Figma resource, for example from the `node-id` URL parameter
2. Look up the matching iX component for your installed iX version
3. Read the component API, usage guide and an example for your framework before generating code

If a Figma component has no iX mapping, the agent reports it and falls back to requirement-based
component selection instead of inventing an API.

Example prompt:

```text
Implement this Figma frame with iX components in React:
https://www.figma.com/design/<file-key>/<file-name>?node-id=<node-id>
```

## Example prompts

- "Add an iX date picker to the settings form"
- "Implement this Figma frame with iX components"
- "Migrate this project to the latest iX version"
- "Review this page for iX accessibility issues"

## Learn more

- [Skill source on GitHub](https://github.com/siemens/ix/blob/main/skills/ix/SKILL.md)
- [Build with AI (MCP server)](./mcp-server.md)
