
<script setup>
import { computed, ref, inject } from 'vue'
import { defu } from 'defu'
import { useForwardProps } from 'reka-ui'
import { useComponentIcons } from '../composables/useComponentIcons'
import { useFieldGroup } from '../composables/useFieldGroup'
import { formLoadingInjectionKey } from '../composables/useFormField'
import { omit, mergeClasses } from '../utils'
import { tv } from '../utils/tv'
import { pickLinkProps } from '../utils/link'
import UIcon from './Icon.vue'
import UAvatar from './Avatar.vue'
import ULink from './Link.vue'
import ULinkBase from './LinkBase.vue'

const props = defineProps()
const slots = defineSlots()

const appConfig = {}
const { orientation, size: buttonSize } = useFieldGroup(props)

const linkProps = useForwardProps(pickLinkProps(props))

const loadingAutoState = ref(false)
const formLoading = inject(formLoadingInjectionKey, undefined)

async function onClickWrapper(event) {
  loadingAutoState.value = true
  const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick]
  try {
    await Promise.all(callbacks.map(fn => fn?.(event)))
  } finally {
    loadingAutoState.value = false
  }
}

const isLoading = computed(() => {
  return props.loading || (props.loadingAuto && (loadingAutoState.value || (formLoading?.value && props.type === 'submit')))
})

const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(
  computed(() => ({ ...props, loading: isLoading.value }))
)

const ui = computed(() => tv({
  extend: tv(theme),
  ...defu({
    variants: {
      active: {
        true: {
          base: mergeClasses(appConfig.ui?.button?.variants?.active?.true?.base, props.activeClass)
        },
        false: {
          base: mergeClasses(appConfig.ui?.button?.variants?.active?.false?.base, props.inactiveClass)
        }
      }
    }
  }, appConfig.ui?.button || {})
})({
  color: props.color,
  variant: props.variant,
  size: buttonSize.value,
  loading: isLoading.value,
  block: props.block,
  square: props.square || (!slots.default && !props.label),
  leading: isLeading.value,
  trailing: isTrailing.value,
  fieldGroup: orientation.value
}))
</script>

<template>
  <ULink
    v-slot="{ active, ...slotProps }"
    :type="type"
    :disabled="disabled || isLoading"
    v-bind="omit(linkProps, ['type', 'disabled', 'onClick'])"
    custom
  >
    <ULinkBase
      v-bind="slotProps"
      data-slot="base"
      :class="ui.base({
        class: [props.ui?.base, props.class],
        active,
        ...(active && activeVariant ? { variant: activeVariant } : {}),
        ...(active && activeColor ? { color: activeColor } : {})
      })"
      @click="onClickWrapper"
    >
      <slot name="leading" :ui="ui">
        <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon, active })" />
        <UAvatar v-else-if="!!avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()))" v-bind="avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar, active })" />
      </slot>

      <slot :ui="ui">
        <span v-if="label !== undefined && label !== null" data-slot="label" :class="ui.label({ class: props.ui?.label, active })">
          {{ label }}
        </span>
      </slot>

      <slot name="trailing" :ui="ui">
        <UIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" data-slot="trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon, active })" />
      </slot>
    </ULinkBase>
  </ULink>
</template>
