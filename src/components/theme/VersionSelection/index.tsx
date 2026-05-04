/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  IxButton,
  IxDropdown,
  IxDropdownItem,
  IxIcon,
  IxTypography,
} from '@siemens/ix-react';
import { iconChevronDown } from '@siemens/ix-icons/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useCallback, useMemo, useRef } from 'react';
import clsx from 'clsx';

import styles from './VersionSelection.module.css';
import Link from '@docusaurus/Link';

type VersionItem = {
  id: string;
  href: string;
  label: string;
  dropdownLabel?: string;
};

type VersionFile = {
  latestVersion: string;
  currentVersion: string;
  versions: VersionItem[];
};

export default function VersionSelection({ value }: { value: VersionFile }) {
  const currentVersion = useMemo(
    () => value.versions.find((v) => v.id === value.currentVersion),
    [value]
  );

  const dropdownListenerRef = useRef<{
    el: HTMLIxDropdownElement;
    handler: (e: Event) => void;
  } | null>(null);

  const dropdownRef = useCallback((el: HTMLIxDropdownElement | null) => {
    if (dropdownListenerRef.current) {
      const { el: prevEl, handler } = dropdownListenerRef.current;
      prevEl.removeEventListener('itemClick', handler);
      dropdownListenerRef.current = null;
    }
    if (el) {
      const handler = (e: Event) => {
        (e.target as HTMLElement).querySelector<HTMLAnchorElement>('a[href]')?.click();
      };
      el.addEventListener('itemClick', handler);
      dropdownListenerRef.current = { el, handler };
    }
  }, []);

  return (
    <BrowserOnly>
      {() => (
        <>
          <IxButton
            id="custom-version-selection"
            className={clsx('navbar__item nav-link', styles.versionSelection)}
            variant="tertiary"
            aria-label={`${currentVersion?.dropdownLabel ?? currentVersion?.label}, select version`}
            aria-haspopup="listbox"
          >
            <span>
              <IxTypography textColor="std" format="label-lg">
                {currentVersion?.label}
              </IxTypography>
              <IxIcon color="color-std-text" name={iconChevronDown} />
            </span>
          </IxButton>
          <IxDropdown ref={dropdownRef} trigger="custom-version-selection">
            {value.versions.map((version) => (
              <IxDropdownItem
                key={version.id}
                aria-label={
                  currentVersion?.id === version.id
                    ? `${version.dropdownLabel ?? version.label}, current version`
                    : `${version.dropdownLabel ?? version.label}, link`
                }
              >
                {currentVersion?.id === version.id ? (
                  <span>
                    {currentVersion?.dropdownLabel ?? currentVersion?.label}
                  </span>
                ) : (
                  <a href={version.href} className="all-unset" tabIndex={-1}>
                    {version.dropdownLabel ?? version.label}
                  </a>
                )}
              </IxDropdownItem>
            ))}
            <IxDropdownItem aria-label="Show versioning, link">
              <Link href="/docs/home/releases/release-version" tabIndex={-1}>
                Show versioning
              </Link>
            </IxDropdownItem>
          </IxDropdown>
        </>
      )}
    </BrowserOnly>
  );
}
