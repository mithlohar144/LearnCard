import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://your-site-name.netlify.app', // Update this with your actual Netlify domain
  
  // Build configuration
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Vite configuration for better performance
  vite: {
    build: {
      minify: 'esbuild',
      cssCodeSplit: true,
    },
  },
  
  // Security headers and performance optimizations
  compilerOptions: {
    jsx: 'react-jsx',
  },
});
