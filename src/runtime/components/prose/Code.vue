
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseCodeProps>()
defineSlots<ProseCodeSlots>()

const appConfig = useAppConfig() as ProseCode['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.code || {}) }) as unknown as ProseCode['ui'])
</script>

<template>
  <code :class="ui({ class: (props.class || '').split(',').join(' '), color: props.color })">
    <slot />
  </code>
</template>
