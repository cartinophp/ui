<script lang="ts">
import theme from '../../theme/dashboard-group.js'
import type { UseResizableProps } from '../composables/useResizable'
import type { ComponentConfig, AppConfig } from '../types/tv'

type DashboardGroup = ComponentConfig<typeof theme, AppConfig, 'dashboardGroup'>

export interface DashboardGroupProps extends Pick<UseResizableProps, 'storage' | 'storageKey' | 'persistent' | 'unit'> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface DashboardGroupSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Primitive } from 'reka-ui'
import { provideDashboardContext } from '../utils/dashboard'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps<DashboardGroupProps>(), {
  storage: 'cookie',
  storageKey: 'dashboard',
  persistent: true,
  unit: '%'
})
defineSlots<DashboardGroupSlots>()

const nuxtApp = useNuxtApp()
const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardGroup || {}) }) as unknown as DashboardGroup['ui'])

const sidebarOpen = ref(false)
const sidebarCollapsed = ref(false)

provideDashboardContext({
  storage: props.storage,
  storageKey: props.storageKey,
  persistent: props.persistent,
  unit: props.unit,
  sidebarOpen,
  toggleSidebar: () => {
    nuxtApp.hooks.callHook('dashboard:sidebar:toggle')
  },
  sidebarCollapsed,
  collapseSidebar: (collapsed: boolean) => {
    nuxtApp.hooks.callHook('dashboard:sidebar:collapse', collapsed)
  },
  toggleSearch: () => {
    nuxtApp.hooks.callHook('dashboard:search:toggle')
  }
})
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
