/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const DEFAULT_IX_REGISTRY_URL =
  'https://siemens.github.io/ix/registry.json';

export type BlockRegistryFramework =
  | 'angular'
  | 'angular-standalone'
  | 'react'
  | 'vue'
  | 'html';

type RegistryEntry = {
  name: string;
  path: string;
};

type RegistryVersion = {
  blocks?: RegistryEntry[];
};

type RegistryIndex = {
  'dist-tags'?: Record<string, string>;
  versions?: Record<string, RegistryVersion>;
};

type RegistryFile = {
  target: string;
  source: string;
};

type RegistryVariant = {
  files: RegistryFile[];
};

type BlockManifest = {
  name: string;
  preview?: string;
  variants?: Partial<Record<BlockRegistryFramework, RegistryVariant>>;
};

export type BlockSourceResult = {
  name: string;
  version: string;
  previewUrl?: string;
  files: Partial<Record<BlockRegistryFramework, Record<string, string>>>;
  sourcePath: Partial<Record<BlockRegistryFramework, Record<string, string>>>;
};

export type GetBlockSourceOptions = {
  registryUrl?: string;
  registryTagOrVersion?: string;
  sourceBaseUrls?: string[];
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to fetch JSON from ${url}`);
  }

  return (await response.json()) as T;
}

function withTrailingSlash(value: string) {
  return value.endsWith('/') ? value : `${value}/`;
}

function resolveUrl(path: string, baseUrl: string) {
  return new URL(path, withTrailingSlash(baseUrl)).toString();
}

function getRegistryBaseUrl(registryUrl: string) {
  return new URL('./', registryUrl).toString();
}

function resolveBlockPreviewUrl(
  previewPath: string | undefined,
  version: string,
  registryBaseUrl: string,
) {
  if (!previewPath) {
    return undefined;
  }

  if (previewPath.startsWith('http://') || previewPath.startsWith('https://')) {
    return previewPath;
  }

  const normalizedPreviewPath = sanitizeSourcePath(previewPath);
  const blockBaseUrl = resolveUrl(`${version}/blocks/`, registryBaseUrl);

  if (normalizedPreviewPath.includes('/ix/')) {
    const [basePath, routePath] = normalizedPreviewPath.split('/ix/');
    const basePreviewUrl = resolveUrl(basePath, blockBaseUrl);

    return `${withTrailingSlash(basePreviewUrl)}#/${routePath}`;
  }

  return resolveUrl(normalizedPreviewPath, blockBaseUrl);
}

function sanitizeSourcePath(sourcePath: string) {
  return sourcePath.startsWith('/') ? sourcePath.slice(1) : sourcePath;
}

function getSourceCandidates(
  sourcePath: string,
  version: string,
  registryBaseUrl: string,
  sourceBaseUrls?: string[],
) {
  if (sourcePath.startsWith('http://') || sourcePath.startsWith('https://')) {
    return [sourcePath];
  }

  const normalizedSourcePath = sanitizeSourcePath(sourcePath);

  if (sourceBaseUrls && sourceBaseUrls.length > 0) {
    return sourceBaseUrls.map((baseUrl) =>
      resolveUrl(normalizedSourcePath, baseUrl),
    );
  }

  return [
    resolveUrl(`${version}/blocks/${normalizedSourcePath}`, registryBaseUrl),
    resolveUrl(`blocks/${normalizedSourcePath}`, registryBaseUrl),
  ];
}

async function fetchFirstSuccessfulText(urls: string[]) {
  const errors: string[] = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        errors.push(`${url} (${response.status})`);
        continue;
      }

      const text = await response.text();

      if (!text || text.includes('404: Not Found')) {
        errors.push(`${url} (not found)`);
        continue;
      }

      return text;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${url} (${message})`);
    }
  }

  throw new Error(`Unable to fetch source file. Tried: ${errors.join(', ')}`);
}

function resolveRegistryVersion(
  registryIndex: RegistryIndex,
  registryTagOrVersion: string,
) {
  const version =
    registryIndex['dist-tags']?.[registryTagOrVersion] ?? registryTagOrVersion;

  const registryVersion = registryIndex.versions?.[version];

  if (!registryVersion) {
    throw new Error(`Registry version not found: ${registryTagOrVersion}`);
  }

  return { version, registryVersion };
}

export async function getBlockSourceByName(
  blockName: string,
  options: GetBlockSourceOptions = {},
): Promise<BlockSourceResult> {
  const registryUrl = options.registryUrl ?? DEFAULT_IX_REGISTRY_URL;
  const registryTagOrVersion = options.registryTagOrVersion ?? 'latest';
  const registryIndex = await fetchJson<RegistryIndex>(registryUrl);
  const { version, registryVersion } = resolveRegistryVersion(
    registryIndex,
    registryTagOrVersion,
  );

  const blockEntry = registryVersion.blocks?.find(
    (entry) => entry.name === blockName,
  );

  if (!blockEntry) {
    throw new Error(`Block not found in registry: ${blockName}`);
  }

  const registryBaseUrl = getRegistryBaseUrl(registryUrl);
  const blockManifestUrl = resolveUrl(blockEntry.path, registryBaseUrl);
  const blockManifest = await fetchJson<BlockManifest>(blockManifestUrl);

  const sourcePath: BlockSourceResult['sourcePath'] = {};
  const files: BlockSourceResult['files'] = {};

  const variants = Object.entries(blockManifest.variants ?? {});

  await Promise.all(
    variants.map(async ([frameworkName, variant]) => {
      if (!variant?.files?.length) {
        return;
      }

      const framework = frameworkName as BlockRegistryFramework;

      sourcePath[framework] = {};
      files[framework] = {};

      await Promise.all(
        variant.files.map(async ({ target, source }) => {
          sourcePath[framework][target] = source;

          const candidates = getSourceCandidates(
            source,
            version,
            registryBaseUrl,
            options.sourceBaseUrls,
          );

          files[framework][target] = await fetchFirstSuccessfulText(candidates);
        }),
      );
    }),
  );

  return {
    name: blockManifest.name,
    version,
    previewUrl: resolveBlockPreviewUrl(
      blockManifest.preview,
      version,
      registryBaseUrl,
    ),
    files,
    sourcePath,
  };
}
