import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative',
    container: 'flex items-center gap-x-4',
    left: 'flex-1',
    center: 'flex items-center justify-center gap-x-3',
    right: 'flex-1 flex justify-end',
    icon: 'shrink-0',
    title: 'text-sm font-medium',
    actions: 'flex items-center gap-x-2',
    close: 'shrink-0'
  },
  variants: {
    color: {
      primary: {
        root: 'bg-primary-500 text-white',
        icon: 'text-white/90',
        title: 'text-white'
      },
      success: {
        root: 'bg-green-500 text-white',
        icon: 'text-white/90',
        title: 'text-white'
      },
      warning: {
        root: 'bg-yellow-500 text-gray-900',
        icon: 'text-gray-900/90',
        title: 'text-gray-900'
      },
      error: {
        root: 'bg-red-500 text-white',
        icon: 'text-white/90',
        title: 'text-white'
      },
      neutral: {
        root: 'bg-gray-100 text-gray-900',
        icon: 'text-gray-700',
        title: 'text-gray-900'
      }
    },
    to: {
      true: {
        root: 'cursor-pointer hover:opacity-90 transition-opacity'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    to: false
  }
})
