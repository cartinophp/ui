
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseBlockquoteProps>()
defineSlots<ProseBlockquoteSlots>()

const appConfig = useAppConfig() as ProseBlockquote['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.blockquote || {}) }) as unknown as ProseBlockquote['ui'])
</script>

<template>
  <blockquote :class="ui({ class: props.class })">
    <slot />
  </blockquote>
</template>
