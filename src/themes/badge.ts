import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex items-center gap-1.5 font-medium transition-colors',
    closeButton:
      'p-0.5 rounded-sm hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-current transition-colors'
  },
  variants: {
    size: {
      sm: {
        root: 'min-h-[32px] min-w-[32px] px-3 py-1.5 text-xs font-medium rounded-lg md:min-h-[28px] md:min-w-[28px] leading-[14px]',
        closeButton: 'w-[22px] h-[22px]'
      },
      md: {
        root: 'min-h-[36px] min-w-[36px] px-4 py-2 text-sm font-medium rounded-lg md:min-h-[32px] md:min-w-[32px] leading-[18px]',
        closeButton: 'w-[22px] h-[22px]'
      },
      lg: {
        root: 'min-h-[40px] min-w-[40px] px-5 py-2.5 text-base font-medium rounded-lg md:min-h-[36px] md:min-w-[36px] leading-[22px]',
        closeButton: 'w-[22px] h-[22px]'
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
    // Soft variants - lighter backgrounds with same foreground pattern
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/80 text-primary-foreground border border-primary'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/80 text-success-foreground border border-success'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/80 text-warning-foreground border border-warning'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/80 text-error-foreground border border-error'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/80 text-info-foreground border border-info'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-muted/80 text-muted-foreground border border-muted'
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
