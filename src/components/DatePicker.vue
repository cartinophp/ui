<template>
  <div class="relative inline-block" v-bind="$attrs">
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
      :class="inputClasses"
      @input="onInput"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    
    <!-- Calendar Icon -->
    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <Icon :name="icon" class="size-5 text-muted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

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
  variant?: 'outline' | 'none'
  color?: 'primary' | 'error' | 'success' | 'warning' | 'info'
  icon?: string
  format?: string
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  size: 'md',
  variant: 'outline', 
  color: 'primary',
  icon: 'i-lucide-calendar',
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

const inputId = computed(() => props.id || `date-picker-${Math.random().toString(36).substr(2, 9)}`)

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

const inputClasses = computed(() => {
  const sizeClasses = {
    xs: 'text-xs px-2.5 py-1.5',
    sm: 'text-sm px-2.5 py-1.5',
    md: 'text-sm px-3 py-2',
    lg: 'text-sm px-3.5 py-2.5', 
    xl: 'text-base px-3.5 py-2.5'
  }

  const variantClasses = {
    outline: 'border border-default bg-default',
    none: 'border-0 bg-transparent'
  }

  const colorClasses = {
    primary: 'focus:border-primary focus:ring-primary',
    error: 'border-error focus:border-error focus:ring-error',
    success: 'border-success focus:border-success focus:ring-success',
    warning: 'border-warning focus:border-warning focus:ring-warning',
    info: 'border-info focus:border-info focus:ring-info'
  }

  return [
    'block w-full rounded-md shadow-sm transition-colors pr-10',
    'focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50',
    'disabled:cursor-not-allowed disabled:opacity-75',
    '[&::-webkit-calendar-picker-indicator]:opacity-0',
    sizeClasses[props.size],
    variantClasses[props.variant], 
    props.disabled ? 'cursor-not-allowed opacity-75' : colorClasses[props.color]
  ].filter(Boolean).join(' ')
})

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