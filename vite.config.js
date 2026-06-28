import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal Vite config. Outputs a static bundle to /dist,
// which is exactly what Cloudflare Pages serves.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
