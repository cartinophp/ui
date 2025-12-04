<script lang="ts">
import theme from '../../theme/page-columns.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type PageColumns = ComponentConfig<typeof theme, AppConfig, 'pageColumns'>

export interface PageColumnsProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface PageColumnsSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<PageColumnsProps>()
defineSlots<PageColumnsSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageColumns || {}) }) as unknown as PageColumns['ui'])
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
