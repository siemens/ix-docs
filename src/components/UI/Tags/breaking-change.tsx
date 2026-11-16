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
import {
  IxIcon,
  IxPopover,
  IxPopoverContent,
  IxPopoverHeader,
} from '@siemens/ix-react';
import clsx from 'clsx';
import type { BreakingChange } from '@site/src/lib/page-tags';
import { useHistory } from '@docusaurus/router';
import { useEffect, useId, useRef } from 'react';
import BaseTag from './baseTag';
import styles from './base.module.css';

type BreakingChangeTagProps = Readonly<BreakingChange>;

function ExternalLink(
  props: Readonly<{
    to: string;
    id?: string;
    className?: string;
    children: React.ReactNode;
  }>
) {
  return (
    <Link
      {...props}
      {...(isInternalUrl(props.to)
        ? {}
        : { target: '_blank', rel: 'noreferrer' })}
    />
  );
}

/**
 * Breaking change tag of the page headers (`breaking-changes` front matter): links to the
 * first breaking change, the popover lists all of them
 */
export function BreakingChangeTag({
  version,
  breaking,
}: BreakingChangeTagProps) {
  // `useId` returns ids like `:r1:`, which are no valid element ids for the popover trigger
  const id = `breaking-change-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const popoverRef = useRef<HTMLIxPopoverElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const history = useHistory();

  // In hover mode the popover stops the propagation of clicks inside it, so React (and with
  // it the client side routing of `Link`) never sees them and the browser reloads the page
  // without scrolling to the anchor. Handle internal links natively before that happens.
  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    const onClick = async (event: MouseEvent) => {
      const anchor = (event.target as Element).closest('a');
      const link = anchor?.getAttribute('href');
      if (
        !link ||
        !isInternalUrl(link) ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      event.preventDefault();
      await popoverRef.current?.hidePopover();
      history.push(link);
    };
    list.addEventListener('click', onClick);
    return () => list.removeEventListener('click', onClick);
  }, [history]);

  return (
    <>
      <BaseTag>
        <ExternalLink
          id={id}
          className={clsx(styles.BreakingChange, styles.BreakingChangeLink)}
          to={breaking[0].link}
        >
          <IxIcon
            name={iconElectricalEnergyFilled}
            color="--si-sys-color-text-caution"
            size="16"
          />
          Breaking change in v{version}
        </ExternalLink>
      </BaseTag>
      <IxPopover
        ref={popoverRef}
        trigger={id}
        triggerMode="hover"
        placement="right"
        hasSpike
      >
        <IxPopoverHeader hideClose>
          Breaking changes in v{version}
        </IxPopoverHeader>
        <IxPopoverContent>
          <ul ref={listRef} className={styles.BreakingChangeList}>
            {breaking.map((item) => (
              <li key={item.link + item.description}>
                <ExternalLink to={item.link}>{item.description}</ExternalLink>
              </li>
            ))}
          </ul>
        </IxPopoverContent>
      </IxPopover>
    </>
  );
}
