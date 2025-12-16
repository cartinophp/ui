import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    icon: 'size-4',
    title: 'mb-1 font-medium leading-none tracking-tight',
    description: 'text-sm [&_p]:leading-relaxed opacity-90',
    closeButton:
      'absolute right-2 top-2 rounded-md p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none'
  },
  variants: {
    variant: {
      default: {
        root: 'bg-card text-foreground border-border',
        icon: 'text-foreground',
        closeButton: 'text-foreground/50'
      },
      destructive: {
        root: 'bg-error text-error-foreground border-error',
        icon: 'text-error-foreground',
        closeButton: 'text-error-foreground/70 hover:text-error-foreground'
      },
      warning: {
        root: 'bg-warning text-warning-foreground border-warning',
        icon: 'text-warning-foreground',
        closeButton: 'text-warning-foreground/70 hover:text-warning-foreground'
      },
      success: {
        root: 'bg-success text-success-foreground border-success',
        icon: 'text-success-foreground',
        closeButton: 'text-success-foreground/70 hover:text-success-foreground'
      },
      info: {
        root: 'bg-info text-info-foreground border-info',
        icon: 'text-info-foreground',
        closeButton: 'text-info-foreground/70 hover:text-info-foreground'
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})
