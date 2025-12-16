import { tv } from 'tailwind-variants'

/**
 * DatePicker Component Theme
 * Native date input with calendar icon
 * Supports sizes, variants, colors, and states
 */
export default tv({
  slots: {
    root: 'relative inline-block w-full',
    input:
      'w-full rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10 text-foreground placeholder:text-muted-foreground',
    icon: 'absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground'
  },
  variants: {
    size: {
      xs: {
        input: 'px-2 py-1 text-xs',
        icon: 'pr-2'
      },
      sm: {
        input: 'px-3 py-1.5 text-sm',
        icon: 'pr-2.5'
      },
      md: {
        input: 'px-4 py-2 text-base',
        icon: 'pr-3'
      },
      lg: {
        input: 'px-6 py-3 text-lg',
        icon: 'pr-4'
      },
      xl: {
        input: 'px-8 py-4 text-xl',
        icon: 'pr-5'
      }
    },
    variant: {
      outline: {
        input: 'bg-background border-input'
      },
      filled: {
        input: 'bg-muted border-transparent'
      },
      flushed: {
        input:
          'bg-transparent border-x-0 border-t-0 border-b-2 rounded-none px-0 focus:ring-0 focus:ring-offset-0'
      },
      unstyled: {
        input:
          'bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0'
      }
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
      info: ''
    },
    disabled: {
      true: {
        input: 'opacity-50 cursor-not-allowed bg-muted'
      }
    },
    error: {
      true: ''
    }
  },
  compoundVariants: [
    // ===== OUTLINE VARIANT COLORS =====
    {
      variant: 'outline',
      color: 'primary',
      class: {
        input: 'border-input focus:border-primary focus:ring-primary'
      }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        input: 'border-input focus:border-border focus:ring-ring'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        input: 'border-input focus:border-success focus:ring-success'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        input: 'border-input focus:border-warning focus:ring-warning'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        input: 'border-input focus:border-error focus:ring-error'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        input: 'border-input focus:border-info focus:ring-info'
      }
    },

    // ===== ERROR STATE =====
    {
      error: true,
      variant: 'outline',
      class: {
        input: 'border-error focus:border-error focus:ring-error'
      }
    },
    {
      error: true,
      variant: 'filled',
      class: {
        input: 'bg-error/10 border-error/20'
      }
    },
    {
      error: true,
      variant: 'flushed',
      class: {
        input: 'border-error focus:border-error'
      }
    },

    // ===== FILLED VARIANT COLORS =====
    {
      variant: 'filled',
      color: 'primary',
      class: {
        input: 'focus:bg-primary/5 focus:border-primary/20'
      }
    },

    // ===== FLUSHED VARIANT COLORS =====
    {
      variant: 'flushed',
      color: 'primary',
      class: {
        input: 'border-border focus:border-primary'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    disabled: false,
    error: false
  }
})

// Export type for TypeScript support
export type DatePickerThemeVariants = Parameters<typeof tv>[0]
