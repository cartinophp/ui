<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'

export interface CheckboxProps {
  modelValue?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'warning' | 'error'
  label?: string
  description?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  required: false,
  size: 'md',
  color: 'primary'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const rootClasses = computed(() => {
  const base = 'shrink-0 rounded border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

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

const indicatorClasses = 'flex items-center justify-center text-white'

const wrapperClasses = 'flex items-start gap-3'

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

const iconSize = computed(() => {
  const sizes = {
    sm: 12,
    md: 14,
    lg: 16
  }
  return sizes[props.size]
})

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div :class="label || description ? wrapperClasses : ''">
    <CheckboxRoot
      :checked="modelValue"
      :default-checked="defaultChecked"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      :class="rootClasses"
      @update:checked="handleUpdate"
    >
      <CheckboxIndicator :class="indicatorClasses">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="iconSize"
          :height="iconSize"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>

    <div v-if="label || description" class="flex flex-col">
      <label v-if="label" :class="labelClasses">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
      <span v-if="description" :class="descriptionClasses">
        {{ description }}
      </span>
    </div>
  </div>
</template>
