import { defineConfig } from 'vite'

export default defineConfig({
  base: '/InterstellarXRolex/', // Nom du repo GitHub
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
