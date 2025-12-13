<script setup>
import { computed, watch } from 'vue'
import { Primitive } from 'reka-ui'
import bannerTheme from '@/themes/banner'
import Link from './link.vue'
import Icon from '@/components/Icon.vue'
import Button from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  id: {
    type: String,
    default: undefined
  },
  icon: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  actions: {
    type: Array,
    default: () => []
  },
  to: {
    type: [String, Object],
    default: undefined
  },
  target: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: 'primary'
  },
  close: {
    type: [Boolean, Object],
    default: false
  },
  closeIcon: {
    type: String,
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

const emits = defineEmits(['close'])

const ui = computed(() => bannerTheme({
  color: props.color,
  to: !!props.to
}))

const id = computed(() => `banner-${props.id || '1'}`)

watch(id, (newId) => {
  if (typeof document === 'undefined' || typeof localStorage === 'undefined') return

  const isClosed = localStorage.getItem(newId) === 'true'
  const htmlElement = document.querySelector('html')

  htmlElement?.classList.toggle('hide-banner', isClosed)
}, { immediate: true })

const onClose = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(id.value, 'true')
  }
  if (typeof document !== 'undefined') {
    document.querySelector('html')?.classList.add('hide-banner')
  }
  emits('close')
}
</script>

<template>
  <Primitive :as="props.as" class="banner" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <Link
      v-if="props.to"
      :aria-label="props.title"
      v-bind="{ to: props.to, target: props.target, ...$attrs }"
      class="focus:outline-none"
      tabindex="-1"
      raw
    >
      <span class="absolute inset-0 " aria-hidden="true" />
    </Link>

    <div class="container" data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <div data-slot="left" :class="ui.left({ class: props.ui?.left })" />

      <div data-slot="center" :class="ui.center({ class: props.ui?.center })">
        <slot name="leading" :ui="ui">
          <Icon v-if="props.icon" :name="props.icon" data-slot="icon" :class="ui.icon({ class: props.ui?.icon })" />
        </slot>

        <div v-if="props.title || !!slots.title" data-slot="title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ props.title }}
          </slot>
        </div>

        <div v-if="props.actions?.length || !!slots.actions" data-slot="actions" :class="ui.actions({ class: props.ui?.actions })">
          <slot name="actions">
            <Button v-for="(action, index) in props.actions" :key="index" color="neutral" size="xs" v-bind="action" />
          </slot>
        </div>
      </div>

      <div data-slot="right" :class="ui.right({ class: props.ui?.right })">
        <slot name="close" :ui="ui">
          <Button
            v-if="props.close"
            :icon="props.closeIcon || 'i-heroicons-x-mark'"
            size="md"
            color="neutral"
            variant="ghost"
            aria-label="Close banner"
            v-bind="(typeof props.close === 'object' ? props.close : {})"
            data-slot="close"
            :class="ui.close({ class: props.ui?.close })"
            @click="onClose"
          />
        </slot>
      </div>
    </div>
  </Primitive>
</template>

<style scoped>
.hide-banner .banner {
  display: none;
}
</style>