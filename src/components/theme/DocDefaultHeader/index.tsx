/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import {
  useLocalPathname,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IxTooltip, IxTypography } from '@siemens/ix-react';
import PageTags, { hasPageTags } from '@site/src/components/theme/PageTags';
import { getPageTags } from '@site/src/lib/page-tags';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import AskAI from '../AskAI';
import styles from './styles.module.css';

function Separator() {
  const [isScrolling, setIsScrolling] = useState(false);
  useScrollPosition(({ scrollY }) => {
    setIsScrolling(scrollY > 50);
  }, []);

  return (
    <div
      className={clsx(styles.Tabs, {
        [styles.Scrolled]: isScrolling,
      })}
    ></div>
  );
}

export default function DocDefaultHeader(props: {
  id: string;
  title: string;
  description: string;
  tabs: string[];
  frontMatter: any;
}) {
  const { description, title, frontMatter, id } = props;
  const { siteConfig } = useDocusaurusContext();
  const pathname = useLocalPathname();
  const tags = useMemo(() => getPageTags(frontMatter), [frontMatter]);
  const hasTags = hasPageTags(tags);

  const prompt = useMemo(
    () => `Use web browsing to access links and information ${siteConfig.url + pathname + '.md'}

If you need additional information you find a overview of all content here: https://ix.siemens.io/llms.txt

I want to ask some questions`,
    [pathname, siteConfig.url]
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

      <Separator />
    </>
  );
}
