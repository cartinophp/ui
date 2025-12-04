<script lang="ts">
export interface ThemeProviderProps {
  /**
   * Theme configuration to provide to all child components
   */
  theme?: import('../types/theme').ThemeConfig
}
</script>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { THEME_CONFIG_KEY, getDefaultTheme } from '../composables/useTheme'
import type { ThemeConfig } from '../types/theme'
import { defu } from 'defu'

const props = defineProps<ThemeProviderProps>()

// Merge user theme with defaults
const themeConfig = computed<ThemeConfig>(() => {
  return defu(props.theme || {}, getDefaultTheme())
})

// Provide theme to all descendants
provide(THEME_CONFIG_KEY, themeConfig)
</script>

<template>
  <slot />
</template>
