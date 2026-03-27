import { tv } from 'tailwind-variants'

export default tv({
  // Use size-* utilities for better integration with parent components
  base: 'shrink-0 inline-block',
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})
