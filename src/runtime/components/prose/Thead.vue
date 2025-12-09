
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTheadProps>()
defineSlots<ProseTheadSlots>()

const appConfig = useAppConfig() as ProseThead['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.thead || {}) }) as unknown as ProseThead['ui'])
</script>

<template>
  <thead :class="ui({ class: props.class })">
    <slot />
  </thead>
</template>
