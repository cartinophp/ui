import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    wrapper: 'relative w-full',
    root: 'w-full appearance-none rounded-md border border-border bg-background px-3 py-2 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    option: 'py-1.5 px-2',
    iconWrapper:
      'absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none',
    icon: 'size-4 text-muted-foreground'
  },
  variants: {
    size: {
      xs: {
        root: 'h-7 px-2 pr-6 text-xs',
        iconWrapper: 'pr-1',
        icon: 'size-3'
      },
      sm: {
        root: 'h-8 px-2 pr-7 text-xs',
        iconWrapper: 'pr-1.5',
        icon: 'size-3.5'
      },
      md: {
        root: 'h-10 px-3 pr-8 text-sm',
        iconWrapper: 'pr-2',
        icon: 'size-4'
      },
      lg: {
        root: 'h-12 px-4 pr-10 text-base',
        iconWrapper: 'pr-2.5',
        icon: 'size-5'
      },
      xl: {
        root: 'h-14 px-5 pr-12 text-lg',
        iconWrapper: 'pr-3',
        icon: 'size-6'
      }
    },
    variant: {
      default: {
        root: 'border-border'
      },
      filled: {
        root: 'border-0 bg-muted'
      },
      ghost: {
        root: 'border-0 bg-transparent'
      },
      outline: {
        root: 'border border-border'
      },
      none: {
        root: 'border-0 bg-transparent p-0'
      }
    },
    color: {
      primary: {
        root: 'focus:ring-primary focus:border-primary'
      },
      error: {
        root: 'border-error focus:ring-error'
      },
      success: {
        root: 'border-success focus:ring-success'
      },
      warning: {
        root: 'border-warning focus:ring-warning'
      },
      info: {
        root: 'border-info focus:ring-info'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary'
  }
})
