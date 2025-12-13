import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full space-y-4',
    // Toolbar
    toolbar: 'flex items-center justify-between gap-4 p-4 border-b border-gray-200',
    search: 'flex-1 max-w-sm',
    filters: 'flex items-center gap-2',
    actions: 'flex items-center gap-2',
    // Table
    wrapper: 'relative w-full overflow-auto border border-gray-200 rounded-lg',
    table: 'w-full caption-bottom text-sm',
    caption: 'mt-4 text-sm text-gray-600',
    thead: 'bg-gray-50 border-b border-gray-200',
    tbody: 'divide-y divide-gray-200 bg-white',
    tfoot: 'border-t border-gray-200 bg-gray-50 font-medium',
    tr: 'transition-colors hover:bg-gray-50',
    th: 'h-12 px-4 text-left align-middle font-semibold text-gray-900 [&:has([role=checkbox])]:pr-0',
    thContent: 'flex items-center gap-2',
    sortButton: 'inline-flex items-center justify-center gap-1 hover:text-gray-900',
    sortIcon: 'size-4',
    td: 'px-4 py-3 align-middle text-gray-700 [&:has([role=checkbox])]:pr-0',
    // Pagination
    footer: 'flex items-center justify-between gap-4 p-4 border-t border-gray-200',
    footerText: 'text-sm text-gray-600',
    footerActions: 'flex items-center gap-2',
    // Empty state
    empty: 'text-center py-12 text-gray-500',
    emptyIcon: 'mx-auto size-12 text-gray-400 mb-4',
    emptyTitle: 'text-lg font-medium text-gray-900 mb-2',
    emptyDescription: 'text-sm text-gray-600',
    // Loading state
    loading: 'absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm',
    loadingSpinner: 'size-8 animate-spin text-primary-600'
  },
  variants: {
    striped: {
      true: {
        tbody: '[&>tr:nth-child(even)]:bg-gray-50/50'
      }
    },
    bordered: {
      true: {
        th: 'border-r border-gray-200 last:border-r-0',
        td: 'border-r border-gray-200 last:border-r-0'
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
        tr: 'cursor-pointer hover:bg-gray-100'
      }
    },
    sticky: {
      true: {
        thead: 'sticky top-0 z-10 bg-gray-50',
        tfoot: 'sticky bottom-0 z-10 bg-gray-50'
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
