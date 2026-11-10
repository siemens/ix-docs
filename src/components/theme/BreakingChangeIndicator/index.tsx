/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Sidebar marker for components with breaking changes (`customProps.breakingChange`, see `sidebars.ts`)
 */
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { iconElectricalEnergyFilled } from '@siemens/ix-icons/icons';
import { IxTooltip, IxTypography } from '@siemens/ix-react';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';

export type BreakingChangeIndicator = {
  version: string;
};

const markerAttribute = 'data-ix-docs-breaking-marker';

export function getBreakingChangeIndicator(item: PropSidebarItem) {
  return item.customProps?.breakingChange as
    BreakingChangeIndicator | undefined;
}

/** Versions of all markers in the sidebar */
export function getBreakingChangeVersions(items: PropSidebarItem[]): string[] {
  const versions = new Set<string>();
  const collect = (list: PropSidebarItem[]) => {
    for (const item of list) {
      const version = getBreakingChangeIndicator(item)?.version;
      if (version) {
        versions.add(version);
      }
      if (item.type === 'category') {
        collect(item.items);
      }
    }
  };
  collect(items);
  return [...versions];
}

export function BreakingChangeMarker({
  version,
}: Readonly<BreakingChangeIndicator>) {
  return (
    <span
      className={styles.Marker}
      role="img"
      aria-label={`Breaking changes in v${version}`}
      {...{ [markerAttribute]: version }}
    />
  );
}

/** One tooltip per version, also attaches to markers rendered later */
export function BreakingChangeTooltip({
  version,
}: Readonly<{ version: string }>) {
  return (
    <IxTooltip
      for={`[${markerAttribute}="${version}"]`}
      titleContent={`Breaking changes in v${version}`}
    >
      <IxTypography format="body">
        Click on the badge in the component to see migration notes
      </IxTypography>
    </IxTooltip>
  );
}

/** Set on a common parent of the markers */
export const breakingChangeIndicatorVars = {
  '--ix-docs-breaking-change-icon': `url("${iconElectricalEnergyFilled}")`,
} as CSSProperties;
