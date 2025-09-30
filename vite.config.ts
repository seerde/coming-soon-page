import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Configure Vite to build a static bundle suitable for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/coming-soon-page/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
