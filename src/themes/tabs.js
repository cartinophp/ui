import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex h-9 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
    list: 'flex items-center gap-1',
    trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
  },
  variants: {
    variant: {
      default: {
        root: 'bg-muted text-muted-foreground',
        trigger: 'data-[state=active]:bg-background data-[state=active]:text-foreground'
      },
      outline: {
        root: 'bg-transparent border border-border',
        trigger: 'data-[state=active]:bg-accent data-[state=active]:text-accent-foreground'
      },
      pills: {
        root: 'bg-transparent gap-2 p-0',
        trigger: 'rounded-full border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary'
      }
    },
    size: {
      sm: {
        root: 'h-8 p-1',
        trigger: 'px-2.5 py-1 text-xs',
        content: 'mt-1'
      },
      md: {
        root: 'h-9 p-1',
        trigger: 'px-3 py-1.5 text-sm',
        content: 'mt-2'
      },
      lg: {
        root: 'h-10 p-1',
        trigger: 'px-4 py-2 text-base',
        content: 'mt-3'
      }
    },
    orientation: {
      horizontal: {
        root: 'flex-row',
        list: 'flex-row'
      },
      vertical: {
        root: 'flex-col h-auto w-fit',
        list: 'flex-col',
        trigger: 'w-full justify-start'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'pills',
      size: 'sm',
      class: {
        trigger: 'px-3 py-1'
      }
    },
    {
      variant: 'pills',
      size: 'lg',
      class: {
        trigger: 'px-5 py-2'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    orientation: 'horizontal'
  }
})