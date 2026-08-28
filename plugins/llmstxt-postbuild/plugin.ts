/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import type { AllContent, LoadContext } from '@docusaurus/types';
import type { LoadedContent } from '@docusaurus/plugin-content-docs';
import {
  buildComponentOverviewMarkdown,
  extractLoadedDocsContent,
} from './component-overview';
import { runPostBuild } from './post-build';

export default function (context: LoadContext) {
  let loadedContent: LoadedContent | undefined;

  return {
    name: 'llmstxt-postbuild',

    allContentLoaded({ allContent }: { allContent: AllContent }) {
      loadedContent = extractLoadedDocsContent(allContent);

      // Validate the complete source path while Docusaurus still has the
      // authoritative content available. postBuild then only applies the
      // already validated representation to the generated file.
      buildComponentOverviewMarkdown(loadedContent);
    },

    async postBuild() {
      const { outDir, siteDir } = context;
      try {
        if (!loadedContent) {
          throw new Error(
            'Component overview: docs content was not captured by allContentLoaded.'
          );
        }

        await runPostBuild({ outDir, siteDir, loadedContent });
      } catch (error) {
        console.error('Error during post-build processing:', error);
      }
    },
  };
}
