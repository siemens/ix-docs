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
  formatTokenGroup,
  groupDesignTokens,
  queryDesignTokens,
  tokenGroupAnchor,
  type DesignTokenEntry,
  type DesignTokenManifest,
} from '@site/src/lib/design-tokens';
import clsx from 'clsx';
import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import CopyButton from '../UI/CopyButton';
import ThemeSelection from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ColorTable.module.css';

type ColorContextType = {
  value: string;
};

const ColorContext = createContext<ColorContextType>({
  value: '',
});

function formatColor(value: string): string {
  const normalized = value.trim().toUpperCase();
  if (!normalized.startsWith('#')) {
    return normalized;
  }

  const hex = normalized.slice(1);
  if (hex.length === 3) {
    return `#${hex
      .split('')
      .map((character) => character + character)
      .join('')}`;
  }

  if (hex.length === 4 || hex.length === 8) {
    const alphaLength = hex.length === 8 ? 2 : 1;
    const color = hex.slice(0, -alphaLength);
    const alpha = hex.slice(-alphaLength);
    const alphaPercentage = Math.round(
      (parseInt(alpha, 16) / (alphaLength === 2 ? 255 : 15)) * 100
    );
    return alphaPercentage < 100
      ? `#${color} ${alphaPercentage}%`
      : `#${color}`;
  }

  return normalized;
}

function ColorCircle({ tokenName }: { tokenName: string }) {
  return (
    <div className={styles.colorCircle}>
      <div
        className={styles.colorCircleInner}
        style={{ backgroundColor: `var(${tokenName})` }}
      />
    </div>
  );
}

function BrowserOnlyColorTable({ entry }: { entry: DesignTokenEntry }) {
  const location = useLocation();
  const [theme, setTheme] = useState('classic');
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const isDarkColor = playgroundThemeVariant === 'dark';
  const anchorName = `color-${entry.name.slice('--si-sys-color-'.length)}`;
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
        formatColor(getComputedStyle(themeContainer).getPropertyValue(entry.name))
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
      <ColorContext.Provider value={{ value }}>
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
              <div className={styles.colorRow}>
                <IxIcon
                  name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
                />
                <ColorCircle tokenName={entry.name} />
                <span className={styles.headColorName}>{entry.name}</span>
              </div>
            </AnchorHeader>

            {expanded && (
              <>
                <ColorTable.Text name="Description">
                  {entry.description ??
                    'No description is provided by the package manifest.'}
                </ColorTable.Text>
                <ColorTable.Text name="Value">
                  <code>{value}</code>
                </ColorTable.Text>
                <ColorTable.Text name="Source token">
                  <code>{entry.sourcePath}</code>
                </ColorTable.Text>
              </>
            )}
          </ApiTable>
        </ColorContainerFix>
      </ColorContext.Provider>
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
    <div className={clsx(styles.colorTextRow, 'api-row')}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto p-4">{children}</div>
    </div>
  );
}

function Hex() {
  const color = useContext(ColorContext);
  return (
    <ColorTable.Text name="Value">
      <code>{color.value}</code>
    </ColorTable.Text>
  );
}

const ColorTable = () => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const groups = groupDesignTokens(
    queryDesignTokens(manifest, {
      type: 'color',
      excludeGroups: ['color.border'],
    })
  );

  return (
    <BrowserOnly>
      {() => (
        <>
          {groups.map(({ group, entries }) => (
            <section key={group}>
              <h2 id={tokenGroupAnchor(group)}>{formatTokenGroup(group)}</h2>
              {entries.map((entry) => (
                <BrowserOnlyColorTable entry={entry} key={entry.name} />
              ))}
            </section>
          ))}
        </>
      )}
    </BrowserOnly>
  );
};

ColorTable.Text = Text;
ColorTable.Hex = Hex;

export default ColorTable;
