<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed } from 'vue'
import { Primitive, ProgressRoot, ProgressIndicator, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'

const props = defineProps({
  inverted: false,
  modelValue: null,
  orientation: 'horizontal'
})
const emits = defineEmits()
const slots = defineSlots()

const { dir } = useLocale()
const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'getValueLabel', 'getValueText', 'modelValue'), emits)

const isIndeterminate = computed(() => rootProps.value.modelValue === null)
const hasSteps = computed(() => Array.isArray(props.max))

const realMax = computed(() => {
  if (isIndeterminate.value || !props.max) {
    return undefined
  }

  if (Array.isArray(props.max)) {
    return props.max.length - 1
  }

  return Number(props.max)
})

const percent = computed(() => {
  if (isIndeterminate.value) {
    return undefined
  }

  switch (true) {
    case rootProps.value.modelValue! < 0: return 0
    case rootProps.value.modelValue! > (realMax.value ?? 100): return 100
    default: return Math.round((rootProps.value.modelValue! / (realMax.value ?? 100)) * 100)
  }
})

const indicatorStyle = computed(() => {
  if (percent.value === undefined) {
    return
  }

  if (props.orientation === 'vertical') {
    return {
      transform: `translateY(${props.inverted ? '' : '-'}${100 - percent.value}%)`
    }
  } else {
    if (dir.value === 'rtl') {
      return {
        transform: `translateX(${props.inverted ? '-' : ''}${100 - percent.value}%)`
      }
    } else {
      return {
        transform: `translateX(${props.inverted ? '' : '-'}${100 - percent.value}%)`
      }
    }
  }
})

const statusStyle = computed(() => {
  const value = `${Math.max(percent.value ?? 0, 0)}%`
  return props.orientation === 'vertical' ? { height: value } : { width: value }
})

function isActive(index) {
  return index === Number(props.modelValue)
}

function isFirst(index) {
  return index === 0
}

function isLast(index) {
  return index === realMax.value
}

function stepVariant(index | string) {
  index = Number(index)

  if (isActive(index) && !isFirst(index)) {
    return 'active'
  }

  if (isFirst(index) && isActive(index)) {
    return 'first'
  }

  if (isLast(index) && isActive(index)) {
    return 'last'
  }

  return 'other'
}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.progress || {}) })({
  animation: props.animation,
  size: props.size,
  color: props.color,
  orientation: props.orientation,
  inverted: props.inverted
}))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!isIndeterminate && (status || !!slots.status)" data-slot="status" :class="ui.status({ class: props.ui?.status })" :style="statusStyle">
      <slot name="status" :percent="percent">
        {{ percent }}%
      </slot>
    </div>

    <ProgressRoot v-bind="rootProps" :max="realMax" data-slot="base" :class="ui.base({ class: props.ui?.base })" style="transform: translateZ(0)">
      <ProgressIndicator data-slot="indicator" :class="ui.indicator({ class: props.ui?.indicator })" :style="indicatorStyle" />
    </ProgressRoot>

    <div v-if="hasSteps" data-slot="steps" :class="ui.steps({ class: props.ui?.steps })">
      <div v-for="(step, index) in max" :key="index" data-slot="step" :class="ui.step({ class: props.ui?.step, step: stepVariant(index) })">
        <slot :name="`step-${index}`" :step="step">
          {{ step }}
        </slot>
      </div>
    </div>
  </Primitive>
</template>
