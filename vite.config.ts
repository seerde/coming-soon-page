import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Configure Vite to build a static bundle suitable for GitHub Pages while keeping
// local development served from the root path so routes like `/launch` work.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? (mode === 'production' ? '/coming-soon-page/' : '/'),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
