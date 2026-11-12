import assert from 'node:assert/strict';
import test from 'node:test';
import { createSlugger } from '@docusaurus/utils';
import {
  findApiBreakingChangeVersions,
  findMigrationGuideAnchor,
  getComponentMigrationGuideUrl,
  getDocFolder,
  getPageTags,
  hasComponentMigrationSection,
  hasHeadingId,
  getMigrationGuideUrl,
  parseBreakingChangeFrontMatter,
} from '.';

const changesetUrl =
  'https://github.com/siemens/ix/blob/abc123/.changeset/blind-variants.md';
const docUrl =
  'https://github.com/siemens/ix/blob/abc123/BREAKING_CHANGES/v6.md';

test('#parseBreakingChangeFrontMatter reads version, description and source', () => {
  assert.equal(parseBreakingChangeFrontMatter(undefined), undefined);
  assert.equal(parseBreakingChangeFrontMatter(null), undefined);
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: 'Renamed variants',
      source: [changesetUrl, docUrl, changesetUrl],
    }),
    {
      version: '6.0.0',
      description: 'Renamed variants',
      source: [changesetUrl, docUrl],
    }
  );
  // A single source can be given without a list
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: 'Renamed variants',
      source: changesetUrl,
    }),
    {
      version: '6.0.0',
      description: 'Renamed variants',
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
  // Property and event tags come from the siemens/ix JSDoc
  for (const key of ['properties', 'events']) {
    assert.throws(
      () =>
        parseBreakingChangeFrontMatter({
          version: '6.0.0',
          [key]: ['variant'],
          source,
        }),
      new RegExp(`Unknown .* ${key}`)
    );
  }
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
    source: [],
  });
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: '6.0.0',
      description: null,
      source: null,
    }),
    { version: '6.0.0', source: [] }
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
});

test('#getComponentMigrationGuideUrl links the section of the doc folder', () => {
  assert.equal(getDocFolder('components/card/code'), 'card');
  assert.equal(
    getDocFolder('components/application-menu/index'),
    'application-menu'
  );
  assert.equal(
    getComponentMigrationGuideUrl('6.0.0', 'components/card/code'),
    '/docs/home/migration/6_0_0#card'
  );
  assert.equal(
    getComponentMigrationGuideUrl('7.2.0', 'components/application-menu/code'),
    '/docs/home/migration/7_0_0#application-menu'
  );
});

test('#findApiBreakingChangeVersions reads the versions of generated API tables', () => {
  const api = `<ApiTable.PropertyHeader name="variant" singleFramework="">
      <SinceTag message={\`5.2.0\`} />
      <BreakingChangeTag message={\`6.0.0\`} description={\`Renamed \\\`x\\\`\`} />
  </ApiTable.PropertyHeader>
  <ApiTable.PropertyHeader name="outline" singleFramework="">
      <BreakingChangeTag message={\`6.0.0\`} description={\`y\`} />
      <BreakingChangeTag message={\`7.0.0\`} description={\`z\`} />
  </ApiTable.PropertyHeader>`;
  assert.deepEqual(findApiBreakingChangeVersions(api), ['6.0.0', '7.0.0']);
  assert.deepEqual(
    findApiBreakingChangeVersions('<SinceTag message={`6.0.0`} />'),
    []
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

const guide = `# Upgrade to V6

## Migration by topic

#### Typography

\`\`\`bash
# Blind
\`\`\`

## Migration by component

### Containers

#### Blind

#### App menu {#application-menu}

### Utilities

#### Typography
`;

const docusaurusSlug = () => {
  const slugger = createSlugger();
  return (text: string) => slugger.slug(text);
};

test('#findMigrationGuideAnchor finds the section of a component', () => {
  const find = (folder: string, title: string) =>
    findMigrationGuideAnchor(guide, { folder, title }, docusaurusSlug);

  assert.equal(find('blind', 'Blind'), 'blind');
  // Explicit heading id with the doc folder
  assert.equal(
    find('application-menu', 'Application menu'),
    'application-menu'
  );
  // Only headings of "Migration by component", duplicate headings are numbered
  assert.equal(find('typography', 'Typography'), 'typography-1');
  assert.equal(find('flip', 'Flip'), undefined);
});

test('#hasComponentMigrationSection detects guides with sections per component', () => {
  assert.equal(hasComponentMigrationSection(guide), true);
  assert.equal(
    hasComponentMigrationSection('# Upgrade\n\n## Installation'),
    false
  );
});

test('#hasHeadingId detects explicit and generated heading ids', () => {
  assert.equal(hasHeadingId(guide, 'application-menu', docusaurusSlug), true);
  assert.equal(hasHeadingId(guide, 'blind', docusaurusSlug), true);
  assert.equal(hasHeadingId(guide, 'app-menu', docusaurusSlug), false);
  assert.equal(hasHeadingId(guide, 'application', docusaurusSlug), false);
  assert.equal(hasHeadingId('Text {#card}', 'card', docusaurusSlug), false);
});
