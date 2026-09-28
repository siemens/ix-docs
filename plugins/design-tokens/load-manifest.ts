/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { createHash } from 'node:crypto';
import { readFile, realpath } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import {
  DESIGN_TOKEN_PACKAGE,
  DesignTokenManifestError,
  parseDesignTokenManifest,
  type DesignTokenManifest,
} from '../../src/lib/design-tokens';

const manifestLoads = new Map<string, Promise<DesignTokenManifest>>();

function unavailable(detail: string, cause?: unknown): Error {
  return new Error(
    `Unable to load generated v6 design-token metadata: ${detail}. Install a compatible ${DESIGN_TOKEN_PACKAGE} package that exports "${DESIGN_TOKEN_PACKAGE}/tokens/manifest.json"; hardcoded token fallbacks are intentionally not supported.`,
    { cause }
  );
}

function isInside(parent: string, child: string): boolean {
  const relative = path.relative(parent, child);
  return (
    relative === '' ||
    (!relative.startsWith(`..${path.sep}`) &&
      relative !== '..' &&
      !path.isAbsolute(relative))
  );
}

async function findPackageRoot(resolvedPackagePath: string): Promise<string> {
  let directory = path.dirname(resolvedPackagePath);
  const filesystemRoot = path.parse(directory).root;

  while (directory !== filesystemRoot) {
    const packageJsonPath = path.join(directory, 'package.json');
    try {
      const packageJson = JSON.parse(
        await readFile(packageJsonPath, 'utf8')
      ) as { name?: unknown };
      if (packageJson.name === DESIGN_TOKEN_PACKAGE) {
        return directory;
      }
    } catch {
      // Keep walking: package entry points normally live below dist/.
    }
    directory = path.dirname(directory);
  }

  throw unavailable(
    `could not locate ${DESIGN_TOKEN_PACKAGE}/package.json from resolved path ${resolvedPackagePath}`
  );
}

async function load(siteDir: string): Promise<DesignTokenManifest> {
  const resolveFromSite = createRequire(path.join(siteDir, 'package.json'));

  let manifestPath: string;
  try {
    manifestPath = resolveFromSite.resolve(
      `${DESIGN_TOKEN_PACKAGE}/tokens/manifest.json`
    );
  } catch (error) {
    throw unavailable(
      `installed ${DESIGN_TOKEN_PACKAGE} does not expose its generated manifest`,
      error
    );
  }

  const resolvedManifestPath = await realpath(manifestPath);
  const packageRoot = await realpath(
    await findPackageRoot(resolvedManifestPath)
  );
  if (!isInside(packageRoot, resolvedManifestPath)) {
    throw unavailable(
      `resolved manifest ${resolvedManifestPath} is not from the same package as ${packageRoot}`
    );
  }

  const packageJsonPath = path.join(packageRoot, 'package.json');
  let packageJson: { name?: unknown; version?: unknown };
  let manifestJson: unknown;
  try {
    [packageJson, manifestJson] = await Promise.all([
      readFile(packageJsonPath, 'utf8').then((contents) => JSON.parse(contents)),
      readFile(resolvedManifestPath, 'utf8').then((contents) =>
        JSON.parse(contents)
      ),
    ]);
  } catch (error) {
    throw unavailable(
      'package metadata or token manifest is not valid JSON',
      error
    );
  }

  if (
    typeof packageJson.name !== 'string' ||
    typeof packageJson.version !== 'string'
  ) {
    throw unavailable(`${packageJsonPath} has no valid name and version`);
  }

  let manifest: DesignTokenManifest;
  try {
    manifest = parseDesignTokenManifest(manifestJson, {
      name: packageJson.name,
      version: packageJson.version,
    });
  } catch (error) {
    if (error instanceof DesignTokenManifestError) {
      throw unavailable(error.message, error);
    }
    throw error;
  }

  for (const asset of manifest.assets) {
    const unresolvedAssetPath = path.resolve(packageRoot, asset.path);
    if (!isInside(packageRoot, unresolvedAssetPath)) {
      throw unavailable(
        `manifest asset "${asset.path}" resolves outside the installed package`
      );
    }

    let assetPath: string;
    let assetContents: Buffer;
    try {
      assetPath = await realpath(unresolvedAssetPath);
    } catch (error) {
      throw unavailable(
        `cannot read the matching installed CSS asset "${asset.path}"`,
        error
      );
    }
    if (!isInside(packageRoot, assetPath)) {
      throw unavailable(
        `manifest asset "${asset.path}" resolves outside the installed package`
      );
    }
    try {
      assetContents = await readFile(assetPath);
    } catch (error) {
      throw unavailable(
        `cannot read the matching installed CSS asset "${asset.path}"`,
        error
      );
    }

    const digest = createHash('sha256').update(assetContents).digest('hex');
    if (digest !== asset.sha256) {
      throw unavailable(
        `SHA-256 mismatch for ${asset.path}: manifest has ${asset.sha256}, installed asset is ${digest}. Reinstall or rebuild the matching ${DESIGN_TOKEN_PACKAGE} package`
      );
    }
  }

  return manifest;
}

export function loadInstalledDesignTokenManifest(
  siteDir: string
): Promise<DesignTokenManifest> {
  const cacheKey = path.resolve(siteDir);
  let pending = manifestLoads.get(cacheKey);
  if (!pending) {
    pending = load(cacheKey);
    manifestLoads.set(cacheKey, pending);
  }
  return pending;
}
