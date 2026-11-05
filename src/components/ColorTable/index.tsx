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
  selectTokenTableSection,
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
import TokenDescription from '../UI/TokenDescription';
import ThemeSelection from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './ColorTable.module.css';

type ColorContextType = {
  value: string;
};

const ColorContext = createContext<ColorContextType>({
  value: '',
});

function toHex(channel: number): string {
  return Math.round(Math.min(Math.max(channel, 0), 255))
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

function parseAlpha(alpha: string | undefined): number {
  if (!alpha) {
    return 1;
  }
  return alpha.endsWith('%') ? parseFloat(alpha) / 100 : parseFloat(alpha);
}

function formatRgb(rgb: number[], alpha: number): string {
  const hex = `#${rgb.map(toHex).join('')}`;
  const alphaPercentage = Math.round(alpha * 100);
  return alphaPercentage < 100 ? `${hex} ${alphaPercentage}%` : hex;
}

// Browsers serialize computed colors as rgb()/rgba(), or as color(srgb …)
// for relative color syntax such as `rgb(from #c75300 r g b / 0)`.
function formatComputedColor(computed: string): string | undefined {
  const number = '[-+]?\\d*\\.?\\d+(?:e[-+]?\\d+)?';
  const rgb = computed.match(
    new RegExp(
      `^rgba?\\(\\s*(${number})[,\\s]+(${number})[,\\s]+(${number})(?:\\s*[,/]\\s*(${number}%?))?\\s*\\)$`,
      'i'
    )
  );
  if (rgb) {
    return formatRgb(
      [rgb[1], rgb[2], rgb[3]].map(Number),
      parseAlpha(rgb[4])
    );
  }

  const srgb = computed.match(
    new RegExp(
      `^color\\(\\s*srgb\\s+(${number})\\s+(${number})\\s+(${number})(?:\\s*/\\s*(${number}%?))?\\s*\\)$`,
      'i'
    )
  );
  if (srgb) {
    return formatRgb(
      [srgb[1], srgb[2], srgb[3]].map((channel) => Number(channel) * 255),
      parseAlpha(srgb[4])
    );
  }

  return undefined;
}

function resolveColor(container: HTMLElement, tokenName: string): string {
  const probe = document.createElement('span');
  probe.hidden = true;
  probe.style.color = `var(${tokenName})`;
  container.appendChild(probe);
  const computed = getComputedStyle(probe).color;
  probe.remove();

  return (
    formatComputedColor(computed) ??
    getComputedStyle(container).getPropertyValue(tokenName).trim()
  );
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
      setValue(resolveColor(themeContainer, entry.name));
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
                  <TokenDescription description={entry.description} />
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
      <div className="px-8 py-4 font-[var(--si-ref-typography-font-weight-sbold)] w-auto border-solid border-0 border-r border-[var(--si-sys-color-border-3)]">
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

const ColorTable = ({ section }: { section: string }) => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const entries = selectTokenTableSection(
    manifest.entries,
    'ColorTable',
    section
  );

  return (
    <BrowserOnly>
      {() => (
        <>
          {entries.map((entry) => (
            <BrowserOnlyColorTable entry={entry} key={entry.name} />
          ))}
        </>
      )}
    </BrowserOnly>
  );
};

ColorTable.Text = Text;
ColorTable.Hex = Hex;

export default ColorTable;
