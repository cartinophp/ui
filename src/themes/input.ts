import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    label: 'block mb-1 sm:mb-1.5 font-medium text-foreground',
    wrapper: 'relative flex items-center transition-all',
    input:
      'flex-1 w-full outline-none bg-transparent text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed',
    leadingIcon:
      'shrink-0 text-muted-foreground absolute grid place-items-center pointer-events-none',
    trailingIcon:
      'shrink-0 text-muted-foreground absolute grid place-items-center',
    hint: 'mt-1 sm:mt-1.5'
  },
  variants: {
    size: {
      sm: {
        label: 'text-xs',
        wrapper: 'text-sm h-8 sm:h-7',
        input: 'px-2.5 py-1.5',
        leadingIcon: 'size-4 sm:size-3.5 left-2.5',
        trailingIcon: 'size-4 sm:size-3.5 right-2.5',
        hint: 'text-xs'
      },
      md: {
        label: 'text-sm',
        wrapper: 'text-base sm:text-sm h-10 sm:h-9',
        input: 'px-3 py-2 sm:py-1.5',
        leadingIcon: 'size-5 sm:size-4 left-3',
        trailingIcon: 'size-5 sm:size-4 right-3',
        hint: 'text-xs sm:text-sm'
      },
      lg: {
        label: 'text-base sm:text-sm',
        wrapper: 'text-lg sm:text-base h-12 sm:h-11',
        input: 'px-4 py-2.5 sm:py-2',
        leadingIcon: 'size-5 left-4',
        trailingIcon: 'size-5 right-4',
        hint: 'text-sm'
      }
    },
    variant: {
      solid: {
        wrapper: 'border border-primary bg-primary text-primary-foreground rounded-lg'
      },
      outline: {
        wrapper: 'border rounded-lg bg-background'
      },
      soft: {
        wrapper: 'border-0 rounded-lg bg-primary/10'
      },
      subtle: {
        wrapper: 'border-0 rounded-lg bg-muted/50'
      },
      ghost: {
        wrapper: 'border-0 bg-transparent hover:bg-muted/50 rounded-lg'
      },
      link: {
        wrapper: 'border-0 bg-transparent border-b border-border rounded-none'
      },
      none: {
        wrapper: 'border-0 bg-transparent'
      }
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {}
    },
    focused: {
      true: {}
    },
    loading: {
      true: {
        wrapper: 'cursor-wait'
      }
    },
    disabled: {
      true: {
        wrapper: 'opacity-50 cursor-not-allowed',
        input: 'cursor-not-allowed'
      }
    },
    readonly: {
      true: {
        wrapper: 'cursor-default',
        input: 'cursor-default'
      }
    },
    hasLeading: {
      true: {}
    },
    hasTrailing: {
      true: {}
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
    // Leading icon padding adjustments
    { hasLeading: true, size: 'sm', class: { input: 'pl-8 sm:pl-7' } },
    { hasLeading: true, size: 'md', class: { input: 'pl-10 sm:pl-9' } },
    { hasLeading: true, size: 'lg', class: { input: 'pl-11 sm:pl-10' } },
    // Trailing icon padding adjustments
    { hasTrailing: true, size: 'sm', class: { input: 'pr-8 sm:pr-7' } },
    { hasTrailing: true, size: 'md', class: { input: 'pr-10 sm:pr-9' } },
    { hasTrailing: true, size: 'lg', class: { input: 'pr-11 sm:pr-10' } },
    // Outline variant colors
    {
      variant: 'outline',
      color: 'primary',
      focused: false,
      class: { wrapper: 'border-border hover:border-border/80' }
    },
    {
      variant: 'outline',
      color: 'primary',
      focused: true,
      class: { wrapper: 'border-primary ring-2 ring-primary/20' }
    },
    {
      variant: 'outline',
      color: 'secondary',
      focused: true,
      class: { wrapper: 'border-secondary ring-2 ring-secondary/20' }
    },
    {
      variant: 'outline',
      color: 'success',
      class: { wrapper: 'border-success ring-2 ring-success/20' }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { wrapper: 'border-warning ring-2 ring-warning/20' }
    },
    {
      variant: 'outline',
      color: 'error',
      class: { wrapper: 'border-error ring-2 ring-error/20' }
    },
    {
      variant: 'outline',
      color: 'info',
      class: { wrapper: 'border-info ring-2 ring-info/20' }
    },
    // Soft variant colors
    {
      variant: 'soft',
      color: 'primary',
      class: { wrapper: 'bg-primary/10 focus-within:bg-primary/15' }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: { wrapper: 'bg-secondary/10 focus-within:bg-secondary/15' }
    },
    {
      variant: 'soft',
      color: 'success',
      class: { wrapper: 'bg-success/10 focus-within:bg-success/15' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { wrapper: 'bg-warning/10 focus-within:bg-warning/15' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { wrapper: 'bg-error/10 focus-within:bg-error/15' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { wrapper: 'bg-info/10 focus-within:bg-info/15' }
    },
    // Subtle variant - neutral with color on focus
    {
      variant: 'subtle',
      color: 'primary',
      focused: true,
      class: { wrapper: 'bg-primary/5 ring-2 ring-primary/10' }
    },
    {
      variant: 'subtle',
      color: 'error',
      class: { wrapper: 'bg-error/5 ring-2 ring-error/10' }
    },
    // Ghost variant colors
    {
      variant: 'ghost',
      color: 'primary',
      focused: true,
      class: { wrapper: 'bg-muted' }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: { wrapper: 'bg-error/10' }
    },
    // Link variant colors
    {
      variant: 'link',
      color: 'primary',
      focused: true,
      class: { wrapper: 'border-primary' }
    },
    {
      variant: 'link',
      color: 'error',
      class: { wrapper: 'border-error' }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    focused: false,
    loading: false,
    disabled: false,
    readonly: false,
    hasLeading: false,
    hasTrailing: false,
    hasError: false
  }
})
