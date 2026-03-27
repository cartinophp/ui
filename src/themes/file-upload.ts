import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    root: 'relative flex flex-col',
    base: 'w-full flex-1 bg-background border border-border flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2 focus-visible:outline-primary transition-all',
    wrapper: 'flex flex-col items-center justify-center text-center',
    icon: 'shrink-0',
    avatar: 'shrink-0',
    label: 'font-medium text-foreground',
    description: 'text-muted-foreground',
    actions: 'flex flex-wrap gap-1.5 shrink-0',
    files: '',
    file: 'relative',
    fileLeadingAvatar: 'shrink-0',
    fileWrapper: 'flex flex-col min-w-0',
    fileName: 'text-foreground truncate',
    fileSize: 'text-muted-foreground truncate',
    fileTrailingButton: ''
  },
  variants: {
    variant: {
      area: {
        wrapper: 'px-3 py-2 sm:px-4 sm:py-3',
        base: 'p-3 sm:p-4'
      },
      button: {}
    },
    size: {
      sm: {
        base: 'text-xs sm:text-xs',
        icon: 'size-5 sm:size-4',
        label: 'mt-1.5 text-xs',
        description: 'mt-0.5 text-xs',
        actions: 'mt-3 gap-1',
        file: 'text-xs px-2.5 py-1.5 gap-1.5',
        fileWrapper: 'flex-row gap-1',
        fileSize: 'text-[10px]'
      },
      md: {
        base: 'text-sm',
        icon: 'size-6 sm:size-5',
        label: 'mt-2 text-sm',
        description: 'mt-1 text-xs sm:text-sm',
        actions: 'mt-4 gap-1.5',
        file: 'text-xs px-2.5 py-1.5 gap-1.5',
        fileSize: 'text-xs'
      },
      lg: {
        base: 'text-base sm:text-sm',
        icon: 'size-8 sm:size-6',
        label: 'mt-2.5 text-base sm:text-sm',
        description: 'mt-1 text-sm',
        actions: 'mt-5 gap-2',
        file: 'text-sm px-3 py-2 gap-2',
        fileSize: 'text-xs'
      },
    },
    layout: {
      list: {
        root: 'gap-2 sm:gap-3 items-start',
        files: 'flex flex-col w-full gap-2',
        file: 'min-w-0 flex items-center border border-border rounded-md w-full',
        fileTrailingButton: 'ms-auto'
      },
      grid: {
        files: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2',
        file: 'aspect-square',
        fileWrapper: 'hidden',
        fileLeadingAvatar: 'size-full rounded-lg',
        fileTrailingButton:
          'absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-background'
      }
    },
    position: {
      inside: '',
      outside: ''
    },
    dropzone: {
      true: 'border-dashed data-[dragging=true]:bg-muted/50'
    },
    interactive: {
      true: 'cursor-pointer hover:bg-muted/50 active:bg-muted/70'
    },
    highlight: {
      true: 'border-primary ring-2 ring-primary/20'
    },
    multiple: {
      true: ''
    },
    disabled: {
      true: 'cursor-not-allowed opacity-75 pointer-events-none'
    }
  },
  compoundVariants: [
    {
      size: 'sm',
      layout: 'list',
      class: { fileTrailingButton: '-me-1.5' }
    },
    {
      size: 'md',
      layout: 'list',
      class: { fileTrailingButton: '-me-1.5' }
    },
    {
      size: 'lg',
      layout: 'list',
      class: { fileTrailingButton: '-me-2' }
    },
    {
      variant: 'button',
      size: 'sm',
      class: { base: 'p-1 sm:p-1.5' }
    },
    {
      variant: 'button',
      size: 'md',
      class: { base: 'p-1.5 sm:p-2' }
    },
    {
      variant: 'button',
      size: 'lg',
      class: { base: 'p-2 sm:p-3' }
    },
  ],
  defaultVariants: {
    variant: 'area',
    size: 'md',
    layout: 'list',
    position: 'outside',
    dropzone: true,
    interactive: true,
    multiple: false,
    disabled: false
  }
})
