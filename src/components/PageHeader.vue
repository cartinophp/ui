<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import pageHeaderTheme from '../themes/page-header'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'div'
  },
  headline: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  links: {
    type: Array,
    default: () => []
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const slots = defineSlots()

const ui = computed(() => pageHeaderTheme({
  title: !!(props.title || slots.title)
}))
</script>

<template>
  <Primitive
    :as="props.as"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    v-bind="$attrs"
  >
    <div data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <div v-if="headline || slots.headline" data-slot="headline" :class="ui.headline({ class: props.ui?.headline })">
        <slot name="headline">
          {{ props.headline }}
        </slot>
      </div>

      <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
        <h1 v-if="title || slots.title" data-slot="title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ props.title }}
          </slot>
        </h1>

        <div v-if="links?.length || slots.links" data-slot="links" :class="ui.links({ class: props.ui?.links })">
          <slot name="links">
            <UButton
              v-for="(link, index) in props.links"
              :key="index"
              color="neutral"
              variant="outline"
              v-bind="link"
            />
          </slot>
        </div>
      </div>

      <div v-if="description || slots.description" data-slot="description" :class="ui.description({ class: props.ui?.description })">
        <slot name="description">
          {{ props.description }}
        </slot>
      </div>

      <slot />
    </div>
  </Primitive>
</template>
