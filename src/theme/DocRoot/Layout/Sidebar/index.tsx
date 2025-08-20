import React, { type ReactNode, useState, useCallback } from 'react';
import clsx from 'clsx';
import {
  prefersReducedMotion,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import DocSidebar from '@theme/DocSidebar';
import ExpandButton from '@theme-original/DocRoot/Layout/Sidebar/ExpandButton';
import type { Props } from '@theme/DocRoot/Layout/Sidebar';

import styles from './styles.module.css';
import sortSwitchStyles from './sort-switch.module.css';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useLocalStorage } from './../../../../hooks/use-localStorage';
import {
  iconDeviceViewHierarchical,
  iconSortDescending,
} from '@siemens/ix-icons/icons';
import { IxTypography } from '@siemens/ix-react';

// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children }: { children: ReactNode }) {
  const sidebar = useDocsSidebar();
  return (
    <React.Fragment key={sidebar?.name ?? 'noSidebar'}>
      {children}
    </React.Fragment>
  );
}

function SortSwitch({
  grouped,
  onChange,
}: {
  grouped: boolean;
  onChange: (value: 'grouped' | 'sorted') => void;
}) {
  return (
    <div className={sortSwitchStyles.SortSwitch}>
      <button
        className={clsx(sortSwitchStyles.SortSwitchButton, {
          [sortSwitchStyles.Active]: grouped,
        })}
        onClick={() => onChange('grouped')}
      >
        {React.createElement('ix-icon', {
          name: iconDeviceViewHierarchical,
          size: '16',
        })}
        <IxTypography format="body-sm" bold={grouped}>
          Grouped
        </IxTypography>
      </button>
      <button
        className={clsx(sortSwitchStyles.SortSwitchButton, {
          [sortSwitchStyles.Active]: !grouped,
        })}
        onClick={() => onChange('sorted')}
      >
        {React.createElement('ix-icon', {
          name: iconSortDescending,
          size: '16',
        })}

        <IxTypography format="body-sm" bold={!grouped}>
          Sorted
        </IxTypography>
      </button>
    </div>
  );
}

export default function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}: Props): ReactNode {
  const { pathname } = useLocation();

  // Check if the current path is for the components documentation
  const isComponentsPath = pathname.startsWith('/docs/components/');

  const [componentListStyle, setComponentListStyle] = useLocalStorage<
    'grouped' | 'sorted'
  >('components_list_style', 'grouped');

  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    // onTransitionEnd won't fire when sidebar animation is disabled
    // fixes https://github.com/facebook/docusaurus/issues/8918
    if (!hiddenSidebar && prefersReducedMotion()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);

  const flatSidebarItems = (sidebar as PropSidebarItem[])
    .flatMap((item) => (item.type === 'category' ? item.items : [item]))
    .sort((a, b) => {
      const aIgnoreSort =
        'customProps' in a && a.customProps?.ignoreSortingOnAlphabetical;
      const bIgnoreSort =
        'customProps' in b && b.customProps?.ignoreSortingOnAlphabetical;

      if (aIgnoreSort || bIgnoreSort) {
        return 0;
      }

      if ('label' in a && 'label' in b) {
        return a.label.localeCompare(b.label);
      }
      return a.type === 'category' ? -1 : 1;
    })
    .filter((item) => item.customProps?.hideOnAlphabetical !== true);

  let sidebarItems = sidebar;

  if (isComponentsPath) {
    sidebarItems =
      componentListStyle === 'grouped' ? sidebar : flatSidebarItems;
  }

  return (
    <aside
      className={clsx(
        ThemeClassNames.docs.docSidebarContainer,
        styles.docSidebarContainer,
        hiddenSidebarContainer && styles.docSidebarContainerHidden
      )}
      onTransitionEnd={(e) => {
        if (!e.currentTarget.classList.contains(styles.docSidebarContainer!)) {
          return;
        }

        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }}
    >
      {isComponentsPath && (
        <SortSwitch
          grouped={componentListStyle === 'grouped'}
          onChange={setComponentListStyle}
        />
      )}
      <ResetOnSidebarChange>
        <div
          className={clsx(
            styles.sidebarViewport,
            hiddenSidebar && styles.sidebarViewportHidden
          )}
        >
          <DocSidebar
            sidebar={sidebarItems}
            path={pathname}
            onCollapse={toggleSidebar}
            isHidden={hiddenSidebar}
          />
          {hiddenSidebar && <ExpandButton toggleSidebar={toggleSidebar} />}
        </div>
      </ResetOnSidebarChange>
    </aside>
  );
}
