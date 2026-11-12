/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { BreakingChangeTag } from '@site/src/components/UI/Tags';
import { ApiComponentContext } from '@site/src/context/api-component-context';
import { PageTagsContext } from '@site/src/context/page-tags-context';
import { isBreakingChangeMember } from '@site/src/lib/page-tags';
import { useContext } from 'react';

/** Breaking change tag of a property or event listed in the page's `breaking-change` */
export default function BreakingChangeMemberTag({
  name,
  type,
}: Readonly<{ name: string; type: 'property' | 'event' }>) {
  const breakingChange = useContext(PageTagsContext)?.breakingChange;
  const componentTag = useContext(ApiComponentContext);

  if (
    !breakingChange ||
    !isBreakingChangeMember(breakingChange, type, name, componentTag)
  ) {
    return null;
  }

  return (
    <BreakingChangeTag
      message={breakingChange.version}
      href={breakingChange.href}
    />
  );
}
