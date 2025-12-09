
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()
defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardResizeHandle || {}) }))
</script>

<template>
  <Primitive
    :as="as"
    role="separator"
    :class="ui({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
