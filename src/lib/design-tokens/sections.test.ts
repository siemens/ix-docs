/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import {
  extractTokenTableUsages,
  selectTokenTableSection,
  validateTokenTableSections,
} from './sections';

const manifest = {
  entries: [
    { name: '--si-sys-color-background-1', group: 'color.background', type: 'color' },
    { name: '--si-sys-color-background-2', group: 'color.background', type: 'color' },
    { name: '--si-sys-color-text-primary', group: 'color.text', type: 'color' },
    { name: '--si-sys-color-border-1', group: 'color.border', type: 'color' },
    { name: '--si-sys-shadow-1', group: 'color.effects.shadow', type: 'shadow' },
    { name: '--si-sys-typography-body', group: 'typography', type: 'typography' },
    {
      name: '--si-sys-sizing-size-1',
      group: 'sizing.size',
      type: 'sizing',
      applicability: { densityOverrides: ['compact'] },
    },
    {
      name: '--si-sys-sizing-border-radius-1',
      group: 'sizing.border-radius',
      type: 'sizing',
      applicability: { densityOverrides: [] },
    },
  ],
} as Parameters<typeof validateTokenTableSections>[0];

const completePage = [
  '## Color / Background {#token-group-color-background}',
  '',
  '<ColorTable section="color.background" />',
  '',
  "<ColorTable section='color.text'></ColorTable>",
  '<BorderTable section={"color.border"} />',
  '<ShadowTable section="color.effects.shadow" />',
  '<TypographyTable section="typography" />',
  '<DensityTable section="sizing.size" />',
].join('\n');

test('extracts token table usages with section and line', () => {
  assert.deepEqual(extractTokenTableUsages(completePage, 'colors.md'), [
    { table: 'ColorTable', section: 'color.background', file: 'colors.md', line: 3 },
    { table: 'ColorTable', section: 'color.text', file: 'colors.md', line: 5 },
    { table: 'BorderTable', section: 'color.border', file: 'colors.md', line: 6 },
    { table: 'ShadowTable', section: 'color.effects.shadow', file: 'colors.md', line: 7 },
    { table: 'TypographyTable', section: 'typography', file: 'colors.md', line: 8 },
    { table: 'DensityTable', section: 'sizing.size', file: 'colors.md', line: 9 },
  ]);
});

test('accepts pages that place every group exactly once', () => {
  assert.deepEqual(
    validateTokenTableSections(
      manifest,
      extractTokenTableUsages(completePage, 'colors.md')
    ),
    []
  );
});

test('reports missing, unknown, disallowed and duplicate sections', () => {
  const page = [
    '<ColorTable />',
    '<ColorTable section="color.backgorund" />',
    '<ColorTable section="color.border" />',
    '<ColorTable section="color.background" />',
    '<ColorTable section="color.background" />',
  ].join('\n');

  const errors = validateTokenTableSections(
    manifest,
    extractTokenTableUsages(page, 'page.md')
  );

  assert.match(errors[0], /page\.md:1: <ColorTable \/> requires a "section"/);
  assert.match(errors[1], /page\.md:2: .*"color\.backgorund" \/> does not match/);
  assert.match(errors[2], /page\.md:3: .*"color\.border" \/> does not match/);
  assert.match(errors[3], /page\.md:5: .*already placed at page\.md:4/);
});

test('reports manifest groups that no page documents', () => {
  const errors = validateTokenTableSections(
    manifest,
    extractTokenTableUsages('<ColorTable section="color.background" />', 'p.md')
  );

  assert.deepEqual(
    errors.map((error) => error.match(/"([^"]+)"/)?.[1]),
    ['color.text', 'color.border', 'color.effects.shadow', 'typography', 'sizing.size']
  );
});

test('only accepts sizing groups with compact overrides for density tables', () => {
  assert.equal(
    selectTokenTableSection(manifest.entries, 'DensityTable', 'sizing.size')
      .length,
    1
  );
  assert.throws(
    () =>
      selectTokenTableSection(
        manifest.entries,
        'DensityTable',
        'sizing.border-radius'
      ),
    /does not match/
  );
  assert.throws(
    () =>
      selectTokenTableSection(manifest.entries, 'DensityTable', 'typography'),
    /does not match/
  );
});

test('selects exactly one section for a table', () => {
  assert.equal(
    selectTokenTableSection(manifest.entries, 'ColorTable', 'color.background')
      .length,
    2
  );
  assert.throws(
    () => selectTokenTableSection(manifest.entries, 'ColorTable', undefined),
    /requires a "section" prop/
  );
  assert.throws(
    () =>
      selectTokenTableSection(manifest.entries, 'BorderTable', 'color.text'),
    /does not match/
  );
});

test('orders numbered token series naturally', () => {
  const entries = ['10', '2', '1', '11', '9'].map((index) => ({
    name: `--si-sys-color-data-categorical-${index}`,
    group: 'color.data',
    type: 'color',
  }));

  assert.deepEqual(
    selectTokenTableSection(entries, 'ColorTable', 'color.data').map(
      (entry) => entry.name.split('-').pop()
    ),
    ['1', '2', '9', '10', '11']
  );
});
