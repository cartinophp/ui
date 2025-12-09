<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed, toRef } from 'vue'
import { defu } from 'defu'
import { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuArrow, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UDropdownMenuContent from './DropdownMenuContent.vue'

const props = withDefaults(defineProps(), {
  portal: true,
  modal: true,
  externalIcon: true,
  labelKey: 'label',
  descriptionKey: 'description'
})
const emits = defineEmits()
const slots = defineSlots()

const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'defaultOpen', 'open', 'modal'), emits)
const contentProps = toRef(() => defu(props.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 }) as DropdownMenuContentProps)
const arrowProps = toRef(() => props.arrow as DropdownMenuArrowProps)
const getProxySlots = () => omit(slots, ['default'])

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dropdownMenu || {}) })({
  size: props.size
}))
</script>

<template>
  <DropdownMenuRoot v-slot="{ open }" v-bind="rootProps">
    <DropdownMenuTrigger v-if="!!slots.default" as-child :class="props.class" :disabled="disabled">
      <slot :open="open" />
    </DropdownMenuTrigger>

    <UDropdownMenuContent
      :class="ui.content({ class: [!slots.default && props.class, props.ui?.content] })"
      :ui="ui"
      :ui-override="props.ui"
      v-bind="contentProps"
      :items="items"
      :portal="portal"
      :label-key="labelKey"
      :description-key="descriptionKey"
      :checked-icon="checkedIcon"
      :loading-icon="loadingIcon"
      :external-icon="externalIcon"
    >
      <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>

      <DropdownMenuArrow v-if="!!arrow" v-bind="arrowProps" data-slot="arrow" :class="ui.arrow({ class: props.ui?.arrow })" />
    </UDropdownMenuContent>
  </DropdownMenuRoot>
</template>
