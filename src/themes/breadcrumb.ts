import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: '',
    list: 'flex items-center gap-x-1.5',
    item: 'flex items-center gap-x-1.5',
    link: 'flex items-center gap-x-1.5 group relative focus:outline-none focus-visible:outline-none',
    linkLeadingIcon: 'shrink-0',
    linkLeadingAvatar: 'shrink-0',
    linkLabel: 'text-sm font-medium truncate',
    linkTrailingIcon: 'shrink-0',
    separator: 'flex',
    separatorIcon: 'shrink-0 text-gray-400'
  },
  variants: {
    active: {
      true: {
        linkLabel: 'text-gray-900'
      },
      false: {
        linkLabel: 'text-gray-500 group-hover:text-gray-700'
      }
    },
    disabled: {
      true: {
        link: 'cursor-not-allowed opacity-50',
        linkLabel: 'text-gray-400'
      }
    },
    to: {
      true: {
        link: 'cursor-pointer'
      },
      false: {
        link: 'cursor-default'
      }
    }
  },
  defaultVariants: {
    active: false,
    disabled: false,
    to: false
  }
})
