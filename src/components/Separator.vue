<script setup lang="ts">
import { Separator as SeparatorPrimitive } from 'reka-ui'
import { ui } from '../utils/ui'

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

const separatorTheme = ui.separator({
  orientation: props.orientation,
  size: props.size,
  hasLabel: !!props.label
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
