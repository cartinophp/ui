import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    content:
      'z-50 rounded-md bg-popover p-4 shadow-lg border border-border focus:outline-none pointer-events-auto data-[state=open]:animate-[fade-in_150ms_ease-out] data-[state=closed]:animate-[fade-out_150ms_ease-in]',
    arrow: 'fill-popover'
  }
})
