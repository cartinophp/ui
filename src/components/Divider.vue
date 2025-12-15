<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/divider'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error'
  label?: string
  align?: 'start' | 'center' | 'end'
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  size: 'md',
  color: 'default',
  align: 'center'
})

const ui = computed(() => theme({
  orientation: props.orientation,
  variant: props.variant,
  size: props.size,
  color: props.color,
  align: props.align,
  withLabel: !!props.label
}))
</script>

<template>
  <div
    v-if="label"
    :class="ui.wrapper()"
    :role="label ? 'separator' : undefined"
    v-bind="$attrs"
  >
    <div :class="ui.root()"></div>
    <span :class="ui.label()">{{ label }}</span>
    <div :class="ui.root()"></div>
  </div>

  <div
    v-else
    :class="ui.root()"
    :role="label ? 'separator' : undefined"
    v-bind="$attrs"
  ></div>
</template>
