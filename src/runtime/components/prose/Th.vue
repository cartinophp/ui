
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseThProps>()
defineSlots<ProseThSlots>()

const appConfig = useAppConfig() as ProseTh['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.th || {}) }) as unknown as ProseTh['ui'])
</script>

<template>
  <th :class="ui({ class: props.class })">
    <slot />
  </th>
</template>
