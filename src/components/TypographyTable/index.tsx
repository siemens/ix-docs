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
import { useColorMode } from '@docusaurus/theme-common';
import {
  iconChevronDownSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import { IxIcon, IxTypography } from '@siemens/ix-react';
import ApiTable, { AnchorHeader } from '@site/src/components/ApiTable';
import { useFramework } from '@site/src/hooks/use-framework';
import { capitalize } from '@site/src/lib/utils/string-format';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CopyButton from '../UI/CopyButton';
import FrameworkSelection from '../UI/FrameworkSelection';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import {
  ColorContainerFix,
  ThemeContext,
} from './../../components/ContainerFix';
import styles from './TypographyTable.module.css';
type Typography = {
  name: string;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing: string;
};

type TypographyContextType = Typography & { displayName: string };

const TypographyContext = createContext<TypographyContextType>({
  name: '',
  fontFamily: '',
  fontSize: '',
  lineHeight: '',
  fontWeight: '',
  letterSpacing: '',
  displayName: '',
});

function useTypographySnippet(format: string) {
  const { framework } = useFramework();
  let snippet = `<ix-typography format="${format}"></ix-typography>`;

  if (framework === 'angular') {
    snippet = `<ix-typography format="${format}"></ix-typography>`;
  }
  if (framework === 'react') {
    snippet = `<IxTypography format="${format}"></IxTypography>`;
  }
  if (framework === 'vue') {
    snippet = `<ix-typography format="${format}"></ix-typography>`;
  }

  return snippet;
}

function TypographyCodeBlock({ format }) {
  const snippet = useTypographySnippet(format);

  return (
    <div className={clsx(styles.CodeBlockPreview, 'code-block-no-copy')}>
      <CodeBlock language="html">{snippet}</CodeBlock>
    </div>
  );
}

function TypographyCopyButton({ format }) {
  return (
    <CopyButton
      text="bla"
      preview={<TypographyCodeBlock format={format}></TypographyCodeBlock>}
    ></CopyButton>
  );
}

function BrowserOnlyTypographyTable({ children, typographyName }) {
  const location = useLocation();

  const [theme, setTheme] = useState(useDefaultTheme());
  const { colorMode } = useColorMode();

  const [isDarkColor, setIsDarkColor] = useState(colorMode === 'dark');

  const [expanded, setExpanded] = useState(
    location.hash === `#typography-${typographyName}`
  );
  const [typography, setTypography] = useState<TypographyContextType>({
    displayName: '',
    name: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: '',
    lineHeight: '',
    letterSpacing: '',
  });

  const themeRef = useRef<HTMLDivElement>();

  function getCustomCSSValue(name: string) {
    const themeContainer = themeRef.current;
    if (!themeContainer) {
      return;
    }

    const computedStyle = getComputedStyle(themeContainer);
    const colorHex = computedStyle.getPropertyValue(name);

    return colorHex.toUpperCase();
  }

  useEffect(() => {
    setIsDarkColor(colorMode === 'dark');
  }, [colorMode]);

  function getFontValues() {
    const name = `--theme-${typographyName}`;
    const customValue = getCustomCSSValue(name);
    const regexResult = /(\d*)\s(.*REM)\/(.*)\s((?:"|').*(?:"|'))/g.exec(
      customValue
    );

    let [_, fontWeight, fontSize, lineHeight, fontFamily] = regexResult;
    const displayName = capitalize(typographyName, true);

    if (!lineHeight.includes('%')) {
      lineHeight = (parseFloat(lineHeight) * 100).toString();
    }

    return {
      displayName,
      name,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    } as TypographyContextType;
  }

  const observerRef = useRef(
    new MutationObserver(() => setTypography(getFontValues()))
  );

  useEffect(() => {
    setTypography(getFontValues());
  }, [typographyName, themeRef.current]);

  useLayoutEffect(() => {
    const observer = observerRef.current;
    if (!themeRef.current) {
      return;
    }

    observer.observe(themeRef.current, {
      attributes: true,
    });

    setTimeout(() => {
      setTypography(getFontValues());
    }, 250);

    return () => {
      observer.disconnect();
    };
  }, [isDarkColor, theme]);

  const themeContext = useMemo(
    () => ({ currentTheme: theme, isDarkColor }),
    [theme, isDarkColor]
  );

  return (
    <ApiTable id={`typography-${typographyName}`}>
      <ThemeContext.Provider value={themeContext}>
        <TypographyContext.Provider value={typography}>
          <ColorContainerFix ref={themeRef}></ColorContainerFix>
          <AnchorHeader
            noBottomBorder={!expanded}
            onClick={() => setExpanded(!expanded)}
            anchorName={`typography-${typographyName}`}
            anchorLabel="Direct link to the typography"
            className={styles.AnchorHeader}
            leftClassName={styles.Header}
            rightClassName={styles.Toolbar}
            right={
              <>
                <TypographyCopyButton format={typographyName} />
                <div className={styles.DesktopOnly}>
                  <ThemeSelection onThemeChange={setTheme}></ThemeSelection>
                </div>
                <FrameworkSelection />
              </>
            }
          >
            <div className={styles.typographyRow}>
              <IxIcon
                name={expanded ? iconChevronDownSmall : iconChevronRightSmall}
              ></IxIcon>
              <span className={styles.headColorName}>
                {typography.displayName}
              </span>
            </div>
          </AnchorHeader>

          {expanded && children}
        </TypographyContext.Provider>
      </ThemeContext.Provider>
    </ApiTable>
  );
}

function TypographyStyle() {
  const typography = useContext(TypographyContext);
  const typographyName = typography.name.slice('--theme-'.length);
  const typographySnippet = useTypographySnippet(typographyName);
  return (
    <>
      <TypographyTable.Text name={'Preview'}>
        <div className={clsx(styles.typographyRow, styles.typographyPreview)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <IxTypography
              format={typography.name.slice('--theme-'.length) as any}
            >
              Lorem ipsum dolor sit amet consectutor.
            </IxTypography>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Code'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <TypographyCodeBlock
              format={typography.name.slice('--theme-'.length) as any}
            ></TypographyCodeBlock>

            <CopyButton
              label=""
              text={typographySnippet}
              className={styles.typographyRowCopyCode}
            ></CopyButton>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font family'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontFamily}</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font size'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontSize}</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Line height'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.lineHeight}%</code>
          </div>
        </div>
      </TypographyTable.Text>

      <TypographyTable.Text name={'Font weight'}>
        <div className={clsx(styles.typographyRow)}>
          <div
            className={clsx(
              styles.typographyColumn,
              styles.typographyColumnChildName
            )}
          >
            <code>{typography.fontWeight}</code>
          </div>
        </div>
      </TypographyTable.Text>
    </>
  );
}

function Text({ children, name }) {
  return (
    <div className={styles.typographyTextRow}>
      <div className="px-8 py-4 font-bold w-auto border-solid border-0 border-r border-[var(--theme-color-soft-bdr)]">
        {name}
      </div>
      <div className="w-auto">{children}</div>
    </div>
  );
}

const TypographyTable = ({ typographyName }) => {
  return (
    <BrowserOnly>
      {() => (
        <BrowserOnlyTypographyTable typographyName={typographyName}>
          <TypographyStyle />
        </BrowserOnlyTypographyTable>
      )}
    </BrowserOnly>
  );
};

TypographyTable.Text = Text;

export default TypographyTable;
