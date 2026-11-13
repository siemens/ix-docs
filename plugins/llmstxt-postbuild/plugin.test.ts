import assert from 'node:assert/strict';
import test from 'node:test';
import type { LoadContext } from '@docusaurus/types';
import llmstxtPostbuildPlugin from './plugin';

test('propagates missing docs content from postBuild', async () => {
  const { postBuild } = llmstxtPostbuildPlugin({} as LoadContext);

  await assert.rejects(
    postBuild(),
    /Component overview: docs content was not captured by allContentLoaded\./
  );
});
