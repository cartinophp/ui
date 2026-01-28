import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    base: 'relative group rounded-md inline-flex items-center justify-between w-full transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
    value: 'truncate pointer-events-none text-foreground',
    placeholder: 'truncate text-muted-foreground',
    leading: 'shrink-0 flex items-center',
    leadingIcon: 'shrink-0',
    trailing: 'ms-auto inline-flex items-center shrink-0',
    trailingIcon:
      'shrink-0 transition-transform group-data-[state=open]:rotate-180',
    content:
      'z-50 max-h-[min(50vh,15rem)] sm:max-h-60 w-[min(var(--reka-select-trigger-width),calc(100vw-2rem))] sm:w-[var(--reka-select-trigger-width)] bg-popover shadow-lg rounded-md border border-border overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-[var(--reka-select-content-transform-origin)] pointer-events-auto flex flex-col',
    viewport:
      'relative divide-y divide-border scroll-py-1 overflow-y-auto flex-1',
    group: 'p-1 isolate',
    label: 'font-semibold text-foreground',
    separator: '-mx-1 my-1 h-px bg-border',
    item: 'group/item relative w-full flex items-start gap-2 select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 text-foreground data-[highlighted]:text-accent-foreground data-[highlighted]:before:bg-accent transition-colors before:transition-colors cursor-default',
    itemLeadingIcon:
      'shrink-0 text-muted-foreground group-data-[highlighted]/item:text-foreground transition-colors',
    itemWrapper: 'flex-1 flex flex-col min-w-0',
    itemLabel: 'truncate',
    itemDescription: 'truncate text-muted-foreground',
    itemTrailing: 'ms-auto inline-flex items-center shrink-0',
    itemTrailingIcon: 'shrink-0'
  },
  variants: {
    size: {
      xs: {
        base: 'h-7 sm:h-6 px-2 py-1 text-xs gap-1',
        leadingIcon: 'size-3.5 sm:size-3',
        trailingIcon: 'size-3.5 sm:size-3',
        label: 'p-1 text-[10px]/3 gap-1',
        item: 'p-1 text-xs gap-1',
        itemLeadingIcon: 'size-3.5 sm:size-3',
        itemTrailingIcon: 'size-3.5 sm:size-3',
        itemDescription: 'text-[10px]'
      },
      sm: {
        base: 'h-8 sm:h-7 px-2.5 py-1.5 text-xs gap-1.5',
        leadingIcon: 'size-4 sm:size-3.5',
        trailingIcon: 'size-4 sm:size-3.5',
        label: 'p-1.5 text-[10px]/3 gap-1.5',
        item: 'p-1.5 text-xs gap-1.5',
        itemLeadingIcon: 'size-4 sm:size-3.5',
        itemTrailingIcon: 'size-4 sm:size-3.5',
        itemDescription: 'text-[10px]'
      },
      md: {
        base: 'h-10 sm:h-9 px-3 py-2 text-sm gap-2',
        leadingIcon: 'size-5 sm:size-4',
        trailingIcon: 'size-5 sm:size-4',
        label: 'p-1.5 text-xs gap-1.5',
        item: 'p-1.5 sm:p-2 text-sm gap-1.5',
        itemLeadingIcon: 'size-5 sm:size-4',
        itemTrailingIcon: 'size-5 sm:size-4',
        itemDescription: 'text-xs'
      },
      lg: {
        base: 'h-12 sm:h-11 px-4 py-2.5 text-base sm:text-sm gap-2',
        leadingIcon: 'size-5',
        trailingIcon: 'size-5',
        label: 'p-2 text-xs gap-2',
        item: 'p-2 text-base sm:text-sm gap-2',
        itemLeadingIcon: 'size-5',
        itemTrailingIcon: 'size-5',
        itemDescription: 'text-xs'
      },
      xl: {
        base: 'h-14 sm:h-12 px-5 py-3 text-lg sm:text-base gap-2.5',
        leadingIcon: 'size-6 sm:size-5',
        trailingIcon: 'size-6 sm:size-5',
        label: 'p-2.5 text-sm gap-2.5',
        item: 'p-2.5 text-lg sm:text-base gap-2.5',
        itemLeadingIcon: 'size-6 sm:size-5',
        itemTrailingIcon: 'size-6 sm:size-5',
        itemDescription: 'text-sm sm:text-xs'
      }
    },
    variant: {
      solid: {
        base: 'border border-primary bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus:ring-2 focus:ring-primary/50'
      },
      outline: {
        base: 'border border-border bg-background shadow-xs hover:bg-muted/50 focus:ring-2 focus:ring-ring'
      },
      soft: {
        base: 'border-0 bg-primary/10 text-primary hover:bg-primary/20 focus:ring-2 focus:ring-primary/50'
      },
      subtle: {
        base: 'border-0 bg-muted/50 text-foreground hover:bg-muted focus:ring-2 focus:ring-ring'
      },
      ghost: {
        base: 'border-0 bg-transparent hover:bg-muted/50 focus:ring-2 focus:ring-ring'
      },
      link: {
        base: 'border-0 bg-transparent p-0 text-primary hover:underline underline-offset-4 focus:ring-0'
      },
      none: {
        base: 'border-0 bg-transparent p-0 focus:ring-0'
      }
    },
    color: {
      primary: {
        base: 'focus:ring-primary focus:border-primary'
      },
      secondary: {
        base: 'focus:ring-secondary focus:border-secondary'
      },
      success: {
        base: 'border-success/50 text-success focus:ring-success focus:border-success'
      },
      warning: {
        base: 'border-warning/50 text-warning focus:ring-warning focus:border-warning'
      },
      error: {
        base: 'border-error/50 text-error focus:ring-error focus:border-error'
      },
      info: {
        base: 'border-info/50 text-info focus:ring-info focus:border-info'
      }
    },
    loading: {
      true: {
        base: 'cursor-wait'
      }
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed opacity-50'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'soft',
      color: 'success',
      class: {
        base: 'bg-success/10 text-success hover:bg-success/20 focus:ring-success/50'
      }
    },
    {
      variant: 'soft',
      color: 'warning',
      class: {
        base: 'bg-warning/10 text-warning hover:bg-warning/20 focus:ring-warning/50'
      }
    },
    {
      variant: 'soft',
      color: 'error',
      class: {
        base: 'bg-error/10 text-error hover:bg-error/20 focus:ring-error/50'
      }
    },
    {
      variant: 'soft',
      color: 'info',
      class: {
        base: 'bg-info/10 text-info hover:bg-info/20 focus:ring-info/50'
      }
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    loading: false,
    disabled: false
  }
})
