import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative inline-flex shrink-0',
    base: 'rounded-full ring-1 ring-white flex items-center justify-center font-medium whitespace-nowrap'
  },
  variants: {
    color: {
      primary: {
        base: 'bg-primary-500 text-white'
      },
      secondary: {
        base: 'bg-gray-500 text-white'
      },
      success: {
        base: 'bg-green-500 text-white'
      },
      info: {
        base: 'bg-blue-500 text-white'
      },
      warning: {
        base: 'bg-yellow-500 text-white'
      },
      error: {
        base: 'bg-red-500 text-white'
      },
      neutral: {
        base: 'bg-gray-100 text-gray-900'
      }
    },
    size: {
      '3xs': {
        base: 'size-1.5'
      },
      '2xs': {
        base: 'size-2'
      },
      xs: {
        base: 'size-2.5 text-[8px]'
      },
      sm: {
        base: 'size-3 text-[10px]'
      },
      md: {
        base: 'size-4 text-xs'
      },
      lg: {
        base: 'size-5 text-sm'
      },
      xl: {
        base: 'size-6 text-base'
      },
      '2xl': {
        base: 'size-7 text-lg'
      },
      '3xl': {
        base: 'size-8 text-xl'
      }
    },
    position: {
      'top-right': {},
      'top-left': {},
      'bottom-right': {},
      'bottom-left': {}
    },
    inset: {
      true: {},
      false: {}
    },
    standalone: {
      true: {
        root: 'relative'
      },
      false: {
        base: 'absolute'
      }
    }
  },
  compoundVariants: [
    // Top-right positioning
    {
      position: 'top-right',
      inset: false,
      standalone: false,
      class: {
        base: 'top-0 right-0 transform translate-x-1/2 -translate-y-1/2'
      }
    },
    {
      position: 'top-right',
      inset: true,
      standalone: false,
      class: {
        base: 'top-0 right-0'
      }
    },
    // Top-left positioning
    {
      position: 'top-left',
      inset: false,
      standalone: false,
      class: {
        base: 'top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'
      }
    },
    {
      position: 'top-left',
      inset: true,
      standalone: false,
      class: {
        base: 'top-0 left-0'
      }
    },
    // Bottom-right positioning
    {
      position: 'bottom-right',
      inset: false,
      standalone: false,
      class: {
        base: 'bottom-0 right-0 transform translate-x-1/2 translate-y-1/2'
      }
    },
    {
      position: 'bottom-right',
      inset: true,
      standalone: false,
      class: {
        base: 'bottom-0 right-0'
      }
    },
    // Bottom-left positioning
    {
      position: 'bottom-left',
      inset: false,
      standalone: false,
      class: {
        base: 'bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2'
      }
    },
    {
      position: 'bottom-left',
      inset: true,
      standalone: false,
      class: {
        base: 'bottom-0 left-0'
      }
    }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    position: 'top-right',
    inset: false,
    standalone: false
  }
})
