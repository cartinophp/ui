<script lang="ts">
import theme from '../../theme/page-list.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type PageList = ComponentConfig<typeof theme, AppConfig, 'pageList'>

export interface PageListProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  divide?: boolean
  class?: any
}

export interface PageListSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps<PageListProps>(), {
  divide: false
})
defineSlots<PageListSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageList || {}) }) as unknown as PageList['ui'])
</script>

<template>
  <Primitive :as="as" role="list" :class="ui({ class: props.class, divide: props.divide })">
    <slot />
  </Primitive>
</template>
