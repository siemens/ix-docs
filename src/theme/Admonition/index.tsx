/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconInfo, iconWarningFilled } from '@siemens/ix-icons/icons';
import { IxIcon } from '@siemens/ix-react';
import Admonition from '@theme-original/Admonition';
import type { Props } from '@theme/Admonition';

export default function AdmonitionWrapper(props: Props) {
  switch (props.type) {
    case 'info':
      return (
        <Admonition
          icon={<IxIcon name={iconInfo}></IxIcon>}
          {...props}
        ></Admonition>
      );
    case 'warning':
      return (
        <Admonition
          icon={<IxIcon name={iconWarningFilled}></IxIcon>}
          {...props}
        ></Admonition>
      );
    default:
      return <Admonition {...props}></Admonition>;
  }
}
