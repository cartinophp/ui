<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from 'reka-ui'

export interface DropdownItem {
  label?: string
  value?: string
  icon?: string
  disabled?: boolean
  separator?: boolean
  onClick?: () => void
}

export interface DropdownProps {
  items?: DropdownItem[]
  disabled?: boolean
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

const props = withDefaults(defineProps<DropdownProps>(), {
  disabled: false,
  align: 'start',
  side: 'bottom',
  sideOffset: 4
})

const contentClasses = computed(() => {
  return 'dropdown-content z-50 min-w-[200px] rounded-lg border border-gray-200 bg-white p-1 shadow-lg'
})

const itemClasses = 'relative flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50'

const separatorClasses = 'my-1 h-px bg-gray-200'

const labelClasses = 'px-3 py-2 text-xs font-semibold text-gray-500'

const handleItemClick = (item: DropdownItem) => {
  if (!item.disabled && item.onClick) {
    item.onClick()
  }
}
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child :disabled="disabled">
      <slot name="trigger" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="contentClasses"
        :align="align"
        :side="side"
        :side-offset="sideOffset"
      >
        <slot>
          <template v-for="(item, index) in items" :key="index">
            <DropdownMenuSeparator
              v-if="item.separator"
              :class="separatorClasses"
            />
            <DropdownMenuLabel
              v-else-if="item.label && !item.value"
              :class="labelClasses"
            >
              {{ item.label }}
            </DropdownMenuLabel>
            <DropdownMenuItem
              v-else
              :class="itemClasses"
              :disabled="item.disabled"
              @click="handleItemClick(item)"
            >
              <span v-if="item.icon" class="shrink-0">{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </DropdownMenuItem>
          </template>
        </slot>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style>
.dropdown-content[data-state="open"] {
  animation: fade-in 0.15s ease-out;
}

.dropdown-content[data-state="closed"] {
  animation: fade-out 0.15s ease-out;
}
</style>
