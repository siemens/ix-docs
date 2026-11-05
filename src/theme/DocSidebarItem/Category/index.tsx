/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { WrapperProps } from '@docusaurus/types';
import {
  BreakingChangeMarker,
  getBreakingChangeIndicator,
} from '@site/src/components/theme/BreakingChangeIndicator';
import Category from '@theme-original/DocSidebarItem/Category';
import type CategoryType from '@theme/DocSidebarItem/Category';

type Props = WrapperProps<typeof CategoryType>;

export default function CategoryWrapper(props: Readonly<Props>): JSX.Element {
  const { item } = props;
  const indicator = getBreakingChangeIndicator(item);

  // The label is typed as string, but only rendered as link content.
  // The collapse button (only shown for collapsible categories with a link)
  // uses it as text in its aria label, keep the plain label there.
  if (!indicator || (item.collapsible && item.href)) {
    return <Category {...props} />;
  }

  const label = (
    <>
      {item.label}
      <BreakingChangeMarker {...indicator} />
    </>
  ) as unknown as string;

  return <Category {...props} item={{ ...item, label }} />;
}
