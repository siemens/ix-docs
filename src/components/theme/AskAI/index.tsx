/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */

import { iconAi, iconSingleCheck } from '@siemens/ix-icons/icons';
import { IxButton, IxTooltip } from '@siemens/ix-react';
import styles from './styles.module.css';
import { useCallback, useEffect, useState } from 'react';

export default function AskAI(props: { prompt: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyPrompt = useCallback(async () => {
    await navigator.clipboard.writeText(props.prompt);
    setIsCopied(true);
  }, [props.prompt]);

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
    <>
      <IxButton
        id="copy-prompt"
        icon={isCopied ? iconSingleCheck : iconAi}
        variant="tertiary"
        className={styles.copy_prompt}
        onClick={copyPrompt}
      >
        {isCopied ? 'Copied!' : 'Ask AI'}
      </IxButton>

    </>
  );
}
