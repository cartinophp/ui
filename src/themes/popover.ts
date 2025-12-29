import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    content: `
      relative
      z-[60]
      w-auto
      rounded-lg
      bg-white
      px-4 py-3
      text-gray-900
      shadow-lg
      border border-gray-200
      outline-none

      transition-opacity
      transition-transform
      duration-150
      ease-[cubic-bezier(0.2,0,0.2,1)]
      will-change-[opacity,transform]

      data-[state=closed]:opacity-0
      data-[state=closed]:scale-[0.96]
      data-[state=open]:opacity-100
      data-[state=open]:scale-100

      data-[side=top]:data-[state=closed]:translate-y-1
      data-[side=top]:data-[state=open]:translate-y-0

      data-[side=bottom]:data-[state=closed]:-translate-y-1
      data-[side=bottom]:data-[state=open]:translate-y-0

      data-[side=left]:data-[state=closed]:translate-x-1
      data-[side=left]:data-[state=open]:translate-x-0

      data-[side=right]:data-[state=closed]:-translate-x-1
      data-[side=right]:data-[state=open]:translate-x-0
    `,

    arrow: `
      absolute
      z-[59]
      h-2.5 w-2.5
      bg-white
      border border-gray-200
      shadow-[0_1px_2px_rgba(15,23,42,0.08)]
      rotate-45
      pointer-events-none

      data-[side=top]:-bottom-[6px]
      data-[side=top]:translate-y-1

      data-[side=bottom]:-top-[6px]
      data-[side=bottom]:-translate-y-1

      data-[side=left]:-right-[6px]
      data-[side=left]:translate-x-1

      data-[side=right]:-left-[6px]
      data-[side=right]:-translate-x-1
    `,
  },
});