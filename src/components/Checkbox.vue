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

const checkboxTheme = computed(() => ui.checkbox({
  size: props.size,
  color: props.color,
  state: props.modelValue ? 'checked' : 'unchecked',
  disabled: props.disabled
}))

// Extract classes from theme
const wrapperClasses = computed(() => checkboxTheme.value.wrapper?.() || '')
const rootClasses = computed(() => checkboxTheme.value.root?.() || '')
const indicatorClasses = computed(() => checkboxTheme.value.indicator?.() || '')
const iconClasses = computed(() => checkboxTheme.value.icon?.() || '')
const contentClasses = computed(() => checkboxTheme.value.content?.() || '')
const labelClasses = computed(() => checkboxTheme.value.label?.() || '')
const descriptionClasses = computed(() => checkboxTheme.value.description?.() || '')

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
        <Icon name="i-lucide-check" :class="iconClasses" />
      </CheckboxIndicator>
    </CheckboxRoot>

    <div v-if="label || description" :class="contentClasses">
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
