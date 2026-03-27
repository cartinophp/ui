import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative rounded-lg overflow-clip bg-card text-card-foreground',
    header: 'flex flex-col',
    title: 'font-semibold leading-none tracking-tight',
    description: 'text-muted-foreground',
    content: '',
    footer: 'flex items-center'
  },
  variants: {
    size: {
      sm: {
        root: 'rounded-md',
        header: 'p-3 space-y-1',
        title: 'text-base sm:text-lg',
        description: 'text-xs',
        content: 'p-3 pt-0',
        footer: 'p-3 pt-0'
      },
      md: {
        root: 'rounded-lg',
        header: 'p-4 sm:p-5 space-y-1 sm:space-y-1.5',
        title: 'text-lg sm:text-xl',
        description: 'text-sm',
        content: 'p-4 sm:p-5 pt-0',
        footer: 'p-4 sm:p-5 pt-0'
      },
      lg: {
        root: 'rounded-lg sm:rounded-xl',
        header: 'p-5 sm:p-6 space-y-1.5 sm:space-y-2',
        title: 'text-xl sm:text-2xl',
        description: 'text-sm sm:text-base',
        content: 'p-5 sm:p-6 pt-0',
        footer: 'p-5 sm:p-6 pt-0'
      },
    },
    variant: {
      default: {
        root: 'border border-border/50 dark:border-border/20 shadow-sm'
      },
      outline: {
        root: 'border border-border bg-transparent shadow-none'
      },
      elevated: {
        root: 'border-0 shadow-md dark:shadow-lg dark:shadow-black/20'
      },
      ghost: {
        root: 'border-0 shadow-none bg-transparent'
      },
      soft: {
        root: 'border-0 shadow-none'
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {}
    },
    hover: {
      true: {
        root: 'transition-all duration-150 cursor-pointer'
      }
    }
  },
  compoundVariants: [
    // Color + variant combinations for soft
    {
      variant: 'soft',
      color: 'default',
      class: { root: 'bg-muted/50' }
    },
    {
      variant: 'soft',
      color: 'primary',
      class: { root: 'bg-primary/5' }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: { root: 'bg-secondary/5' }
    },
    {
      variant: 'soft',
      color: 'success',
      class: { root: 'bg-success/5' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { root: 'bg-warning/5' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { root: 'bg-error/5' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { root: 'bg-info/5' }
    },
    // Color + variant combinations for outline
    {
      variant: 'outline',
      color: 'primary',
      class: { root: 'border-primary/30' }
    },
    {
      variant: 'outline',
      color: 'success',
      class: { root: 'border-success/30' }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { root: 'border-warning/30' }
    },
    {
      variant: 'outline',
      color: 'error',
      class: { root: 'border-error/30' }
    },
    {
      variant: 'outline',
      color: 'info',
      class: { root: 'border-info/30' }
    },
    // Hover effects
    {
      variant: 'default',
      hover: true,
      class: { root: 'hover:shadow-md hover:border-border' }
    },
    {
      variant: 'elevated',
      hover: true,
      class: { root: 'hover:shadow-lg' }
    },
    {
      variant: 'outline',
      hover: true,
      class: { root: 'hover:bg-accent/5' }
    },
    {
      variant: 'ghost',
      hover: true,
      class: { root: 'hover:bg-accent/5' }
    },
    {
      variant: 'soft',
      hover: true,
      class: { root: 'hover:bg-muted' }
    },
    {
      variant: 'soft',
      color: 'primary',
      hover: true,
      class: { root: 'hover:bg-primary/10' }
    },
    {
      variant: 'soft',
      color: 'success',
      hover: true,
      class: { root: 'hover:bg-success/10' }
    },
    {
      variant: 'soft',
      color: 'warning',
      hover: true,
      class: { root: 'hover:bg-warning/10' }
    },
    {
      variant: 'soft',
      color: 'error',
      hover: true,
      class: { root: 'hover:bg-error/10' }
    },
    {
      variant: 'soft',
      color: 'info',
      hover: true,
      class: { root: 'hover:bg-info/10' }
    }
  ],
  defaultVariants: {
    variant: 'default',
    color: 'default',
    size: 'md',
    hover: false
  }
})
