import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
    dialog: 'relative bg-default border border-default rounded-lg shadow-xl max-h-[90vh] overflow-y-auto',
    header: 'space-y-2 p-6 pb-4',
    title: 'text-xl font-semibold text-foreground',
    description: 'text-muted',
    body: 'px-6 py-4 text-foreground',
    footer: 'flex justify-end gap-2 p-6 pt-4 border-t border-default',
    closeButton: 'absolute top-4 right-4 p-1 rounded-md text-muted hover:text-foreground hover:bg-elevated focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors'
  },
  variants: {
    size: {
      xs: {
        dialog: 'max-w-xs'
      },
      sm: {
        dialog: 'max-w-sm'
      },
      md: {
        dialog: 'max-w-md'
      },
      lg: {
        dialog: 'max-w-lg'
      },
      xl: {
        dialog: 'max-w-xl'
      },
      '2xl': {
        dialog: 'max-w-2xl'
      },
      '3xl': {
        dialog: 'max-w-3xl'
      },
      '4xl': {
        dialog: 'max-w-4xl'
      },
      '5xl': {
        dialog: 'max-w-5xl'
      },
      '6xl': {
        dialog: 'max-w-6xl'
      },
      '7xl': {
        dialog: 'max-w-7xl'
      },
      full: {
        dialog: 'max-w-full'
      }
    },
    fullscreen: {
      true: {
        dialog: 'w-full h-full max-w-none max-h-none rounded-none'
      }
    },
    centered: {
      true: {
        overlay: 'flex items-center justify-center p-4'
      },
      false: {
        overlay: 'flex items-start justify-center pt-16 pb-4 px-4'
      }
    },
    scrollBehavior: {
      inside: {
        dialog: 'flex flex-col max-h-[90vh]',
        body: 'flex-1 overflow-y-auto'
      },
      outside: {}
    }
  },
  compoundVariants: [
    {
      fullscreen: true,
      class: {
        overlay: 'p-0'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    fullscreen: false,
    centered: true,
    scrollBehavior: 'outside'
  }
})