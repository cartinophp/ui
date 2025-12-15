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
  size?: 'sm' | 'md' | 'lg'
}

const { open, defaultOpen, modal, side, align, sideOffset, size } = withDefaults(defineProps<PopoverProps>(), {
  modal: false,
  side: 'bottom',
  align: 'center',
  sideOffset: 8,
  size: 'md'
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const ui = computed(() => theme({
  size
}))
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
        :class="ui.content()"
        :side="side"
        :align="align"
        :side-offset="sideOffset"
      >
        <slot />

        <PopoverClose
          v-if="$slots.close"
          class="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close popover"
        >
          <slot name="close" />
        </PopoverClose>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
