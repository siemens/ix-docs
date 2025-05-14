/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import 'dotenv/config';
import { Octokit } from '@octokit/rest';
import AdmZip from 'adm-zip';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import os from 'os';
import path from 'path';

const __dirname = path.resolve();

async function main() {
  const branch = await promptBranch();
  await downloadLatestArtifact(branch);
}

async function promptBranch() {
  const { branchType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'branchType',
      message: 'Which branch do you want to prepare?',
      choices: ['main', 'pull request'],
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
      },
    ]);
    branch = `pull/${prNumber}`;
  }
  return branch;
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
    status: 'success',
    per_page: 1,
  });
  if (!runs.workflow_runs || runs.workflow_runs.length === 0) {
    throw new Error('No workflow runs found for this branch.');
  }
  const runId = runs.workflow_runs[0].id;

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
  const artifact = artifactsData.artifacts[0];

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
