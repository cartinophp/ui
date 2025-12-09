
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useFieldGroup } from '../composables/useFieldGroup'
import { useComponentIcons } from '../composables/useComponentIcons'
import { tv } from '../utils/tv'
import UIcon from './Icon.vue'
import UAvatar from './Avatar.vue'

const props = defineProps({
  as: 'span'
})
const slots = defineSlots()

const appConfig = {}
const { orientation, size: fieldGroupSize } = useFieldGroup(props)
const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props)

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.badge || {}) })({
  color: props.color,
  variant: props.variant,
  size: fieldGroupSize.value || props.size,
  square: props.square || (!slots.default && !props.label),
  fieldGroup: orientation.value
}))
</script>

<template>
  <Primitive :as="as" data-slot="base" :class="ui.base({ class: [props.ui?.base, props.class] })">
    <slot name="leading" :ui="ui">
      <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      <UAvatar v-else-if="!!avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()))" v-bind="avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
    </slot>

    <slot :ui="ui">
      <span v-if="label !== undefined && label !== null" data-slot="label" :class="ui.label({ class: props.ui?.label })">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :ui="ui">
      <UIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" data-slot="trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
    </slot>
  </Primitive>
</template>
