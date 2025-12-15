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
  DialogTrigger
} from 'reka-ui'
import theme from '@/themes/dialog'

export interface DialogProps {
  open?: boolean
  defaultOpen?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<DialogProps>(), {
  size: 'md'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const dialogTheme = computed(() =>
  theme({
    size: props.size
  })
)
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
      <DialogOverlay :class="dialogTheme.overlay({ class: ui?.overlay })" />
      <DialogContent :class="dialogTheme.content({ class: ui?.content })">
        <div
          v-if="$slots.title || $slots.description"
          :class="dialogTheme.header({ class: ui?.header })"
        >
          <DialogTitle
            v-if="$slots.title"
            :class="dialogTheme.title({ class: ui?.title })"
          >
            <slot name="title" />
          </DialogTitle>

          <DialogDescription
            v-if="$slots.description"
            :class="dialogTheme.description({ class: ui?.description })"
          >
            <slot name="description" />
          </DialogDescription>
        </div>

        <div :class="dialogTheme.body({ class: ui?.body })">
          <slot />
        </div>

        <div
          v-if="$slots.footer"
          :class="dialogTheme.footer({ class: ui?.footer })"
        >
          <slot name="footer" />
        </div>

        <DialogClose :class="dialogTheme.close({ class: ui?.close })">
          <span class="sr-only">Close</span>
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

<style>
.dialog-overlay[data-state='open'] {
  animation: fade-in 0.2s ease-out;
}

.dialog-overlay[data-state='closed'] {
  animation: fade-out 0.2s ease-out;
}

.dialog-content {
  transform: translate(-50%, -50%);
}

.dialog-content[data-state='open'] {
  animation: zoom-in 0.2s ease-out;
}

.dialog-content[data-state='closed'] {
  animation: zoom-out 0.2s ease-out;
}
</style>
