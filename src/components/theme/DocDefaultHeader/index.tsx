/*
 * COPYRIGHT (c) Siemens AG 2018-2024 ALL RIGHTS RESERVED.
 */
import {
  useLocalPathname,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IxTooltip } from '@siemens/ix-react';
import { DeprecatedTag, RedirectTag } from '@site/src/components/UI/Tags';
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
        Copy a prompt to ask an AI assistant about this page.
      </IxTooltip>
      {description && (
        <div className={clsx(styles.componentHeroHeader, 'HeroHeader')}>
          <div className={styles.Tags}>
            {frontMatter.deprecated &&
              Array.from(frontMatter.deprecated) &&
              frontMatter.deprecated.map(
                (
                  link: string | { type: string; message: string; href: string }
                ) => {
                  if (typeof link === 'string') {
                    return (
                      <RedirectTag key={link} link={link}>
                        Show deprecated version
                      </RedirectTag>
                    );
                  }

                  if (link.type === 'deprecated') {
                    return (
                      <DeprecatedTag
                        key={link.message}
                        message={link.message}
                      ></DeprecatedTag>
                    );
                  }
                }
              )}
          </div>
          <p className={styles.Description}>{description}</p>
        </div>
      )}

      <Separator />
    </>
  );
}
