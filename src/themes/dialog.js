import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative overflow-hidden rounded-lg border bg-background p-2',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-lg font-semibold',
    description: 'text-sm text-muted-foreground',
    content: 'p-6 pt-0'
  },
  variants: {
    variant: {
      default: {
        root: 'bg-background border-border'
      },
      destructive: {
        root: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      },
      warning: {
        root: 'border-warning/50 text-warning dark:border-warning [&>svg]:text-warning'
      },
      success: {
        root: 'border-success/50 text-success dark:border-success [&>svg]:text-success'
      }
    },
    size: {
      sm: {
        root: 'p-1',
        header: 'p-3 space-y-1',
        title: 'text-sm font-medium',
        description: 'text-xs',
        content: 'p-3 pt-0'
      },
      md: {
        root: 'p-2',
        header: 'p-6 space-y-1.5',
        title: 'text-lg font-semibold',
        description: 'text-sm',
        content: 'p-6 pt-0'
      },
      lg: {
        root: 'p-3',
        header: 'p-8 space-y-2',
        title: 'text-xl font-semibold',
        description: 'text-base',
        content: 'p-8 pt-0'
      }
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})