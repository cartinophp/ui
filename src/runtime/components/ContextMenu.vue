<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed, toRef } from 'vue'
import { ContextMenuRoot, ContextMenuTrigger, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UContextMenuContent from './ContextMenuContent.vue'

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

const rootProps = useForwardPropsEmits(reactivePick(props, 'modal'), emits)
const contentProps = toRef(() => props.content)
const getProxySlots = () => omit(slots, ['default'])

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.contextMenu || {}) })({
  size: props.size
}))
</script>

<template>
  <ContextMenuRoot v-bind="rootProps">
    <ContextMenuTrigger v-if="!!slots.default" as-child :disabled="disabled" :class="props.class">
      <slot />
    </ContextMenuTrigger>

    <UContextMenuContent
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
    </UContextMenuContent>
  </ContextMenuRoot>
</template>
