<script lang="ts">
import theme from '../../theme/page-grid.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type PageGrid = ComponentConfig<typeof theme, AppConfig, 'pageGrid'>

export interface PageGridProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface PageGridSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<PageGridProps>()
defineSlots<PageGridSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageGrid || {}) }) as unknown as PageGrid['ui'])
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
