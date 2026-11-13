/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Header tags of the doc pages: front matter validation and migration guide links.
 * Property and event tags of the API tables come from the siemens/ix JSDoc.
 */

export type SemVer = {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
};

/**
 * `breaking-change` front matter. `description` is the tooltip, `source` is not shown.
 */
export type BreakingChange = {
  version: string;
  description?: string;
  source: string[];
};

export function parseVersion(
  version: string | undefined | null
): SemVer | null {
  const match = /^\s*v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?\s*$/.exec(
    version ?? ''
  );
  if (!match) {
    return null;
  }
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    prerelease: match[4],
  };
}

export const BREAKING_CHANGE_FRONT_MATTER_KEY = 'breaking-change';

/**
 * Migration guide of a major, see `getComponentMigrationGuideUrl` for a component's section
 */
export function getMigrationGuideUrl(version: string) {
  const major = parseVersion(version)?.major;
  if (major === undefined) {
    throw new Error(`Invalid version "${version}"`);
  }
  return `/docs/home/migration/${major}_0_0`;
}

/**
 * Folder of a doc (`components/card/code` -> `card`), the heading id of the
 * component's section in the migration guides
 */
export function getDocFolder(docId: string) {
  return docId.split('/').slice(-2)[0];
}

/**
 * Component's section of a major's migration guide (heading id `{#<doc folder>}`),
 * linked by the breaking change tags of the API tables
 */
export function getComponentMigrationGuideUrl(version: string, docId: string) {
  return `${getMigrationGuideUrl(version)}#${getDocFolder(docId)}`;
}

/**
 * Versions of the breaking change tags in generated API tables (`@breaking-change` JSDoc)
 */
export function findApiBreakingChangeVersions(apiMarkdown: string) {
  return [
    ...new Set(
      Array.from(
        apiMarkdown.matchAll(/<BreakingChangeTag\s+message=\{`([^`]+)`\}/g),
        ([, version]) => version
      )
    ),
  ];
}

/**
 * Validates `breaking-change` front matter, throws if invalid
 */
export function parseBreakingChangeFrontMatter(
  value: unknown
): BreakingChange | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}" must contain a "version" field`
    );
  }

  const { version, description, source, ...unknown } = value as Record<
    string,
    unknown
  >;
  const unknownKeys = Object.keys(unknown);
  if (unknownKeys.length > 0) {
    throw new Error(
      `Unknown "${BREAKING_CHANGE_FRONT_MATTER_KEY}" keys: ${unknownKeys.join(', ')} (allowed: version, description, source)`
    );
  }
  if (typeof version !== 'string' || !parseVersion(version)) {
    throw new Error(
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.version" must be a version like 6.0.0, got "${String(version)}"`
    );
  }

  const hasDescription = description !== undefined && description !== null;
  if (
    hasDescription &&
    (typeof description !== 'string' ||
      !description.trim() ||
      /[\r\n]/.test(description.trim()))
  ) {
    throw new Error(
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.description" must be a single-line summary of the breaking changes`
    );
  }

  const sources =
    source === undefined || source === null
      ? []
      : typeof source === 'string'
        ? [source]
        : source;
  if (
    !Array.isArray(sources) ||
    sources.some((entry) => typeof entry !== 'string' || !entry.trim())
  ) {
    throw new Error(
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.source" must be a text or a list of texts`
    );
  }

  return {
    version: version.trim(),
    ...(hasDescription ? { description: (description as string).trim() } : {}),
    source: [...new Set(sources.map((entry: string) => entry.trim()))],
  };
}

export const SINCE_FRONT_MATTER_KEY = 'since';

export const DEPRECATED_FRONT_MATTER_KEY = 'deprecated';

/**
 * Link to the deprecated version, or `{ type: 'deprecated', message }`
 */
export type DeprecatedEntry = string | { type: string; message: string };

/** Front matter keys of the header tags */
export const PAGE_TAG_FRONT_MATTER_KEYS = [
  DEPRECATED_FRONT_MATTER_KEY,
  'formReady',
  SINCE_FRONT_MATTER_KEY,
  BREAKING_CHANGE_FRONT_MATTER_KEY,
] as const;

/**
 * Header tags of a page (for tabs pages from `index.mdx`, see `sidebars.ts`)
 */
export type PageTags = {
  deprecated?: DeprecatedEntry[];
  formReady?: boolean;
  since?: string;
  breakingChange?: {
    version: string;
    href: string;
    description?: string;
  };
};

/**
 * Header tags of a page, throws on invalid front matter
 */
export function getPageTags(frontMatter: Record<string, unknown>): PageTags {
  const tags: PageTags = {};

  const deprecated = frontMatter[DEPRECATED_FRONT_MATTER_KEY];
  if (deprecated !== undefined && deprecated !== null) {
    if (
      !Array.isArray(deprecated) ||
      deprecated.some(
        (entry) =>
          typeof entry !== 'string' &&
          (typeof entry !== 'object' ||
            entry === null ||
            typeof entry.type !== 'string' ||
            typeof entry.message !== 'string')
      )
    ) {
      throw new Error(
        `"${DEPRECATED_FRONT_MATTER_KEY}" must be a list of links or { type, message } entries`
      );
    }
    if (deprecated.length > 0) {
      tags.deprecated = deprecated;
    }
  }

  if (frontMatter.formReady === true) {
    tags.formReady = true;
  }

  const since = frontMatter[SINCE_FRONT_MATTER_KEY];
  if (since !== undefined && since !== null) {
    if (typeof since !== 'string' || !parseVersion(since)) {
      throw new Error(
        `"${SINCE_FRONT_MATTER_KEY}" must be a version like 6.0.0, got "${String(since)}"`
      );
    }
    tags.since = since.trim();
  }

  const breakingChange = parseBreakingChangeFrontMatter(
    frontMatter[BREAKING_CHANGE_FRONT_MATTER_KEY]
  );
  if (breakingChange) {
    tags.breakingChange = {
      version: breakingChange.version,
      href: getMigrationGuideUrl(breakingChange.version),
      ...(breakingChange.description && {
        description: breakingChange.description,
      }),
    };
  }

  return tags;
}

/**
 * Headings of a markdown page with their ids like Docusaurus: the explicit id
 * `{#id}` or the slug of the text. Skips code blocks.
 */
function parseHeadings(
  markdown: string,
  createSlug: () => (text: string) => string
) {
  const slug = createSlug();
  const headings: {
    level: number;
    text: string;
    anchor: string;
    explicit: boolean;
  }[] = [];
  let inFence = false;

  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    const heading = inFence ? null : /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (!heading) {
      continue;
    }

    const explicitId = /\s*\{#([^}]+)\}$/.exec(heading[2]);
    const text = heading[2]
      .replace(/\s*\{#[^}]+\}$/, '')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/`/g, '');
    headings.push({
      level: heading[1].length,
      text,
      anchor: explicitId?.[1] ?? slug(text),
      explicit: !!explicitId,
    });
  }

  return headings;
}

/**
 * Whether a markdown page has a heading with the id (explicit `{#id}` or slug)
 */
export function hasHeadingId(
  markdown: string,
  id: string,
  createSlug: () => (text: string) => string
) {
  return parseHeadings(markdown, createSlug).some(
    ({ anchor }) => anchor === id
  );
}

/**
 * Anchor of a component's section in a migration guide: a heading with the explicit id
 * `{#<doc folder>}`, otherwise a heading with the page title in "Migration by component".
 * `createSlug` must create heading ids like Docusaurus (`createSlugger` of `@docusaurus/utils`).
 */
export function findMigrationGuideAnchor(
  markdown: string,
  page: { folder: string; title: string },
  createSlug: () => (text: string) => string
) {
  let inComponents = false;
  let titleMatch: { level: number; anchor: string } | undefined;

  for (const { level, text, anchor, explicit } of parseHeadings(
    markdown,
    createSlug
  )) {
    if (anchor === page.folder && explicit) {
      return anchor;
    }
    if (level === 2) {
      inComponents = /^migration by component/i.test(text);
    } else if (
      inComponents &&
      text.toLowerCase() === page.title.toLowerCase() &&
      (!titleMatch || level > titleMatch.level)
    ) {
      titleMatch = { level, anchor };
    }
  }

  return titleMatch?.anchor;
}

/**
 * Whether a migration guide lists changes per component ("Migration by component")
 */
export function hasComponentMigrationSection(markdown: string) {
  return /^##\s+Migration by component/im.test(markdown);
}
