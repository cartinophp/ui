/**
 * Default Theme Preset
 * The default CartinoPHP UI theme
 */

import type { ThemePreset } from '../runtime/types/theme'

export const defaultPreset: ThemePreset = {
  name: 'default',
  description: 'Default CartinoPHP UI theme with balanced colors and modern styling',

  prefix: 'ui-',
  transitions: true,

  colors: {
    primary: 'blue',
    secondary: 'violet',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red',
    neutral: 'slate'
  },

  icons: {
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark',
    info: 'i-heroicons-information-circle',
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-triangle',
    error: 'i-heroicons-x-circle',
    chevronDown: 'i-heroicons-chevron-down',
    chevronUp: 'i-heroicons-chevron-up',
    chevronLeft: 'i-heroicons-chevron-left',
    chevronRight: 'i-heroicons-chevron-right',
    chevronDoubleLeft: 'i-heroicons-chevron-double-left',
    chevronDoubleRight: 'i-heroicons-chevron-double-right',
    search: 'i-heroicons-magnifying-glass',
    filter: 'i-heroicons-funnel',
    sort: 'i-heroicons-bars-arrow-up',
    add: 'i-heroicons-plus',
    remove: 'i-heroicons-minus',
    edit: 'i-heroicons-pencil',
    delete: 'i-heroicons-trash'
  },

  components: {}
}

export default defaultPreset
