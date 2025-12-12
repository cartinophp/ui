import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    label: 'block mb-1.5 font-medium text-gray-700',
    wrapper: 'relative flex items-center transition-all',
    input: 'flex-1 outline-none bg-transparent',
    leadingIcon: 'shrink-0 text-gray-400 absolute left-3',
    trailingIcon: 'shrink-0 text-gray-400 absolute right-3',
    hint: 'mt-1.5'
  },
  variants: {
    size: {
      sm: {
        label: 'text-xs',
        wrapper: 'text-sm',
        input: 'px-3 py-1.5',
        leadingIcon: 'w-4 h-4',
        trailingIcon: 'w-4 h-4',
        hint: 'text-xs'
      },
      md: {
        label: 'text-sm',
        wrapper: 'text-base',
        input: 'px-4 py-2',
        leadingIcon: 'w-5 h-5',
        trailingIcon: 'w-5 h-5',
        hint: 'text-sm'
      },
      lg: {
        label: 'text-base',
        wrapper: 'text-lg',
        input: 'px-5 py-3',
        leadingIcon: 'w-6 h-6',
        trailingIcon: 'w-6 h-6',
        hint: 'text-base'
      }
    },
    variant: {
      outline: {
        wrapper: 'border rounded-lg bg-white'
      },
      filled: {
        wrapper: 'border-0 rounded-lg'
      },
      ghost: {
        wrapper: 'border-0'
      }
    },
    color: {
      primary: {},
      success: {},
      warning: {},
      error: {}
    },
    focused: {
      true: {}
    },
    disabled: {
      true: {
        wrapper: 'opacity-50 cursor-not-allowed'
      }
    },
    hasLeading: {
      true: {
        input: 'pl-10'
      }
    },
    hasError: {
      true: {
        hint: 'text-red-600'
      },
      false: {
        hint: 'text-gray-500'
      }
    }
  },
  compoundVariants: [
    // Outline variant colors
    {
      variant: 'outline',
      color: 'primary',
      focused: false,
      class: {
        wrapper: 'border-gray-300 hover:border-gray-400'
      }
    },
    {
      variant: 'outline',
      color: 'primary',
      focused: true,
      class: {
        wrapper: 'border-blue-500 ring-2 ring-blue-100'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        wrapper: 'border-green-500 ring-2 ring-green-100'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        wrapper: 'border-yellow-500 ring-2 ring-yellow-100'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        wrapper: 'border-red-500 ring-2 ring-red-100'
      }
    },
    // Filled variant colors
    {
      variant: 'filled',
      color: 'primary',
      focused: false,
      class: {
        wrapper: 'bg-gray-50'
      }
    },
    {
      variant: 'filled',
      color: 'primary',
      focused: true,
      class: {
        wrapper: 'bg-blue-50 ring-2 ring-blue-100'
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        wrapper: 'bg-green-50 ring-2 ring-green-100'
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        wrapper: 'bg-yellow-50 ring-2 ring-yellow-100'
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        wrapper: 'bg-red-50 ring-2 ring-red-100'
      }
    },
    // Ghost variant colors
    {
      variant: 'ghost',
      color: 'primary',
      focused: false,
      class: {
        wrapper: 'bg-transparent'
      }
    },
    {
      variant: 'ghost',
      color: 'primary',
      focused: true,
      class: {
        wrapper: 'bg-gray-50'
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        wrapper: 'bg-green-50'
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        wrapper: 'bg-yellow-50'
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        wrapper: 'bg-red-50'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    focused: false,
    disabled: false,
    hasLeading: false,
    hasError: false
  }
})
