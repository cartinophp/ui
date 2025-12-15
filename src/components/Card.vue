<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/card'

export interface CardProps {
  title?: string
  description?: string
  variant?: 'default' | 'outline' | 'elevated' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  hover?: boolean
  clickable?: boolean
}

const { variant, size, hover, clickable, title, description } = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  size: 'md',
  hover: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const ui = computed(() => theme({
  variant,
  size,
  hover
}))

const handleClick = (event: MouseEvent) => {
  if (clickable) {
    emit('click', event)
  }
}
</script>

<template>
  <div :class="ui.root()" @click="handleClick" :tabindex="clickable ? 0 : undefined" role="button" :aria-label="clickable ? 'Clickable card' : undefined">
    <div v-if="title || description || $slots.header" :class="ui.header()">
      <slot name="header">
        <div v-if="title" :class="ui.title()">
          {{ title }}
        </div>
        <div v-if="description" :class="ui.description()">
          {{ description }}
        </div>
      </slot>
    </div>

    <div :class="ui.content()">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="ui.footer()">
      <slot name="footer" />
    </div>
  </div>
</template>
