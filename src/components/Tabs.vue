<template>
  <div :class="ui.root()" v-bind="$attrs">
    <!-- Tabs list -->
    <div
      :class="ui.list()"
      role="tablist"
      :aria-orientation="orientation"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.value ?? index"
        :id="`tab-${tab.value ?? index}`"
        role="tab"
        :class="ui.trigger({ active: isActive(tab, index) })"
        :aria-selected="isActive(tab, index)"
        :aria-controls="`panel-${tab.value ?? index}`"
        :disabled="tab.disabled"
        @click="selectTab(tab, index)"
      >
        <Icon
          v-if="tab.icon"
          :name="tab.icon"
          class="size-4 shrink-0"
        />

        <span>{{ tab.label }}</span>

        <span
          v-if="tab.badge"
          :class="badgeClasses"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- Panels -->
    <div :class="ui.content()">
      <div
        v-for="(tab, index) in tabs"
        :key="`panel-${tab.value ?? index}`"
        v-show="isActive(tab, index)"
        :id="`panel-${tab.value ?? index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${tab.value ?? index}`"
        class="w-full"
      >
        <!-- Slot content -->
        <slot
          v-if="tab.slot && $slots[tab.slot]"
          :name="tab.slot"
          :tab="tab"
          :index="index"
        />

        <!-- Inline content -->
        <div
          v-else-if="tab.content"
          class="p-4"
          v-html="tab.content"
        />

        <!-- Safe fallback -->
        <div
          v-else
          class="p-4 text-sm text-muted-foreground"
        >
          Content for "{{ tab.label }}"
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import tabsTheme from '@/themes/tabs'
import Icon from './Icon.vue'

/* ---------------------------------- Types --------------------------------- */

export interface TabItem {
  label: string
  value?: string | number
  icon?: string
  badge?: string | number
  disabled?: boolean
  slot?: string
  content?: string
}

export interface TabsProps {
  modelValue?: string | number
  defaultValue?: string | number
  items?: TabItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'line' | 'pill' | 'card'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
}

/* ---------------------------------- Props --------------------------------- */

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: 'horizontal',
  variant: 'line',
  size: 'md',
  color: 'primary',
  items: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  change: [tab: TabItem, index: number]
}>()

/* ---------------------------------- State --------------------------------- */

const tabs = computed(() => props.items)

const activeValue = computed({
  get: () =>
    props.modelValue ??
    props.defaultValue ??
    tabs.value[0]?.value ??
    0,
  set: (value) => emit('update:modelValue', value)
})

/* ---------------------------------- UI ------------------------------------ */

const ui = computed(() =>
  tabsTheme({
    size: props.size,
    variant: props.variant,
    orientation: props.orientation
  })
)

const badgeClasses =
  'inline-flex min-w-[1.25rem] h-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-primary-foreground'

/* -------------------------------- Functions -------------------------------- */

const isActive = (tab: TabItem, index: number) => {
  return (tab.value ?? index) === activeValue.value
}

const selectTab = (tab: TabItem, index: number) => {
  if (tab.disabled) return
  const value = tab.value ?? index
  activeValue.value = value
  emit('change', tab, index)
}
</script>