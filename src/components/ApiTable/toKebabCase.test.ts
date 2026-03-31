import assert from 'node:assert/strict';
import test from 'node:test';
import { toKebabCase } from './toKebabCase';

test('#toKebabCase keeps kebab-case values unchanged', () => {
  assert.equal(toKebabCase('title-content'), 'title-content');
  assert.equal(toKebabCase('title-icon'), 'title-icon');
});

test('#toKebabCase converts camelCase to kebab-case', () => {
  assert.equal(toKebabCase('titleContent'), 'title-content');
  assert.equal(toKebabCase('myLongSlotName'), 'my-long-slot-name');
});

test('#toKebabCase handles PascalCase and non-letter separators safely', () => {
  assert.equal(toKebabCase('TitleContent'), 'title-content');
  assert.equal(toKebabCase('title_content'), 'title_content');
  assert.equal(toKebabCase('title-content'), 'title-content');
});

test('#toKebabCase handles numbers and symbols without introducing extra dashes', () => {
  assert.equal(toKebabCase('title2Content'), 'title2-content');
  assert.equal(toKebabCase('Title2Content'), 'title2-content');
  assert.equal(toKebabCase('title$content'), 'title$content');
  assert.equal(toKebabCase('title$Content'), 'title$-content');
  assert.equal(toKebabCase('title-content$Icon'), 'title-content$-icon');
});

test('#toKebabCase covers additional kebabize scenarios from camelCase examples', () => {
  assert.equal(toKebabCase('camelCase'), 'camel-case');
  assert.equal(toKebabCase('thisIsATest'), 'this-is-a-test');
  assert.equal(toKebabCase('URLValue'), 'url-value');
  assert.equal(toKebabCase('lowercase'), 'lowercase');
  assert.equal(toKebabCase(''), '');
  assert.equal(toKebabCase('already-kebab case'), 'already-kebab case');
  assert.equal(toKebabCase(' leadingAndTrailing '), ' leading-and-trailing ');
  assert.equal(toKebabCase('specialCharacters!@#'), 'special-characters!@#');
  assert.equal(toKebabCase('stringWith1Number'), 'string-with1-number');
});
