import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    content: 'z-50 min-w-[200px] overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-xl animate-in fade-in-80',
    item: 'relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2.5 text-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    itemIcon: 'size-4 shrink-0',
    itemLabel: 'flex-1',
    itemShortcut: 'ml-auto text-xs tracking-widest opacity-60',
    separator: 'mx-2 my-1.5 h-px bg-border',
    label: 'px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'
  },
  defaultVariants: {}
})
