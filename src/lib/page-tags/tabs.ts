/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Node only (reads files), separate from `index.ts` which is also used in the browser
 */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { getPageTags, type PageTags } from '.';

const docsDir = path.join(__dirname, '../../../docs');

/**
 * Header tags from the `index.mdx` front matter of a tabs page, passed as sidebar
 * category `customProps` (`pageTags`) because tab pages don't see it.
 * Rendered by `DocTabsHeader`.
 */
export function getTabsPageTags(id: string): PageTags {
  const file = path.join(docsDir, `${id}.mdx`);
  if (!fs.existsSync(file)) {
    return {};
  }
  try {
    return getPageTags(matter(fs.readFileSync(file, 'utf8')).data, id);
  } catch (e) {
    throw new Error(`docs/${id}.mdx: ${e instanceof Error ? e.message : e}`);
  }
}
