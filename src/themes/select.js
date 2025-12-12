import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative',
    trigger: 'flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    icon: 'h-4 w-4 shrink-0 opacity-50',
    content: 'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80',
    item: 'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    itemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center'
  },
  variants: {
    size: {
      sm: {
        trigger: 'h-8 px-2 text-xs',
        item: 'py-1 text-xs'
      },
      md: {
        trigger: 'h-10 px-3 text-sm',
        item: 'py-1.5 text-sm'
      },
      lg: {
        trigger: 'h-12 px-4 text-base',
        item: 'py-2 text-base'
      }
    },
    error: {
      true: {
        trigger: 'border-destructive focus:ring-destructive'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    error: false
  }
})