import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'shrink-0 rounded-full border-2 border-input dark:border-border bg-background dark:bg-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    indicator:
      'flex items-center justify-center w-full h-full relative after:content-[""] after:block after:absolute after:rounded-full after:shadow-sm after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 after:transition-all after:duration-150 data-[state=checked]:after:opacity-100',
    wrapper: 'inline-flex items-center',
    label: 'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
    description: 'text-muted-foreground'
  },
  variants: {
    size: {
      sm: {
        root: 'size-4 sm:size-3.5',
        indicator: 'after:size-2 sm:after:size-1.5',
        wrapper: 'gap-2 sm:gap-1.5',
        label: 'text-xs sm:text-sm',
        description: 'text-xs'
      },
      md: {
        root: 'size-5 sm:size-4',
        indicator: 'after:size-2.5 sm:after:size-2',
        wrapper: 'gap-2.5 sm:gap-2',
        label: 'text-sm',
        description: 'text-xs sm:text-sm'
      },
      lg: {
        root: 'size-6 sm:size-5',
        indicator: 'after:size-3 sm:after:size-2.5',
        wrapper: 'gap-3 sm:gap-2.5',
        label: 'text-base sm:text-sm',
        description: 'text-sm'
      },
    },
    color: {
      primary: {
        root: 'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
        indicator: 'data-[state=checked]:after:bg-primary-foreground'
      },
      secondary: {
        root: 'data-[state=checked]:border-secondary data-[state=checked]:bg-secondary',
        indicator: 'data-[state=checked]:after:bg-secondary-foreground'
      },
      success: {
        root: 'data-[state=checked]:border-success data-[state=checked]:bg-success',
        indicator: 'data-[state=checked]:after:bg-success-foreground'
      },
      warning: {
        root: 'data-[state=checked]:border-warning data-[state=checked]:bg-warning',
        indicator: 'data-[state=checked]:after:bg-warning-foreground'
      },
      error: {
        root: 'data-[state=checked]:border-error data-[state=checked]:bg-error',
        indicator: 'data-[state=checked]:after:bg-error-foreground'
      },
      info: {
        root: 'data-[state=checked]:border-info data-[state=checked]:bg-info',
        indicator: 'data-[state=checked]:after:bg-info-foreground'
      }
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed',
        label: 'opacity-50 cursor-not-allowed'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    disabled: false
  }
})

export type RadioThemeVariants = Parameters<typeof tv>[0]
