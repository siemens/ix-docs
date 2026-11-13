import assert from 'node:assert/strict';
import test from 'node:test';
import {
  getFigmaMeta,
  getLocalFilename,
} from '../../../plugins/figma-pictures/figma';
import { CATEGORY_ILLUSTRATIONS } from './illustrations';

test('category illustration imagePath matches the file derived from sourceUrl', () => {
  for (const { imagePath, sourceUrl } of Object.values(
    CATEGORY_ILLUSTRATIONS
  )) {
    const { fileName, nodeId } = getFigmaMeta({ url: sourceUrl });
    assert.equal(imagePath, `/figma/${getLocalFilename(fileName, nodeId)}`);
  }
});
