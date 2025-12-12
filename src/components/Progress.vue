<template>
  <div :class="ui.root">
    <!-- Label and Value -->
    <div v-if="label || showValue" :class="ui.labelContainer">
      <span v-if="label" :class="ui.label">{{ label }}</span>
      <span v-if="showValue" :class="ui.value">{{ displayValue }}</span>
    </div>

    <!-- Progress Track -->
    <div :class="ui.track">
      <!-- Progress Fill -->
      <div 
        :class="ui.fill"
        :style="{ width: `${percentage}%` }"
        role="progressbar"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-label="label || 'Progress'"
      >
        <!-- Animated Stripes (for indeterminate) -->
        <div 
          v-if="indeterminate" 
          :class="ui.stripes"
        />
      </div>
    </div>

    <!-- Steps indicators -->
    <div v-if="steps && steps > 1" :class="ui.stepsContainer">
      <div
        v-for="step in steps"
        :key="step"
        :class="ui.step"
        :data-active="step <= Math.ceil((percentage / 100) * steps)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import theme from '../themes/progress'

export interface ProgressProps {
  value?: number
  min?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  variant?: 'default' | 'striped'
  indeterminate?: boolean
  label?: string
  showValue?: boolean
  valueFormat?: 'percentage' | 'fraction'
  steps?: number
  animated?: boolean
}

const props = withDefaults(defineProps<ProgressProps>(), {
  value: 0,
  min: 0,
  max: 100,
  size: 'md',
  color: 'primary',
  variant: 'default',
  indeterminate: false,
  showValue: false,
  valueFormat: 'percentage',
  animated: false
})

const percentage = computed(() => {
  if (props.indeterminate) return 100
  const range = props.max - props.min
  const progress = Math.min(Math.max(props.value - props.min, 0), range)
  return (progress / range) * 100
})

const displayValue = computed(() => {
  if (props.valueFormat === 'fraction') {
    return `${props.value} / ${props.max}`
  }
  return `${Math.round(percentage.value)}%`
})

const ui = computed(() => theme({
  size: props.size,
  color: props.color,
  variant: props.variant,
  indeterminate: props.indeterminate,
  animated: props.animated
}))
</script>