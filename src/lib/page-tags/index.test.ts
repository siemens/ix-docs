import assert from 'node:assert/strict';
import test from 'node:test';
import {
  findUnmatchedBreakingChangeMembers,
  getPageTags,
  isBreakingChangeMember,
  getMigrationGuideUrl,
  parseBreakingChangeFrontMatter,
} from '.';

const changesetUrl =
  'https://github.com/siemens/ix/blob/abc123/.changeset/blind-variants.md';
const docUrl =
  'https://github.com/siemens/ix/blob/abc123/BREAKING_CHANGES/v6.md';

test('#parseBreakingChangeFrontMatter reads version, members and source', () => {
  assert.equal(parseBreakingChangeFrontMatter(undefined), undefined);
  assert.equal(parseBreakingChangeFrontMatter(null), undefined);
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: 'Renamed variants',
      properties: ['show', 'hide', 'show', ' animationDelay '],
      source: [changesetUrl, docUrl, changesetUrl],
    }),
    {
      version: '6.0.0',
      description: 'Renamed variants',
      properties: ['show', 'hide', 'animationDelay'],
      events: [],
      source: [changesetUrl, docUrl],
    }
  );
  // A single source can be given without a list
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: 'Renamed variants',
      properties: null,
      events: ['ix-other.valueChange'],
      source: changesetUrl,
    }),
    {
      version: '6.0.0',
      description: 'Renamed variants',
      properties: [],
      events: ['ix-other.valueChange'],
      source: [changesetUrl],
    }
  );
});

test('#parseBreakingChangeFrontMatter rejects invalid front matter', () => {
  const source = [changesetUrl];
  assert.throws(() => parseBreakingChangeFrontMatter('6.0.0'), /version/);
  assert.throws(() => parseBreakingChangeFrontMatter({ source }), /version/);
  // YAML reads an unquoted `6.0` as number
  assert.throws(
    () => parseBreakingChangeFrontMatter({ version: 6.0, source }),
    /version/
  );
  assert.throws(
    () =>
      parseBreakingChangeFrontMatter({
        version: '6.0.0',
        description: 'Renamed variants',
        properties: 'show',
        source,
      }),
    /properties/
  );
  assert.throws(
    () =>
      parseBreakingChangeFrontMatter({
        version: '6.0.0',
        description: 'x',
        events: [1],
        source,
      }),
    /events/
  );
  assert.throws(
    () =>
      parseBreakingChangeFrontMatter({
        version: '6.0.0',
        description: 'Renamed variants',
        props: ['show'],
        source,
      }),
    /Unknown .* props/
  );
  // If set, the description has one line
  for (const invalid of ['', ' ', 'Line 1\nLine 2', ['x']]) {
    assert.throws(
      () =>
        parseBreakingChangeFrontMatter({
          version: '6.0.0',
          description: invalid,
          source,
        }),
      /description/
    );
  }
  // If set, the source has texts
  for (const invalid of ['', ' ', [1], [''], { url: 'x' }]) {
    assert.throws(
      () =>
        parseBreakingChangeFrontMatter({
          version: '6.0.0',
          description: 'x',
          source: invalid,
        }),
      /source/
    );
  }
});

test('#parseBreakingChangeFrontMatter accepts notes as source', () => {
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      source: ['new xyz property', changesetUrl],
    })?.source,
    ['new xyz property', changesetUrl]
  );
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      source: ' .changeset/blind.md ',
    })?.source,
    ['.changeset/blind.md']
  );
});

test('#parseBreakingChangeFrontMatter does not require description and source', () => {
  assert.deepEqual(parseBreakingChangeFrontMatter({ version: '6.0.0' }), {
    version: '6.0.0',
    properties: [],
    events: [],
    source: [],
  });
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: null,
      source: null,
    }),
    { version: '6.0.0', properties: [], events: [], source: [] }
  );
});

test('#getMigrationGuideUrl links the migration guide of the major', () => {
  assert.equal(getMigrationGuideUrl('6.0.0'), '/docs/home/migration/6_0_0');
  assert.equal(getMigrationGuideUrl('7.1.0'), '/docs/home/migration/7_0_0');
  assert.throws(() => getMigrationGuideUrl('next'));
});

test('#getPageTags reads since and breaking-change', () => {
  const frontMatter = {
    title: 'Blind',
    since: '6.0.0',
    'breaking-change': { version: '6.0.0', description: 'Variants renamed' },
  };

  assert.deepEqual(getPageTags(frontMatter), {
    since: '6.0.0',
    breakingChange: {
      version: '6.0.0',
      href: '/docs/home/migration/6_0_0',
      description: 'Variants renamed',
    },
  });
  assert.deepEqual(getPageTags({ title: 'Blind' }), {});
  assert.deepEqual(
    getPageTags({
      'breaking-change': {
        version: '6.0.0',
        properties: ['variant'],
        events: ['collapsedChange'],
      },
    }).breakingChange,
    {
      version: '6.0.0',
      href: '/docs/home/migration/6_0_0',
      properties: ['variant'],
      events: ['collapsedChange'],
    }
  );
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
  assert.throws(() => getPageTags({ 'breaking-change': { version: 'x' } }));
});

test('#isBreakingChangeMember matches names, prefixed in ApiComponent tables', () => {
  const breakingChange = {
    version: '6.0.0',
    href: '/docs/home/migration/6_0_0',
    properties: ['variant', 'ix-push-card.outline'],
    events: ['collapsedChange'],
  };

  assert.equal(
    isBreakingChangeMember(breakingChange, 'property', 'variant'),
    true
  );
  assert.equal(
    isBreakingChangeMember(breakingChange, 'event', 'variant'),
    false
  );
  assert.equal(
    isBreakingChangeMember(breakingChange, 'event', 'collapsedChange'),
    true
  );
  assert.equal(
    isBreakingChangeMember(breakingChange, 'property', 'outline'),
    false
  );
  assert.equal(
    isBreakingChangeMember(
      breakingChange,
      'property',
      'outline',
      'ix-push-card'
    ),
    true
  );
  assert.equal(
    isBreakingChangeMember(
      breakingChange,
      'property',
      'variant',
      'ix-push-card'
    ),
    false
  );
  assert.equal(isBreakingChangeMember(undefined, 'property', 'variant'), false);
});

test('#findUnmatchedBreakingChangeMembers requires ApiComponent on pages with several tables', () => {
  const single = `import Api from '@site/docs/autogenerated/api/ix-blind/api.mdx';\n<Api />`;
  const multi = `import CardApi from '@site/docs/autogenerated/api/ix-card/api.mdx';
import PushCardApi from '@site/docs/autogenerated/api/ix-push-card/api.mdx';
<CardApi />
<PushCardApi />`;
  const wrapped = `import CardApi from '@site/docs/autogenerated/api/ix-card/api.mdx';
import PushCardApi from '@site/docs/autogenerated/api/ix-push-card/api.mdx';
<ApiComponent tag="ix-card">
  <CardApi />
</ApiComponent>
<ApiComponent tag="ix-push-card">
  <PushCardApi />
</ApiComponent>`;

  assert.deepEqual(
    findUnmatchedBreakingChangeMembers(['variant'], ['', single]),
    []
  );
  assert.deepEqual(
    findUnmatchedBreakingChangeMembers(['ix-blind.variant'], [single]),
    ['ix-blind.variant']
  );
  // Several tables without ApiComponent: names can't be assigned
  assert.deepEqual(findUnmatchedBreakingChangeMembers(['variant'], [multi]), [
    'variant',
  ]);
  assert.deepEqual(
    findUnmatchedBreakingChangeMembers(
      ['ix-card.variant', 'ix-push-card.outline'],
      [wrapped]
    ),
    []
  );
  assert.deepEqual(
    findUnmatchedBreakingChangeMembers(
      ['variant', 'ix-action-card.variant'],
      [wrapped]
    ),
    ['variant', 'ix-action-card.variant']
  );
  assert.deepEqual(findUnmatchedBreakingChangeMembers([], [multi]), []);
});
