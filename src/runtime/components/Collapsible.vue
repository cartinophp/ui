<script lang="ts">
import type { CollapsibleRootProps, CollapsibleRootEmits } from 'reka-ui'
import theme from '../../theme/collapsible.js'
import type { ComponentConfig, AppConfig } from '../types/tv'

type Collapsible = ComponentConfig<typeof theme, AppConfig, 'collapsible'>

export interface CollapsibleProps extends /** @vue-ignore */ /** @vue-ignore */ Pick<CollapsibleRootProps, 'defaultOpen' | 'open' | 'disabled' | 'unmountOnHide'> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
  ui?: Collapsible['slots']
}

export interface CollapsibleEmits extends /** @vue-ignore */ /** @vue-ignore */ CollapsibleRootEmits {}

export interface CollapsibleSlots {
  default(props: { open: boolean }): any
  content(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { tv } from '../utils/tv'

const props = withDefaults(defineProps<CollapsibleProps>(), {
  unmountOnHide: true
})
const emits = defineEmits<CollapsibleEmits>()
const slots = defineSlots<CollapsibleSlots>()

const appConfig = {} as AppConfig

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultOpen', 'open', 'disabled', 'unmountOnHide'), emits)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.collapsible || {}) })() as unknown as Collapsible['ui'])
</script>

<template>
  <CollapsibleRoot v-slot="{ open }" v-bind="rootProps" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <CollapsibleTrigger v-if="!!slots.default" as-child>
      <slot :open="open" />
    </CollapsibleTrigger>

    <CollapsibleContent data-slot="content" :class="ui.content({ class: props.ui?.content })">
      <slot name="content" />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
