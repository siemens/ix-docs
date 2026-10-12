/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import type { DesignTokenManifest } from './types';

type SectionEntry = { group: string; type: string };

export const tokenTableSectionRules = {
  ColorTable: (entry: SectionEntry) =>
    entry.type === 'color' && entry.group !== 'color.border',
  BorderTable: (entry: SectionEntry) =>
    entry.type === 'color' && entry.group === 'color.border',
  ShadowTable: (entry: SectionEntry) => entry.type === 'shadow',
  TypographyTable: (entry: SectionEntry) => entry.type === 'typography',
} as const;

export type TokenTableName = keyof typeof tokenTableSectionRules;

export const tokenTableNames = Object.keys(
  tokenTableSectionRules
) as TokenTableName[];

export type TokenTableUsage = {
  table: TokenTableName;
  section?: string;
  file: string;
  line: number;
};

export function createTokenTableTagRegex(): RegExp {
  return new RegExp(
    `<(${tokenTableNames.join('|')})\\b([^>]*?)(?:\\/>|>\\s*<\\/\\1>)`,
    'g'
  );
}

function parseSectionAttribute(attributes: string): string | undefined {
  const match = attributes.match(
    /\bsection\s*=\s*(?:"([^"]*)"|'([^']*)'|\{\s*(?:"([^"]*)"|'([^']*)')\s*\})/
  );
  if (!match) {
    return undefined;
  }
  return match[1] ?? match[2] ?? match[3] ?? match[4];
}

export function extractTokenTableUsages(
  content: string,
  file: string
): TokenTableUsage[] {
  const usages: TokenTableUsage[] = [];
  for (const match of content.matchAll(createTokenTableTagRegex())) {
    usages.push({
      table: match[1] as TokenTableName,
      section: parseSectionAttribute(match[2]),
      file,
      line: content.slice(0, match.index).split('\n').length,
    });
  }
  return usages;
}

export function tokenTableSectionEntries<T extends SectionEntry>(
  entries: readonly T[],
  table: TokenTableName,
  section: string
): T[] {
  const rule = tokenTableSectionRules[table];
  return entries.filter((entry) => entry.group === section && rule(entry));
}

export function selectTokenTableSection<T extends SectionEntry>(
  entries: readonly T[],
  table: TokenTableName,
  section: string | undefined
): T[] {
  if (!section) {
    throw new Error(`${table} requires a "section" prop with a token group`);
  }
  const selected = tokenTableSectionEntries(entries, table, section);
  if (selected.length === 0) {
    throw new Error(
      `${table} section "${section}" does not match any token group allowed for ${table}`
    );
  }
  return selected;
}

export function allowedTokenTableSections(
  entries: readonly SectionEntry[],
  table: TokenTableName
): string[] {
  const rule = tokenTableSectionRules[table];
  return [...new Set(entries.filter(rule).map((entry) => entry.group))];
}

export function validateTokenTableSections(
  manifest: Pick<DesignTokenManifest, 'entries'>,
  usages: readonly TokenTableUsage[]
): string[] {
  const errors: string[] = [];
  const placements = new Map<string, TokenTableUsage>();

  for (const usage of usages) {
    const location = `${usage.file}:${usage.line}`;
    if (!usage.section) {
      errors.push(
        `${location}: <${usage.table} /> requires a "section" prop with a token group`
      );
      continue;
    }

    const allowed = allowedTokenTableSections(manifest.entries, usage.table);
    if (!allowed.includes(usage.section)) {
      errors.push(
        `${location}: <${usage.table} section="${usage.section}" /> does not match a token group. Allowed groups: ${allowed.join(', ') || '(none)'}`
      );
      continue;
    }

    const key = `${usage.table}:${usage.section}`;
    const previous = placements.get(key);
    if (previous) {
      errors.push(
        `${location}: <${usage.table} section="${usage.section}" /> is already placed at ${previous.file}:${previous.line}`
      );
      continue;
    }
    placements.set(key, usage);
  }

  for (const table of tokenTableNames) {
    for (const group of allowedTokenTableSections(manifest.entries, table)) {
      if (!placements.has(`${table}:${group}`)) {
        errors.push(
          `Token group "${group}" is not documented. Add a heading and <${table} section="${group}" /> to a docs page.`
        );
      }
    }
  }

  return errors;
}
