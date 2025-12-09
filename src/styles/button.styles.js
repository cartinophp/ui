/**
 * Button component style variants
 * Inspired by modern UI libraries with custom naming
 */
export const buttonStyles = {
  slots: {
    root: [
      'rounded-md font-medium inline-flex items-center justify-center',
      'disabled:cursor-not-allowed disabled:opacity-60',
      'transition-colors duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
    ],
    label: 'truncate',
    iconLeading: 'shrink-0',
    iconTrailing: 'shrink-0'
  },
  variants: {
    appearance: {
      filled: '',
      outlined: '',
      ghost: '',
      soft: '',
      link: ''
    },
    color: {
      primary: '',
      neutral: '',
      success: '',
      warning: '',
      danger: ''
    },
    dimension: {
      xs: {
        root: 'px-2 py-1 text-xs gap-1',
        iconLeading: 'size-3.5',
        iconTrailing: 'size-3.5'
      },
      sm: {
        root: 'px-3 py-1.5 text-sm gap-1.5',
        iconLeading: 'size-4',
        iconTrailing: 'size-4'
      },
      md: {
        root: 'px-4 py-2 text-sm gap-2',
        iconLeading: 'size-5',
        iconTrailing: 'size-5'
      },
      lg: {
        root: 'px-5 py-2.5 text-base gap-2.5',
        iconLeading: 'size-5',
        iconTrailing: 'size-5'
      },
      xl: {
        root: 'px-6 py-3 text-base gap-3',
        iconLeading: 'size-6',
        iconTrailing: 'size-6'
      }
    },
    fullWidth: {
      true: {
        root: 'w-full'
      }
    },
    isSquare: {
      true: ''
    },
    isDisabled: {
      true: {
        root: 'cursor-not-allowed opacity-60'
      }
    },
    isLoading: {
      true: ''
    }
  },
  compoundVariants: [
    // Primary filled
    {
      appearance: 'filled',
      color: 'primary',
      class: {
        root: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-600'
      }
    },
    // Primary outlined
    {
      appearance: 'outlined',
      color: 'primary',
      class: {
        root: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary-950 dark:active:bg-primary-900 focus-visible:ring-primary-600'
      }
    },
    // Primary ghost
    {
      appearance: 'ghost',
      color: 'primary',
      class: {
        root: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary-950 dark:active:bg-primary-900'
      }
    },
    // Primary soft
    {
      appearance: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 dark:bg-primary-900 dark:text-primary-300 dark:hover:bg-primary-800 dark:active:bg-primary-700'
      }
    },
    // Primary link
    {
      appearance: 'link',
      color: 'primary',
      class: {
        root: 'text-primary-600 hover:text-primary-700 active:text-primary-800 underline-offset-4 hover:underline'
      }
    },
    // Neutral filled
    {
      appearance: 'filled',
      color: 'neutral',
      class: {
        root: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:active:bg-gray-300 focus-visible:ring-gray-900'
      }
    },
    // Neutral outlined
    {
      appearance: 'outlined',
      color: 'neutral',
      class: {
        root: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700 focus-visible:ring-gray-500'
      }
    },
    // Neutral ghost
    {
      appearance: 'ghost',
      color: 'neutral',
      class: {
        root: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700'
      }
    },
    // Neutral soft
    {
      appearance: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600'
      }
    },
    // Square variants
    {
      dimension: 'xs',
      isSquare: true,
      class: { root: 'p-1' }
    },
    {
      dimension: 'sm',
      isSquare: true,
      class: { root: 'p-1.5' }
    },
    {
      dimension: 'md',
      isSquare: true,
      class: { root: 'p-2' }
    },
    {
      dimension: 'lg',
      isSquare: true,
      class: { root: 'p-2.5' }
    },
    {
      dimension: 'xl',
      isSquare: true,
      class: { root: 'p-3' }
    },
    // Loading spinner on leading icon
    {
      isLoading: true,
      class: {
        iconLeading: 'animate-spin'
      }
    }
  ],
  defaultVariants: {
    appearance: 'filled',
    color: 'primary',
    dimension: 'md'
  }
} as const
