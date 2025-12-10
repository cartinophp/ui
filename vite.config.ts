import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CartinoUI',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // Assicurati di esternalizzare le dipendenze che non dovrebbero essere bundle nella libreria
      external: ['vue', 'reka-ui'],
      output: {
        exports: 'named',
        // Fornisci variabili globali da usare nel build UMD
        // per dipendenze esternalizzate
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css'
          return assetInfo.name || ''
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
