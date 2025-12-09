
<script setup>
import { computed, toRef } from 'vue'
import { defu } from 'defu'
import { TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { usePortal } from '../composables/usePortal'
import { tv } from '../utils/tv'
import UKbd from './Kbd.vue'

const props = defineProps({
  portal: true
})
const emits = defineEmits()
const slots = defineSlots()

const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'defaultOpen', 'open', 'delayDuration', 'disableHoverableContent', 'disableClosingTrigger', 'ignoreNonKeyboardFocus'), emits)
const portalProps = usePortal(toRef(() => props.portal))
const contentProps = toRef(() => defu(props.content, { side: 'bottom', sideOffset: 8, collisionPadding: 8 }))
const arrowProps = toRef(() => props.arrow)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.tooltip || {}) })({
  side: contentProps.value.side
}))
</script>

<template>
  <TooltipRoot v-slot="{ open }" v-bind="rootProps" :disabled="!(text || kbds?.length || !!slots.content) || props.disabled">
    <TooltipTrigger v-if="!!slots.default || !!reference" v-bind="$attrs" as-child :reference="reference" :class="props.class">
      <slot :open="open" />
    </TooltipTrigger>

    <TooltipPortal v-bind="portalProps">
      <TooltipContent v-bind="contentProps" data-slot="content" :class="ui.content({ class: [!slots.default && props.class, props.ui?.content] })">
        <slot name="content" :ui="ui">
          <span v-if="text" data-slot="text" :class="ui.text({ class: props.ui?.text })">{{ text }}</span>

          <span v-if="kbds?.length" data-slot="kbds" :class="ui.kbds({ class: props.ui?.kbds })">
            <UKbd v-for="(kbd, index) in kbds" :key="index" :size="((props.ui?.kbdsSize || ui.kbdsSize()))" v-bind="typeof kbd === 'string' ? { value: kbd } : kbd" />
          </span>
        </slot>

        <TooltipArrow v-if="!!arrow" v-bind="arrowProps" data-slot="arrow" :class="ui.arrow({ class: props.ui?.arrow })" />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
