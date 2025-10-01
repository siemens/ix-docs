/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs';
import { rimrafSync } from 'rimraf';
import { visit } from 'unist-util-visit';
import { Logger } from './logger.js';
import path from 'path';

const logger = new Logger('LOG', 'figma-plugin');

type MDXImageNode = {
  url: string;
};

type FigmaConfig = {
  apiToken: string;
  baseUrl: string;
  error_image: string;
  figmaFolder: string;
  fileVersionId?: string;
  rimraf?: boolean;
};

export function getFigmaMeta(node: MDXImageNode): {
  fileName: string;
  nodeId: string;
} {
  const url = new URL(node.url);
  const urlPath = url.pathname;
  const urlPaths = urlPath.split('/');
  const fileIndex = urlPaths.findIndex((segment) => segment === 'file');
  const designIndex = urlPaths.findIndex((segment) => segment === 'design');
  const branchIndex = urlPaths.findIndex((segment) => segment === 'branch');

  let file = '';

  if (designIndex !== -1 && fileIndex === -1) {
    file = urlPaths[designIndex + 1];
  } else {
    file = urlPaths[fileIndex + 1];
  }

  const fileName = branchIndex !== -1 ? urlPaths[branchIndex + 1] : file;

  const nodeId = url.searchParams.get('node-id')!;
  return {
    fileName,
    nodeId,
  };
}

function getLocalFilename(fileName: string, nodeId: string) {
  const localId = decodeURIComponent(nodeId)
    .replace(/:/, '_')
    .replace(/-/, '_');
  const imageUUID = `${fileName}_${localId}`;
  return `${imageUUID}.png`;
}

export const figmaPlugin = (config: FigmaConfig) => {
  if (config.rimraf === true) {
    rimrafSync(config.figmaFolder);
    fs.mkdirSync(config.figmaFolder);
  }

  const transformer = async (ast: any, vFile: any) => {
    visit(ast, 'image', (node: any) => {
      const originalUrl = node.url;

      const { fileName, nodeId } = getFigmaMeta(node);

      const localFilename = path.join(
        config.figmaFolder,
        getLocalFilename(fileName, nodeId)
      );

      if (fs.existsSync(localFilename)) {
        node.url = `${config.baseUrl}/${getLocalFilename(fileName, nodeId)}`;
        logger.debug('Replace Image', originalUrl, node.url);
      } else {
        node.url = `${config.baseUrl}/${config.error_image}`;
        logger.error('No local copy of', localFilename, 'found!');
        logger.error(
          `Execute "pnpm update-figma update '${vFile.path.replace(
            vFile.cwd,
            ''
          )}'"`
        );
      }
    });
  };
  return () => transformer;
};
