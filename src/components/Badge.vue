<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/badge'

export interface BadgeProps {
  label?: string
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  variant?: 'solid' | 'soft' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  closable?: boolean
}

const props = withDefaults(defineProps<BadgeProps>(), {
  color: 'primary',
  variant: 'soft',
  size: 'md',
  rounded: false,
  closable: false
})

const emit = defineEmits<{
  close: []
}>()

const ui = computed(() => theme({
  variant: props.variant,
  color: props.color,
  size: props.size,
  rounded: props.rounded
}))

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <span :class="ui.root">
    <slot name="leading" />

    <span v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </span>

    <slot name="trailing" />

    <button
      v-if="closable"
      :class="ui.closeButton"
      @click="handleClose"
      aria-label="Close badge"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size === 'sm' ? 12 : size === 'md' ? 14 : 16"
        :height="size === 'sm' ? 12 : size === 'md' ? 14 : 16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </span>
</template>
