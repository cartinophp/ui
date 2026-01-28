import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'peer shrink-0 rounded-md border-2 border-border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary/60',
    indicator: 'flex size-full items-center justify-center text-current',
    icon: '',
    label:
      'text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
    description: 'text-sm text-muted-foreground',
    wrapper: 'flex items-center',
    content: 'grid gap-1'
  },
  variants: {
    size: {
      xs: {
        root: 'size-3.5 sm:size-3 rounded-sm',
        icon: 'size-2 sm:size-1.5',
        label: 'text-xs',
        description: 'text-xs',
        wrapper: 'space-x-2 sm:space-x-1.5',
        content: 'gap-0.5'
      },
      sm: {
        root: 'size-4 sm:size-3.5 rounded-sm',
        icon: 'size-2.5 sm:size-2',
        label: 'text-xs sm:text-xs',
        description: 'text-xs',
        wrapper: 'space-x-2 sm:space-x-2',
        content: 'gap-1'
      },
      md: {
        root: 'size-5 sm:size-4 rounded-md',
        icon: 'size-3.5 sm:size-3',
        label: 'text-sm',
        description: 'text-sm sm:text-xs',
        wrapper: 'space-x-3 sm:space-x-2.5',
        content: 'gap-1.5 sm:gap-1'
      },
      lg: {
        root: 'size-6 sm:size-5 rounded-md',
        icon: 'size-4 sm:size-3.5',
        label: 'text-base sm:text-sm',
        description: 'text-sm',
        wrapper: 'space-x-3 sm:space-x-3',
        content: 'gap-1.5'
      },
      xl: {
        root: 'size-7 sm:size-6 rounded-lg',
        icon: 'size-5 sm:size-4',
        label: 'text-lg sm:text-base',
        description: 'text-base sm:text-sm',
        wrapper: 'space-x-4 sm:space-x-3',
        content: 'gap-2'
      }
    },
    color: {
      primary: {
        root: 'border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground focus-visible:ring-primary'
      },
      secondary: {
        root: 'border-input data-[state=checked]:bg-secondary data-[state=checked]:border-secondary data-[state=checked]:text-secondary-foreground focus-visible:ring-secondary'
      },
      success: {
        root: 'border-input data-[state=checked]:bg-success data-[state=checked]:border-success data-[state=checked]:text-success-foreground focus-visible:ring-success'
      },
      warning: {
        root: 'border-input data-[state=checked]:bg-warning data-[state=checked]:border-warning data-[state=checked]:text-warning-foreground focus-visible:ring-warning'
      },
      error: {
        root: 'border-input data-[state=checked]:bg-error data-[state=checked]:border-error data-[state=checked]:text-error-foreground focus-visible:ring-error'
      },
      info: {
        root: 'border-input data-[state=checked]:bg-info data-[state=checked]:border-info data-[state=checked]:text-info-foreground focus-visible:ring-info'
      }
    },
    state: {
      checked: {
        root: 'border-primary bg-primary text-primary-foreground'
      },
      unchecked: {
        root: 'border-input border-border bg-transparent'
      },
      indeterminate: {
        root: 'border-primary bg-primary text-primary-foreground'
      }
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50 hover:border-input',
        label: 'cursor-not-allowed opacity-50'
      }
    },
    readonly: {
      true: {
        root: 'cursor-default hover:border-input',
        label: 'cursor-default'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    state: 'unchecked',
    disabled: false,
    readonly: false
  }
})
