<script setup>
import { computed } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import radioGroupTheme from '@/themes/radio-group'
import URadio from './Radio.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined
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
  name: {
    type: String,
    default: undefined
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

const ui = computed(() =>
  radioGroupTheme({
    orientation: props.orientation
  })
)

const handleUpdate = (value) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div :class="ui.root({ class: [props.ui?.root, props.class] })">
    <label v-if="label" :class="ui.label({ class: props.ui?.label })">
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>

    <p
      v-if="description"
      :class="ui.description({ class: props.ui?.description })"
    >
      {{ description }}
    </p>

    <RadioGroupRoot
      :model-value="modelValue"
      :name="name"
      :disabled="disabled"
      :required="required"
      :orientation="orientation"
      :class="ui.items({ class: props.ui?.items })"
      @update:model-value="handleUpdate"
    >
      <slot>
        <URadio
          v-for="(option, index) in options"
          :key="index"
          :options="[option]"
          :size="size"
          :color="color"
          :disabled="disabled"
        />
      </slot>
    </RadioGroupRoot>

    <p v-if="error" :class="ui.error({ class: props.ui?.error })">
      {{ error }}
    </p>
  </div>
</template>
