<template>
  <div :class="datePickerTheme.wrapper({ class: ui?.wrapper })" v-bind="$attrs">
    <input
      ref="input"
      type="date"
      :id="inputId"
      :name="name"
      :value="formattedValue"
      :disabled="disabled"
      :required="required"
      :min="min"
      :max="max"
      :class="datePickerTheme.input({ class: ui?.input })"
      @input="onInput"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />

    <!-- Calendar Icon -->
    <div :class="datePickerTheme.iconWrapper({ class: ui?.iconWrapper })">
      <Icon :name="icon" :class="datePickerTheme.icon({ class: ui?.icon })" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import theme from '@/themes/date-picker'
import Icon from './Icon.vue'

export interface DatePickerProps {
  modelValue?: Date | string | null
  placeholder?: string
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  min?: string
  max?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
  color?: 'primary' | 'error' | 'success' | 'warning' | 'info'
  icon?: string
  format?: string
  error?: boolean
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  size: 'md',
  variant: 'outline',
  color: 'primary',
  icon: 'i-lucide-calendar',
  error: false,
  format: 'YYYY-MM-DD'
})

const emit = defineEmits<{
  'update:modelValue': [value: Date | string | null]
  input: [event: Event]
  change: [event: Event]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const input = ref<HTMLInputElement>()

const inputId = computed(
  () => props.id || `date-picker-${Math.random().toString(36).substr(2, 9)}`
)

const formattedValue = computed(() => {
  if (!props.modelValue) return ''

  if (props.modelValue instanceof Date) {
    return props.modelValue.toISOString().split('T')[0]
  }

  if (typeof props.modelValue === 'string') {
    // Assume the string is already in the correct format
    return props.modelValue
  }

  return ''
})

const datePickerTheme = computed(() =>
  theme({
    size: props.size,
    variant: props.variant,
    color: props.color,
    error: props.error,
    disabled: props.disabled
  })
)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const dateValue = target.value ? new Date(target.value) : null

  emit('update:modelValue', dateValue)
  emit('input', event)
}

defineExpose({
  input,
  focus: () => input.value?.focus(),
  blur: () => input.value?.blur()
})
</script>
