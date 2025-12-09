/**
 * Theme Presets
 * Pre-configured themes for CartinoPHP UI
 */

export { defaultPreset, default as presetDefault } from './default'
export { minimalPreset, default as presetMinimal } from './minimal'
export { modernPreset, default as presetModern } from './modern'

import type { ThemePreset } from '../runtime/types/theme'
import { defaultPreset } from './default'
import { minimalPreset } from './minimal'
import { modernPreset } from './modern'

/**
 * All available theme presets
 */
export const presets: Record<string, ThemePreset> = {
  default: defaultPreset,
  minimal: minimalPreset,
  modern: modernPreset
}

/**
 * Get a preset by name
 */
export function getPreset(name: string): ThemePreset | undefined {
  return presets[name]
}

/**
 * List all available preset names
 */
export function listPresets(): string[] {
  return Object.keys(presets)
}
