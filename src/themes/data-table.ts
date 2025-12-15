import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full space-y-4',
    // Toolbar
    toolbar:
      'flex items-center justify-between gap-4 p-4 border-b border-border',
    search: 'flex-1 max-w-sm',
    filters: 'flex items-center gap-2',
    actions: 'flex items-center gap-2',
    // Table
    wrapper: 'relative w-full overflow-auto border border-border rounded-lg',
    table: 'w-full caption-bottom text-sm',
    caption: 'mt-4 text-sm text-muted-foreground',
    thead: 'bg-muted border-b border-border',
    tbody: 'divide-y divide-border bg-background',
    tfoot: 'border-t border-border bg-muted font-medium',
    tr: 'transition-colors hover:bg-muted/50',
    th: 'h-12 px-4 text-left align-middle font-semibold text-foreground [&:has([role=checkbox])]:pr-0',
    thContent: 'flex items-center gap-2',
    sortButton:
      'inline-flex items-center justify-center gap-1 hover:text-foreground',
    sortIcon: 'size-4',
    td: 'px-4 py-3 align-middle text-foreground [&:has([role=checkbox])]:pr-0',
    // Pagination
    footer:
      'flex items-center justify-between gap-4 p-4 border-t border-border',
    footerText: 'text-sm text-muted-foreground',
    footerActions: 'flex items-center gap-2',
    // Empty state
    empty: 'text-center py-12 text-muted-foreground',
    emptyIcon: 'mx-auto size-12 text-muted-foreground mb-4',
    emptyTitle: 'text-lg font-medium text-foreground mb-2',
    emptyDescription: 'text-sm text-muted-foreground',
    // Loading state
    loading:
      'absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm',
    loadingSpinner: 'size-8 animate-spin text-primary'
  },
  variants: {
    striped: {
      true: {
        tbody: '[&>tr:nth-child(even)]:bg-muted/30'
      }
    },
    bordered: {
      true: {
        th: 'border-r border-border last:border-r-0',
        td: 'border-r border-border last:border-r-0'
      }
    },
    compact: {
      true: {
        th: 'h-10 px-3 text-xs',
        td: 'px-3 py-2 text-sm'
      }
    },
    hoverable: {
      true: {
        tr: 'cursor-pointer hover:bg-accent'
      }
    },
    sticky: {
      true: {
        thead: 'sticky top-0 z-10 bg-muted',
        tfoot: 'sticky bottom-0 z-10 bg-muted'
      }
    },
    loading: {
      true: {
        root: 'relative min-h-[400px]'
      }
    }
  },
  defaultVariants: {
    striped: false,
    bordered: false,
    compact: false,
    hoverable: true,
    sticky: false,
    loading: false
  }
})
