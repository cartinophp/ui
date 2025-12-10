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
        class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <DialogContent
        class="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
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
