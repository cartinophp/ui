import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    content:
      'z-50 overflow-hidden rounded-lg border text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    arrow: 'fill-popover'
  },
  variants: {
    size: {
      sm: {
        content: 'px-2 py-1 text-xs rounded-md'
      },
      md: {
        content: 'px-3 py-1.5 sm:py-1 text-xs sm:text-sm rounded-lg'
      },
      lg: {
        content: 'px-4 py-2 sm:py-1.5 text-sm rounded-lg'
      },
    },
    color: {
      default: {
        content: 'bg-popover border-border',
        arrow: 'fill-popover'
      },
      primary: {
        content: 'bg-primary text-primary-foreground border-primary',
        arrow: 'fill-primary'
      },
      secondary: {
        content: 'bg-secondary text-secondary-foreground border-secondary',
        arrow: 'fill-secondary'
      },
      success: {
        content: 'bg-success text-success-foreground border-success',
        arrow: 'fill-success'
      },
      warning: {
        content: 'bg-warning text-warning-foreground border-warning',
        arrow: 'fill-warning'
      },
      error: {
        content: 'bg-error text-error-foreground border-error',
        arrow: 'fill-error'
      },
      info: {
        content: 'bg-info text-info-foreground border-info',
        arrow: 'fill-info'
      },
      neutral: {
        content: 'bg-foreground text-background border-foreground',
        arrow: 'fill-foreground'
      }
    },
    variant: {
      solid: {},
      soft: {},
      outline: {}
    }
  },
  compoundVariants: [
    // Soft variants
    {
      variant: 'soft',
      color: 'primary',
      class: {
        content: 'bg-primary/10 text-primary border-primary/20',
        arrow: 'fill-primary/10'
      }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        content: 'bg-secondary/10 text-secondary border-secondary/20',
        arrow: 'fill-secondary/10'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        content: 'bg-success/10 text-success border-success/20',
        arrow: 'fill-success/10'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        content: 'bg-warning/10 text-warning border-warning/20',
        arrow: 'fill-warning/10'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        content: 'bg-error/10 text-error border-error/20',
        arrow: 'fill-error/10'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        content: 'bg-info/10 text-info border-info/20',
        arrow: 'fill-info/10'
      }
    },
    // Outline variants
    {
      variant: 'outline',
      color: 'default',
      class: {
        content: 'bg-background border-border'
      }
    },
    {
      variant: 'outline',
      color: 'primary',
      class: {
        content: 'bg-background text-primary border-primary',
        arrow: 'fill-background'
      }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        content: 'bg-background text-secondary border-secondary',
        arrow: 'fill-background'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        content: 'bg-background text-success border-success',
        arrow: 'fill-background'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        content: 'bg-background text-warning border-warning',
        arrow: 'fill-background'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        content: 'bg-background text-error border-error',
        arrow: 'fill-background'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        content: 'bg-background text-info border-info',
        arrow: 'fill-background'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
    variant: 'solid'
  }
})
