import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full overflow-x-auto -webkit-overflow-scrolling-touch',
    list: 'flex items-center flex-nowrap',
    item: 'flex items-center shrink-0',
    link: 'flex items-center group relative focus:outline-none focus-visible:outline-none',
    linkLeadingIcon: 'shrink-0',
    linkLeadingAvatar: 'shrink-0',
    linkLabel: 'font-medium truncate max-w-[120px] sm:max-w-[180px] md:max-w-none',
    linkTrailingIcon: 'shrink-0',
    separator: 'flex shrink-0',
    separatorIcon: 'shrink-0 text-muted-foreground'
  },
  variants: {
    size: {
      xs: {
        list: 'gap-x-1',
        item: 'gap-x-1',
        link: 'gap-x-1',
        linkLeadingIcon: 'size-3',
        linkLabel: 'text-xs',
        linkTrailingIcon: 'size-3',
        separatorIcon: 'size-3'
      },
      sm: {
        list: 'gap-x-1 sm:gap-x-1.5',
        item: 'gap-x-1 sm:gap-x-1.5',
        link: 'gap-x-1 sm:gap-x-1.5',
        linkLeadingIcon: 'size-3.5 sm:size-3',
        linkLabel: 'text-xs sm:text-sm',
        linkTrailingIcon: 'size-3.5 sm:size-3',
        separatorIcon: 'size-3.5 sm:size-3'
      },
      md: {
        list: 'gap-x-1.5',
        item: 'gap-x-1.5',
        link: 'gap-x-1.5',
        linkLeadingIcon: 'size-4 sm:size-3.5',
        linkLabel: 'text-sm',
        linkTrailingIcon: 'size-4 sm:size-3.5',
        separatorIcon: 'size-4 sm:size-3.5'
      },
      lg: {
        list: 'gap-x-2',
        item: 'gap-x-2',
        link: 'gap-x-2',
        linkLeadingIcon: 'size-5 sm:size-4',
        linkLabel: 'text-base sm:text-sm',
        linkTrailingIcon: 'size-5 sm:size-4',
        separatorIcon: 'size-5 sm:size-4'
      },
      xl: {
        list: 'gap-x-2.5',
        item: 'gap-x-2.5',
        link: 'gap-x-2.5',
        linkLeadingIcon: 'size-6 sm:size-5',
        linkLabel: 'text-lg sm:text-base',
        linkTrailingIcon: 'size-6 sm:size-5',
        separatorIcon: 'size-5'
      }
    },
    active: {
      true: {
        linkLabel: 'text-foreground'
      },
      false: {
        linkLabel: 'text-muted-foreground group-hover:text-foreground transition-colors'
      }
    },
    disabled: {
      true: {
        link: 'cursor-not-allowed opacity-50',
        linkLabel: 'text-muted-foreground/50'
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
    size: 'md',
    active: false,
    disabled: false,
    to: false
  }
})
