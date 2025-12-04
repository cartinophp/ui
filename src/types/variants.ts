import type { ClassValue, TVVariants, TVCompoundVariants, TVDefaultVariants } from 'tailwind-variants'

/**
 * Helper type to flatten intersection types for better IDE support
 */
type Flatten<T> = {} & { [P in keyof T]: T[P] }

/**
 * Widen variant values to allow string indexing
 */
type WidenVariants<V extends Record<string, any> | undefined> =
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
type ThemeVariants<T extends { variants?: Record<string, Record<string, any>> }> = {
  [K in keyof T['variants']]: keyof T['variants'][K]
}

/**
 * Extract slot class overrides from a theme
 */
type ThemeSlots<T extends { slots?: Record<string, any> }> = Flatten<{
  [K in keyof T['slots']]?: ClassValue
}>

/**
 * Generate callable UI functions for each slot
 */
type ThemeUI<T extends { slots?: Record<string, any> }> = Flatten<{
  [K in keyof Required<T['slots']>]: (props?: Record<string, any>) => string
}>

/**
 * Main configuration type for components
 */
export type ComponentTheme<T extends Record<string, any>> = {
  variants: ThemeVariants<T>
  slots: ThemeSlots<T>
  ui: ThemeUI<T>
}
