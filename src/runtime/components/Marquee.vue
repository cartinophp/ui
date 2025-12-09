
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps({
  orientation: 'horizontal',
  repeat: 4,
  overlay: true
})
defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.marquee || {}) })({
  pauseOnHover: props.pauseOnHover,
  orientation: props.orientation,
  reverse: props.reverse,
  overlay: props.overlay
}))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-for="i in repeat" :key="i" data-slot="content" :class="ui.content({ class: [props.ui?.content] })">
      <slot />
    </div>
  </Primitive>
</template>
