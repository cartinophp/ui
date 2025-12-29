<!-- src/components/Popover.vue -->
<script setup lang="ts">
  import { computed } from 'vue';
  import {
    PopoverRoot,
    PopoverTrigger,
    PopoverPortal,
    PopoverContent,
    PopoverArrow,
    PopoverClose,
  } from 'reka-ui';
  import theme from '@/themes/popover';
  
  export interface PopoverProps {
    defaultOpen?: boolean;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    modal?: boolean;
    sideOffset?: number;
    collisionPadding?: number;
    /**
     * Show the arrow. Default: true (Polaris-like).
     */
    arrow?: boolean;
    /**
     * Extra class overrides for slots.
     */
    ui?: {
      content?: string;
      arrow?: string;
    };
  }
  
  const props = withDefaults(defineProps<PopoverProps>(), {
    side: 'bottom',
    align: 'center',
    sideOffset: 8,
    collisionPadding: 8,
    arrow: true,
    modal: false,
    defaultOpen: false,
  });
  
  const popoverTheme = computed(() => theme());
</script>
  
<template>
  <PopoverRoot :default-open="defaultOpen" :modal="modal">
    <!-- Trigger slot; fallback provided -->
    <PopoverTrigger as-child>
      <slot name="trigger">
        <!-- UPDATED: Polaris-like "Product options" style button -->
        <button
          type="button"
          class="inline-flex items-center justify-center gap-1.5
                 rounded-md border border-gray-300
                 bg-white text-sm text-gray-900
                 px-3 py-1.5
                 shadow-sm
                 hover:bg-gray-50
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <slot />
        </button>
      </slot>
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        :class="popoverTheme.content({ class: ui?.content })"
        :side="side"
        :align="align"
        :side-offset="sideOffset"
        :collision-padding="collisionPadding"
      >
        <!-- Body content -->
        <slot name="content" />

        <PopoverArrow
          v-if="arrow"
          :class="popoverTheme.arrow({ class: ui?.arrow })"
        />

        <PopoverClose
          v-if="$slots.close"
          as-child
          class="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <slot name="close" />
        </PopoverClose>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>