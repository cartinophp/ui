
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseEmProps>()
defineSlots<ProseEmSlots>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.em || {}) }))
</script>

<template>
  <em :class="ui({ class: props.class })"><slot /></em>
</template>
