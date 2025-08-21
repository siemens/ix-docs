import {
  iconDeviceViewHierarchical,
  iconSortDescending,
} from '@siemens/ix-icons/icons';
import { IxTypography } from '@siemens/ix-react';
import sortSwitchStyles from './sort-switch.module.css';
import clsx from 'clsx';
import React from 'react';

export default function SortSwitch({
  grouped,
  onChange,
}: {
  grouped: boolean;
  onChange: (value: 'grouped' | 'sorted') => void;
}) {
  return (
    <div className={sortSwitchStyles.SortSwitch}>
      <button
        className={clsx(sortSwitchStyles.SortSwitchButton, {
          [sortSwitchStyles.Active]: grouped,
        })}
        onClick={() => onChange('grouped')}
      >
        {React.createElement('ix-icon', {
          name: iconDeviceViewHierarchical,
          size: '16',
        })}
        <IxTypography format="body-sm" bold={grouped}>
          Grouped
        </IxTypography>
      </button>
      <button
        className={clsx(sortSwitchStyles.SortSwitchButton, {
          [sortSwitchStyles.Active]: !grouped,
        })}
        onClick={() => onChange('sorted')}
      >
        {React.createElement('ix-icon', {
          name: iconSortDescending,
          size: '16',
        })}

        <IxTypography format="body-sm" bold={!grouped}>
          Sorted
        </IxTypography>
      </button>
    </div>
  );
}
