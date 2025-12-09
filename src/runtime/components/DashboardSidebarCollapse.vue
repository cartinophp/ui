
<script setup>
import { ref, computed } from 'vue'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { useDashboard } from '../utils/dashboard'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

const props = defineProps({
  color: 'neutral',
  variant: 'ghost',
  side: 'left'
})

const buttonProps = useForwardProps(reactiveOmit(props, 'icon', 'side', 'class'))

const { t } = useLocale()
const appConfig = {}
const { sidebarCollapsed, collapseSidebar } = useDashboard({ sidebarCollapsed: ref(false), collapseSidebar: () => {} })

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardSidebarCollapse || {}) }))
</script>

<template>
  <UButton
    v-bind="{
      ...buttonProps,
      'icon': props.icon || (sidebarCollapsed ? appConfig.ui.icons.panelOpen : appConfig.ui.icons.panelClose),
      'aria-label': sidebarCollapsed ? t('dashboardSidebarCollapse.expand') : t('dashboardSidebarCollapse.collapse'),
      ...$attrs
    }"
    :class="ui({ class: props.class, side: props.side })"
    @click="collapseSidebar?.(!sidebarCollapsed)"
  />
</template>
