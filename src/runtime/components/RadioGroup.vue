
<script setup>
import { computed, useId } from 'vue'
import { RadioGroupRoot, RadioGroupItem as RRadioGroupItem, RadioGroupIndicator, Label, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useFormField } from '../composables/useFormField'
import { get } from '../utils'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps(), {
  valueKey: 'value' as never,
  labelKey: 'label',
  descriptionKey: 'description',
  orientation: 'vertical'
})
const emits = defineEmits()
const slots = defineSlots()

const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'loop', 'required'), emits)

const { emitFormChange, emitFormInput, color, name, size, id: _id, disabled, ariaAttrs } = useFormField(props, { bind: false })
const id = _id.value ?? useId()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.radioGroup || {}) })({
  size: size.value,
  color: color.value,
  disabled: disabled.value,
  required: props.required,
  orientation: props.orientation,
  variant: props.variant,
  indicator: props.indicator
}))

function normalizeItem(item) {
  if (item === null) {
    return {
      id: `${id}:null`,
      value: undefined,
      label: undefined
    }
  }

  if (typeof item === 'string' || typeof item === 'number' || typeof item === 'bigint') {
    return {
      id: `${id}:${item}`,
      value(item),
      label(item)
    }
  }

  const value = get(item, props.valueKey as string)
  const label = get(item, props.labelKey as string)
  const description = get(item, props.descriptionKey as string)

  return {
    ...(item),
    value,
    label,
    description,
    id: `${id}:${value}`
  }
}

const normalizedItems = computed(() => {
  if (!props.items) {
    return 
  }

  return props.items.map(normalizeItem)
})

function onUpdate(value) {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)
  emitFormChange()
  emitFormInput()
}
</script>

<template>
  <RadioGroupRoot
    :id="id"
    v-bind="rootProps"
    :model-value="modelValue"
    :default-value="defaultValue"
    :orientation="orientation"
    :name="name"
    :disabled="disabled"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    @update:model-value="onUpdate"
  >
    <fieldset data-slot="fieldset" :class="ui.fieldset({ class: props.ui?.fieldset })" v-bind="ariaAttrs">
      <legend v-if="legend || !!slots.legend" data-slot="legend" :class="ui.legend({ class: props.ui?.legend })">
        <slot name="legend">
          {{ legend }}
        </slot>
      </legend>

      <component :is="(!variant || variant === 'list') ? 'div' " v-for="item in normalizedItems" :key="item.value" data-slot="item" :class="ui.item({ class: [props.ui?.item, item.ui?.item, item.class], disabled: item.disabled || disabled })">
        <div data-slot="container" :class="ui.container({ class: [props.ui?.container, item.ui?.container] })">
          <RRadioGroupItem
            :id="item.id"
            :value="item.value"
            :disabled="item.disabled || disabled"
            data-slot="base"
            :class="ui.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled || disabled })"
          >
            <RadioGroupIndicator data-slot="indicator" :class="ui.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })" />
          </RRadioGroupItem>
        </div>

        <div v-if="(item.label || !!slots.label) || (item.description || !!slots.description)" data-slot="wrapper" :class="ui.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })">
          <component :is="(!variant || variant === 'list') ? Label : 'p'" v-if="item.label || !!slots.label" :for="item.id" data-slot="label" :class="ui.label({ class: [props.ui?.label, item.ui?.label], disabled: item.disabled || disabled })">
            <slot name="label" :item="item" :model-value="modelValue">
              {{ item.label }}
            </slot>
          </component>
          <p v-if="item.description || !!slots.description" data-slot="description" :class="ui.description({ class: [props.ui?.description, item.ui?.description], disabled: item.disabled || disabled })">
            <slot name="description" :item="item" :model-value="modelValue">
              {{ item.description }}
            </slot>
          </p>
        </div>
      </component>
    </fieldset>
  </RadioGroupRoot>
</template>
