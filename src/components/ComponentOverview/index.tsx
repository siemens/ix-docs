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
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { IxLayoutGrid, IxRow } from '@siemens/ix-react';
import React from 'react';
import { CategoryButton } from '@site/src/components/CategoryButton';
import {
  transformComponentOverview,
  type ComponentOverviewCategory,
} from './transformer';

type CategoryIllustration = {
  imagePath: string;
  sourceUrl: string;
};

type CategoryIllustrations = Readonly<Record<string, CategoryIllustration>>;

const CATEGORY_ILLUSTRATIONS: CategoryIllustrations = {
  'Application frame': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_249.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-249&t=gkh6VNlJun96I6Ac-4',
  },
  'Navigation and hierarchy': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_259.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-259&t=gkh6VNlJun96I6Ac-4',
  },
  'Containers and layout': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_269.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-269&t=gkh6VNlJun96I6Ac-4',
  },
  Forms: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_283.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-283&t=gkh6VNlJun96I6Ac-4',
  },
  'Input fields and selections': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_298.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-298&t=gkh6VNlJun96I6Ac-11',
  },
  'Buttons and actions': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_305.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-305&t=gkh6VNlJun96I6Ac-11',
  },
  'System feedback and status': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_332.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-332&t=gkh6VNlJun96I6Ac-11',
  },
  'Data display': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_370.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-370&t=gkh6VNlJun96I6Ac-11',
  },
  Chat: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_7974_3280.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7974-3280&t=HrpSIFfB7yjzt741-4',
  },
  Charts: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_387.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-387&t=gkh6VNlJun96I6Ac-11',
  },
};

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
  const sidebar = useDocsSidebar();
  const version = useDocsVersion();
  const baseUrl = useBaseUrl('/');

  if (!sidebar) {
    throw new Error(
      'Component overview: the processed components sidebar is not available.'
    );
  }

  const categories: RenderedComponentOverviewCategory[] =
    transformComponentOverview(sidebar.items, version.docs).map((category) => ({
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
        <section
          key={category.anchorId}
          id={category.anchorId}
          aria-labelledby={`${category.anchorId}-heading`}
        >
          <h2 id={`${category.anchorId}-heading`}>{category.label}</h2>
          <table>
            <caption>{`${category.label} components`}</caption>
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
        </section>
      ))}
    </>
  );
}
