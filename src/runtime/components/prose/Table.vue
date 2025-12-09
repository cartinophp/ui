
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTableProps>()
defineSlots<ProseTableSlots>()

const appConfig = useAppConfig() as ProseTable['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.table || {}) })() as unknown as ProseTable['ui'])
</script>

<template>
  <div :class="ui.root({ class: [props.ui?.root, props.class] })">
    <table :class="ui.base({ class: props.ui?.base })">
      <slot />
    </table>
  </div>
</template>
