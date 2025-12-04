/**
 * Brand Theme Example
 * Custom branded theme with company colors
 */

import { defineTheme } from '@cartino/ui'

export default defineTheme({
  colors: {
    // Company brand colors
    primary: 'blue', // Brand blue
    secondary: 'orange', // Brand orange
    success: 'green',
    warning: 'yellow',
    error: 'red',
    neutral: 'gray',
  },

  icons: {
    // Use custom icon set (e.g., Font Awesome, Lucide)
    loading: 'i-fa-spinner',
    check: 'i-fa-check',
    close: 'i-fa-times',
    search: 'i-fa-search',
    // ... etc
  },

  components: {
    button: {
      slots: {
        base: [
          'font-bold', // Company style: always bold buttons
          'uppercase', // Company style: uppercase text
          'tracking-wide', // Company style: letter spacing
        ],
      },
      variants: {
        color: {
          // Custom brand gradient
          brand: 'bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 text-white hover:from-blue-700 hover:via-blue-800 hover:to-orange-700 shadow-lg',
        },
        size: {
          // Company standard sizes
          sm: {
            base: 'px-4 py-2 text-xs',
          },
          md: {
            base: 'px-6 py-3 text-sm',
          },
          lg: {
            base: 'px-8 py-4 text-base',
          },
        },
      },
      defaultVariants: {
        color: 'brand',
        variant: 'solid',
        size: 'md',
      },
    },

    card: {
      slots: {
        base: ['rounded-xl', 'border-2', 'border-gray-200', 'shadow-md'],
        header: ['bg-gradient-to-r', 'from-blue-50', 'to-orange-50', 'border-b-2', 'border-gray-200', 'px-6', 'py-4'],
        body: ['p-6'],
        footer: ['bg-gray-50', 'border-t-2', 'border-gray-200', 'px-6', 'py-4'],
      },
    },

    badge: {
      defaultVariants: {
        variant: 'solid',
        color: 'primary',
      },
    },
  },
})
