/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import styles from './styles.module.css';

export default function TokenDescription({
  description,
}: Readonly<{ description?: string }>) {
  if (description) {
    return <>{description}</>;
  }

  return (
    <span className={styles.Missing}>
      No description is provided by the package manifest.
    </span>
  );
}
