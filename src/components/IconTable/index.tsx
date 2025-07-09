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
  iconCogwheel,
  iconDownload,
  iconError,
  iconHome,
  iconInfo,
  iconPen,
  iconSearch,
  iconSuccess,
  iconTrashcan,
  iconUpload,
  iconUser,
  iconWarning,
  iconWarningRhomb,
} from "@siemens/ix-icons/icons";

const IconTable: React.FC<{
  data: { icon: string; color?: string; name: string; description: string }[];
}> = ({ data }) => {
  return (
    <table className={styles.IconTable}>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td className={styles.IconCell}>
              <IxIcon name={item.icon} color={item.color ?? "color-std-text"} />
            </td>
            <td className={styles.NameCell}>{item.name}</td>
            <td>{item.description}</td>
          </tr>
        ))}
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
    icon: iconAlarm,
    color: "color-alarm",
    name: "alarm",
    description: "Use for hazardous states",
  },
  {
    icon: iconError,
    color: "color-alarm",
    name: "error",
    description: "Use for error states",
  },
  {
    icon: iconWarningRhomb,
    color: "color-critical",
    name: "warning-rhomb",
    description: "Use for critical states",
  },
  {
    icon: iconWarning,
    color: "color-warning",
    name: "warning",
    description: "Use for warning states",
  },
  {
    icon: iconSuccess,
    color: "color-success",
    name: "success",
    description: "Use for success states",
  },
  {
    icon: iconInfo,
    color: "color-info",
    name: "info",
    description: "Use for info states",
  },
];
