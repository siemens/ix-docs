import { spawn } from 'child_process';

const command = process.argv[2];
const pnpmExecutable = process.env.npm_execpath;

if (!command) {
  console.error('Missing Docusaurus command. Expected build or start.');
  process.exit(1);
}

if (!pnpmExecutable) {
  console.error('Missing npm_execpath. This script must run through pnpm.');
  process.exit(1);
}

const child = spawn(process.execPath, [pnpmExecutable, 'exec', 'docusaurus', command], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NO_UPDATE_NOTIFIER: '1',
  },
  shell: false,
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});