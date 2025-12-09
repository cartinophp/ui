
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseCardGroupProps>()
defineSlots<ProseCardGroupSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.cardGroup || {}) }))
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot />
  </div>
</template>
