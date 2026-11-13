/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import './DevicePreview.scss';

const DevicePreview = (props: { image: string; style?: any }) => {
  return (
    <figure className="DevicePreview" style={props.style}>
      <div className="Content">
        <img src={props.image} alt="Device preview" />
      </div>
      <div className="Frame"></div>
    </figure>
  );
};

export default DevicePreview;
