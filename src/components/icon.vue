<script setup lang="ts">
import { computed } from 'vue'
import iconTheme from '@/themes/icon'

export interface IconProps {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  class?: string | string[] | Record<string, boolean>
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md'
})

const ui = computed(() => iconTheme({
  size: props.size
}))

// Simple emoji detection
const isEmoji = computed(() => {
  return /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u.test(props.name)
})
</script>

<template>
  <!-- Emoji rendering -->
  <span
    v-if="isEmoji"
    :class="ui({ class: props.class })"
    role="img"
    aria-label="icon"
  >
    {{ name }}
  </span>

  <!-- Icon rendering (iconify/unocss pattern: i-heroicons-home, etc.) -->
  <i
    v-else
    :class="[name, ui({ class: props.class })]"
    aria-hidden="true"
  />
</template>
