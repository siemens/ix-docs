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
import inquirer from 'inquirer';
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
  const defaults = await getDefaults();

  console.log('Script will started with the following defaults:');
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

async function promptBranch(defaults: BranchConfig) {
  const { branchType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'branchType',
      message: 'Which branch do you want to prepare?',
      choices: ['main', 'pull request'],
      default: defaults.branchType ?? '',
    },
  ]);

  let branch = 'main';
  if (branchType === 'pull request') {
    const { prNumber } = await inquirer.prompt([
      {
        type: 'input',
        name: 'prNumber',
        message: 'Enter the pull request number:',
        validate: (input) =>
          /^\d+$/.test(input) || 'Please enter a valid PR number',
        default: defaults.prNumber ?? '',
      },
    ]);
    branch = `pull/${prNumber}`;

    return { branch, branchType, prNumber };
  }
  return { branch, branchType };
}

async function downloadLatestArtifact(branch: string) {
  const repo = 'ix';
  const owner = 'siemens';
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('GITHUB_TOKEN environment variable is required.');
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

  // Get latest successful workflow run for the branch
  const { data: runs } = await octokit.actions.listWorkflowRunsForRepo({
    owner,
    repo,
    branch: branchName,
    per_page: 10,
  });
  if (
    !runs.workflow_runs ||
    runs.workflow_runs.length === 0 ||
    runs.workflow_runs.filter(
      (run) => run.name === 'Build' || run.name === 'Pull Request'
    ).length === 0
  ) {
    const message = `No workflow runs found for this branch. ${branchName}`;
    throw new Error(message);
  }
  const runId = runs.workflow_runs.filter(
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
