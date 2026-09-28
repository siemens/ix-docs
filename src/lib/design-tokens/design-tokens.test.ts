/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  DesignTokenManifestError,
  formatTokenGroup,
  groupDesignTokens,
  parseDesignTokenManifest,
  queryDesignTokens,
  tokenAnchor,
  tokenGroupAnchor,
  type DesignTokenManifest,
} from '.';

function validManifest(): unknown {
  return {
    schemaVersion: 1,
    contract: 'siemens-ix-system-token-manifest',
    package: { name: '@siemens/ix', version: '5.2.1' },
    provenance: {
      tokenSourceVersion: '0.12.0',
      tokenBuildId: 'a'.repeat(64),
    },
    coverage: {
      modes: ['dark', 'light'],
      densities: [
        { name: 'default', kind: 'base' },
        {
          name: 'compact',
          kind: 'sparse-override',
          inherits: 'default',
        },
      ],
    },
    entries: [
      {
        name: '--si-sys-color-background-1',
        sourcePath: 'si.sys.color.background.1',
        group: 'color.background',
        type: 'color',
        sourceType: 'color',
        description: 'Primary surface.',
        applicability: {
          modes: ['dark', 'light'],
          densities: ['default', 'compact'],
          densityOverrides: [],
        },
      },
      {
        name: '--si-sys-sizing-size-10',
        sourcePath: 'si.sys.sizing.size.10',
        group: 'sizing.size',
        type: 'sizing',
        sourceType: 'dimension',
        description: 'Hairline.',
        applicability: {
          modes: ['dark', 'light'],
          densities: ['default', 'compact'],
          densityOverrides: ['compact'],
        },
      },
    ],
    assets: [
      {
        family: 'classic',
        mode: 'dark',
        path: 'dist/siemens-ix/theme/classic-dark.css',
        sha256: 'b'.repeat(64),
      },
      {
        family: 'classic',
        mode: 'light',
        path: 'dist/siemens-ix/theme/classic-light.css',
        sha256: 'c'.repeat(64),
      },
    ],
  };
}

function cloneManifest(): Record<string, unknown> {
  return structuredClone(validManifest()) as Record<string, unknown>;
}

test('parses the complete v6 system-token contract', () => {
  const manifest = parseDesignTokenManifest(validManifest(), {
    name: '@siemens/ix',
    version: '5.2.1',
  });

  assert.equal(manifest.contract, 'siemens-ix-system-token-manifest');
  assert.equal(manifest.entries.length, 2);
});

test('accepts entries whose upstream source does not provide a description', () => {
  const input = cloneManifest();
  const entries = input.entries as Array<Record<string, unknown>>;
  delete entries[0].description;

  const manifest = parseDesignTokenManifest(input, {
    name: '@siemens/ix',
    version: '5.2.1',
  });
  assert.equal(manifest.entries[0].description, undefined);
});

test('rejects a stale manifest from another installed package version', () => {
  assert.throws(
    () =>
      parseDesignTokenManifest(validManifest(), {
        name: '@siemens/ix',
        version: '6.0.0',
      }),
    (error: unknown) =>
      error instanceof DesignTokenManifestError &&
      error.message.includes('does not match installed')
  );
});

test('rejects retired target/family metadata, leaking paths, and non-system tokens', () => {
  const retiredTarget = cloneManifest();
  retiredTarget.target = 'v6';
  assert.throws(
    () =>
      parseDesignTokenManifest(retiredTarget, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /manifest must contain exactly/
  );

  const retiredCoverageFamily = cloneManifest();
  const coverage = retiredCoverageFamily.coverage as Record<string, unknown>;
  coverage.family = 'classic';
  assert.throws(
    () =>
      parseDesignTokenManifest(retiredCoverageFamily, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /coverage must contain exactly/
  );

  const retiredEntryFamily = cloneManifest();
  const applicability = (
    retiredEntryFamily.entries as Array<Record<string, unknown>>
  )[0].applicability as Record<string, unknown>;
  applicability.family = 'classic';
  assert.throws(
    () =>
      parseDesignTokenManifest(retiredEntryFamily, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /entries\[0\]\.applicability must contain exactly/
  );

  const leakingPath = cloneManifest();
  const entries = leakingPath.entries as Array<Record<string, unknown>>;
  entries[0].sourcePath = '../../tokens/private.json';
  assert.throws(
    () =>
      parseDesignTokenManifest(leakingPath, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /logical si\.sys token path/
  );

  const referenceToken = cloneManifest();
  const referenceEntries = referenceToken.entries as Array<
    Record<string, unknown>
  >;
  referenceEntries[0].name = '--si-ref-color-blue-500';
  assert.throws(
    () =>
      parseDesignTokenManifest(referenceToken, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /--si-sys-\*/
  );
});

test('rejects unknown type mappings, invalid coverage, and bad assets', () => {
  const wrongSourceType = cloneManifest();
  const entries = wrongSourceType.entries as Array<Record<string, unknown>>;
  entries[0].sourceType = 'dimension';
  assert.throws(
    () =>
      parseDesignTokenManifest(wrongSourceType, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /incompatible with semantic type/
  );

  const wrongCoverage = cloneManifest();
  const coverage = wrongCoverage.coverage as Record<string, unknown>;
  coverage.modes = ['light', 'dark'];
  assert.throws(
    () =>
      parseDesignTokenManifest(wrongCoverage, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /coverage\.modes/
  );

  const wrongAsset = cloneManifest();
  const assets = wrongAsset.assets as Array<Record<string, unknown>>;
  assets[0].path = '../classic-dark.css';
  assert.throws(
    () =>
      parseDesignTokenManifest(wrongAsset, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /matching classic dark CSS asset/
  );
});

test('rejects duplicate or non-deterministically ordered names', () => {
  const duplicate = cloneManifest();
  const entries = duplicate.entries as Array<Record<string, unknown>>;
  entries[1] = structuredClone(entries[0]);

  assert.throws(
    () =>
      parseDesignTokenManifest(duplicate, {
        name: '@siemens/ix',
        version: '5.2.1',
      }),
    /unique names in deterministic ascending order/
  );
});

test('queries and groups generated token metadata without inventing relations', () => {
  const manifest = parseDesignTokenManifest(validManifest(), {
    name: '@siemens/ix',
    version: '5.2.1',
  }) as DesignTokenManifest;

  assert.deepEqual(
    queryDesignTokens(manifest, { type: 'color' }).map((entry) => entry.name),
    ['--si-sys-color-background-1']
  );
  assert.equal(
    queryDesignTokens(manifest, {
      type: 'color',
      excludeGroups: ['color.background'],
    }).length,
    0
  );
  assert.deepEqual(
    groupDesignTokens(manifest.entries).map(({ group }) => group),
    ['color.background', 'sizing.size']
  );
});

test('creates stable, validated token and group anchors', () => {
  assert.equal(
    tokenAnchor('--si-sys-color-background-1'),
    'token-si-sys-color-background-1'
  );
  assert.equal(
    tokenGroupAnchor('color.data.categorical'),
    'token-group-color-data-categorical'
  );
  assert.equal(
    formatTokenGroup('color.data.categorical'),
    'Color / Data / Categorical'
  );
  assert.throws(() => tokenAnchor('--theme-color-1'), /invalid system token/);
});
