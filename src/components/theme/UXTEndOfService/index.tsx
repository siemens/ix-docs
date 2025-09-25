/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconClose, iconWarning } from '@siemens/ix-icons/icons';
import { IxButton, IxIcon, IxIconButton } from '@siemens/ix-react';
import styles from './styles.module.css';
import { useHistory, useLocation } from '@docusaurus/router';

export default function UXTEndOfService() {
  const location = useLocation();
  const history = useHistory();

  function closeAnnouncement() {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete('uxt-eos');
    history.replace({ search: searchParams.toString() });
  }

  function redirectToBlog() {
    closeAnnouncement();
    history.replace({
      pathname: '/blog/2025/09/31/uxt-eos',
    });
  }

  return (
    <div className={styles.UXTEndOfService}>
      <div className={styles.Content}>
        <IxIcon name={iconWarning} className={styles.Icon}></IxIcon>
        <span className={styles.Message}>
          The User Experience Toolkit (UXT) has reached end of service and is no
          longer supported. We've integrated its capabilities into Siemens
          Industrial Experience (iX). Learn more about this transition.
        </span>
      </div>
      <div className={styles.Content}>
        <IxButton outline onClick={redirectToBlog}>
          Read more
        </IxButton>
        <IxIconButton
          icon={iconClose}
          ghost
          onClick={closeAnnouncement}
        ></IxIconButton>
      </div>
    </div>
  );
}
