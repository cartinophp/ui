<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import { ui } from '../utils/ui'

export interface RadioOption {
  label: string
  value: string
  description?: string
  disabled?: boolean
}

export interface RadioProps {
  modelValue?: string
  options?: RadioOption[]
  name?: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'card'
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  required: false,
  size: 'md',
  variant: 'default',
  orientation: 'vertical'
})

const radioTheme = ui.radioGroup({
  size: props.size,
  variant: props.variant,
  orientation: props.orientation
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const rootClasses = computed(() => {
  const base = 'flex gap-3'
  const orientation = props.orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'
  return `${base} ${orientation}`
})

const itemWrapperClasses = 'flex items-start gap-3'

const itemClasses = computed(() => {
  const base = 'shrink-0 rounded-full border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const colors = {
    primary: 'data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 border-gray-300 focus-visible:ring-blue-500',
    success: 'data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 border-gray-300 focus-visible:ring-green-500',
    warning: 'data-[state=checked]:bg-yellow-600 data-[state=checked]:border-yellow-600 border-gray-300 focus-visible:ring-yellow-500',
    error: 'data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 border-gray-300 focus-visible:ring-red-500'
  }

  return `${base} ${sizes[props.size]} ${colors[props.color]}`
})

const indicatorClasses = 'flex items-center justify-center w-full h-full relative after:content-[""] after:block after:w-[6px] after:h-[6px] after:rounded-full after:bg-white'

const labelClasses = computed(() => {
  const base = 'text-gray-900 font-medium cursor-pointer select-none'

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return `${base} ${sizes[props.size]}`
})

const descriptionClasses = computed(() => {
  const base = 'text-gray-600'

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return `${base} ${sizes[props.size]}`
})

const handleUpdate = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <RadioGroupRoot
    :model-value="modelValue"
    :name="name"
    :disabled="disabled"
    :required="required"
    :class="rootClasses"
    :orientation="orientation"
    @update:model-value="handleUpdate"
  >
    <div
      v-for="option in options"
      :key="option.value"
      :class="itemWrapperClasses"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="option.disabled || disabled"
        :class="itemClasses"
      >
        <RadioGroupIndicator :class="indicatorClasses" />
      </RadioGroupItem>

      <div class="flex flex-col">
        <label :class="labelClasses">
          {{ option.label }}
          <span v-if="required" class="text-red-500">*</span>
        </label>
        <span v-if="option.description" :class="descriptionClasses">
          {{ option.description }}
        </span>
      </div>
    </div>
  </RadioGroupRoot>
</template>
