import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    base: 'relative inline-flex items-center gap-1 rounded-lg border transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground w-full',
    segment:
      'inline-block rounded px-0.5 sm:px-1 py-0.5 tabular-nums text-foreground outline-none ' +
      'focus:bg-accent focus:text-accent-foreground focus:ring-2 focus:ring-primary/20 ' +
      'data-[placeholder]:text-muted-foreground text-center cursor-text ' +
      'transition-all duration-150',
    leading: 'flex items-center justify-center shrink-0',
    leadingIcon: 'shrink-0 text-muted-foreground',
    trailing: 'flex items-center justify-center shrink-0',
    trailingIcon: 'shrink-0 text-muted-foreground',
    loadingIcon: 'shrink-0 text-muted-foreground animate-spin',
    separatorIcon: 'shrink-0 text-muted-foreground'
  },
  variants: {
    size: {
      sm: {
        base: 'h-8 sm:h-7 px-2 text-sm gap-1 min-h-8 sm:min-h-7',
        segment: 'text-sm sm:text-xs py-0.5 min-w-[1.5rem]',
        leadingIcon: 'size-4 sm:size-3.5',
        trailingIcon: 'size-4 sm:size-3.5',
        loadingIcon: 'size-4 sm:size-3.5',
        separatorIcon: 'size-3'
      },
      md: {
        base: 'h-10 sm:h-9 px-3 text-base sm:text-sm gap-1.5 min-h-10 sm:min-h-9',
        segment: 'text-base sm:text-sm py-0.5 min-w-[1.5rem]',
        leadingIcon: 'size-5 sm:size-4',
        trailingIcon: 'size-5 sm:size-4',
        loadingIcon: 'size-5 sm:size-4',
        separatorIcon: 'size-4 sm:size-3.5'
      },
      lg: {
        base: 'h-12 sm:h-11 px-4 text-lg sm:text-base gap-2 min-h-12 sm:min-h-11',
        segment: 'text-lg sm:text-base py-1 px-1.5 min-w-[2rem]',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5',
        loadingIcon: 'size-5',
        separatorIcon: 'size-5 sm:size-4'
      },
    },
    variant: {
      solid: {
        base: 'bg-primary/5 border-primary hover:bg-primary/10'
      },
      outline: {
        base: 'bg-background border-input hover:border-primary/50'
      },
      soft: {
        base: 'bg-primary/10 border-transparent hover:bg-primary/15'
      },
      subtle: {
        base: 'bg-muted/50 border-transparent hover:bg-muted/70'
      },
      ghost: {
        base: 'bg-transparent border-transparent hover:bg-accent'
      },
      none: {
        base: 'bg-transparent border-transparent shadow-none'
      }
    },
    color: {
      primary: {
        base: 'focus-within:ring-2 focus-within:ring-primary/20'
      },
      secondary: {
        base: 'focus-within:ring-2 focus-within:ring-secondary/20'
      },
      success: {
        base: 'focus-within:ring-2 focus-within:ring-success/20'
      },
      warning: {
        base: 'focus-within:ring-2 focus-within:ring-warning/20'
      },
      error: {
        base: 'focus-within:ring-2 focus-within:ring-error/20'
      },
      info: {
        base: 'focus-within:ring-2 focus-within:ring-info/20'
      }
    },
    disabled: {
      true: {
        base: 'opacity-50 cursor-not-allowed pointer-events-none bg-muted/50'
      }
    },
    leading: {
      true: {}
    },
    trailing: {
      true: {}
    },
    loading: {
      true: {
        base: 'cursor-wait'
      }
    },
    range: {
      true: {
        base: 'flex-wrap sm:flex-nowrap'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: 'primary',
      class: { base: 'border-input focus-within:border-primary focus-within:shadow-sm' }
    },
    {
      variant: 'outline',
      color: 'error',
      class: { base: 'border-input focus-within:border-error focus-within:shadow-sm' }
    },
    {
      variant: 'outline',
      color: 'success',
      class: { base: 'border-input focus-within:border-success focus-within:shadow-sm' }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { base: 'border-input focus-within:border-warning focus-within:shadow-sm' }
    },
    {
      variant: 'outline',
      color: 'info',
      class: { base: 'border-input focus-within:border-info focus-within:shadow-sm' }
    },
    {
      variant: 'soft',
      color: 'success',
      class: { base: 'bg-success/10 hover:bg-success/15' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { base: 'bg-warning/10 hover:bg-warning/15' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { base: 'bg-error/10 hover:bg-error/15' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { base: 'bg-info/10 hover:bg-info/15' }
    },
    {
      size: 'sm',
      range: true,
      class: { base: 'px-1.5 py-1' }
    },
    {
      size: 'md',
      range: true,
      class: { base: 'px-2 py-1.5' }
    },
    {
      size: 'lg',
      range: true,
      class: { base: 'px-3 py-2' }
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    disabled: false,
    leading: false,
    trailing: false,
    loading: false,
    range: false
  }
})
