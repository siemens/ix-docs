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
import { IxToggle } from '@siemens/ix-react';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';
import { useLocalStorage } from './../../../../hooks/use-localStorage';

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

export default function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer,
}: Props): ReactNode {
  const [componentListStyle, setComponentListStyle] = useLocalStorage<
    'category' | 'alphabetical'
  >('components_list_style', 'category');
  const { pathname } = useLocation();

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
      if ('label' in a && 'label' in b) {
        return a.label.localeCompare(b.label);
      }
      return a.type === 'category' ? -1 : 1;
    })
    .filter((item) => item.customProps?.hideOnAlphabetical !== true);

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
      <IxToggle
        textOn="Show as alphabetical"
        textOff="Show as categories"
        checked={componentListStyle === 'alphabetical'}
        onCheckedChange={(event) => {
          setComponentListStyle(event.detail ? 'alphabetical' : 'category');
        }}
        className={styles.toggleListStyle}
      ></IxToggle>
      <ResetOnSidebarChange>
        <div
          className={clsx(
            styles.sidebarViewport,
            hiddenSidebar && styles.sidebarViewportHidden
          )}
        >
          <DocSidebar
            sidebar={
              componentListStyle === 'category' ? sidebar : flatSidebarItems
            }
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
