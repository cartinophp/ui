import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative',
    container: 'flex items-center gap-x-4',
    left: 'flex-1',
    center: 'flex items-center justify-center gap-x-3',
    right: 'flex-1 flex justify-end',
    icon: 'shrink-0',
    title: 'text-sm font-medium',
    actions: 'flex items-center gap-x-2',
    close: 'shrink-0'
  },
  variants: {
    color: {
      primary: {
        root: 'bg-primary text-primary-foreground',
        icon: 'text-primary-foreground/90',
        title: 'text-primary-foreground'
      },
      success: {
        root: 'bg-success text-success-foreground',
        icon: 'text-success-foreground/90',
        title: 'text-success-foreground'
      },
      warning: {
        root: 'bg-warning text-warning-foreground',
        icon: 'text-warning-foreground/90',
        title: 'text-warning-foreground'
      },
      error: {
        root: 'bg-error text-error-foreground',
        icon: 'text-error-foreground/90',
        title: 'text-error-foreground'
      },
      neutral: {
        root: 'bg-muted text-foreground',
        icon: 'text-muted-foreground',
        title: 'text-foreground'
      }
    },
    to: {
      true: {
        root: 'cursor-pointer hover:opacity-90 transition-opacity'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    to: false
  }
})
