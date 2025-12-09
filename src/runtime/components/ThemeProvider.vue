
<script setup>
import { computed, provide } from 'vue'
import { THEME_CONFIG_KEY, getDefaultTheme } from '../composables/useTheme'
import { defu } from 'defu'

const props = defineProps()

// Merge user theme with defaults
const themeConfig = computed(() => {
  return defu(props.theme || {}, getDefaultTheme())
})

// Provide theme to all descendants
provide(THEME_CONFIG_KEY, themeConfig)
</script>

<template>
  <slot />
</template>
