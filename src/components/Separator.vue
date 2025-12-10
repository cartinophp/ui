<script setup lang="ts">
import { computed } from 'vue'
import { Separator as SeparatorPrimitive } from 'reka-ui'

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  decorative: true,
  size: 'md'
})

const rootClasses = computed(() => {
  const base = 'bg-gray-200 shrink-0'

  const orientation = props.orientation === 'horizontal'
    ? 'h-px w-full'
    : 'h-full w-px'

  const sizes = {
    sm: props.orientation === 'horizontal' ? 'my-2' : 'mx-2',
    md: props.orientation === 'horizontal' ? 'my-4' : 'mx-4',
    lg: props.orientation === 'horizontal' ? 'my-6' : 'mx-6'
  }

  return `${base} ${orientation} ${sizes[props.size]}`
})

const withLabelClasses = computed(() => {
  const base = 'flex items-center'

  const sizes = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  }

  return `${base} ${sizes[props.size]}`
})

const labelClasses = computed(() => {
  const base = 'text-gray-500 shrink-0'

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return `${base} ${sizes[props.size]}`
})
</script>

<template>
  <div v-if="label" :class="withLabelClasses">
    <SeparatorPrimitive
      :orientation="orientation"
      :decorative="decorative"
      :class="rootClasses"
    />
    <span :class="labelClasses">{{ label }}</span>
    <SeparatorPrimitive
      :orientation="orientation"
      :decorative="decorative"
      :class="rootClasses"
    />
  </div>

  <SeparatorPrimitive
    v-else
    :orientation="orientation"
    :decorative="decorative"
    :class="rootClasses"
  />
</template>
