
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseFieldGroupProps>()
defineSlots<ProseFieldGroupSlots>()

const appConfig = useAppConfig() as ProseFieldGroup['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.fieldGroup || {}) }) as unknown as ProseFieldGroup['ui'])
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
