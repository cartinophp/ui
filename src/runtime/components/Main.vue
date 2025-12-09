
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()
defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.main || {}) }))
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
