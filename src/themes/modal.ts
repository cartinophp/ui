import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    overlay:
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
    content:
      'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background divide-y divide-border flex flex-col shadow-xl ring-1 ring-border max-h-[85vh] sm:max-h-[90vh] focus:outline-none data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]',
    header: 'flex items-center gap-1.5 p-4 sm:p-6 min-h-14 sm:min-h-16 shrink-0',
    headerContent: 'flex-1 min-h-0',
    title: 'text-lg sm:text-xl font-semibold text-foreground',
    description: 'mt-0.5 sm:mt-1 text-muted-foreground text-xs sm:text-sm',
    body: 'flex-1 p-4 sm:p-6 overflow-y-auto text-foreground text-sm sm:text-base',
    footer: 'flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 p-4 sm:p-6 shrink-0',
    closeButton: 'absolute right-3 top-3 sm:right-4 sm:top-4'
  },
  variants: {
    size: {
      sm: {
        content: 'w-[calc(100vw-2rem)] sm:w-[400px] rounded-lg sm:rounded-lg'
      },
      md: {
        content: 'w-[calc(100vw-2rem)] sm:w-[500px] rounded-lg sm:rounded-lg'
      },
      lg: {
        content: 'w-[calc(100vw-2rem)] sm:w-[600px] md:w-[700px] rounded-lg sm:rounded-lg'
      },
      full: {
        content: 'w-[calc(100vw-1rem)] sm:w-[95vw] rounded-lg sm:rounded-lg'
      }
    },
    fullscreen: {
      true: {
        content:
          'inset-0 w-screen h-screen max-w-none max-h-none rounded-none left-0 top-0 translate-x-0 translate-y-0'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    fullscreen: false
  }
})
