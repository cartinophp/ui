import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex items-center justify-center shrink-0 select-none overflow-hidden bg-muted',
    image: 'h-full w-full object-cover',
    fallback: 'font-medium leading-none text-muted-foreground truncate',
    icon: 'text-muted-foreground shrink-0'
  },
  variants: {
    size: {
      sm: {
        root: 'size-7 sm:size-6 text-xs',
        icon: 'size-4 sm:size-3.5',
        fallback: 'text-xs'
      },
      md: {
        root: 'size-9 sm:size-8 text-sm',
        icon: 'size-5 sm:size-4',
        fallback: 'text-sm'
      },
      lg: {
        root: 'size-11 sm:size-10 text-base',
        icon: 'size-6 sm:size-5',
        fallback: 'text-base'
      }
    },
    shape: {
      circle: {
        root: 'rounded-full',
        image: 'rounded-full'
      },
      square: {
        root: 'rounded-lg',
        image: 'rounded-lg'
      }
    },
    variant: {
      default: {
        root: 'bg-muted'
      },
      soft: {},
      outline: {
        root: 'bg-transparent border-2 border-border'
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
    bordered: {
      true: {
        root: 'ring-2 ring-background'
      }
    },
    chipPosition: {
      'top-right': {},
      'top-left': {},
      'bottom-right': {},
      'bottom-left': {}
    }
  },
  compoundVariants: [
    // Soft + color
    {
      variant: 'soft',
      color: 'default',
      class: { root: 'bg-muted', fallback: 'text-muted-foreground' }
    },
    {
      variant: 'soft',
      color: 'primary',
      class: { root: 'bg-primary/10', fallback: 'text-primary' }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: { root: 'bg-secondary/10', fallback: 'text-secondary' }
    },
    {
      variant: 'soft',
      color: 'success',
      class: { root: 'bg-success/10', fallback: 'text-success' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { root: 'bg-warning/10', fallback: 'text-warning' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { root: 'bg-error/10', fallback: 'text-error' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { root: 'bg-info/10', fallback: 'text-info' }
    },
    // Outline + color
    {
      variant: 'outline',
      color: 'primary',
      class: { root: 'border-primary', fallback: 'text-primary' }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: { root: 'border-secondary', fallback: 'text-secondary' }
    },
    {
      variant: 'outline',
      color: 'success',
      class: { root: 'border-success', fallback: 'text-success' }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { root: 'border-warning', fallback: 'text-warning' }
    },
    {
      variant: 'outline',
      color: 'error',
      class: { root: 'border-error', fallback: 'text-error' }
    },
    {
      variant: 'outline',
      color: 'info',
      class: { root: 'border-info', fallback: 'text-info' }
    },
    // Square shape radius by size
    {
      shape: 'square',
      size: 'sm',
      class: { root: 'rounded-md', image: 'rounded-md' }
    },
    {
      shape: 'square',
      size: 'md',
      class: { root: 'rounded-lg', image: 'rounded-lg' }
    },
    {
      shape: 'square',
      size: 'lg',
      class: { root: 'rounded-xl', image: 'rounded-xl' }
    }
  ],
  defaultVariants: {
    size: 'md',
    shape: 'circle',
    variant: 'default',
    color: 'default',
    bordered: false
  }
})
