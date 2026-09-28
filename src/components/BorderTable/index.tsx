/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import {
  iconChevronDownSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import {
  queryDesignTokens,
  type DesignTokenEntry,
  type DesignTokenManifest,
} from '@site/src/lib/design-tokens';
import clsx from 'clsx';
import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import CopyButton from '../UI/CopyButton';
import ThemeSelection from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './BorderTable.module.css';

function BorderRect({ tokenName }: { tokenName: string }) {
  return (
    <div className={styles.borderCircle}>
      <div
        className={styles.borderCircleInner}
        style={{ borderColor: `var(${tokenName})` }}
      />
    </div>
  );
}

function BrowserOnlyBorderTable({ entry }: { entry: DesignTokenEntry }) {
  const location = useLocation();
  const [theme, setTheme] = useState('classic');
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const isDarkColor = playgroundThemeVariant === 'dark';
  const anchorName = `border-${entry.name.slice('--si-sys-color-border-'.length)}`;
  const [expanded, setExpanded] = useState(
    location.hash === `#${anchorName}`
  );
  const [value, setValue] = useState('');
  const themeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const themeContainer = themeRef.current;
    if (!themeContainer) {
      return;
    }

    const updateValue = () => {
      setValue(
        getComputedStyle(themeContainer)
          .getPropertyValue(entry.name)
          .trim()
          .toUpperCase()
      );
    };
    const observer = new MutationObserver(updateValue);
    observer.observe(themeContainer, {
      attributes: true,
      attributeFilter: ['data-ix-theme', 'data-ix-color-schema'],
    });
    const timeout = window.setTimeout(updateValue, 250);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [entry.name, isDarkColor, theme]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      <ColorContainerFix ref={themeRef}>
        <ApiTable id={anchorName}>
          <AnchorHeader
            noBottomBorder={!expanded}
            onClick={() => setExpanded(!expanded)}
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
            <div className={styles.borderRow}>
              <IxIcon
                name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
              />
              <BorderRect tokenName={entry.name} />
              <span className={styles.headColorName}>{entry.name}</span>
            </div>
          </AnchorHeader>

          {expanded && (
            <>
              <BorderTable.Text name="Description">
                {entry.description ??
                  'No description is provided by the package manifest.'}
              </BorderTable.Text>
              <BorderTable.Text name="Color">
                <code>{value}</code>
              </BorderTable.Text>
              <BorderTable.Text name="Source token">
                <code>{entry.sourcePath}</code>
              </BorderTable.Text>
            </>
          )}
        </ApiTable>
      </ColorContainerFix>
    </ThemeContext.Provider>
  );
}

function Text({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div className={clsx(styles.borderTextRow, 'api-row')}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const BorderTable = () => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const entries = queryDesignTokens(manifest, {
    type: 'color',
    groups: ['color.border'],
  });

  return (
    <BrowserOnly>
      {() => (
        <>
          {entries.map((entry) => (
            <BrowserOnlyBorderTable entry={entry} key={entry.name} />
          ))}
        </>
      )}
    </BrowserOnly>
  );
};

BorderTable.Text = Text;

export default BorderTable;
