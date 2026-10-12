/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import type { LoadContext, Plugin } from '@docusaurus/types';
import type { DesignTokenManifest } from '../../src/lib/design-tokens';
import { loadInstalledDesignTokenManifest } from './load-manifest';
import {
  assertTokenTableSections,
  tokenTableDocsPattern,
} from './validate-sections';

export default function designTokensPlugin(
  context: LoadContext
): Plugin<DesignTokenManifest> {
  return {
    name: 'design-tokens',

    getPathsToWatch() {
      return [`${context.siteDir}/${tokenTableDocsPattern}`];
    },

    async loadContent() {
      const manifest = await loadInstalledDesignTokenManifest(context.siteDir);
      await assertTokenTableSections(context.siteDir, manifest);
      return manifest;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
}
