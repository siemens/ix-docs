/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import {
  DESIGN_TOKEN_CONTRACT,
  DESIGN_TOKEN_PACKAGE,
  DESIGN_TOKEN_SCHEMA_VERSION,
  type DesignTokenEntry,
  type DesignTokenManifest,
  type DesignTokenSourceType,
  type DesignTokenType,
  designTokenSourceTypes,
  designTokenTypes,
} from './types';

type JsonObject = Record<string, unknown>;

const sourceTypeByType: Record<DesignTokenType, DesignTokenSourceType> = {
  color: 'color',
  shadow: 'shadow',
  typography: 'typography',
  sizing: 'dimension',
};

const expectedAssetPaths = {
  dark: 'dist/siemens-ix/theme/classic-dark.css',
  light: 'dist/siemens-ix/theme/classic-light.css',
} as const;

export class DesignTokenManifestError extends Error {
  constructor(detail: string) {
    super(
      `Invalid design-token manifest from ${DESIGN_TOKEN_PACKAGE}: ${detail}`
    );
    this.name = 'DesignTokenManifestError';
  }
}

function fail(detail: string): never {
  throw new DesignTokenManifestError(detail);
}

function objectAt(value: unknown, location: string): JsonObject {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    fail(`${location} must be an object`);
  }
  return value as JsonObject;
}

function arrayAt(value: unknown, location: string): unknown[] {
  if (!Array.isArray(value)) {
    fail(`${location} must be an array`);
  }
  return value;
}

function stringAt(value: unknown, location: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${location} must be a non-empty string`);
  }
  return value;
}

function assertExactKeys(
  value: JsonObject,
  expectedKeys: readonly string[],
  location: string
) {
  const actualKeys = Object.keys(value).sort();
  const sortedExpectedKeys = [...expectedKeys].sort();
  if (
    actualKeys.length !== sortedExpectedKeys.length ||
    actualKeys.some((key, index) => key !== sortedExpectedKeys[index])
  ) {
    fail(
      `${location} must contain exactly: ${sortedExpectedKeys.join(', ')} (received: ${actualKeys.join(', ')})`
    );
  }
}

function assertKeysWithOptional(
  value: JsonObject,
  requiredKeys: readonly string[],
  optionalKeys: readonly string[],
  location: string
) {
  const actualKeys = Object.keys(value);
  const allowedKeys = new Set([...requiredKeys, ...optionalKeys]);
  const missingKeys = requiredKeys.filter((key) => !(key in value));
  const unknownKeys = actualKeys.filter((key) => !allowedKeys.has(key));
  if (missingKeys.length > 0 || unknownKeys.length > 0) {
    fail(
      `${location} is missing [${missingKeys.join(', ')}] or has unknown keys [${unknownKeys.join(', ')}]`
    );
  }
}

function assertExactStringArray(
  value: unknown,
  expected: readonly string[],
  location: string
) {
  const values = arrayAt(value, location);
  if (
    values.length !== expected.length ||
    values.some((item, index) => item !== expected[index])
  ) {
    fail(`${location} must be [${expected.join(', ')}] in that order`);
  }
}

function validatePackage(
  value: unknown,
  installedPackage: { name: string; version: string }
) {
  const packageMetadata = objectAt(value, 'package');
  assertExactKeys(packageMetadata, ['name', 'version'], 'package');

  if (packageMetadata.name !== DESIGN_TOKEN_PACKAGE) {
    fail(`package.name must be "${DESIGN_TOKEN_PACKAGE}"`);
  }
  if (installedPackage.name !== DESIGN_TOKEN_PACKAGE) {
    fail(
      `installed package identity is "${installedPackage.name}", expected "${DESIGN_TOKEN_PACKAGE}"`
    );
  }

  const manifestVersion = stringAt(packageMetadata.version, 'package.version');
  if (manifestVersion !== installedPackage.version) {
    fail(
      `package.version "${manifestVersion}" does not match installed ${DESIGN_TOKEN_PACKAGE} version "${installedPackage.version}"; install the matching package instead of using stale metadata`
    );
  }
}

function validateProvenance(value: unknown) {
  const provenance = objectAt(value, 'provenance');
  assertExactKeys(
    provenance,
    ['tokenSourceVersion', 'tokenBuildId'],
    'provenance'
  );
  stringAt(provenance.tokenSourceVersion, 'provenance.tokenSourceVersion');
  const buildId = stringAt(
    provenance.tokenBuildId,
    'provenance.tokenBuildId'
  );
  if (!/^[a-f0-9]{64}$/.test(buildId)) {
    fail('provenance.tokenBuildId must be a lowercase SHA-256 digest');
  }
}

function validateCoverage(value: unknown) {
  const coverage = objectAt(value, 'coverage');
  assertExactKeys(coverage, ['modes', 'densities'], 'coverage');
  assertExactStringArray(coverage.modes, ['dark', 'light'], 'coverage.modes');

  const densities = arrayAt(coverage.densities, 'coverage.densities');
  if (densities.length !== 2) {
    fail(
      'coverage.densities must describe default base and compact sparse override'
    );
  }

  const defaultDensity = objectAt(densities[0], 'coverage.densities[0]');
  assertExactKeys(defaultDensity, ['name', 'kind'], 'coverage.densities[0]');
  if (defaultDensity.name !== 'default' || defaultDensity.kind !== 'base') {
    fail('coverage.densities[0] must be the default base density');
  }

  const compactDensity = objectAt(densities[1], 'coverage.densities[1]');
  assertExactKeys(
    compactDensity,
    ['name', 'kind', 'inherits'],
    'coverage.densities[1]'
  );
  if (
    compactDensity.name !== 'compact' ||
    compactDensity.kind !== 'sparse-override' ||
    compactDensity.inherits !== 'default'
  ) {
    fail(
      'coverage.densities[1] must be the compact sparse override inheriting default'
    );
  }
}

function validateEntry(value: unknown, index: number): DesignTokenEntry {
  const location = `entries[${index}]`;
  const entry = objectAt(value, location);
  assertKeysWithOptional(
    entry,
    [
      'name',
      'sourcePath',
      'group',
      'type',
      'sourceType',
      'applicability',
    ],
    ['description'],
    location
  );

  const name = stringAt(entry.name, `${location}.name`);
  const sourcePath = stringAt(entry.sourcePath, `${location}.sourcePath`);
  const group = stringAt(entry.group, `${location}.group`);
  const description =
    entry.description === undefined
      ? undefined
      : stringAt(entry.description, `${location}.description`);

  if (!/^--si-sys-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    fail(
      `${location}.name "${name}" must be a lowercase --si-sys-* custom property`
    );
  }
  if (
    !/^si\.sys\.[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(
      sourcePath
    )
  ) {
    fail(
      `${location}.sourcePath "${sourcePath}" must be a logical si.sys token path without filesystem or template data`
    );
  }
  if (`--${sourcePath.replaceAll('.', '-')}` !== name) {
    fail(
      `${location}.name "${name}" is not deterministically derived from sourcePath "${sourcePath}"`
    );
  }
  if (
    !/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(
      group
    )
  ) {
    fail(`${location}.group "${group}" is not a logical token group`);
  }

  if (
    typeof entry.type !== 'string' ||
    !designTokenTypes.includes(entry.type as DesignTokenType)
  ) {
    fail(
      `${location}.type must be one of: ${designTokenTypes.join(', ')}`
    );
  }
  const type = entry.type as DesignTokenType;

  if (
    typeof entry.sourceType !== 'string' ||
    !designTokenSourceTypes.includes(
      entry.sourceType as DesignTokenSourceType
    )
  ) {
    fail(
      `${location}.sourceType must be one of: ${designTokenSourceTypes.join(', ')}`
    );
  }
  const sourceType = entry.sourceType as DesignTokenSourceType;
  if (sourceTypeByType[type] !== sourceType) {
    fail(
      `${location}.sourceType "${sourceType}" is incompatible with semantic type "${type}"`
    );
  }

  const applicability = objectAt(
    entry.applicability,
    `${location}.applicability`
  );
  assertExactKeys(
    applicability,
    ['modes', 'densities', 'densityOverrides'],
    `${location}.applicability`
  );
  assertExactStringArray(
    applicability.modes,
    ['dark', 'light'],
    `${location}.applicability.modes`
  );
  assertExactStringArray(
    applicability.densities,
    ['default', 'compact'],
    `${location}.applicability.densities`
  );
  const densityOverrides = arrayAt(
    applicability.densityOverrides,
    `${location}.applicability.densityOverrides`
  );
  if (
    densityOverrides.length > 1 ||
    densityOverrides.some((density) => density !== 'compact')
  ) {
    fail(
      `${location}.applicability.densityOverrides may only contain "compact"`
    );
  }
  if (type !== 'sizing' && densityOverrides.length > 0) {
    fail(
      `${location}.applicability.densityOverrides is only valid for sizing tokens`
    );
  }

  const validatedEntry: DesignTokenEntry = {
    name,
    sourcePath,
    group,
    type,
    sourceType,
    applicability: {
      modes: ['dark', 'light'],
      densities: ['default', 'compact'],
      densityOverrides: densityOverrides as Array<'compact'>,
    },
  };
  if (description !== undefined) {
    validatedEntry.description = description;
  }
  return validatedEntry;
}

function validateEntries(value: unknown): DesignTokenEntry[] {
  const values = arrayAt(value, 'entries');
  if (values.length === 0) {
    fail('entries must contain system tokens');
  }

  const entries = values.map(validateEntry);
  for (let index = 1; index < entries.length; index++) {
    if (entries[index - 1].name >= entries[index].name) {
      fail(
        `entries must have unique names in deterministic ascending order; "${entries[index].name}" is out of order or duplicated`
      );
    }
  }
  return entries;
}

function validateAssets(value: unknown) {
  const values = arrayAt(value, 'assets');
  if (values.length !== 2) {
    fail('assets must contain the classic dark and light CSS assets');
  }

  for (const [index, expectedMode] of ['dark', 'light'].entries()) {
    const location = `assets[${index}]`;
    const asset = objectAt(values[index], location);
    assertExactKeys(asset, ['family', 'mode', 'path', 'sha256'], location);
    if (asset.family !== 'classic') {
      fail(`${location}.family must be "classic"`);
    }
    if (asset.mode !== expectedMode) {
      fail(`${location}.mode must be "${expectedMode}"`);
    }
    if (
      asset.path !==
      expectedAssetPaths[expectedMode as keyof typeof expectedAssetPaths]
    ) {
      fail(
        `${location}.path must identify the matching classic ${expectedMode} CSS asset`
      );
    }
    if (
      typeof asset.sha256 !== 'string' ||
      !/^[a-f0-9]{64}$/.test(asset.sha256)
    ) {
      fail(`${location}.sha256 must be a lowercase SHA-256 digest`);
    }
  }
}

export function parseDesignTokenManifest(
  value: unknown,
  installedPackage: { name: string; version: string }
): DesignTokenManifest {
  const manifest = objectAt(value, 'manifest');
  assertExactKeys(
    manifest,
    [
      'schemaVersion',
      'contract',
      'package',
      'provenance',
      'coverage',
      'entries',
      'assets',
    ],
    'manifest'
  );

  if (manifest.schemaVersion !== DESIGN_TOKEN_SCHEMA_VERSION) {
    fail(
      `schemaVersion must be ${DESIGN_TOKEN_SCHEMA_VERSION} (received ${String(manifest.schemaVersion)})`
    );
  }
  if (manifest.contract !== DESIGN_TOKEN_CONTRACT) {
    fail(`contract must be "${DESIGN_TOKEN_CONTRACT}"`);
  }

  validatePackage(manifest.package, installedPackage);
  validateProvenance(manifest.provenance);
  validateCoverage(manifest.coverage);
  const entries = validateEntries(manifest.entries);
  validateAssets(manifest.assets);

  return {
    ...(manifest as Omit<DesignTokenManifest, 'entries'>),
    entries,
  };
}
