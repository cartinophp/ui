<script setup lang="ts">
import { computed } from 'vue'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import checkboxTheme from '@/themes/checkbox'

export interface CheckboxProps {
  modelValue?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  name?: string
  value?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  label?: string
  description?: string
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  readonly: false,
  required: false,
  size: 'md',
  color: 'primary'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const theme = computed(() =>
  checkboxTheme({
    size: props.size,
    color: props.color,
    state: props.modelValue ? 'checked' : 'unchecked',
    disabled: props.disabled,
    readonly: props.readonly
  })
)

const handleUpdate = (value: boolean) => {
  if (props.readonly) return
  emit('update:modelValue', value)
}
</script>

<template>
  <div :class="label || description ? theme.wrapper({ class: ui?.wrapper }) : ''">
    <CheckboxRoot
      :checked="modelValue"
      :default-checked="defaultChecked"
      :disabled="disabled || readonly"
      :required="required"
      :name="name"
      :value="value"
      :class="theme.root({ class: ui?.root })"
      @update:checked="handleUpdate"
    >
      <CheckboxIndicator :class="theme.indicator({ class: ui?.indicator })">
        <svg
          :class="theme.icon({ class: ui?.icon })"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M5 12.5L9.5 17L19 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </CheckboxIndicator>
    </CheckboxRoot>

    <div v-if="label || description" :class="theme.content({ class: ui?.content })">
      <label v-if="label" :class="theme.label({ class: ui?.label })">
        {{ label }}
        <span v-if="required" class="text-error">*</span>
      </label>
      <span v-if="description" :class="theme.description({ class: ui?.description })">
        {{ description }}
      </span>
    </div>
  </div>
</template>
