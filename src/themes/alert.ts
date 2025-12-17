import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5',
    wrapper: 'min-w-0 flex-1 flex flex-col',
    title: 'text-sm font-medium',
    description: 'text-sm opacity-90 mt-1',
    icon: 'shrink-0 size-5',
    avatar: 'shrink-0',
    actions: 'flex flex-wrap gap-1.5 shrink-0',
    closeButton: 'p-0 shrink-0'
  },
  variants: {
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: ''
    },
    color: {
      primary: '',
      success: '',
      warning: '',
      error: '',
      neutral: ''
    },
    orientation: {
      horizontal: {
        root: 'items-center',
        actions: 'items-center'
      },
      vertical: {
        root: 'items-start',
        actions: 'items-start mt-2.5'
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
      color: 'neutral',
      class: {
        root: 'bg-foreground text-background'
      }
    },
    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'text-primary ring-1 ring-inset ring-primary/25'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'text-success ring-1 ring-inset ring-success/25'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'text-warning ring-1 ring-inset ring-warning/25'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'text-error ring-1 ring-inset ring-error/25'
      }
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'text-foreground bg-background ring-1 ring-inset ring-border'
      }
    },
    // Soft variants
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/10 text-primary'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/10 text-success'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/10 text-warning'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/10 text-error'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-muted text-foreground'
      }
    },
    // Subtle variants
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/25'
      }
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/10 text-success ring-1 ring-inset ring-success/25'
      }
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/10 text-warning ring-1 ring-inset ring-warning/25'
      }
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/10 text-error ring-1 ring-inset ring-error/25'
      }
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-muted text-foreground ring-1 ring-inset ring-border'
      }
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    orientation: 'vertical'
  }
})
