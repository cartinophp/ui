<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import theme from '@/themes/user'
import Link from './Link.vue'
import Avatar from './Avatar.vue'

export interface UserProps {
  as?: string | object
  name?: string
  description?: string
  avatar?: any
  chip?: boolean | object
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  to?: string | object
  target?: string
  onClick?: () => void
  class?: string | object | any[]
  ui?: {
    root?: string
    avatar?: string
    wrapper?: string
    content?: string
    name?: string
    description?: string
  }
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<UserProps>(), {
  as: 'div',
  size: 'md',
  orientation: 'horizontal'
})

const slots = defineSlots()

const ui = computed(() => theme({ size: props.size, orientation: props.orientation, to: !!props.to }))
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
      <Avatar
        v-if="avatar"
        v-bind="avatar"
        :text="avatar.text || (props.name ? props.name.split(' ').slice(0, 2).map((w: string) => w[0].toUpperCase()).join('') : undefined)"
        :size="props.size"
        data-slot="avatar"
        :class="ui.avatar({ class: props.ui?.avatar })"
      />
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
        <p
          v-if="props.name || !!slots.name"
          data-slot="name"
          :class="ui.name({ class: props.ui?.name })"
        >
          <slot name="name">
            {{ props.name }}
          </slot>
        </p>
        <p
          v-if="props.description || !!slots.description"
          data-slot="description"
          :class="ui.description({ class: props.ui?.description })"
        >
          <slot name="description">
            {{ props.description }}
          </slot>
        </p>
      </slot>
    </div>
  </Primitive>
</template>
