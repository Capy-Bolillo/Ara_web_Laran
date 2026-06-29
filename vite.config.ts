import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Ara_web_Laran/',
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
})
