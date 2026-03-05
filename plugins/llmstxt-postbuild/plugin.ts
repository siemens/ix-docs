/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import type { LoadContext } from '@docusaurus/types';
import { runPostBuild } from './post-build';

export default function (context: LoadContext) {
  return {
    name: 'llmstxt-postbuild',

    async postBuild() {
      const { outDir, siteDir } = context;
      try {
        await runPostBuild({ outDir, siteDir });
      } catch (error) {
        console.error('Error during post-build processing:', error);
      }
    },
  };
}
