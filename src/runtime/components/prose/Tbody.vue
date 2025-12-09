
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTbodyProps>()
defineSlots<ProseTbodySlots>()

const appConfig = useAppConfig() as ProseTbody['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.tbody || {}) }) as unknown as ProseTbody['ui'])
</script>

<template>
  <tbody :class="ui({ class: props.class })">
    <slot />
  </tbody>
</template>
