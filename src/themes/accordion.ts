import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    item: 'border-b border-border last:border-b-0',
    header: '',
    trigger:
      'flex w-full items-center justify-between text-left font-medium transition-all text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-180',
    icon: 'shrink-0 transition-transform duration-200 text-foreground',
    content:
      'overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    contentInner: ''
  },
  variants: {
    variant: {
      default: {
        root: 'space-y-0',
        item: 'border-border'
      },
      separated: {
        root: 'space-y-2',
        item: 'rounded-lg border border-border bg-card px-4'
      },
      ghost: {
        root: 'space-y-1',
        item: 'border-transparent'
      }
    },
    size: {
      sm: {
        trigger: 'py-3 sm:py-2.5 text-sm gap-2',
        icon: 'size-4 sm:size-3.5',
        content: 'text-xs sm:text-sm',
        contentInner: 'pb-3 sm:pb-2.5'
      },
      md: {
        trigger: 'py-4 sm:py-3 text-base sm:text-sm gap-2.5',
        icon: 'size-4',
        content: 'text-sm',
        contentInner: 'pb-4 sm:pb-3'
      },
      lg: {
        trigger: 'py-5 sm:py-4 text-lg sm:text-base gap-3',
        icon: 'size-5 sm:size-4',
        content: 'text-base sm:text-sm',
        contentInner: 'pb-5 sm:pb-4'
      },
    },
    color: {
      default: {},
      primary: {
        trigger: 'text-primary',
        icon: 'text-primary'
      },
      secondary: {
        trigger: 'text-secondary',
        icon: 'text-secondary'
      },
      success: {
        trigger: 'text-success',
        icon: 'text-success'
      },
      warning: {
        trigger: 'text-warning',
        icon: 'text-warning'
      },
      error: {
        trigger: 'text-error',
        icon: 'text-error'
      },
      info: {
        trigger: 'text-info',
        icon: 'text-info'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'separated',
      class: {
        trigger: 'hover:no-underline hover:bg-accent/50 rounded-lg'
      }
    },
    // Separated + color backgrounds
    {
      variant: 'separated',
      color: 'primary',
      class: {
        item: 'border-primary/20 bg-primary/5'
      }
    },
    {
      variant: 'separated',
      color: 'secondary',
      class: {
        item: 'border-secondary/20 bg-secondary/5'
      }
    },
    {
      variant: 'separated',
      color: 'success',
      class: {
        item: 'border-success/20 bg-success/5'
      }
    },
    {
      variant: 'separated',
      color: 'warning',
      class: {
        item: 'border-warning/20 bg-warning/5'
      }
    },
    {
      variant: 'separated',
      color: 'error',
      class: {
        item: 'border-error/20 bg-error/5'
      }
    },
    {
      variant: 'separated',
      color: 'info',
      class: {
        item: 'border-info/20 bg-info/5'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    color: 'default'
  }
})
