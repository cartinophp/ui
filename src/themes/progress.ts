import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'gap-2',
    base: 'relative overflow-hidden rounded-full bg-muted',
    indicator:
      'rounded-full size-full transition-transform duration-200 ease-out',
    status: 'flex text-muted-foreground transition-[width] duration-200',
    steps: 'grid items-end',
    step: 'truncate text-end row-start-1 col-start-1 transition-opacity'
  },
  variants: {
    animation: {
      none: '',
      carousel: '',
      'carousel-inverse': '',
      swing: '',
      elastic: ''
    },
    color: {
      primary: {
        indicator: 'bg-primary',
        steps: 'text-primary'
      },
      secondary: {
        indicator: 'bg-secondary',
        steps: 'text-secondary'
      },
      success: {
        indicator: 'bg-success',
        steps: 'text-success'
      },
      warning: {
        indicator: 'bg-warning',
        steps: 'text-warning'
      },
      error: {
        indicator: 'bg-error',
        steps: 'text-error'
      },
      info: {
        indicator: 'bg-info',
        steps: 'text-info'
      },
      neutral: {
        indicator: 'bg-foreground',
        steps: 'text-foreground'
      }
    },
    size: {
      xs: {
        status: 'text-xs',
        steps: 'text-xs'
      },
      sm: {
        status: 'text-xs sm:text-sm',
        steps: 'text-xs sm:text-sm'
      },
      md: {
        status: 'text-sm',
        steps: 'text-sm'
      },
      lg: {
        status: 'text-base sm:text-sm',
        steps: 'text-base sm:text-sm'
      },
      xl: {
        status: 'text-lg sm:text-base',
        steps: 'text-lg sm:text-base'
      }
    },
    step: {
      active: {
        step: 'opacity-100'
      },
      first: {
        step: 'opacity-100 text-muted-foreground'
      },
      other: {
        step: 'opacity-0'
      },
      last: {
        step: ''
      }
    },
    orientation: {
      horizontal: {
        root: 'w-full flex flex-col',
        base: 'w-full',
        status: 'flex-row items-center justify-end min-w-fit'
      },
      vertical: {
        root: 'h-full flex flex-row-reverse',
        base: 'h-full',
        status: 'flex-col justify-end min-h-fit'
      }
    },
    inverted: {
      true: {
        status: 'self-end'
      }
    }
  },
  compoundVariants: [
    {
      inverted: true,
      orientation: 'horizontal',
      class: {
        step: 'text-start',
        status: 'flex-row-reverse'
      }
    },
    {
      inverted: true,
      orientation: 'vertical',
      class: {
        steps: 'items-start',
        status: 'flex-col-reverse'
      }
    },
    // Horizontal sizes
    { orientation: 'horizontal', size: 'xs', class: { base: 'h-0.5 sm:h-0.5' } },
    { orientation: 'horizontal', size: 'sm', class: { base: 'h-1 sm:h-1' } },
    { orientation: 'horizontal', size: 'md', class: { base: 'h-2 sm:h-1.5' } },
    { orientation: 'horizontal', size: 'lg', class: { base: 'h-3 sm:h-2' } },
    { orientation: 'horizontal', size: 'xl', class: { base: 'h-4 sm:h-3' } },
    // Vertical sizes
    { orientation: 'vertical', size: 'xs', class: { base: 'w-0.5 sm:w-0.5' } },
    { orientation: 'vertical', size: 'sm', class: { base: 'w-1 sm:w-1' } },
    { orientation: 'vertical', size: 'md', class: { base: 'w-2 sm:w-1.5' } },
    { orientation: 'vertical', size: 'lg', class: { base: 'w-3 sm:w-2' } },
    { orientation: 'vertical', size: 'xl', class: { base: 'w-4 sm:w-3' } },
    // Animations
    {
      orientation: 'horizontal',
      animation: 'carousel',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'vertical',
      animation: 'carousel',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'horizontal',
      animation: 'carousel-inverse',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'vertical',
      animation: 'carousel-inverse',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'horizontal',
      animation: 'swing',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'vertical',
      animation: 'swing',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'horizontal',
      animation: 'elastic',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]'
      }
    },
    {
      orientation: 'vertical',
      animation: 'elastic',
      class: {
        indicator: 'data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]'
      }
    }
  ],
  defaultVariants: {
    animation: 'none',
    color: 'primary',
    size: 'md',
    orientation: 'horizontal',
    inverted: false
  }
})
