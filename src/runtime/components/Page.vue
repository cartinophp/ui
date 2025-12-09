
<script setup>
import { computed } from 'vue'
import { Primitive, Slot } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()
const slots = defineSlots()

const appConfig = {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.page || {}) })({
  left: !!slots.left,
  right: !!slots.right
}))
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <Slot v-if="!!slots.left" data-slot="left" :class="ui.left({ class: props.ui?.left })">
      <slot name="left" />
    </Slot>

    <div data-slot="center" :class="ui.center({ class: props.ui?.center })">
      <slot />
    </div>

    <Slot v-if="!!slots.right" data-slot="right" :class="ui.right({ class: props.ui?.right })">
      <slot name="right" />
    </Slot>
  </Primitive>
</template>
