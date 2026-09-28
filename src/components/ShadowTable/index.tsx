/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePluginData } from '@docusaurus/useGlobalData';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import {
  queryDesignTokens,
  type DesignTokenEntry,
  type DesignTokenManifest,
} from '@site/src/lib/design-tokens';
import { useMemo, useRef, useState } from 'react';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import CopyButton from '../UI/CopyButton';
import ThemeSelection from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ShadowTable.module.css';

function BoxShadowRect({ tokenName }: { tokenName: string }) {
  return (
    <div className={styles.shadowCircle}>
      <div
        className={styles.shadowCircleInner}
        style={{ boxShadow: `var(${tokenName})` }}
      />
    </div>
  );
}

function BrowserOnlyShadowTable({ entry }: { entry: DesignTokenEntry }) {
  const [theme, setTheme] = useState('classic');
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const isDarkColor = playgroundThemeVariant === 'dark';
  const themeRef = useRef<HTMLDivElement>(null);
  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );
  const anchorName = `shadow-${entry.name.slice(
    '--si-sys-color-effects-shadow-'.length
  )}`;

  return (
    <ThemeContext.Provider value={themeContext}>
      <ColorContainerFix ref={themeRef}>
        <ApiTable id={anchorName}>
          <AnchorHeader
            noBottomBorder={true}
            anchorName={anchorName}
            anchorLabel={`Direct link to ${entry.name}`}
            right={
              <>
                <div className={styles.DesktopOnly}>
                  <CopyButton text={`var(${entry.name})`} />
                </div>
                <ThemeSelection
                  availableThemes={['classic']}
                  onThemeChange={setTheme}
                />
                <ThemeVariantToggle />
              </>
            }
          >
            <div className={styles.shadowRow} title={entry.description}>
              <BoxShadowRect tokenName={entry.name} />
              <span className={styles.headColorName}>{entry.name}</span>
            </div>
          </AnchorHeader>
        </ApiTable>
      </ColorContainerFix>
    </ThemeContext.Provider>
  );
}

const ShadowTable = () => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const entries = queryDesignTokens(manifest, { type: 'shadow' });

  return (
    <BrowserOnly>
      {() => (
        <>
          {entries.map((entry) => (
            <BrowserOnlyShadowTable entry={entry} key={entry.name} />
          ))}
        </>
      )}
    </BrowserOnly>
  );
};

export default ShadowTable;
