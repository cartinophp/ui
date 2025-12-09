
<script setup>
import { computed } from 'vue'
import { Primitive, Slot } from 'reka-ui'
import { tv } from '../utils/tv'

const props = defineProps()
const slots = defineSlots()

const appConfig = {}

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.chatPalette || {}) })())
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="content" :class="ui.content({ class: props.ui?.content })">
      
        <slot />
      </Slot>
    </div>

    <Slot v-if="!!slots.prompt" data-slot="prompt" :class="ui.prompt({ class: props.ui?.prompt })">
      <slot name="prompt" />
    </Slot>
  </Primitive>
</template>
