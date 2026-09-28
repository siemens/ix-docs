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
import { useColorMode } from '@docusaurus/theme-common';
import {
  iconChevronDownSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { useFramework } from '@site/src/hooks/use-framework';
import {
  queryDesignTokens,
  type DesignTokenEntry,
  type DesignTokenManifest,
} from '@site/src/lib/design-tokens';
import { capitalize } from '@site/src/lib/utils/string-format';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CopyButton from '../UI/CopyButton';
import FrameworkSelection from '../UI/FrameworkSelection';
import ThemeSelection from '../UI/ThemeSelection';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import styles from './TypographyTable.module.css';

type TypographyContextType = {
  displayName: string;
  entry: DesignTokenEntry | null;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
};

const TypographyContext = createContext<TypographyContextType>({
  displayName: '',
  entry: null,
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  lineHeight: '',
  letterSpacing: '',
});

function useTypographySnippet(tokenName: string) {
  const { framework } = useFramework();
  const expression = `var(${tokenName})`;

  if (framework === 'react') {
    return `<span style={{ font: '${expression}' }}>Lorem ipsum dolor sit amet consectutor.</span>`;
  }

  return `<span style="font: ${expression}">Lorem ipsum dolor sit amet consectutor.</span>`;
}

function TypographyCodeBlock({ tokenName }: { tokenName: string }) {
  const snippet = useTypographySnippet(tokenName);
  return (
    <div className={clsx(styles.CodeBlockPreview, 'code-block-no-copy')}>
      <CodeBlock language="html">{snippet}</CodeBlock>
    </div>
  );
}

function TypographyCopyButton({ tokenName }: { tokenName: string }) {
  const snippet = useTypographySnippet(tokenName);
  return (
    <CopyButton
      text={snippet}
      preview={<TypographyCodeBlock tokenName={tokenName} />}
    />
  );
}

function BrowserOnlyTypographyTable({ entry }: { entry: DesignTokenEntry }) {
  const location = useLocation();
  const [theme, setTheme] = useState('classic');
  const { colorMode } = useColorMode();
  const isDarkColor = colorMode === 'dark';
  const anchorName = `typography-${entry.name.slice(
    '--si-sys-typography-'.length
  )}`;
  const [expanded, setExpanded] = useState(
    location.hash === `#${anchorName}`
  );
  const [typography, setTypography] = useState<TypographyContextType>({
    displayName: capitalize(
      entry.name.slice('--si-sys-typography-'.length),
      true
    ),
    entry,
    fontFamily: '',
    fontSize: '',
    fontWeight: '',
    lineHeight: '',
    letterSpacing: '',
  });
  const themeRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const themeContainer = themeRef.current;
    const probe = probeRef.current;
    if (!themeContainer || !probe) {
      return;
    }

    const updateTypography = () => {
      const computed = getComputedStyle(probe);
      setTypography({
        displayName: capitalize(
          entry.name.slice('--si-sys-typography-'.length),
          true
        ),
        entry,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
      });
    };
    const observer = new MutationObserver(updateTypography);
    observer.observe(themeContainer, {
      attributes: true,
      attributeFilter: ['data-ix-theme', 'data-ix-color-schema'],
    });
    const timeout = window.setTimeout(updateTypography, 250);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [entry, isDarkColor, theme]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ThemeContext.Provider value={themeContext}>
      <TypographyContext.Provider value={typography}>
        <ColorContainerFix ref={themeRef}>
          <ApiTable id={anchorName}>
            <span
              aria-hidden="true"
              ref={probeRef}
              style={{
                font: `var(${entry.name})`,
                position: 'absolute',
                visibility: 'hidden',
              }}
            />
            <AnchorHeader
              noBottomBorder={!expanded}
              onClick={() => setExpanded(!expanded)}
              anchorName={anchorName}
              anchorLabel={`Direct link to ${entry.name}`}
              className={styles.AnchorHeader}
              leftClassName={styles.Header}
              rightClassName={styles.Toolbar}
              right={
                <>
                  <TypographyCopyButton tokenName={entry.name} />
                  <div className={styles.DesktopOnly}>
                    <ThemeSelection
                      availableThemes={['classic']}
                      onThemeChange={setTheme}
                    />
                  </div>
                  <FrameworkSelection />
                </>
              }
            >
              <div className={styles.typographyRow}>
                <IxIcon
                  name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
                />
                <span className={styles.headColorName}>
                  {typography.displayName}
                </span>
              </div>
            </AnchorHeader>

            {expanded && <TypographyStyle />}
          </ApiTable>
        </ColorContainerFix>
      </TypographyContext.Provider>
    </ThemeContext.Provider>
  );
}

function TypographyStyle() {
  const typography = useContext(TypographyContext);
  const entry = typography.entry;
  if (!entry) {
    return null;
  }
  const typographySnippet = useTypographySnippet(entry.name);

  return (
    <>
      <TypographyTable.Text name="Preview">
        <div className={clsx(styles.typographyRow, styles.typographyPreview)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
            style={{ font: `var(${entry.name})` }}
          >
            Lorem ipsum dolor sit amet consectutor.
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name="Code">
        <div className={styles.typographyRow}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <TypographyCodeBlock tokenName={entry.name} />
            <CopyButton
              label=""
              text={typographySnippet}
              className={styles.typographyRowCopyCode}
            />
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name="Description">
        {entry.description ??
          'No description is provided by the package manifest.'}
      </TypographyTable.Text>

      <TypographyTable.Text name="Font family">
        <code className={styles.typographyFontFamilyValue}>
          {typography.fontFamily}
        </code>
      </TypographyTable.Text>

      <TypographyTable.Text name="Font size">
        <code className={styles.typographyFontSizeValue}>
          {typography.fontSize}
        </code>
      </TypographyTable.Text>

      <TypographyTable.Text name="Line height">
        <code>{typography.lineHeight}</code>
      </TypographyTable.Text>

      <TypographyTable.Text name="Font weight">
        <code>{typography.fontWeight}</code>
      </TypographyTable.Text>
    </>
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
    <div className={styles.typographyTextRow}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const TypographyTable = () => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const entries = queryDesignTokens(manifest, { type: 'typography' });

  return (
    <BrowserOnly>
      {() => (
        <>
          {entries.map((entry) => (
            <BrowserOnlyTypographyTable entry={entry} key={entry.name} />
          ))}
        </>
      )}
    </BrowserOnly>
  );
};

TypographyTable.Text = Text;

export default TypographyTable;
