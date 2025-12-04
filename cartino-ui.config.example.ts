/**
 * Example Theme Configuration for CartinoPHP UI
 * Copy this file to your project root as `cartino-ui.config.ts` and customize as needed
 */

import { defineTheme } from '@cartino/ui'

export default defineTheme({
  // ============================================
  // GLOBAL SETTINGS
  // ============================================

  /** Component prefix (results in <ui-button>, <ui-input>, etc.) */
  prefix: 'ui-',

  /** Enable smooth transitions globally */
  transitions: true,

  // ============================================
  // COLORS
  // ============================================

  colors: {
    /** Primary brand color */
    primary: 'blue',

    /** Secondary brand color */
    secondary: 'violet',

    /** Success state color */
    success: 'green',

    /** Info state color */
    info: 'blue',

    /** Warning state color */
    warning: 'yellow',

    /** Error state color */
    error: 'red',

    /** Neutral/default color */
    neutral: 'slate',

    // Add custom colors
    // brand: 'indigo',
    // accent: 'purple',
  },

  // ============================================
  // ICONS
  // ============================================

  icons: {
    // State Icons
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark',
    info: 'i-heroicons-information-circle',
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-triangle',
    error: 'i-heroicons-x-circle',

    // Navigation Icons
    chevronDown: 'i-heroicons-chevron-down',
    chevronUp: 'i-heroicons-chevron-up',
    chevronLeft: 'i-heroicons-chevron-left',
    chevronRight: 'i-heroicons-chevron-right',
    chevronDoubleLeft: 'i-heroicons-chevron-double-left',
    chevronDoubleRight: 'i-heroicons-chevron-double-right',

    // Action Icons
    search: 'i-heroicons-magnifying-glass',
    filter: 'i-heroicons-funnel',
    sort: 'i-heroicons-bars-arrow-up',
    add: 'i-heroicons-plus',
    remove: 'i-heroicons-minus',
    edit: 'i-heroicons-pencil',
    delete: 'i-heroicons-trash',

    // Add custom icons
    // heart: 'i-heroicons-heart',
    // star: 'i-heroicons-star',
  },

  // ============================================
  // COMPONENT CUSTOMIZATION
  // ============================================

  components: {
    // -----------------------------------------
    // Button Component
    // -----------------------------------------
    button: {
      // Customize slots (parts of the component)
      slots: {
        base: [
          // Add custom classes to the base button element
          // 'shadow-sm',
          // 'hover:shadow-md',
        ],
        label: [
          // Customize the button label
          // 'font-semibold',
        ],
        leadingIcon: [
          // Customize leading icons
        ],
        trailingIcon: [
          // Customize trailing icons
        ],
      },

      // Add or override variants
      variants: {
        color: {
          // Add custom color variant
          // brand: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600',
        },
        size: {
          // Add custom size variant
          // xxl: {
          //   base: 'px-8 py-4 text-2xl gap-3',
          //   leadingIcon: 'size-8',
          //   trailingIcon: 'size-8',
          // },
        },
        variant: {
          // Add custom style variant
          // neon: 'bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-lg shadow-cyan-400/50',
        },
      },

      // Compound variants (combinations)
      compoundVariants: [
        // Example: Special styling when color=primary and size=lg
        // {
        //   color: 'primary',
        //   size: 'lg',
        //   class: 'shadow-lg shadow-blue-500/50',
        // },
      ],

      // Default values
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md',
      },
    },

    // -----------------------------------------
    // Input Component
    // -----------------------------------------
    input: {
      slots: {
        base: [
          // 'transition-all',
          // 'duration-200',
        ],
      },
      variants: {
        size: {
          // xxl: {
          //   base: 'text-2xl px-6 py-4',
          // },
        },
      },
      defaultVariants: {
        variant: 'outline',
        size: 'md',
      },
    },

    // -----------------------------------------
    // Card Component
    // -----------------------------------------
    card: {
      slots: {
        base: [
          // 'rounded-2xl',
          // 'shadow-xl',
        ],
        header: [
          // 'border-b',
          // 'border-gray-200',
        ],
        body: [
          // 'p-6',
        ],
        footer: [
          // 'border-t',
          // 'border-gray-200',
        ],
      },
    },

    // -----------------------------------------
    // Add more component customizations here
    // -----------------------------------------

    // badge: { ... },
    // alert: { ... },
    // modal: { ... },
    // etc.
  },

  // ============================================
  // TAILWIND MERGE CONFIG
  // ============================================

  twMerge: {
    prefix: 'ui-',
    classGroups: {
      // Define custom class groups for better merging
      'font-size': [
        {
          text: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
        },
      ],
    },
  },
})
