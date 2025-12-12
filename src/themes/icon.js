import { tv } from 'tailwind-variants'

export default tv({
  base: 'shrink-0',
  variants: {
    size: {
      '3xs': 'size-2',
      '2xs': 'size-2.5',
      xs: 'size-3',
      sm: 'size-3.5',
      md: 'size-4',
      lg: 'size-5',
      xl: 'size-6',
      '2xl': 'size-7',
      '3xl': 'size-8'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
