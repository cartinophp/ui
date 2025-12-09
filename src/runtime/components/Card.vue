
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()
const slots = defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.card || {}) })({
  variant: props.variant
}))
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.header" data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" />
    </div>

    <div v-if="!!slots.default" data-slot="body" :class="ui.body({ class: props.ui?.body })">
      <slot />
    </div>

    <div v-if="!!slots.footer" data-slot="footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
