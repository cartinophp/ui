
<script setup>
import { computed } from 'vue'
import { useAppConfig } from '#imports'
import { useLocale } from '../../composables/useLocale'
import { transformUI } from '../../utils'
import { tv } from '../../utils/tv'
import UCollapsible from '../Collapsible.vue'
import UIcon from '../Icon.vue'

const props = defineProps<ProseCollapsibleProps>()
defineSlots<ProseCollapsibleSlots>()

const { t } = useLocale()
const appConfig = useAppConfig() as ProseCollapsible['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.collapsible || {}) })() as unknown as ProseCollapsible['ui'])
</script>

<template>
  <UCollapsible :unmount-on-hide="false" :class="props.class" :ui="transformUI(ui, props.ui)">
    <template #default="{ open }">
      <button :class="ui.trigger({ class: props.ui?.trigger })">
        <UIcon :name="icon || appConfig.ui.icons.chevronDown" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">
          {{ open ? (props.closeText || t('prose.collapsible.closeText')) : (props.openText || t('prose.collapsible.openText')) }} {{ props.name || t('prose.collapsible.name') }}
        </span>
      </button>
    </template>

    <template #content>
      <slot />
    </template>
  </UCollapsible>
</template>
