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

## Recommended upgrade path

We strongly recommend upgrading version by version and not skipping major versions. If your project is still on an older major release, complete each intermediate migration first before moving to Version 6.

## Migrate with your agent

We optimized our breaking changes guides with a clear structure that is easy to parse both for humans and AI agents.

It starts with a high-level title and then splits the migration into isolated change domains. Within each domain, the guide follows a repeatable pattern:

- A short explanation of what changed and why
- Exact API or attribute names that were removed, added or renamed
- Concrete before/after code examples
- Migration rules phrased as explicit rewrite steps
- In some sections, a mapping table from previous version behavior to the new version replacement
- A final validation checklist to confirm the migration is complete

### Small to mid-sized projects

1. Install the new iX npm packages in your project.
2. Start an agent session (GitHub Copilot, Claude Code, etc.) in the root folder of your project.
3. Attach the breaking changes guide to the session and use the following prompt, replacing `<framework>` with the framework your project uses (Angular, React, Vue, etc.):

   ```text
   This app has been updated to iX x.0.
   I need you to go through the entire codebase and fix all parts the breaking changes in the attached file affect.
   This app uses the <framework> version of iX, so do use the <framework> components and properties whenever possible.
   After you finish migrating, use the checklist at the end of the file to confirm the fixes.
   ```

4. Review all changes after the agent finishes.

### Large projects

For large projects, we recommend running the agent one section at a time rather than the entire breaking changes guide at once:

1. Install the new iX npm packages in your project.
2. Start an agent session (GitHub Copilot, Claude Code, etc.) in the root folder of your project.
3. Scope the prompt to the section you want to migrate and run the agent. For example (replace `<section>` with the relevant section, and `<framework>` with the framework your project uses):

   ```text
   This app has been updated to iX x.0.
   I need you to go through the entire codebase and fix all parts the breaking changes affect.
   This app uses the <framework> version of iX, so do use the <framework> components and properties whenever possible.

   Breaking changes:
   <section>
   ```

4. Review the changes.
5. Start a new agent session to reset the context for better results before moving to the next section.
6. Use the final validation checklist as a whole-repository review once all domains are complete.

This keeps each batch of changes small and reviewable.

### Manual

1. Search the codebase for the deprecated APIs listed in that section.
2. Apply the documented V5 replacement using the before/after examples and migration rules.
3. Validate each domain immediately before moving to the next one.
4. Use the final validation checklist as a whole-repository review once all domains are complete.

## Migration guides

- [Migration guide V5 → V6](../migration/6_0_0/index.md)
- [Migration guide V4 → V5](../migration/5_0_0/index.md)
- [Archived: Migration guide V3 → V4](https://ix.siemens.io/version-4.4.0/docs/home/migration/4_0_0), 
- [Archived: Migration guide V2 → V3](https://ix.siemens.io/version-4.4.0/docs/home/migration/3_0_0)
- [Archived: Migration guide V1 → V2](https://ix.siemens.io/version-4.4.0/docs/home/migration/2_0_0)
- [Archived: Migration guide CoreUI → iX](https://ix.siemens.io/version-4.4.0/docs/home/migration/core-ui)
- [Archived: Migration guide UXT → iX](https://ix.siemens.io/version-4.4.0/docs/home/migration/uxt)
