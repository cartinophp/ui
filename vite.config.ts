import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CartinoUI',
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'reka-ui', 'tailwind-variants', '@tanstack/vue-table', 'colortranslator', 'vaul-vue', '@vueuse/core', '@vueuse/integrations/useFuse', 'ohash', 'tailwind-merge', '@tiptap/vue-3', '@tiptap/starter-kit', '@tiptap/pm', '#build/ui-image-component', '#build/ui', 'motion-v'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI',
          'tailwind-variants': 'TailwindVariants',
          '@tanstack/vue-table': 'VueTable'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names?.[0] === 'style.css') return 'index.css'
          return assetInfo.names?.[0] || 'assets/[name][extname]'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: false
  }
})
