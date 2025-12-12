import { tv } from 'tailwind-variants'

export default tv({
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-secondary',
      outline: 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
      ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
      destructive: 'bg-error text-error-foreground hover:bg-error/90 focus:ring-error'
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    disabled: false
  }
})