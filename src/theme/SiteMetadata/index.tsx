import type { WrapperProps } from '@docusaurus/types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SiteMetadata from '@theme-original/SiteMetadata';
import type SiteMetadataType from '@theme/SiteMetadata';
import { useEffect } from 'react';
type Props = WrapperProps<typeof SiteMetadataType>;

export default function SiteMetadataWrapper(props: Props): JSX.Element {
  const context = useDocusaurusContext();
  const isDevelopedWithoutBrandTheme =
    !context.siteConfig.customFields.withBrandTheme;

  useEffect(() => {
    const initialVariant =
      document.documentElement.getAttribute('data-theme') || 'dark';

    const theme = isDevelopedWithoutBrandTheme ? 'classic' : 'brand';
    document.documentElement.setAttribute('data-ix-theme', theme);
    document.documentElement.setAttribute(
      'data-ix-color-schema',
      initialVariant
    );

    const observer = new MutationObserver(() => {
      const variant = document.documentElement.getAttribute('data-theme');
      const theme = isDevelopedWithoutBrandTheme ? 'classic' : 'brand';

      if (isDevelopedWithoutBrandTheme) {
        console.log('development theme');
      }

      document.documentElement.setAttribute('data-ix-theme', theme);
      document.documentElement.setAttribute('data-ix-color-schema', variant);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      observer.disconnect();
    };
  }, [isDevelopedWithoutBrandTheme]);

  return (
    <>
      <SiteMetadata {...props} />
    </>
  );
}
