import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'rounded-lg border bg-card text-card-foreground shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-2xl font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0'
  },
  variants: {
    variant: {
      default: {
        root: 'bg-card border-border shadow-sm'
      },
      outline: {
        root: 'border-2 border-border bg-transparent shadow-none'
      },
      elevated: {
        root: 'border-0 shadow-lg bg-card'
      },
      ghost: {
        root: 'border-0 shadow-none bg-transparent'
      }
    },
    size: {
      sm: {
        header: 'p-4 space-y-1',
        title: 'text-lg font-medium',
        description: 'text-xs',
        content: 'p-4 pt-0',
        footer: 'p-4 pt-0'
      },
      md: {
        header: 'p-6 space-y-1.5',
        title: 'text-2xl font-semibold',
        description: 'text-sm',
        content: 'p-6 pt-0',
        footer: 'p-6 pt-0'
      },
      lg: {
        header: 'p-8 space-y-2',
        title: 'text-3xl font-semibold',
        description: 'text-base',
        content: 'p-8 pt-0',
        footer: 'p-8 pt-0'
      }
    },
    hover: {
      true: {
        root: 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'elevated',
      hover: true,
      class: {
        root: 'hover:shadow-xl'
      }
    },
    {
      variant: 'ghost',
      hover: true,
      class: {
        root: 'hover:bg-accent/50'
      }
    }
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})