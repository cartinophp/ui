import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'flex flex-wrap items-center',
    list: 'flex flex-wrap items-center',
    item: '',
    ellipsis: 'flex items-center justify-center text-muted-foreground',
    label: 'font-medium tabular-nums',
    first: '',
    prev: '',
    next: '',
    last: ''
  },
  variants: {
    size: {
      sm: {
        list: 'gap-0.5 sm:gap-1',
        ellipsis: 'size-7 sm:size-6 text-xs',
        label: 'text-xs'
      },
      md: {
        list: 'gap-1 sm:gap-1',
        ellipsis: 'size-9 sm:size-8 text-sm',
        label: 'text-sm'
      },
      lg: {
        list: 'gap-1 sm:gap-1.5',
        ellipsis: 'size-10 sm:size-9 text-base',
        label: 'text-base'
      },
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed pointer-events-none'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    disabled: false
  }
})
