
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps({
  divide: false
})
defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageList || {}) }))
</script>

<template>
  <Primitive :as="as" role="list" :class="ui({ class: props.class, divide: props.divide })">
    <slot />
  </Primitive>
</template>
