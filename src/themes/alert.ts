import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    icon: 'size-4',
    title: 'mb-1 font-medium leading-none tracking-tight',
    description: 'text-sm [&_p]:leading-relaxed',
    closeButton: 'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none'
  },
  variants: {
    variant: {
      default: {
        root: 'bg-background text-foreground'
      },
      destructive: {
        root: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      },
      warning: {
        root: 'border-warning/50 text-warning dark:border-warning [&>svg]:text-warning'
      },
      success: {
        root: 'border-success/50 text-success dark:border-success [&>svg]:text-success'
      },
      info: {
        root: 'border-info/50 text-info dark:border-info [&>svg]:text-info'
      }
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})