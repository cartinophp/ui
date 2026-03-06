import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'w-full',
    list: 'relative flex items-center overflow-x-auto -webkit-overflow-scrolling-touch scrollbar-none',
    trigger:
      'inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shrink-0',
    content: ''
  },
  variants: {
    variant: {
      line: {
        list: 'border-b border-border',
        trigger:
          'relative font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-primary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:-mb-px'
      },
      pill: {
        list: 'bg-muted p-1 rounded-lg',
        trigger:
          'group rounded-md font-medium text-muted-foreground hover:text-foreground data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow-sm'
      },
      card: {
        list: '',
        trigger:
          'rounded-t-lg border border-b-0 border-border font-medium bg-muted/50 text-muted-foreground hover:bg-background hover:text-foreground data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:border-b data-[active=true]:border-b-background'
      }
    },
    size: {
      sm: {
        list: 'gap-2 sm:gap-3',
        trigger: 'text-xs sm:text-sm h-8 sm:h-7 px-2 sm:px-2.5',
        content: 'mt-2 sm:mt-3'
      },
      md: {
        list: 'gap-3 sm:gap-4',
        trigger: 'text-sm h-9 sm:h-8 px-2.5 sm:px-3',
        content: 'mt-3 sm:mt-4'
      },
      lg: {
        list: 'gap-4 sm:gap-5',
        trigger: 'text-base sm:text-sm h-10 sm:h-9 px-3 sm:px-4',
        content: 'mt-4 sm:mt-5'
      },
    },
    orientation: {
      horizontal: {
        list: 'flex-row',
        trigger: 'flex-row'
      },
      vertical: {
        root: 'flex flex-row gap-3 sm:gap-4',
        list: 'flex-col items-start overflow-x-visible',
        trigger: 'w-full justify-start'
      }
    }
  },
  compoundVariants: [
    {
      variant: 'line',
      size: 'sm',
      class: { trigger: 'pb-2.5 px-1' }
    },
    {
      variant: 'line',
      size: 'md',
      class: { trigger: 'pb-3 px-1' }
    },
    {
      variant: 'line',
      size: 'lg',
      class: { trigger: 'pb-3.5 px-1.5' }
    },
    {
      variant: 'pill',
      size: 'sm',
      class: { list: 'p-0.5 gap-0.5 sm:p-1 sm:gap-1' }
    },
    {
      variant: 'pill',
      size: 'md',
      class: { list: 'p-1 gap-1' }
    },
    {
      variant: 'pill',
      size: 'lg',
      class: { list: 'p-1 gap-1 sm:p-1.5 sm:gap-1' }
    },
    {
      variant: 'card',
      size: 'sm',
      class: { list: 'gap-1 sm:gap-1.5' }
    },
    {
      variant: 'card',
      size: 'md',
      class: { list: 'gap-1.5 sm:gap-2' }
    },
    {
      variant: 'card',
      size: 'lg',
      class: { list: 'gap-2' }
    },
    {
      variant: 'line',
      orientation: 'vertical',
      class: {
        list: 'border-b-0 border-r gap-0',
        trigger:
          'pb-0 pr-3 pl-1 border-b-0 data-[active=true]:border-r-2 data-[active=true]:border-b-0 data-[active=true]:-mr-px'
      }
    }
  ],
  defaultVariants: {
    variant: 'line',
    size: 'md',
    orientation: 'horizontal'
  }
})
