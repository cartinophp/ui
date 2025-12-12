<script setup>
import { computed } from 'vue'
import iconTheme from '../themes/icon'

const props = defineProps({
  name: {
    type: [String, Object],
    required: true
  },
  size: {
    type: String,
    default: 'md'
  },
  mode: {
    type: String,
    default: undefined
  },
  customize: {
    type: Function,
    default: undefined
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  }
})

const ui = computed(() => iconTheme({
  size: props.size
}))

// Check if name is a string (icon name) or component
const isString = computed(() => typeof props.name === 'string')

// Simple emoji detection
const isEmoji = computed(() => {
  if (!isString.value) return false
  return /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u.test(props.name)
})
</script>

<template>
  <!-- Emoji rendering -->
  <span
    v-if="isEmoji"
    :class="ui({ class: props.class })"
    role="img"
  >
    {{ props.name }}
  </span>

  <!-- Icon component (from iconify or nuxt/icon) -->
  <Icon
    v-else-if="isString"
    :name="props.name"
    :mode="props.mode"
    :customize="props.customize"
    :class="ui({ class: props.class })"
  />

  <!-- Custom component -->
  <component
    :is="props.name"
    v-else
    :class="ui({ class: props.class })"
  />
</template>
