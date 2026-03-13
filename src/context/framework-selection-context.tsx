/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import { createContext, PropsWithChildren, useContext } from 'react';

export const DEFAULT_FRAMEWORK_SELECTION: FrameworkTypes[] = [
  'angular',
  'angular_standalone',
  'react',
  'vue',
  'html',
];

const FrameworkSelectionContext = createContext<FrameworkTypes[]>(
  DEFAULT_FRAMEWORK_SELECTION,
);

export function FrameworkSelectionProvider(
  props: PropsWithChildren<{ frameworks: FrameworkTypes[] }>,
) {
  const frameworks =
    props.frameworks.length > 0
      ? props.frameworks
      : DEFAULT_FRAMEWORK_SELECTION;

  return (
    <FrameworkSelectionContext.Provider value={frameworks}>
      {props.children}
    </FrameworkSelectionContext.Provider>
  );
}

export function useAvailableFrameworkSelection() {
  return useContext(FrameworkSelectionContext);
}
