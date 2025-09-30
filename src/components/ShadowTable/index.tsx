/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import CopyButton from '../UI/CopyButton';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ShadowTable.module.css';

function BoxShadowRect({ boxShadow }) {
  return (
    <div className={styles.shadowCircle}>
      <ColorContainerFix>
        <div
          className={styles.shadowCircleInner}
          style={{ boxShadow: `var(--theme-${boxShadow})` }}
        ></div>
      </ColorContainerFix>
    </div>
  );
}

function BrowserOnlyBorderTable({ shadowName }) {
  const [theme, setTheme] = useState(useDefaultTheme());
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const [isDarkColor, setIsDarkColor] = useState(
    playgroundThemeVariant === 'dark'
  );

  const themeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setIsDarkColor(playgroundThemeVariant === 'dark');
  }, [playgroundThemeVariant]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      <ColorContainerFix ref={themeRef}>
        <ApiTable id={`shadow-${shadowName}`}>
          <AnchorHeader
            noBottomBorder={true}
            anchorName={`shadow-${shadowName}`}
            anchorLabel="Direct link to the border"
            right={
              <>
                <div className={styles.DesktopOnly}>
                  <CopyButton text={`var(--theme-${shadowName})`}></CopyButton>
                </div>
                <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                <ThemeVariantToggle />
              </>
            }
          >
            <div className={styles.shadowRow}>
              <BoxShadowRect boxShadow={shadowName}></BoxShadowRect>
              <span className={styles.headColorName}>--theme-{shadowName}</span>
            </div>
          </AnchorHeader>
        </ApiTable>
      </ColorContainerFix>
    </ThemeContext.Provider>
  );
}

const BorderTable = ({ shadowName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyBorderTable
          shadowName={shadowName}
        ></BrowserOnlyBorderTable>
      )}
    </BrowserOnly>
  );
};

export default BorderTable;
