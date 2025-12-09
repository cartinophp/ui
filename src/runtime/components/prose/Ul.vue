
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseUlProps>()
defineSlots<ProseUlSlots>()

const appConfig = useAppConfig() as ProseUl['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.ul || {}) }) as unknown as ProseUl['ui'])
</script>

<template>
  <ul :class="ui({ class: props.class })">
    <slot />
  </ul>
</template>
