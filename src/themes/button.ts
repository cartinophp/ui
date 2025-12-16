import { tv } from 'tailwind-variants'

/**
 * Button Component Theme
 * Polaris-inspired design with Cartino primary color (#0e5bff)
 * Matches Shopify Polaris Button component specs exactly
 */
export default tv({
  slots: {
    base: 'relative box-border inline-flex items-center justify-center gap-[2px] select-none cursor-pointer touch-manipulation transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1',
    label: 'transition-transform',
    leadingIcon: 'shrink-0 -my-[2px] transition-transform',
    trailingIcon: 'shrink-0 -my-[2px] transition-transform'
  },
  variants: {
    variant: {
      primary: {
        base: 'active:shadow-[0_3px_0_0_rgb(0,0,0)_inset]',
        label: 'active:translate-y-[1px]',
        leadingIcon: 'active:translate-y-[1px]',
        trailingIcon: 'active:translate-y-[1px]'
      },

      secondary: {
        base: 'active:shadow-[-1px_0_1px_0_rgba(26,26,26,0.122)_inset,1px_0_1px_0_rgba(26,26,26,0.122)_inset,0_2px_1px_0_rgba(26,26,26,0.2)_inset]',
        label: 'active:translate-y-[1px]',
        leadingIcon: 'active:translate-y-[1px]',
        trailingIcon: 'active:translate-y-[1px]'
      },

      tertiary: 'bg-transparent',

      plain: 'bg-transparent -mx-3 -my-1.5 hover:underline',

      monochromePlain: 'bg-transparent -mx-3 -my-1.5'
    },
    tone: {
      default: '',
      critical: '',
      success: ''
    },
    size: {
      // Extra Small - very small buttons
      xs: {
        base: 'min-h-[28px] min-w-[28px] px-2 py-1 text-[12px] rounded-lg md:min-h-[24px] md:min-w-[24px]',
        leadingIcon: 'size-3.5',
        trailingIcon: 'size-3.5'
      },
      // Small - Polaris "slim"
      sm: {
        base: 'min-h-[32px] min-w-[32px] px-3 py-1.5 text-[13px] font-medium rounded-lg md:min-h-[28px] md:min-w-[28px]',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      // Medium - Polaris default
      md: {
        base: 'min-h-[32px] min-w-[32px] px-3 py-1.5 text-[14px] font-medium rounded-lg md:min-h-[28px] md:min-w-[28px]',
        leadingIcon: 'size-[18px]',
        trailingIcon: 'size-[18px]'
      },
      // Large - bigger buttons
      lg: {
        base: 'min-h-[36px] min-w-[36px] px-4 py-2 text-[15px] font-medium rounded-lg md:min-h-[32px] md:min-w-[32px]',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5'
      }
    },
    loading: {
      true: {
        base: 'cursor-wait opacity-75'
      }
    },
    block: {
      true: {
        base: 'w-full'
      }
    },
    square: {
      true: ''
    },
    disabled: {
      true: ''
    }
  },
  compoundVariants: [
    // ===== PRIMARY VARIANT (with tone variations) =====
    {
      variant: 'primary',
      tone: 'default',
      class: {
        base: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-secondary-300 disabled:text-secondary-500'
      }
    },
    {
      variant: 'primary',
      tone: 'success',
      class: {
        base: 'bg-success text-white hover:bg-success-600 active:bg-success-700 disabled:bg-success-200 disabled:text-success-400'
      }
    },
    {
      variant: 'primary',
      tone: 'critical',
      class: {
        base: 'bg-error text-white hover:bg-error-600 active:bg-error-700 disabled:bg-error-200 disabled:text-error-400'
      }
    },

    // ===== SECONDARY VARIANT (with tone variations) =====
    {
      variant: 'secondary',
      tone: 'default',
      class: {
        base: 'bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100 hover:bg-secondary-50 dark:hover:bg-secondary-800 active:bg-secondary-100 dark:active:bg-secondary-700 disabled:bg-secondary-50 dark:disabled:bg-secondary-800 disabled:text-secondary-400'
      }
    },
    {
      variant: 'secondary',
      tone: 'success',
      class: {
        base: 'bg-white dark:bg-secondary-900 text-success hover:bg-success-50 dark:hover:bg-success-950/20 active:bg-success-100 dark:active:bg-success-950/30 disabled:text-success-300'
      }
    },
    {
      variant: 'secondary',
      tone: 'critical',
      class: {
        base: 'bg-white dark:bg-secondary-900 text-error hover:bg-error-50 dark:hover:bg-error-950/20 active:bg-error-100 dark:active:bg-error-950/30 disabled:text-error-300'
      }
    },

    // ===== TERTIARY VARIANT (with tone variations) =====
    {
      variant: 'tertiary',
      tone: 'default',
      class: {
        base: 'text-secondary-900 dark:text-secondary-100 hover:bg-secondary-100 dark:hover:bg-secondary-800 active:bg-secondary-200 dark:active:bg-secondary-700 disabled:text-secondary-400'
      }
    },
    {
      variant: 'tertiary',
      tone: 'success',
      class: {
        base: 'text-success hover:bg-success-50 dark:hover:bg-success-950/20 active:bg-success-100 dark:active:bg-success-950/30 disabled:text-success-300'
      }
    },
    {
      variant: 'tertiary',
      tone: 'critical',
      class: {
        base: 'text-error hover:bg-error-50 dark:hover:bg-error-950/20 active:bg-error-100 dark:active:bg-error-950/30 disabled:text-error-300'
      }
    },

    // ===== PLAIN VARIANT (with tone variations) =====
    {
      variant: 'plain',
      tone: 'default',
      class: {
        base: 'text-primary hover:text-primary-700 active:text-primary-800 disabled:text-primary-300'
      }
    },
    {
      variant: 'plain',
      tone: 'success',
      class: {
        base: 'text-success hover:text-success-700 active:text-success-800 disabled:text-success-300'
      }
    },
    {
      variant: 'plain',
      tone: 'critical',
      class: {
        base: 'text-error hover:text-error-700 active:text-error-800 disabled:text-error-300'
      }
    },

    // ===== MONOCHROME PLAIN VARIANT =====
    {
      variant: 'monochromePlain',
      class: {
        base: 'text-current hover:bg-secondary-100 dark:hover:bg-secondary-800 active:bg-secondary-200 dark:active:bg-secondary-700 disabled:bg-transparent'
      }
    },
    // ===== ICON ONLY (SQUARE) ADJUSTMENTS =====
    {
      square: true,
      size: 'xs',
      class: {
        base: 'px-[2px] py-[2px] min-w-[24px] aspect-square'
      }
    },
    {
      square: true,
      size: 'sm',
      class: {
        base: 'px-1 py-1 min-w-[28px] aspect-square'
      }
    },
    {
      square: true,
      size: 'md',
      class: {
        base: 'px-1 py-1 min-w-[28px] aspect-square'
      }
    },
    {
      square: true,
      size: 'lg',
      class: {
        base: 'px-1.5 py-1.5 min-w-[32px] aspect-square'
      }
    }
  ],
  defaultVariants: {
    variant: 'primary',
    tone: 'default',
    size: 'md',
    loading: false,
    block: false,
    square: false,
    disabled: false
  }
})

// Export types for TypeScript support
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'monochromePlain'
export type ButtonTone = 'default' | 'success' | 'critical'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
