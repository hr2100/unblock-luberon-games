import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    // Bind mounts on the sandbox do not emit fs events reliably.
    watch: { usePolling: true, interval: 300 },
  },
})
