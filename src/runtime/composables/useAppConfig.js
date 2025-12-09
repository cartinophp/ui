/**
 * useAppConfig Composable
 * Provides access to global application configuration
 * Inspired by Nuxt's app.config pattern but for standalone Vue applications
 */

import { inject, computed, type ComputedRef, type InjectionKey } from 'vue'
import type { ThemeConfig, IconConfig, ColorMapping } from '../types/theme'
import { getDefaultTheme, getDefaultIcons, THEME_CONFIG_KEY } from './useTheme'

/**
 * AppConfig structure matching the global configuration
 */
  /** UI theme configuration */
  ui?: ThemeConfig

  /** Shorthand for colors (legacy support) */
  colors?: ColorMapping

  /** Shorthand for icons (legacy support) */
  icons?: IconConfig

  /** Custom app-specific config */
  [key: string]: any
}

/**
 * Injection key for app config
 */
export const APP_CONFIG_KEY: InjectionKey<ComputedRef<AppConfig>> = Symbol('cartino-ui-app-config')

/**
 * Access the global application configuration
 *
 * This composable provides access to:
 * - UI theme configuration
 * - Global colors
 * - Global icons
 * - Custom application settings
 *
 * @example
 * ```vue
 * <script setup>
 * const appConfig = useAppConfig()
 *
 * console.log(appConfig.ui?.colors?.primary) // 'blue'
 * console.log(appConfig.icons?.loading) // 'i-heroicons-arrow-path'
 * </script>
 * ```
 */
export function useAppConfig(): AppConfig {
  // Try to get from ThemeProvider first
  const themeConfig = inject(THEME_CONFIG_KEY, null)

  // Try to get from AppConfigProvider
  const appConfigProvider = inject(APP_CONFIG_KEY, null)

  if (appConfigProvider) {
    return appConfigProvider.value
  }

  // Fallback to theme config wrapped as AppConfig
  if (themeConfig) {
    return {
      ui: themeConfig.value,
      colors: themeConfig.value.colors,
      icons: themeConfig.value.icons
    }
  }

  // Return default config
  return getDefaultAppConfig()
}

/**
 * Access UI-specific configuration
 * Shorthand for appConfig.ui
 *
 * @example
 * ```vue
 * <script setup>
 * const ui = useUIConfig()
 *
 * console.log(ui.colors?.primary) // 'blue'
 * console.log(ui.components?.button) // button theme config
 * </script>
 * ```
 */
export function useUIConfig(): ThemeConfig {
  const appConfig = useAppConfig()
  return appConfig.ui || getDefaultTheme()
}

/**
 * Access colors configuration
 * Shorthand for appConfig.ui.colors or appConfig.colors
 *
 * @example
 * ```vue
 * <script setup>
 * const colors = useColors()
 *
 * console.log(colors.primary) // 'blue'
 * console.log(colors.success) // 'green'
 * </script>
 * ```
 */
export function useColors(): ColorMapping {
  const appConfig = useAppConfig()
  return appConfig.ui?.colors || appConfig.colors || {}
}

/**
 * Access icons configuration
 * Shorthand for appConfig.ui.icons or appConfig.icons
 *
 * @example
 * ```vue
 * <script setup>
 * const icons = useIcons()
 *
 * console.log(icons.loading) // 'i-heroicons-arrow-path'
 * console.log(icons.check) // 'i-heroicons-check'
 * </script>
 * ```
 */
export function useIcons(): IconConfig {
  const appConfig = useAppConfig()
  return appConfig.ui?.icons || appConfig.icons || getDefaultIcons()
}

/**
 * Get default app configuration
 */
function getDefaultAppConfig(): AppConfig {
  const defaultTheme = getDefaultTheme()

  return {
    ui: defaultTheme,
    colors: defaultTheme.colors,
    icons: defaultTheme.icons
  }
}

/**
 * Create a computed app config from a theme config
 * Useful for providers
 *
 * @example
 * ```vue
 * <script setup>
 * import { createAppConfig } from '@cartino/ui'
 *
 * const theme = defineTheme({ ... })
 * const appConfig = createAppConfig(theme)
 *
 * provide(APP_CONFIG_KEY, appConfig)
 * </script>
 * ```
 */
export function createAppConfig(themeConfig: ThemeConfig): AppConfig {
  return {
    ui: themeConfig,
    colors: themeConfig.colors,
    icons: themeConfig.icons
  }
}
