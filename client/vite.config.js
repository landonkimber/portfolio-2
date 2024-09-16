import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'theme-simple': './src/styles/simple/theme-simple.css',
        'theme-newspaper': './src/styles/newspaper/theme-newspaper.css',
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[hash][extname]';
        },
      },
    },
    main: './index.html',
    'theme-simple': './src/styles/theme-simple.css',
  },
},
  },
  resolve: {
  alias: {
    '@': resolve(__dirname, 'src'),
  },
},
})