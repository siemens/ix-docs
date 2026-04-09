/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const UPPERCASE_SEGMENT_REGEX = /[A-Z]+(?![a-z])|[A-Z]/g;

export function toKebabCase(str: string): string {
  return str.replace(UPPERCASE_SEGMENT_REGEX, (segment, offset) =>
    `${offset ? '-' : ''}${segment.toLowerCase()}`
  );
}
