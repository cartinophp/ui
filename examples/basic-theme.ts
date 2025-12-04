/**
 * Basic Theme Example
 * A simple customization example
 */

import { defineTheme } from '@cartino/ui'

export default defineTheme({
  colors: {
    primary: 'indigo',
    secondary: 'purple',
  },

  components: {
    button: {
      variants: {
        color: {
          gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600',
        },
      },
    },
  },
})
