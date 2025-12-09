
<script setup>
import { computed } from 'vue'
import { useRuntimeConfig, useAppConfig } from '#imports'
import { tv } from '../../utils/tv'

const props = defineProps<ProseH4Props>()
defineSlots<ProseH4Slots>()

const appConfig = useAppConfig()4['AppConfig']
const { headings } = useRuntimeConfig().public?.mdc || {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.h4 || {}) })())

const generate = computed(() => props.id && typeof headings?.anchorLinks === 'object' && headings.anchorLinks.h4)
</script>

<template>
  <h4 :id="id" :class="ui.base({ class: props.class })">
    <a v-if="id && generate" :href="`#${id}`" :class="ui.link({ class: props.ui?.link })">
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>
