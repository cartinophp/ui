<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from 'reka-ui'
import theme from '@/themes/dropdown'
import Icon from '@/components/Icon.vue'

export interface DropdownItem {
  type?: 'item' | 'label' | 'separator' | 'checkbox'
  label?: string
  value?: string
  icon?: string
  disabled?: boolean
  checked?: boolean
  shortcut?: string
  children?: DropdownItem[]
  onClick?: (e: Event) => void
  onSelect?: () => void
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
  ui?: Record<string, any>
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

const emit = defineEmits<{
  select: [item: DropdownItem]
  'update:checked': [item: DropdownItem, checked: boolean]
}>()

const ui = computed(() => theme({
  size: props.size,
  variant: props.variant,
  rounded: props.rounded
}))

const handleItemClick = (item: DropdownItem, e: Event) => {
  if (!item.disabled) {
    item.onClick?.(e)
    item.onSelect?.()
    emit('select', item)
  }
}

const handleCheckboxChange = (item: DropdownItem, checked: boolean) => {
  if (!item.disabled) {
    emit('update:checked', item, checked)
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
        :class="ui.content({ class: props.ui?.content })"
        :align="align"
        :side="side"
        :side-offset="sideOffset"
      >
        <div :class="ui.viewport({ class: props.ui?.viewport })">
          <slot>
            <template v-for="(item, index) in items" :key="index">
              <!-- Separator -->
              <DropdownMenuSeparator
                v-if="item.type === 'separator'"
                :class="ui.separator({ class: props.ui?.separator })"
              />

              <!-- Label -->
              <DropdownMenuLabel
                v-else-if="item.type === 'label'"
                :class="ui.label({ class: props.ui?.label })"
              >
                {{ item.label }}
              </DropdownMenuLabel>

              <!-- Checkbox Item -->
              <DropdownMenuCheckboxItem
                v-else-if="item.type === 'checkbox'"
                :class="ui.item({ class: props.ui?.item })"
                :disabled="item.disabled"
                :checked="item.checked"
                @update:checked="(checked) => handleCheckboxChange(item, checked)"
              >
                <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
                <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ item.label }}</span>
                <span v-if="item.shortcut" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })">{{ item.shortcut }}</span>
              </DropdownMenuCheckboxItem>

              <!-- Sub Menu -->
              <DropdownMenuSub v-else-if="item.children && item.children.length > 0">
                <DropdownMenuSubTrigger :class="ui.item({ class: props.ui?.item })" :disabled="item.disabled">
                  <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
                  <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ item.label }}</span>
                  <Icon name="i-heroicons-chevron-right" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })" />
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent :class="ui.content({ class: props.ui?.content })">
                  <template v-for="(child, childIndex) in item.children" :key="childIndex">
                    <DropdownMenuItem
                      :class="ui.item({ class: props.ui?.item })"
                      :disabled="child.disabled"
                      @click="(e) => handleItemClick(child, e)"
                    >
                      <Icon v-if="child.icon" :name="child.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
                      <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ child.label }}</span>
                      <span v-if="child.shortcut" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })">{{ child.shortcut }}</span>
                    </DropdownMenuItem>
                  </template>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <!-- Regular Item -->
              <DropdownMenuItem
                v-else
                :class="ui.item({ class: props.ui?.item })"
                :disabled="item.disabled"
                @click="(e) => handleItemClick(item, e)"
              >
                <Icon v-if="item.icon" :name="item.icon" :class="ui.itemIcon({ class: props.ui?.itemIcon })" />
                <span :class="ui.itemLabel({ class: props.ui?.itemLabel })">{{ item.label }}</span>
                <span v-if="item.shortcut" :class="ui.itemShortcut({ class: props.ui?.itemShortcut })">{{ item.shortcut }}</span>
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
