import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'flex flex-col h-screen bg-background border-r border-border transition-all duration-300',
    header: 'flex items-center justify-between p-4 border-b border-border',
    nav: 'flex-1 overflow-y-auto p-2 space-y-1',
    footer: 'p-4 border-t border-border',
    groupLabel: 'px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground',
    link: 'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    linkIcon: 'shrink-0 size-5',
    linkLabel: 'flex-1 truncate',
    linkBadge: 'shrink-0 px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary',
    collapseButton: 'absolute -right-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-6 rounded-full bg-background border border-border shadow-sm hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
    collapseIcon: 'size-4'
  },
  variants: {
    collapsed: {
      true: {
        root: 'w-20',
        link: 'justify-center px-2',
        linkIcon: 'size-6'
      },
      false: {
        root: ''
      }
    },
    active: {
      true: {
        link: 'bg-primary text-primary-foreground hover:bg-primary/90'
      }
    },
    disabled: {
      true: ''
    }
  },
  defaultVariants: {
    collapsed: false
  }
})
