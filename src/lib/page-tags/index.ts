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
 * `breaking-change` front matter. `description` is the tooltip.
 */
export type BreakingChange = {
  version: string;
  description?: string;
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
 * linked by the breaking change tags of the page headers and the API tables
 */
export function getComponentMigrationGuideUrl(version: string, docId: string) {
  return `${getMigrationGuideUrl(version)}#${getDocFolder(docId)}`;
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

  const { version, description } = value as Record<string, unknown>;
  if (typeof version !== 'string' || !parseVersion(version)) {
    throw new Error(
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.version" must be a version like 6.0.0, got "${String(version)}"`
    );
  }

  return {
    version: version.trim(),
    ...(typeof description === 'string' &&
      description.trim() && { description: description.trim() }),
  };
}

export const SINCE_FRONT_MATTER_KEY = 'since';

export const DEPRECATED_FRONT_MATTER_KEY = 'deprecated';

/**
 * Link to the deprecated version, or `{ type: 'deprecated', message }`
 */
export type DeprecatedEntry = string | { type: string; message: string };

/**
 * Header tags of a page (for tabs pages from `index.mdx`, see `src/lib/page-tags/tabs.ts`)
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
 * Header tags of a page, throws on invalid front matter. The breaking change tag links
 * to the component's section of the migration guide (heading id `{#<doc folder>}`).
 */
export function getPageTags(
  frontMatter: Record<string, unknown>,
  docId: string
): PageTags {
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
      href: getComponentMigrationGuideUrl(breakingChange.version, docId),
      ...(breakingChange.description && {
        description: breakingChange.description,
      }),
    };
  }

  return tags;
}
