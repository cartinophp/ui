import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex items-center justify-center shrink-0 select-none rounded-full overflow-hidden bg-muted',
    image: 'h-full w-full rounded-[inherit] object-cover',
    fallback: 'font-medium leading-none text-muted-foreground truncate',
    icon: 'text-muted-foreground shrink-0'
  },
  variants: {
    size: {
      '3xs': {
        root: 'size-4 text-[8px]',
        icon: 'size-2.5'
      },
      '2xs': {
        root: 'size-5 text-[10px]',
        icon: 'size-3'
      },
      xs: {
        root: 'size-6 text-xs',
        icon: 'size-3.5'
      },
      sm: {
        root: 'size-7 text-sm',
        icon: 'size-4'
      },
      md: {
        root: 'size-8 text-base',
        icon: 'size-4'
      },
      lg: {
        root: 'size-9 text-lg',
        icon: 'size-5'
      },
      xl: {
        root: 'size-10 text-xl',
        icon: 'size-5'
      },
      '2xl': {
        root: 'size-11 text-2xl',
        icon: 'size-6'
      },
      '3xl': {
        root: 'size-12 text-3xl',
        icon: 'size-6'
      }
    },
    chipPosition: {
      'top-right': {},
      'top-left': {},
      'bottom-right': {},
      'bottom-left': {}
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
