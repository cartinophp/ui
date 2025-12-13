import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative flex items-center select-none touch-none',
    track: 'relative grow rounded-full bg-gray-200',
    range: 'absolute rounded-full bg-primary-500',
    thumb: 'block rounded-full bg-white border-2 border-primary-500 hover:border-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
  },
  variants: {
    size: {
      xs: {
        thumb: 'size-3'
      },
      sm: {
        thumb: 'size-3.5'
      },
      md: {
        thumb: 'size-4'
      },
      lg: {
        thumb: 'size-4.5'
      },
      xl: {
        thumb: 'size-5'
      }
    },
    color: {
      primary: {
        range: 'bg-primary-500',
        thumb: 'border-primary-500 hover:border-primary-600 focus-visible:ring-primary-500'
      },
      secondary: {
        range: 'bg-gray-500',
        thumb: 'border-gray-500 hover:border-gray-600 focus-visible:ring-gray-500'
      },
      success: {
        range: 'bg-green-500',
        thumb: 'border-green-500 hover:border-green-600 focus-visible:ring-green-500'
      },
      info: {
        range: 'bg-blue-500',
        thumb: 'border-blue-500 hover:border-blue-600 focus-visible:ring-blue-500'
      },
      warning: {
        range: 'bg-yellow-500',
        thumb: 'border-yellow-500 hover:border-yellow-600 focus-visible:ring-yellow-500'
      },
      error: {
        range: 'bg-red-500',
        thumb: 'border-red-500 hover:border-red-600 focus-visible:ring-red-500'
      },
      neutral: {
        range: 'bg-gray-400',
        thumb: 'border-gray-400 hover:border-gray-500 focus-visible:ring-gray-400'
      }
    },
    orientation: {
      horizontal: {
        root: 'w-full',
        track: 'h-1.5'
      },
      vertical: {
        root: 'h-full flex-col',
        track: 'w-1.5'
      }
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed'
      }
    }
  },
  compoundVariants: [
    // Track height by size for horizontal
    {
      orientation: 'horizontal',
      size: 'xs',
      class: { track: 'h-1' }
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      class: { track: 'h-1.5' }
    },
    {
      orientation: 'horizontal',
      size: 'md',
      class: { track: 'h-2' }
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      class: { track: 'h-2.5' }
    },
    {
      orientation: 'horizontal',
      size: 'xl',
      class: { track: 'h-3' }
    },
    // Track width by size for vertical
    {
      orientation: 'vertical',
      size: 'xs',
      class: { track: 'w-1' }
    },
    {
      orientation: 'vertical',
      size: 'sm',
      class: { track: 'w-1.5' }
    },
    {
      orientation: 'vertical',
      size: 'md',
      class: { track: 'w-2' }
    },
    {
      orientation: 'vertical',
      size: 'lg',
      class: { track: 'w-2.5' }
    },
    {
      orientation: 'vertical',
      size: 'xl',
      class: { track: 'w-3' }
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    orientation: 'horizontal',
    disabled: false
  }
})
