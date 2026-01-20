import { defineConfig } from 'vite'

export default defineConfig({
  base: '/InterstellarXRolex/', // Nom du repo GitHub
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // S'assurer que tous les assets sont copiés
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Garder les fichiers .glb, .jpg, .mp3, etc. dans le dossier assets
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  // Inclure explicitement les fichiers dans public
  publicDir: 'public'
})
