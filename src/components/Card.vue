<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  title?: string
  description?: string
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'lg',
  hoverable: false,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const rootClasses = computed(() => {
  const base = 'bg-white transition-all'

  const variants = {
    default: 'border border-gray-200',
    outlined: 'border-2 border-gray-300',
    elevated: 'shadow-lg border border-gray-100'
  }

  const roundedSizes = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }

  const interactive = props.hoverable || props.clickable
    ? 'hover:shadow-md hover:border-gray-300'
    : ''

  const cursor = props.clickable ? 'cursor-pointer' : ''

  return `${base} ${variants[props.variant]} ${roundedSizes[props.rounded]} ${interactive} ${cursor}`
})

const contentClasses = computed(() => {
  const paddingSizes = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  }

  return paddingSizes[props.padding]
})

const headerClasses = computed(() => {
  return props.padding === 'none' ? 'p-6 pb-0' : ''
})

const footerClasses = computed(() => {
  return props.padding === 'none' ? 'p-6 pt-0' : ''
})

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<template>
  <div :class="rootClasses" @click="handleClick">
    <div v-if="title || description || $slots.header" :class="headerClasses">
      <slot name="header">
        <div v-if="title" class="text-lg font-semibold text-gray-900">
          {{ title }}
        </div>
        <div v-if="description" class="mt-1 text-sm text-gray-600">
          {{ description }}
        </div>
      </slot>
    </div>

    <div :class="contentClasses">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </div>
  </div>
</template>
