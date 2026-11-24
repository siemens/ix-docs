/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  useDocsSidebar,
  useDocsVersion,
} from '@docusaurus/plugin-content-docs/client';
import { useMemo } from 'react';
import {
  OVERVIEW_DOC_ID,
  toComponentOverviewTOC,
  transformComponentOverview,
  type ComponentOverviewCategory,
  type ComponentOverviewTOCItem,
} from './transformer';

export function useComponentOverviewCategories(): ComponentOverviewCategory[] {
  const sidebar = useDocsSidebar();
  const version = useDocsVersion();

  if (!sidebar) {
    throw new Error(
      'Component overview: the processed components sidebar is not available.'
    );
  }

  return useMemo(
    () => transformComponentOverview(sidebar.items, version.docs),
    [sidebar.items, version.docs]
  );
}

/**
 * The overview headings are generated at runtime, so the MDX compiler cannot
 * collect them. Returns the TOC for the overview doc, otherwise `undefined`.
 */
export function useComponentOverviewTOC(
  docId: string
): ComponentOverviewTOCItem[] | undefined {
  const sidebar = useDocsSidebar();
  const version = useDocsVersion();
  const isOverview = docId === OVERVIEW_DOC_ID && !!sidebar;

  return useMemo(
    () =>
      isOverview && sidebar
        ? toComponentOverviewTOC(
            transformComponentOverview(sidebar.items, version.docs)
          )
        : undefined,
    [isOverview, sidebar, version.docs]
  );
}
