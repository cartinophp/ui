import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'shrink-0',
    wrapper: 'relative flex items-center',
    label: 'shrink-0 bg-background px-3 text-sm font-medium text-muted-foreground'
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'h-px w-full bg-border',
        wrapper: 'w-full'
      },
      vertical: {
        root: 'w-px h-full bg-border',
        wrapper: 'h-full flex-col'
      }
    },
    variant: {
      solid: {
        root: 'border-solid'
      },
      dashed: {
        root: 'border-dashed'
      },
      dotted: {
        root: 'border-dotted'
      }
    },
    size: {
      xs: {
        root: 'h-px w-px'
      },
      sm: {
        root: 'h-0.5 w-0.5'
      },
      md: {
        root: 'h-px w-px'
      },
      lg: {
        root: 'h-0.5 w-0.5'
      }
    },
    color: {
      default: {
        root: 'bg-border'
      },
      muted: {
        root: 'bg-border/50'
      },
      primary: {
        root: 'bg-primary'
      },
      success: {
        root: 'bg-green-600'
      },
      warning: {
        root: 'bg-yellow-600'
      },
      error: {
        root: 'bg-red-600'
      }
    },
    align: {
      start: {
        label: 'mr-auto'
      },
      center: {
        label: 'mx-auto'
      },
      end: {
        label: 'ml-auto'
      }
    },
    withLabel: {
      true: {
        root: 'flex-1'
      }
    }
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      withLabel: true,
      class: {
        wrapper: 'flex w-full items-center',
        root: 'flex-1'
      }
    },
    {
      orientation: 'vertical',
      withLabel: true,
      class: {
        wrapper: 'flex h-full flex-col items-center',
        root: 'flex-1'
      }
    },
    {
      orientation: 'vertical',
      align: 'start',
      class: {
        label: 'mb-auto'
      }
    },
    {
      orientation: 'vertical',
      align: 'center',
      class: {
        label: 'my-auto'
      }
    },
    {
      orientation: 'vertical',
      align: 'end',
      class: {
        label: 'mt-auto'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'default',
    align: 'center',
    withLabel: false
  }
})
