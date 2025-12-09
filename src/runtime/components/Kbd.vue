
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useKbd } from '../composables/useKbd'
import { tv } from '../utils/tv'

const props = defineProps({
  as: 'kbd'
})
defineSlots()

const { getKbdKey } = useKbd()
const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.kbd || {}) }))
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class, color: props.color, variant: props.variant, size: props.size })">
    <slot>
      {{ getKbdKey(value) }}
    </slot>
  </Primitive>
</template>
