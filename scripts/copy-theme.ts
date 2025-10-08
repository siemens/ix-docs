/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import os from 'os';
import zlib from 'zlib';
import * as tar from 'tar';
import { fetchChangelog } from './fetch-changelog';
import { config as dotenv } from '@dotenvx/dotenvx';

dotenv({
  override: true,
});

const __dirname = path.resolve();
const __node_modules = path.join(__dirname, 'node_modules');

const __docs = path.join(__dirname, 'docs');
const __changelog = path.join(__docs, 'home', 'releases', 'changelog.md');

async function downloadTheme() {
  const token = process.env.CSC!;
  let pkgUrl = process.env.BRAND_URL!;
  let pkgVersion = process.env.BRAND_VERSION!;

  if (!pkgUrl) {
    console.log('No additional theme configured');
    return;
  }

  if (!token) {
    console.error('CSC is required to download additional theme');
    return;
  }

  if (!pkgUrl.endsWith('.tgz')) {
    pkgUrl = pkgUrl + '-' + pkgVersion + '.tgz';
  }

  const __temp = path.join(os.tmpdir(), 'ix-docs');
  await fs.ensureDir(__temp);

  const __themeZip = path.join(__temp, `theme.tgz`);

  if (!token) {
    console.error('CSC is required to download additional theme');
    return;
  }

  const download = async () => {
    console.log('download');
    const response = await axios.get(pkgUrl!, {
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fileData = Buffer.from(response.data, 'binary');
    await fs.writeFile(__themeZip, fileData);
  };

  const unpack = async () => {
    const theme = path.join(__themeZip, '..');
    return new Promise<string>((resolve) =>
      fs
        .createReadStream(__themeZip)
        .pipe(zlib.createGunzip())
        .pipe(
          tar.extract({
            cwd: theme,
          })
        )
        .on('finish', () => {
          resolve(path.join(theme, 'package'));
        })
    );
  };

  if (!fs.existsSync(__node_modules)) {
    console.error('node_modules not found');
    process.exit(1);
  }

  await download();
  const unpackTheme = await unpack();
  fs.moveSync(
    unpackTheme,
    path.join(__node_modules, '@siemens-ix', 'corporate-theme'),
    {
      overwrite: true,
    }
  );

  await fs.remove(__temp);
}

function copyTheme() {
  try {
    const __nodeModule = require.resolve('@siemens-ix/corporate-theme');
    const __from = path.join(__nodeModule, '..');

    const __preview = path.join(__dirname, 'static', 'demo', 'v2', 'preview');

    const __htmlPreview = path.join(
      __preview,
      'html',
      'additional-theme',
      'corporate-theme',
      'dist'
    );

    const __htmlMobile = path.join(
      __preview,
      'mobile',
      'additional-theme',
      'corporate-theme',
      'dist'
    );

    fs.copySync(__from, __htmlPreview);
    fs.copySync(__from, __htmlMobile);
  } catch (e) {
    console.error(
      'Cannot copy theme, documentation will run without additional theme'
    );
  }
}

async function generateChangelog() {
  console.log('Generating changelog...');

  const changeLogExist = fs.existsSync(__changelog);

  if (!process.env.GITHUB_TOKEN) {
    if (changeLogExist) {
      return;
    }
    console.error('No GITHUB_TOKEN provided, creating empty changelog');
    return;
  }

  const changelog = await fetchChangelog();
  await fs.writeFile(__changelog, changelog);
}

export default async function main() {
  await downloadTheme();
  await generateChangelog();
  copyTheme();
}
