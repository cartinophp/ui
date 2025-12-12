<script setup lang="ts">
import { computed } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { ui } from '../utils/ui'

export interface SwitchProps {
  modelValue?: boolean
  defaultValue?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'destructive'
  label?: string
  description?: string
}

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  required: false,
  size: 'md',
  variant: 'default'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const switchTheme = ui.switch({
  size: props.size,
  variant: props.variant
})

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div :class="label || description ? switchTheme.wrapper() : ''">
    <SwitchRoot
      :checked="modelValue"
      :default-checked="defaultValue"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      :class="switchTheme.root()"
      @update:checked="handleUpdate"
    >
      <SwitchThumb :class="switchTheme.thumb()" />
    </SwitchRoot>

    <div v-if="label || description" :class="switchTheme.content()">
      <label v-if="label" :class="switchTheme.label()">
        {{ label }}
        <span v-if="required" :class="switchTheme.required()">*</span>
      </label>
      <span v-if="description" :class="switchTheme.description()">
        {{ description }}
      </span>
    </div>
  </div>
</template>
