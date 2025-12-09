
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseLiProps>()
defineSlots<ProseLiSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.li || {}) }))
</script>

<template>
  <li :class="ui({ class: props.class })">
    <slot />
  </li>
</template>
