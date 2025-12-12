import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex items-center gap-1.5 font-medium transition-colors',
    closeButton: 'p-0.5 rounded-sm hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current transition-colors'
  },
  variants: {
    size: {
      sm: {
        root: 'text-xs px-2 py-0.5',
        closeButton: 'size-3'
      },
      md: {
        root: 'text-sm px-2.5 py-1',
        closeButton: 'size-3.5'
      },
      lg: {
        root: 'text-base px-3 py-1.5',
        closeButton: 'size-4'
      }
    },
    variant: {
      solid: {},
      soft: {},
      outline: {}
    },
    color: {
      primary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
      neutral: {}
    },
    rounded: {
      true: {
        root: 'rounded-full'
      },
      false: {
        root: 'rounded-md'
      }
    }
  },
  compoundVariants: [
    // Solid variants
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error text-error-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: 'bg-muted text-muted-foreground'
      }
    },
    // Soft variants
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/10 text-primary border border-primary/20'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/10 text-success border border-success/20'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/10 text-warning border border-warning/20'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/10 text-error border border-error/20'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/10 text-info border border-info/20'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-muted/10 text-muted border border-muted/20'
      }
    },
    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'text-primary border border-primary'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'text-success border border-success'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'text-warning border border-warning'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'text-error border border-error'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'text-info border border-info'
      }
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'text-muted border border-muted'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
    rounded: false
  }
})