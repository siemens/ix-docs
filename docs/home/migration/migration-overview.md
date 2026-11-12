---
sidebar_position: 1
sidebar_label: Migration overview
title: Migration overview
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Upgrade one major version at a time, use AI assistance and find migration guides by source and target version.'
---

#

## Choose your migration path

We strongly recommend upgrading version by version and not skipping major versions. If your project is still on an older major release, complete each intermediate migration first before moving to the latest version.

| Migration guide | Breaking changes markdown |
| :--- | :--- |
| [Migration guide iX V5 → iX V6](./6_0_0/index.md) | [BREAKING_CHANGES/v6.md](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md) |
| [Migration guide iX V4 → iX V5](./5_0_0/index.md) | [BREAKING_CHANGES/v5.md](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v5.md) |
| [Migration guide iX V3 → iX V4](./4_0_0/index.md) | [BREAKING_CHANGES/v4.md](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v4.md) |
| [Migration guide iX V2 → iX V3](./3_0_0/index.md) | [BREAKING_CHANGES/v3.md](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v3.md) |
| [Migration guide iX V1 → iX V2](./2_0_0/index.md) | [BREAKING_CHANGES/v2.md](https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v2.md) |
| [Migration guide CoreUI → iX V1](./core-ui.md) | - |
| [Migration guide UXT → iX V3](./uxt.md) | - |

## Choose how you want to migrate

We optimized our breaking changes guides with a clear structure that is easy to parse both for humans and AI agents.

The guides start with a high-level title and then split the migration into isolated change domains. Within each domain, the guides follow a repeatable pattern:

- A short explanation of what changed and why
- Exact API or attribute names that were removed, added or renamed
- Concrete before/after code examples
- Migration rules phrased as explicit rewrite steps
- In some sections, there is a mapping table showing previous version behavior to the new version replacement
- A final validation checklist to confirm the migration is complete

### With an AI agent

We recommend using an AI agent to apply the breaking changes, then reviewing all changes before accepting them.

#### Small to mid-sized projects

1. Install the new iX npm packages in your project.
2. Start an AI agent session (GitHub Copilot, Claude Code, etc.) in the root folder of your project.
3. Attach the breaking changes guide to the session and use the following prompt, replacing `<framework>` with the framework your project uses (Angular, React, Vue, etc.):

   ```text
   This app has been updated to iX x.0.
   I need you to go through the entire codebase and fix all parts the breaking changes in the attached file affect.
   This app uses the <framework> version of iX, so do use the <framework> components and properties whenever possible.
   After you finish migrating, use the checklist at the end of the file to confirm the fixes.
   ```

4. Review all changes after the agent finishes.

#### Large projects

For large projects, we recommend running the AI agent one section at a time rather than the entire breaking changes guide at once:

1. Install the new iX npm packages in your project.
2. Start an AI agent session (GitHub Copilot, Claude Code, etc.) in the root folder of your project.
3. Scope the prompt to the section you want to migrate and run the agent. Replace `<section>` with the relevant section, and `<framework>` with the framework your project uses, e.g.:

   ```text
   This app has been updated to iX x.0.
   I need you to go through the entire codebase and fix all parts the breaking changes affect.
   This app uses the <framework> version of iX, so do use the <framework> components and properties whenever possible.

   Breaking changes:
   <section>
   ```

4. Review the changes.
5. Start a new AI agent session to reset the context for better results before moving to the next section.
6. Use the final validation checklist as a whole-repository review once all domains are complete.

This keeps each batch of changes small and reviewable.

### Manually

1. For each change domain in the breaking changes guide, search the codebase for usages affected by each listed breaking change.
2. Apply the documented version replacement using the before/after examples and migration rules.
3. Validate each domain immediately before moving to the next one.
4. Use the final validation checklist as a whole-repository review once all domains are complete.
