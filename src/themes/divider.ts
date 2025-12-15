import { tv } from 'tailwind-variants'

/**
 * Divider Component Theme
 * Horizontal and vertical dividers/separators
 * Supports sizes, colors, variants, and optional labels
 */
export default tv({
  slots: {
    root: 'flex',
    line: 'flex-grow border-solid',
    label: 'px-3 text-sm font-medium'
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full items-center',
        line: 'border-t'
      },
      vertical: {
        root: 'h-full flex-col justify-center',
        line: 'border-l'
      }
    },
    variant: {
      solid: {
        line: 'border-solid'
      },
      dashed: {
        line: 'border-dashed'
      },
      dotted: {
        line: 'border-dotted'
      }
    },
    size: {
      xs: {
        line: 'border-[0.5px]'
      },
      sm: {
        line: 'border-[1px]'
      },
      md: {
        line: 'border-[1.5px]'
      },
      lg: {
        line: 'border-2'
      }
    },
    color: {
      default: {
        line: 'border-border',
        label: 'text-muted-foreground'
      },
      muted: {
        line: 'border-border/50',
        label: 'text-muted'
      },
      primary: {
        line: 'border-primary',
        label: 'text-primary'
      },
      success: {
        line: 'border-success',
        label: 'text-success'
      },
      warning: {
        line: 'border-warning',
        label: 'text-warning'
      },
      error: {
        line: 'border-error',
        label: 'text-error'
      }
    },
    align: {
      start: {},
      center: {},
      end: {}
    },
    hasLabel: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    // Horizontal with label alignments
    {
      orientation: 'horizontal',
      align: 'start',
      hasLabel: true,
      class: {
        root: 'justify-start'
      }
    },
    {
      orientation: 'horizontal',
      align: 'center',
      hasLabel: true,
      class: {
        root: 'justify-center'
      }
    },
    {
      orientation: 'horizontal',
      align: 'end',
      hasLabel: true,
      class: {
        root: 'justify-end'
      }
    },
    // Vertical with label alignments
    {
      orientation: 'vertical',
      align: 'start',
      hasLabel: true,
      class: {
        root: 'justify-start'
      }
    },
    {
      orientation: 'vertical',
      align: 'center',
      hasLabel: true,
      class: {
        root: 'justify-center'
      }
    },
    {
      orientation: 'vertical',
      align: 'end',
      hasLabel: true,
      class: {
        root: 'justify-end'
      }
    }
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'sm',
    color: 'default',
    align: 'center',
    hasLabel: false
  }
})

// Export type for TypeScript support
export type DividerThemeVariants = Parameters<typeof tv>[0]
