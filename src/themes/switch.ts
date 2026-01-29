import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    wrapper: 'inline-flex items-center',
    root: 'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
    thumb:
      'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
    content: 'flex flex-col',
    label:
      'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    required: 'text-error ml-0.5',
    description: 'text-muted-foreground'
  },
  variants: {
    size: {
      xs: {
        wrapper: 'gap-2',
        root: 'h-4 w-7 sm:h-3.5 sm:w-6',
        thumb: 'size-3 sm:size-2.5 data-[state=checked]:translate-x-3 sm:data-[state=checked]:translate-x-2.5',
        label: 'text-xs',
        description: 'text-[10px]',
        content: 'gap-0.5'
      },
      sm: {
        wrapper: 'gap-2.5',
        root: 'h-5 w-9 sm:h-4 sm:w-7',
        thumb: 'size-4 sm:size-3 data-[state=checked]:translate-x-4 sm:data-[state=checked]:translate-x-3',
        label: 'text-xs sm:text-sm',
        description: 'text-xs',
        content: 'gap-0.5'
      },
      md: {
        wrapper: 'gap-3',
        root: 'h-6 w-11 sm:h-5 sm:w-9',
        thumb: 'size-5 sm:size-4 data-[state=checked]:translate-x-5 sm:data-[state=checked]:translate-x-4',
        label: 'text-sm',
        description: 'text-xs sm:text-sm',
        content: 'gap-1'
      },
      lg: {
        wrapper: 'gap-3',
        root: 'h-7 w-13 sm:h-6 sm:w-11',
        thumb: 'size-6 sm:size-5 data-[state=checked]:translate-x-6 sm:data-[state=checked]:translate-x-5',
        label: 'text-base sm:text-sm',
        description: 'text-sm',
        content: 'gap-1'
      },
      xl: {
        wrapper: 'gap-4',
        root: 'h-8 w-15 sm:h-7 sm:w-13',
        thumb: 'size-7 sm:size-6 data-[state=checked]:translate-x-7 sm:data-[state=checked]:translate-x-6',
        label: 'text-lg sm:text-base',
        description: 'text-base sm:text-sm',
        content: 'gap-1.5'
      }
    },
    color: {
      primary: {
        root: 'data-[state=checked]:bg-primary'
      },
      secondary: {
        root: 'data-[state=checked]:bg-secondary'
      },
      success: {
        root: 'data-[state=checked]:bg-success'
      },
      warning: {
        root: 'data-[state=checked]:bg-warning'
      },
      error: {
        root: 'data-[state=checked]:bg-error'
      },
      info: {
        root: 'data-[state=checked]:bg-info'
      }
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        label: 'cursor-not-allowed opacity-50'
      }
    },
    loading: {
      true: {
        root: 'cursor-wait'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    disabled: false,
    loading: false
  }
})
