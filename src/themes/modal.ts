import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    overlay:
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
    content:
      'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background border border-default rounded-lg shadow-xl max-h-[90vh] overflow-y-auto focus:outline-none data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]',
    header: 'space-y-2 p-6 pb-4',
    title: 'text-xl font-semibold text-foreground',
    description: 'text-muted-foreground text-sm',
    body: 'px-6 py-4 text-foreground',
    footer: 'flex justify-end gap-2 p-6 pt-4 border-t border-default',
    closeButton:
      'absolute top-4 right-4 p-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  },
  variants: {
    size: {
      xs: {
        content: 'w-[300px]'
      },
      sm: {
        content: 'w-[400px]'
      },
      md: {
        content: 'w-[500px]'
      },
      lg: {
        content: 'w-[600px]'
      },
      xl: {
        content: 'w-[700px]'
      },
      '2xl': {
        content: 'w-[800px]'
      },
      '3xl': {
        content: 'w-[900px]'
      },
      full: {
        content: 'w-[95vw]'
      }
    },
    fullscreen: {
      true: {
        content:
          'w-screen h-screen max-w-none max-h-none rounded-none left-0 top-0 translate-x-0 translate-y-0'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    fullscreen: false
  }
})
