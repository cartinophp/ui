import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    label: 'block mb-1 sm:mb-1.5 font-medium text-foreground',
    wrapper: 'relative w-full',
    textarea:
      'flex w-full rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    resizeHandle: 'absolute bottom-0 right-0 p-1 cursor-se-resize',
    resizeIcon: 'text-muted-foreground',
    hint: 'mt-1 sm:mt-1.5'
  },
  variants: {
    size: {
      xs: {
        label: 'text-xs',
        textarea: 'min-h-[48px] sm:min-h-[40px] px-2 py-1 text-xs',
        resizeIcon: 'size-3',
        hint: 'text-[10px]'
      },
      sm: {
        label: 'text-xs',
        textarea: 'min-h-[60px] sm:min-h-[52px] px-2 py-1.5 text-xs sm:text-xs',
        resizeIcon: 'size-3.5',
        hint: 'text-xs'
      },
      md: {
        label: 'text-sm',
        textarea: 'min-h-[80px] sm:min-h-[72px] px-3 py-2 text-sm',
        resizeIcon: 'size-4',
        hint: 'text-xs sm:text-sm'
      },
      lg: {
        label: 'text-base sm:text-sm',
        textarea: 'min-h-[100px] sm:min-h-[88px] px-4 py-2.5 sm:py-2 text-base sm:text-sm',
        resizeIcon: 'size-4',
        hint: 'text-sm'
      },
      xl: {
        label: 'text-lg sm:text-base',
        textarea: 'min-h-[120px] sm:min-h-[104px] px-5 py-3 text-lg sm:text-base',
        resizeIcon: 'size-5',
        hint: 'text-base sm:text-sm'
      }
    },
    variant: {
      solid: {
        textarea: 'border border-primary bg-primary/5'
      },
      outline: {
        textarea: 'border border-border bg-background'
      },
      soft: {
        textarea: 'border-0 bg-primary/10'
      },
      subtle: {
        textarea: 'border-0 bg-muted/50'
      },
      ghost: {
        textarea: 'border-0 bg-transparent hover:bg-muted/50'
      },
      flushed: {
        textarea: 'border-0 border-b border-border rounded-none px-0'
      },
      none: {
        textarea: 'border-0 bg-transparent p-0'
      }
    },
    color: {
      primary: {
        textarea: 'focus-visible:ring-primary'
      },
      secondary: {
        textarea: 'focus-visible:ring-secondary'
      },
      success: {
        textarea: 'border-success focus-visible:ring-success'
      },
      warning: {
        textarea: 'border-warning focus-visible:ring-warning'
      },
      error: {
        textarea: 'border-error focus-visible:ring-error'
      },
      info: {
        textarea: 'border-info focus-visible:ring-info'
      }
    },
    loading: {
      true: {
        wrapper: 'cursor-wait'
      }
    },
    disabled: {
      true: {
        textarea: 'opacity-50 cursor-not-allowed'
      }
    },
    readonly: {
      true: {
        textarea: 'cursor-default'
      }
    },
    resize: {
      true: {
        textarea: 'resize-y'
      },
      false: {
        textarea: 'resize-none'
      }
    },
    hasError: {
      true: {
        hint: 'text-error'
      },
      false: {
        hint: 'text-muted-foreground'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'soft',
      color: 'success',
      class: { textarea: 'bg-success/10 focus-visible:bg-success/15' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { textarea: 'bg-warning/10 focus-visible:bg-warning/15' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { textarea: 'bg-error/10 focus-visible:bg-error/15' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { textarea: 'bg-info/10 focus-visible:bg-info/15' }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    loading: false,
    disabled: false,
    readonly: false,
    resize: true,
    hasError: false
  }
})
