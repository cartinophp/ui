
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.skeleton || {}) }))
</script>

<template>
  <Primitive
    :as="as"
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
    :class="ui({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
