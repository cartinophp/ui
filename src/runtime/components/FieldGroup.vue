<script lang="ts">
import theme from '../../theme/field-group.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type FieldGroup = ComponentConfig<typeof theme, AppConfig, 'fieldGroup'>

export interface FieldGroupProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'md'
   */
  size?: FieldGroup['variants']['size']
  /**
   * The orientation the buttons are laid out.
   * @defaultValue 'horizontal'
   */
  orientation?: FieldGroup['variants']['orientation']
  class?: any
  ui?: FieldGroup['slots']
}

export interface FieldGroupSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { provide, computed } from 'vue'
import { Primitive } from 'reka-ui'
import { fieldGroupInjectionKey } from '../composables/useFieldGroup'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps<FieldGroupProps>(), {
  orientation: 'horizontal'
})
defineSlots<FieldGroupSlots>()

const appConfig = {} as AppConfig

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.fieldGroup || {}) }) as unknown as FieldGroup['ui'])

provide(fieldGroupInjectionKey, computed(() => ({
  orientation: props.orientation,
  size: props.size
})))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ orientation, class: props.class })">
    <slot />
  </Primitive>
</template>
