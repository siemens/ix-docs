import assert from 'node:assert/strict';
import test from 'node:test';
import type {
  LoadedContent,
  LoadedVersion,
} from '@docusaurus/plugin-content-docs';
import {
  adaptLoadedComponentsVersion,
  extractLoadedDocsContent,
  getLatestLoadedVersion,
  serializeComponentOverview,
} from './component-overview';
import { transformComponentOverview } from '../../src/components/ComponentOverview/transformer';
import { replaceImportedComponentWithMarkdown } from './utils/replace-imported-component';

function metadata(
  id: string,
  title = id,
  description = `${id} description`,
  permalink = `/docs/${id}`
) {
  return { id, title, description, permalink };
}

function doc(id: string, label?: string) {
  return { type: 'doc', id, ...(label ? { label } : {}) };
}

function tab(
  id: string,
  label: string,
  children: ReturnType<typeof doc>[]
) {
  return {
    type: 'category',
    label,
    link: { type: 'doc', id },
    collapsed: true,
    collapsible: false,
    items: children,
  };
}

function componentsVersion(
  isLast: boolean,
  permalinkPrefix: string
): LoadedVersion {
  const docs = [
    metadata(
      'components/overview',
      'Components overview',
      'Overview',
      `${permalinkPrefix}/components/overview`
    ),
    metadata(
      'components/button/index',
      'Button',
      'Buttons trigger actions',
      `${permalinkPrefix}/components/button`
    ),
    metadata(
      'components/button/guide',
      'Button usage',
      'Button usage',
      `${permalinkPrefix}/components/button/guide`
    ),
    metadata(
      'components/button/code',
      'Button code',
      'Button code',
      `${permalinkPrefix}/components/button/code`
    ),
    metadata(
      'components/spinner/index',
      'Spinner',
      'Spinners indicate progress',
      `${permalinkPrefix}/components/spinner`
    ),
    metadata(
      'components/spinner/code',
      'Spinner code',
      'Spinner code',
      `${permalinkPrefix}/components/spinner/code`
    ),
    metadata(
      'components/forms-behavior/index',
      'Forms behavior',
      'Forms behavior description',
      `${permalinkPrefix}/components/forms-behavior`
    ),
    metadata(
      'components/fallback/index',
      'Fallback',
      'Fallback description',
      `${permalinkPrefix}/components/fallback`
    ),
    metadata(
      'components/fallback/writing',
      'Fallback writing',
      'Fallback writing',
      `${permalinkPrefix}/components/fallback/writing`
    ),
    metadata(
      'components/line-chart/overview',
      'Line chart',
      'Line chart description',
      `${permalinkPrefix}/components/line-chart/overview`
    ),
  ];

  return {
    isLast,
    docs,
    sidebars: {
      components: [
        doc('components/overview', 'Overview'),
        {
          type: 'category',
          label: 'Application frame',
          collapsed: true,
          collapsible: false,
          items: [
            tab('components/button/index', 'Button', [
              doc('components/button/code', 'Code'),
              doc('components/button/guide', 'Usage'),
            ]),
            tab('components/spinner/index', 'Spinner', [
              doc('components/spinner/code', 'Code'),
            ]),
          ],
        },
        {
          type: 'category',
          label: 'Forms',
          collapsed: true,
          collapsible: false,
          items: [
            doc('components/forms-behavior/index'),
            tab('components/fallback/index', 'Fallback', [
              doc('components/fallback/writing', 'Writing'),
            ]),
          ],
        },
        {
          type: 'category',
          label: 'Charts',
          collapsed: true,
          collapsible: false,
          items: [doc('components/line-chart/overview')],
        },
      ],
    },
  } as unknown as LoadedVersion;
}

function latestContent(): LoadedContent {
  return {
    loadedVersions: [
      componentsVersion(false, '/docs/5.0.0'),
      componentsVersion(true, '/docs'),
    ],
  };
}

test('extracts the latest docs version and adapts its server sidebar', () => {
  const loadedContent = extractLoadedDocsContent({
    'docusaurus-plugin-content-docs': {
      default: latestContent(),
    },
  });
  const latestVersion = getLatestLoadedVersion(loadedContent);
  const { sidebar, docs } = adaptLoadedComponentsVersion(latestVersion);
  const categories = transformComponentOverview(sidebar, docs);

  assert.equal(latestVersion.docs[1].permalink, '/docs/components/button');
  assert.deepEqual(
    categories.map((category) => category.label),
    ['Application frame', 'Forms', 'Charts']
  );
  assert.deepEqual(
    categories[0].items.map((item) => [item.title, item.href]),
    [
      ['Button', '/docs/components/button/code'],
      ['Spinner', '/docs/components/spinner/code'],
    ]
  );
  assert.deepEqual(
    categories[1].items.map((item) => [item.title, item.href]),
    [
      ['Forms behavior', '/docs/components/forms-behavior'],
      ['Fallback', '/docs/components/fallback'],
    ]
  );
  assert.deepEqual(categories[2].items[0], {
    docId: 'components/line-chart/overview',
    href: '/docs/components/line-chart/overview',
    title: 'Line chart',
    description: 'Line chart description',
  });
});

test('serializes the overview as an ordered nested Markdown list', () => {
  const { sidebar, docs } = adaptLoadedComponentsVersion(
    getLatestLoadedVersion(latestContent())
  );
  const markdown = serializeComponentOverview(
    transformComponentOverview(sidebar, docs)
  );

  assert.match(
    markdown,
    /- \*\*Application frame\*\*\n  - \[Button\]\(\/docs\/components\/button\/code\): Buttons trigger actions/
  );
  assert.match(
    markdown,
    /  - \[Spinner\]\(\/docs\/components\/spinner\/code\): Spinners indicate progress/
  );
  assert.match(
    markdown,
    /- \*\*Forms\*\*\n  - \[Forms behavior\]\(\/docs\/components\/forms-behavior\): Forms behavior description/
  );
  assert.match(
    markdown,
    /- \*\*Charts\*\*\n  - \[Line chart\]\(\/docs\/components\/line-chart\/overview\): Line chart description/
  );
});

test('normalizes descriptions and escapes Markdown-sensitive text', () => {
  assert.equal(
    serializeComponentOverview([
      {
        anchorId: 'data-display',
        label: 'Data *display*',
        items: [
          {
            docId: 'components/special',
            href: '/docs/components/special',
            title: 'A [special] component',
            description: 'First line\nSecond *line*',
          },
        ],
      },
    ]),
    '- **Data \\*display\\***\n  - [A \\[special\\] component](/docs/components/special): First line Second \\*line\\*'
  );
});

test('replaces aliased self-closing and paired component JSX', () => {
  const selfClosing = replaceImportedComponentWithMarkdown(
    "import Before from '@site/src/components/Before';\nimport {\n  ComponentOverview as Overview,\n} from '@site/src/components/ComponentOverview';\nimport After from '@site/src/components/After';\n\n<Overview />",
    { importPath: '@site/src/components/ComponentOverview', markdown: '- list' }
  );
  assert.equal(
    selfClosing,
    "import Before from '@site/src/components/Before';\nimport After from '@site/src/components/After';\n\n- list"
  );
  assert.doesNotMatch(selfClosing, /ComponentOverview|<Overview/);

  const paired = replaceImportedComponentWithMarkdown(
    "import Overview from '@site/src/components/ComponentOverview';\n\n<Overview data-mode=\"full\">ignored</Overview>",
    { importPath: '@site/src/components/ComponentOverview', markdown: '- paired' }
  );
  assert.equal(paired, '\n- paired');
  assert.doesNotMatch(paired, /ComponentOverview|<Overview/);
});

test('fails clearly for invalid loaded content and missing JSX usage', () => {
  assert.throws(
    () => extractLoadedDocsContent({}),
    /content for plugin "docusaurus-plugin-content-docs"/
  );
  assert.throws(
    () =>
      getLatestLoadedVersion({
        loadedVersions: [componentsVersion(false, '/docs')],
      }),
    /no version marked with isLast/
  );
  assert.throws(
    () =>
      adaptLoadedComponentsVersion({
        ...componentsVersion(true, '/docs'),
        sidebars: {},
      } as LoadedVersion),
    /no processed components sidebar/
  );
  assert.throws(
    () =>
      replaceImportedComponentWithMarkdown(
        "import Overview from '@site/src/components/ComponentOverview';",
        {
          importPath: '@site/src/components/ComponentOverview',
          markdown: '- list',
        }
      ),
    /no JSX usage/
  );
});
