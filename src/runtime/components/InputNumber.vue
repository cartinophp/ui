
<script setup>
import { onMounted, computed, useTemplateRef, toRef } from 'vue'
import { NumberFieldRoot, NumberFieldInput, NumberFieldDecrement, NumberFieldIncrement, useForwardPropsEmits } from 'reka-ui'
import { reactivePick, useVModel } from '@vueuse/core'
import { useFieldGroup } from '../composables/useFieldGroup'
import { useFormField } from '../composables/useFormField'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps(), {
  orientation: 'horizontal',
  increment: true,
  decrement: true
})
const emits = defineEmits()
defineSlots()

const modelValue = useVModel, 'modelValue', 'update:modelValue'>(props, 'modelValue', emits, { defaultValue: props.defaultValue })

const { t } = useLocale()
const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultValue', 'min', 'max', 'step', 'stepSnapping', 'formatOptions', 'disableWheelChange', 'invertWheelChange', 'readonly'), emits)

const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, id, color, size: formGroupSize, name, highlight, disabled, ariaAttrs } = useFormField(props)
const { orientation, size: fieldGroupSize } = useFieldGroup(props)

const inputSize = computed(() => fieldGroupSize.value || formGroupSize.value)

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.inputNumber || {}) })({
  color: color.value,
  variant: props.variant,
  size: inputSize.value,
  highlight: highlight.value,
  orientation: props.orientation,
  fieldGroup: orientation.value,
  increment: props.orientation === 'vertical' ? (!!props.increment || !!props.decrement) : !!props.increment,
  decrement: props.orientation === 'vertical' ? false : !!props.decrement
}))

const incrementIcon = computed(() => props.incrementIcon || (props.orientation === 'horizontal' ? appConfig.ui.icons.plus : appConfig.ui.icons.chevronUp))
const decrementIcon = computed(() => props.decrementIcon || (props.orientation === 'horizontal' ? appConfig.ui.icons.minus : appConfig.ui.icons.chevronDown))

const inputRef = useTemplateRef('inputRef')

function onUpdate(value | undefined) {
  if (props.modelModifiers?.optional) {
    value = value ?? undefined
  }

  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)

  emitFormChange()
  emitFormInput()
}

function onBlur(event) {
  emitFormBlur()
  emits('blur', event)
}

function autoFocus() {
  if (props.autofocus) {
    inputRef.value?.$el?.focus()
  }
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

defineExpose({
  inputRef: toRef(() => inputRef.value?.$el as HTMLInputElement)
})
</script>

<template>
  <NumberFieldRoot
    v-bind="rootProps"
    :id="id"
    :model-value="modelValue"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    :name="name"
    :disabled="disabled"
    @update:model-value="onUpdate"
  >
    <NumberFieldInput
      v-bind="{ ...$attrs, ...ariaAttrs }"
      ref="inputRef"
      :placeholder="placeholder"
      :required="required"
      data-slot="base"
      :class="ui.base({ class: props.ui?.base })"
      @blur="onBlur"
      @focus="emitFormFocus"
    />

    <div v-if="!!increment" data-slot="increment" :class="ui.increment({ class: props.ui?.increment })">
      <NumberFieldIncrement as-child :disabled="disabled || incrementDisabled">
        <slot name="increment">
          <UButton
            :icon="incrementIcon"
            :color="color"
            :size="size"
            variant="link"
            :aria-label="t('inputNumber.increment')"
            v-bind="typeof increment === 'object' ? increment : undefined"
          />
        </slot>
      </NumberFieldIncrement>
    </div>

    <div v-if="!!decrement" data-slot="decrement" :class="ui.decrement({ class: props.ui?.decrement })">
      <NumberFieldDecrement as-child :disabled="disabled || decrementDisabled">
        <slot name="decrement">
          <UButton
            :icon="decrementIcon"
            :color="color"
            :size="size"
            variant="link"
            :aria-label="t('inputNumber.decrement')"
            v-bind="typeof decrement === 'object' ? decrement : undefined"
          />
        </slot>
      </NumberFieldDecrement>
    </div>
  </NumberFieldRoot>
</template>
