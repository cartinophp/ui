
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import UIcon from '../Icon.vue'

const props = defineProps<ProseIconProps>()

const appConfig = useAppConfig()

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.icon || {}) }))
</script>

<template>
  <UIcon :name="name" :class="ui({ class: props.class })" />
</template>
