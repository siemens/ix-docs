/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import BrowserOnly from '@docusaurus/BrowserOnly';
import { iconChevronDownSmall, iconCode } from '@siemens/ix-icons/icons';
import { IxDropdown, IxDropdownItem } from '@siemens/ix-react';
import {
  FrameworkTypes,
  getDisplayNameFrameworkTypes,
  useFramework,
} from '@site/src/hooks/use-framework';
import { useAvailableFrameworkSelection } from '@site/src/context/framework-selection-context';
import React, { useContext, useEffect, useState } from 'react';
import Button from '../Button';
import { ThemeContext } from '../../ContainerFix';

export default function (props: {
  onFrameworkChange?: (framework: FrameworkTypes) => void;
}) {
  return <BrowserOnly>{() => <FrameworkSelection {...props} />}</BrowserOnly>;
}

function FrameworkSelection(
  props: Readonly<{
    onFrameworkChange?: (framework: FrameworkTypes) => void;
  }>,
) {
  const availableFrameworks = useAvailableFrameworkSelection();
  const { framework, setFramework } = useFramework();
  const [ref, setRef] = useState<HTMLButtonElement>(null);
  const ctx = useContext(ThemeContext);

  const selectedFramework = availableFrameworks.includes(framework)
    ? framework
    : availableFrameworks[0];

  useEffect(() => {
    if (!availableFrameworks.includes(framework) && selectedFramework) {
      setFramework(selectedFramework);
    }
  }, [availableFrameworks, framework, selectedFramework, setFramework]);

  useEffect(() => {
    if (selectedFramework) {
      props.onFrameworkChange && props.onFrameworkChange(selectedFramework);
    }
  }, [selectedFramework]);

  if (!selectedFramework) {
    return null;
  }

  return (
    <>
      <Button ref={setRef} className={'dropdown-button'}>
        {React.createElement('ix-icon', {
          name: iconCode,
          size: '16',
        })}
        {!ctx.hideActionBarText && (
          <span className="ButtonText">
            {getDisplayNameFrameworkTypes(selectedFramework)}
          </span>
        )}
        {React.createElement('ix-icon', {
          name: iconChevronDownSmall,
          size: '16',
        })}
      </Button>
      {ref && (
        <IxDropdown trigger={ref}>
          {availableFrameworks.map((availableFramework) => (
            <IxDropdownItem
              key={availableFramework}
              onClick={() => setFramework(availableFramework)}
            >
              {getDisplayNameFrameworkTypes(availableFramework)}
            </IxDropdownItem>
          ))}
        </IxDropdown>
      )}
    </>
  );
}
