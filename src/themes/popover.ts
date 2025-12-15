import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    content: 'z-50 rounded-lg border border-border bg-background p-4 shadow-lg outline-none'
  },
  variants: {
    size: {
      sm: {
        content: 'max-w-xs'
      },
      md: {
        content: 'max-w-sm'
      },
      lg: {
        content: 'max-w-md'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
