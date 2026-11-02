/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Pure helpers to resolve which IX versions are supported (latest + maintenance)
 * and to derive "since" information from the IX repository.
 *
 * Used by `scripts/prepare-ix-versions.ts` (build time) and by the tag components (runtime).
 */

export type SemVer = {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
};

export type ChangesetBump = 'major' | 'minor' | 'patch';

export type Changeset = {
  name: string;
  releases: Record<string, ChangesetBump>;
  summary: string;
};

export type IxPageVersionInfo = {
  /** Primary component tag of the page, e.g. `ix-blind` */
  tag: string;
  since?: string;
};

export type IxVersionInfo = {
  /** Version the documentation describes, e.g. `6.0.0` */
  version: string;
  /** Latest major; since tags of this and the previous (maintenance) major are shown */
  currentMajor: number;
  /** Where `version` was resolved from */
  source: 'changesets' | 'artifact' | 'package';
  branch?: string;
  /** Keyed by doc directory, e.g. `components/blind` */
  pages: Record<string, IxPageVersionInfo>;
};

export const IX_CORE_PACKAGE = '@siemens/ix';

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
 * Only the latest major and the previous (maintenance) major are supported,
 * every older major is end of life. Newer majors (e.g. preview docs) are always shown.
 */
export function isSupportedVersion(version: string, currentMajor: number) {
  const parsed = parseVersion(version);
  if (!parsed) {
    return false;
  }
  return parsed.major >= currentMajor - 1;
}

export function parseChangeset(
  name: string,
  content: string
): Changeset | null {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(content);
  if (!match) {
    return null;
  }

  const releases: Record<string, ChangesetBump> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const release =
      /^\s*['"]?([^'"]+?)['"]?\s*:\s*(major|minor|patch)\s*$/.exec(line);
    if (release) {
      releases[release[1]] = release[2] as ChangesetBump;
    }
  }

  return { name, releases, summary: match[2].trim() };
}

const bumpOrder: ChangesetBump[] = ['patch', 'minor', 'major'];

/**
 * Resolve the version that will be released from the current package version
 * and the pending changesets (same logic as `changeset version`).
 */
export function getUpcomingVersion(
  currentVersion: string,
  changesets: Changeset[],
  pkg = IX_CORE_PACKAGE
): string {
  const parsed = parseVersion(currentVersion);
  if (!parsed) {
    throw new Error(`Invalid version "${currentVersion}"`);
  }

  // Pre-release mode: the upcoming release is the version without pre-release suffix
  if (parsed.prerelease) {
    return `${parsed.major}.${parsed.minor}.${parsed.patch}`;
  }

  const bump = changesets
    .map((changeset) => changeset.releases[pkg])
    .filter(Boolean)
    .reduce<ChangesetBump | undefined>(
      (max, current) =>
        !max || bumpOrder.indexOf(current) > bumpOrder.indexOf(max)
          ? current
          : max,
      undefined
    );

  switch (bump) {
    case 'major':
      return `${parsed.major + 1}.0.0`;
    case 'minor':
      return `${parsed.major}.${parsed.minor + 1}.0`;
    case 'patch':
      return `${parsed.major}.${parsed.minor}.${parsed.patch + 1}`;
    default:
      return `${parsed.major}.${parsed.minor}.${parsed.patch}`;
  }
}

const sinceTagPattern = /<SinceTag\s+message=\{?\s*[`'"]([^`'"]+)[`'"]\s*\}?/;

/**
 * Read the component level since version from a generated `tags.mdx`.
 */
export function parseComponentSince(content: string) {
  return sinceTagPattern.exec(content)?.[1];
}
