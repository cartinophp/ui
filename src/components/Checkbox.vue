<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import checkboxTheme from '@/themes/checkbox'

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

const checkboxThemeObj = computed(() =>
  checkboxTheme({
    size: props.size,
    color: props.color,
    state: props.modelValue ? 'checked' : 'unchecked',
    disabled: props.disabled
  })
)

// Extract classes from theme
const wrapperClasses = computed(() => checkboxThemeObj.value.wrapper?.() || '')
const rootClasses = computed(() => checkboxThemeObj.value.root?.() || '')
const indicatorClasses = computed(
  () => checkboxThemeObj.value.indicator?.() || ''
)
const iconClasses = computed(() => checkboxThemeObj.value.icon?.() || '')
const contentClasses = computed(() => checkboxThemeObj.value.content?.() || '')
const labelClasses = computed(() => checkboxThemeObj.value.label?.() || '')
const descriptionClasses = computed(
  () => checkboxThemeObj.value.description?.() || ''
)

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
        <span v-if="required" class="text-error">*</span>
      </label>
      <span v-if="description" :class="descriptionClasses">
        {{ description }}
      </span>
    </div>
  </div>
</template>
