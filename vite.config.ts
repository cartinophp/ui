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
      external: [
        'vue',
        'reka-ui',
        '@iconify/vue',
        '@tanstack/vue-table',
        '@vueuse/core',
        'tailwind-merge',
        'tailwind-variants'
      ],
      output: {
        exports: 'named',
        globals: { vue: 'Vue' },
        preserveModules: true,       // keep ES modules for tree-shaking
        preserveModulesRoot: 'src',  // root for preserved modules
        manualChunks: (id) => {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('themes')) return 'themes'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css'
          return assetInfo.name || 'asset'
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: true
  }
})