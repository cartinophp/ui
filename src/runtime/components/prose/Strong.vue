
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseStrongProps>()
defineSlots<ProseStrongSlots>()

const appConfig = useAppConfig() as ProseStrong['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.strong || {}) }) as unknown as ProseStrong['ui'])
</script>

<template>
  <strong :class="ui({ class: props.class })">
    <slot />
  </strong>
</template>
