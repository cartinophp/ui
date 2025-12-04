/**
 * Switch/Toggle component style variants
 */
export const switchStyles = {
  slots: {
    root: [
      'relative inline-flex shrink-0 cursor-pointer rounded-full',
      'transition-colors duration-200 ease-in-out',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-60'
    ],
    thumb: [
      'pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0',
      'transition-transform duration-200 ease-in-out'
    ]
  },
  variants: {
    color: {
      primary: {
        root: 'data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700 focus-visible:ring-primary-500'
      },
      success: {
        root: 'data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700 focus-visible:ring-green-500'
      },
      danger: {
        root: 'data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700 focus-visible:ring-red-500'
      }
    },
    dimension: {
      sm: {
        root: 'h-5 w-9',
        thumb: 'size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5'
      },
      md: {
        root: 'h-6 w-11',
        thumb: 'size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5'
      },
      lg: {
        root: 'h-7 w-14',
        thumb: 'size-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0.5'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    dimension: 'md'
  }
} as const
