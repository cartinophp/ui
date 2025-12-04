<script lang="ts">
import theme from '../../theme/dashboard-resize-handle.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type DashboardResizeHandle = ComponentConfig<typeof theme, AppConfig, 'dashboardResizeHandle'>

export interface DashboardResizeHandleProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface DashboardResizeHandleSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<DashboardResizeHandleProps>()
defineSlots<DashboardResizeHandleSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardResizeHandle || {}) }) as unknown as DashboardResizeHandle['ui'])
</script>

<template>
  <Primitive
    :as="as"
    role="separator"
    :class="ui({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
