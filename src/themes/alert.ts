import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative overflow-hidden w-full rounded-lg flex',
    wrapper: 'min-w-0 flex-1 flex flex-col',
    title: 'font-medium',
    description: '',
    icon: 'shrink-0',
    avatar: 'shrink-0',
    actions: 'flex flex-wrap shrink-0',
    closeButton: 'p-0 shrink-0'
  },
  variants: {
    size: {
      xs: {
        root: 'p-2 sm:p-2.5 gap-2',
        title: 'text-xs',
        description: 'text-xs mt-0.5',
        icon: 'size-4 sm:size-3.5',
        actions: 'gap-1.5 mt-2'
      },
      sm: {
        root: 'p-2.5 sm:p-3 gap-2.5',
        title: 'text-xs sm:text-sm',
        description: 'text-xs mt-0.5',
        icon: 'size-4',
        actions: 'gap-1.5 mt-2'
      },
      md: {
        root: 'p-3 sm:p-4 gap-3',
        title: 'text-sm',
        description: 'text-sm mt-1',
        icon: 'size-5 sm:size-4',
        actions: 'gap-2 mt-3'
      },
      lg: {
        root: 'p-4 sm:p-5 gap-3 sm:gap-4',
        title: 'text-base sm:text-sm',
        description: 'text-sm sm:text-base mt-1',
        icon: 'size-6 sm:size-5',
        actions: 'gap-2 mt-4'
      },
      xl: {
        root: 'p-5 sm:p-6 gap-4',
        title: 'text-lg sm:text-base',
        description: 'text-base mt-1.5',
        icon: 'size-7 sm:size-6',
        actions: 'gap-2.5 mt-5'
      }
    },
    variant: {
      soft: {},
      solid: {},
      outline: {},
      subtle: {}
    },
    color: {
      primary: '',
      info: '',
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
        actions: 'items-start'
      }
    }
  },
  compoundVariants: [
    // Soft variants - light background
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/10 text-primary',
        icon: 'text-primary',
        description: 'text-primary/80'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/10 text-info',
        icon: 'text-info',
        description: 'text-info/80'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/10 text-success',
        icon: 'text-success',
        description: 'text-success/80'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/10 text-warning',
        icon: 'text-warning',
        description: 'text-warning/80'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/10 text-error',
        icon: 'text-error',
        description: 'text-error/80'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        root: 'bg-muted text-foreground',
        icon: 'text-muted-foreground',
        description: 'text-muted-foreground'
      }
    },
    // Solid variants - colored background
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary text-primary-foreground',
        icon: 'text-primary-foreground',
        description: 'text-primary-foreground/80'
      }
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info text-info-foreground',
        icon: 'text-info-foreground',
        description: 'text-info-foreground/80'
      }
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success text-success-foreground',
        icon: 'text-success-foreground',
        description: 'text-success-foreground/80'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning text-warning-foreground',
        icon: 'text-warning-foreground',
        description: 'text-warning-foreground/80'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error text-error-foreground',
        icon: 'text-error-foreground',
        description: 'text-error-foreground/80'
      }
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        root: 'bg-foreground text-background',
        icon: 'text-background',
        description: 'text-background/80'
      }
    },
    // Outline variants
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'border border-primary bg-transparent text-primary',
        icon: 'text-primary',
        description: 'text-primary/80'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'border border-info bg-transparent text-info',
        icon: 'text-info',
        description: 'text-info/80'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'border border-success bg-transparent text-success',
        icon: 'text-success',
        description: 'text-success/80'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'border border-warning bg-transparent text-warning',
        icon: 'text-warning',
        description: 'text-warning/80'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'border border-error bg-transparent text-error',
        icon: 'text-error',
        description: 'text-error/80'
      }
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        root: 'border border-border bg-transparent text-foreground',
        icon: 'text-muted-foreground',
        description: 'text-muted-foreground'
      }
    },
    // Subtle variants - very light
    {
      variant: 'subtle',
      color: 'primary',
      class: {
        root: 'bg-primary/5 text-primary border-l-4 border-primary',
        icon: 'text-primary',
        description: 'text-primary/70'
      }
    },
    {
      variant: 'subtle',
      color: 'info',
      class: {
        root: 'bg-info/5 text-info border-l-4 border-info',
        icon: 'text-info',
        description: 'text-info/70'
      }
    },
    {
      variant: 'subtle',
      color: 'success',
      class: {
        root: 'bg-success/5 text-success border-l-4 border-success',
        icon: 'text-success',
        description: 'text-success/70'
      }
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: {
        root: 'bg-warning/5 text-warning border-l-4 border-warning',
        icon: 'text-warning',
        description: 'text-warning/70'
      }
    },
    {
      variant: 'subtle',
      color: 'error',
      class: {
        root: 'bg-error/5 text-error border-l-4 border-error',
        icon: 'text-error',
        description: 'text-error/70'
      }
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: {
        root: 'bg-muted/50 text-foreground border-l-4 border-border',
        icon: 'text-muted-foreground',
        description: 'text-muted-foreground'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'soft',
    color: 'info',
    orientation: 'vertical'
  }
})
