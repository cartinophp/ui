
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseEmProps>()
defineSlots<ProseEmSlots>()

const appConfig = useAppConfig() as ProseEm['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.em || {}) }) as unknown as ProseEm['ui'])
</script>

<template>
  <em :class="ui({ class: props.class })"><slot /></em>
</template>
