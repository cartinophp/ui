import { tv } from 'tailwind-variants'

/**
 * Button Component Theme
 * Supports all variants, colors, sizes, and states
 * Uses the Cartino UI color system tokens
 */
export default tv({
  slots: {
    base: 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    label: 'truncate',
    leadingIcon: 'shrink-0',
    trailingIcon: 'shrink-0'
  },
  variants: {
    variant: {
      solid: 'shadow-sm',
      outline: 'border-2 bg-transparent',
      soft: '',
      ghost: 'bg-transparent shadow-none',
      link: 'bg-transparent shadow-none underline-offset-4 hover:underline px-0'
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
      info: ''
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
      true: {
        base: 'cursor-wait opacity-75'
      }
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
    // ===== SOLID VARIANT =====
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
        base: 'bg-success text-success-foreground hover:bg-success/90 focus:ring-success'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        base: 'bg-warning text-warning-foreground hover:bg-warning/90 focus:ring-warning'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        base: 'bg-error text-error-foreground hover:bg-error/90 focus:ring-error'
      }
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        base: 'bg-info text-info-foreground hover:bg-info/90 focus:ring-info'
      }
    },

    // ===== OUTLINE VARIANT =====
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
        base: 'border-border text-foreground hover:bg-accent focus:ring-ring'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        base: 'border-success text-success hover:bg-success/10 focus:ring-success'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        base: 'border-warning text-warning hover:bg-warning/10 focus:ring-warning'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        base: 'border-error text-error hover:bg-error/10 focus:ring-error'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        base: 'border-info text-info hover:bg-info/10 focus:ring-info'
      }
    },

    // ===== SOFT VARIANT =====
    {
      variant: 'soft',
      color: 'primary',
      class: {
        base: 'bg-primary/10 text-primary hover:bg-primary/20 focus:ring-primary'
      }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        base: 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 focus:ring-ring'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        base: 'bg-success/10 text-success hover:bg-success/20 focus:ring-success'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        base: 'bg-warning/10 text-warning hover:bg-warning/20 focus:ring-warning'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        base: 'bg-error/10 text-error hover:bg-error/20 focus:ring-error'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        base: 'bg-info/10 text-info hover:bg-info/20 focus:ring-info'
      }
    },

    // ===== GHOST VARIANT =====
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        base: 'text-primary hover:bg-primary/10 focus:ring-primary'
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        base: 'text-foreground hover:bg-accent focus:ring-ring'
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        base: 'text-success hover:bg-success/10 focus:ring-success'
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        base: 'text-warning hover:bg-warning/10 focus:ring-warning'
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        base: 'text-error hover:bg-error/10 focus:ring-error'
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        base: 'text-info hover:bg-info/10 focus:ring-info'
      }
    },

    // ===== LINK VARIANT =====
    {
      variant: 'link',
      color: 'primary',
      class: {
        base: 'text-primary hover:text-primary/80'
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        base: 'text-muted hover:text-foreground'
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        base: 'text-error hover:text-error/80'
      }
    },
    // ===== SQUARE SIZE ADJUSTMENTS =====
    {
      square: true,
      size: 'xs',
      class: {
        base: 'p-1 aspect-square'
      }
    },
    {
      square: true,
      size: 'sm',
      class: {
        base: 'p-1.5 aspect-square'
      }
    },
    {
      square: true,
      size: 'md',
      class: {
        base: 'p-2 aspect-square'
      }
    },
    {
      square: true,
      size: 'lg',
      class: {
        base: 'p-3 aspect-square'
      }
    },
    {
      square: true,
      size: 'xl',
      class: {
        base: 'p-4 aspect-square'
      }
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    loading: false,
    block: false,
    square: false,
    disabled: false
  }
})

// Export type for TypeScript support
export type ButtonThemeVariants = Parameters<typeof tv>[0]
