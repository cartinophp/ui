import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative z-10 flex items-center justify-center',
    list: 'flex gap-1 p-1',
    item: 'relative',
    trigger: 'group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed',
    triggerIcon: 'size-4 shrink-0',
    triggerCaret: 'size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
    content: 'absolute top-full left-0 mt-2 w-auto min-w-[400px] rounded-xl border border-border bg-popover p-4 shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    grid: 'grid gap-2 grid-cols-1',
    gridItem: 'flex items-start gap-4 rounded-lg p-3 transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer',
    gridItemIcon: 'size-6 shrink-0 mt-0.5',
    gridItemContent: 'flex-1 space-y-1',
    gridItemLabel: 'text-sm font-medium leading-none',
    gridItemDescription: 'text-sm text-muted-foreground leading-snug',
    link: 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed',
    linkIcon: 'size-4 shrink-0'
  },
  variants: {
    orientation: {
      horizontal: {
        list: 'flex-row'
      },
      vertical: {
        list: 'flex-col items-start',
        content: 'left-full top-0 ml-2 mt-0'
      }
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
})
