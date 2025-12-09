/**
 * Input component style variants
 */
export const inputStyles = {
  slots: {
    root: 'relative',
    input: [
      'w-full rounded-md border',
      'bg-white dark:bg-gray-900',
      'text-gray-900 dark:text-gray-100',
      'placeholder:text-gray-400 dark:placeholder:text-gray-500',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'focus:outline-none focus:ring-2 focus:ring-offset-0',
      'transition-colors duration-200'
    ],
    iconLeading: 'absolute left-3 top-1/2 -translate-y-1/2 shrink-0 text-gray-400',
    iconTrailing: 'absolute right-3 top-1/2 -translate-y-1/2 shrink-0 text-gray-400'
  },
  variants: {
    appearance: {
      outline: {
        input: 'border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500'
      },
      filled: {
        input: 'border-transparent bg-gray-100 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 focus:ring-primary-500'
      },
      underline: {
        input: 'border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none focus:border-primary-500 focus:ring-0'
      }
    },
    dimension: {
      sm: {
        input: 'px-3 py-1.5 text-sm',
        iconLeading: 'size-4',
        iconTrailing: 'size-4'
      },
      md: {
        input: 'px-4 py-2 text-base',
        iconLeading: 'size-5',
        iconTrailing: 'size-5'
      },
      lg: {
        input: 'px-5 py-3 text-lg',
        iconLeading: 'size-6',
        iconTrailing: 'size-6'
      }
    },
    status: {
      default: '',
      error: {
        input: 'border-red-500 focus:border-red-500 focus:ring-red-500'
      },
      success: {
        input: 'border-green-500 focus:border-green-500 focus:ring-green-500'
      },
      warning: {
        input: 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500'
      }
    },
    hasLeadingIcon: {
      true: ''
    },
    hasTrailingIcon: {
      true: ''
    }
  },
  compoundVariants: [
    {
      dimension: 'sm',
      hasLeadingIcon: true,
      class: {
        input: 'pl-9'
      }
    },
    {
      dimension: 'md',
      hasLeadingIcon: true,
      class: {
        input: 'pl-10'
      }
    },
    {
      dimension: 'lg',
      hasLeadingIcon: true,
      class: {
        input: 'pl-12'
      }
    },
    {
      dimension: 'sm',
      hasTrailingIcon: true,
      class: {
        input: 'pr-9'
      }
    },
    {
      dimension: 'md',
      hasTrailingIcon: true,
      class: {
        input: 'pr-10'
      }
    },
    {
      dimension: 'lg',
      hasTrailingIcon: true,
      class: {
        input: 'pr-12'
      }
    }
  ],
  defaultVariants: {
    appearance: 'outline',
    dimension: 'md',
    status: 'default'
  }
} as const
