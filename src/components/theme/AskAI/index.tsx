/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */

import { useLocation } from '@docusaurus/router';
import { iconAi, iconSingleCheck } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxIconButton,
  IxTooltip,
  IxTypography,
} from '@siemens/ix-react';
import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css';

const iconMarkdown =
  'data:image/svg+xml;utf8,<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><path fill-rule="evenodd" d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708"></path><path fill-rule="evenodd" d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5"></path><path d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11z"></path></svg>';

export default function AskAI(props: { id: string; prompt: string }) {
  const { pathname } = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const copyPrompt = useCallback(async () => {
    await navigator.clipboard.writeText(props.prompt);
    setIsCopied(true);
  }, [props.prompt]);

  const viewAsMarkdown = useCallback(() => {
    window.location.assign(`${pathname}.md`);
  }, [pathname]);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isCopied]);

  return (
    <div className={styles.actions}>
      <IxButton
        id={props.id}
        icon={isCopied ? iconSingleCheck : iconAi}
        variant="tertiary"
        onClick={copyPrompt}
      >
        {isCopied ? 'Copied!' : 'Ask AI'}
      </IxButton>
      <IxIconButton
        id={`show_markdown_${props.id}`}
        icon={iconMarkdown}
        variant="tertiary"
        aria-label="View as Markdown"
        onClick={viewAsMarkdown}
      />
      <IxTooltip for={`#show_markdown_${props.id}`}>
        <IxTypography format="body">View as Markdown</IxTypography>
      </IxTooltip>
    </div>
  );
}
