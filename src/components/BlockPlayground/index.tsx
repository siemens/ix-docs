/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */

import Playground from '../Playground';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import {
  mapRegistryFrameworkToPlayground,
  mapRegistrySourcePathToPlayground,
  useBlockSource,
} from '@site/src/hooks/use-block-source';
import CodeBlock from '@theme/CodeBlock';
import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { CodePreviewFiles, SourceFiles } from '../CodePreview';
import styles from './block.module.css';
import { IxIcon, IxTooltip } from '@siemens/ix-react';
import { iconCheck, iconCopy } from '@siemens/ix-icons/icons';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function detectLanguage(fileName: string) {
  if (fileName.endsWith('.tsx') || fileName.endsWith('.ts')) {
    return 'tsx';
  }

  if (fileName.endsWith('.jsx') || fileName.endsWith('.js')) {
    return 'jsx';
  }

  if (fileName.endsWith('.html')) {
    return 'html';
  }

  if (fileName.endsWith('.vue')) {
    return 'vue';
  }

  if (fileName.endsWith('.scss') || fileName.endsWith('.css')) {
    return 'css';
  }

  if (fileName.endsWith('.json')) {
    return 'json';
  }

  return 'tsx';
}

export default function BlockPlayground(
  props: Readonly<{ name: string; height: string }>
) {
  const [isCopied, setIsCopied] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { data, isLoading, error } = useBlockSource(props.name);

  const cliUrl = useBaseUrl(
    `docs/examples/blocks/overview#what-is-siemens-ix-cli`
  );

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  const files = useMemo<CodePreviewFiles>(() => {
    if (!data) {
      return {};
    }

    return mapRegistrySourcePathToPlayground(
      data.sourcePath
    ) as CodePreviewFiles;
  }, [data]);

  const source = useMemo<SourceFiles>(() => {
    if (!data) {
      return {};
    }

    const frameworkFiles = mapRegistryFrameworkToPlayground(data.files);

    return Object.entries(frameworkFiles).reduce(
      (accumulator, [frameworkName, sourceFiles]) => {
        if (!sourceFiles) {
          return accumulator;
        }

        const framework = frameworkName as FrameworkTypes;

        accumulator[framework] = Object.entries(sourceFiles).reduce(
          (fileAccumulator, [fileName, content]) => {
            const language = detectLanguage(fileName);

            fileAccumulator[fileName] = () => (
              <CodeBlock language={language}>{content}</CodeBlock>
            );

            return fileAccumulator;
          },
          {} as Record<string, FC>
        );

        return accumulator;
      },
      {} as SourceFiles
    );
  }, [data]);

  const fallbackMessage = isLoading
    ? 'Loading source...'
    : (error?.message ?? null);

  const fallbackFiles = useMemo<CodePreviewFiles>(() => {
    if (!fallbackMessage) {
      return files;
    }

    return {
      html: {
        'status.txt': '',
      },
    };
  }, [fallbackMessage, files]);

  const fallbackSource = useMemo<SourceFiles>(() => {
    if (!fallbackMessage) {
      return source;
    }

    return {
      html: {
        'status.txt': () => (
          <CodeBlock language="text">{fallbackMessage}</CodeBlock>
        ),
      },
    };
  }, [fallbackMessage, source]);

  return (
    <>
      <Playground
        name={props.name}
        source={fallbackSource}
        files={fallbackFiles}
        previewUrl={data?.previewUrl}
        height={props.height}
        disableStackblitz
        hideActionBarText={true}
      >
        <Playground.SubHeader>
          <button
            id={`copy-cli-command-${props.name}`}
            className={styles['copy-cli-command']}
            onClick={() => {
              navigator.clipboard.writeText(
                `npx @siemens/ix-cli@latest add ${props.name}`
              );

              if (copiedTimeoutRef.current) {
                clearTimeout(copiedTimeoutRef.current);
              }

              setIsCopied(true);

              copiedTimeoutRef.current = setTimeout(() => {
                setIsCopied(false);
                copiedTimeoutRef.current = null;
              }, 3000);
            }}
          >
            <IxIcon name={isCopied ? iconCheck : iconCopy} size="16" />
            <span className={styles['cli-text-container']}>
              <span className={styles['cli-text-short']}>
                npx ix-cli add {props.name}
              </span>
            </span>
          </button>
          <IxTooltip for={`#copy-cli-command-${props.name}`} interactive>
            Copy the <Link to={cliUrl}>ix-cli</Link> command to the clipboard.
            You can use this command to add the block to your project using the{' '}
            <Link to={cliUrl}>ix-cli</Link>.
          </IxTooltip>
        </Playground.SubHeader>
      </Playground>
    </>
  );
}
