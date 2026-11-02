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
 * and to derive "since" and "breaking change" information from the IX repository.
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

export type BreakingChangeSection = {
  title: string;
  anchor: string;
  body: string;
};

export type BreakingChangeLink = {
  title: string;
  href: string;
};

export type BreakingChangeInfo = {
  version: string;
  docUrl: string;
  components: Record<
    string,
    {
      links: BreakingChangeLink[];
      props: string[];
      events: string[];
    }
  >;
};

export type IxPageVersionInfo = {
  /** Primary component tag of the page, e.g. `ix-blind` */
  tag: string;
  since?: string;
  breaking?: BreakingChangeLink & { version: string };
};

export type IxVersionInfo = {
  /** Version the documentation describes, e.g. `6.0.0` */
  version: string;
  /** Latest major; since tags of this and the previous (maintenance) major are shown */
  currentMajor: number;
  /** Where `version` was resolved from */
  source: 'changesets' | 'artifact' | 'package';
  branch?: string;
  breakingChanges?: BreakingChangeInfo;
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

/**
 * Major changes of a released version from a changesets generated `CHANGELOG.md`.
 * Used once the changesets of a major release are consumed.
 */
export function parseChangelogMajorChanges(
  changelog: string,
  version: string,
  pkg = IX_CORE_PACKAGE
): Changeset[] {
  const lines = changelog.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${version}`);
  if (start === -1) {
    return [];
  }

  const summary: string[] = [];
  let inMajorChanges = false;
  for (const line of lines.slice(start + 1)) {
    if (/^## /.test(line)) {
      break;
    }
    if (/^### /.test(line)) {
      inMajorChanges = line.trim() === '### Major Changes';
      continue;
    }
    if (inMajorChanges) {
      summary.push(line);
    }
  }

  const text = summary.join('\n').trim();
  return text
    ? [
        {
          name: `CHANGELOG ${version}`,
          releases: { [pkg]: 'major' },
          summary: text,
        },
      ]
    : [];
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

/**
 * Slug of a heading like GitHub renders it for markdown files.
 */
export function githubSlug(heading: string, occurrences?: Map<string, number>) {
  const base = heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');

  if (!occurrences) {
    return base;
  }

  const count = occurrences.get(base) ?? 0;
  occurrences.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}

/**
 * Split a breaking change document into its level 2 sections.
 */
export function parseBreakingChangeSections(
  markdown: string
): BreakingChangeSection[] {
  const sections: BreakingChangeSection[] = [];
  const occurrences = new Map<string, number>();
  let current: BreakingChangeSection | undefined;
  let inCodeBlock = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inCodeBlock = !inCodeBlock;
    }

    const heading = inCodeBlock
      ? null
      : /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
    if (heading) {
      const anchor = githubSlug(heading[2], occurrences);
      if (heading[1].length <= 2) {
        current =
          heading[1].length === 2
            ? { title: heading[2], anchor, body: '' }
            : undefined;
        if (current) {
          sections.push(current);
        }
        continue;
      }
    }

    if (current) {
      current.body += `${line}\n`;
    }
  }

  return sections.filter(({ title }) => title.toLowerCase() !== 'contents');
}

export function findComponentTags(text: string, knownTags: Set<string>) {
  const tags = new Set<string>();
  for (const [tag] of text.matchAll(/(?<![\w-])ix-[a-z0-9-]*[a-z0-9]/g)) {
    if (knownTags.has(tag)) {
      tags.add(tag);
    }
  }
  return tags;
}

function findInlineCode(text: string) {
  return new Set(
    Array.from(text.matchAll(/`([^`\n]+)`/g), ([, code]) => code.trim())
  );
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

/**
 * Collect breaking changes of the upcoming major version.
 *
 * A component is affected if it is mentioned in a pending major changeset and
 * described in the breaking change document. Properties and events are affected
 * if they are mentioned as inline code in a section that covers the component,
 * except members that are newly introduced with the upcoming major.
 */
export function collectBreakingChanges(options: {
  version: string;
  docUrl: string;
  changesets: Changeset[];
  breakingChangeDoc: string;
  components: Record<string, ComponentApi>;
  pkg?: string;
}): BreakingChangeInfo {
  const { version, docUrl, changesets, breakingChangeDoc, components } =
    options;
  const pkg = options.pkg ?? IX_CORE_PACKAGE;
  const major = parseVersion(version)?.major;
  const knownTags = new Set(Object.keys(components));

  const changesetTags = new Set<string>();
  changesets
    .filter((changeset) => changeset.releases[pkg] === 'major')
    .forEach((changeset) =>
      findComponentTags(changeset.summary, knownTags).forEach((tag) =>
        changesetTags.add(tag)
      )
    );

  const sections = parseBreakingChangeSections(breakingChangeDoc).map(
    (section) => ({
      ...section,
      titleTags: findComponentTags(section.title, knownTags),
      tags: findComponentTags(`${section.title}\n${section.body}`, knownTags),
      code: findInlineCode(`${section.title}\n${section.body}`),
    })
  );

  const result: BreakingChangeInfo = { version, docUrl, components: {} };

  for (const tag of changesetTags) {
    const related = sections
      .filter((section) => section.tags.has(tag))
      // Sections dedicated to the component first, then the most specific ones
      .sort(
        (a, b) =>
          Number(b.titleTags.has(tag)) - Number(a.titleTags.has(tag)) ||
          a.tags.size - b.tags.size
      );

    if (related.length === 0) {
      continue;
    }

    const isNew = (member: ApiMember) =>
      parseVersion(member.since)?.major === major;
    const affected = (members: ApiMember[]) =>
      members
        .filter((member) => !isNew(member))
        .filter((member) => related.some(({ code }) => code.has(member.name)))
        .map(({ name }) => name);

    result.components[tag] = {
      links: related.map(({ title, anchor }) => ({
        title: title.replace(/`/g, ''),
        href: `${docUrl}#${anchor}`,
      })),
      props: affected(components[tag].props),
      events: affected(components[tag].events),
    };
  }

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
  component: BreakingChangeInfo['components'][string]
) {
  content = removeBreakingChangeTags(content);

  const href = component.links[0]?.href ?? '';
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

  inject('PropertyHeader', component.props);
  inject('EventHeader', component.events);

  return changed ? `${breakingChangeTagImport}\n${content}` : content;
}
