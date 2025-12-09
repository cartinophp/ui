
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import ULink from '../Link.vue'

const appConfig = useAppConfig() as ProseA['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.a || {}) }) as unknown as ProseA['ui'])

const props = defineProps<ProseAProps>()
defineSlots<ProseASlots>()
</script>

<template>
  <ULink :href="href" :target="target" :class="ui({ class: props.class })" raw>
    <slot />
  </ULink>
</template>
