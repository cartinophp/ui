
<script setup>
import { computed } from 'vue'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { transformUI } from '../utils'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  status: 'ready',
  streamingColor: 'neutral',
  streamingVariant: 'subtle',
  submittedColor: 'neutral',
  submittedVariant: 'subtle',
  errorColor: 'error',
  errorVariant: 'soft'
})
const emits = defineEmits()
const slots = defineSlots()

const { t } = useLocale()
const appConfig = {}

const buttonProps = useForwardProps(reactiveOmit(props, 'icon', 'color', 'variant', 'status', 'streamingIcon', 'streamingColor', 'streamingVariant', 'submittedIcon', 'submittedColor', 'submittedVariant', 'errorIcon', 'errorColor', 'errorVariant', 'class', 'ui'))

const statusButtonProps = computed(() => ({
  ready: {
    icon: props.icon || appConfig.ui.icons.arrowUp,
    color: props.color,
    variant: props.variant,
    type: 'submit' as const
  },
  submitted: {
    icon: props.submittedIcon || appConfig.ui.icons.stop,
    color: props.submittedColor,
    variant: props.submittedVariant,
    onClick(e) {
      emits('stop', e)
    }
  },
  streaming: {
    icon: props.streamingIcon || appConfig.ui.icons.stop,
    color: props.streamingColor,
    variant: props.streamingVariant,
    onClick(e) {
      emits('stop', e)
    }
  },
  error: {
    icon: props.errorIcon || appConfig.ui.icons.reload,
    color: props.errorColor,
    variant: props.errorVariant,
    onClick(e) {
      emits('reload', e)
    }
  }
} satisfies { [key]})[props.status])

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.chatPromptSubmit || {}) })())
</script>

<template>
  <UButton
    v-bind="{
      ...buttonProps,
      ...statusButtonProps,
      'aria-label': t('chatPromptSubmit.label'),
      ...$attrs
    }"
    :class="ui.base({ class: [props.ui?.base, props.class] })"
    :ui="transformUI(ui, props.ui)"
  >
    <template v-for="(_, name) in slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </UButton>
</template>
