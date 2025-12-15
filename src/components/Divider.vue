<template>
  <div
    :class="dividerTheme.root({ class: ui?.root })"
    :role="label ? 'separator' : undefined"
    v-bind="$attrs"
  >
    <span v-if="label" :class="dividerTheme.label({ class: ui?.label })">{{
      label
    }}</span>
  </div>
</template>

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
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  size: 'md',
  color: 'default',
  align: 'center'
})

const dividerTheme = computed(() =>
  theme({
    orientation: props.orientation,
    variant: props.variant,
    size: props.size,
    color: props.color,
    hasLabel: !!props.label,
    align: props.align
  })
)
</script>

<style scoped>
/* Divider with label styles */
.relative span.bg-background:before {
  content: '';
  flex: 1;
}

.relative span.bg-background:after {
  content: '';
  flex: 1;
}
</style>
