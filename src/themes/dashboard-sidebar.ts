import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative flex flex-col min-h-screen shrink-0 border-border bg-background transition-all duration-200 ease-in-out',
    header:
      'shrink-0 flex items-center gap-1.5 border-b border-border transition-all duration-200',
    body: 'flex flex-col gap-3 sm:gap-4 flex-1 overflow-y-auto transition-all duration-200',
    footer:
      'shrink-0 flex items-center gap-1.5 border-t border-border transition-all duration-200',
    toggle: 'hidden lg:flex',
    handle:
      'absolute top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary/20 transition-colors hidden lg:block',
    content: 'fixed inset-y-0 z-50 flex flex-col bg-background border-border lg:relative lg:flex',
    overlay: 'fixed inset-0 z-40 bg-black/50 lg:hidden'
  },
  variants: {
    size: {
      sm: {
        root: 'w-56 sm:w-52',
        header: 'h-12 sm:h-14 px-3 sm:px-3',
        body: 'px-2 sm:px-3 py-2',
        footer: 'px-2 sm:px-3 py-2'
      },
      md: {
        root: 'w-64 sm:w-60',
        header: 'h-14 sm:h-16 px-3 sm:px-4',
        body: 'px-3 sm:px-4 py-2',
        footer: 'px-3 sm:px-4 py-2'
      },
      lg: {
        root: 'w-72 sm:w-68',
        header: 'h-16 sm:h-18 px-4 sm:px-5',
        body: 'px-4 sm:px-5 py-3',
        footer: 'px-4 sm:px-5 py-3'
      }
    },
    side: {
      left: {
        root: 'border-r',
        handle: '-right-0.5',
        content: 'left-0 border-r'
      },
      right: {
        root: 'border-l',
        handle: '-left-0.5',
        content: 'right-0 border-l'
      }
    },
    collapsed: {
      true: {
        root: 'w-14 sm:w-16',
        header: 'justify-center px-2',
        body: 'px-2',
        footer: 'justify-center px-2'
      }
    },
    mobile: {
      true: {
        root: 'fixed inset-y-0 z-50 w-[280px] sm:w-64',
        toggle: 'flex'
      },
      false: {
        root: 'hidden lg:flex',
        content: 'hidden',
        overlay: 'hidden'
      }
    }
  },
  compoundVariants: [
    {
      collapsed: true,
      size: 'sm',
      class: { root: 'w-12 sm:w-14' }
    },
    {
      collapsed: true,
      size: 'md',
      class: { root: 'w-14 sm:w-16' }
    },
    {
      collapsed: true,
      size: 'lg',
      class: { root: 'w-16 sm:w-18' }
    },
    {
      mobile: true,
      side: 'left',
      class: { root: 'left-0' }
    },
    {
      mobile: true,
      side: 'right',
      class: { root: 'right-0' }
    }
  ],
  defaultVariants: {
    size: 'md',
    side: 'left',
    collapsed: false,
    mobile: false
  }
})
