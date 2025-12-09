import { fieldGroupVariant } from './field-group'

export default {
  slots: {
    base: ['rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75', 'transition-colors'],
    label: 'truncate',
    leadingIcon: 'shrink-0',
    leadingAvatar: 'shrink-0',
    leadingAvatarSize: '',
    trailingIcon: 'shrink-0'
  },
  variants: {
    ...fieldGroupVariant,
    color: {
      ...Object.fromEntries((['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => [color, ''])),
      neutral: ''
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
      link: ''
    },
    size: {
      xs: {
        base: 'px-2 py-1 text-xs gap-1',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4'
      },
      sm: {
        base: 'px-2.5 py-1.5 text-xs gap-1.5',
        leadingIcon: 'size-4',
        leadingAvatarSize: '3xs',
        trailingIcon: 'size-4'
      },
      md: {
        base: 'px-2.5 py-1.5 text-sm gap-1.5',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5'
      },
      lg: {
        base: 'px-3 py-2 text-sm gap-2',
        leadingIcon: 'size-5',
        leadingAvatarSize: '2xs',
        trailingIcon: 'size-5'
      },
      xl: {
        base: 'px-3 py-2 text-base gap-2',
        leadingIcon: 'size-6',
        leadingAvatarSize: 'xs',
        trailingIcon: 'size-6'
      }
    },
    block: {
      true: {
        base: 'w-full justify-center',
        trailingIcon: 'ms-auto'
      }
    },
    square: {
      true: ''
    },
    leading: {
      true: ''
    },
    trailing: {
      true: ''
    },
    loading: {
      true: ''
    },
    active: {
      true: {
        base: ''
      },
      false: {
        base: ''
      }
    }
  },
  compoundVariants: [...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'solid' as const,
    class: `text-inverted bg-${color} hover:bg-${color}/75 active:bg-${color}/75 disabled:bg-${color} aria-disabled:bg-${color} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`
  })), ...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'outline' as const,
    class: `ring ring-inset ring-${color}/50 text-${color} hover:bg-${color}/10 active:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
  })), ...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'soft' as const,
    class: `text-${color} bg-${color}/10 hover:bg-${color}/15 active:bg-${color}/15 focus:outline-none focus-visible:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10`
  })), ...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'subtle' as const,
    class: `text-${color} ring ring-inset ring-${color}/25 bg-${color}/10 hover:bg-${color}/15 active:bg-${color}/15 disabled:bg-${color}/10 aria-disabled:bg-${color}/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}`
  })), ...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'ghost' as const,
    class: `text-${color} hover:bg-${color}/10 active:bg-${color}/10 focus:outline-none focus-visible:bg-${color}/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent`
  })), ...(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => ({
    color,
    variant: 'link' as const,
    class: `text-${color} hover:text-${color}/75 active:text-${color}/75 disabled:text-${color} aria-disabled:text-${color} focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-${color}`
  })), {
    color: 'neutral' as const,
    variant: 'solid' as const,
    class: 'text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
  }, {
    color: 'neutral' as const,
    variant: 'outline' as const,
    class: 'ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
  }, {
    color: 'neutral' as const,
    variant: 'soft' as const,
    class: 'text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated'
  }, {
    color: 'neutral' as const,
    variant: 'subtle' as const,
    class: 'ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
  }, {
    color: 'neutral' as const,
    variant: 'ghost' as const,
    class: 'text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent'
  }, {
    color: 'neutral' as const,
    variant: 'link' as const,
    class: 'text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted'
  }, {
    size: 'xs' as const,
    square: true,
    class: 'p-1'
  }, {
    size: 'sm' as const,
    square: true,
    class: 'p-1.5'
  }, {
    size: 'md' as const,
    square: true,
    class: 'p-1.5'
  }, {
    size: 'lg' as const,
    square: true,
    class: 'p-2'
  }, {
    size: 'xl' as const,
    square: true,
    class: 'p-2'
  }, {
    loading: true,
    leading: true,
    class: {
      leadingIcon: 'animate-spin'
    }
  }, {
    loading: true,
    leading: false,
    trailing: true,
    class: {
      trailingIcon: 'animate-spin'
    }
  }],
  defaultVariants: {
    color: 'primary' as const,
    variant: 'solid' as const,
    size: 'md' as const
  }
} as const