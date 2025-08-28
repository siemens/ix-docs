# Contributing to Siemens Industrial Experience Docs

> Thank you for your interest in contributing! This documentation site supports the Siemens Industrial Experience (IX) design system. We welcome improvements to docs, blog posts, scripts, and plugins.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [How to Contribute](#how-to-contribute)
3. [Getting Started](#getting-started)
4. [Development Workflows](#development-workflows)
5. [Pull Request Process](#pull-request-process)
6. [Code of Conduct](#code-of-conduct)
7. [Additional Resources](#additional-resources)

---

## Prerequisites

Before contributing, ensure you have the required tokens and permissions:

### GitHub Token

A valid `GITHUB_TOKEN` is required to build or start the documentation site (`pnpm start` / `pnpm build`). This token accesses artifacts from the [siemens/ix](https://github.com/siemens/ix) repository, which contains the source code and example implementations that are downloaded during the build process to provide live code examples and previews in the documentation.

**Important for Contributors:**

- Examples (code and preview) are automatically provided via artifacts from the [siemens/ix](https://github.com/siemens/ix) repository during the start and build process
- If your contribution depends on new or updated examples from the `siemens/ix` repo, those changes must be merged into the main branch of `siemens/ix` before your documentation PR can be built and reviewed.
- Non-maintainers should ensure their example changes are accepted upstream first, then reference them in their documentation PR here.

### Figma API Token (Optional)

For updating Figma design assets, you'll need a `FIGMA_API_TOKEN` with appropriate permissions.

### Environment Setup

Create a `.env` file in the project root with the required tokens:

```env
GITHUB_TOKEN=your-github-token-here
FIGMA_API_TOKEN=your-figma-api-token-here  # Optional, only for Figma updates
```

---

## How to Contribute

There are several ways to contribute to this project:

- **🐛 Report Issues:** Use [GitHub Issues](https://github.com/siemens/ix-docs/issues) for bugs, suggestions, or feature requests.
- **📝 Improve Documentation:** Spot errors or outdated info? Please update and submit corrections.
- **📖 Add Blog Posts:** Share insights, tutorials, or announcements via blog posts.
- **🔧 Enhance Scripts/Plugins:** Improve tooling in `scripts/` or `plugins/` directories.
- **💡 Share Examples:** Add use cases or demos to help others.

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ix-docs.git
   cd ix-docs
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Set up environment** (see [Prerequisites](#prerequisites) for token setup).
5. **Create a branch** for your changes:
   ```bash
   git checkout -b my-feature-branch
   ```
6. **Make your changes** following the patterns below.

## Development Workflows

### Documentation Changes

- Edit or add Markdown files in `docs/`
- Component docs follow this structure:
  - `docs/components/[component-name]/index.md` - Basic headline information
  - `docs/components/[component-name]/guide.md` - Design system usage and guidelines
  - `docs/components/[component-name]/code.mdx` - Development examples and APIs
- Test locally: `pnpm start`

### Blog Posts

- Create `blog/YYYY-MM-DD-title/index.md` with images in the same folder
- Follow existing post structure and frontmatter

### Scripts and Plugins

- Update files in `scripts/` or `plugins/` as needed
- Test changes with `pnpm build` and `pnpm start`

### Testing Your Changes

- **Build:** `pnpm build`
- **Local dev:** `pnpm start` (serves at http://localhost:3000)
- **Lint:** `pnpm lint`

### Updating Figma Images

If you need to refresh Figma design assets:

1. Ensure you have a valid `FIGMA_API_TOKEN` in your `.env` file (see [Prerequisites](#prerequisites)).

2. Update all Figma images in Markdown files:

   ```bash
   pnpm update-figma '**/*.md?(x)'
   ```

3. Or update specific files:

   ```bash
   pnpm update-figma 'docs/components/button/guide.md'
   ```

4. Commit the updated images and references as part of your PR.

The script downloads new images and replaces outdated ones in the `static/figma/` directory based on Figma asset references in your docs.

## Pull Request Process

1. **Prepare your changes:**

   - Ensure your changes build successfully (`pnpm build`)
   - Test locally with `pnpm start`
   - Run linting (`pnpm lint`)

2. **Commit and push:**

   ```bash
   git add .
   git commit -m "Clear description of your changes"
   git push origin my-feature-branch
   ```

3. **Open a Pull Request** on GitHub:

   - Clearly describe your changes in the PR description
   - Reference related issues (e.g., `Closes #123`)
   - For major changes, discuss via an issue first

4. **Review process:**
   - Respond to review feedback promptly
   - Make requested changes and push updates
   - Your PR will be merged once approved

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

## Additional Resources

- **[README.md](./README.md):** Project overview & setup instructions
- **[MAINTAINERS.md](./MAINTAINERS.md):** Maintainer contact information
- **[SECURITY.md](./SECURITY.md):** Security policies and reporting
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md):** Community guidelines

For troubleshooting Figma integration or advanced usage, see the comments in `plugins/figma-pictures/figma.ts` and related scripts.
