/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxDropdown, IxDropdownItem, IxIcon } from '@siemens/ix-react';
import {
  iconChevronDown,
  iconOpenExternal,
  iconVersionHistory,
} from '@siemens/ix-icons/icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useMemo } from 'react';
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
  return (
    <BrowserOnly>
      {() => (
        <>
          <span
            id="custom-version-selection"
            className={clsx('navbar__item nav-link', styles.versionSelection)}
          >
            {currentVersion.label}
            <IxIcon name={iconChevronDown} />
          </span>
          <IxDropdown trigger="custom-version-selection">
            {value.versions.map((version) => (
              <IxDropdownItem key={version.id}>
                {currentVersion.id === version.id ? (
                  <span>
                    {currentVersion.dropdownLabel ?? currentVersion.label}
                  </span>
                ) : (
                  <a href={version.href} className="all-unset">
                    {version.dropdownLabel ?? version.label}
                  </a>
                )}
              </IxDropdownItem>
            ))}
            <IxDropdownItem>
              <Link href="/docs/home/releases/release-version">
                Show versioning
              </Link>
            </IxDropdownItem>
          </IxDropdown>
        </>
      )}
    </BrowserOnly>
  );
}
