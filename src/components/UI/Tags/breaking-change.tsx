/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import clsx from 'clsx';
import BaseTag from './baseTag';
import styles from './base.module.css';

export function BreakingChangeTag({
  message,
  href,
  title,
}: Readonly<{
  message: string;
  href?: string;
  title?: string;
}>) {
  const label = `Breaking change in v${message}`;

  return (
    <BaseTag>
      {href ? (
        <Link
          className={clsx(styles.BreakingChange, styles.BreakingChangeLink)}
          to={href}
          title={title ?? `Show breaking changes of v${message}`}
          {...(isInternalUrl(href)
            ? {}
            : { target: '_blank', rel: 'noreferrer' })}
        >
          {label}
        </Link>
      ) : (
        <div className={styles.BreakingChange}>{label}</div>
      )}
    </BaseTag>
  );
}
