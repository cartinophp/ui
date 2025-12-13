import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    base: 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    trailingIcon: 'shrink-0'
  },
  variants: {
    variant: {
      solid: '',
      outline: 'border-2',
      soft: '',
      ghost: '',
      link: 'underline-offset-4 hover:underline'
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
      neutral: ''
    },
    size: {
      xs: {
        base: 'px-2 py-1 text-xs gap-1.5',
        leadingIcon: 'size-3',
        trailingIcon: 'size-3'
      },
      sm: {
        base: 'px-3 py-1.5 text-sm gap-2',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      md: {
        base: 'px-4 py-2 text-base gap-2',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
      },
      lg: {
        base: 'px-6 py-3 text-lg gap-2.5',
        leadingIcon: 'size-6',
        trailingIcon: 'size-6'
      },
      xl: {
        base: 'px-8 py-4 text-xl gap-3',
        leadingIcon: 'size-7',
        trailingIcon: 'size-7'
      }
    },
    loading: {
      true: 'cursor-wait opacity-75'
    },
    block: {
      true: {
        base: 'w-full'
      }
    },
    square: {
      true: ''
    },
    disabled: {
      true: ''
    }
  },
  compoundVariants: [
    // Solid variants
    {
      variant: 'solid',
      color: 'primary',
      class: {
        base: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary'
      }
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        base: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary'
      }
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        base: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        base: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        base: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
      }
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        base: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500'
      }
    },
    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        base: 'border-primary text-primary hover:bg-primary/10 focus:ring-primary'
      }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        base: 'border-secondary text-secondary hover:bg-secondary/10 focus:ring-secondary'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        base: 'border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        base: 'border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500'
      }
    },
    // Soft variants
    {
      variant: 'soft',
      color: 'primary',
      class: {
        base: 'bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        base: 'bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-500'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        base: 'bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500'
      }
    },
    // Ghost variants
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        base: 'text-primary hover:bg-primary/10 focus:ring-primary'
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        base: 'text-red-600 hover:bg-red-50 focus:ring-red-500'
      }
    },
    // Link variants
    {
      variant: 'link',
      color: 'primary',
      class: {
        base: 'text-primary hover:text-primary/80'
      }
    },
    // Square size adjustments
    {
      square: true,
      size: 'xs',
      class: {
        base: 'p-1'
      }
    },
    {
      square: true,
      size: 'sm',
      class: {
        base: 'p-1.5'
      }
    },
    {
      square: true,
      size: 'md',
      class: {
        base: 'p-2'
      }
    },
    {
      square: true,
      size: 'lg',
      class: {
        base: 'p-3'
      }
    },
    {
      square: true,
      size: 'xl',
      class: {
        base: 'p-4'
      }
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md'
  }
})