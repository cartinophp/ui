
<script setup>
import { computed, toRef } from 'vue'
import { defu } from 'defu'
import { useForwardPropsEmits } from 'reka-ui'
import { Popover, HoverCard } from 'reka-ui/namespaced'
import { reactivePick } from '@vueuse/core'
import { usePortal } from '../composables/usePortal'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps(), {
  portal: true,
  mode: 'click',
  openDelay: 0,
  closeDelay: 0,
  dismissible: true
})
const emits = defineEmits()
const slots = defineSlots()

const appConfig = {}

const pick = props.mode === 'hover' ? reactivePick(props, 'defaultOpen', 'open', 'openDelay', 'closeDelay') : reactivePick(props, 'defaultOpen', 'open', 'modal')
const rootProps = useForwardPropsEmits(pick, emits)
const portalProps = usePortal(toRef(() => props.portal))
const contentProps = toRef(() => defu(props.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 }))
const contentEvents = computed(() => {
  if (!props.dismissible) {
    const events = ['pointerDownOutside', 'interactOutside', 'escapeKeyDown']

    return events.reduce((acc, curr) => {
      acc[curr] = (e) => {
        e.preventDefault()
        emits('close:prevent')
      }
      return acc
    }, {} void>)
  }

  return {}
})
const arrowProps = toRef(() => props.arrow)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.popover || {}) })({
  side: contentProps.value.side
}))

const Component = computed(() => props.mode === 'hover' ? HoverCard )
</script>

<template>
  <Component.Root v-slot="{ open, close }: { open, close?: () => void }" v-bind="rootProps">
    <Component.Trigger v-if="!!slots.default || !!reference" as-child :reference="reference" :class="props.class">
      <slot :open="open" />
    </Component.Trigger>

    <Component.Anchor v-if="'Anchor' in Component && !!slots.anchor" as-child>
      <slot name="anchor" v-bind="((close ? { close } : {}))" />
    </Component.Anchor>

    <Component.Portal v-bind="portalProps">
      <Component.Content v-bind="contentProps" data-slot="content" :class="ui.content({ class: [!slots.default && props.class, props.ui?.content] })" v-on="contentEvents">
        <slot name="content" v-bind="((close ? { close } : {}))" />

        <Component.Arrow v-if="!!arrow" v-bind="arrowProps" data-slot="arrow" :class="ui.arrow({ class: props.ui?.arrow })" />
      </Component.Content>
    </Component.Portal>
  </Component.Root>
</template>
