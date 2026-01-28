import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'bg-default border border-default rounded-lg',
    iconContainer: 'rounded-lg shrink-0',
    icon: '',
    content: 'flex-1 min-w-0',
    label: 'font-medium text-muted-foreground truncate',
    value: 'font-bold text-foreground tracking-tight',
    prefix: 'text-muted-foreground',
    suffix: 'text-muted-foreground',
    description: 'text-muted-foreground truncate',
    change: 'flex items-center gap-1 font-medium',
    changeIcon: '',
    changePeriod: 'text-muted-foreground',
    progressContainer: 'flex items-center gap-2',
    progressTrack:
      'flex-1 h-1 bg-muted-foreground/10 rounded-full overflow-hidden',
    progressFill: 'h-full transition-all duration-300 ease-out',
    progressText: 'text-muted-foreground font-medium',
    trend: 'shrink-0'
  },
  variants: {
    size: {
      xs: {
        root: 'p-2 sm:p-2.5',
        iconContainer: 'p-1',
        icon: 'size-3 sm:size-3.5',
        label: 'text-[10px] sm:text-xs',
        value: 'text-base sm:text-lg',
        description: 'text-[10px]',
        change: 'text-[10px]',
        changeIcon: 'size-2.5',
        progressContainer: 'mt-1.5',
        progressText: 'text-[10px]'
      },
      sm: {
        root: 'p-2.5 sm:p-3',
        iconContainer: 'p-1.5',
        icon: 'size-4 sm:size-3.5',
        label: 'text-xs',
        value: 'text-lg sm:text-xl',
        description: 'text-xs',
        change: 'text-xs',
        changeIcon: 'size-3',
        progressContainer: 'mt-2',
        progressText: 'text-xs'
      },
      md: {
        root: 'p-3 sm:p-4',
        iconContainer: 'p-1.5 sm:p-2',
        icon: 'size-5 sm:size-4',
        label: 'text-xs sm:text-sm',
        value: 'text-xl sm:text-2xl',
        description: 'text-xs sm:text-sm',
        change: 'text-xs sm:text-sm',
        changeIcon: 'size-3 sm:size-3.5',
        progressContainer: 'mt-2',
        progressText: 'text-xs'
      },
      lg: {
        root: 'p-4 sm:p-5 lg:p-6',
        iconContainer: 'p-2 sm:p-2.5 lg:p-3',
        icon: 'size-6 sm:size-5 lg:size-6',
        label: 'text-sm',
        value: 'text-2xl sm:text-3xl',
        description: 'text-sm',
        change: 'text-sm',
        changeIcon: 'size-4 sm:size-3.5',
        progressContainer: 'mt-3',
        progressText: 'text-xs sm:text-sm'
      },
      xl: {
        root: 'p-5 sm:p-6 lg:p-8',
        iconContainer: 'p-2.5 sm:p-3 lg:p-4',
        icon: 'size-7 sm:size-6 lg:size-7',
        label: 'text-sm sm:text-base',
        value: 'text-3xl sm:text-4xl',
        description: 'text-sm sm:text-base',
        change: 'text-sm sm:text-base',
        changeIcon: 'size-4',
        progressContainer: 'mt-4',
        progressText: 'text-sm'
      }
    },
    color: {
      default: {
        iconContainer: 'bg-muted',
        icon: 'text-muted-foreground',
        progressFill: 'bg-foreground'
      },
      primary: {
        iconContainer: 'bg-primary/10',
        icon: 'text-primary',
        progressFill: 'bg-primary'
      },
      secondary: {
        iconContainer: 'bg-secondary/10',
        icon: 'text-secondary',
        progressFill: 'bg-secondary'
      },
      success: {
        iconContainer: 'bg-success/10',
        icon: 'text-success',
        progressFill: 'bg-success'
      },
      warning: {
        iconContainer: 'bg-warning/10',
        icon: 'text-warning',
        progressFill: 'bg-warning'
      },
      error: {
        iconContainer: 'bg-error/10',
        icon: 'text-error',
        progressFill: 'bg-error'
      },
      info: {
        iconContainer: 'bg-info/10',
        icon: 'text-info',
        progressFill: 'bg-info'
      }
    },
    orientation: {
      horizontal: {
        root: 'flex items-center gap-3 sm:gap-4'
      },
      vertical: {
        root: 'flex flex-col gap-1.5 sm:gap-2'
      }
    },
    changeType: {
      positive: {
        change: 'text-success'
      },
      negative: {
        change: 'text-error'
      },
      neutral: {
        change: 'text-muted-foreground'
      }
    },
    loading: {
      true: {
        value: 'animate-pulse bg-muted rounded h-8 w-20'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    orientation: 'vertical',
    changeType: 'neutral',
    loading: false
  }
})
