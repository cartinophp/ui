<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import userTheme from '@/themes/user'
import Link from './link.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'div'
  },
  name: {
    type: String,
    default: undefined
  },
  description: {
    type: String,
    default: undefined
  },
  avatar: {
    type: Object,
    default: undefined
  },
  chip: {
    type: [Boolean, Object],
    default: undefined
  },
  size: {
    type: String,
    default: 'md'
  },
  orientation: {
    type: String,
    default: 'horizontal'
  },
  to: {
    type: [String, Object],
    default: undefined
  },
  target: {
    type: String,
    default: undefined
  },
  onClick: {
    type: Function,
    default: undefined
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

const ui = computed(() => userTheme({
  size: props.size,
  orientation: props.orientation,
  to: !!props.to || !!props.onClick
}))
</script>

<template>
  <Primitive
    :as="props.as"
    :data-orientation="props.orientation"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    @click="props.onClick"
  >
    <slot name="avatar" :ui="ui">
      <!-- TODO: Replace with Avatar component when available -->
      <div
        v-if="avatar"
        data-slot="avatar"
        :class="ui.avatar({ class: props.ui?.avatar })"
      >
        <div
          class="rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium"
          :class="{
            'w-6 h-6 text-xs': size === '3xs' || size === '2xs',
            'w-8 h-8 text-sm': size === 'xs' || size === 'sm',
            'w-10 h-10 text-base': size === 'md',
            'w-12 h-12 text-lg': size === 'lg'
          }"
        >
          {{ avatar.text || (props.name ? props.name.charAt(0).toUpperCase() : '?') }}
        </div>
      </div>
    </slot>

    <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
      <Link
        v-if="to"
        :aria-label="props.name"
        v-bind="{ to: props.to, target: props.target, ...$attrs }"
        class="focus:outline-none peer"
        raw
      >
        <span class="absolute inset-0" aria-hidden="true" />
      </Link>

      <slot>
        <p v-if="props.name || !!slots.name" data-slot="name" :class="ui.name({ class: props.ui?.name })">
          <slot name="name">
            {{ props.name }}
          </slot>
        </p>
        <p v-if="props.description || !!slots.description" data-slot="description" :class="ui.description({ class: props.ui?.description })">
          <slot name="description">
            {{ props.description }}
          </slot>
        </p>
      </slot>
    </div>
  </Primitive>
</template>
