<script setup lang="ts">
import { computed } from 'vue'
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent
} from 'reka-ui'

export interface AccordionItem {
  label?: string
  content?: string
  value?: string
  disabled?: boolean
  icon?: string
  defaultOpen?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string | string[]
  disabled?: boolean
  variant?: 'default' | 'bordered' | 'separated'
}

const props = withDefaults(defineProps<AccordionProps>(), {
  type: 'single',
  collapsible: true,
  disabled: false,
  variant: 'default'
})

const rootClasses = computed(() => {
  const base = 'w-full'

  const variants = {
    default: 'divide-y divide-gray-200',
    bordered: 'border border-gray-200 rounded-lg divide-y divide-gray-200',
    separated: 'space-y-2'
  }

  return `${base} ${variants[props.variant]}`
})

const itemClasses = computed(() => {
  return props.variant === 'separated'
    ? 'border border-gray-200 rounded-lg overflow-hidden'
    : ''
})

const triggerClasses = 'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:bg-gray-50'

const contentClasses = 'overflow-hidden text-sm'

const bodyClasses = 'px-4 py-3 text-gray-700'

const iconClasses = 'h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180'
</script>

<template>
  <AccordionRoot
    :type="type"
    :collapsible="collapsible"
    :default-value="defaultValue"
    :disabled="disabled"
    :class="rootClasses"
  >
    <AccordionItem
      v-for="(item, index) in items"
      :key="item.value || index"
      :value="item.value || String(index)"
      :disabled="item.disabled || disabled"
      :class="itemClasses"
    >
      <AccordionHeader as-child>
        <AccordionTrigger :class="triggerClasses">
          <div class="flex items-center gap-2">
            <slot name="leading" :item="item" :index="index">
              <span v-if="item.icon" class="text-gray-500">
                {{ item.icon }}
              </span>
            </slot>

            <span>
              <slot name="label" :item="item" :index="index">
                {{ item.label }}
              </slot>
            </span>
          </div>

          <slot name="trailing" :item="item" :index="index">
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
              :class="iconClasses"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </slot>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent :class="contentClasses">
        <div :class="bodyClasses">
          <slot name="content" :item="item" :index="index">
            {{ item.content }}
          </slot>
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style>
.overflow-hidden[data-state="open"] {
  animation: accordion-down 0.2s ease-out;
}

.overflow-hidden[data-state="closed"] {
  animation: accordion-up 0.2s ease-out;
}
</style>
