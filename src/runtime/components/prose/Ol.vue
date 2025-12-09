
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseOlProps>()
defineSlots<ProseOlSlots>()

const appConfig = useAppConfig() as ProseOl['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.ol || {}) }) as unknown as ProseOl['ui'])
</script>

<template>
  <ol :class="ui({ class: props.class })">
    <slot />
  </ol>
</template>
