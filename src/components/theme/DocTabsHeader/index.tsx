/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs';
import { useHistory, useLocation } from '@docusaurus/router';
import { useScrollPosition } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IxTooltip, IxTypography } from '@siemens/ix-react';
import PageTags, { hasPageTags } from '@site/src/components/theme/PageTags';
import type { PageTags as PageTagsData } from '@site/src/lib/page-tags';
import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import AskAI from '../AskAI';
import styles from './styles.module.css';

function Tabs({ children }) {
  const [isScrolling, setIsScrolling] = useState(false);
  useScrollPosition(({ scrollY }) => {
    setIsScrolling(scrollY > 50);
  }, []);

  return (
    <div
      className={clsx(styles.Tabs, {
        [styles.Scrolled]: isScrolling,
      })}
    >
      {children}
    </div>
  );
}

function Tab(props: Readonly<{ label: string; value: string }>) {
  const location = useLocation();
  const history = useHistory();

  const onNavigate = useCallback(() => {
    history.push(props.value);
  }, [props.value, history]);

  return (
    <button
      className={clsx('all-unset', styles.Tab, {
        [styles['Tab--active']]: location.pathname.includes(props.value),
      })}
      onClick={onNavigate}
    >
      {props.label}
    </button>
  );
}

export default function DocTabsHeader(
  props: Readonly<{
    id: string;
    title: string;
    description: string;
    tabs: PropSidebarItemLink[];
    /** Tags of the page's `index.mdx`, see `sidebars.ts` */
    indexTags?: PageTagsData;
  }>
) {
  const { description, tabs, title, id, indexTags } = props;
  const { siteConfig } = useDocusaurusContext();
  const tags = indexTags ?? {};
  const hasTags = hasPageTags(tags);

  const prompt = useMemo(
    () => `Use web browsing to access links and information:

${tabs.map((tab) => `- ${siteConfig.url}${tab.href}.md`).join('\n')}

If you need additional information you find a overview of all content here: https://ix.siemens.io/llms.txt

I want to ask some questions`,
    [tabs, siteConfig.url]
  );

  return (
    <>
      <div className={styles.sticky_h1}>
        <h1>
          {title}

          <a
            href={`#${id.replaceAll('/', '-')}`}
            className="hash-link"
            aria-label={title}
            title={title}
          ></a>
        </h1>
        <AskAI id="copy-prompt" prompt={prompt} />
      </div>

      <IxTooltip for="#copy-prompt">
        <IxTypography format="body">
          Copy a prompt to ask an AI assistant about this page.
        </IxTypography>
      </IxTooltip>
      {(description || hasTags) && (
        <div className={clsx(styles.componentHeroHeader, 'HeroHeader')}>
          <div className={styles.Tags}>
            <PageTags tags={tags} />
          </div>
          {description && <p className={styles.Description}>{description}</p>}
        </div>
      )}

      <Tabs>
        {tabs.map((tab) => {
          return <Tab value={tab.href} label={tab.label} key={tab.docId} />;
        })}
      </Tabs>
    </>
  );
}
