<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import theme from '@/themes/dialog'

export interface DialogProps {
  open?: boolean
  defaultOpen?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const { open, defaultOpen, size } = withDefaults(defineProps<DialogProps>(), {
  size: 'lg'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const ui = computed(() => theme({
  size
}))
</script>

<template>
  <DialogRoot
    :open="open"
    :default-open="defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay :class="ui.overlay()" />
      <DialogContent :class="ui.content()" style="transform: translate(-50%, -50%)">
        <div v-if="$slots.title || $slots.description" :class="ui.header()">
          <DialogTitle v-if="$slots.title" :class="ui.title()">
            <slot name="title" />
          </DialogTitle>
          <DialogDescription v-if="$slots.description" :class="ui.description()">
            <slot name="description" />
          </DialogDescription>
        </div>

        <div :class="ui.body()">
          <slot />
        </div>

        <div v-if="$slots.footer" :class="ui.footer()">
          <slot name="footer" />
        </div>

        <DialogClose :class="ui.close()" aria-label="Close dialog">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
