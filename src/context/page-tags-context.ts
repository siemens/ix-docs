/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { PageTags } from '@site/src/lib/page-tags';
import { createContext } from 'react';

/** Header tags of the current page, e.g. for the breaking change tags of the API tables */
export const PageTagsContext = createContext<PageTags | undefined>(undefined);
