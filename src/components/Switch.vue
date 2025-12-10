<script setup lang="ts">
import { computed } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'

export interface SwitchProps {
  modelValue?: boolean
  defaultValue?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'warning' | 'error'
  label?: string
  description?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
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
  const base = 'relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'

  const sizes = {
    sm: 'h-4 w-8',
    md: 'h-6 w-11',
    lg: 'h-7 w-14'
  }

  const colors = {
    primary: 'data-[state=checked]:bg-blue-600 focus-visible:ring-blue-500',
    success: 'data-[state=checked]:bg-green-600 focus-visible:ring-green-500',
    warning: 'data-[state=checked]:bg-yellow-600 focus-visible:ring-yellow-500',
    error: 'data-[state=checked]:bg-red-600 focus-visible:ring-red-500'
  }

  return `${base} ${sizes[props.size]} ${colors[props.color]} data-[state=unchecked]:bg-gray-300`
})

const thumbClasses = computed(() => {
  const base = 'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform'

  const sizes = {
    sm: 'h-3 w-3 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
    md: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
    lg: 'h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0.5'
  }

  return `${base} ${sizes[props.size]}`
})

const wrapperClasses = 'flex items-center gap-3'

const labelClasses = computed(() => {
  const base = 'text-gray-900 font-medium cursor-pointer'

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

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div :class="label || description ? wrapperClasses : ''">
    <SwitchRoot
      :checked="modelValue"
      :default-checked="defaultValue"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      :class="rootClasses"
      @update:checked="handleUpdate"
    >
      <SwitchThumb :class="thumbClasses" />
    </SwitchRoot>

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
