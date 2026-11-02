/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TRIAL: Indicates components with breaking changes of the upcoming/current major
 * in the sidebar. The style switch is temporary to compare the options,
 * remove it once a style is chosen.
 */
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import type { IxPageVersionInfo } from '@site/src/lib/ix-versions';
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxTooltip, IxTypography } from '@siemens/ix-react';
import clsx from 'clsx';
import type { CSSProperties } from 'react';
import styles from './styles.module.css';

export type BreakingChangeIndicatorStyle = 'off' | 'dot' | 'pill' | 'icon';

export type BreakingChangeIndicator = {
  style: Exclude<BreakingChangeIndicatorStyle, 'off'>;
  version: string;
};

const options: { value: BreakingChangeIndicatorStyle; label: string }[] = [
  { value: 'off', label: 'Off' },
  { value: 'dot', label: 'Dot' },
  { value: 'pill', label: 'Pill' },
  { value: 'icon', label: 'Icon' },
];

const indicatorClass = {
  dot: styles.Dot,
  pill: styles.Pill,
  icon: styles.Icon,
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
  pages: Record<string, IxPageVersionInfo>,
  style: BreakingChangeIndicatorStyle
): PropSidebarItem[] {
  if (style === 'off') {
    return items;
  }

  return items.map((item) => {
    if (item.type !== 'category') {
      return item;
    }

    const breaking = pages[getPageKey(item.href) ?? '']?.breaking;
    const indicator: BreakingChangeIndicator | undefined = breaking && {
      style,
      version: breaking.version,
    };

    return {
      ...item,
      customProps: indicator
        ? { ...item.customProps, breakingChangeIndicator: indicator }
        : item.customProps,
      items: withBreakingChangeIndicators(item.items, pages, style),
    };
  });
}

export function getBreakingChangeIndicator(item: PropSidebarItem) {
  return item.customProps?.breakingChangeIndicator as
    BreakingChangeIndicator | undefined;
}

export function BreakingChangeMarker({
  style,
  version,
  withTooltip = true,
}: Readonly<BreakingChangeIndicator & { withTooltip?: boolean }>) {
  return (
    <span
      className={clsx(styles.Marker, indicatorClass[style])}
      role="img"
      aria-label={`Changes in v${version}`}
      {...(withTooltip ? { [markerAttribute]: '' } : {})}
    >
      {style === 'pill' ? `v${version.split('.')[0]}` : null}
    </span>
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
    // Icons are filled by ix-icon, a mask needs an opaque fill
    '--ix-docs-info-icon': `url("${iconInfo.replace(
      "fill='none'",
      "fill='black'"
    )}")`,
  } as CSSProperties;
}

export function BreakingChangeIndicatorSwitch({
  value,
  version,
  onChange,
}: Readonly<{
  value: BreakingChangeIndicatorStyle;
  version: string;
  onChange: (value: BreakingChangeIndicatorStyle) => void;
}>) {
  return (
    <div className={styles.Switch}>
      <div className={styles.SwitchHeader}>
        <span>Change indicator</span>
        <span className={styles.Trial}>Trial</span>
      </div>
      <div className={styles.SwitchButtons} role="radiogroup">
        {options.map((option) => (
          <button
            key={option.value}
            role="radio"
            aria-checked={value === option.value}
            className={clsx(styles.SwitchButton, {
              [styles.Active]: value === option.value,
            })}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {value !== 'off' && (
        <div className={styles.Legend}>
          <BreakingChangeMarker
            style={value}
            version={version}
            withTooltip={false}
          />
          <span>Breaking changes in v{version}</span>
        </div>
      )}
    </div>
  );
}
