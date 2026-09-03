/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ICON_LIST from '@siemens/ix-icons/dist/sample.json';
import clsx from 'clsx';
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  useTransition,
} from 'react';
import styles from './Icons.module.css';
import {
  IxCheckbox,
  IxIcon,
  IxIconButton,
  IxInput,
  IxTooltip,
  IxTypography,
} from '@siemens/ix-react';
import { iconClear, iconSearch, iconSuccess } from '@siemens/ix-icons/icons';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import FrameworkSelection from '../UI/FrameworkSelection';
import CodeBlock from '@theme/CodeBlock';
import { fromKebabCaseToCamelCase } from '@site/src/lib/utils/string-format';
import { debounce } from '@site/src/lib/utils/debounce';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { getIcon } from '@site/src/utils/icons';
import { getIconSearch, IconSearchApi } from './iconSearch';

function getIconCode(iconName: string, framework: FrameworkTypes) {
  const importedName = 'icon' + fromKebabCaseToCamelCase(iconName);

  switch (framework) {
    case 'angular':
      return `<ix-icon name="${iconName}"></ix-icon>`;
    case 'react':
      return `<IxIcon name={${importedName}}></IxIcon>`;
    case 'vue':
      return `<IxIcon :name="${importedName}"></IxIcon>`;
    default:
      return `<ix-icon name="${iconName}"></ix-icon>`;
  }
}

function getColumnCount(width: number) {
  if (width < 496) {
    return 2;
  } else if (width < 640) {
    return 3;
  } else if (width < 784) {
    return 4;
  } else if (width < 928) {
    return 5;
  } else if (width < 997) {
    return 6;
  } else if (width < 1216) {
    return 4;
  } else if (width < 1360) {
    return 5;
  } else if (width < 1504) {
    return 6;
  } else {
    return 7;
  }
}

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
  ).filter(
    (el) =>
      !el.hasAttribute('disabled') &&
      el.getClientRects().length > 0
  );
}

type IconDetailsProps = {
  iconName: string;
  columnCount: number;
  framework: FrameworkTypes;
  onFrameworkChange: (framework: FrameworkTypes) => void;
  searchApi: IconSearchApi | null;
  displayableSet: Set<string>;
  onRelatedIconClick: (name: string) => void;
  onClose: () => void;
  shouldFocusRef: React.MutableRefObject<boolean>;
};

const IconDetails: React.FC<IconDetailsProps> = ({
  iconName,
  columnCount,
  framework,
  onFrameworkChange,
  searchApi,
  displayableSet,
  onRelatedIconClick,
  onClose,
  shouldFocusRef,
}) => {
  const tooltipRef = useRef<HTMLIxTooltipElement>(null);
  const codeBlockContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const meta = searchApi?.getMeta(iconName);
  const relatedIcons = (meta?.relatedIcons ?? []).filter((name) =>
    displayableSet.has(name)
  );

  useEffect(() => {
    if (shouldFocusRef.current) {
      shouldFocusRef.current = false;
      containerRef.current?.focus({ preventScroll: true });
    }
  }, [shouldFocusRef]);

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    if (codeBlockContainerRef.current) {
      tooltipRef.current?.showTooltip(codeBlockContainerRef.current);
    }
    setTimeout(() => {
      tooltipRef.current?.hideTooltip();
    }, 750);
  }

  function getWidth() {
    const tileWidth = 128;
    const tileMargin = 16;
    return tileWidth * columnCount + tileMargin * (columnCount - 1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      onClose();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const focusables = getFocusableElements(container);
    if (focusables.length === 0) {
      event.preventDefault();
      container.focus({ preventScroll: true });
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey) {
      if (active === first || active === container || !container.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else if (active === last || !container.contains(active)) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${iconName} icon details`}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      style={{ width: getWidth() }}
      className={styles.Icon__Details}
    >
      <IxIcon
        className={styles.Icon__PreviewIcon}
        name={getIcon(iconName)}
        size="32"
      />
      <div className={styles.Icon__FlexContent}>
        <div className={styles.Icon__PrimaryRow}>
          <div className={styles.Icon__NameContainer}>
            <IxTypography format="h3">{iconName}</IxTypography>
            <a href={`#${iconName}`} className="hash-link"></a>
          </div>

          <div
            ref={codeBlockContainerRef}
            className={clsx(
              styles.Icon__CodeContainer,
              'code-block-no-copy',
              'code-block-no-wrap'
            )}
            onClick={() => {
              copyToClipboard(getIconCode(iconName, framework));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                copyToClipboard(getIconCode(iconName, framework));
              }
            }}
          >
            <CodeBlock className={styles.Icon__Code} language="html">
              {getIconCode(iconName, framework)}
            </CodeBlock>
            <IxTooltip ref={tooltipRef}>
              <div className={styles.TooltipSuccess}>
                <IxIcon
                  name={iconSuccess}
                  color="color-success"
                  size="16"
                ></IxIcon>
                Copied
              </div>
            </IxTooltip>
          </div>
        </div>

        {meta?.tags?.length ? (
          <div className={styles.Icon__Tags}>
            <IxTypography format="body">
              Tags: {meta.tags.join(', ')}
            </IxTypography>
          </div>
        ) : null}

        {relatedIcons.length ? (
          <div className={styles.Icon__RelatedIcons}>
            <IxTypography format="body">Related icons:</IxTypography>
            <div className={styles.Icon__RelatedList}>
              {relatedIcons.map((name) => (
                <IxIconButton
                  key={name}
                  variant="subtle-tertiary"
                  icon={getIcon(name)}
                  size="24"
                  title={name}
                  aria-label={name}
                  onClick={() => onRelatedIconClick(name)}
                ></IxIconButton>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className={styles.FrameworkSelectionContainer}>
        <FrameworkSelection onFrameworkChange={onFrameworkChange} />
      </div>
    </div>
  );
};

const IconTiles: React.FC<{
  columnCount: number;
  iconList: string[];
  searchApi: IconSearchApi | null;
  displayableSet: Set<string>;
  onResetSearch: () => void;
}> = (props) => {
  const [framework, setFramework] = useState<FrameworkTypes>('angular');
  const { searchApi, displayableSet, onResetSearch } = props;
  const [selectedIcon, setSelectedIcon] = useState<string | null>();
  const selectedIconRef = useRef<string | null>(null);
  const pendingScrollRef = useRef<string | null>(null);
  const shouldFocusPreviewRef = useRef<boolean>(false);

  useEffect(() => {
    selectedIconRef.current = selectedIcon ?? null;
  }, [selectedIcon]);

  const handleIconClick = useCallback((icon: string) => {
    const isOpening = selectedIconRef.current !== icon;
    if (isOpening) {
      pendingScrollRef.current = icon;
      shouldFocusPreviewRef.current = true;
    }
    setSelectedIcon(isOpening ? icon : null);
  }, []);

  const closePreview = useCallback(() => {
    const current = selectedIconRef.current;
    setSelectedIcon(null);
    if (current) {
      const button = document
        .getElementById(`icon-tile-${current}`)
        ?.querySelector('button');
      (button as HTMLButtonElement | null)?.focus();
    }
  }, []);

  const handleRelatedIconClick = useCallback(
    (name: string) => {
      onResetSearch();
      handleIconClick(name);
    },
    [onResetSearch, handleIconClick]
  );

  const iconRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < props.iconList.length; i += props.columnCount) {
      rows.push(props.iconList.slice(i, i + props.columnCount));
    }
    return rows;
  }, [props.iconList, props.columnCount]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      handleIconClick(hash);
    }
  }, []);

  useEffect(() => {
    const target = pendingScrollRef.current;
    if (!target) {
      return;
    }
    if (selectedIcon !== target) {
      pendingScrollRef.current = null;
      return;
    }
    if (!props.iconList.includes(target)) {
      return;
    }
    pendingScrollRef.current = null;
    requestAnimationFrame(() => {
      document.getElementById(`icon-tile-${target}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }, [selectedIcon, props.iconList, props.columnCount]);

  return (
    <div className={clsx(styles.Icons)}>
      {iconRows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div className={styles.Icon__Row}>
            {row.map((icon) => (
              <div
                className={clsx(
                  styles.Icon__Container,
                  props.columnCount > 2 &&
                    !!selectedIcon &&
                    row.includes(selectedIcon) &&
                    styles.Icon__ContainerDetails
                )}
                id={`icon-tile-${icon}`}
                key={icon}
              >
                <button
                  className={clsx(styles.Icon__Tile, {
                    [styles.Selected]: selectedIcon === icon,
                  })}
                  onClick={() => handleIconClick(icon)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleIconClick(icon);
                    }
                  }}
                >
                  {React.createElement('ix-icon', {
                    name: getIcon(icon),
                  })}
                  <div className={styles.Icon__Name}>
                    <IxTypography format="body">
                      {icon}
                    </IxTypography>
                  </div>
                </button>
                {selectedIcon === icon && props.columnCount > 2 && (
                  <IconDetails
                    iconName={selectedIcon}
                    columnCount={props.columnCount}
                    framework={framework}
                    onFrameworkChange={setFramework}
                    searchApi={searchApi}
                    displayableSet={displayableSet}
                    onRelatedIconClick={handleRelatedIconClick}
                    onClose={closePreview}
                    shouldFocusRef={shouldFocusPreviewRef}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Icons: React.FC = () => {
  const [iconFilter, setIconFilter] = useState<string>();
  const [showRegularIcons, setShowRegularIcons] = useState<boolean>(true);
  const [showFilledIcons, setShowFilledIcons] = useState<boolean>(true);
  const [icons] = useState<string[]>(ICON_LIST.icons);
  const [columnCount, setColumnCount] = useState<number>(2);
  const [searchApi, setSearchApi] = useState<IconSearchApi | null>(null);
  const filterInputRef = useRef<HTMLIxInputElement>(null);
  const [, startFilterTransition] = useTransition();

  const displayableSet = useMemo(() => new Set(icons), [icons]);

  const resetSearch = useCallback(() => {
    setIconFilter('');
    if (filterInputRef.current) {
      filterInputRef.current.value = '';
    }
  }, []);

  useEffect(() => {
    let active = true;
    getIconSearch().then((api) => {
      if (active) {
        setSearchApi(api);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const applyVariantFilter = useCallback(
    (names: string[]) =>
      names.filter((icon) => {
        const isFilled = icon.endsWith('-filled');
        return (
          (showRegularIcons && !isFilled) || (showFilledIcons && isFilled)
        );
      }),
    [showRegularIcons, showFilledIcons]
  );

  const filteredIcons = useMemo(() => {
    const query = iconFilter?.trim();

    if (!query) {
      return applyVariantFilter(icons);
    }

    const matches = searchApi
      ? searchApi.search(query, displayableSet)
      : icons.filter((icon) => icon.toLowerCase().includes(query));

    return applyVariantFilter(matches);
  }, [icons, iconFilter, searchApi, displayableSet, applyVariantFilter]);

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      const count = getColumnCount(width);
      if (count !== columnCount) {
        setColumnCount(count);
      }
    }, 150);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columnCount]);

  useEffect(() => {
    setColumnCount(getColumnCount(window.innerWidth));
  }, []);

  return (
    <BrowserOnly>
      {() => (
        <div className={styles.IconsPreview}>
          <div className={clsx(styles.Search)}>
            <IxInput
              className={styles.Search__Input}
              ref={filterInputRef}
              placeholder="Search icon"
              aria-label="Search icon"
              onInput={(e) => {
                const value = (
                  e.target as HTMLInputElement
                ).value.toLocaleLowerCase();
                startFilterTransition(() => setIconFilter(value));
              }}
            >
              <IxIcon
                name={iconSearch}
                color="color-dynamic"
                slot="start"
                size="16"
              ></IxIcon>
              {iconFilter && (
                <IxIconButton
                  variant="tertiary"
                  oval
                  iconColor="color-soft-text"
                  icon={iconClear}
                  slot="end"
                  size="16"
                  onClick={() => {
                    resetSearch();
                  }}
                ></IxIconButton>
              )}
            </IxInput>
            <IxCheckbox
              checked={showRegularIcons}
              label="Show regular icons"
              onCheckedChange={(e) => {
                setShowRegularIcons(e.detail);
              }}
            ></IxCheckbox>
            <IxCheckbox
              checked={showFilledIcons}
              label="Show filled icons"
              onCheckedChange={(e) => {
                setShowFilledIcons(e.detail);
              }}
            ></IxCheckbox>
          </div>

          <IconTiles
            columnCount={columnCount}
            iconList={filteredIcons}
            searchApi={searchApi}
            displayableSet={displayableSet}
            onResetSearch={resetSearch}
          />

          {filteredIcons.length === 0 && (
            <div className={styles.Search__NoResults}>
              <IxIcon
                className={styles.Search__NoResultsIcon}
                name={iconSearch}
                color="color-soft-text"
              ></IxIcon>
              <div className={styles.Search__NoIconsFound}>No icons found</div>
              <div className={styles.Search__AdaptOrRequest}>
                Adapt the filter<br></br> or open an icon request in{' '}
                <a
                  target="_blank"
                  href="https://github.com/siemens/ix-icons/issues"
                >
                  GitHub
                </a>
                .
              </div>
            </div>
          )}
        </div>
      )}
    </BrowserOnly>
  );
};

export default Icons;
