import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Hedef tarayıcılar: iPhone 7'yi de kapsayacak kadar geniş bir liste
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  // Vercel'in build çıktısını doğru yerde bulması için
  build: {
    outDir: 'build',
  },
});