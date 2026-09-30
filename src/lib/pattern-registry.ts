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

export type PatternRegistryFramework =
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
  patterns?: RegistryEntry[];
};

type RegistryIndex = {
  'dist-tags'?: Record<string, string>;
  versions?: Record<string, RegistryVersion>;
};

type PatternRegistryFile = {
  path: string;
};

type PatternRegistryVariant = {
  files: PatternRegistryFile[];
};

type PatternManifest = {
  name: string;
  preview?: string;
  variants?: Partial<
    Record<PatternRegistryFramework, PatternRegistryVariant>
  >;
};

export type PatternSourceResult = {
  name: string;
  version: string;
  previewUrl?: string;
  files: Partial<
    Record<PatternRegistryFramework, Record<string, string>>
  >;
  sourcePath: Partial<
    Record<PatternRegistryFramework, Record<string, string>>
  >;
};

export type GetPatternSourceOptions = {
  registryUrl?: string;
  registryTagOrVersion?: string;
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

function resolvePatternPreviewUrl(
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

  const normalizedPreviewPath = previewPath.startsWith('/')
    ? previewPath.slice(1)
    : previewPath;
  const patternBaseUrl = resolveUrl(
    `${version}/patterns/`,
    registryBaseUrl,
  );

  if (normalizedPreviewPath.includes('/ix/')) {
    const [basePath, routePath] = normalizedPreviewPath.split('/ix/');
    const basePreviewUrl = resolveUrl(basePath, patternBaseUrl);

    return `${withTrailingSlash(basePreviewUrl)}#/${routePath}`;
  }

  return resolveUrl(normalizedPreviewPath, patternBaseUrl);
}

function resolveManifestFileUrl(manifestUrl: string, filePath: string) {
  return new URL(filePath, new URL('./', manifestUrl)).toString();
}

async function fetchSourceFile(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();

    if (!text || text.includes('404: Not Found')) {
      throw new Error('not found');
    }

    return text;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Unable to fetch source file from ${url}: ${message}`);
  }
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

export async function getPatternSourceByName(
  patternName: string,
  options: GetPatternSourceOptions = {},
): Promise<PatternSourceResult> {
  const registryUrl = options.registryUrl ?? DEFAULT_IX_REGISTRY_URL;
  const registryTagOrVersion = options.registryTagOrVersion ?? 'latest';
  const registryIndex = await fetchJson<RegistryIndex>(registryUrl);
  const { version, registryVersion } = resolveRegistryVersion(
    registryIndex,
    registryTagOrVersion,
  );

  const patternEntry = registryVersion.patterns?.find(
    (entry) => entry.name === patternName,
  );

  if (!patternEntry) {
    throw new Error(`Pattern not found in registry: ${patternName}`);
  }

  const registryBaseUrl = getRegistryBaseUrl(registryUrl);
  const patternManifestUrl = resolveUrl(
    patternEntry.path,
    registryBaseUrl,
  );
  const patternManifest = await fetchJson<PatternManifest>(
    patternManifestUrl,
  );

  const sourcePath: PatternSourceResult['sourcePath'] = {};
  const files: PatternSourceResult['files'] = {};

  const variants = Object.entries(patternManifest.variants ?? {});

  await Promise.all(
    variants.map(async ([frameworkName, variant]) => {
      if (!variant?.files?.length) {
        return;
      }

      const framework = frameworkName as PatternRegistryFramework;

      sourcePath[framework] = {};
      files[framework] = {};

      await Promise.all(
        variant.files.map(async (file) => {
          sourcePath[framework][file.path] = file.path;
          files[framework][file.path] = await fetchSourceFile(
            resolveManifestFileUrl(patternManifestUrl, file.path),
          );
        }),
      );
    }),
  );

  return {
    name: patternManifest.name,
    version,
    previewUrl: resolvePatternPreviewUrl(
      patternManifest.preview,
      version,
      registryBaseUrl,
    ),
    files,
    sourcePath,
  };
}
