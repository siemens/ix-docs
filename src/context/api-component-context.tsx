/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createContext, type ReactNode } from 'react';

/** Component tag of the wrapped API tables, e.g. `ix-push-card` */
export const ApiComponentContext = createContext<string | undefined>(undefined);

/**
 * Component of the wrapped API tables, needed on pages with several components
 * to match prefixed `breaking-change` members (`ix-x.name`)
 */
export function ApiComponent({
  tag,
  children,
}: Readonly<{ tag: string; children: ReactNode }>) {
  return (
    <ApiComponentContext.Provider value={tag}>
      {children}
    </ApiComponentContext.Provider>
  );
}
