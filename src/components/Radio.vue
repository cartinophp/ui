<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import theme from '@/themes/radio'

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
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  orientation?: 'horizontal' | 'vertical'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  required: false,
  size: 'md',
  color: 'primary',
  orientation: 'vertical'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const radioTheme = (checked: boolean) =>
  computed(() =>
    theme({
      size: props.size,
      color: props.color,
      checked,
      disabled: props.disabled
    })
  )

const rootClasses = computed(() => {
  const base = 'flex gap-3'
  const orientation =
    props.orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'
  return `${base} ${orientation}`
})

const itemWrapperClasses = 'flex items-start gap-3'

const labelClasses = computed(() => {
  const base = 'text-foreground font-medium cursor-pointer select-none'
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
  return `${base} ${sizes[props.size]}`
})

const descriptionClasses = computed(() => {
  const base = 'text-muted-foreground'
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
        :class="
          radioTheme(modelValue === option.value).value.root({
            class: props.ui?.root
          })
        "
      >
        <RadioGroupIndicator
          :class="
            radioTheme(modelValue === option.value).value.indicator({
              class: props.ui?.indicator
            })
          "
        />
      </RadioGroupItem>

      <div class="flex flex-col">
        <label :class="labelClasses">
          {{ option.label }}
          <span v-if="required" class="text-error">*</span>
        </label>
        <span v-if="option.description" :class="descriptionClasses">
          {{ option.description }}
        </span>
      </div>
    </div>
  </RadioGroupRoot>
</template>
