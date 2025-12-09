
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseStepsProps>()
defineSlots<ProseStepsSlots>()

const appConfig = useAppConfig() as ProseSteps['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.steps || {}) }) as unknown as ProseSteps['ui'])
</script>

<template>
  <div :class="ui({ class: props.class, level: props.level })">
    <slot />
  </div>
</template>
