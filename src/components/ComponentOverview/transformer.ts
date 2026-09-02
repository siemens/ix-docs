/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

const OVERVIEW_DOC_ID = 'components/overview';

export type ComponentOverviewDoc = {
  id: string;
  title: string;
  description: string;
  /**
   * The permalink is available for server-side loaded docs. The browser
   * sidebar already carries the resolved href, so it is optional here.
   */
  permalink?: string;
};

export type ComponentOverviewDocs = Readonly<
  Record<string, ComponentOverviewDoc>
>;

export type ComponentOverviewItem = {
  docId: string;
  href: string;
  title: string;
  description: string;
};

export type ComponentOverviewCategory = {
  anchorId: string;
  label: string;
  items: ComponentOverviewItem[];
};

function fail(message: string): never {
  throw new Error(`Component overview: ${message}`);
}

function requireString(value: unknown, description: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${description} must be a non-empty string.`);
  }

  return value;
}

function toAnchorId(label: string): string {
  const anchorId = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return requireString(anchorId, `The category "${label}" anchor`);
}

function requireDocMetadata(
  docs: ComponentOverviewDocs,
  docId: string,
  description: string
) {
  const metadata = docs[docId];

  if (!metadata) {
    fail(`${description} "${docId}" is missing from the docs metadata.`);
  }
  if (metadata.id !== docId) {
    fail(
      `${description} "${docId}" has metadata for a different document "${metadata.id}".`
    );
  }
  if (
    typeof metadata.title !== 'string' ||
    typeof metadata.description !== 'string'
  ) {
    fail(`${description} "${docId}" has invalid docs metadata.`);
  }

  return metadata;
}

/**
 * Resolve a tab document to the source document used for the overview
 * metadata. Component tab documents are conventionally siblings of the
 * source index document.
 */
export function resolveCanonicalSourceDocId(
  docId: string,
  docs: ComponentOverviewDocs
): string {
  const tabMatch = docId.match(/^(.*)\/(guide|code)$/);

  if (!tabMatch) {
    requireDocMetadata(docs, docId, 'The sidebar document');
    return docId;
  }

  const sourceDocId = `${tabMatch[1]}/index`;
  requireDocMetadata(
    docs,
    sourceDocId,
    `The sidebar document "${docId}" source document`
  );

  return sourceDocId;
}

function validateSidebarLink(
  item: PropSidebarItemLink,
  docs: ComponentOverviewDocs,
  context: string
): { item: PropSidebarItemLink; docId: string } {
  const docId = requireString(item.docId, `${context} docId`);
  requireString(item.href, `${context} href`);
  requireString(item.label, `${context} label`);
  requireDocMetadata(docs, docId, `${context} document`);

  return { item, docId };
}

function toOverviewItem(
  link: { item: PropSidebarItemLink; docId: string },
  sourceDocId: string,
  docs: ComponentOverviewDocs,
  context: string
): ComponentOverviewItem {
  const metadata = requireDocMetadata(
    docs,
    sourceDocId,
    `${context} source document`
  );

  return {
    docId: sourceDocId,
    href: link.item.href,
    title: metadata.title,
    description: metadata.description,
  };
}

function sourceDocIdForCategory(
  links: { item: PropSidebarItemLink; docId: string }[],
  canonicalSourceDocIds: string[],
  item: PropSidebarItemCategory,
  docs: ComponentOverviewDocs,
  context: string
): string {
  const codeLink = links.find(({ docId }) => docId.endsWith('/code'));
  const guideLink = links.find(({ docId }) => docId.endsWith('/guide'));
  const preferredSourceDocId = codeLink
    ? resolveCanonicalSourceDocId(codeLink.docId, docs)
    : guideLink
      ? resolveCanonicalSourceDocId(guideLink.docId, docs)
      : undefined;

  if (preferredSourceDocId) {
    const tabSourceDocIds = [
      ...new Set(
        canonicalSourceDocIds.filter((docId) => docId.endsWith('/index'))
      ),
    ];
    if (
      tabSourceDocIds.some((docId) => docId !== preferredSourceDocId)
    ) {
      fail(
        `${context} has guide and code links that resolve to different source documents.`
      );
    }
    return preferredSourceDocId;
  }

  const sourceIndexDocIds = [
    ...new Set(
      canonicalSourceDocIds.filter((docId) => docId.endsWith('/index'))
    ),
  ];
  if (sourceIndexDocIds.length === 1) {
    const sourceIndexDocId = sourceIndexDocIds[0];
    if (sourceIndexDocId === undefined) {
      fail(`${context} has no source/index document.`);
    }
    return sourceIndexDocId;
  }

  if (item.href) {
    const categorySourceDocs = Object.values(docs).filter(
      (metadata) =>
        metadata.permalink === item.href && metadata.id.endsWith('/index')
    );

    if (categorySourceDocs.length === 1) {
      const categorySourceDoc = categorySourceDocs[0];
      if (categorySourceDoc === undefined) {
        fail(`${context} has no source document for its category link.`);
      }
      return categorySourceDoc.id;
    }
    if (categorySourceDocs.length > 1) {
      fail(`${context} has multiple source documents for its category link.`);
    }
  }

  const firstDocId = canonicalSourceDocIds[0];
  if (firstDocId === undefined) {
    fail(`${context} has no source/index document.`);
  }
  const lastSlash = firstDocId.lastIndexOf('/');
  if (lastSlash > 0) {
    const inferredSourceDocId = `${firstDocId.slice(0, lastSlash)}/index`;
    if (docs[inferredSourceDocId]) {
      return inferredSourceDocId;
    }
  }

  fail(`${context} has no source/index document.`);
}

function transformTabItem(
  item: PropSidebarItemCategory,
  docs: ComponentOverviewDocs,
  context: string
): ComponentOverviewItem {
  requireString(item.label, `${context} label`);
  if (item.href !== undefined) {
    requireString(item.href, `${context} href`);
  }

  if (!Array.isArray(item.items) || item.items.length === 0) {
    fail(`${context} must contain at least one sidebar link.`);
  }

  const links = item.items.map((child, index) => {
    if (child.type !== 'link') {
      fail(`${context} child ${index + 1} must be a sidebar link.`);
    }

    return validateSidebarLink(
      child,
      docs,
      `${context} child ${index + 1}`
    );
  });

  const canonicalSourceDocIds = links.map(({ docId }) =>
    resolveCanonicalSourceDocId(docId, docs)
  );
  const sourceDocId = sourceDocIdForCategory(
    links,
    canonicalSourceDocIds,
    item,
    docs,
    context
  );
  const codeLink = links.find(({ docId }) => docId.endsWith('/code'));
  const guideLink = links.find(({ docId }) => docId.endsWith('/guide'));
  const preferredLink = codeLink ?? guideLink;
  const sourceLink = preferredLink ?? links[0];
  if (sourceLink === undefined) {
    fail(`${context} has no sidebar link.`);
  }
  const sourceMetadata = requireDocMetadata(
    docs,
    sourceDocId,
    `${context} source document`
  );
  const href = requireString(
    preferredLink?.item.href ?? item.href ?? sourceMetadata.permalink,
    `${context} href`
  );

  return toOverviewItem(
    {
      item: {
        ...sourceLink.item,
        href,
      },
      docId: sourceLink.docId,
    },
    sourceDocId,
    docs,
    context
  );
}

function transformDirectItem(
  item: PropSidebarItemLink,
  docs: ComponentOverviewDocs,
  context: string
): ComponentOverviewItem {
  const link = validateSidebarLink(item, docs, context);
  const sourceDocId = resolveCanonicalSourceDocId(link.docId, docs);
  return toOverviewItem(link, sourceDocId, docs, context);
}

function transformCategory(
  item: PropSidebarItemCategory,
  docs: ComponentOverviewDocs
): ComponentOverviewCategory {
  const label = requireString(item.label, 'A component category label');

  if (!Array.isArray(item.items) || item.items.length === 0) {
    fail(`Category "${label}" must contain at least one sidebar item.`);
  }

  const items = item.items.map((child, index) => {
    const context = `Category "${label}" item ${index + 1}`;

    if (child.type === 'category') {
      return transformTabItem(child, docs, context);
    }

    if (child.type === 'link') {
      return transformDirectItem(child, docs, context);
    }

    fail(`${context} must be a sidebar category or link.`);
  });

  return {
    anchorId: toAnchorId(label),
    label,
    items,
  };
}

/**
 * Transform the processed components sidebar into the data needed by the
 * runtime overview. The input order is intentionally retained at every
 * level: the sidebar is the source of truth for both category and component
 * ordering.
 */
export function transformComponentOverview(
  sidebar: readonly PropSidebarItem[],
  docs: ComponentOverviewDocs
): ComponentOverviewCategory[] {
  const categories: ComponentOverviewCategory[] = [];
  const anchorIds = new Set<string>();

  sidebar.forEach((item, index) => {
    if (item.type === 'link' && item.docId === OVERVIEW_DOC_ID) {
      return;
    }

    if (item.type !== 'category') {
      fail(
        `Top-level sidebar item ${index + 1} must be the Overview document or a category.`
      );
    }

    const category = transformCategory(item, docs);
    if (anchorIds.has(category.anchorId)) {
      fail(`Category "${category.label}" has a duplicate anchor.`);
    }
    anchorIds.add(category.anchorId);
    categories.push(category);
  });

  if (categories.length === 0) {
    fail('The components sidebar contains no categories.');
  }

  return categories;
}
