<script setup lang="ts">
import { computed } from 'vue'
import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuCheckboxItem
} from 'reka-ui'
import theme from '@/themes/context-menu'
import Icon from './Icon.vue'

export interface ContextMenuItem {
  type?: 'item' | 'label' | 'separator' | 'checkbox'
  label?: string
  value?: string
  icon?: string
  shortcut?: string
  disabled?: boolean
  checked?: boolean
  onClick?: () => void
}

export interface ContextMenuProps {
  items?: ContextMenuItem[]
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<ContextMenuProps>(), {})

const emit = defineEmits<{
  select: [item: ContextMenuItem]
  'update:checked': [item: ContextMenuItem, checked: boolean]
}>()

const slots = defineSlots<{
  default?: () => any
}>()

const ui = computed(() => theme())

const handleItemClick = (item: ContextMenuItem) => {
  if (!item.disabled) {
    item.onClick?.()
    emit('select', item)
  }
}

const handleCheckboxChange = (item: ContextMenuItem, checked: boolean) => {
  if (!item.disabled) {
    emit('update:checked', item, checked)
  }
}
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger as-child>
      <slot />
    </ContextMenuTrigger>

    <ContextMenuPortal>
      <ContextMenuContent :class="ui.content({ class: props.ui?.content })">
        <template v-for="(item, index) in items" :key="index">
          <!-- Separator -->
          <ContextMenuSeparator
            v-if="item.type === 'separator'"
            :class="ui.separator({ class: props.ui?.separator })"
          />

          <!-- Label -->
          <ContextMenuLabel
            v-else-if="item.type === 'label'"
            :class="ui.label({ class: props.ui?.label })"
          >
            {{ item.label }}
          </ContextMenuLabel>

          <!-- Checkbox Item -->
          <ContextMenuCheckboxItem
            v-else-if="item.type === 'checkbox'"
            :class="ui.item({ class: props.ui?.item })"
            :disabled="item.disabled"
            :checked="item.checked"
            @update:checked="(checked) => handleCheckboxChange(item, checked)"
          >
            <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
            <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ item.label }}</span>
            <span v-if="item.shortcut" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })">{{ item.shortcut }}</span>
          </ContextMenuCheckboxItem>

          <!-- Regular Item -->
          <ContextMenuItem
            v-else
            :class="ui.item({ class: props.ui?.item })"
            :disabled="item.disabled"
            @select="() => handleItemClick(item)"
          >
            <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
            <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ item.label }}</span>
            <span v-if="item.shortcut" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })">{{ item.shortcut }}</span>
          </ContextMenuItem>
        </template>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
