import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'space-y-3',
    label: 'block text-sm font-medium text-gray-900 mb-2',
    description: 'text-sm text-gray-600 mb-3',
    items: '',
    error: 'text-sm text-red-600 mt-2'
  },
  variants: {
    orientation: {
      vertical: {
        items: 'flex flex-col gap-3'
      },
      horizontal: {
        items: 'flex flex-row flex-wrap gap-4'
      }
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})
