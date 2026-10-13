/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  removeTokenTableImports,
  replaceTokenTablesWithMarkdown,
} from '../../../plugins/llmstxt-postbuild/utils/content-transforms';

const entries = [
  {
    name: '--si-sys-color-background-1',
    sourcePath: 'si.sys.color.background.1',
    group: 'color.background',
    type: 'color',
    description: 'Primary surface.',
  },
  {
    name: '--si-sys-color-border-1',
    sourcePath: 'si.sys.color.border.1',
    group: 'color.border',
    type: 'color',
    description: 'Subtle border.',
  },
  {
    name: '--si-sys-color-effects-shadow-1',
    sourcePath: 'si.sys.color.effects.shadow.1',
    group: 'color.effects.shadow',
    type: 'shadow',
    description: 'Low elevation.',
  },
  {
    name: '--si-sys-typography-body',
    sourcePath: 'si.sys.typography.body',
    group: 'typography',
    type: 'typography',
    description: 'Default body text.',
  },
];

test('renders only the selected manifest section as Markdown', () => {
  const source = [
    "import ColorTable from '@site/src/components/ColorTable';",
    "import BorderTable from '@site/src/components/BorderTable';",
    '',
    '## Color / Background {#token-group-color-background}',
    '',
    '<ColorTable section="color.background" />',
    '<BorderTable section="color.border" />',
  ].join('\n');

  const transformed = removeTokenTableImports(
    replaceTokenTablesWithMarkdown(source, entries)
  );

  assert.doesNotMatch(transformed, /ColorTable|BorderTable/);
  assert.doesNotMatch(transformed, /###/);
  assert.equal(transformed.match(/\| Token \|/g)?.length, 2);
  assert.match(transformed, /`--si-sys-color-background-1`/);
  assert.match(transformed, /`--si-sys-color-border-1`/);
  assert.doesNotMatch(transformed, /shadow|typography/);
});

test('removes preview imports embedded in generated summary text', () => {
  assert.equal(
    removeTokenTableImports(
      "Summary: import ShadowTable from '@site/src/components/ShadowTable';"
    ),
    'Summary: '
  );
  assert.equal(
    removeTokenTableImports(
      "import DensityTable from '@site/src/components/DensityTable';"
    ),
    ''
  );
});

test('fails rather than emitting an unrendered empty reference', () => {
  assert.throws(
    () =>
      replaceTokenTablesWithMarkdown(
        '<ColorTable section="color.background" />',
        entries.filter((entry) => entry.type === 'shadow')
      ),
    /Cannot render ColorTable/
  );
  assert.throws(
    () => replaceTokenTablesWithMarkdown('<ColorTable />', entries),
    /requires a "section" prop/
  );
});
