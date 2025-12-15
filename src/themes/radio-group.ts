import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'flex gap-3',
    wrapper: 'flex items-start gap-3',
    item: 'shrink-0 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    indicator: 'flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-[6px] after:h-[6px] after:rounded-full after:bg-white',
    content: 'flex flex-col',
    label: 'text-sm font-medium cursor-pointer select-none',
    description: 'text-xs text-muted-foreground'
  },
  variants: {
    size: {
      sm: {
        item: 'h-4 w-4',
        label: 'text-sm',
        description: 'text-xs'
      },
      md: {
        item: 'h-5 w-5',
        label: 'text-base',
        description: 'text-sm'
      },
      lg: {
        item: 'h-6 w-6',
        label: 'text-lg',
        description: 'text-base'
      }
    },
    orientation: {
      horizontal: {
        root: 'flex-row flex-wrap'
      },
      vertical: {
        root: 'flex-col'
      }
    },
    color: {
      primary: {
        item: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary border-border focus-visible:ring-primary'
      },
      success: {
        item: 'data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 border-border focus-visible:ring-green-500'
      },
      warning: {
        item: 'data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600 border-border focus-visible:ring-yellow-500'
      },
      error: {
        item: 'data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 border-border focus-visible:ring-red-500'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    orientation: 'vertical',
    color: 'primary'
  }
})
