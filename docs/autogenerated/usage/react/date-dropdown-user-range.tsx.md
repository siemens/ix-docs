```tsx
import { DateDropdownOption } from '@siemens/ix';
import { IxDateDropdown } from '@siemens/ix-react';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const dateRangeOptions: DateDropdownOption[] = [
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: lastSevenDays,
    to: today,
  },
  {
    id: 'today',
    label: 'Today',
    from: today,
    to: today,
  },
];

export default () => {
  return (
    <IxDateDropdown
      dateRangeOptions={dateRangeOptions}
      date-range-id="last-7"
      format="LL/dd/yyyy"
    />
  );
};
```
