
<script setup>
import { provide, computed } from 'vue'
import { Primitive } from 'reka-ui'
import { fieldGroupInjectionKey } from '../composables/useFieldGroup'
import { tv } from '../utils/tv'

const props = defineProps({
  orientation: 'horizontal'
})
defineSlots()

const appConfig = {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.fieldGroup || {}) }))

provide(fieldGroupInjectionKey, computed(() => ({
  orientation: props.orientation,
  size: props.size
})))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ orientation, class: props.class })">
    <slot />
  </Primitive>
</template>
