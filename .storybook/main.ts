import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {},
  staticDirs: ['./public'],
  async viteFinal(config) {
    const tailwindcss = (await import('@tailwindcss/vite')).default

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src')
        }
      }
    })
  }
}

export default config
