import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'theme-simple': path.resolve(__dirname, 'src/styles/theme-simple.css'),
        'theme-newspaper': path.resolve(__dirname, 'src/styles/theme-newspaper.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'theme-simple.css' || assetInfo.name === 'theme-newspaper.css') {
            return 'assets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
})