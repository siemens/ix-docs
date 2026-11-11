import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getPageTags,
  getMigrationGuideUrl,
  groupBreakingChangeMembers,
  injectBreakingChangeTags,
  parseApiMdx,
  parseBreakingChangeFrontMatter,
  removeBreakingChangeTags,
} from '.';

const apiMdx = `import {SinceTag, DeprecatedTag} from '@site/src/components/UI/Tags';

<ApiTable id="property-clickable">
  <ApiTable.PropertyHeader name="clickable" singleFramework="">
      <SinceTag message={\`6.0.0\`} />
  </ApiTable.PropertyHeader>
</ApiTable>

<ApiTable id="property-variant">
  <ApiTable.PropertyHeader name="variant" singleFramework="">
  </ApiTable.PropertyHeader>
</ApiTable>

<ApiTable id="property-label">
  <ApiTable.PropertyHeader name="label" singleFramework="">
      <SinceTag message={\`5.1.0\`} />
  </ApiTable.PropertyHeader>
</ApiTable>

<ApiTable id="event-collapsedChange">
  <ApiTable.EventHeader name="collapsedChange">
  </ApiTable.EventHeader>
</ApiTable>
`;

test('#parseApiMdx reads properties and events', () => {
  assert.deepEqual(parseApiMdx(apiMdx), {
    props: [{ name: 'clickable' }, { name: 'variant' }, { name: 'label' }],
    events: [{ name: 'collapsedChange' }],
  });
});

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

test('#groupBreakingChangeMembers assigns members to the components of a page', () => {
  assert.deepEqual(
    groupBreakingChangeMembers('ix-card', {
      version: '6.0.0',
      description: 'Renamed variants',
      properties: ['variant', 'ix-push-card.variant', 'ix-push-card.outline'],
      events: ['ix-push-card.collapsedChange', 'ix-card.variantChange'],
      source: [changesetUrl],
    }),
    {
      'ix-card': { props: ['variant'], events: ['variantChange'] },
      'ix-push-card': {
        props: ['variant', 'outline'],
        events: ['collapsedChange'],
      },
    }
  );
  assert.deepEqual(
    groupBreakingChangeMembers('ix-blind', {
      version: '6.0.0',
      description: 'Renamed variants',
      properties: [],
      events: [],
      source: [changesetUrl],
    }),
    {}
  );
});

test('#injectBreakingChangeTags adds tags to affected headers only once', () => {
  const href = 'https://example.com/v6.md';
  const members = { props: ['variant'], events: ['collapsedChange'] };
  const result = injectBreakingChangeTags(apiMdx, '6.0.0', href, members);

  assert.match(
    result,
    /^import \{ BreakingChangeTag \} from '@site\/src\/components\/UI\/Tags';/
  );
  assert.match(
    result,
    /<ApiTable\.PropertyHeader name="variant" singleFramework="">\n\s+<BreakingChangeTag message=\{`6\.0\.0`\} href=\{`https:\/\/example\.com\/v6\.md`\} \/>/
  );
  assert.match(
    result,
    /<ApiTable\.EventHeader name="collapsedChange">\n\s+<BreakingChangeTag/
  );
  assert.equal(result.match(/<BreakingChangeTag /g)?.length, 2);
  assert.equal(
    injectBreakingChangeTags(result, '6.0.0', href, members),
    result
  );

  // Tags of previous runs are replaced
  const relinked = injectBreakingChangeTags(
    result,
    '7.0.0',
    'https://example.com/v7.md',
    { ...members, events: [] }
  );
  assert.equal(relinked.match(/<BreakingChangeTag /g)?.length, 1);
  assert.equal(relinked.match(/import \{ BreakingChangeTag \}/g)?.length, 1);
  assert.match(relinked, /href=\{`https:\/\/example\.com\/v7\.md`\}/);
  assert.equal(removeBreakingChangeTags(result), apiMdx);
  assert.equal(
    injectBreakingChangeTags(apiMdx, '6.0.0', href, { props: [], events: [] }),
    apiMdx
  );
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
