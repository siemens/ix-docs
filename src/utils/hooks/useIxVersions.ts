/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  isSupportedVersion,
  type IxVersionInfo,
} from '@site/src/lib/ix-versions';

export function useIxVersions(): IxVersionInfo {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.customFields.ixVersions as IxVersionInfo;
}

/**
 * Since tags are only shown for the major in development and the latest released major
 */
export function useIsSupportedVersion(version: string | undefined) {
  const { currentMajor } = useIxVersions();
  return !!version && isSupportedVersion(version, currentMajor);
}
