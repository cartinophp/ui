<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { Separator as SeparatorPrimitive } from 'reka-ui'
import theme from '@/themes/separator'

export interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  decorative: true,
  size: 'md'
})

const { orientation, size, label } = toRefs(props)

const hasLabel = computed(() => !!label.value)

const separatorTheme = computed(() =>
  theme({
    orientation: orientation.value,
    size: size.value,
    hasLabel: hasLabel.value
  })
)

const withLabelClasses = computed(() => separatorTheme.value.wrapper?.() || '')
const rootClasses = computed(() => separatorTheme.value.root?.() || '')
const labelClasses = computed(() => separatorTheme.value.label?.() || '')
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
