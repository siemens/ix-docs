/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import type { LoadContext, Plugin } from '@docusaurus/types';
import type { DesignTokenManifest } from '../../src/lib/design-tokens';
import { loadInstalledDesignTokenManifest } from './load-manifest';

export default function designTokensPlugin(
  context: LoadContext
): Plugin<DesignTokenManifest> {
  return {
    name: 'design-tokens',

    loadContent() {
      return loadInstalledDesignTokenManifest(context.siteDir);
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
}
