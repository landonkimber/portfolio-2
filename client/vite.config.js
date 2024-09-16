import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
<<<<<<< HEAD
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
=======
        main: './index.html',
        'theme-simple': './src/styles/theme-simple.css',
      },
    },
>>>>>>> parent of 78ee51e (changed how the loadManifest.js fetches the css files. Made changes in ThemeManager.jsx to handle loadManifest.js file changes. Added imports for css in main.jsx. Added server property to vite.config.js so I can see changes locally.)
  },
},
  },
  resolve: {
  alias: {
    '@': resolve(__dirname, 'src'),
  },
},
})