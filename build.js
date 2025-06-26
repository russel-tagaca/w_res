#!/usr/bin/env node

import { build } from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// First build the client
console.log('Building client...');
execSync('vite build', { stdio: 'inherit' });

// Then build the server with all dependencies bundled except Node.js built-ins
console.log('Building server...');
await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outdir: 'dist',
  external: [
    // Only externalize Node.js built-ins
    'fs', 'path', 'http', 'https', 'url', 'crypto', 'os', 'events', 'stream', 
    'util', 'child_process', 'module', 'worker_threads', 'cluster'
  ],
  define: {
    'import.meta.dirname': '__dirname'
  },
  banner: {
    js: `
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`
  }
});

console.log('Build completed successfully!');