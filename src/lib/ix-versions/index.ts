/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Pure helpers to resolve which IX versions are shown (major of the docs + previous major),
 * to read "since" information of the IX repository and the "breaking change"
 * front matter of the doc pages.
 *
 * Used by `scripts/prepare-ix-versions.ts` (build time) and by the tag components (runtime).
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
 * `breaking-change` front matter of a doc page (`docs/components/<name>/index.mdx`).
 * Properties and events of the page's primary component are listed by name,
 * those of other components on the page as `ix-other-component.name`.
 * Optional: `description` summarizes the breaking changes in one line (shown as tooltip
 * of the component tag), `source` names what the entry is based on, e.g. links to
 * changesets or a note like "new xyz property".
 */
export type BreakingChange = {
  version: string;
  description?: string;
  properties: string[];
  events: string[];
  source: string[];
};

export type IxPageVersionInfo = {
  /** Primary component tag of the page, e.g. `ix-blind` (if it has API tables) */
  tag?: string;
  since?: string;
  breaking?: { version: string; href: string; description?: string };
};

export type IxVersionInfo = {
  /**
   * Major the docs are built for, see `getCurrentMajor`.
   * Since tags of this and the previous major are shown, breaking changes of this major only.
   */
  currentMajor: number;
  /** Latest breaking change version shown on any page */
  breakingChanges?: { version: string; docUrl: string };
  /** Keyed by doc directory, e.g. `components/blind` */
  pages: Record<string, IxPageVersionInfo>;
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
 * Major the docs are built for:
 * - Release builds (`IX_REPO_BRANCH` is a release tag like `@siemens/ix@7.0.1`): major of the tag.
 * - Development and pull request builds (`main`, `pull/123`, ...): the next major after
 *   `currentVersion` (e.g. `v6`) of `version-deployment.json`, which is bumped when a major is released.
 */
export function getCurrentMajor(
  currentVersion: string,
  ixRepoBranch?: string
) {
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
 * Version info of a page by doc id (`components/blind/code`) or URL (`/base/docs/components/blind`).
 * Pages are keyed by doc directory, so the path itself or its parent is matched.
 */
export function findPageVersionInfo(
  pages: Record<string, IxPageVersionInfo>,
  pathOrId: string | undefined
): IxPageVersionInfo | undefined {
  if (!pathOrId) {
    return undefined;
  }

  const key = pathOrId
    .split(/[?#]/)[0]
    .replace(/^.*?\/docs\//, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\/index$/, '');
  const parent = key.split('/').slice(0, -1).join('/');

  return pages[key] ?? (parent ? pages[parent] : undefined);
}

/**
 * Since tags are shown for the major the docs are built for and the previous major
 * (e.g. 7.x.x and 6.x.x for released v7 docs, or while working on v7), older majors are hidden.
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
 * Read properties and events (incl. their since version) from a generated `api.mdx`.
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

/**
 * Read the component level since version from a generated `tags.mdx`.
 */
export function parseComponentSince(content: string) {
  return sinceTagPattern.exec(content)?.[1];
}

export const BREAKING_CHANGE_FRONT_MATTER_KEY = 'breaking-change';

/**
 * Migration guide of a major version (`docs/home/migration/<major>_0_0`). Not linked
 * to a section on purpose, the changes of a component can be spread over the guide.
 */
export function getMigrationGuideUrl(version: string) {
  const major = parseVersion(version)?.major;
  if (major === undefined) {
    throw new Error(`Invalid version "${version}"`);
  }
  return `/docs/home/migration/${major}_0_0`;
}

/**
 * Validate the `breaking-change` front matter of a doc page.
 * Returns `undefined` if not set, throws if invalid.
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
      `"${BREAKING_CHANGE_FRONT_MATTER_KEY}.source" must be a text or a list of texts, e.g. a link to the changeset or a note like "new xyz property"`
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
 * Breaking changes are only shown for the major the docs are built for
 * (e.g. 7.0.0 for released v7 docs, or while working on v7).
 */
export function isActiveBreakingChange(version: string, currentMajor: number) {
  const parsed = parseVersion(version);
  return !!parsed && parsed.major >= currentMajor;
}

/**
 * Members of a `breaking-change` front matter by component tag.
 * Unqualified names belong to the primary component of the page.
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
 * Add `BreakingChangeTag`s to the property and event headers of a generated `api.mdx`.
 * Previously added tags are replaced.
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
