/**
 * Card component style variants
 */
export const cardStyles = {
  slots: {
    root: 'rounded-lg overflow-hidden',
    header: 'px-6 py-4 border-b',
    body: 'px-6 py-4',
    footer: 'px-6 py-4 border-t'
  },
  variants: {
    appearance: {
      filled: {
        root: 'bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900',
        header: 'border-gray-800 dark:border-gray-200',
        footer: 'border-gray-800 dark:border-gray-200'
      },
      outlined: {
        root: 'bg-white border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-800',
        header: 'border-gray-200 dark:border-gray-800',
        footer: 'border-gray-200 dark:border-gray-800'
      },
      elevated: {
        root: 'bg-white shadow-lg dark:bg-gray-900',
        header: 'border-gray-200 dark:border-gray-800',
        footer: 'border-gray-200 dark:border-gray-800'
      },
      soft: {
        root: 'bg-gray-50 dark:bg-gray-800/50',
        header: 'border-gray-200 dark:border-gray-700',
        footer: 'border-gray-200 dark:border-gray-700'
      }
    },
    padding: {
      none: {
        header: 'p-0',
        body: 'p-0',
        footer: 'p-0'
      },
      sm: {
        header: 'px-4 py-3',
        body: 'px-4 py-3',
        footer: 'px-4 py-3'
      },
      md: {
        header: 'px-6 py-4',
        body: 'px-6 py-4',
        footer: 'px-6 py-4'
      },
      lg: {
        header: 'px-8 py-6',
        body: 'px-8 py-6',
        footer: 'px-8 py-6'
      }
    }
  },
  defaultVariants: {
    appearance: 'outlined',
    padding: 'md'
  }
} as const
