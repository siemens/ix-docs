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

## Example prompts

- "Add an iX date picker to the settings form"
- "Implement this Figma frame with iX components"
- "Migrate this project to the latest iX version"
- "Review this page for iX accessibility issues"

## Learn more

- [Skill source on GitHub](https://github.com/siemens/ix/blob/main/skills/ix/SKILL.md)
- [Build with AI (MCP server)](./mcp-server.md)
