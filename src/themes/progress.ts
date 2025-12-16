import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    label: 'text-sm font-medium text-secondary-950 dark:text-secondary-50',
    value: 'text-sm text-secondary-600 dark:text-secondary-400',
    labelContainer: 'flex justify-between items-center mb-2',
    track:
      'w-full bg-secondary-200 dark:bg-secondary-800 rounded-full overflow-hidden',
    fill: 'h-full rounded-full relative transition-all duration-300 ease-out',
    stripes:
      'absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse',
    stepsContainer: 'flex justify-between mt-2 px-1',
    step: 'rounded-full transition-colors'
  },
  variants: {
    size: {
      sm: {
        track: 'h-1',
        step: 'w-1 h-1'
      },
      md: {
        track: 'h-2',
        step: 'w-1.5 h-1.5'
      },
      lg: {
        track: 'h-3',
        step: 'w-2 h-2'
      }
    },
    color: {
      primary: {
        fill: 'bg-primary'
      },
      success: {
        fill: 'bg-success'
      },
      warning: {
        fill: 'bg-warning'
      },
      error: {
        fill: 'bg-error'
      },
      info: {
        fill: 'bg-info'
      }
    },
    variant: {
      default: {},
      striped: {
        fill: 'bg-gradient-to-r from-current via-current/80 to-current'
      }
    },
    indeterminate: {
      true: {
        fill: 'animate-pulse'
      }
    },
    animated: {
      true: {
        fill: 'transition-all duration-300 ease-out'
      }
    }
  },
  compoundVariants: [
    // Step colors based on progress color
    {
      color: 'primary',
      class: {
        step: 'data-[active=true]:bg-primary data-[active=false]:bg-secondary-300 dark:data-[active=false]:bg-secondary-700'
      }
    },
    {
      color: 'success',
      class: {
        step: 'data-[active=true]:bg-success data-[active=false]:bg-secondary-300 dark:data-[active=false]:bg-secondary-700'
      }
    },
    {
      color: 'warning',
      class: {
        step: 'data-[active=true]:bg-warning data-[active=false]:bg-secondary-300 dark:data-[active=false]:bg-secondary-700'
      }
    },
    {
      color: 'error',
      class: {
        step: 'data-[active=true]:bg-error data-[active=false]:bg-secondary-300 dark:data-[active=false]:bg-secondary-700'
      }
    },
    {
      color: 'info',
      class: {
        step: 'data-[active=true]:bg-info data-[active=false]:bg-secondary-300 dark:data-[active=false]:bg-secondary-700'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'default',
    indeterminate: false,
    animated: false
  }
})
