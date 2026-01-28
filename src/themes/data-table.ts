import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full space-y-3 sm:space-y-4',
    // Toolbar
    toolbar:
      'flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-b border-border/50 dark:border-border/20',
    search: 'flex-1 w-full sm:max-w-sm',
    filters: 'flex flex-wrap items-center gap-2',
    actions: 'flex items-center gap-2',
    // Table - Polaris inspired with responsive padding
    wrapper:
      'relative w-full overflow-x-auto bg-card dark:bg-card rounded-lg sm:rounded-xl overflow-hidden -webkit-overflow-scrolling-touch',
    table: 'w-full caption-bottom text-sm border-spacing-0 min-w-[600px] sm:min-w-0',
    caption: 'mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground px-3 sm:px-4',
    thead:
      'bg-background dark:bg-background border-b border-border/50 dark:border-border/20',
    tbody: 'bg-card dark:bg-card divide-y divide-border/30 dark:divide-border/20',
    tfoot:
      'border-t border-border/50 dark:border-border/20 bg-muted/30 dark:bg-muted/20 font-medium',
    tr: 'transition-colors',
    th: 'px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-left align-middle font-medium text-xs sm:text-sm text-foreground dark:text-foreground whitespace-nowrap first:pl-3 sm:first:pl-4 lg:first:pl-6 last:pr-3 sm:last:pr-4 lg:last:pr-6 [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-10 sm:[&:has([role=checkbox])]:w-12',
    thContent: 'flex items-center gap-1.5 sm:gap-2',
    sortButton:
      'inline-flex items-center justify-center gap-1 text-foreground dark:text-foreground hover:text-foreground dark:hover:text-foreground transition-colors',
    sortIcon: 'size-3.5 sm:size-4 text-muted-foreground dark:text-muted-foreground',
    td: 'px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 align-middle text-sm text-foreground dark:text-foreground first:pl-3 sm:first:pl-4 lg:first:pl-6 last:pr-3 sm:last:pr-4 lg:last:pr-6 [&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-10 sm:[&:has([role=checkbox])]:w-12',
    // Pagination
    footer:
      'flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border-t border-border/50 dark:border-border/20',
    footerText: 'text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground text-center sm:text-left',
    footerActions: 'flex items-center gap-2',
    // Empty state
    empty: 'text-center py-8 sm:py-12 px-4 text-muted-foreground dark:text-muted-foreground',
    emptyIcon:
      'mx-auto size-10 sm:size-12 text-muted-foreground dark:text-muted-foreground mb-3 sm:mb-4',
    emptyTitle: 'text-base sm:text-lg font-medium text-foreground dark:text-foreground mb-1.5 sm:mb-2',
    emptyDescription:
      'text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground max-w-md mx-auto',
    // Loading state
    loading:
      'absolute inset-0 flex items-center justify-center bg-card/80 dark:bg-card/80 backdrop-blur-sm',
    loadingSpinner: 'size-6 sm:size-8 animate-spin text-primary dark:text-primary'
  },
  variants: {
    size: {
      sm: {
        th: 'px-2 sm:px-3 py-1.5 sm:py-2 text-xs',
        td: 'px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm',
        toolbar: 'p-2 sm:p-3 gap-2 sm:gap-3',
        footer: 'p-2 sm:p-3 gap-2 sm:gap-3'
      },
      md: {
        th: 'px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm',
        td: 'px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-sm',
        toolbar: 'p-3 sm:p-4 gap-3 sm:gap-4',
        footer: 'p-3 sm:p-4 gap-3 sm:gap-4'
      },
      lg: {
        th: 'px-4 sm:px-5 lg:px-8 py-3 sm:py-4 text-sm',
        td: 'px-4 sm:px-5 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-base',
        toolbar: 'p-4 sm:p-5 gap-4 sm:gap-5',
        footer: 'p-4 sm:p-5 gap-4 sm:gap-5'
      }
    },
    striped: {
      true: {
        tbody:
          '[&>tr:nth-child(even)]:bg-muted/20 dark:[&>tr:nth-child(even)]:bg-muted/10'
      }
    },
    bordered: {
      true: {
        wrapper: 'border border-border/50 dark:border-border/20',
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
    hoverable: {
      true: {
        tr: 'cursor-pointer hover:bg-accent/50 dark:hover:bg-accent/30 transition-colors duration-200'
      }
    },
    sticky: {
      true: {
        thead: 'sticky top-0 z-10 bg-background dark:bg-background shadow-sm',
        tfoot: 'sticky bottom-0 z-10 bg-muted/30 dark:bg-muted/20 shadow-sm'
      }
    },
    stickyFirstColumn: {
      true: {
        th: 'first:sticky first:left-0 first:z-20 first:bg-background first:shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)]',
        td: 'first:sticky first:left-0 first:z-10 first:bg-card first:shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)]'
      }
    },
    loading: {
      true: {
        root: 'relative min-h-[300px] sm:min-h-[400px]'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    striped: false,
    bordered: false,
    compact: false,
    hoverable: true,
    sticky: false,
    stickyFirstColumn: false,
    loading: false
  }
})
