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
  PatternSourceResult,
  getPatternSourceByName,
  GetPatternSourceOptions,
} from '../lib/pattern-registry';
import { useEffect, useState } from 'react';

type PatternHookState = {
  data: PatternSourceResult | null;
  isLoading: boolean;
  error: Error | null;
};

const patternRegistryFrameworkMap: Record<string, FrameworkTypes> = {
  angular: 'angular_standalone',
  'angular-standalone': 'angular_standalone',
  react: 'react',
  vue: 'vue',
  html: 'html',
};

export function mapPatternRegistryFrameworkToPlayground(
  data: PatternSourceResult['files'],
): Partial<Record<FrameworkTypes, Record<string, string>>> {
  return Object.entries(data).reduce(
    (accumulator, [framework, files]) => {
      const mappedFramework = patternRegistryFrameworkMap[framework];

      if (!mappedFramework || !files) {
        return accumulator;
      }

      accumulator[mappedFramework] = files;
      return accumulator;
    },
    {} as Partial<Record<FrameworkTypes, Record<string, string>>>,
  );
}

export function mapPatternRegistrySourcePathToPlayground(
  data: PatternSourceResult['sourcePath'],
): Partial<Record<FrameworkTypes, Record<string, string>>> {
  return Object.entries(data).reduce(
    (accumulator, [framework, files]) => {
      const mappedFramework = patternRegistryFrameworkMap[framework];

      if (!mappedFramework || !files) {
        return accumulator;
      }

      accumulator[mappedFramework] = files;
      return accumulator;
    },
    {} as Partial<Record<FrameworkTypes, Record<string, string>>>,
  );
}

export function usePatternSource(
  patternName: string,
  options: GetPatternSourceOptions = {},
) {
  const [state, setState] = useState<PatternHookState>({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    setState((current) => ({ ...current, isLoading: true, error: null }));

    getPatternSourceByName(patternName, options)
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
    patternName,
    options.registryTagOrVersion,
    options.registryUrl,
  ]);

  return state;
}
