
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseCardGroupProps>()
defineSlots<ProseCardGroupSlots>()

const appConfig = useAppConfig() as ProseCardGroup['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.cardGroup || {}) }) as unknown as ProseCardGroup['ui'])
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot />
  </div>
</template>
