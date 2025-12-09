
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTdProps>()
defineSlots<ProseTdSlots>()

const appConfig = useAppConfig() as ProseTd['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.td || {}) }) as unknown as ProseTd['ui'])
</script>

<template>
  <td :class="ui({ class: props.class })">
    <slot />
  </td>
</template>
