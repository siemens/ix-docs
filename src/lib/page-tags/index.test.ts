import assert from 'node:assert/strict';
import test from 'node:test';
import { getPageTags, parseBreakingChangesFrontMatter } from '.';

const breaking = [
  { description: 'Variants renamed', link: '/docs/home/migration/6_0_0#blind' },
];

test('#parseBreakingChangesFrontMatter reads versions and their breaking changes', () => {
  assert.deepEqual(parseBreakingChangesFrontMatter(undefined), []);
  assert.deepEqual(parseBreakingChangesFrontMatter(null), []);
  assert.deepEqual(
    parseBreakingChangesFrontMatter([
      {
        version: ' 6.0.0 ',
        breaking: [
          {
            description: ' Variants renamed ',
            link: ' /docs/home/migration/6_0_0#blind ',
          },
          { description: 'Icon size', link: 'https://example.com' },
        ],
      },
    ]),
    [
      {
        version: '6.0.0',
        breaking: [
          ...breaking,
          { description: 'Icon size', link: 'https://example.com' },
        ],
      },
    ]
  );
});

test('#parseBreakingChangesFrontMatter rejects invalid entries', () => {
  assert.throws(
    () => parseBreakingChangesFrontMatter({ version: '6.0.0', breaking }),
    /list/
  );
  // YAML reads an unquoted `6.0` as number
  assert.throws(
    () => parseBreakingChangesFrontMatter([{ version: 6.0, breaking }]),
    /version/
  );
  assert.throws(
    () => parseBreakingChangesFrontMatter([{ version: '6.0.0' }]),
    /breaking/
  );
  assert.throws(
    () => parseBreakingChangesFrontMatter([{ version: '6.0.0', breaking: [] }]),
    /breaking/
  );
  assert.throws(
    () =>
      parseBreakingChangesFrontMatter([
        { version: '6.0.0', breaking: [{ description: 'Variants renamed' }] },
      ]),
    /link/
  );
  assert.throws(
    () =>
      parseBreakingChangesFrontMatter([
        { version: '6.0.0', breaking: [{ link: '/docs' }] },
      ]),
    /description/
  );
});

test('#getPageTags reads since and breaking-changes', () => {
  assert.deepEqual(
    getPageTags({
      title: 'Blind',
      since: '6.0.0',
      'breaking-changes': [{ version: '6.0.0', breaking }],
    }),
    { since: '6.0.0', breakingChanges: [{ version: '6.0.0', breaking }] }
  );
  assert.deepEqual(getPageTags({ title: 'Blind', 'breaking-changes': [] }), {});
});

test('#getPageTags reads deprecated and formReady', () => {
  const deprecated = [
    '/docs/legacy/input',
    { type: 'deprecated', message: 'Use ix-input instead' },
  ];
  assert.deepEqual(getPageTags({ deprecated, formReady: true }), {
    deprecated,
    formReady: true,
  });
  assert.deepEqual(getPageTags({ deprecated: null, formReady: false }), {});
  assert.deepEqual(getPageTags({ deprecated: [] }), {});
  assert.throws(() => getPageTags({ deprecated: '/docs/legacy' }));
  assert.throws(() => getPageTags({ deprecated: [{ type: 'x' }] }));
});

test('#getPageTags rejects invalid front matter', () => {
  assert.throws(() => getPageTags({ since: 'next' }));
  assert.throws(() => getPageTags({ since: 6 }));
  assert.throws(() =>
    getPageTags({ 'breaking-changes': [{ version: 'x', breaking }] })
  );
});
