import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    header: 'flex flex-col space-y-2 text-center sm:text-left',
    title: 'text-lg font-semibold text-foreground',
    description: 'text-sm text-muted-foreground',
    content: 'grid gap-4 py-4',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    close: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
  },
  variants: {
    side: {
      top: {
        root: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top'
      },
      bottom: {
        root: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom'
      },
      left: {
        root: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm'
      },
      right: {
        root: 'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
      }
    },
    size: {
      sm: {
        root: 'p-4',
        header: 'space-y-1',
        title: 'text-base font-medium',
        description: 'text-xs',
        content: 'gap-3 py-3',
        footer: 'space-y-2 sm:space-y-0 sm:space-x-2'
      },
      md: {
        root: 'p-6',
        header: 'space-y-2',
        title: 'text-lg font-semibold',
        description: 'text-sm',
        content: 'gap-4 py-4',
        footer: 'space-y-2 sm:space-y-0 sm:space-x-2'
      },
      lg: {
        root: 'p-8',
        header: 'space-y-3',
        title: 'text-xl font-semibold',
        description: 'text-base',
        content: 'gap-6 py-6',
        footer: 'space-y-3 sm:space-y-0 sm:space-x-3'
      }
    }
  },
  compoundVariants: [
    {
      side: ['left', 'right'],
      class: {
        content: 'overflow-y-auto'
      }
    }
  ],
  defaultVariants: {
    side: 'right',
    size: 'md'
  }
})