import assert from 'node:assert/strict';
import test from 'node:test';
import {
  collectBreakingChanges,
  findPageVersionInfo,
  getUpcomingVersion,
  githubSlug,
  injectBreakingChangeTags,
  isSupportedVersion,
  parseApiMdx,
  parseBreakingChangeSections,
  parseChangelogMajorChanges,
  parseChangeset,
  parseDependencyVersion,
  parseComponentSince,
  removeBreakingChangeTags,
} from '.';

const changeset = (name: string, frontmatter: string, summary: string) =>
  parseChangeset(name, `---\n${frontmatter}\n---\n\n${summary}\n`)!;

test('#isSupportedVersion only accepts latest and maintenance major', () => {
  assert.equal(isSupportedVersion('6.0.0', 6), true);
  assert.equal(isSupportedVersion('5.3.0', 6), true);
  assert.equal(isSupportedVersion('5.2.0', 6), true);
  assert.equal(isSupportedVersion('4.4.0', 6), false);
  assert.equal(isSupportedVersion('1.5.0', 6), false);
  assert.equal(isSupportedVersion('7.0.0', 6), true);
  assert.equal(isSupportedVersion('TODO: Define', 6), false);
});

test('#parseDependencyVersion reads the version of a dependency range', () => {
  assert.equal(parseDependencyVersion('5.3.0'), '5.3.0');
  assert.equal(parseDependencyVersion('^5.3.0'), '5.3.0');
  assert.equal(parseDependencyVersion('~6.0.0-beta.1'), '6.0.0-beta.1');
  assert.equal(parseDependencyVersion('npm:@siemens/ix@5.3.0'), '5.3.0');
  assert.equal(parseDependencyVersion('workspace:*'), undefined);
  assert.equal(parseDependencyVersion(undefined), undefined);
});

test('#findPageVersionInfo matches doc ids and URLs', () => {
  const blind = { tag: 'ix-blind' };
  const pages = { 'components/blind': blind };

  assert.equal(findPageVersionInfo(pages, 'components/blind/code'), blind);
  assert.equal(findPageVersionInfo(pages, 'components/blind/index'), blind);
  assert.equal(findPageVersionInfo(pages, '/docs/components/blind'), blind);
  assert.equal(findPageVersionInfo(pages, '/docs/components/blind/'), blind);
  assert.equal(
    findPageVersionInfo(pages, '/version-5/docs/components/blind/code#api'),
    blind
  );
  assert.equal(
    findPageVersionInfo(pages, 'components/blind-x/code'),
    undefined
  );
  assert.equal(findPageVersionInfo(pages, 'components/blind/a/b'), undefined);
  assert.equal(findPageVersionInfo(pages, '/docs/components'), undefined);
  assert.equal(findPageVersionInfo(pages, undefined), undefined);
});

test('#parseChangeset reads releases and summary', () => {
  const result = changeset(
    'card',
    `'@siemens/ix': major\n"@siemens/ix-react": minor`,
    'Migrate **ix-card**.'
  );
  assert.deepEqual(result.releases, {
    '@siemens/ix': 'major',
    '@siemens/ix-react': 'minor',
  });
  assert.equal(result.summary, 'Migrate **ix-card**.');
  assert.equal(parseChangeset('readme', '# Changesets'), null);
});

test('#getUpcomingVersion applies the highest pending bump', () => {
  const patch = changeset('a', `'@siemens/ix': patch`, '');
  const minor = changeset('b', `'@siemens/ix': minor`, '');
  const major = changeset('c', `'@siemens/ix': major`, '');
  const other = changeset('d', `'@siemens/ix-echarts': major`, '');

  assert.equal(getUpcomingVersion('5.2.1', []), '5.2.1');
  assert.equal(getUpcomingVersion('5.2.1', [patch]), '5.2.2');
  assert.equal(getUpcomingVersion('5.2.1', [patch, minor]), '5.3.0');
  assert.equal(getUpcomingVersion('5.2.1', [minor, major, patch]), '6.0.0');
  assert.equal(getUpcomingVersion('5.2.1', [other]), '5.2.1');
  assert.equal(getUpcomingVersion('6.0.0-beta.2', [major]), '6.0.0');
});

test('#githubSlug matches GitHub heading anchors', () => {
  assert.equal(
    githubSlug('Card family: status variants, `outline`, and `clickable`'),
    'card-family-status-variants-outline-and-clickable'
  );
  assert.equal(
    githubSlug('`ix-blind`: status variants and `outline`'),
    'ix-blind-status-variants-and-outline'
  );
  assert.equal(
    githubSlug('`passive` removed → `clickable`'),
    'passive-removed--clickable'
  );

  const occurrences = new Map<string, number>();
  assert.equal(
    githubSlug('Migration checklist', occurrences),
    'migration-checklist'
  );
  assert.equal(
    githubSlug('Migration checklist', occurrences),
    'migration-checklist-1'
  );
});

const breakingDoc = `# Breaking Changes V6

## Contents

- [ix-blind](#ix-blind-status-variants-and-outline)

## Card family: status variants, \`outline\`, and \`clickable\`

\`ix-card\` and \`ix-push-card\` use \`StatusVariant\`. The \`variant\` property changed.

### Migration checklist

Replace \`passive\` with \`clickable\`.

\`\`\`html
## not a heading
<ix-card variant="base"></ix-card>
\`\`\`

## \`ix-blind\`: status variants and \`outline\`

\`ix-blind\` uses the same rename as \`variant\`.

### Migration checklist

## Default icon size is 20

\`ix-icon-button\` uses 20px. The \`size\` property changed.
`;

test('#parseBreakingChangeSections splits level 2 sections', () => {
  const sections = parseBreakingChangeSections(breakingDoc);
  assert.deepEqual(
    sections.map(({ title, anchor }) => [title, anchor]),
    [
      [
        'Card family: status variants, `outline`, and `clickable`',
        'card-family-status-variants-outline-and-clickable',
      ],
      [
        '`ix-blind`: status variants and `outline`',
        'ix-blind-status-variants-and-outline',
      ],
      ['Default icon size is 20', 'default-icon-size-is-20'],
    ]
  );
  assert.match(sections[0].body, /Replace `passive`/);
  assert.match(sections[0].body, /## not a heading/);
});

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

test('#parseApiMdx reads properties, events and since versions', () => {
  assert.deepEqual(parseApiMdx(apiMdx), {
    props: [
      { name: 'clickable', since: '6.0.0' },
      { name: 'variant', since: undefined },
      { name: 'label', since: '5.1.0' },
    ],
    events: [{ name: 'collapsedChange', since: undefined }],
  });
});

test('#parseComponentSince reads the component since tag', () => {
  assert.equal(
    parseComponentSince(
      "import { SinceTag } from '@site/src/components/UI/Tags';\n\n<SinceTag message={`5.0.0`} />\n"
    ),
    '5.0.0'
  );
  assert.equal(
    parseComponentSince('<DeprecatedTag message={`x`} />'),
    undefined
  );
});

test('#collectBreakingChanges combines changesets and breaking change document', () => {
  const docUrl =
    'https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md';
  const result = collectBreakingChanges({
    version: '6.0.0',
    docUrl,
    breakingChangeDoc: breakingDoc,
    changesets: [
      changeset(
        'card',
        `'@siemens/ix': major`,
        'Migrate **ix-card** and **ix-blind**.'
      ),
      changeset('icons', `'@siemens/ix': minor`, 'Improve ix-icon-button.'),
      changeset('menu', `'@siemens/ix': major`, 'Change ix-menu.'),
    ],
    components: {
      'ix-card': parseApiMdx(apiMdx),
      'ix-blind': {
        props: [{ name: 'variant' }, { name: 'label' }],
        events: [],
      },
      'ix-icon-button': { props: [{ name: 'size' }], events: [] },
      'ix-menu': { props: [], events: [] },
      'ix-push-card': { props: [], events: [] },
    },
  });

  assert.deepEqual(result, {
    version: '6.0.0',
    docUrl,
    components: {
      'ix-card': {
        links: [
          {
            title: 'Card family: status variants, outline, and clickable',
            href: `${docUrl}#card-family-status-variants-outline-and-clickable`,
          },
        ],
        // `clickable` is new in 6.0.0, `label` is not mentioned
        props: ['variant'],
        events: [],
      },
      'ix-blind': {
        links: [
          {
            title: 'ix-blind: status variants and outline',
            href: `${docUrl}#ix-blind-status-variants-and-outline`,
          },
        ],
        props: ['variant'],
        events: [],
      },
      // ix-icon-button: no major changeset, ix-menu: not in breaking change doc
    },
  });
});

test('#collectBreakingChanges ignores cross-references and unrelated blocks', () => {
  const docUrl = 'https://example.com/v6.md';
  const doc = `## \`ix-time-picker\`: \`i18nConfirmTime\` renamed

Use \`i18nConfirm\` instead of \`i18nConfirmTime\`.

\`ix-time-input\` is not affected and keeps \`i18nSelectTime\`.

## Default icon size is 20

Icons render 20px instead of 24px.

Omitted icon \`size\` on \`ix-icon-button\` renders 20px.

\`ix-checkbox\` glyphs also move to 20, see \`checked\`.

- \`ix-icon-button\` keeps \`icon\`.
- Inputs emit \`valueChange\` on confirm.

### \`ix-checkbox\` details

The \`indeterminate\` state is smaller.
`;

  const result = collectBreakingChanges({
    version: '6.0.0',
    docUrl,
    breakingChangeDoc: doc,
    changesets: [
      changeset(
        'all',
        `'@siemens/ix': major`,
        'ix-time-picker, ix-time-input, ix-icon-button, ix-checkbox'
      ),
    ],
    components: {
      'ix-time-picker': {
        props: [
          { name: 'i18nConfirm', since: '6.0.0' },
          { name: 'i18nConfirmTime' },
        ],
        events: [],
      },
      'ix-time-input': { props: [{ name: 'i18nSelectTime' }], events: [] },
      'ix-icon-button': {
        props: [{ name: 'size' }, { name: 'icon' }, { name: 'checked' }],
        events: [{ name: 'valueChange' }],
      },
      'ix-checkbox': {
        props: [
          { name: 'checked' },
          { name: 'indeterminate' },
          { name: 'size' },
        ],
        events: [],
      },
    },
  });

  const href = (anchor: string) => `${docUrl}#${anchor}`;
  assert.deepEqual(result.components, {
    'ix-time-picker': {
      links: [
        {
          title: 'ix-time-picker: i18nConfirmTime renamed',
          href: href('ix-time-picker-i18nconfirmtime-renamed'),
        },
      ],
      props: ['i18nConfirmTime'],
      events: [],
    },
    // ix-time-input: only mentioned in a section of another component
    'ix-icon-button': {
      links: [
        {
          title: 'Default icon size is 20',
          href: href('default-icon-size-is-20'),
        },
      ],
      // `checked` and `valueChange` are mentioned in blocks of other components
      props: ['size', 'icon'],
      events: [],
    },
    'ix-checkbox': {
      links: [
        {
          title: 'Default icon size is 20',
          href: href('default-icon-size-is-20'),
        },
      ],
      // `indeterminate` is below a heading of the component
      props: ['checked', 'indeterminate'],
      events: [],
    },
  });
});

test('#collectBreakingChanges links sections about the component first', () => {
  const doc = `## Global tokens

Tokens are renamed.

\`ix-card\`, \`ix-blind\` and \`ix-chip\` use new tokens. See \`label\`.

## Card family

\`ix-card\` and \`ix-blind\` use \`StatusVariant\`.

Default \`variant\` is now \`base\`.

## Status rename

Statuses are renamed.

\`ix-card\` uses \`StatusVariant\`.

## \`ix-card\`: outline

Card details.
`;

  const result = collectBreakingChanges({
    version: '6.0.0',
    docUrl: '',
    breakingChangeDoc: doc,
    changesets: [changeset('card', `'@siemens/ix': major`, 'ix-card')],
    components: {
      'ix-card': {
        props: [{ name: 'variant' }, { name: 'label' }, { name: 'outline' }],
        events: [],
      },
      'ix-blind': { props: [], events: [] },
      'ix-chip': { props: [], events: [] },
    },
  });

  assert.deepEqual(result.components['ix-card'], {
    links: [
      { title: 'ix-card: outline', href: '#ix-card-outline' },
      { title: 'Card family', href: '#card-family' },
      { title: 'Status rename', href: '#status-rename' },
      { title: 'Global tokens', href: '#global-tokens' },
    ],
    // The whole "Card family" section is about ix-card (named in the first paragraph),
    // `label` is mentioned next to ix-card in "Global tokens"
    props: ['variant', 'label'],
    events: [],
  });
});

test('#injectBreakingChangeTags adds tags to affected headers only once', () => {
  const component = {
    links: [{ title: 'Card', href: 'https://example.com#card' }],
    props: ['variant'],
    events: ['collapsedChange'],
  };
  const result = injectBreakingChangeTags(apiMdx, '6.0.0', component);

  assert.match(
    result,
    /^import \{ BreakingChangeTag \} from '@site\/src\/components\/UI\/Tags';/
  );
  assert.match(
    result,
    /<ApiTable\.PropertyHeader name="variant" singleFramework="">\n\s+<BreakingChangeTag message=\{`6\.0\.0`\} href=\{`https:\/\/example\.com#card`\} \/>/
  );
  assert.match(
    result,
    /<ApiTable\.EventHeader name="collapsedChange">\n\s+<BreakingChangeTag/
  );
  assert.equal(result.match(/<BreakingChangeTag /g)?.length, 2);
  assert.equal(injectBreakingChangeTags(result, '6.0.0', component), result);

  // Tags of previous runs are replaced
  const relinked = injectBreakingChangeTags(result, '6.0.0', {
    ...component,
    links: [{ title: 'Card', href: 'https://example.com/v6.md#card-family' }],
    events: [],
  });
  assert.equal(relinked.match(/<BreakingChangeTag /g)?.length, 1);
  assert.equal(relinked.match(/import \{ BreakingChangeTag \}/g)?.length, 1);
  assert.match(
    relinked,
    /href=\{`https:\/\/example\.com\/v6\.md#card-family`\}/
  );
  assert.equal(removeBreakingChangeTags(result), apiMdx);
  assert.equal(
    injectBreakingChangeTags(apiMdx, '6.0.0', {
      ...component,
      props: [],
      events: [],
    }),
    apiMdx
  );
});

test('#parseChangelogMajorChanges reads major changes of a released version', () => {
  const changelog = `# @siemens/ix

## 6.1.0

### Major Changes

- Not part of 6.0.0 (ix-menu)

## 6.0.0

### Major Changes

- [#1](https://github.com/siemens/ix/pull/1) Migrate **ix-card**.

  Details about \`variant\`.

### Minor Changes

- Add ix-info-page.

## 5.4.0

### Major Changes

- Old ix-blind change
`;

  const [result, ...rest] = parseChangelogMajorChanges(changelog, '6.0.0');
  assert.equal(rest.length, 0);
  assert.deepEqual(result.releases, { '@siemens/ix': 'major' });
  assert.match(result.summary, /Migrate \*\*ix-card\*\*/);
  assert.match(result.summary, /Details about `variant`/);
  assert.doesNotMatch(result.summary, /ix-info-page|ix-menu|ix-blind/);
  assert.deepEqual(parseChangelogMajorChanges(changelog, '7.0.0'), []);
  assert.deepEqual(
    parseChangelogMajorChanges(
      '## 6.0.0\n\n### Patch Changes\n\n- Fix',
      '6.0.0'
    ),
    []
  );
});
