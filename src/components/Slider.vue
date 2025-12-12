<script setup>
import { computed } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'
import sliderTheme from '../themes/slider'

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'div'
  },
  modelValue: {
    type: [Number, Array],
    default: undefined
  },
  defaultValue: {
    type: [Number, Array],
    default: undefined
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  minStepsBetweenThumbs: {
    type: Number,
    default: 0
  },
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'primary'
  },
  orientation: {
    type: String,
    default: 'horizontal'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inverted: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: undefined
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

const emit = defineEmits(['update:modelValue', 'change'])

const slots = defineSlots()

const ui = computed(() => sliderTheme({
  size: props.size,
  color: props.color,
  orientation: props.orientation,
  disabled: props.disabled
}))

const handleValueChange = (value) => {
  emit('update:modelValue', value)
}

const handleChange = (event) => {
  emit('change', event)
}

// Ensure modelValue is array if multiple thumbs
const thumbCount = computed(() => {
  if (Array.isArray(props.modelValue)) return props.modelValue.length
  if (Array.isArray(props.defaultValue)) return props.defaultValue.length
  return 1
})
</script>

<template>
  <SliderRoot
    :as="props.as"
    :model-value="modelValue"
    :default-value="defaultValue"
    :min="min"
    :max="max"
    :step="step"
    :min-steps-between-thumbs="minStepsBetweenThumbs"
    :orientation="orientation"
    :disabled="disabled"
    :inverted="inverted"
    :name="name"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    @update:model-value="handleValueChange"
    @change="handleChange"
  >
    <SliderTrack
      data-slot="track"
      :class="ui.track({ class: props.ui?.track })"
    >
      <SliderRange
        data-slot="range"
        :class="ui.range({ class: props.ui?.range })"
      />
    </SliderTrack>

    <SliderThumb
      v-for="(_, index) in thumbCount"
      :key="index"
      data-slot="thumb"
      :class="ui.thumb({ class: props.ui?.thumb })"
    />
  </SliderRoot>
</template>
