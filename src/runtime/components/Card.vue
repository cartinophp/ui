<script lang="ts">
import theme from '../../theme/card.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type Card = ComponentConfig<typeof theme, AppConfig, 'card'>

export interface CardProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'outline'
   */
  variant?: Card['variants']['variant']
  class?: any
  ui?: Card['slots']
}

export interface CardSlots {
  header(props?: {}): any
  default(props?: {}): any
  footer(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps<CardProps>()
const slots = defineSlots<CardSlots>()

const appConfig = {} as AppConfig

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.card || {}) })({
  variant: props.variant
}) as unknown as Card['ui'])
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.header" data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" />
    </div>

    <div v-if="!!slots.default" data-slot="body" :class="ui.body({ class: props.ui?.body })">
      <slot />
    </div>

    <div v-if="!!slots.footer" data-slot="footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
