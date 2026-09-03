/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getBlockSourceByName,
  type BlockSourceResult,
} from './block-registry';

type MockResponse = {
  body: string;
  status?: number;
};

async function withFetchMock<T>(
  responses: Record<string, MockResponse>,
  callback: (
    calls: string[],
  ) => Promise<T>,
): Promise<T> {
  const originalFetch = globalThis.fetch;
  const calls: string[] = [];

  globalThis.fetch = async (input: RequestInfo | URL) => {
    const url = input.toString();
    calls.push(url);

    const response = responses[url];

    if (!response) {
      return new Response('', { status: 404 });
    }

    return new Response(response.body, {
      status: response.status ?? 200,
    });
  };

  try {
    return await callback(calls);
  } finally {
    globalThis.fetch = originalFetch;
  }
}

function jsonResponse(value: unknown): MockResponse {
  return {
    body: JSON.stringify(value),
  };
}

test('loads current path-based block files relative to the manifest', async () => {
  const registryUrl = 'https://registry.example/registry.json';
  const manifestUrl =
    'https://registry.example/v5.2.1/blocks/manifests/change-password.json';
  const reactSourceUrl =
    'https://registry.example/v5.2.1/blocks/manifests/react/change-password.tsx';
  const angularSourceUrl =
    'https://registry.example/v5.2.1/blocks/manifests/angular/change-password.ts';

  await withFetchMock(
    {
      [registryUrl]: jsonResponse({
        'dist-tags': { latest: 'v5.2.1' },
        versions: {
          'v5.2.1': {
            blocks: [
              {
                name: 'change-password',
                path: 'v5.2.1/blocks/manifests/change-password.json',
              },
            ],
          },
        },
      }),
      [manifestUrl]: jsonResponse({
        name: 'change-password',
        preview: 'react-blocks/dist/ix/change-password',
        variants: {
          react: {
            files: [{ path: 'react/change-password.tsx' }],
          },
          angular: {
            files: [{ path: 'angular/change-password.ts' }],
          },
        },
      }),
      [reactSourceUrl]: { body: 'react source' },
      [angularSourceUrl]: { body: 'angular source' },
    },
    async (calls) => {
      const source = await getBlockSourceByName('change-password', {
        registryUrl,
      });

      assert.equal(source.version, 'v5.2.1');
      assert.deepEqual(source.files, {
        react: {
          'react/change-password.tsx': 'react source',
        },
        angular: {
          'angular/change-password.ts': 'angular source',
        },
      });
      assert.deepEqual(source.sourcePath, {
        react: {
          'react/change-password.tsx': 'react/change-password.tsx',
        },
        angular: {
          'angular/change-password.ts': 'angular/change-password.ts',
        },
      });
      assert.equal(
        source.previewUrl,
        'https://registry.example/v5.2.1/blocks/react-blocks/dist/#/change-password',
      );
      assert.ok(calls.includes(registryUrl));
      assert.ok(calls.includes(manifestUrl));
      assert.ok(calls.includes(reactSourceUrl));
      assert.ok(calls.includes(angularSourceUrl));
    },
  );

});

test('loads legacy source and target block files', async () => {
  const registryUrl = 'https://registry.example/registry.json';
  const manifestUrl =
    'https://registry.example/v5.2.0/blocks/legacy-block.json';
  const sourceUrl =
    'https://registry.example/v5.2.0/blocks/react-blocks/src/legacy-block.tsx';

  await withFetchMock(
    {
      [registryUrl]: jsonResponse({
        versions: {
          'v5.2.0': {
            blocks: [
              {
                name: 'legacy-block',
                path: 'v5.2.0/blocks/legacy-block.json',
              },
            ],
          },
        },
      }),
      [manifestUrl]: jsonResponse({
        name: 'legacy-block',
        variants: {
          react: {
            files: [
              {
                target: 'react/legacy-block.tsx',
                source: 'react-blocks/src/legacy-block.tsx',
              },
            ],
          },
        },
      }),
      [sourceUrl]: { body: 'legacy source' },
    },
    async (calls) => {
      const source = await getBlockSourceByName('legacy-block', {
        registryUrl,
        registryTagOrVersion: 'v5.2.0',
      });

      const expected: Pick<BlockSourceResult, 'files' | 'sourcePath'> = {
        files: {
          react: {
            'react/legacy-block.tsx': 'legacy source',
          },
        },
        sourcePath: {
          react: {
            'react/legacy-block.tsx': 'react-blocks/src/legacy-block.tsx',
          },
        },
      };

      assert.deepEqual(
        {
          files: source.files,
          sourcePath: source.sourcePath,
        },
        expected,
      );
      assert.ok(calls.includes(sourceUrl));
    },
  );
});
