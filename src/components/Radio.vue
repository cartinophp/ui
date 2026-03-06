<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import theme from '@/themes/radio'

export interface RadioProps {
  value: string
  label?: string
  description?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  ui?: {
    root?: string
    indicator?: string
    wrapper?: string
    label?: string
    description?: string
  }
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  size: 'md',
  color: 'primary'
})

const radioThemeObj = computed(() =>
  theme({
    size: props.size,
    color: props.color,
    disabled: props.disabled
  })
)

const radioTheme = radioThemeObj
</script>

<template>
  <div :class="radioTheme.value.wrapper({ class: props.ui?.wrapper })">
    <RadioGroupItem :value="value" :disabled="disabled" :class="radioTheme.value.root({ class: props.ui?.root })">
      <RadioGroupIndicator :class="radioTheme.value.indicator({ class: props.ui?.indicator })" />
    </RadioGroupItem>

    <div v-if="label || description" class="flex flex-col">
      <label v-if="label" :class="radioTheme.value.label({ class: props.ui?.label })">
        {{ label }}
      </label>
      <span v-if="description" :class="radioTheme.value.description({ class: props.ui?.description })">
        {{ description }}
      </span>
    </div>
  </div>
</template>
