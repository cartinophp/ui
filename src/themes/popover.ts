import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'group relative inline-block text-left',
    trigger: 'inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary',
    content: 'absolute z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none',
    arrow: 'size-5 text-gray-400',
    item: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
    separator: 'my-1 h-px bg-gray-100',
    header: 'px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide',
    label: 'block px-4 py-2 text-sm font-medium text-gray-900'
  },
  variants: {
    variant: {
      default: {
        trigger: 'bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground',
        content: 'bg-popover border border-border'
      },
      outline: {
        trigger: 'border-2 border-border bg-transparent hover:bg-accent',
        content: 'bg-popover border-2 border-border'
      },
      ghost: {
        trigger: 'border-transparent hover:bg-accent hover:text-accent-foreground',
        content: 'bg-popover border border-border'
      }
    },
    size: {
      sm: {
        trigger: 'px-2 py-1 text-xs',
        content: 'w-48',
        item: 'px-3 py-1.5 text-xs'
      },
      md: {
        trigger: 'px-3 py-2 text-sm',
        content: 'w-56',
        item: 'px-4 py-2 text-sm'
      },
      lg: {
        trigger: 'px-4 py-3 text-base',
        content: 'w-64',
        item: 'px-5 py-3 text-base'
      }
    },
    placement: {
      'bottom-start': {
        content: 'origin-top-left'
      },
      'bottom-end': {
        content: 'origin-top-right'
      },
      'top-start': {
        content: 'origin-bottom-left'
      },
      'top-end': {
        content: 'origin-bottom-right'
      }
    }
  },
  compoundVariants: [
    {
      size: 'sm',
      class: {
        arrow: 'size-4'
      }
    },
    {
      size: 'lg',
      class: {
        arrow: 'size-6'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    placement: 'bottom-start'
  }
})