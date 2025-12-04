/**
 * Badge component style variants
 */
export const badgeStyles = {
  slots: {
    root: [
      'inline-flex items-center gap-1 font-medium rounded-full',
      'whitespace-nowrap'
    ],
    dot: 'shrink-0 rounded-full'
  },
  variants: {
    appearance: {
      filled: '',
      outlined: 'ring-1 ring-inset',
      soft: '',
      subtle: 'ring-1 ring-inset'
    },
    color: {
      primary: '',
      neutral: '',
      success: '',
      warning: '',
      danger: '',
      info: ''
    },
    dimension: {
      sm: {
        root: 'px-2 py-0.5 text-xs',
        dot: 'size-1.5'
      },
      md: {
        root: 'px-2.5 py-1 text-sm',
        dot: 'size-2'
      },
      lg: {
        root: 'px-3 py-1.5 text-base',
        dot: 'size-2.5'
      }
    }
  },
  compoundVariants: [
    // Primary
    {
      appearance: 'filled',
      color: 'primary',
      class: 'bg-primary-600 text-white'
    },
    {
      appearance: 'outlined',
      color: 'primary',
      class: 'ring-primary-600 text-primary-600'
    },
    {
      appearance: 'soft',
      color: 'primary',
      class: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
    },
    {
      appearance: 'subtle',
      color: 'primary',
      class: 'bg-primary-50 ring-primary-200 text-primary-700 dark:bg-primary-900/20 dark:ring-primary-800 dark:text-primary-400'
    },
    // Neutral
    {
      appearance: 'filled',
      color: 'neutral',
      class: 'bg-gray-600 text-white dark:bg-gray-400 dark:text-gray-900'
    },
    {
      appearance: 'outlined',
      color: 'neutral',
      class: 'ring-gray-300 text-gray-700 dark:ring-gray-600 dark:text-gray-300'
    },
    {
      appearance: 'soft',
      color: 'neutral',
      class: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
    },
    {
      appearance: 'subtle',
      color: 'neutral',
      class: 'bg-gray-50 ring-gray-200 text-gray-700 dark:bg-gray-900/50 dark:ring-gray-700 dark:text-gray-300'
    },
    // Success
    {
      appearance: 'filled',
      color: 'success',
      class: 'bg-green-600 text-white'
    },
    {
      appearance: 'outlined',
      color: 'success',
      class: 'ring-green-600 text-green-600'
    },
    {
      appearance: 'soft',
      color: 'success',
      class: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    },
    // Warning
    {
      appearance: 'filled',
      color: 'warning',
      class: 'bg-yellow-500 text-white'
    },
    {
      appearance: 'outlined',
      color: 'warning',
      class: 'ring-yellow-500 text-yellow-600'
    },
    {
      appearance: 'soft',
      color: 'warning',
      class: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    },
    // Danger
    {
      appearance: 'filled',
      color: 'danger',
      class: 'bg-red-600 text-white'
    },
    {
      appearance: 'outlined',
      color: 'danger',
      class: 'ring-red-600 text-red-600'
    },
    {
      appearance: 'soft',
      color: 'danger',
      class: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    }
  ],
  defaultVariants: {
    appearance: 'soft',
    color: 'primary',
    dimension: 'md'
  }
} as const
