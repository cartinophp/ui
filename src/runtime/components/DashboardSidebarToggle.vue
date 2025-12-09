
<script setup>
import { ref, computed } from 'vue'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { useDashboard } from '../utils/dashboard'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  color: 'neutral',
  variant: 'ghost',
  side: 'left'
})

const buttonProps = useForwardProps(reactiveOmit(props, 'icon', 'side', 'class'))

const { t } = useLocale()
const appConfig = {}
const { sidebarOpen, toggleSidebar } = useDashboard({ sidebarOpen: ref(false), toggleSidebar: () => {} })

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardSidebarToggle || {}) }))
</script>

<template>
  <UButton
    v-bind="{
      ...buttonProps,
      'icon': props.icon || (sidebarOpen ? appConfig.ui.icons.close : appConfig.ui.icons.menu),
      'aria-label': sidebarOpen ? t('dashboardSidebarToggle.close') : t('dashboardSidebarToggle.open'),
      ...$attrs
    }"
    :class="ui({ class: props.class, side: props.side })"
    @click="toggleSidebar"
  />
</template>
