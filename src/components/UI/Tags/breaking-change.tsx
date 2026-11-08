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
import { iconElectricalEnergyFilled } from '@siemens/ix-icons/icons';
import { IxIcon, IxTooltip, IxTypography } from '@siemens/ix-react';
import clsx from 'clsx';
import { useId } from 'react';
import BaseTag from './baseTag';
import styles from './base.module.css';

export function BreakingChangeTag({
  message,
  href,
  title,
  description,
}: Readonly<{
  message: string;
  href?: string;
  title?: string;
  /** Summary of the breaking changes, shown as tooltip */
  description?: string;
}>) {
  // `useId` returns ids like `:r1:`, which are no valid CSS selectors
  const id = `breaking-change-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const tooltip = description ? (
    <IxTooltip for={`#${id}`} placement="right">
      <IxTypography format="body">{description}</IxTypography>
    </IxTooltip>
  ) : null;

  const label = (
    <>
      <IxIcon
        name={iconElectricalEnergyFilled}
        color="--si-sys-color-text-caution"
        size="16"
      />
      Breaking change in v{message}
    </>
  );

  return (
    <>
      <BaseTag>
        {href ? (
          <Link
            id={id}
            className={clsx(styles.BreakingChange, styles.BreakingChangeLink)}
            to={href}
            // The tooltip replaces the native title
            title={
              description
                ? undefined
                : (title ?? `Show breaking changes of v${message}`)
            }
            {...(isInternalUrl(href)
              ? {}
              : { target: '_blank', rel: 'noreferrer' })}
          >
            {label}
          </Link>
        ) : (
          <div id={id} className={styles.BreakingChange}>
            {label}
          </div>
        )}
      </BaseTag>
      {tooltip}
    </>
  );
}
