/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MiniSearch from 'minisearch';

export interface IconMetadata {
  id: number;
  name: string;
  categories: string[];
  tags: string[];
  description: string;
  relatedIcons: string[];
}

export interface IconSearchApi {
  search(query: string, displayable: Set<string>): string[];
  getMeta(name: string): IconMetadata | undefined;
}

const SEARCH_OPTIONS = {
  fuzzy: 0.2,
  prefix: true,
  boost: { name: 4, tags: 2, categories: 1, description: 0.5 },
} as const;

let searchApiPromise: Promise<IconSearchApi> | null = null;

async function loadMetadata(): Promise<IconMetadata[]> {
  const mod = await import('@site/icons_metadata.json');
  const data = (mod as { default?: { icons: IconMetadata[] } }).default ?? mod;
  return (data as { icons: IconMetadata[] }).icons;
}

function buildSearchApi(records: IconMetadata[]): IconSearchApi {
  const miniSearch = new MiniSearch<IconMetadata>({
    idField: 'id',
    fields: ['name', 'tags', 'categories', 'description'],
    storeFields: ['name'],
    processTerm: (term) => term.toLowerCase(),
  });
  miniSearch.addAll(records);

  const metaByName = new Map<string, IconMetadata>(
    records.map((record) => [record.name, record])
  );

  return {
    search(query, displayable) {
      const trimmed = query.trim();
      if (!trimmed) {
        return [];
      }

      return miniSearch
        .search(trimmed, SEARCH_OPTIONS)
        .map((result) => result.name as string)
        .filter((name) => displayable.has(name));
    },
    getMeta(name) {
      return metaByName.get(name);
    },
  };
}

export function getIconSearch(): Promise<IconSearchApi> {
  if (!searchApiPromise) {
    searchApiPromise = loadMetadata()
      .then(buildSearchApi)
      .catch((error) => {
        searchApiPromise = null;
        throw error;
      });
  }
  return searchApiPromise;
}
