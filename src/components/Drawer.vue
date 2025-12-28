<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/drawer'
import Icon from './Icon.vue'

export interface DrawerProps {
  open?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  title?: string
  description?: string
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<DrawerProps>(), {
  open: false,
  side: 'right',
  size: 'md'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const slots = defineSlots<{
  default?: () => any
  header?: () => any
  footer?: () => any
}>()

const ui = computed(() =>
  theme({
    side: props.side,
    size: props.size
  })
)

const handleOpenChange = (value: boolean) => {
  emit('update:open', value)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      :class="ui.overlay({ class: props.ui?.overlay })"
      @click="handleOpenChange(false)"
    />

    <div
      v-if="open"
      :class="ui.drawer({ class: props.ui?.drawer })"
      @keydown.escape="handleOpenChange(false)"
    >
      <button
        :class="ui.closeButton({ class: props.ui?.closeButton })"
        @click="handleOpenChange(false)"
      >
        <Icon name="solar:close-circle-linear" size="lg" />
        <span class="sr-only">Close</span>
      </button>
      <div
        v-if="title || description || slots.header"
        :class="ui.header({ class: props.ui?.header })"
      >
        <slot name="header">
          <h2
            v-if="title"
            :class="ui.title({ class: props.ui?.title })"
          >
            {{ title }}
          </h2>
          <p
            v-if="description"
            :class="ui.description({ class: props.ui?.description })"
          >
            {{ description }}
          </p>
        </slot>
      </div>
      <div :class="ui.body({ class: props.ui?.body })">
        <slot />
      </div>
      <div
        v-if="slots.footer"
        :class="ui.footer({ class: props.ui?.footer })"
      >
        <slot name="footer" />
      </div>
    </div>
  </Teleport>
</template>
