import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
    thumb: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
    label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    description: 'text-sm text-muted-foreground'
  },
  variants: {
    checked: {
      true: {
        root: 'bg-primary',
        thumb: 'translate-x-5'
      },
      false: {
        root: 'bg-input',
        thumb: 'translate-x-0'
      }
    },
    size: {
      sm: {
        root: 'h-4 w-7',
        thumb: 'h-3 w-3 data-[state=checked]:translate-x-3'
      },
      md: {
        root: 'h-6 w-11',
        thumb: 'h-5 w-5 data-[state=checked]:translate-x-5'
      },
      lg: {
        root: 'h-8 w-14',
        thumb: 'h-7 w-7 data-[state=checked]:translate-x-6'
      }
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        label: 'cursor-not-allowed opacity-50'
      }
    }
  },
  defaultVariants: {
    checked: false,
    size: 'md',
    disabled: false
  }
})