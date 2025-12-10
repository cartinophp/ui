<script setup lang="ts">
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

export interface DialogProps {
  open?: boolean
  defaultOpen?: boolean
}

const props = defineProps<DialogProps>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
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
      <DialogOverlay
        class="dialog-overlay fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />
      <DialogContent
        class="dialog-content fixed left-1/2 top-1/2 z-50 w-full max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
      >
        <DialogTitle
          v-if="$slots.title"
          class="text-lg font-semibold text-gray-900"
        >
          <slot name="title" />
        </DialogTitle>

        <DialogDescription
          v-if="$slots.description"
          class="mt-2 text-sm text-gray-600"
        >
          <slot name="description" />
        </DialogDescription>

        <div class="mt-4">
          <slot />
        </div>

        <DialogClose
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none"
        >
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
.dialog-overlay[data-state="open"] {
  animation: fade-in 0.2s ease-out;
}

.dialog-overlay[data-state="closed"] {
  animation: fade-out 0.2s ease-out;
}

.dialog-content {
  transform: translate(-50%, -50%);
}

.dialog-content[data-state="open"] {
  animation: zoom-in 0.2s ease-out;
}

.dialog-content[data-state="closed"] {
  animation: zoom-out 0.2s ease-out;
}
</style>
