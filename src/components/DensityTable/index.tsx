/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePluginData } from '@docusaurus/useGlobalData';
import {
  selectTokenTableSection,
  type DesignTokenDensity,
  type DesignTokenEntry,
  type DesignTokenManifest,
} from '@site/src/lib/design-tokens';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import CopyButton from '../UI/CopyButton';
import styles from './DensityTable.module.css';

type ResolvedValue = { value: string; px?: string };
type ResolvedValues = Record<
  string,
  Record<DesignTokenDensity, ResolvedValue>
>;

function resolveValue(value: string): ResolvedValue {
  const rem = value.match(/^(-?\d*\.?\d+)rem$/);
  if (!rem) {
    return { value };
  }
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return { value, px: `${parseFloat(rem[1]) * rootFontSize}px` };
}

function ValueCell({ resolved }: { resolved?: ResolvedValue }) {
  return (
    <td className={styles.ValueCell}>
      <code>{resolved?.value}</code>
      {resolved?.px && <div className={styles.PxValue}>{resolved.px}</div>}
    </td>
  );
}

function DensityProbe({
  density,
  probeRef,
}: {
  density: DesignTokenDensity;
  probeRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      aria-hidden="true"
      ref={probeRef}
      hidden
      data-ix-theme="classic"
      data-ix-color-schema="light"
      data-ix-density={density}
    />
  );
}

function BrowserOnlyDensityTable({
  entries,
}: {
  entries: DesignTokenEntry[];
}) {
  const defaultRef = useRef<HTMLDivElement>(null);
  const compactRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<ResolvedValues>({});

  useLayoutEffect(() => {
    const resolve = () => {
      const defaultProbe = defaultRef.current;
      const compactProbe = compactRef.current;
      if (!defaultProbe || !compactProbe) {
        return;
      }
      const defaultStyle = getComputedStyle(defaultProbe);
      const compactStyle = getComputedStyle(compactProbe);
      setValues(
        Object.fromEntries(
          entries.map((entry) => [
            entry.name,
            {
              default: resolveValue(
                defaultStyle.getPropertyValue(entry.name).trim()
              ),
              compact: resolveValue(
                compactStyle.getPropertyValue(entry.name).trim()
              ),
            },
          ])
        )
      );
    };

    resolve();
    const timeout = window.setTimeout(resolve, 250);
    return () => window.clearTimeout(timeout);
  }, [entries]);

  return (
    <>
      <DensityProbe density="default" probeRef={defaultRef} />
      <DensityProbe density="compact" probeRef={compactRef} />
      <table className={styles.DensityTable}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Default</th>
            <th>Compact</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.name}>
              <td>
                <div className={styles.TokenCell}>
                  <code className={styles.TokenName}>{entry.name}</code>
                  <CopyButton label="" text={`var(${entry.name})`} />
                </div>
              </td>
              <ValueCell resolved={values[entry.name]?.default} />
              <ValueCell resolved={values[entry.name]?.compact} />
              <td>
                {entry.description ??
                  'No description is provided by the package manifest.'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const DensityTable = ({ section }: { section: string }) => {
  const manifest = usePluginData('design-tokens') as DesignTokenManifest;
  const entries = useMemo(
    () =>
      selectTokenTableSection(manifest.entries, 'DensityTable', section).sort(
        (a, b) => a.name.localeCompare(b.name, 'en', { numeric: true })
      ),
    [manifest, section]
  );

  return (
    <BrowserOnly>
      {() => <BrowserOnlyDensityTable entries={entries} />}
    </BrowserOnly>
  );
};

export default DensityTable;
