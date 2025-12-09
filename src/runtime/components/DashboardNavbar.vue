
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { createReusableTemplate } from '@vueuse/core'
import { useDashboard } from '../utils/dashboard'
import { tv } from '../utils/tv'
import UDashboardSidebarToggle from './DashboardSidebarToggle.vue'
import UIcon from './Icon.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  toggle: true,
  toggleSide: 'left'
})
const slots = defineSlots()

const appConfig = {}
const dashboardContext = useDashboard({})

const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate()

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardNavbar || {}) })())
</script>

<template>
  
    <slot name="toggle" v-bind="{ ...dashboardContext, ui }">
      <UDashboardSidebarToggle
        v-if="toggle"
        v-bind="(typeof toggle === 'object' ? toggle : {})"
        :side="toggleSide"
        data-slot="toggle"
        :class="ui.toggle({ class: props.ui?.toggle, toggleSide })"
      />
    </slot>
  </DefineToggleTemplate>

  <Primitive :as="as" v-bind="$attrs" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="left" :class="ui.left({ class: props.ui?.left })">
      <ReuseToggleTemplate v-if="toggleSide === 'left'" />

      <slot name="left" v-bind="dashboardContext">
        <slot name="leading" v-bind="{ ...dashboardContext, ui }">
          <UIcon v-if="icon" :name="icon" data-slot="icon" :class="ui.icon({ class: props.ui?.icon })" />
        </slot>

        <h1 data-slot="title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>

        <slot name="trailing" v-bind="{ ...dashboardContext, ui }" />
      </slot>
    </div>

    <div v-if="!!slots.default" data-slot="center" :class="ui.center({ class: props.ui?.center })">
      <slot v-bind="dashboardContext" />
    </div>

    <div data-slot="right" :class="ui.right({ class: props.ui?.right })">
      <slot name="right" v-bind="dashboardContext" />

      <ReuseToggleTemplate v-if="toggleSide === 'right'" />
    </div>
  </Primitive>
</template>
