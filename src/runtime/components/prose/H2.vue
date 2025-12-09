
<script setup>
import { computed } from 'vue'
import { useRuntimeConfig, useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import UIcon from '../Icon.vue'

const props = defineProps<ProseH2Props>()
defineSlots<ProseH2Slots>()

const appConfig = useAppConfig() as ProseH2['AppConfig']
const { headings } = useRuntimeConfig().public?.mdc || {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.h2 || {}) })() as unknown as ProseH2['ui'])

const generate = computed(() => props.id && typeof headings?.anchorLinks === 'object' && headings.anchorLinks.h2)
</script>

<template>
  <h2 :id="id" :class="ui.base({ class: props.class })">
    <a v-if="id && generate" :href="`#${id}`" :class="ui.link({ class: props.ui?.link })">
      <span :class="ui.leading({ class: props.ui?.leading })">
        <UIcon :name="appConfig.ui.icons.hash" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </span>

      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
