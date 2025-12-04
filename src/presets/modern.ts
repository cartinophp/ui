/**
 * Modern Theme Preset
 * A vibrant, modern theme with bold colors and smooth transitions
 */

import type { ThemePreset } from '../runtime/types/theme'

export const modernPreset: ThemePreset = {
  name: 'modern',
  description: 'Modern theme with vibrant colors and smooth animations',

  prefix: 'ui-',
  transitions: true,

  colors: {
    primary: 'indigo',
    secondary: 'purple',
    success: 'teal',
    info: 'cyan',
    warning: 'orange',
    error: 'pink',
    neutral: 'zinc'
  },

  icons: {
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark',
    info: 'i-heroicons-information-circle',
    success: 'i-heroicons-check-badge',
    warning: 'i-heroicons-exclamation-circle',
    error: 'i-heroicons-x-circle',
    chevronDown: 'i-heroicons-chevron-down',
    chevronUp: 'i-heroicons-chevron-up',
    chevronLeft: 'i-heroicons-chevron-left',
    chevronRight: 'i-heroicons-chevron-right',
    search: 'i-heroicons-magnifying-glass-circle',
    filter: 'i-heroicons-funnel',
    add: 'i-heroicons-plus-circle',
    remove: 'i-heroicons-minus-circle'
  },

  components: {
    button: {
      slots: {
        base: ['shadow-sm hover:shadow-md transition-all duration-200']
      },
      defaultVariants: {
        variant: 'soft',
        color: 'primary'
      }
    },
    card: {
      slots: {
        base: ['shadow-lg hover:shadow-xl transition-shadow duration-300']
      }
    },
    input: {
      slots: {
        base: ['focus:ring-2 focus:ring-offset-2 transition-all duration-200']
      },
      defaultVariants: {
        variant: 'soft',
        color: 'primary'
      }
    }
  }
}

export default modernPreset
