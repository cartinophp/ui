
<script setup>
import { computed } from 'vue'
import { SliderRoot, SliderRange, SliderTrack, SliderThumb, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useFormField } from '../composables/useFormField'
import { tv } from '../utils/tv'
import UTooltip from './Tooltip.vue'

const props = defineProps({
  min: 0,
  max: 100,
  step: 1,
  orientation: 'horizontal'
})
const emits = defineEmits()

const modelValue = defineModel()

const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'orientation', 'min', 'max', 'step', 'minStepsBetweenThumbs', 'inverted'), emits)

const { id, emitFormChange, emitFormInput, size, color, name, disabled, ariaAttrs } = useFormField(props)

const defaultSliderValue = computed(() => {
  if (typeof props.defaultValue === 'number') {
    return [props.defaultValue]
  }
  return props.defaultValue
})

const sliderValue = computed({
  get() {
    if (typeof modelValue.value === 'number') {
      return [modelValue.value]
    }
    return modelValue.value ?? defaultSliderValue.value
  },
  set(value) {
    modelValue.value = (value?.length !== 1 ? value : value[0])
  }
})

const thumbs = computed(() => sliderValue.value?.length ?? 1)

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.slider || {}) })({
  disabled: disabled.value,
  size: size.value,
  color: color.value,
  orientation: props.orientation
}))

function onChange(value) {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)
  emitFormChange()
}
</script>

<template>
  <SliderRoot
    v-bind="{ ...rootProps, ...ariaAttrs }"
    :id="id"
    v-model="sliderValue"
    :name="name"
    :disabled="disabled"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    :default-value="defaultSliderValue"
    @update:model-value="emitFormInput()"
    @value-commit="onChange"
  >
    <SliderTrack data-slot="track" :class="ui.track({ class: props.ui?.track })">
      <SliderRange data-slot="range" :class="ui.range({ class: props.ui?.range })" />
    </SliderTrack>

    <template v-for="thumb in thumbs" :key="thumb">
      <UTooltip
        v-if="!!tooltip"
        :text="thumbs > 1 ? String(sliderValue?.[thumb - 1]) (sliderValue)"
        disable-closing-trigger
        v-bind="(typeof tooltip === 'object' ? tooltip : {})"
      >
        <SliderThumb data-slot="thumb" :class="ui.thumb({ class: props.ui?.thumb })" :aria-label="thumbs === 1 ? 'Thumb' : `Thumb ${thumb} of ${thumbs}`" />
      </UTooltip>
      <SliderThumb v-else data-slot="thumb" :class="ui.thumb({ class: props.ui?.thumb })" :aria-label="thumbs === 1 ? 'Thumb' : `Thumb ${thumb} of ${thumbs}`" />
    </template>
  </SliderRoot>
</template>
