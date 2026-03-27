import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative flex',
    list: 'flex flex-col gap-0.5 sm:gap-1 p-1',
    item: 'relative w-full',
    trigger:
      'group inline-flex w-full items-center gap-2 rounded-lg text-sm font-medium transition-colors ' +
      'hover:bg-accent hover:text-accent-foreground ' +
      'focus:outline-none focus:ring-2 focus:ring-primary ' +
      'disabled:pointer-events-none disabled:opacity-50',
    triggerIcon: 'shrink-0',
    triggerCaret:
      'ml-auto shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
    content:
      'absolute z-50 rounded-xl border border-border bg-popover shadow-xl ' +
      'animate-in fade-in-0 zoom-in-95 ' +
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    grid: 'grid gap-1 sm:gap-2 grid-cols-1',
    gridItem:
      'flex items-start gap-2 sm:gap-3 rounded-lg transition-colors ' +
      'hover:bg-accent hover:text-accent-foreground ' +
      'focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer',
    gridItemIcon: 'shrink-0 mt-0.5',
    gridItemContent: 'flex-1 space-y-0.5 sm:space-y-1 min-w-0',
    gridItemLabel: 'font-medium leading-none truncate',
    gridItemDescription: 'text-muted-foreground leading-snug line-clamp-2',
    link:
      'inline-flex w-full items-center gap-2 rounded-lg text-sm font-medium transition-colors ' +
      'hover:bg-accent hover:text-accent-foreground ' +
      'focus:outline-none focus:ring-2 focus:ring-primary ' +
      'disabled:pointer-events-none disabled:opacity-50',
    linkIcon: 'shrink-0'
  },
  variants: {
    size: {
      sm: {
        trigger: 'px-2.5 py-1.5 text-xs sm:text-sm gap-1.5',
        triggerIcon: 'size-4 sm:size-3.5',
        triggerCaret: 'size-3.5 sm:size-3',
        content: 'min-w-[180px] p-1.5',
        gridItem: 'p-2.5 gap-2',
        gridItemIcon: 'size-4',
        gridItemLabel: 'text-xs sm:text-sm',
        gridItemDescription: 'text-[10px] sm:text-xs',
        link: 'px-2.5 py-1.5 text-xs sm:text-sm gap-1.5',
        linkIcon: 'size-4 sm:size-3.5'
      },
      md: {
        trigger: 'px-3 py-2 text-sm gap-2',
        triggerIcon: 'size-4',
        triggerCaret: 'size-4',
        content: 'min-w-[200px] p-2',
        gridItem: 'p-3 gap-3',
        gridItemIcon: 'size-5',
        gridItemLabel: 'text-sm',
        gridItemDescription: 'text-xs',
        link: 'px-3 py-2 text-sm gap-2',
        linkIcon: 'size-4'
      },
      lg: {
        trigger: 'px-4 py-2.5 text-base sm:text-sm gap-2.5',
        triggerIcon: 'size-5 sm:size-4',
        triggerCaret: 'size-5 sm:size-4',
        content: 'min-w-[240px] p-2.5',
        gridItem: 'p-3.5 gap-3',
        gridItemIcon: 'size-6 sm:size-5',
        gridItemLabel: 'text-base sm:text-sm',
        gridItemDescription: 'text-sm sm:text-xs',
        link: 'px-4 py-2.5 text-base sm:text-sm gap-2.5',
        linkIcon: 'size-5 sm:size-4'
      },
    },
    orientation: {
      horizontal: {
        root: 'items-center',
        list: 'flex-col items-stretch lg:flex-row lg:items-center',
        content: 'top-full left-0 mt-2'
      },
      vertical: {
        root: 'flex-col',
        list: 'flex-col items-stretch',
        content: 'relative static mt-1 ml-4 border-none shadow-none bg-transparent p-0'
      }
    },
    collapsed: {
      true: {
        trigger: 'justify-center px-2',
        link: 'justify-center px-2',
        triggerCaret: 'hidden',
        gridItemContent: 'hidden',
        gridItemDescription: 'hidden'
      }
    }
  },
  compoundVariants: [
    {
      collapsed: true,
      size: 'sm',
      class: { trigger: 'p-1.5', link: 'p-1.5' }
    },
    {
      collapsed: true,
      size: 'md',
      class: { trigger: 'p-2', link: 'p-2' }
    },
    {
      collapsed: true,
      size: 'lg',
      class: { trigger: 'p-2.5', link: 'p-2.5' }
    },
  ],
  defaultVariants: {
    size: 'md',
    orientation: 'vertical',
    collapsed: false
  }
})
