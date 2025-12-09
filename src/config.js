/**
 * Cartino UI Configuration
 * Central configuration for the UI library
 */

import type { ThemeConfig } from './runtime/types/theme'

/**
 * @deprecated Use ThemeConfig instead
 */
  /** Enable/disable transitions */
  transitions?: boolean
  /** Available theme colors */
  colors?: string[]
}

// Global theme config
let currentTheme: ThemeConfig = {}

/**
 * Define a custom theme configuration
 * This is the main way to customize CartinoPHP UI
 *
 * @example
 * ```typescript
 * // cartino-ui.config.js
 * import { defineTheme } from '@cartino/ui'
 *
 * export default defineTheme({
 *   colors: {
 *     primary: 'blue',
 *     secondary: 'purple'
 *   },
 *   components: {
 *     button: {
 *       variants: {
 *         color: {
 *           brand: 'bg-gradient-to-r from-blue-500 to-purple-500'
 *         }
 *       }
 *     }
 *   }
 * })
 * ```
 */
export function defineTheme(config: ThemeConfig): ThemeConfig {
  currentTheme = config
  return config
}

/**
 * Get the current theme configuration
 */
export function getTheme(): ThemeConfig {
  return currentTheme
}

/**
 * Update the current theme at runtime
 */
export function setTheme(config: Partial<ThemeConfig>): void {
  currentTheme = { ...currentTheme, ...config }
}

/**
 * @deprecated Use defineTheme instead
 */
export const defaultConfig: Required<CartinoUIConfig> = {
  transitions: true,
  colors: ['primary', 'success', 'warning', 'danger', 'info']
}

/**
 * @deprecated Use defineTheme instead
 */
export function defineConfig(config: Partial<CartinoUIConfig>) {
  return { ...defaultConfig, ...config }
}

/**
 * @deprecated Use getTheme instead
 */
export function getConfig(): Required<CartinoUIConfig> {
  return defaultConfig
}
