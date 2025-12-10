<script setup lang="ts">
import { computed } from 'vue'

export interface BadgeProps {
  label?: string
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  variant?: 'solid' | 'soft' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  closable?: boolean
}

const props = withDefaults(defineProps<BadgeProps>(), {
  color: 'primary',
  variant: 'soft',
  size: 'md',
  rounded: false,
  closable: false
})

const emit = defineEmits<{
  close: []
}>()

const rootClasses = computed(() => {
  const base = 'inline-flex items-center gap-1.5 font-medium transition-colors'

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5'
  }

  const colorVariants = {
    solid: {
      primary: 'bg-blue-600 text-white',
      success: 'bg-green-600 text-white',
      warning: 'bg-yellow-600 text-white',
      error: 'bg-red-600 text-white',
      info: 'bg-cyan-600 text-white',
      neutral: 'bg-gray-600 text-white'
    },
    soft: {
      primary: 'bg-blue-50 text-blue-700 border border-blue-100',
      success: 'bg-green-50 text-green-700 border border-green-100',
      warning: 'bg-yellow-50 text-yellow-700 border border-yellow-100',
      error: 'bg-red-50 text-red-700 border border-red-100',
      info: 'bg-cyan-50 text-cyan-700 border border-cyan-100',
      neutral: 'bg-gray-50 text-gray-700 border border-gray-100'
    },
    outline: {
      primary: 'border-2 border-blue-600 text-blue-700',
      success: 'border-2 border-green-600 text-green-700',
      warning: 'border-2 border-yellow-600 text-yellow-700',
      error: 'border-2 border-red-600 text-red-700',
      info: 'border-2 border-cyan-600 text-cyan-700',
      neutral: 'border-2 border-gray-600 text-gray-700'
    }
  }

  const rounded = props.rounded ? 'rounded-full' : 'rounded'

  return `${base} ${sizes[props.size]} ${colorVariants[props.variant][props.color]} ${rounded}`
})

const closeButtonClasses = computed(() => {
  const base = 'rounded-full hover:bg-black/10 transition-colors'

  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  }

  return `${base} ${sizes[props.size]}`
})

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <span :class="rootClasses">
    <slot name="leading" />

    <span v-if="label || $slots.default">
      <slot>{{ label }}</slot>
    </span>

    <slot name="trailing" />

    <button
      v-if="closable"
      :class="closeButtonClasses"
      @click="handleClose"
      aria-label="Close badge"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size === 'sm' ? 12 : size === 'md' ? 14 : 16"
        :height="size === 'sm' ? 12 : size === 'md' ? 14 : 16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </span>
</template>
