import assert from 'node:assert/strict';
import test from 'node:test';
import type {
  PropSidebarItem,
  PropVersionDocs,
} from '@docusaurus/plugin-content-docs';
import {
  resolveCanonicalSourceDocId,
  transformComponentOverview,
} from './transformer';

function doc(
  id: string,
  title = id,
  description = `${id} description`
) {
  return { id, title, description };
}

function link(
  docId: string,
  href = `/${docId}`,
  label = docId
): PropSidebarItem {
  return { type: 'link', docId, href, label };
}

function tab(
  label: string,
  href: string,
  items: PropSidebarItem[]
): PropSidebarItem {
  return {
    type: 'category',
    label,
    href,
    items,
    collapsed: true,
    collapsible: false,
  };
}

function category(label: string, items: PropSidebarItem[]): PropSidebarItem {
  return {
    type: 'category',
    label,
    items,
    collapsed: true,
    collapsible: false,
  };
}

function docs(...metadata: ReturnType<typeof doc>[]): PropVersionDocs {
  return Object.fromEntries(metadata.map((item) => [item.id, item]));
}

test('preserves category and component sidebar ordering', () => {
  const result = transformComponentOverview(
    [
      { type: 'link', docId: 'components/overview', href: '/overview', label: 'Overview' },
      category('Forms', [
        tab('Second', '/second', [
          link('components/second/code', '/second/code'),
          link('components/second/guide', '/second/guide'),
        ]),
        link('components/forms-behavior/index', '/forms-behavior'),
      ]),
      category('Charts', [
        link('components/line-chart/overview', '/line-chart'),
        link('components/bar-chart/overview', '/bar-chart'),
      ]),
    ],
    docs(
      doc('components/second/index', 'Second component'),
      doc('components/second/code'),
      doc('components/second/guide'),
      doc('components/forms-behavior/index', 'Forms behavior'),
      doc('components/line-chart/overview', 'Line chart'),
      doc('components/bar-chart/overview', 'Bar chart')
    )
  );

  assert.deepEqual(
    result.map((item) => item.label),
    ['Forms', 'Charts']
  );
  assert.deepEqual(
    result[0].items.map((item) => item.title),
    ['Second component', 'Forms behavior']
  );
  assert.deepEqual(
    result[1].items.map((item) => item.title),
    ['Line chart', 'Bar chart']
  );
});

test('uses canonical index metadata and prefers code links', () => {
  const result = transformComponentOverview(
    [
      category('Forms', [
        tab('Example', '/example', [
          link('components/example/code', '/example/code'),
          link('components/example/guide', '/example/guide'),
        ]),
      ]),
    ],
    docs(
      doc(
        'components/example/index',
        'Metadata title',
        'Metadata description'
      ),
      doc('components/example/guide', 'Guide title'),
      doc('components/example/code', 'Code title')
    )
  );

  assert.equal(result[0].items[0].docId, 'components/example/index');
  assert.equal(result[0].items[0].href, '/example/code');
  assert.equal(result[0].items[0].title, 'Metadata title');
  assert.equal(result[0].items[0].description, 'Metadata description');
  assert.equal(
    resolveCanonicalSourceDocId('components/example/code', docs(
      doc('components/example/index'),
      doc('components/example/code')
    )),
    'components/example/index'
  );
});

test('falls back to code and then to a direct source document', () => {
  const result = transformComponentOverview(
    [
      category('Forms', [
        tab('Code only', '/code-only', [
          link('components/code-only/code', '/code-only/code'),
        ]),
        link('components/forms-behavior/index', '/forms-behavior'),
      ]),
    ],
    docs(
      doc('components/code-only/index', 'Code only'),
      doc('components/code-only/code'),
      doc('components/forms-behavior/index', 'Forms behavior')
    )
  );

  assert.equal(result[0].items[0].href, '/code-only/code');
  assert.equal(result[0].items[1].href, '/forms-behavior');
  assert.equal(result[0].items[1].docId, 'components/forms-behavior/index');
});

test('uses a category source href when a tab has no guide or code link', () => {
  const result = transformComponentOverview(
    [
      category('Forms', [
        tab('Writing only', '/writing-only', [
          link('components/writing-only/writing', '/writing-only/writing'),
        ]),
      ]),
    ],
    docs(
      doc('components/writing-only/index', 'Writing only'),
      doc('components/writing-only/writing')
    )
  );

  assert.equal(result[0].items[0].href, '/writing-only');
  assert.equal(result[0].items[0].docId, 'components/writing-only/index');
});

test('supports direct chart overview documents', () => {
  const result = transformComponentOverview(
    [
      category('Charts', [
        link('components/charts-overview/overview', '/charts-overview'),
      ]),
    ],
    docs(
      doc(
        'components/charts-overview/overview',
        'Chart overview',
        'Chart metadata description'
      )
    )
  );

  assert.deepEqual(result[0].items[0], {
    docId: 'components/charts-overview/overview',
    href: '/charts-overview',
    title: 'Chart overview',
    description: 'Chart metadata description',
  });
});

test('fails clearly for missing metadata', () => {
  assert.throws(
    () =>
      transformComponentOverview(
        [
          category('Forms', [
            tab('Broken', '/broken', [
              link('components/broken/guide', '/broken/guide'),
            ]),
          ]),
        ],
        docs(doc('components/broken/guide'))
      ),
    /source document "components\/broken\/index" is missing from the docs metadata/
  );

});

test('fails clearly for malformed included sidebar entries', () => {
  assert.throws(
    () =>
      transformComponentOverview(
        [category('Forms', [{ type: 'html', value: 'not a component' }])],
        docs()
      ),
    /Category "Forms" item 1 must be a sidebar category or link/
  );

  assert.throws(
    () =>
      transformComponentOverview(
        [
          category('Forms', [
            { type: 'link', href: '/missing-doc-id', label: 'Broken' },
          ]),
        ],
        docs()
      ),
    /Category "Forms" item 1 docId must be a non-empty string/
  );
});
