import { tv } from 'tailwind-variants'

/**
 * Button Component Theme
 * iOS 6 / Apple Skeuomorphism style:
 * – Glossy gradient overlay (before pseudo-element)
 * – Inset top highlight + drop shadow
 * – Embossed text via text-shadow
 * – Beveled border with darker edge color
 * – Pressed state inverts gloss + inset shadow
 */
export default tv({
  slots: {
    base: 'relative overflow-hidden box-border inline-flex items-center justify-center gap-1.5 select-none cursor-pointer touch-manipulation transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
    label: 'relative z-10 transition-transform',
    leadingIcon:
      'relative z-10 shrink-0 -my-[2px] transition-transform grid place-items-center',
    trailingIcon:
      'relative z-10 shrink-0 -my-[2px] transition-transform grid place-items-center'
  },
  variants: {
    variant: {
      solid: {
        // Gloss overlay via ::before — reverses on :active
        base: [
          "before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:rounded-[inherit]",
          'before:bg-gradient-to-b before:from-white/30 before:via-transparent before:to-black/10',
          'active:before:from-black/15 active:before:via-transparent active:before:to-white/10',
          // Inset top highlight + soft drop shadow → deep inset on :active
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_4px_rgba(0,0,0,0.25),0_1px_1px_rgba(0,0,0,0.1)]',
          'active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(0,0,0,0.2)]'
        ].join(' '),
        label: 'active:translate-y-[1px]',
        leadingIcon: 'active:translate-y-[1px]',
        trailingIcon: 'active:translate-y-[1px]'
      },
      outline: {
        // Classic iOS "glass" button — light glossy gradient over neutral
        base: [
          'bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(238,238,238,0.88)_100%)]',
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.18)]',
          'active:bg-[linear-gradient(180deg,rgba(210,210,210,0.95)_0%,rgba(228,228,228,0.9)_100%)]',
          'active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(0,0,0,0.12)]'
        ].join(' '),
        label: 'active:translate-y-[1px]',
        leadingIcon: 'active:translate-y-[1px]',
        trailingIcon: 'active:translate-y-[1px]'
      },
      soft: {
        base: 'shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.1)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]',
        label: 'active:translate-y-[0.5px]',
        leadingIcon: 'active:translate-y-[0.5px]',
        trailingIcon: 'active:translate-y-[0.5px]'
      },
      ghost: 'bg-transparent',
      link: 'bg-transparent -mx-3 -my-1.5 hover:underline'
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      error: '',
      info: '',
      neutral: ''
    },
    size: {
      sm: {
        base: 'min-h-[32px] min-w-[32px] px-3 py-1.5 text-xs font-semibold rounded-xl sm:min-h-[28px] sm:min-w-[28px]',
        leadingIcon: 'size-4 sm:size-3.5',
        trailingIcon: 'size-4 sm:size-3.5'
      },
      md: {
        base: 'min-h-[36px] min-w-[36px] px-4 py-2 text-sm font-semibold rounded-xl sm:min-h-[32px] sm:min-w-[32px]',
        leadingIcon: 'size-4',
        trailingIcon: 'size-4'
      },
      lg: {
        base: 'min-h-[44px] min-w-[44px] px-5 py-2.5 text-base font-semibold rounded-2xl sm:min-h-[40px] sm:min-w-[40px]',
        leadingIcon: 'size-5 sm:size-4',
        trailingIcon: 'size-5 sm:size-4'
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
    // ===== SOLID — beveled border + embossed text =====
    {
      variant: 'solid',
      color: 'primary',
      class: {
        base: 'bg-primary text-primary-foreground border border-[var(--color-primary-700)] [text-shadow:0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-[1.05] active:brightness-[0.97]'
      }
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: {
        base: 'bg-secondary text-secondary-foreground border border-[var(--color-secondary-400)] [text-shadow:0_1px_0_rgba(255,255,255,0.5)]'
      }
    },
    {
      variant: 'solid',
      color: 'success',
      class: {
        base: 'bg-success text-success-foreground border border-[var(--color-success-700)] [text-shadow:0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-[1.05] active:brightness-[0.97]'
      }
    },
    {
      variant: 'solid',
      color: 'warning',
      class: {
        base: 'bg-warning text-warning-foreground border border-[var(--color-warning-600)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)]'
      }
    },
    {
      variant: 'solid',
      color: 'error',
      class: {
        base: 'bg-error text-error-foreground border border-[var(--color-error-700)] [text-shadow:0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-[1.05] active:brightness-[0.97]'
      }
    },
    {
      variant: 'solid',
      color: 'info',
      class: {
        base: 'bg-info text-info-foreground border border-[var(--color-info-700)] [text-shadow:0_-1px_0_rgba(0,0,0,0.2)] hover:brightness-[1.05] active:brightness-[0.97]'
      }
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: {
        base: 'bg-foreground text-background border border-[var(--color-secondary-700)] [text-shadow:0_-1px_0_rgba(0,0,0,0.3)] hover:brightness-[1.05] active:brightness-[0.97]'
      }
    },

    // ===== OUTLINE — glass tinted border =====
    {
      variant: 'outline',
      color: 'primary',
      class: {
        base: 'text-primary border border-primary/35 hover:border-primary/55'
      }
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: {
        base: 'text-secondary-foreground border border-border'
      }
    },
    {
      variant: 'outline',
      color: 'success',
      class: {
        base: 'text-success border border-success/35 hover:border-success/55'
      }
    },
    {
      variant: 'outline',
      color: 'warning',
      class: {
        base: 'text-warning border border-warning/35 hover:border-warning/55'
      }
    },
    {
      variant: 'outline',
      color: 'error',
      class: {
        base: 'text-error border border-error/35 hover:border-error/55'
      }
    },
    {
      variant: 'outline',
      color: 'info',
      class: {
        base: 'text-info border border-info/35 hover:border-info/55'
      }
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: {
        base: 'text-foreground border border-border'
      }
    },

    // ===== SOFT =====
    {
      variant: 'soft',
      color: 'primary',
      class: {
        base: 'bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30'
      }
    },
    {
      variant: 'soft',
      color: 'secondary',
      class: {
        base: 'bg-secondary/10 text-secondary hover:bg-secondary/20 active:bg-secondary/30'
      }
    },
    {
      variant: 'soft',
      color: 'success',
      class: {
        base: 'bg-success/10 text-success hover:bg-success/20 active:bg-success/30'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        base: 'bg-warning/10 text-warning hover:bg-warning/20 active:bg-warning/30'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        base: 'bg-error/10 text-error hover:bg-error/20 active:bg-error/30'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        base: 'bg-info/10 text-info hover:bg-info/20 active:bg-info/30'
      }
    },
    {
      variant: 'soft',
      color: 'neutral',
      class: {
        base: 'bg-muted text-foreground hover:bg-accent active:bg-accent/80'
      }
    },

    // ===== GHOST =====
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        base: 'text-primary hover:bg-primary/10 active:bg-primary/20'
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        base: 'text-secondary hover:bg-secondary/10 active:bg-secondary/20'
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        base: 'text-success hover:bg-success/10 active:bg-success/20'
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        base: 'text-warning hover:bg-warning/10 active:bg-warning/20'
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        base: 'text-error hover:bg-error/10 active:bg-error/20'
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        base: 'text-info hover:bg-info/10 active:bg-info/20'
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        base: 'text-foreground hover:bg-accent active:bg-accent/80'
      }
    },

    // ===== LINK =====
    {
      variant: 'link',
      color: 'primary',
      class: {
        base: 'text-primary hover:text-primary/80 active:text-primary/70'
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        base: 'text-secondary hover:text-secondary/80 active:text-secondary/70'
      }
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        base: 'text-success hover:text-success/80 active:text-success/70'
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        base: 'text-warning hover:text-warning/80 active:text-warning/70'
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        base: 'text-error hover:text-error/80 active:text-error/70'
      }
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        base: 'text-info hover:text-info/80 active:text-info/70'
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      class: {
        base: 'text-foreground hover:text-foreground/80 active:text-foreground/70'
      }
    },

    // ===== ICON ONLY (SQUARE) =====
    {
      square: true,
      class: {
        leadingIcon: 'my-0',
        trailingIcon: 'my-0'
      }
    },
    {
      square: true,
      size: 'sm',
      class: {
        base: 'px-1 py-1 min-w-[28px] sm:min-w-[24px] aspect-square'
      }
    },
    {
      square: true,
      size: 'md',
      class: {
        base: 'px-1 py-1 min-w-[32px] sm:min-w-[28px] aspect-square'
      }
    },
    {
      square: true,
      size: 'lg',
      class: {
        base: 'px-1.5 py-1.5 min-w-[40px] sm:min-w-[36px] aspect-square'
      }
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    loading: false,
    block: false,
    square: false,
    disabled: false
  }
})

export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral'
export type ButtonSize = 'sm' | 'md' | 'lg'
