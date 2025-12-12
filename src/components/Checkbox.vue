<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { ui } from '../utils/ui'

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

const ui = computed(() => theme({
  size: props.size,
  color: props.color,
  state: props.modelValue ? 'checked' : 'unchecked',
  disabled: props.disabled
}))

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
      :class="ui.root"
      @update:checked="handleUpdate"
    >
      <CheckboxIndicator :class="ui.indicator">
        <Icon name="i-lucide-check" :class="ui.icon" />
      </CheckboxIndicator>
    </CheckboxRoot>

    <div v-if="label || description" :class="ui.content">
      <label v-if="label" :class="ui.label">
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
      <span v-if="description" :class="ui.description">
        {{ description }}
      </span>
    </div>
  </div>
</template>
