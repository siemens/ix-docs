import React, { type ReactNode } from 'react';
import AnnouncementBar from '@theme-original/AnnouncementBar';
import type AnnouncementBarType from '@theme/AnnouncementBar';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import UXTEndOfService from '@site/src/components/theme/UXTEndOfService';

type Props = WrapperProps<typeof AnnouncementBarType>;

export default function AnnouncementBarWrapper(props: Props): ReactNode {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return (
    <>
      {search.has('uxt-eos') && <UXTEndOfService></UXTEndOfService>}
      <AnnouncementBar {...props} />
    </>
  );
}
