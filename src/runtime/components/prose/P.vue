
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProsePProps>()
defineSlots<ProsePSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.p || {}) }))
</script>

<template>
  <p :class="ui({ class: props.class })">
    <slot />
  </p>
</template>
