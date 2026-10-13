/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { PlaygroundViewContext } from '../Playground';
import Pill from '../UI/Pill';
import styles from './styles.module.css';

export type PlaygroundPropToggleProps = Readonly<{
  /** Name of the boolean property that is toggled, e.g. `requireConfirmation` */
  prop: string;
  /** Playground shown while the property is `false` */
  off: React.ReactNode;
  /** Playground shown while the property is `true` */
  on: React.ReactNode;
  defaultValue?: boolean;
}>;

/**
 * Switches between two playgrounds that differ by a single boolean property,
 * so the preview and code of both variants can be compared.
 */
export default function PlaygroundPropToggle(props: PlaygroundPropToggleProps) {
  const [enabled, setEnabled] = useState(props.defaultValue ?? false);
  const [isPreview, setIsPreview] = useState(true);

  return (
    <div className={styles.propToggle}>
      <div className={styles.toolbar} role="group" aria-label={props.prop}>
        <code className={styles.label}>{props.prop}</code>
        <Pill onClick={() => setEnabled(false)} active={!enabled}>
          false
        </Pill>
        <Pill onClick={() => setEnabled(true)} active={enabled}>
          true
        </Pill>
      </div>
      <PlaygroundViewContext.Provider value={{ isPreview, setIsPreview }}>
        {enabled ? props.on : props.off}
      </PlaygroundViewContext.Provider>
    </div>
  );
}
