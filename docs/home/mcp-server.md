---
sidebar_label: Build with AI
title: Model Context Protocol (MCP) server for iX
doc-type: 'banner'
description: 'A Model Context Protocol (MCP) server that provides AI assistants (agents) with access to
Siemens Industrial Experience design system and component API documentation
through Retrieval-Augmented Generation (RAG). This enables more accurate and relevant assistance
with design system and component library APIs.'
---

## Overview

- Local MCP server installation includes all design system documentation, component APIs, examples
  and icon information
- MCP server integration with your AI agent setup of choice, integrated into your IDE, e.g.
  GitHub Copilot agent integration within VS Code with project-related MCP configuration
- Use cases include (but are not limited to):
  - Get design system best practice information
  - Export components
  - Review project text according to UX writing guidelines
  - Generate new pages using design system components
  - Add and modify pages

## Installation

### Prerequisites

- Node.js (20+ recommended)
- Access the API [https://api.siemens.com/llm](https://api.siemens.com) by creating a free token
  at [https://my.siemens.com](https://my.siemens.com) with `llm` scope. We use the `embeddings` API. Currently, Siemens access is
  required to request a token, but we are working on a configurable alternative for all users.
- IDE/Agent/LLM setup of your choice, e.g. VS Code, GitHub Copilot, Claude Sonnet 4.5

### Version selection

iX builds the components for multiple technology stacks. We ship MCP packages for every technology stack and
you need to install the npm package related to your ix package.

- For `@siemens/ix` use `@siemens/ix-mcp`
- For `@siemens/ix-angular` use `@siemens/ix-mcp-angular`
- For `@siemens/ix-react` use `@siemens/ix-mcp-react`
- For `@siemens/ix-vue` use `@siemens/ix-mcp-vue`

In the next sections, the instructions only for `@siemens/ix-mcp` are provided. You need to replace it with your technology
stack if needed.

We distribute a MCP server package `@siemens/ix-mcp` for every `@siemens/ix` version. The version of
`@siemens/ix-mcp` must match your version of `@siemens/ix`. The version number of the MCP package
`@siemens/ix-mcp` is a combination of the `@siemens/ix` version and the version of the MCP code.

For example, `@siemens/ix-mcp@4.0.0-v.1.4.8` comes with the data of `@siemens/ix@4.0.0` and
`v.1.4.8` is the version of the MCP script.

To facilitate the version selection, we use
[npm distribution tags](https://docs.npmjs.com/cli/commands/npm-dist-tag) `@ix<version>` that match
the version of `@siemens/ix`. When using the corresponding distribution tag on installation, you get
the latest version of the MCP package that matches your `@siemens/ix` version and simplifies
handling in your `package.json`.

```json
"dependencies": {
    "@siemens/ix": "4.0.0",
  },
  "devDependencies": {
    "@siemens/ix-mcp": "4.0.0-v.1.4.8",
  }
```

New MCP package versions on the same `ix` version are incremented like `4.0.0-v.1.4.9`,
`4.0.0-v.1.4.10`, `4.0.0-v.1.5.0`.

### Project installation

```bash
npm install --save-dev --save-exact @siemens/ix-mcp@ix4.0.0

# Or with yarn
yarn add -D --exact @siemens/ix-mcp@ix4.0.0
```

### Global installation

```bash
npm install -g @siemens/ix-mcp@ix4.0.0
```

### Upgrading

Simply install the tag for your version and framework again:

```bash
# in project
npm install --save-dev --save-exact @siemens/ix-mcp@ix4.1.0

# with yarn
yarn add -D --exact @siemens/ix-mcp@ix4.1.0

# global
npm install -g --save-exact @siemens/ix-mcp@ix4.1.0
```

## Quick Start

After a local project or global package installation, initialize the MCP server and
provide the access token.

1. **Navigate to your project directory**:

   ```bash
   cd your-project
   ```

2. **Run initial setup**:

   ```bash
   npx @siemens/ix-mcp init
   ```

   Or if token is already set up:

   ```bash
   npx @siemens/ix-mcp setup
   ```

   > Important: Run this command in the root of every project where you want to use the MCP server.

3. **Follow the prompts**:
   - Enter your LLM token from [https://my.siemens.com/](https://my.siemens.com/) (requires 'llm' scope)
   - Use this token to generate embeddings for a semantic search of the documentation. The
     embeddings help find relevant documentation chunks, but your AI tool (e.g.,
     GitHub Copilot, Claude, etc.) provides the actual LLM (language model) that
     processes your queries and generates responses separately.
   - Choose which tools to configure (VS Code, Cline, Zed, etc.).
   - Optionally set up iX instruction files for AI agents.
   - The tool creates the MCP configuration files based on your selection. Commit the local
     configuration to share it (make sure it isn't ignored by `.gitignore`).

4. **Restart your AI tools** (VS Code, Cline, Zed, etc.)
   - Ensure the server is running and trust the MCP server, e.g. click the "Server" icon in the
     GitHub Copilot Chat panel in VS Code.
   - **For GitHub Copilot in VS Code**: Make sure you are in Agent Mode not Chat Mode. Use models
     like **Claude Sonnet 4.5**.

5. **Start prompting**:
   - "How do I use the search component from @siemens/ix?"
   - "Show me examples of @siemens/charts-ng usage"
   - "Implement a dashboard with different widgets"
   - "Find icons related to AI or machine learning"
   - "Review the texts of this project"

> The MCP server starts automatically when your AI tools need it.

## Setup options

During `init` or `setup`, select which configuration(s) to create:

- **Local VS Code / GitHub Copilot (repository)** creates a VS Code MCP configuration file at
  `.vscode/mcp.json` in the current repository
- **Cline global settings** updates global Cline MCP configuration
- **VS Code / GitHub Copilot global config** writes user-level MCP config
- **Zed global settings** configures Zed editor / agent MCP

## AI agent instructions (optional)

After MCP configuration, set up iX instruction files so AI agents work more effectively with
your codebase. Do this in each repository where you want instructions.

For this, you have two options:

- **Symbolic link to receive updates**  
  Keeps files synced with the installed package. Requires the package to remain installed and may
  not work on all systems or package managers. The tool can create symlinks automatically;
  otherwise, create links yourself pointing to the installed package's `AGENTS.md` and iX
  instructions.

- **Copy the content** Copy the contents of the package’s `AGENTS.md` into one of the following in
  your repo:
  - `.github/instructions/ix.instructions.md`
  - `AGENTS.md`
  - `.github/copilot-instructions.md`

If you prefer manual copy, open the package’s `AGENTS.md`, then paste it into your chosen file and
commit it. Repeat per repository whenever you want to update the instructions.

## Logging

By default, the server performs no logging, but you can enable local-only logging of all search queries and
retrieval results during setup.

### Manually enabling logging

In your MCP configuration add the flag `--log` to log all search queries and retrieval results to
local log files in `~/.ix-mcp`.

```json
{
  "servers": {
    "@siemens/ix-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["@siemens/ix-mcp", "--log"]
    }
  }
}
```

### Viewing and sharing logs

To view logs, use the `npx @siemens/ix-mcp log` command, select any relevant session and look at the
output or the files copied to your current working directory.

To help us improve the MCP agent, please send us feedback regarding your MCP and agent results by creating an issue at
[https://code.siemens.com/ux/sdl-mcp/issues](https://code.siemens.com/ux/sdl-mcp/issues), share your
information, and include the relevant logs.

## Usage

### Commands

#### Init (first-time setup)

Complete initial setup: configure token and create all MCP configurations.

```bash
npx @siemens/ix-mcp init
```

#### Setup (update configurations)

Create or update MCP configuration files for your tools (uses existing token).

```bash
npx @siemens/ix-mcp setup
```

#### Setup token

Set or update only the LLM token in the system keychain.

```bash
npx @siemens/ix-mcp setup-token
```

#### Check

Verify your installation and configuration.

```bash
npx @siemens/ix-mcp check
```

#### Test

Test the MCP server with a sample query.

```bash
npx @siemens/ix-mcp test
```

#### Log

Check your previous MCP retrieval logs (if enabled / not disabled).

```bash
npx @siemens/ix-mcp log
```

### Connection issues

- Verify that the MCP server is running (it should start automatically)
- Restart your AI tool after configuration changes
- Verify your LLM token is valid at [https://my.siemens.com/](https://my.siemens.com/)

## Manual configuration

If you prefer to set up the configurations manually, here are the required files and their contents.

### VS Code (.vscode/mcp.json or user/mcp.json)

```json
{
  "servers": {
    "@siemens/ix-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["@siemens/ix-mcp"]
    }
  }
}
```

### Cline (global Cline MCP settings)

```json
{
  "mcpServers": {
    "@siemens/ix-mcp": {
      "command": "npx",
      "args": ["@siemens/ix-mcp"]
    }
  }
}
```

### Zed (global Zed settings)

```json
{
  "context_servers": {
    "@siemens/ix-mcp": {
      "source": "custom",
      "command": "<path-to-npx, run which/where npx to find>",
      "args": ["@siemens/ix-mcp"],
      "env": {}
    }
  }
}
```
