import type { ClassValue, TVVariants, TVCompoundVariants, TVDefaultVariants } from 'tailwind-variants'

/**
 * Helper type to flatten intersection types for better IDE support
 */

/**
 * Widen variant values to allow string indexing
 */
  V extends Record<string, any>
    ? V & {
        [K in keyof V]: V[K] extends Record<string, any>
          ? V[K] & Record<string & {}, any>
          : V[K]
      }
    : V

/**
 * Extract variant names and their possible values from a theme
 */
  [K in keyof T['variants']]: keyof T['variants'][K]
}

/**
 * Extract slot class overrides from a theme
 */
  [K in keyof T['slots']]?: ClassValue
}>

/**
 * Generate callable UI functions for each slot
 */
  [K in keyof Required<T['slots']>]: (props?: Record<string, any>) => string
}>

/**
 * Main configuration type for components
 */
  variants: ThemeVariants<T>
  slots: ThemeSlots<T>
  ui: ThemeUI<T>
}
