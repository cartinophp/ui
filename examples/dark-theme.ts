/**
 * Dark Theme Example
 * A dark mode optimized theme
 */

import { defineTheme } from '@cartino/ui'

export default defineTheme({
  colors: {
    primary: 'cyan',
    secondary: 'purple',
    success: 'emerald',
    warning: 'amber',
    error: 'rose',
    neutral: 'zinc',
  },

  components: {
    button: {
      slots: {
        base: ['dark:bg-zinc-800', 'dark:text-zinc-100', 'dark:border-zinc-700'],
      },
      variants: {
        color: {
          primary: 'bg-cyan-500 dark:bg-cyan-600 text-white hover:bg-cyan-600 dark:hover:bg-cyan-700',
          secondary: 'bg-purple-500 dark:bg-purple-600 text-white hover:bg-purple-600 dark:hover:bg-purple-700',
          neutral: 'bg-zinc-700 dark:bg-zinc-800 text-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-900',
        },
      },
    },

    input: {
      slots: {
        base: ['dark:bg-zinc-900', 'dark:text-zinc-100', 'dark:border-zinc-700', 'dark:placeholder-zinc-500'],
      },
    },

    card: {
      slots: {
        base: ['dark:bg-zinc-900', 'dark:border-zinc-800'],
        header: ['dark:border-zinc-800'],
        footer: ['dark:border-zinc-800', 'dark:bg-zinc-800/50'],
      },
    },
  },
})
