/**
 * Minimal Theme Preset
 * A clean, minimalist theme with subtle colors
 */

import type { ThemePreset } from '../runtime/types/theme'

export const minimalPreset: ThemePreset = {
  name: 'minimal',
  description: 'Minimalist theme with subtle colors and clean design',

  prefix: 'ui-',
  transitions: false, // Minimal = no transitions

  colors: {
    primary: 'zinc',
    secondary: 'gray',
    success: 'emerald',
    info: 'sky',
    warning: 'amber',
    error: 'rose',
    neutral: 'stone'
  },

  icons: {
    loading: 'i-lucide-loader-2',
    check: 'i-lucide-check',
    close: 'i-lucide-x',
    info: 'i-lucide-info',
    success: 'i-lucide-check-circle',
    warning: 'i-lucide-alert-triangle',
    error: 'i-lucide-x-circle',
    chevronDown: 'i-lucide-chevron-down',
    chevronUp: 'i-lucide-chevron-up',
    chevronLeft: 'i-lucide-chevron-left',
    chevronRight: 'i-lucide-chevron-right',
    search: 'i-lucide-search',
    filter: 'i-lucide-filter',
    add: 'i-lucide-plus',
    remove: 'i-lucide-minus'
  },

  components: {
    button: {
      defaultVariants: {
        variant: 'ghost',
        color: 'neutral'
      }
    },
    input: {
      defaultVariants: {
        variant: 'outline',
        color: 'neutral'
      }
    }
  }
}

export default minimalPreset
