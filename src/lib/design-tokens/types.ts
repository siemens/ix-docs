/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

export const DESIGN_TOKEN_CONTRACT = 'siemens-ix-system-token-manifest';
export const DESIGN_TOKEN_SCHEMA_VERSION = 1;
export const DESIGN_TOKEN_PACKAGE = '@siemens/ix';

export const designTokenTypes = [
  'color',
  'shadow',
  'typography',
  'sizing',
] as const;

export type DesignTokenType = (typeof designTokenTypes)[number];

export const designTokenSourceTypes = [
  'color',
  'shadow',
  'typography',
  'dimension',
] as const;

export type DesignTokenSourceType = (typeof designTokenSourceTypes)[number];
export type DesignTokenMode = 'dark' | 'light';
export type DesignTokenDensity = 'default' | 'compact';

export type DesignTokenEntry = {
  name: string;
  sourcePath: string;
  group: string;
  type: DesignTokenType;
  sourceType: DesignTokenSourceType;
  description?: string;
  applicability: {
    modes: DesignTokenMode[];
    densities: DesignTokenDensity[];
    densityOverrides: Array<'compact'>;
  };
};

export type DesignTokenAsset = {
  family: 'classic';
  mode: DesignTokenMode;
  path: string;
  sha256: string;
};

export type DesignTokenManifest = {
  schemaVersion: typeof DESIGN_TOKEN_SCHEMA_VERSION;
  contract: typeof DESIGN_TOKEN_CONTRACT;
  package: {
    name: typeof DESIGN_TOKEN_PACKAGE;
    version: string;
  };
  provenance: {
    tokenSourceVersion: string;
    tokenBuildId: string;
  };
  coverage: {
    modes: DesignTokenMode[];
    densities: [
      {
        name: 'default';
        kind: 'base';
      },
      {
        name: 'compact';
        kind: 'sparse-override';
        inherits: 'default';
      },
    ];
  };
  entries: DesignTokenEntry[];
  assets: DesignTokenAsset[];
};
