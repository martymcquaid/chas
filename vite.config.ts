import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/2d24df26-29dc-429d-bb96-31d201b82b6b/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5245,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5245,
    },
  },
})
