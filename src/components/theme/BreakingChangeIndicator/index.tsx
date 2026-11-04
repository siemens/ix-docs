/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Indicates components with breaking changes of the upcoming/current major
 * in the sidebar.
 */
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import type { IxPageVersionInfo } from '@site/src/lib/ix-versions';
import { iconElectricalEnergyFilled } from '@siemens/ix-icons/icons';
import { IxTooltip, IxTypography } from '@siemens/ix-react';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';

export type BreakingChangeIndicator = {
  version: string;
};

const markerAttribute = 'data-ix-docs-breaking-marker';

function getPageKey(href?: string) {
  return href
    ?.split('/docs/')[1]
    ?.replace(/\/index$/, '')
    .replace(/\/$/, '');
}

/**
 * Mark sidebar entries of pages with breaking changes,
 * rendered by `src/theme/DocSidebarItem/Category`
 */
export function withBreakingChangeIndicators(
  items: PropSidebarItem[],
  pages: Record<string, IxPageVersionInfo>
): PropSidebarItem[] {
  return items.map((item) => {
    if (item.type !== 'category') {
      return item;
    }

    const breaking = pages[getPageKey(item.href) ?? '']?.breaking;
    const indicator: BreakingChangeIndicator | undefined = breaking && {
      version: breaking.version,
    };

    return {
      ...item,
      customProps: indicator
        ? { ...item.customProps, breakingChangeIndicator: indicator }
        : item.customProps,
      items: withBreakingChangeIndicators(item.items, pages),
    };
  });
}

export function getBreakingChangeIndicator(item: PropSidebarItem) {
  return item.customProps?.breakingChangeIndicator as
    BreakingChangeIndicator | undefined;
}

export function BreakingChangeMarker({
  version,
}: Readonly<BreakingChangeIndicator>) {
  return (
    <span
      className={styles.Marker}
      role="img"
      aria-label={`Breaking changes in v${version}`}
      {...{ [markerAttribute]: '' }}
    />
  );
}

/**
 * One tooltip for all markers, ix-tooltip also attaches to markers rendered later
 */
export function BreakingChangeTooltip({
  version,
}: Readonly<{ version: string }>) {
  return (
    <IxTooltip
      for={`[${markerAttribute}]`}
      titleContent={`Breaking changes in v${version}`}
    >
      <IxTypography format="body">
        Click on the badge in the component to see migration notes
      </IxTypography>
    </IxTooltip>
  );
}

/**
 * CSS variables used by the indicators, set on a common parent of the sidebar
 */
export function getBreakingChangeIndicatorVars() {
  return {
    '--ix-docs-breaking-change-icon': `url("${iconElectricalEnergyFilled}")`,
  } as CSSProperties;
}
