/**
 * Checkbox component style variants
 */
export const checkboxStyles = {
  slots: {
    root: 'inline-flex items-center gap-2',
    input: [
      'shrink-0 rounded cursor-pointer',
      'border-2 transition-colors duration-200',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'focus:outline-none focus:ring-2 focus:ring-offset-2'
    ],
    label: 'text-gray-900 dark:text-gray-100 select-none cursor-pointer',
    description: 'text-sm text-gray-500 dark:text-gray-400'
  },
  variants: {
    color: {
      primary: {
        input: 'border-gray-300 checked:bg-primary-600 checked:border-primary-600 focus:ring-primary-500'
      },
      success: {
        input: 'border-gray-300 checked:bg-green-600 checked:border-green-600 focus:ring-green-500'
      },
      danger: {
        input: 'border-gray-300 checked:bg-red-600 checked:border-red-600 focus:ring-red-500'
      }
    },
    dimension: {
      sm: {
        input: 'size-4',
        label: 'text-sm'
      },
      md: {
        input: 'size-5',
        label: 'text-base'
      },
      lg: {
        input: 'size-6',
        label: 'text-lg'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    dimension: 'md'
  }
} as const
