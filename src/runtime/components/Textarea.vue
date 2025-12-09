
<script setup>
import { useTemplateRef, computed, onMounted, nextTick, watch } from 'vue'
import { Primitive } from 'reka-ui'
import { useVModel } from '@vueuse/core'
import { useComponentIcons } from '../composables/useComponentIcons'
import { useFormField } from '../composables/useFormField'
import { looseToNumber } from '../utils'
import { tv } from '../utils/tv'
import UIcon from './Icon.vue'
import UAvatar from './Avatar.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps(), {
  rows: 3,
  maxrows: 0,
  autofocusDelay: 0,
  autoresizeDelay: 0
})
const emits = defineEmits()
const slots = defineSlots()

const modelValue = useVModel, 'modelValue', 'update:modelValue'>(props, 'modelValue', emits, { defaultValue: props.defaultValue })

const appConfig = {}

const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props, { deferInputValidation: true })
const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.textarea || {}) })({
  color: color.value,
  variant: props.variant,
  size: size?.value,
  loading: props.loading,
  highlight: highlight.value,
  autoresize: props.autoresize,
  leading: isLeading.value || !!props.avatar || !!slots.leading,
  trailing: isTrailing.value || !!slots.trailing
}))

const textareaRef = useTemplateRef('textareaRef')

// Custom function to handle the v-model properties
function updateInput(value | null | undefined) {
  if (props.modelModifiers?.trim) {
    value = value?.trim() ?? null
  }

  if (props.modelModifiers?.number) {
    value = looseToNumber(value)
  }

  if (props.modelModifiers?.nullable) {
    value ||= null
  }

  if (props.modelModifiers?.optional) {
    value ||= undefined
  }

  modelValue.value = value as T
  emitFormInput()
}

function onInput(event) {
  autoResize()

  if (!props.modelModifiers?.lazy) {
    updateInput(event.target.value)
  }
}

function onChange(event) {
  const value = event.target.value

  if (props.modelModifiers?.lazy) {
    updateInput(value)
  }

  // Update trimmed textarea so that it has same behavior as native textarea https://github.com/vuejs/core/blob/5ea8a8a4fab4e19a71e123e4d27d051f5e927172/packages/runtime-dom/src/directives/vModel.js#L63
  if (props.modelModifiers?.trim) {
    event.target.value = value.trim()
  }

  emitFormChange()
  emits('change', event)
}

function onBlur(event) {
  emitFormBlur()
  emits('blur', event)
}

function autoFocus() {
  if (props.autofocus) {
    textareaRef.value?.focus()
  }
}

function autoResize() {
  if (props.autoresize && textareaRef.value) {
    textareaRef.value.rows = props.rows
    const overflow = textareaRef.value.style.overflow
    textareaRef.value.style.overflow = 'hidden'

    const styles = window.getComputedStyle(textareaRef.value)
    const paddingTop = Number.parseInt(styles.paddingTop)
    const paddingBottom = Number.parseInt(styles.paddingBottom)
    const padding = paddingTop + paddingBottom
    const lineHeight = Number.parseInt(styles.lineHeight)
    const { scrollHeight } = textareaRef.value
    const newRows = (scrollHeight - padding) / lineHeight

    if (newRows > props.rows) {
      textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows
    }

    textareaRef.value.style.overflow = overflow
  }
}

watch(modelValue, () => {
  nextTick(autoResize)
})

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)

  setTimeout(() => {
    autoResize()
  }, props.autoresizeDelay)
})

defineExpose({
  textareaRef
})
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <textarea
      :id="id"
      ref="textareaRef"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :placeholder="placeholder"
      data-slot="base"
      :class="ui.base({ class: props.ui?.base })"
      :disabled="disabled"
      :required="required"
      v-bind="{ ...$attrs, ...ariaAttrs }"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
      @focus="emitFormFocus"
    />

    <slot :ui="ui" />

    <span v-if="isLeading || !!avatar || !!slots.leading" data-slot="leading" :class="ui.leading({ class: props.ui?.leading })">
      <slot name="leading" :ui="ui">
        <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
        <UAvatar v-else-if="!!avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()))" v-bind="avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
      </slot>
    </span>

    <span v-if="isTrailing || !!slots.trailing" data-slot="trailing" :class="ui.trailing({ class: props.ui?.trailing })">
      <slot name="trailing" :ui="ui">
        <UIcon v-if="trailingIconName" :name="trailingIconName" data-slot="trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
      </slot>
    </span>
  </Primitive>
</template>
