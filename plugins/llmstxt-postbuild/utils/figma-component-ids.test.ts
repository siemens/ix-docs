import assert from 'node:assert/strict';
import test from 'node:test';
import {
  formatFigmaComponentIdLine,
  injectFigmaComponentIds,
  parseFigmaComponentIds,
} from './figma-component-ids';

test('parseFigmaComponentIds maps tags with a figma-main-component-id docs tag', () => {
  const ids = parseFigmaComponentIds({
    components: [
      {
        tag: 'ix-button',
        docsTags: [
          { name: 'documentation', text: 'https://example.com' },
          { name: 'figma-main-component-id', text: ' 225:5535 ' },
        ],
      },
      { tag: 'ix-row', docsTags: [] },
    ],
  });

  assert.deepEqual([...ids], [['ix-button', '225:5535']]);
});

test('injectFigmaComponentIds adds the ID below matching API headings only', () => {
  const ids = new Map([
    ['ix-button', '225:5535'],
    ['ix-tabs', '427:6367'],
  ]);
  const content = [
    '## API for ix-button',
    '',
    '### Properties',
    '',
    '## API for ix-row',
    '',
    '### Properties',
    '',
    '## API for ix-tabs (React)',
    '',
    '### Events',
    '',
  ].join('\n');

  const result = injectFigmaComponentIds(content, ids);

  assert.equal(
    result,
    [
      '## API for ix-button',
      '',
      formatFigmaComponentIdLine('225:5535'),
      '',
      '### Properties',
      '',
      '## API for ix-row',
      '',
      '### Properties',
      '',
      '## API for ix-tabs (React)',
      '',
      formatFigmaComponentIdLine('427:6367'),
      '',
      '### Events',
      '',
    ].join('\n')
  );
  assert.equal(injectFigmaComponentIds(result, ids), result);
});
