import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  failOnWarn: false,
  entries: [
    {
      builder: 'mkdist',
      input: './src/runtime/',
      outDir: './dist/runtime',
      pattern: ['**/*.vue', '**/*.ts', '**/*.css']
    },
    {
      builder: 'mkdist',
      input: './src/theme/',
      outDir: './dist/theme'
    },
    {
      builder: 'mkdist',
      input: './src/styles/',
      outDir: './dist/styles'
    },
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/',
      pattern: ['config.ts', 'module.ts', 'templates.ts', 'unplugin.ts', 'vite.ts']
    }
  ],
  declaration: false,
  rollup: {
    emitCJS: false
  },
  hooks: {
    'mkdist:entry:options'(ctx, entry, options) {
      options.addRelativeDeclarationExtensions = false
    }
  },
  externals: [
    '#build/ui',
    'vite',
    'vue',
    'reka-ui',
    'tailwind-variants',
    '@tanstack/vue-table',
    'colortranslator',
    'vaul-vue',
    '@vueuse/core',
    '@vueuse/integrations',
    'ohash',
    'tailwind-merge',
    '@tiptap/vue-3',
    '@tiptap/starter-kit',
    '@tiptap/pm'
  ]
})
