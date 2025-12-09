
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import UKbd from '../Kbd.vue'

const props = defineProps<ProseKbdProps>()

const appConfig = useAppConfig() as ProseKbd['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.kbd || {}) }) as unknown as ProseKbd['ui'])
</script>

<template>
  <UKbd :value="value" :class="ui({ class: props.class })" />
</template>
