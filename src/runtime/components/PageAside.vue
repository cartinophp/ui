
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps({
  as: 'aside'
})
const slots = defineSlots()

const appConfig = {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageAside || {}) })())
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <div v-if="!!slots.top" data-slot="top" :class="ui.top({ class: props.ui?.top })">
        <div data-slot="topHeader" :class="ui.topHeader({ class: props.ui?.topHeader })" />
        <div data-slot="topBody" :class="ui.topBody({ class: props.ui?.topBody })">
          <slot name="top" />
        </div>
        <div data-slot="topFooter" :class="ui.topFooter({ class: props.ui?.topFooter })" />
      </div>

      <slot />

      <slot name="bottom" />
    </div>
  </Primitive>
</template>
