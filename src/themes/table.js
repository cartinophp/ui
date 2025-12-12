import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full overflow-auto',
    base: 'w-full caption-bottom text-sm',
    caption: 'mt-4 text-sm text-gray-600',
    thead: 'border-b border-gray-200',
    tbody: 'divide-y divide-gray-200',
    tfoot: 'border-t border-gray-200 bg-gray-50 font-medium',
    tr: 'transition-colors hover:bg-gray-50',
    th: 'h-12 px-4 text-left align-middle font-semibold text-gray-900',
    td: 'px-4 py-4 align-middle text-gray-700',
    separator: 'border-b border-gray-200',
    empty: 'text-center py-12 text-gray-500',
    loading: 'text-center py-12'
  },
  variants: {
    striped: {
      true: {
        tbody: '[&>tr:nth-child(even)]:bg-gray-50'
      }
    },
    hoverable: {
      true: {
        tr: 'cursor-pointer hover:bg-gray-100'
      }
    },
    bordered: {
      true: {
        base: 'border border-gray-200 rounded-lg',
        th: 'border-r border-gray-200 last:border-r-0',
        td: 'border-r border-gray-200 last:border-r-0'
      }
    },
    compact: {
      true: {
        th: 'h-10 px-3',
        td: 'px-3 py-2'
      }
    },
    sticky: {
      true: {
        thead: 'sticky top-0 bg-white z-10',
        tfoot: 'sticky bottom-0 bg-white z-10'
      }
    }
  },
  defaultVariants: {
    striped: false,
    hoverable: true,
    bordered: false,
    compact: false,
    sticky: false
  }
})
