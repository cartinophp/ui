import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'inline-flex items-center font-medium transition-colors',
    icon: 'flex items-center justify-center shrink-0',
    text: 'inline-block truncate'
  },
  variants: {
    size: {
      sm: {
        root: 'px-2 py-0.5 text-xs rounded-md gap-1',
        icon: 'size-3'
      },
      md: {
        root: 'px-2.5 py-1 text-xs sm:text-sm rounded-md gap-1.5',
        icon: 'size-3.5 sm:size-4'
      },
      lg: {
        root: 'px-3 py-1.5 text-sm sm:text-base rounded-md gap-1.5',
        icon: 'size-4 sm:size-5'
      }
    },
    variant: {
      solid: {},
      soft: {},
      outline: {},
      subtle: {},
      ghost: {}
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
      neutral: {}
    }
  },
  compoundVariants: [
    // Solid variants - colored background with foreground text
    {
      variant: 'solid',
      color: 'primary',
      class: { root: 'bg-primary text-primary-foreground' }
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: { root: 'bg-secondary text-secondary-foreground' }
    },
    {
      variant: 'solid',
      color: 'success',
      class: { root: 'bg-success text-success-foreground' }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: { root: 'bg-warning text-warning-foreground' }
    },
    {
      variant: 'solid',
      color: 'error',
      class: { root: 'bg-error text-error-foreground' }
    },
    {
      variant: 'solid',
      color: 'info',
      class: { root: 'bg-info text-info-foreground' }
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: { root: 'bg-foreground text-background' }
    },
    // Soft variants - light background with colored text
    {
      variant: 'soft',
      color: 'primary',
      class: { root: 'bg-primary/10 text-primary' }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: { root: 'bg-secondary/10 text-secondary' }
    },
    {
      variant: 'soft',
      color: 'success',
      class: { root: 'bg-success/10 text-success' }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: { root: 'bg-warning/10 text-warning' }
    },
    {
      variant: 'soft',
      color: 'error',
      class: { root: 'bg-error/10 text-error' }
    },
    {
      variant: 'soft',
      color: 'info',
      class: { root: 'bg-info/10 text-info' }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: { root: 'bg-muted text-muted-foreground' }
    },
    // Outline variants - transparent with border
    {
      variant: 'outline',
      color: 'primary',
      class: { root: 'border border-primary text-primary bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: { root: 'border border-secondary text-secondary bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'success',
      class: { root: 'border border-success text-success bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { root: 'border border-warning text-warning bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'error',
      class: { root: 'border border-error text-error bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'info',
      class: { root: 'border border-info text-info bg-transparent' }
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: { root: 'border border-border text-foreground bg-transparent' }
    },
    // Subtle variants - very light background
    {
      variant: 'subtle',
      color: 'primary',
      class: { root: 'bg-primary/5 text-primary' }
    },
    {
      variant: 'subtle',
      color: 'secondary',
      class: { root: 'bg-secondary/5 text-secondary' }
    },
    {
      variant: 'subtle',
      color: 'success',
      class: { root: 'bg-success/5 text-success' }
    },
    {
      variant: 'subtle',
      color: 'warning',
      class: { root: 'bg-warning/5 text-warning' }
    },
    {
      variant: 'subtle',
      color: 'error',
      class: { root: 'bg-error/5 text-error' }
    },
    {
      variant: 'subtle',
      color: 'info',
      class: { root: 'bg-info/5 text-info' }
    },
    {
      variant: 'subtle',
      color: 'neutral',
      class: { root: 'bg-muted/50 text-muted-foreground' }
    },
    // Ghost variants - no background, just text
    {
      variant: 'ghost',
      color: 'primary',
      class: { root: 'text-primary hover:bg-primary/10' }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: { root: 'text-secondary hover:bg-secondary/10' }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: { root: 'text-success hover:bg-success/10' }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: { root: 'text-warning hover:bg-warning/10' }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: { root: 'text-error hover:bg-error/10' }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: { root: 'text-info hover:bg-info/10' }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: { root: 'text-muted-foreground hover:bg-muted' }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'soft',
    color: 'primary'
  }
})
