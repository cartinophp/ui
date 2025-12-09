
<script setup>
import { computed, toRef, useTemplateRef } from 'vue'
import { Primitive, useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { omit, transformUI } from '../utils'
import { tv } from '../utils/tv'
import UTextarea from './Textarea.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: 'form',
  autofocus: true,
  autoresize: true,
  rows: 1
})
const emits = defineEmits()
const slots = defineSlots()

const model = defineModel<string>({ default: '' })

const { t } = useLocale()
const appConfig = {}

const textareaProps = useForwardProps(reactivePick(props, 'rows', 'autofocus', 'autofocusDelay', 'autoresize', 'autoresizeDelay', 'maxrows', 'icon', 'avatar', 'loading', 'loadingIcon'))

const getProxySlots = () => omit(slots, ['header', 'footer'])

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.chatPrompt || {}) })({
  variant: props.variant
}))

const textareaRef = useTemplateRef('textareaRef')

function submit(e) {
  if (model.value.trim() === '') {
    return
  }

  emits('submit', e)
}

function blur(e) {
  textareaRef.value?.textareaRef?.blur()

  emits('close', e)
}

defineExpose({
  textareaRef: toRef(() => textareaRef.value?.textareaRef)
})
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })" @submit.prevent="submit">
    <div v-if="!!slots.header" data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" />
    </div>

    <UTextarea
      ref="textareaRef"
      v-model="model"
      :placeholder="placeholder || t('chatPrompt.placeholder')"
      :disabled="Boolean(error) || disabled"
      variant="none"
      v-bind="{ ...textareaProps, ...$attrs }"
      :ui="transformUI(omit(ui, ['root', 'body', 'header', 'footer']), props.ui)"
      data-slot="body"
      :class="ui.body({ class: props.ui?.body })"
      @keydown.enter.exact.prevent="submit"
      @keydown.esc="blur"
    >
      <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </UTextarea>

    <div v-if="!!slots.footer" data-slot="footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
