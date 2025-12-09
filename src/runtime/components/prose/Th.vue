
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseThProps>()
defineSlots<ProseThSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.th || {}) }))
</script>

<template>
  <th :class="ui({ class: props.class })">
    <slot />
  </th>
</template>
