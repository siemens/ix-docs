/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Helpers for the since and breaking change tags: shown versions, API tables, front matter.
 */

export type SemVer = {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
};

export type BreakingChangeMembers = {
  props: string[];
  events: string[];
};

/**
 * `breaking-change` front matter. Members of other components on the page are
 * prefixed with their tag (`ix-other.name`). `description` is the tooltip,
 * `source` is not shown.
 */
export type BreakingChange = {
  version: string;
  description?: string;
  properties: string[];
  events: string[];
  source: string[];
};

export type IxVersionInfo = {
  /** Major the docs are built for, see `getCurrentMajor` */
  currentMajor: number;
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

/**
 * Major the docs are built for: the major of an `IX_REPO_BRANCH` release tag,
 * otherwise (development) `currentVersion` + 1.
 */
export function getCurrentMajor(currentVersion: string, ixRepoBranch?: string) {
  const release = /^@siemens\/ix@v?(\d+)\.\d+\.\d+/.exec(
    ixRepoBranch?.trim() ?? ''
  );
  if (release) {
    return Number(release[1]);
  }

  const match = /^\s*v?(\d+)/.exec(currentVersion);
  if (!match) {
    throw new Error(
      `Invalid currentVersion "${currentVersion}" in version-deployment.json`
    );
  }
  return Number(match[1]) + 1;
}

/**
 * Since tags are shown for the docs' major and the previous one.
 */
export function isSupportedVersion(version: string, currentMajor: number) {
  const parsed = parseVersion(version);
  if (!parsed) {
    return false;
  }
  return parsed.major >= currentMajor - 1;
}

export type ApiMember = { name: string; since?: string };

export type ComponentApi = {
  props: ApiMember[];
  events: ApiMember[];
};

const sinceTagPattern = /<SinceTag\s+message=\{?\s*[`'"]([^`'"]+)[`'"]\s*\}?/;

/**
 * Properties and events (with since version) of a generated `api.mdx`
 */
export function parseApiMdx(content: string): ComponentApi {
  const read = (header: 'PropertyHeader' | 'EventHeader') =>
    Array.from(
      content.matchAll(
        new RegExp(
          `<ApiTable\\.${header}\\s+name="([^"]+)"[^>]*>([\\s\\S]*?)</ApiTable\\.${header}>`,
          'g'
        )
      ),
      ([, name, children]) => ({
        name,
        since: sinceTagPattern.exec(children)?.[1],
      })
    );

  return { props: read('PropertyHeader'), events: read('EventHeader') };
}

export const BREAKING_CHANGE_FRONT_MATTER_KEY = 'breaking-change';

/**
 * Migration guide of a major (no section, a component's changes can be spread over it)
 */
export function getMigrationGuideUrl(version: string) {
  const major = parseVersion(version)?.major;
  if (major === undefined) {
    throw new Error(`Invalid version "${version}"`);
  }
  return `/docs/home/migration/${major}_0_0`;
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

  const { version, description, properties, events, source, ...unknown } =
    value as Record<string, unknown>;
  const unknownKeys = Object.keys(unknown);
  if (unknownKeys.length > 0) {
    throw new Error(
      `Unknown "${BREAKING_CHANGE_FRONT_MATTER_KEY}" keys: ${unknownKeys.join(', ')} (allowed: version, description, properties, events, source)`
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

  const readNames = (key: string, names: unknown) => {
    if (names === undefined || names === null) {
      return [];
    }
    if (
      !Array.isArray(names) ||
      names.some((name) => typeof name !== 'string' || !name.trim())
    ) {
      throw new Error(
        `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.${key}" must be a list of names`
      );
    }
    return [...new Set(names.map((name: string) => name.trim()))];
  };

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
    properties: readNames('properties', properties),
    events: readNames('events', events),
    source: [...new Set(sources.map((entry: string) => entry.trim()))],
  };
}

/**
 * Breaking changes are only shown for the docs' major.
 */
export function isActiveBreakingChange(version: string, currentMajor: number) {
  const parsed = parseVersion(version);
  return !!parsed && parsed.major === currentMajor;
}

/**
 * `breaking-change` members by component tag, unprefixed names belong to `primaryTag`
 */
export function groupBreakingChangeMembers(
  primaryTag: string,
  breakingChange: BreakingChange
): Record<string, BreakingChangeMembers> {
  const result: Record<string, BreakingChangeMembers> = {};

  const add = (kind: keyof BreakingChangeMembers, names: string[]) => {
    for (const name of names) {
      const qualified = /^(ix-[a-z0-9-]+)\.(.+)$/.exec(name);
      const [tag, member] = qualified
        ? [qualified[1], qualified[2]]
        : [primaryTag, name];
      result[tag] ??= { props: [], events: [] };
      if (!result[tag][kind].includes(member)) {
        result[tag][kind].push(member);
      }
    }
  };

  add('props', breakingChange.properties);
  add('events', breakingChange.events);
  return result;
}

export const breakingChangeTagImport = `import { BreakingChangeTag } from '@site/src/components/UI/Tags';`;

/**
 * Remove `BreakingChangeTag`s added by `injectBreakingChangeTags`.
 */
export function removeBreakingChangeTags(content: string) {
  return content
    .split('\n')
    .filter(
      (line) =>
        line !== breakingChangeTagImport &&
        !/^\s*<BreakingChangeTag\s.*\/>\s*$/.test(line)
    )
    .join('\n');
}

/**
 * Adds `BreakingChangeTag`s to the API table headers, replacing previous ones
 */
export function injectBreakingChangeTags(
  content: string,
  version: string,
  href: string,
  members: BreakingChangeMembers
) {
  content = removeBreakingChangeTags(content);

  const tag = `<BreakingChangeTag message={\`${version}\`} href={\`${href}\`} />`;
  let changed = false;

  const inject = (
    header: 'PropertyHeader' | 'EventHeader',
    names: string[]
  ) => {
    content = content.replace(
      new RegExp(`(<ApiTable\\.${header}\\s+name="([^"]+)"[^>]*>)`, 'g'),
      (match, open: string, name: string) => {
        if (!names.includes(name)) {
          return match;
        }
        changed = true;
        return `${open}\n      ${tag}`;
      }
    );
  };

  inject('PropertyHeader', members.props);
  inject('EventHeader', members.events);

  return changed ? `${breakingChangeTagImport}\n${content}` : content;
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
  breakingChange?: { version: string; href: string; description?: string };
};

/**
 * Header tags shown for the docs' major, throws on invalid front matter
 */
export function getPageTags(
  frontMatter: Record<string, unknown>,
  currentMajor: number
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
    if (isSupportedVersion(since, currentMajor)) {
      tags.since = since.trim();
    }
  }

  const breakingChange = parseBreakingChangeFrontMatter(
    frontMatter[BREAKING_CHANGE_FRONT_MATTER_KEY]
  );
  if (
    breakingChange &&
    isActiveBreakingChange(breakingChange.version, currentMajor)
  ) {
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
