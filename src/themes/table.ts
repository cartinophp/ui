import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full overflow-x-auto bg-card dark:bg-card rounded-lg sm:rounded-xl -webkit-overflow-scrolling-touch',
    base: 'w-full caption-bottom border-spacing-0 min-w-[480px] sm:min-w-0',
    caption: 'mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground px-3 sm:px-4',
    thead:
      'bg-background dark:bg-background border-b border-border/50 dark:border-border/20',
    tbody: 'bg-card dark:bg-card divide-y divide-border/30 dark:divide-border/20',
    tfoot:
      'border-t border-border/50 dark:border-border/20 bg-muted/30 dark:bg-muted/20 font-medium',
    tr: 'transition-colors',
    th: 'text-left align-middle font-medium text-foreground dark:text-foreground whitespace-nowrap',
    td: 'align-middle text-foreground dark:text-foreground',
    separator: 'border-b border-border/50 dark:border-border/20',
    empty: 'text-center text-muted-foreground dark:text-muted-foreground',
    loading:
      'text-center text-muted-foreground dark:text-muted-foreground'
  },
  variants: {
    size: {
      xs: {
        base: 'text-xs',
        th: 'px-2 sm:px-3 py-1.5 sm:py-2 text-xs first:pl-2 sm:first:pl-3 last:pr-2 sm:last:pr-3',
        td: 'px-2 sm:px-3 py-1 sm:py-1.5 text-xs first:pl-2 sm:first:pl-3 last:pr-2 sm:last:pr-3',
        empty: 'py-6 sm:py-8',
        loading: 'py-6 sm:py-8'
      },
      sm: {
        base: 'text-xs sm:text-sm',
        th: 'px-3 sm:px-4 py-2 sm:py-2.5 text-xs first:pl-3 sm:first:pl-4 last:pr-3 sm:last:pr-4',
        td: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm first:pl-3 sm:first:pl-4 last:pr-3 sm:last:pr-4',
        empty: 'py-8 sm:py-10',
        loading: 'py-8 sm:py-10'
      },
      md: {
        base: 'text-sm',
        th: 'px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 text-xs sm:text-sm first:pl-4 sm:first:pl-5 lg:first:pl-6 last:pr-4 sm:last:pr-5 lg:last:pr-6',
        td: 'px-4 sm:px-5 lg:px-6 py-2 text-sm first:pl-4 sm:first:pl-5 lg:first:pl-6 last:pr-4 sm:last:pr-5 lg:last:pr-6',
        empty: 'py-10 sm:py-12',
        loading: 'py-10 sm:py-12'
      },
      lg: {
        base: 'text-sm sm:text-base',
        th: 'px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm first:pl-5 sm:first:pl-6 lg:first:pl-8 last:pr-5 sm:last:pr-6 lg:last:pr-8',
        td: 'px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base first:pl-5 sm:first:pl-6 lg:first:pl-8 last:pr-5 sm:last:pr-6 lg:last:pr-8',
        empty: 'py-12 sm:py-16',
        loading: 'py-12 sm:py-16'
      },
      xl: {
        base: 'text-base',
        th: 'px-6 sm:px-8 lg:px-10 py-4 sm:py-5 text-base first:pl-6 sm:first:pl-8 lg:first:pl-10 last:pr-6 sm:last:pr-8 lg:last:pr-10',
        td: 'px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base first:pl-6 sm:first:pl-8 lg:first:pl-10 last:pr-6 sm:last:pr-8 lg:last:pr-10',
        empty: 'py-16 sm:py-20',
        loading: 'py-16 sm:py-20'
      }
    },
    striped: {
      true: {
        tbody:
          '[&>tr:nth-child(even)]:bg-muted/20 dark:[&>tr:nth-child(even)]:bg-muted/10'
      }
    },
    hoverable: {
      true: {
        tr: 'cursor-pointer hover:bg-accent/50 dark:hover:bg-accent/30 transition-colors duration-200'
      }
    },
    bordered: {
      true: {
        root: 'border border-border/50 dark:border-border/20',
        th: 'border-r border-border/50 dark:border-border/20 last:border-r-0',
        td: 'border-r border-border/50 dark:border-border/20 last:border-r-0'
      }
    },
    compact: {
      true: {
        th: 'px-2 sm:px-3 py-1.5 text-xs',
        td: 'px-2 sm:px-3 py-1 text-xs sm:text-sm'
      }
    },
    sticky: {
      true: {
        thead: 'sticky top-0 bg-background dark:bg-background z-10 shadow-sm',
        tfoot: 'sticky bottom-0 bg-muted/30 dark:bg-muted/20 z-10 shadow-sm'
      }
    },
    stickyFirstColumn: {
      true: {
        th: 'first:sticky first:left-0 first:z-20 first:bg-background first:shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)]',
        td: 'first:sticky first:left-0 first:z-10 first:bg-card first:shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)]'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    sticky: false,
    stickyFirstColumn: false
  }
})
