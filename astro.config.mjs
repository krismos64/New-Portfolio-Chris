import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://krismos.fr',
  integrations: [
    react()
  ],
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  vite: {
    // Optimisations pour votre portfolio
    build: {
      rollupOptions: {
        output: {
          // Grouper les chunks par type pour un chargement optimisé
          manualChunks: {
            vendor: ['react', 'react-dom'],
            audio: ['src/components/AudioPlayer.tsx'],
            video: ['src/components/VideoModal.tsx'],
          },
        },
      },
    },
    // Optimisations CSS
    css: {
      postcss: {
        plugins: [
          // Optimisations CSS automatiques
        ],
      },
    },
  },
  // Configuration pour le SEO et performance
});