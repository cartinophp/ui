
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTrProps>()
defineSlots<ProseTrSlots>()

const appConfig = useAppConfig() as ProseTr['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.tr || {}) }) as unknown as ProseTr['ui'])
</script>

<template>
  <tr :class="ui({ class: props.class })">
    <slot />
  </tr>
</template>
