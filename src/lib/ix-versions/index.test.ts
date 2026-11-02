import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getUpcomingVersion,
  isSupportedVersion,
  parseChangeset,
  parseComponentSince,
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
