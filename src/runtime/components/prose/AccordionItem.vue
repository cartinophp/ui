
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseAccordionItemProps>()
defineSlots<ProseAccordionItemSlots>()

const appConfig = useAppConfig() as ProseAccordionItem['AppConfig']

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.accordionItem || {}) }) as unknown as ProseAccordionItem['ui'])
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot>
      {{ description }}
    </slot>
  </div>
</template>
