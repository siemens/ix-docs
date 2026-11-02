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
  const indicator = getBreakingChangeIndicator(props.item);

  if (!indicator) {
    return <Category {...props} />;
  }

  // The label is only rendered as link content (and as aria label of the
  // collapse button, which is not used for the non collapsible component entries)
  const label = (
    <>
      {props.item.label}
      <BreakingChangeMarker {...indicator} />
    </>
  ) as unknown as string;

  return <Category {...props} item={{ ...props.item, label }} />;
}
