<script setup>
import { computed } from 'vue'
import checkboxGroupTheme from '../themes/checkbox-group'
import UCheckbox from './Checkbox.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  options: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  error: {
    type: String,
    default: undefined
  },
  orientation: {
    type: String,
    default: 'vertical'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'primary'
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const slots = defineSlots()

const ui = computed(() => checkboxGroupTheme({
  orientation: props.orientation
}))

const isChecked = (value) => {
  return props.modelValue.includes(value)
}

const handleChange = (value, checked) => {
  let newValue = [...props.modelValue]

  if (checked) {
    if (!newValue.includes(value)) {
      newValue.push(value)
    }
  } else {
    newValue = newValue.filter(v => v !== value)
  }

  emit('update:modelValue', newValue)
}
</script>

<template>
  <div :class="ui.root({ class: [props.ui?.root, props.class] })">
    <label v-if="label" :class="ui.label({ class: props.ui?.label })">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <p v-if="description" :class="ui.description({ class: props.ui?.description })">
      {{ description }}
    </p>

    <div :class="ui.items({ class: props.ui?.items })">
      <slot>
        <UCheckbox
          v-for="(option, index) in options"
          :key="index"
          :model-value="isChecked(option.value)"
          :label="option.label"
          :description="option.description"
          :disabled="disabled || option.disabled"
          :size="size"
          :color="color"
          :value="option.value"
          @update:model-value="(checked) => handleChange(option.value, checked)"
        />
      </slot>
    </div>

    <p v-if="error" :class="ui.error({ class: props.ui?.error })">
      {{ error }}
    </p>
  </div>
</template>
