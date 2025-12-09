
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseHrProps>()

const appConfig = useAppConfig() as ProseHr['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.hr || {}) }) as unknown as ProseHr['ui'])
</script>

<template>
  <hr :class="ui({ class: props.class })">
</template>
