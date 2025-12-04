<script lang="ts">
import theme from '../../theme/skeleton.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type Skeleton = ComponentConfig<typeof theme, AppConfig, 'skeleton'>

export interface SkeletonProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<SkeletonProps>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.skeleton || {}) }) as unknown as Skeleton['ui'])
</script>

<template>
  <Primitive
    :as="as"
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
    :class="ui({ class: props.class })"
  >
    <slot />
  </Primitive>
</template>
