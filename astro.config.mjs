import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://krismos.fr',
  integrations: [
    react(),
    tailwind({
      // Désactiver Tailwind pour garder votre CSS existant
      applyBaseStyles: false,
    })
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