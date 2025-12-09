
<script setup>
import { computed, useId, toRef } from 'vue'
import { useResizable } from '../composables/useResizable'
import { useDashboard } from '../utils/dashboard'
import { tv } from '../utils/tv'
import UDashboardResizeHandle from './DashboardResizeHandle.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  minSize: 15,
  resizable: false
})
defineSlots()

const appConfig = {}
const dashboardContext = useDashboard({ storageKey: 'dashboard', unit: '%' })

const id = `${dashboardContext.storageKey}-panel-${props.id || useId()}`

const { el, size, isDragging, onMouseDown, onTouchStart, onDoubleClick } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })))

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardPanel || {}) })({
  size: !!size.value
}))
</script>

<template>
  <div
    :id="id"
    ref="el"
    v-bind="$attrs"
    :data-dragging="isDragging"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    :style="[size ? { '--width': `${size}${dashboardContext.unit}` } : undefined]"
  >
    <slot>
      <slot name="header" />

      <div data-slot="body" :class="ui.body({ class: props.ui?.body })">
        <slot name="body" />
      </div>

      <slot name="footer" />
    </slot>
  </div>

  <slot name="resize-handle" :on-mouse-down="onMouseDown" :on-touch-start="onTouchStart" :on-double-click="onDoubleClick">
    <UDashboardResizeHandle
      v-if="resizable"
      :aria-controls="id"
      data-slot="handle"
      :class="ui.handle({ class: props.ui?.handle })"
      @mousedown="onMouseDown"
      @touchstart="onTouchStart"
      @dblclick="onDoubleClick"
    />
  </slot>
</template>
