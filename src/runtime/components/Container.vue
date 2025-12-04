<script lang="ts">
import theme from '../../theme/container.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type Container = ComponentConfig<typeof theme, AppConfig, 'container'>

export interface ContainerProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface ContainerSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<ContainerProps>()
defineSlots<ContainerSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.container || {}) }) as unknown as Container['ui'])
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
