<script lang="ts">
import theme from '../../theme/page-body.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type PageBody = ComponentConfig<typeof theme, AppConfig, 'pageBody'>

export interface PageBodyProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface PageBodySlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<PageBodyProps>()
defineSlots<PageBodySlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageBody || {}) }) as unknown as PageBody['ui'])
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
