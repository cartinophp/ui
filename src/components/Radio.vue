<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import theme from '@/themes/radio-group'

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
  color?: 'primary' | 'success' | 'warning' | 'error'
  orientation?: 'horizontal' | 'vertical'
}

const { modelValue, options, name, disabled, required, size, color, orientation } = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  required: false,
  size: 'md',
  color: 'primary',
  orientation: 'vertical'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const ui = computed(() => theme({
  size,
  orientation,
  color
}))

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
    :class="ui.root()"
    :orientation="orientation"
    @update:model-value="handleUpdate"
  >
    <div
      v-for="option in options"
      :key="option.value"
      :class="ui.wrapper()"
    >
      <RadioGroupItem
        :value="option.value"
        :disabled="option.disabled || disabled"
        :class="ui.item()"
        :aria-label="option.label"
      >
        <RadioGroupIndicator :class="ui.indicator()" />
      </RadioGroupItem>

      <div :class="ui.content()">
        <label :class="ui.label()">
          {{ option.label }}
          <span v-if="required" class="text-red-500">*</span>
        </label>
        <span v-if="option.description" :class="ui.description()">
          {{ option.description }}
        </span>
      </div>
    </div>
  </RadioGroupRoot>
</template>
