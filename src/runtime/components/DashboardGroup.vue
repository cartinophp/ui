
<script setup>
import { ref, computed } from 'vue'
import { Primitive } from 'reka-ui'
import { provideDashboardContext } from '../utils/dashboard'
import { tv } from '../utils/tv'

const props = defineProps({
  storage: 'cookie',
  storageKey: 'dashboard',
  persistent: true,
  unit: '%'
})
defineSlots()

const nuxtApp = useNuxtApp()
const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardGroup || {}) }))

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
  collapseSidebar: (collapsed) => {
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
