<script setup lang="ts">
import { computed } from 'vue'
import theme from '../themes/button'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button'
})

const ui = computed(() => theme({
  variant: props.variant,
  size: props.size,
  disabled: props.disabled
}))
</script>

<template>
  <button
    :class="ui"
    :disabled="disabled"
    :type="type"
  >
    <slot />
  </button>
</template>
