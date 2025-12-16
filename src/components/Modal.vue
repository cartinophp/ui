<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay :class="modalTheme.overlay({ class: ui?.overlay })" />

      <DialogContent :class="modalTheme.content({ class: ui?.content })">
        <!-- Close button -->
        <DialogClose
          v-if="closable"
          :class="modalTheme.closeButton({ class: ui?.closeButton })"
        >
          <Icon :name="closeIcon" class="size-4" />
          <span class="sr-only">Close</span>
        </DialogClose>

        <!-- Header -->
        <div
          v-if="title || description || $slots.header"
          :class="modalTheme.header({ class: ui?.header })"
        >
          <slot name="header">
            <DialogTitle
              v-if="title"
              :class="modalTheme.title({ class: ui?.title })"
            >
              {{ title }}
            </DialogTitle>
            <DialogDescription
              v-if="description"
              :class="modalTheme.description({ class: ui?.description })"
            >
              {{ description }}
            </DialogDescription>
          </slot>
        </div>

        <!-- Body -->
        <div :class="modalTheme.body({ class: ui?.body })">
          <slot />
        </div>

        <!-- Footer -->
        <div
          v-if="$slots.footer"
          :class="modalTheme.footer({ class: ui?.footer })"
        >
          <slot name="footer" />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from 'reka-ui'
import theme from '@/themes/modal'
import Icon from './Icon.vue'

export interface ModalProps {
  open?: boolean
  title?: string
  description?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  closable?: boolean
  closeIcon?: string
  fullscreen?: boolean
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
  size: 'md',
  closable: true,
  closeIcon: '✕',
  fullscreen: false
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const modalTheme = computed(() =>
  theme({
    size: props.size,
    fullscreen: props.fullscreen
  })
)
</script>
