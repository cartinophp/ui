
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTrProps>()
defineSlots<ProseTrSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.tr || {}) }))
</script>

<template>
  <tr :class="ui({ class: props.class })">
    <slot />
  </tr>
</template>
