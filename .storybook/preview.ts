import type { Preview } from '@storybook/vue3-vite'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '../src/style.css'
import Toaster from '../src/components/Toaster.vue'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff' // Your light theme background color
        },
        {
          name: 'dark',
          value: '#1a1a1a' // Your dark theme background color
        }
      ]
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-theme'
    }),
    (story, context) => {
      // Sync background with theme
      const theme = context.globals.theme || 'light'
      context.globals.backgrounds.value = theme
      console.log({ context })
      return story()
    },
    // Global Toaster for all stories
    (story) => ({
      components: { story, Toaster },
      template: '<div><story /><Toaster /></div>'
    })
  ]
}

export default preview
