<script setup lang="ts">
import { computed } from 'vue'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose
} from 'reka-ui'
import theme from '@/themes/popover'

export interface PopoverProps {
  open?: boolean
  defaultOpen?: boolean
  modal?: boolean
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<PopoverProps>(), {
  modal: false,
  side: 'bottom',
  align: 'center',
  sideOffset: 8,
  variant: 'default',
  size: 'md'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const popoverTheme = computed(() =>
  theme({
    variant: props.variant,
    size: props.size
  })
)
</script>

<template>
  <PopoverRoot
    :open="open"
    :default-open="defaultOpen"
    :modal="modal"
    @update:open="emit('update:open', $event)"
  >
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        :class="popoverTheme.content({ class: ui?.content })"
        :side="side"
        :align="align"
        :side-offset="sideOffset"
      >
        <slot />

        <PopoverClose
          v-if="$slots.close"
          class="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <slot name="close" />
        </PopoverClose>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<style>
.popover-content[data-state='open'] {
  animation: fade-in 0.15s ease-out;
}

.popover-content[data-state='closed'] {
  animation: fade-out 0.15s ease-out;
}
</style>
