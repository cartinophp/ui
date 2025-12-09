
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseUlProps>()
defineSlots<ProseUlSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.ul || {}) }))
</script>

<template>
  <ul :class="ui({ class: props.class })">
    <slot />
  </ul>
</template>
