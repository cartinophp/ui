<script setup>
import { computed } from 'vue'
import chipTheme from '@/themes/chip'

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'div'
  },
  text: {
    type: [String, Number],
    default: undefined
  },
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  position: {
    type: String,
    default: 'top-right'
  },
  inset: {
    type: Boolean,
    default: false
  },
  standalone: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: true
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:show'])

const slots = defineSlots()

const ui = computed(() => chipTheme({
  color: props.color,
  size: props.size,
  position: props.position,
  inset: props.inset,
  standalone: props.standalone
}))
</script>

<template>
  <component
    :is="props.as"
    v-if="show"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
  >
    <slot>
      <!-- Default slot wraps content -->
    </slot>

    <slot name="content">
      <span
        v-if="text !== undefined"
        data-slot="base"
        :class="ui.base({ class: props.ui?.base })"
      >
        {{ text }}
      </span>
    </slot>
  </component>
</template>
