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
import theme from '@/themes/dropdown'

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
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'minimal' | 'glass'
  rounded?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<DropdownProps>(), {
  disabled: false,
  align: 'start',
  side: 'bottom',
  sideOffset: 4,
  size: 'md',
  variant: 'default',
  rounded: 'md'
})

const ui = computed(() => theme({
  size: props.size,
  variant: props.variant,
  rounded: props.rounded
}))

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
        :class="ui.content"
        :align="align"
        :side="side"
        :side-offset="sideOffset"
      >
        <div :class="ui.viewport">
          <slot>
            <template v-for="(item, index) in items" :key="index">
              <DropdownMenuSeparator
                v-if="item.separator"
                :class="ui.separator"
              />
              <DropdownMenuLabel
                v-else-if="item.label && !item.value"
                :class="ui.label"
              >
                {{ item.label }}
              </DropdownMenuLabel>
              <DropdownMenuItem
                v-else
                :class="ui.item"
                :disabled="item.disabled"
                @click="handleItemClick(item)"
              >
                <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon" />
                <span :class="ui.itemLabel">{{ item.label }}</span>
              </DropdownMenuItem>
            </template>
          </slot>
        </div>
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
