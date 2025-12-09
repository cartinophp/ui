
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseTabsItemProps>()
defineSlots<ProseTabsItemSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.tabsItem || {}) }))
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot>
      {{ description }}
    </slot>
  </div>
</template>
