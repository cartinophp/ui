
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import UBadge from '../Badge.vue'

const props = defineProps<ProseBadgeProps>()
defineSlots<ProseBadgeSlots>()

const appConfig = useAppConfig() as ProseBadge['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.badge || {}) }) as unknown as ProseBadge['ui'])
</script>

<template>
  <UBadge color="primary" variant="subtle" :class="ui({ class: props.class })">
    <slot mdc-unwrap="p" />
  </UBadge>
</template>
