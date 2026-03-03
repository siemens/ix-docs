/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FrameworkTypes } from './use-framework';
import {
  BlockSourceResult,
  getBlockSourceByName,
  GetBlockSourceOptions,
} from '../lib/block-registry';
import { useEffect, useState } from 'react';

type HookState = {
  data: BlockSourceResult | null;
  isLoading: boolean;
  error: Error | null;
};

const registryFrameworkMap: Record<string, FrameworkTypes> = {
  angular: 'angular_standalone',
  'angular-standalone': 'angular_standalone',
  react: 'react',
  vue: 'vue',
  html: 'html',
};

export function mapRegistryFrameworkToPlayground(
  data: BlockSourceResult['files'],
): Partial<Record<FrameworkTypes, Record<string, string>>> {
  return Object.entries(data).reduce(
    (accumulator, [framework, files]) => {
      const mappedFramework = registryFrameworkMap[framework];

      if (!mappedFramework || !files) {
        return accumulator;
      }

      accumulator[mappedFramework] = files;
      return accumulator;
    },
    {} as Partial<Record<FrameworkTypes, Record<string, string>>>,
  );
}

export function mapRegistrySourcePathToPlayground(
  data: BlockSourceResult['sourcePath'],
): Partial<Record<FrameworkTypes, Record<string, string>>> {
  return Object.entries(data).reduce(
    (accumulator, [framework, files]) => {
      const mappedFramework = registryFrameworkMap[framework];

      if (!mappedFramework || !files) {
        return accumulator;
      }

      accumulator[mappedFramework] = files;
      return accumulator;
    },
    {} as Partial<Record<FrameworkTypes, Record<string, string>>>,
  );
}

export function useBlockSource(
  name: string,
  options: GetBlockSourceOptions = {},
) {
  const [state, setState] = useState<HookState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    setState((current) => ({ ...current, isLoading: true, error: null }));

    getBlockSourceByName(name, options)
      .then((data) => {
        if (!isMounted) {
          return;
        }

        setState({ data, isLoading: false, error: null });
      })
      .catch((error) => {
        if (!isMounted) {
          return;
        }

        setState({
          data: null,
          isLoading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      });

    return () => {
      isMounted = false;
    };
  }, [
    name,
    options.registryTagOrVersion,
    options.registryUrl,
    options.sourceBaseUrls,
  ]);

  return state;
}
