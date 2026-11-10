/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { IxLayoutGrid, IxRow } from '@siemens/ix-react';
import React from 'react';
import { CategoryButton } from '@site/src/components/CategoryButton';
import { type ComponentOverviewCategory } from './transformer';
import { useComponentOverviewCategories } from './hooks';
import {
  CATEGORY_ILLUSTRATIONS,
  type CategoryIllustration,
} from './illustrations';

type RenderedComponentOverviewCategory = ComponentOverviewCategory & {
  illustration: CategoryIllustration;
};

function getCategoryIllustration(
  category: ComponentOverviewCategory
): CategoryIllustration {
  const illustration = CATEGORY_ILLUSTRATIONS[category.label];
  if (!illustration) {
    throw new Error(
      `Component overview: the illustration mapping for category "${category.label}" is missing.`
    );
  }
  if (
    typeof illustration.imagePath !== 'string' ||
    illustration.imagePath.trim() === ''
  ) {
    throw new Error(
      `Component overview: the illustration image path for category "${category.label}" must be a non-empty string.`
    );
  }
  if (
    typeof illustration.sourceUrl !== 'string' ||
    illustration.sourceUrl.trim() === ''
  ) {
    throw new Error(
      `Component overview: the illustration source URL for category "${category.label}" must be a non-empty string.`
    );
  }

  return illustration;
}

export function ComponentOverview() {
  const baseUrl = useBaseUrl('/');
  const categories: RenderedComponentOverviewCategory[] =
    useComponentOverviewCategories().map((category) => ({
      ...category,
      illustration: getCategoryIllustration(category),
    }));

  return (
    <>
      <IxLayoutGrid style={{ marginBottom: '3rem' }} no-margin>
        <IxRow style={{ gap: '0.5rem', justifyContent: 'center' }}>
          {categories.map((category) => (
            <CategoryButton
              key={category.anchorId}
              title={category.label}
              link={`#${category.anchorId}`}
            >
              <img
                src={`${baseUrl}${category.illustration.imagePath.replace(
                  /^\//,
                  ''
                )}`}
                alt=""
                aria-hidden="true"
              />
            </CategoryButton>
          ))}
        </IxRow>
      </IxLayoutGrid>

      {categories.map((category) => (
        <React.Fragment key={category.anchorId}>
          <Heading as="h2" id={category.anchorId}>
            {category.label}
          </Heading>
          <table aria-label={category.label}>
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item) => (
                <tr key={item.docId}>
                  <th scope="row">
                    <Link to={item.href}>{item.title}</Link>
                  </th>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </React.Fragment>
      ))}
    </>
  );
}
