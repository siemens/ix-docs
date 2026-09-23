/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import { IxIcon } from "@siemens/ix-react";
import styles from "./styles.module.css";
import {
  iconAlarm,
  iconAppMenu,
  iconApps,
  iconCogwheel,
  iconContextMenu,
  iconDownload,
  iconError,
  iconHome,
  iconInfo,
  iconMoreMenu,
  iconPen,
  iconSearch,
  iconSuccess,
  iconTrashcan,
  iconUpload,
  iconUser,
  iconWarning,
  iconWarningOctagon,
  iconWarningRhomb,
} from "@siemens/ix-icons/icons";

const IconTable: React.FC<{
  data: { icon: string; color?: string; name: string; description: React.ReactNode }[];
}> = ({ data }) => {
  return (
    <table className={styles.IconTable}>
      <tbody>
        {data.map((item) => {
          const href = `/docs/icons/icon-library#${item.name}`;
          return (
            <tr key={item.name}>
              <td className={styles.IconCell}>
                <a href={href}>
                  <IxIcon name={item.icon} color={item.color ?? "color-std-text"} />
                </a>
              </td>
              <td className={styles.NameCell}>
                <a href={href}>{item.name}</a>
              </td>
              <td>{item.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IconTable;

export const IconExamplesClarity = [
  {
    icon: iconHome,
    name: "home",
    description: "Use for start pages",
  },
  {
    icon: iconSearch,
    name: "search",
    description: "Use for search inputs",
  },
  {
    icon: iconPen,
    name: "pen",
    description: "Use for edit modes",
  },
  {
    icon: iconCogwheel,
    name: "cogwheel",
    description: "Use for general settings",
  },
  {
    icon: iconTrashcan,
    name: "trashcan",
    description: "Use for delete actions",
  },
  {
    icon: iconUser,
    name: "user",
    description: "Use for user menus",
  },
  {
    icon: iconDownload,
    name: "download",
    description: "Use for downloading files",
  },
  {
    icon: iconUpload,
    name: "upload",
    description: "Use for uploading files",
  },
];

export const IconExamplesStatus = [
  {
    icon: iconWarningOctagon,
    color: "color-critical",
    name: "warning-octagon",
    description: (
      <>
        <strong>Critical</strong>
        <br />
        Use for states beyond danger
      </>
    ),
  },
  {
    icon: iconAlarm,
    color: "color-danger",
    name: "alarm",
    description: (
      <>
        <strong>Danger</strong>
        <br />
        Use for dangerous states
      </>
    ),
  },
  {
    icon: iconError,
    color: "color-danger",
    name: "error",
    description: (
      <>
        <strong>Error</strong>
        <br />
        Use for error states
      </>
    ),
  },
  {
    icon: iconWarning,
    color: "color-warning",
    name: "warning",
    description: (
      <>
        <strong>Warning</strong>
        <br />
        Use for warning states
      </>
    ),
  },
  {
    icon: iconWarningRhomb,
    color: "color-caution",
    name: "warning-rhomb",
    description: (
      <>
        <strong>Caution</strong>
        <br />
        Use for states with low severity
      </>
    ),
  },
  {
    icon: iconSuccess,
    color: "color-success",
    name: "success",
    description: (
      <>
        <strong>Success</strong>
        <br />
        Use for success states
      </>
    ),
  },
  {
    icon: iconInfo,
    color: "color-information",
    name: "info",
    description: (
      <>
        <strong>Information</strong>
        <br />
        Use for info states
      </>
    ),
  },
];

export const IconExamplesMenu = [
  {
    icon: iconAppMenu,
    name: "app-menu",
    description: (
      <>
        Use for <a href="/docs/components/application-menu/guide">application menu</a>
      </>
    ),
  },
  {
    icon: iconApps,
    name: "apps",
    description: (
      <>
        Use for <a href="/docs/components/application-header/guide#application-switch">application switch</a>
      </>
    ),
  },
  {
    icon: iconContextMenu,
    name: "context-menu",
    description: (
      <>
        Use for item-specific actions, e.g. <a href="/docs/components/event-list/code">event list</a> items
      </>
    ),
  },
  {
    icon: iconMoreMenu,
    name: "more-menu",
    description: "Use for overflow and additional options, e.g. in toolbars",
  },
];
