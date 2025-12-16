import { tv } from 'tailwind-variants'

/**
 * Radio Component Theme
 * Individual radio button styling (used within RadioGroup)
 * Supports sizes, colors, and states
 */
export default tv({
  slots: {
    root: 'shrink-0 rounded-full border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    indicator:
      'flex items-center justify-center w-full h-full relative after:content-[""] after:block after:rounded-full after:shadow-sm'
  },
  variants: {
    size: {
      sm: {
        root: 'h-4 w-4',
        indicator: 'after:h-2 after:w-2'
      },
      md: {
        root: 'h-5 w-5',
        indicator: 'after:h-2.5 after:w-2.5'
      },
      lg: {
        root: 'h-6 w-6',
        indicator: 'after:h-3 after:w-3'
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
    checked: {
      true: '',
      false: ''
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed'
      }
    }
  },
  compoundVariants: [
    // ===== PRIMARY COLOR =====
    {
      color: 'primary',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'primary',
      checked: true,
      class: {
        root: 'border-primary bg-primary',
        indicator: 'after:bg-primary-foreground'
      }
    },

    // ===== SECONDARY COLOR =====
    {
      color: 'secondary',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'secondary',
      checked: true,
      class: {
        root: 'border-secondary bg-secondary',
        indicator: 'after:bg-secondary-foreground'
      }
    },

    // ===== SUCCESS COLOR =====
    {
      color: 'success',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'success',
      checked: true,
      class: {
        root: 'border-success bg-success',
        indicator: 'after:bg-success-foreground'
      }
    },

    // ===== WARNING COLOR =====
    {
      color: 'warning',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'warning',
      checked: true,
      class: {
        root: 'border-warning bg-warning',
        indicator: 'after:bg-warning-foreground'
      }
    },

    // ===== ERROR COLOR =====
    {
      color: 'error',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'error',
      checked: true,
      class: {
        root: 'border-error bg-error',
        indicator: 'after:bg-error-foreground'
      }
    },

    // ===== INFO COLOR =====
    {
      color: 'info',
      checked: false,
      class: {
        root: 'border-input bg-background'
      }
    },
    {
      color: 'info',
      checked: true,
      class: {
        root: 'border-info bg-info',
        indicator: 'after:bg-info-foreground'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    checked: false,
    disabled: false
  }
})

// Export type for TypeScript support
export type RadioThemeVariants = Parameters<typeof tv>[0]
