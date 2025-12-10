<script setup lang="ts">
import { computed, ref } from 'vue'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'success' | 'warning' | 'error'
  variant?: 'outline' | 'filled' | 'ghost'
  label?: string
  hint?: string
  error?: string
  leadingIcon?: string
  trailingIcon?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'md',
  color: 'primary',
  variant: 'outline',
  disabled: false,
  readonly: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [event: Event]
}>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)

const rootClasses = computed(() => {
  const base = 'w-full'
  return base
})

const wrapperClasses = computed(() => {
  const base = 'relative flex items-center transition-all'

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const variants = {
    outline: 'border rounded-lg bg-white',
    filled: 'border-0 rounded-lg',
    ghost: 'border-0'
  }

  const colors = {
    outline: {
      primary: isFocused.value
        ? 'border-blue-500 ring-2 ring-blue-100'
        : 'border-gray-300 hover:border-gray-400',
      success: 'border-green-500 ring-2 ring-green-100',
      warning: 'border-yellow-500 ring-2 ring-yellow-100',
      error: 'border-red-500 ring-2 ring-red-100'
    },
    filled: {
      primary: isFocused.value
        ? 'bg-blue-50 ring-2 ring-blue-100'
        : 'bg-gray-50',
      success: 'bg-green-50 ring-2 ring-green-100',
      warning: 'bg-yellow-50 ring-2 ring-yellow-100',
      error: 'bg-red-50 ring-2 ring-red-100'
    },
    ghost: {
      primary: isFocused.value ? 'bg-gray-50' : 'bg-transparent',
      success: 'bg-green-50',
      warning: 'bg-yellow-50',
      error: 'bg-red-50'
    }
  }

  const disabled = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return `${base} ${sizes[props.size]} ${variants[props.variant]} ${colors[props.variant][props.color]} ${disabled}`
})

const inputClasses = computed(() => {
  const base = 'flex-1 outline-none bg-transparent'

  const sizes = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-5 py-3'
  }

  const padding = props.leadingIcon || slots.leading
    ? sizes[props.size].replace(/px-\d+/, 'pl-10')
    : sizes[props.size]

  return `${base} ${padding}`
})

const iconClasses = computed(() => {
  const base = 'shrink-0 text-gray-400'

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  return `${base} ${sizes[props.size]}`
})

const labelClasses = computed(() => {
  const base = 'block mb-1.5 font-medium text-gray-700'

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  return `${base} ${sizes[props.size]}`
})

const hintClasses = computed(() => {
  const base = 'mt-1.5'

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const color = props.error ? 'text-red-600' : 'text-gray-500'

  return `${base} ${sizes[props.size]} ${color}`
})

const slots = defineSlots<{
  leading?: () => any
  trailing?: () => any
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<template>
  <div :class="rootClasses">
    <label v-if="label" :class="labelClasses">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div :class="wrapperClasses">
      <div v-if="leadingIcon || $slots.leading" :class="iconClasses" class="absolute left-3">
        <slot name="leading">
          {{ leadingIcon }}
        </slot>
      </div>

      <input
        ref="inputRef"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />

      <div v-if="trailingIcon || $slots.trailing" :class="iconClasses" class="absolute right-3">
        <slot name="trailing">
          {{ trailingIcon }}
        </slot>
      </div>
    </div>

    <div v-if="error || hint" :class="hintClasses">
      {{ error || hint }}
    </div>
  </div>
</template>
