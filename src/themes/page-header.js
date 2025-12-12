import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative border-b border-gray-200 py-8',
    container: '',
    wrapper: 'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4',
    headline: 'mb-2.5 text-sm font-semibold text-primary-600 flex items-center gap-1.5',
    title: 'text-3xl sm:text-4xl font-bold text-gray-900',
    description: 'text-lg text-gray-600',
    links: 'flex flex-wrap items-center gap-1.5'
  },
  variants: {
    title: {
      true: {
        description: 'mt-4'
      }
    }
  },
  defaultVariants: {
    title: false
  }
})
