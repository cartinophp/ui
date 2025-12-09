/**
 * useUI Composable
 * Provides access to component UI configuration with proper merging
 * Inspired by Nuxt UI's approach but with CartinoPHP-specific implementation
 */

import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { defu } from 'defu'
import type { ComponentTheme } from '../types/theme'
import { useTheme } from './useTheme'
import { tv } from '../utils/tv'

/**
 * Generic type for UI configuration
 */

/**
 * Props that include UI customization
 */
  ui?: UIConfig
  class?: any
}

/**
 * Options for useUI
 */
  /** Component name for theme lookup */
  component: string
  /** Base theme configuration */
  theme: any
  /** Component props */
  props?: WithUIProps
  /** Additional variants to merge */
  variants?: Record<string, any>
}

/**
 * Hook to access and merge UI configuration for a component
 *
 * This composable handles the merging of:
 * 1. Base theme from component files
 * 2. Global theme overrides from ThemeProvider
 * 3. Component instance props.ui overrides
 *
 * @example
 * ```vue
 * <script setup>
 * import baseTheme from '../../theme/button'
 *
 * const props = defineProps<ButtonProps>()
 *
 * const ui = useUI({
 *   component: 'button',
 *   theme: baseTheme,
 *   props,
 *   variants: {
 *     color: props.color,
 *     variant: props.variant,
 *     size: props.size
 *   }
 * })
 * </script>
 * ```
 */
export function useUI(options: UseUIOptions) {
  const { component, theme: baseTheme, props, variants = {} } = options

  // Get global theme overrides
  const { theme: globalTheme } = useTheme(component)

  return computed(() => {
    // 1. Start with base theme
    let merged = baseTheme

    // 2. Apply global theme overrides from ThemeProvider
    if (globalTheme.value && Object.keys(globalTheme.value).length > 0) {
      merged = defu(globalTheme.value, merged)
    }

    // 3. Apply component instance overrides (props.ui)
    if (props?.ui && Object.keys(props.ui).length > 0) {
      merged = defu(props.ui, merged)
    }

    // 4. Create TV instance with merged config
    const tvInstance = tv({
      extend: tv(merged),
      ...(props?.ui || {})
    })

    // 5. Apply variants and return
    return tvInstance(variants)
  })
}

/**
 * Simplified version for components without variants
 *
 * @example
 * ```vue
 * <script setup>
 * const ui = useUISlots('card', cardTheme, props)
 * </script>
 * ```
 */
export function useUISlots(
  component: string,
  theme: any,
  props?: WithUIProps
) {
  const { theme: globalTheme } = useTheme(component)

  return computed(() => {
    let merged = theme

    if (globalTheme.value && Object.keys(globalTheme.value).length > 0) {
      merged = defu(globalTheme.value, merged)
    }

    if (props?.ui && Object.keys(props.ui).length > 0) {
      merged = defu(props.ui, merged)
    }

    const tvInstance = tv({
      extend: tv(merged)
    })

    return tvInstance()
  })
}

/**
 * Extract and merge UI classes
 * Utility to work with class merging
 *
 * @example
 * ```typescript
 * const classes = mergeUIClasses(
 *   'base-class',
 *   props.class,
 *   ui.value.base
 * )
 * ```
 */
export function mergeUIClasses(...classes: any[]) {
  return classes.filter(Boolean).flat().join(' ')
}

/**
 * Get UI slot classes
 * Helper to extract classes for specific slots
 *
 * @example
 * ```vue
 * <div :class="getSlotClass(ui, 'base', props.class)">
 * ```
 */
export function getSlotClass(
  ui: MaybeRefOrGetter<any>,
  slot: string,
  additionalClasses?: any
) {
  const uiValue = toValue(ui)
  const slotFn = uiValue[slot]

  if (typeof slotFn === 'function') {
    return mergeUIClasses(slotFn(), additionalClasses)
  }

  return mergeUIClasses(slotFn, additionalClasses)
}
