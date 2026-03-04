/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iconOpenExternal } from '@siemens/ix-icons/icons';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import { usePlaygroundThemeVariant } from '@site/src/hooks/use-playground-theme';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import CodePreview, { CodePreviewFiles, SourceFiles } from '../CodePreview';
import FrameworkSelection from '../UI/FrameworkSelection';
import OpenStackblitz from '../UI/OpenStackblitz';
import Pill from '../UI/Pill';
import ThemeSelection, { useDefaultTheme } from '../UI/ThemeSelection';
import ThemeVariantToggle from '../UI/ThemeVariantToggle';
import styles from './styles.module.css';
import { ColorContainerFix, ThemeContext } from '../ContainerFix';
import {
  DEFAULT_FRAMEWORK_SELECTION,
  FrameworkSelectionProvider,
} from '@site/src/context/framework-selection-context';

function getAvailableFrameworks(
  files: CodePreviewFiles,
  source: SourceFiles,
  onlyFramework?: FrameworkTypes,
) {
  if (onlyFramework) {
    return [onlyFramework];
  }

  const available = DEFAULT_FRAMEWORK_SELECTION.filter((framework) => {
    const filesByFramework = files?.[framework];
    const sourceByFramework = source?.[framework];

    return (
      !!filesByFramework &&
      Object.keys(filesByFramework).length > 0 &&
      !!sourceByFramework &&
      Object.keys(sourceByFramework).length > 0
    );
  });

  return available.length > 0 ? available : DEFAULT_FRAMEWORK_SELECTION;
}

function PreviewActions(
  props: Readonly<{
    openExternalUrl: string;
    onChangeTheme: (theme: string) => void;
  }>,
) {
  return (
    <>
      <a
        href={props.openExternalUrl}
        target="_blank"
        className={clsx(
          'flex gap-1 text-[var(--theme-color-soft-text)] flex-nowrap text-nowrap pr-2',
          styles.openExternal,
        )}
      >
        {React.createElement('ix-icon', {
          name: iconOpenExternal,
          size: '16',
        })}
        <span className="ButtonText">Full preview</span>
      </a>
      <ThemeSelection onThemeChange={props.onChangeTheme} />
      <ThemeVariantToggle />
    </>
  );
}

function CodeActions(
  props: Readonly<{
    mount: string;
    hideFrameworkSelection: boolean;
    availableFrameworks: FrameworkTypes[];
    framework: FrameworkTypes;
    files?: Record<string, string>;
    disableStackblitz?: boolean;
    onFrameworkChange: (framework: FrameworkTypes) => void;
  }>,
) {
  return (
    <>
      {!props.disableStackblitz && (
        <div className="DesktopOnly">
          <OpenStackblitz
            framework={props.framework}
            files={props.files ?? {}}
            mount={props.mount}
          />
        </div>
      )}
      {!props.hideFrameworkSelection && (
        <FrameworkSelectionProvider frameworks={props.availableFrameworks}>
          <FrameworkSelection onFrameworkChange={props.onFrameworkChange} />
        </FrameworkSelectionProvider>
      )}
    </>
  );
}

export type PlaygroundProps = Readonly<{
  name: string;
  alternativePreviewName?: string;
  previewUrl?: string;
  files: CodePreviewFiles;
  source: SourceFiles;
  disableStackblitz?: boolean;
  height?: string;
  noPreview?: boolean;
  onlyFramework?: FrameworkTypes;
  children?: React.ReactNode;
}>;

function PlaygroundFooter(props: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.footer}>{props.children}</div>;
}

function Playground(props: PlaygroundProps) {
  const defaultTheme = useDefaultTheme();
  const { playgroundThemeVariant } = usePlaygroundThemeVariant();
  const availableFrameworks = useMemo(
    () =>
      getAvailableFrameworks(props.files, props.source, props.onlyFramework),
    [props.files, props.onlyFramework, props.source],
  );
  const fallbackFramework = availableFrameworks[0] ?? 'angular';
  const [isDark, setIsDark] = useState(playgroundThemeVariant === 'dark');
  const [isPreview, setIsPreview] = useState(!props.noPreview);
  const [theme, setTheme] = useState(defaultTheme);
  const defaultIframeSrc = useBaseUrl(
    `/demo/v2/preview/html/preview-examples/${
      props.alternativePreviewName ?? props.name
    }.html?no-margin=true&theme=${theme}&colorSchema=${isDark ? 'dark' : 'light'}`,
  );
  const iframeSrc = props.previewUrl
    ? `${props.previewUrl}${props.previewUrl.includes('?') ? '&' : '?'}theme=${theme}&colorSchema=${
        isDark ? 'dark' : 'light'
      }`
    : defaultIframeSrc;
  const [framework, setFramework] = useState<FrameworkTypes>(
    props.onlyFramework ?? fallbackFramework,
  );
  const [SourceCode, setSourceCode] = useState<React.FC>(() => () => (
    <CodeBlock>Nothing to see here 🥸</CodeBlock>
  ));

  useEffect(() => {
    setIsDark(playgroundThemeVariant === 'dark');
  }, [playgroundThemeVariant]);

  useEffect(() => {
    if (!availableFrameworks.includes(framework)) {
      setFramework(fallbackFramework);
    }
  }, [availableFrameworks, fallbackFramework, framework]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, isDarkColor: isDark }}>
      <ColorContainerFix>
        <div className={styles.playground}>
          <div className={styles.toolbar}>
            {!props.noPreview && (
              <>
                <Pill onClick={() => setIsPreview(true)} active={isPreview}>
                  Preview
                </Pill>
                <Pill onClick={() => setIsPreview(false)} active={!isPreview}>
                  Code
                </Pill>
                <div className={styles.spacer}></div>
              </>
            )}

            <div className={styles.toolbar__right}>
              {!isPreview && (
                <CodePreview
                  selectedFramework={framework}
                  name={props.name}
                  files={props.files}
                  source={props.source}
                  onShowSource={(source) => {
                    setSourceCode(() => source);
                  }}
                ></CodePreview>
              )}

              <div className={styles.toolbar__actions}>
                {isPreview ? (
                  <PreviewActions
                    openExternalUrl={iframeSrc}
                    onChangeTheme={setTheme}
                  />
                ) : (
                  <CodeActions
                    mount={props.name}
                    hideFrameworkSelection={!!props.onlyFramework}
                    availableFrameworks={availableFrameworks}
                    onFrameworkChange={setFramework}
                    framework={framework}
                    disableStackblitz={props.disableStackblitz}
                    files={props.files[framework]}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={clsx(styles.preview, {
              [styles.code]: isPreview,
              [styles.previewWithFooter]: !!props.children,
            })}
            style={{ ['--preview-height']: props.height } as any}
          >
            {isPreview ? (
              <iframe
                title={`Preview for ${props.name}`}
                src={iframeSrc}
                className={styles.iframe}
              ></iframe>
            ) : (
              <SourceCode />
            )}
          </div>
          {props.children}
        </div>
      </ColorContainerFix>
    </ThemeContext.Provider>
  );
}

type PlaygroundComponent = ((props: PlaygroundProps) => JSX.Element) & {
  Footer: typeof PlaygroundFooter;
};

const BrowserPlayground = ((props: PlaygroundProps) => {
  return <BrowserOnly>{() => <Playground {...props} />}</BrowserOnly>;
}) as PlaygroundComponent;

BrowserPlayground.Footer = PlaygroundFooter;

export default BrowserPlayground;
