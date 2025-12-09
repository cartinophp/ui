/**
 * Theme Composable
 * Provides access to theme configuration throughout the application
 */

import { inject, computed, type ComputedRef, type InjectionKey } from 'vue'
import type { ThemeConfig, ComponentTheme, IconConfig, ColorMapping } from '../types/theme'
import { defu } from 'defu'

export const THEME_CONFIG_KEY: InjectionKey<ComputedRef<ThemeConfig>> = Symbol('cartino-ui-theme')

/**
 * Access the global theme configuration
 */
export function useThemeConfig(): ThemeConfig {
  const themeConfig = inject(THEME_CONFIG_KEY, null)

  if (!themeConfig) {
    // Return default config if no provider is found
    return getDefaultTheme()
  }

  return themeConfig.value
}

/**
 * Access theme configuration for a specific component
 */
export function useTheme(componentName: string) {
  const themeConfig = useThemeConfig()

  return {
    /** Component-specific theme overrides */
    theme: computed<ComponentTheme>(() =>
      themeConfig.components?.[componentName] || {}
    ),

    /** Global color configuration */
    colors: computed<ColorMapping>(() =>
      themeConfig.colors || {}
    ),

    /** Global icon configuration */
    icons: computed<IconConfig>(() =>
      themeConfig.icons || getDefaultIcons()
    ),

    /** Global prefix */
    prefix: computed<string>(() =>
      themeConfig.prefix || 'ui-'
    ),

    /** Transitions enabled */
    transitions: computed<boolean>(() =>
      themeConfig.transitions !== false
    )
  }
}

/**
 * Merge component theme with user overrides
 */
export function mergeTheme<T extends Record<string, any>>(
  baseTheme: T,
  userTheme?: ComponentTheme
): T {
  if (!userTheme || Object.keys(userTheme).length === 0) {
    return baseTheme
  }

  return defu(userTheme, baseTheme) as T
}

/**
 * Get default theme configuration
 */
export function getDefaultTheme(): ThemeConfig {
  return {
    prefix: 'ui-',
    transitions: true,
    colors: {
      primary: 'blue',
      secondary: 'violet',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate'
    },
    icons: getDefaultIcons(),
    components: {}
  }
}

/**
 * Get default icon configuration
 */
export function getDefaultIcons(): IconConfig {
  return {
    // Loading & States
    loading: 'i-heroicons-arrow-path',
    check: 'i-heroicons-check',
    close: 'i-heroicons-x-mark',
    info: 'i-heroicons-information-circle',
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-triangle',
    error: 'i-heroicons-x-circle',

    // Navigation
    chevronDown: 'i-heroicons-chevron-down',
    chevronUp: 'i-heroicons-chevron-up',
    chevronLeft: 'i-heroicons-chevron-left',
    chevronRight: 'i-heroicons-chevron-right',
    chevronDoubleLeft: 'i-heroicons-chevron-double-left',
    chevronDoubleRight: 'i-heroicons-chevron-double-right',

    // Actions
    search: 'i-heroicons-magnifying-glass',
    filter: 'i-heroicons-funnel',
    sort: 'i-heroicons-bars-arrow-up',
    add: 'i-heroicons-plus',
    remove: 'i-heroicons-minus',
    edit: 'i-heroicons-pencil',
    delete: 'i-heroicons-trash'
  }
}
