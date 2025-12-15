import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative w-full overflow-auto',
    base: 'w-full caption-bottom text-sm',
    caption: 'mt-4 text-sm text-muted-foreground',
    thead: 'border-b border-border',
    tbody: 'divide-y divide-border',
    tfoot: 'border-t border-border bg-muted font-medium',
    tr: 'transition-colors hover:bg-muted/50',
    th: 'h-12 px-4 text-left align-middle font-semibold text-foreground',
    td: 'px-4 py-4 align-middle text-foreground',
    separator: 'border-b border-border',
    empty: 'text-center py-12 text-muted-foreground',
    loading: 'text-center py-12'
  },
  variants: {
    striped: {
      true: {
        tbody: '[&>tr:nth-child(even)]:bg-muted/30'
      }
    },
    hoverable: {
      true: {
        tr: 'cursor-pointer hover:bg-accent'
      }
    },
    bordered: {
      true: {
        base: 'border border-border rounded-lg',
        th: 'border-r border-border last:border-r-0',
        td: 'border-r border-border last:border-r-0'
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
