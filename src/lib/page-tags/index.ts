/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Header tags of the doc pages: front matter validation.
 * Property and event tags of the API tables come from the siemens/ix JSDoc.
 */

export type SemVer = {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
};

/**
 * Entry of the `breaking-changes` front matter: the breaking changes of a version.
 * `description` is listed in the popover, `link` points to the migration guide or any
 * external page.
 */
export type BreakingChange = {
  version: string;
  breaking: { description: string; link: string }[];
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

export const BREAKING_CHANGES_FRONT_MATTER_KEY = 'breaking-changes';

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim() !== '';
}

/**
 * Validates `breaking-changes` front matter, throws if invalid
 */
export function parseBreakingChangesFrontMatter(
  value: unknown
): BreakingChange[] {
  const key = BREAKING_CHANGES_FRONT_MATTER_KEY;
  if (value === undefined || value === null) {
    return [];
  }
  if (!Array.isArray(value)) {
    throw new Error(`"${key}" must be a list of { version, breaking } entries`);
  }

  return value.map((entry, i) => {
    const { version, breaking } = (entry ?? {}) as Record<string, unknown>;
    if (typeof version !== 'string' || !parseVersion(version)) {
      throw new Error(
        `"${key}[${i}].version" must be a version like 6.0.0, got "${String(version)}"`
      );
    }
    if (!Array.isArray(breaking) || breaking.length === 0) {
      throw new Error(
        `"${key}[${i}].breaking" must be a non-empty list of { description, link } entries`
      );
    }

    return {
      version: version.trim(),
      breaking: breaking.map((item, j) => {
        const { description, link } = (item ?? {}) as Record<string, unknown>;
        if (!isNonEmptyString(description) || !isNonEmptyString(link)) {
          throw new Error(
            `"${key}[${i}].breaking[${j}]" needs a description and a link`
          );
        }
        return { description: description.trim(), link: link.trim() };
      }),
    };
  });
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
  breakingChanges?: BreakingChange[];
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

  const breakingChanges = parseBreakingChangesFrontMatter(
    frontMatter[BREAKING_CHANGES_FRONT_MATTER_KEY]
  );
  if (breakingChanges.length > 0) {
    tags.breakingChanges = breakingChanges;
  }

  return tags;
}
