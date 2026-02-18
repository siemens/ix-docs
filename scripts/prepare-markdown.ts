/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Octokit } from '@octokit/rest';
import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import os from 'os';
import path from 'path';
import copyTheme from './copy-theme';
import { config as dotenv } from '@dotenvx/dotenvx';

const __dirname = path.resolve();

dotenv({
  path: path.join(__dirname, '.env'),
});

dotenv({
  path: path.join(__dirname, '.env.production'),
});

dotenv({
  path: path.join(__dirname, '.env.pullrequest'),
  override: true,
});

const __temp = path.join(os.tmpdir(), 'ix-docs');
const __promptDefaults = path.join(__temp, 'defaults.json');

type BranchConfig = {
  branch: string;
  branchType: 'main' | 'pull request' | (string & {});
  prNumber: string;
};

async function getDefaultFile() {
  if (!(await fs.exists(__promptDefaults))) {
    return {};
  }

  const defaults = JSON.parse(await fs.readFile(__promptDefaults, 'utf8'));
  return defaults;
}

async function getDefaults(): Promise<BranchConfig> {
  let defaults: BranchConfig = {
    branch: 'main',
    branchType: 'main',
    prNumber: '',
  };

  if (
    !(
      process.env.DOCS_BRANCH &&
      process.env.DOCS_BRANCH_TYPE &&
      process.env.DOCS_PR_NUMBER !== undefined
    )
  ) {
    throw new Error(
      'DOCS_BRANCH, DOCS_BRANCH_TYPE and DOCS_PR_NUMBER environment variables are required in CI.'
    );
  }

  defaults.branch = process.env.DOCS_BRANCH;
  defaults.branchType = process.env.DOCS_BRANCH_TYPE;
  defaults.prNumber = process.env.DOCS_PR_NUMBER;

  return defaults;
}

async function main() {
  if (process.env.SKIP_PREPARE) {
    console.log('========================================');
    console.log('===      SKIPPING PREPARE STEP       ===');
    console.log('========================================');
    console.log(`Reason: SKIP_PREPARE is set to "${process.env.SKIP_PREPARE}"`);
    return;
  }
  const defaults = await getDefaults();

  console.log('Script will start with the following defaults:');
  console.log(`Branch: ${defaults.branch}`);
  console.log(`Branch Type: ${defaults.branchType}`);
  console.log(`PR Number: ${defaults.prNumber}`);

  await copyTheme();

  const branch = getBranch(defaults);
  await downloadLatestArtifact(branch);
}

function getBranch(config: BranchConfig) {
  if (config.branchType === 'pull request') {
    return `pull/${config.prNumber}`;
  }
  return config.branch;
}

async function downloadLatestArtifact(branch: string) {
  const repo = 'ix';
  const owner = 'siemens';
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    const message = [
      'GITHUB_TOKEN environment variable is not set.',
      '',
      '',
      '⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️',
      'Please set the GITHUB_TOKEN environment variable to a valid GitHub token.',
      `You can create a new token at https://github.com/settings/personal-access-tokens,`,
      'the token must not have any permissions.',
      '⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️',
      '',
      '',
    ];

    throw new Error(message.join('\n'));
  }
  const octokit = new Octokit({ auth: token });

  // For PRs, get the head branch name
  let branchName = branch;
  if (branch.startsWith('pull/')) {
    const prNumber = parseInt(branch.split('/')[1], 10);
    const { data: pr } = await octokit.pulls.get({
      owner,
      repo,
      pull_number: prNumber,
    });
    branchName = pr.head.ref;
  }

  const eventRuns = await Promise.all([
    octokit.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      branch: branchName,
      event: 'workflow_dispatch',
    }),
    octokit.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      branch: branchName,
      event: 'push',
    }),
    octokit.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      branch: branchName,
      event: 'pull_request',
    }),
  ]);

  const runs = eventRuns
    .flatMap((run) => run.data.workflow_runs)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  if (
    !runs ||
    runs.length === 0 ||
    runs.filter((run) => run.name === 'Build' || run.name === 'Pull Request')
      .length === 0
  ) {
    if (branchName === 'main') {
      const message = `No workflow runs found for main branch. ${branchName}`;
      throw new Error(message);
    }
    console.log(`No workflow runs found for branch: ${branchName}`);
    console.log('Falling back to main branch artifacts (docs-only PR)');
    // Recursively call with main branch for docs-only PRs
    return downloadLatestArtifact('main');
  }
  const runId = runs.filter(
    (run) => run.name === 'Build' || run.name === 'Pull Request'
  )[0].id;

  // Get artifacts for the run
  const { data: artifactsData } =
    await octokit.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: runId,
    });

  if (!artifactsData.artifacts || artifactsData.artifacts.length === 0) {
    throw new Error('No artifacts found for this workflow run.');
  }

  const artifact = artifactsData.artifacts.find((artifact) =>
    artifact.name.startsWith('documentation-')
  );

  if (!artifact) {
    throw new Error('No documentation artifact found for this workflow run.');
  }

  console.log(
    `Downloading artifact: ${artifact.name} (ID: ${artifact.id})`,
    artifact
  );

  // Download the artifact zip
  const { data: zipData } = await octokit.actions.downloadArtifact({
    owner,
    repo,
    artifact_id: artifact.id,
    archive_format: 'zip',
  });

  // Write zip to temp file
  const tempZipPath = path.join(os.tmpdir(), `artifact-${artifact.id}.zip`);
  await fs.writeFile(tempZipPath, Buffer.from(zipData as ArrayBuffer));

  // Extract artifact
  const zip = new AdmZip(tempZipPath);
  zip.extractAllTo(__dirname, true);

  // Clean up
  await fs.remove(tempZipPath);
}

main();
