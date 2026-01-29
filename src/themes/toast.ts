import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative group overflow-hidden bg-card shadow-lg rounded-lg border border-border flex gap-3 focus:outline-none',
    wrapper: 'w-0 flex-1 flex flex-col gap-1',
    title: 'font-medium text-foreground',
    description: 'text-muted-foreground',
    icon: 'shrink-0',
    avatar: 'shrink-0',
    actions: 'flex gap-2 shrink-0',
    close: 'p-0'
  },
  variants: {
    size: {
      xs: {
        root: 'p-2 sm:p-1.5 gap-2 rounded-md',
        title: 'text-xs',
        description: 'text-[10px] sm:text-xs',
        icon: 'size-4 sm:size-3.5',
        actions: 'gap-1'
      },
      sm: {
        root: 'p-3 sm:p-2.5 gap-2 rounded-md',
        title: 'text-xs sm:text-sm',
        description: 'text-xs',
        icon: 'size-4',
        actions: 'gap-1.5'
      },
      md: {
        root: 'p-4 sm:p-3 gap-3 sm:gap-2.5 rounded-lg',
        title: 'text-sm',
        description: 'text-xs sm:text-sm',
        icon: 'size-5 sm:size-4',
        actions: 'gap-2'
      },
      lg: {
        root: 'p-5 sm:p-4 gap-3 rounded-lg',
        title: 'text-base sm:text-sm',
        description: 'text-sm',
        icon: 'size-6 sm:size-5',
        actions: 'gap-2'
      },
      xl: {
        root: 'p-6 sm:p-5 gap-4 sm:gap-3 rounded-xl',
        title: 'text-lg sm:text-base',
        description: 'text-base sm:text-sm',
        icon: 'size-7 sm:size-6',
        actions: 'gap-2.5'
      }
    },
    color: {
      primary: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
        icon: 'text-primary'
      },
      secondary: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary',
        icon: 'text-secondary'
      },
      success: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success',
        icon: 'text-success'
      },
      warning: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning',
        icon: 'text-warning'
      },
      error: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
        icon: 'text-error'
      },
      info: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info',
        icon: 'text-info'
      },
      neutral: {
        root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-border',
        icon: 'text-foreground'
      }
    },
    variant: {
      solid: {},
      soft: {},
      outline: {
        root: 'bg-background'
      },
      subtle: {
        root: 'bg-background/80 backdrop-blur-sm'
      }
    },
    orientation: {
      horizontal: {
        root: 'items-center',
        actions: 'items-center'
      },
      vertical: {
        root: 'items-start',
        actions: 'items-start mt-2'
      }
    },
    hasTitle: {
      true: {
        description: 'mt-0.5'
      }
    }
  },
  compoundVariants: [
    // Solid + colors
    {
      variant: 'solid',
      color: 'primary',
      class: {
        root: 'bg-primary border-primary text-primary-foreground',
        title: 'text-primary-foreground',
        description: 'text-primary-foreground/80',
        icon: 'text-primary-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        root: 'bg-secondary border-secondary text-secondary-foreground',
        title: 'text-secondary-foreground',
        description: 'text-secondary-foreground/80',
        icon: 'text-secondary-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        root: 'bg-success border-success text-success-foreground',
        title: 'text-success-foreground',
        description: 'text-success-foreground/80',
        icon: 'text-success-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        root: 'bg-warning border-warning text-warning-foreground',
        title: 'text-warning-foreground',
        description: 'text-warning-foreground/80',
        icon: 'text-warning-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        root: 'bg-error border-error text-error-foreground',
        title: 'text-error-foreground',
        description: 'text-error-foreground/80',
        icon: 'text-error-foreground'
      }
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        root: 'bg-info border-info text-info-foreground',
        title: 'text-info-foreground',
        description: 'text-info-foreground/80',
        icon: 'text-info-foreground'
      }
    },
    // Soft + colors
    {
      variant: 'soft',
      color: 'primary',
      class: {
        root: 'bg-primary/10 border-primary/20'
      }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        root: 'bg-secondary/10 border-secondary/20'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        root: 'bg-success/10 border-success/20'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        root: 'bg-warning/10 border-warning/20'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        root: 'bg-error/10 border-error/20'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        root: 'bg-info/10 border-info/20'
      }
    },
    // Outline + colors
    {
      variant: 'outline',
      color: 'primary',
      class: {
        root: 'border-primary'
      }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        root: 'border-secondary'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        root: 'border-success'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        root: 'border-warning'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        root: 'border-error'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        root: 'border-info'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'soft',
    orientation: 'vertical',
    hasTitle: false
  }
})
