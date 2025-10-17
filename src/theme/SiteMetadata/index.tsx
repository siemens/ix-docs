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
    // Set initial theme based on whether brand theme is available
    const initialVariant = document.documentElement.getAttribute('data-theme') || 'dark';
    
    if (isDevelopedWithoutBrandTheme) {
      document.documentElement.setAttribute('data-ix-theme', 'classic');
      document.documentElement.setAttribute('data-ix-color-schema', initialVariant);
    } else {
      document.documentElement.setAttribute('data-ix-theme', 'brand');
      document.documentElement.setAttribute('data-ix-color-schema', initialVariant);
    }

    const observer = new MutationObserver(() => {
      const variant = document.documentElement.getAttribute('data-theme');

      if (isDevelopedWithoutBrandTheme) {
        console.log('development theme');
        document.documentElement.setAttribute('data-ix-theme', 'classic');
        document.documentElement.setAttribute('data-ix-color-schema', variant);
        
        document
          .getElementById('__docusaurus')
          .classList.remove('theme-classic-dark');
        document
          .getElementById('__docusaurus')
          .classList.remove('theme-classic-light');
        document
          .getElementById('__docusaurus')
          .classList.add(`theme-classic-${variant}`);

        return;
      }

      document.documentElement.setAttribute('data-ix-theme', 'brand');
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
