import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/vue3-vite",
  async viteFinal(config) {
    // Add aliases for Nuxt-specific imports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '#build/ui-image-component': path.resolve(dirname, '../mocks/ui-image-component.ts'),
      '#imports': path.resolve(dirname, '../mocks/imports.ts'),
      '@': path.resolve(dirname, '../../src')
    };
    
    // Disable vue-docgen-plugin that's causing issues with compiled Vue files
    if (config.plugins) {
      config.plugins = config.plugins.filter((plugin: any) => {
        return plugin && typeof plugin === 'object' && plugin.name !== 'storybook:vue-docgen-plugin';
      });
    }
    
    return config;
  }
};
export default config;