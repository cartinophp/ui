<script lang="ts">
import theme from '../../theme/dashboard-sidebar-toggle.js'
import type { ButtonProps, LinkPropsKeys } from '../types'
import type { ComponentConfig, AppConfig } from '../types/tv'

type DashboardSidebarToggle = ComponentConfig<typeof theme, AppConfig, 'dashboardSidebarToggle'>

export interface DashboardSidebarToggleProps extends Omit<ButtonProps, LinkPropsKeys | 'color' | 'variant'> {
  /**
   * @defaultValue 'neutral'
   */
  color?: ButtonProps['color']
  /**
   * @defaultValue 'ghost'
   */
  variant?: ButtonProps['variant']
  /**
   * The side of the sidebar to toggle.
   * @defaultValue 'left'
   */
  side?: 'left' | 'right'
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { useDashboard } from '../utils/dashboard'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DashboardSidebarToggleProps>(), {
  color: 'neutral',
  variant: 'ghost',
  side: 'left'
})

const buttonProps = useForwardProps(reactiveOmit(props, 'icon', 'side', 'class'))

const { t } = useLocale()
const appConfig = {} as AppConfig
const { sidebarOpen, toggleSidebar } = useDashboard({ sidebarOpen: ref(false), toggleSidebar: () => {} })

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardSidebarToggle || {}) }) as unknown as DashboardSidebarToggle['ui'])
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
