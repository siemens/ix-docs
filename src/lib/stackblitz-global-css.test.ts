import assert from 'node:assert/strict';
import test from 'node:test';
import { prepareGlobalCss } from './stackblitz-global-css';

const generatedGlobalCss = `@import '@siemens/ix/css/default.css';
@import '@siemens/ix/css/legacy.css';

html {
  height: 100%;
}
`;

test('#prepareGlobalCss removes generated IX style imports', () => {
  assert.equal(
    prepareGlobalCss(generatedGlobalCss, 'button'),
    `html {
  height: 100%;
}
`
  );
});

test('#prepareGlobalCss opts table examples into utilities', () => {
  assert.equal(
    prepareGlobalCss(generatedGlobalCss, 'html-table'),
    `@import '@siemens/ix/css/utilities.css';

html {
  height: 100%;
}
`
  );
});

test('#prepareGlobalCss opts native form examples into legacy styles', () => {
  assert.equal(
    prepareGlobalCss(generatedGlobalCss, 'custom-field-validation'),
    `@import '@siemens/ix/css/legacy.css';

html {
  height: 100%;
}
`
  );
});
