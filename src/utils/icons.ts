/*
 * COPYRIGHT (c) Siemens AG 2018-2025 ALL RIGHTS RESERVED.
 */
import * as icons from '@siemens/ix-icons/icons';

export function getIcon(name: string): string {
  // name to CamelCase
  const camelCaseName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  return icons[`icon${camelCaseName}`] || icons.iconMissingSymbol;
}
