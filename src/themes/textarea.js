import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full',
    textarea: 'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
    label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    description: 'text-sm text-muted-foreground',
    error: 'text-sm font-medium text-destructive'
  },
  variants: {
    size: {
      sm: {
        textarea: 'min-h-[60px] px-2 py-1 text-xs',
        label: 'text-xs'
      },
      md: {
        textarea: 'min-h-[80px] px-3 py-2 text-sm',
        label: 'text-sm'
      },
      lg: {
        textarea: 'min-h-[100px] px-4 py-3 text-base',
        label: 'text-base'
      }
    },
    error: {
      true: {
        textarea: 'border-destructive focus-visible:ring-destructive'
      }
    },
    resize: {
      none: {
        textarea: 'resize-none'
      },
      vertical: {
        textarea: 'resize-y'
      },
      horizontal: {
        textarea: 'resize-x'
      },
      both: {
        textarea: 'resize'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    error: false,
    resize: 'vertical'
  }
})