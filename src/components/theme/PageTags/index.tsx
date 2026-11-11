/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  BreakingChangeTag,
  DeprecatedTag,
  FormReady,
  RedirectTag,
  SinceTag,
} from '@site/src/components/UI/Tags';
import type { PageTags as PageTagsData } from '@site/src/lib/page-tags';

export function hasPageTags(tags: PageTagsData) {
  return (
    !!tags.deprecated?.length ||
    !!tags.formReady ||
    !!tags.since ||
    !!tags.breakingChange
  );
}

/** Header tags, see `getPageTags` */
export default function PageTags({ tags }: Readonly<{ tags: PageTagsData }>) {
  const { deprecated, formReady, since, breakingChange } = tags;

  return (
    <>
      {deprecated?.map((entry) => {
        if (typeof entry === 'string') {
          return (
            <RedirectTag key={entry} link={entry}>
              Show deprecated version
            </RedirectTag>
          );
        }

        if (entry.type === 'deprecated') {
          return <DeprecatedTag key={entry.message} message={entry.message} />;
        }

        return null;
      })}
      {formReady && <FormReady />}
      {since && <SinceTag message={since} />}
      {breakingChange && (
        <BreakingChangeTag
          message={breakingChange.version}
          href={breakingChange.href}
          description={breakingChange.description}
        />
      )}
    </>
  );
}
