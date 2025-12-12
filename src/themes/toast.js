import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'z-50 max-w-sm border rounded-lg shadow-lg backdrop-blur-sm flex items-start gap-3 cursor-pointer transition-all',
    iconContainer: 'shrink-0',
    icon: '',
    content: 'flex-1 min-w-0',
    title: 'font-semibold text-foreground',
    description: 'text-muted',
    actions: 'flex items-center gap-2',
    action: 'transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
    closeButton: 'shrink-0 p-1 rounded-md text-muted hover:text-foreground hover:bg-elevated focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors'
  },
  variants: {
    type: {
      default: {
        root: 'bg-default border-default',
        icon: 'text-muted'
      },
      success: {
        root: 'bg-success/10 border-success/20',
        icon: 'text-success'
      },
      warning: {
        root: 'bg-warning/10 border-warning/20',
        icon: 'text-warning'
      },
      error: {
        root: 'bg-error/10 border-error/20',
        icon: 'text-error'
      },
      info: {
        root: 'bg-info/10 border-info/20',
        icon: 'text-info'
      }
    },
    position: {
      'top-right': {
        root: 'fixed top-4 right-4'
      },
      'top-left': {
        root: 'fixed top-4 left-4'
      },
      'bottom-right': {
        root: 'fixed bottom-4 right-4'
      },
      'bottom-left': {
        root: 'fixed bottom-4 left-4'
      },
      'top-center': {
        root: 'fixed top-4 left-1/2 -translate-x-1/2'
      },
      'bottom-center': {
        root: 'fixed bottom-4 left-1/2 -translate-x-1/2'
      }
    },
    size: {
      sm: {
        root: 'p-3',
        icon: 'size-4',
        title: 'text-xs',
        description: 'text-xs'
      },
      md: {
        root: 'p-4',
        icon: 'size-5',
        title: 'text-sm',
        description: 'text-sm'
      },
      lg: {
        root: 'p-5',
        icon: 'size-6',
        title: 'text-base',
        description: 'text-sm'
      }
    },
    hasTitle: {
      true: {
        description: 'mt-1'
      }
    }
  },
  compoundVariants: [
    {
      type: 'default',
      class: {
        iconContainer: 'bg-muted p-2 rounded-lg'
      }
    },
    {
      type: 'success', 
      class: {
        iconContainer: 'bg-success/10 p-2 rounded-lg'
      }
    },
    {
      type: 'warning',
      class: {
        iconContainer: 'bg-warning/10 p-2 rounded-lg'
      }
    },
    {
      type: 'error',
      class: {
        iconContainer: 'bg-error/10 p-2 rounded-lg'
      }
    },
    {
      type: 'info',
      class: {
        iconContainer: 'bg-info/10 p-2 rounded-lg'
      }
    }
  ],
  defaultVariants: {
    type: 'default',
    position: 'top-right',
    size: 'md',
    hasTitle: false
  }
})