import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

if (!existsSync(indexPath)) {
  console.error('Cannot create 404.html – dist/index.html not found. Run vite build first.');
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log('Created dist/404.html for GitHub Pages single-page routing.');
