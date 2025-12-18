import { tv } from 'tailwind-variants'

/**
 * DatePicker Component Theme
 * Based on Nuxt UI InputDate - uses Reka UI DateField with individual segments
 * Supports sizes, variants, colors, and states
 */
export default tv({
  slots: {
    base: 'group relative inline-flex items-center rounded-md select-none transition-colors text-foreground',
    segment:
      'rounded text-center outline-none text-foreground data-[placeholder]:text-muted-foreground data-[segment=literal]:text-muted-foreground data-invalid:text-destructive data-disabled:cursor-not-allowed data-disabled:opacity-75 transition-colors',
    leading: 'shrink-0 flex items-center text-muted-foreground',
    leadingIcon: 'shrink-0 text-muted-foreground',
    trailing: 'ms-auto inline-flex items-center shrink-0 text-muted-foreground',
    trailingIcon: 'shrink-0 text-muted-foreground',
    separatorIcon: 'shrink-0 text-muted-foreground mx-1'
  },
  variants: {
    size: {
      sm: {
        base: 'h-9 px-3 py-2 text-sm gap-0.5',
        segment:
          'data-[segment=day]:w-6 data-[segment=month]:w-6 data-[segment=year]:w-9',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      md: {
        base: 'h-10 px-3.5 py-2 text-sm gap-0.5',
        segment:
          'data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
      },
      lg: {
        base: 'h-11 px-4 py-2.5 text-base gap-0.75',
        segment:
          'data-[segment=day]:w-7 data-[segment=month]:w-7 data-[segment=year]:w-11',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
      }
    },
    variant: {
      outline: {
        base: 'bg-background border border-border shadow-xs hover:bg-muted/50 focus-within:ring-2 focus-within:ring-ring dark:bg-background dark:border-border dark:hover:bg-muted/50',
        segment: 'focus:bg-muted dark:focus:bg-muted'
      },
      filled: {
        base: 'bg-muted border-0 hover:bg-muted/80 focus-within:ring-2 focus-within:ring-ring dark:bg-muted dark:hover:bg-muted/80',
        segment: 'focus:bg-background dark:focus:bg-background'
      },
      ghost: {
        base: 'bg-transparent border-0 hover:bg-muted/50 focus-within:ring-2 focus-within:ring-ring dark:hover:bg-muted/50',
        segment: 'focus:bg-muted dark:focus:bg-muted'
      },
      soft: {
        base: 'border-0 focus-within:ring-2',
        segment:
          'focus:bg-background/50 group-hover:focus:bg-background dark:focus:bg-background/50 dark:group-hover:focus:bg-background'
      },
      none: {
        base: 'bg-transparent border-0 p-0 focus-within:ring-0',
        segment: 'focus:bg-muted dark:focus:bg-muted'
      }
    },
    color: {
      primary: '',
      success: '',
      warning: '',
      error: '',
      info: ''
    },
    disabled: {
      true: {
        base: 'opacity-50 cursor-not-allowed'
      }
    },
    leading: {
      true: {
        base: 'ps-2.5'
      }
    },
    trailing: {
      true: {
        base: 'pe-2.5'
      }
    }
  },
  compoundVariants: [
    // Color variants for outline
    {
      variant: 'outline',
      color: 'primary',
      class: {
        base: 'focus-within:border-primary focus-within:ring-primary'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        base: 'focus-within:border-green-500 focus-within:ring-green-500'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        base: 'focus-within:border-yellow-500 focus-within:ring-yellow-500'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        base: 'border-destructive/50 focus-within:border-destructive focus-within:ring-destructive'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        base: 'focus-within:border-blue-500 focus-within:ring-blue-500'
      }
    },

    // Color variants for soft
    {
      variant: 'soft',
      color: 'primary',
      class: {
        base: 'bg-primary/10 text-primary hover:bg-primary/20 focus-within:ring-primary/50 dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/30'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        base: 'bg-green-500/10 text-green-600 hover:bg-green-500/20 focus-within:ring-green-500/50 dark:bg-green-500/20 dark:text-green-400 dark:hover:bg-green-500/30'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        base: 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 focus-within:ring-yellow-500/50 dark:bg-yellow-500/20 dark:text-yellow-400 dark:hover:bg-yellow-500/30'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        base: 'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-within:ring-destructive/50 dark:bg-destructive/20 dark:text-destructive dark:hover:bg-destructive/30'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        base: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 focus-within:ring-blue-500/50 dark:bg-blue-500/20 dark:text-blue-400 dark:hover:bg-blue-500/30'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    disabled: false,
    leading: false,
    trailing: false
  }
})
