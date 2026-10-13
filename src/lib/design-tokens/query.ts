/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import type {
  DesignTokenEntry,
  DesignTokenManifest,
  DesignTokenType,
} from './types';

export type DesignTokenQuery = {
  type: DesignTokenType;
  groups?: readonly string[];
  excludeGroups?: readonly string[];
};

export function queryDesignTokens(
  manifest: DesignTokenManifest,
  query: DesignTokenQuery
): DesignTokenEntry[] {
  const groups = new Set(query.groups ?? []);
  const excludedGroups = new Set(query.excludeGroups ?? []);

  return manifest.entries.filter(
    (entry) =>
      entry.type === query.type &&
      (groups.size === 0 || groups.has(entry.group)) &&
      !excludedGroups.has(entry.group)
  );
}

export function groupDesignTokens(
  entries: readonly DesignTokenEntry[]
): Array<{ group: string; entries: DesignTokenEntry[] }> {
  const groups = new Map<string, DesignTokenEntry[]>();
  for (const entry of entries) {
    const group = groups.get(entry.group) ?? [];
    group.push(entry);
    groups.set(entry.group, group);
  }

  return [...groups].map(([group, groupedEntries]) => ({
    group,
    entries: groupedEntries,
  }));
}

export function tokenAnchor(name: string): string {
  if (!/^--si-sys-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    throw new Error(`Cannot create an anchor for invalid system token "${name}"`);
  }
  return `token-${name.slice(2)}`;
}

export function tokenGroupAnchor(group: string): string {
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(
      group
    )
  ) {
    throw new Error(`Cannot create an anchor for invalid token group "${group}"`);
  }
  return `token-group-${group.replaceAll('.', '-')}`;
}

export function formatTokenGroup(group: string): string {
  return group
    .split('.')
    .map((part) => part.replaceAll('-', ' '))
    .join(' / ')
    .replace(/(^| \/ )\w/g, (letter) => letter.toUpperCase());
}
