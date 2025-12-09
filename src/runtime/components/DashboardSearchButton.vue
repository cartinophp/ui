
<script setup>
import { computed, toRef } from 'vue'
import { useForwardProps } from 'reka-ui'
import { defu } from 'defu'
import { reactiveOmit, createReusableTemplate } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { useDashboard } from '../utils/dashboard'
import { omit, transformUI } from '../utils'
import { tv } from '../utils/tv'
import UButton from './Button.vue'
import UKbd from './Kbd.vue'
import UTooltip from './Tooltip.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  color: 'neutral',
  collapsed: false,
  tooltip: false,
  kbds: () => ['meta', 'k']
})
const slots = defineSlots()

const [DefineButtonTemplate, ReuseButtonTemplate] = createReusableTemplate()

const getProxySlots = () => omit(slots, ['trailing'])

const buttonProps = useForwardProps(reactiveOmit(props, 'icon', 'label', 'variant', 'collapsed', 'tooltip', 'kbds', 'class', 'ui'))
const tooltipProps = toRef(() => defu(typeof props.tooltip === 'boolean' ? {} : props.tooltip, { delayDuration: 0, content: { side: 'right' } }))

const { t } = useLocale()
const appConfig = {}
const { toggleSearch } = useDashboard({ toggleSearch: () => {} })

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.dashboardSearchButton || {}) })({
  collapsed: props.collapsed
}))
</script>

<template>
  <DefineButtonTemplate>
    <UButton
      :icon="icon || appConfig.ui.icons.search"
      :label="label || t('dashboardSearchButton.label')"
      :variant="variant || (collapsed ? 'ghost' : 'outline')"
      v-bind="{
        ...buttonProps,
        ...(collapsed ? {
          'square': true,
          'aria-label': label || t('dashboardSearchButton.label')
        } : {}),
        ...$attrs
      }"
      :class="ui.base({ class: [props.ui?.base, props.class] })"
      :ui="transformUI(ui, props.ui)"
      @click="toggleSearch"
    >
      <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>

      <template #trailing="{ ui: uiProxy }">
        <div data-slot="trailing" :class="ui.trailing({ class: props.ui?.trailing })">
          <slot name="trailing" :ui="uiProxy">
            <template v-if="kbds?.length">
              <UKbd v-for="(kbd, index) in kbds" :key="index" variant="subtle" v-bind="typeof kbd === 'string' ? { value: kbd } : kbd" />
            </template>
          </slot>
        </div>
      </template>
    </UButton>
  </DefineButtonTemplate>

  <UTooltip v-if="collapsed && tooltip" :text="label || t('dashboardSearchButton.label')" v-bind="tooltipProps">
    <ReuseButtonTemplate />
  </UTooltip>
  <ReuseButtonTemplate v-else />
</template>
