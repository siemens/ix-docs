---
sidebar_label: Build with AI
title: Build with AI
doc-type: 'banner'
description: 'Use our Model Context Protocol (MCP) server to give AI assistants (agents) full access to
the Siemens Industrial Experience design system documentation.
It uses Retrieval-Augmented Generation (RAG) to enable accurate and relevant assistance
with design system and component library APIs.'
---

## Installation

### Prerequisites

- Node.js (20+ recommended)
- Create a free token at [https://my.siemens.com](https://my.siemens.com) with `llm` scope to get access to the
  `embeddings` API at [https://api.siemens.com/llm](https://api.siemens.com/llm).
  (Currently, Siemens access is required to request a token, but we are working on a configurable alternative for all users.)
- IDE/agent/LLM setup of your choice, e.g. VS Code, GitHub Copilot, Claude Sonnet 4.5
- Choose the npm package matching your web dev framework. Read the [version selection section](#version-selection) below for more details.
  > This guide shows only instructions for @siemens/ix-mcp. Adapt the commands to fit your technology stack.

### Project installation

```bash
npm install --save-dev --save-exact @siemens/ix-mcp@ix5.0.0

# Or with yarn
yarn add -D --exact @siemens/ix-mcp@ix5.0.0
```

### Global installation

```bash
npm install -g @siemens/ix-mcp@ix5.0.0
```

## Quick Start

After successful installation you need to initialize the MCP server and provide the access token:

1. **Navigate to your project directory**:

   ```bash
   cd your-project
   ```

2. **Run initial setup**:

   ```bash
   npx @siemens/ix-mcp init
   ```

   Or if the token is already set up:

   ```bash
   npx @siemens/ix-mcp setup
   ```

   > Important: Run this command in the root of every project where you want to use the MCP server.

3. **Follow the prompts**:
  - __Token setup__: Enter your LLM token from [https://my.siemens.com/](https://my.siemens.com/) (requires 'llm' scope)
  - __Tool configuration__:
    1. Choose which tools to configure (VS Code, Cline, Zed, etc.).
    2. Logging of MCP queries and responses can be enabled
  - __Agent instructions__:
    1. Setup can add predefined instruction files to your project that guide agents how to develop with iX
    2. Symlinks/aliases can be used to help keep instruction files updated.
       > This may not work for every package manager or platform (e.g. Windows)
  - Commit the local configuration to share it (make sure it is not ignored by `.gitignore`).

4. **Restart your AI tools** (VS Code, Cline, Zed, etc.)
   - Ensure the server is running and trust the MCP server, e.g., click the "Server" icon in the
     GitHub Copilot Chat panel in VS Code.
   - **For GitHub Copilot in VS Code**: Make sure you are in Agent Mode, not Chat Mode. Use models
     like **Claude Sonnet 4.5**.

5. **Start prompting**:
   - "How do I use the search component from @siemens/ix?"
   - "Show me examples of @siemens/ix-echarts usage"
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

- **Copy the content**
  Copy the contents of the package’s `AGENTS.md` into one of the following files in
  your repo:
  - `.github/instructions/ix.instructions.md`
  - `AGENTS.md`
  - `.github/copilot-instructions.md`

If you prefer manual copy, open the package’s `AGENTS.md`, then paste it into your chosen file and
commit it. Repeat per repository whenever you want to update the instructions.

## Version selection

iX builds components for multiple technology stacks. We ship MCP packages for every technology stack, and
you need to install the npm package related to your iX package.

- For `@siemens/ix` use `@siemens/ix-mcp`
- For `@siemens/ix-angular` use `@siemens/ix-mcp-angular`
- For `@siemens/ix-react` use `@siemens/ix-mcp-react`
- For `@siemens/ix-vue` use `@siemens/ix-mcp-vue`

In this guide, instructions are provided only for `@siemens/ix-mcp`. Replace it with your technology
stack as needed.

We distribute an MCP server package `@siemens/ix-mcp` for every `@siemens/ix` version. The version of
`@siemens/ix-mcp` must match your version of `@siemens/ix`. The version number of the MCP package
`@siemens/ix-mcp` is a combination of the `@siemens/ix` version and the version of the MCP code.

For example, `@siemens/ix-mcp@5.0.0-v.1.4.8` comes with the data of `@siemens/ix@5.0.0` and
`v.1.4.8` is the version of the MCP script.

To facilitate version selection, we use
[npm distribution tags](https://docs.npmjs.com/cli/commands/npm-dist-tag) `@ix<version>` that match
the version of `@siemens/ix`. When using the corresponding distribution tag on installation, you get
the latest version of the MCP package that matches your `@siemens/ix` version and simplifies
handling in your `package.json`.

```json
"dependencies": {
    "@siemens/ix": "5.0.0",
  },
  "devDependencies": {
    "@siemens/ix-mcp": "5.0.0-v.1.4.8",
  }
```

New MCP package versions on the same `ix` version are incremented like `5.0.0-v.1.4.9`,
`5.0.0-v.1.4.10`, `5.0.0-v.1.5.0`.

## Upgrading

Simply install the package again with the updated version.


For example if you want to upgrade from iX V4 to V5:

```bash

# in project
npm install --save-dev --save-exact @siemens/ix-mcp@5.0.0

# with yarn
yarn add -D --exact @siemens/ix-mcp@5.0.0

# global
npm install -g --save-exact @siemens/ix-mcp@5.0.0
```

## Logging

By default, the server performs no logging, but you can enable local-only logging of all search queries and
retrieval results during setup.

### Manually enabling logging

In your MCP configuration, add the `--log` flag to log all search queries and retrieval results to
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

To view logs, use the `npx @siemens/ix-mcp log` command, select a relevant session, and look at either the
output or the files copied to your current working directory.

To help us improve the MCP agent, please send feedback on your MCP and agent results by creating an issue at
[https://code.siemens.com/ux/sdl-mcp/issues](https://code.siemens.com/ux/sdl-mcp/issues). Share your
details and include the relevant logs.

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

This token is used to generate embeddings for a semantic search of the documentation.
These embeddings help find relevant documentation chunks, but your AI tool
(e.g. GitHub Copilot, Claude, etc.) provides the actual LLM (language model)
that processes your queries and generates responses separately.

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

### Use within WSL (Windows Subsystem for Linux)

If you're using WSL, you need to configure the LLM token using environment variables instead of the
system keychain. Before running any commands, add the following to a `.env` file in the project root
(if you're using a project installation):

```
SDL_MCP_TOKEN_ENV=true
OPENAI_API_KEY=<your-key-here>
```

Make sure the `.env` file is in your `.gitignore` and cannot be committed.

Alternatively, or if you're using a global installation, add these to your shell profile
(`~/.zprofile` or `~/.bash_profile`):

```bash
export SDL_MCP_TOKEN_ENV=true
export OPENAI_API_KEY=<your-key-here>
```

### Connection issues

- Verify that the MCP server is running (it should start automatically)
- Restart your AI tool after configuration changes
- Verify your LLM token is valid at [https://my.siemens.com/](https://my.siemens.com/)

## Manual configuration

If you prefer to set up configuration manually, here are the required files and their contents.

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
