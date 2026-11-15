import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getComponentMigrationGuideUrl,
  getDocFolder,
  getPageTags,
  getMigrationGuideUrl,
  parseBreakingChangeFrontMatter,
} from '.';

const docId = 'components/blind/index';

test('#parseBreakingChangeFrontMatter reads version and description', () => {
  assert.equal(parseBreakingChangeFrontMatter(undefined), undefined);
  assert.equal(parseBreakingChangeFrontMatter(null), undefined);
  assert.deepEqual(
    parseBreakingChangeFrontMatter({
      version: ' 6.0.0 ',
      description: ' Renamed variants ',
    }),
    { version: '6.0.0', description: 'Renamed variants' }
  );
  // The description is optional
  assert.deepEqual(parseBreakingChangeFrontMatter({ version: '6.0.0' }), {
    version: '6.0.0',
  });
  assert.deepEqual(
    parseBreakingChangeFrontMatter({ version: '6.0.0', description: ' ' }),
    { version: '6.0.0' }
  );
});

test('#parseBreakingChangeFrontMatter requires a version', () => {
  assert.throws(() => parseBreakingChangeFrontMatter('6.0.0'), /version/);
  assert.throws(() => parseBreakingChangeFrontMatter({}), /version/);
  // YAML reads an unquoted `6.0` as number
  assert.throws(
    () => parseBreakingChangeFrontMatter({ version: 6.0 }),
    /version/
  );
  assert.throws(
    () => parseBreakingChangeFrontMatter({ version: 'x' }),
    /version/
  );
});

test('#getMigrationGuideUrl links the migration guide of the major', () => {
  assert.equal(getMigrationGuideUrl('6.0.0'), '/docs/home/migration/6_0_0');
  assert.equal(getMigrationGuideUrl('7.1.0'), '/docs/home/migration/7_0_0');
  assert.throws(() => getMigrationGuideUrl('next'));
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

test('#getPageTags reads since and breaking-change', () => {
  const frontMatter = {
    title: 'Blind',
    since: '6.0.0',
    'breaking-change': { version: '6.0.0', description: 'Variants renamed' },
  };

  assert.deepEqual(getPageTags(frontMatter, docId), {
    since: '6.0.0',
    breakingChange: {
      version: '6.0.0',
      href: '/docs/home/migration/6_0_0#blind',
      description: 'Variants renamed',
    },
  });
  assert.deepEqual(getPageTags({ title: 'Blind' }, docId), {});
});

test('#getPageTags reads deprecated and formReady', () => {
  const deprecated = [
    '/docs/legacy/input',
    { type: 'deprecated', message: 'Use ix-input instead' },
  ];
  assert.deepEqual(getPageTags({ deprecated, formReady: true }, docId), {
    deprecated,
    formReady: true,
  });
  assert.deepEqual(
    getPageTags({ deprecated: null, formReady: false }, docId),
    {}
  );
  assert.deepEqual(getPageTags({ deprecated: [] }, docId), {});
  assert.throws(() => getPageTags({ deprecated: '/docs/legacy' }, docId));
  assert.throws(() => getPageTags({ deprecated: [{ type: 'x' }] }, docId));
});

test('#getPageTags rejects invalid front matter', () => {
  assert.throws(() => getPageTags({ since: 'next' }, docId));
  assert.throws(() => getPageTags({ since: 6 }, docId));
  assert.throws(() =>
    getPageTags({ 'breaking-change': { version: 'x' } }, docId)
  );
});
