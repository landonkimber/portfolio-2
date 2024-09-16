import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: './index.html',
        'theme-simple': './src/styles/theme-simple.css',
        'theme-newspaper': './src/styles/theme-newspaper.css',
      },
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})
