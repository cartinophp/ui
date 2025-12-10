<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'

export interface AlertProps {
  title?: string
  description?: string
  icon?: string
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  variant?: 'solid' | 'soft' | 'outline'
  closable?: boolean
  actions?: Array<{
    label: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    onClick?: () => void
  }>
}

const props = withDefaults(defineProps<AlertProps>(), {
  color: 'primary',
  variant: 'soft',
  closable: false
})

const emit = defineEmits<{
  close: []
}>()

const rootClasses = computed(() => {
  const base = 'relative flex gap-3 rounded-lg p-4'

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
      primary: 'bg-blue-50 text-blue-900 border border-blue-100',
      success: 'bg-green-50 text-green-900 border border-green-100',
      warning: 'bg-yellow-50 text-yellow-900 border border-yellow-100',
      error: 'bg-red-50 text-red-900 border border-red-100',
      info: 'bg-cyan-50 text-cyan-900 border border-cyan-100',
      neutral: 'bg-gray-50 text-gray-900 border border-gray-100'
    },
    outline: {
      primary: 'border-2 border-blue-600 text-blue-900',
      success: 'border-2 border-green-600 text-green-900',
      warning: 'border-2 border-yellow-600 text-yellow-900',
      error: 'border-2 border-red-600 text-red-900',
      info: 'border-2 border-cyan-600 text-cyan-900',
      neutral: 'border-2 border-gray-600 text-gray-900'
    }
  }

  return `${base} ${colorVariants[props.variant][props.color]}`
})

const iconClasses = computed(() => {
  const base = 'shrink-0 text-xl'

  const iconColors = {
    solid: 'text-white',
    soft: {
      primary: 'text-blue-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      info: 'text-cyan-600',
      neutral: 'text-gray-600'
    },
    outline: {
      primary: 'text-blue-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      info: 'text-cyan-600',
      neutral: 'text-gray-600'
    }
  }

  if (props.variant === 'solid') {
    return `${base} ${iconColors.solid}`
  }

  return `${base} ${iconColors[props.variant][props.color]}`
})

const defaultIcons = {
  primary: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️',
  neutral: '📌'
}

const displayIcon = computed(() => props.icon || defaultIcons[props.color])

const closeButtonClasses = computed(() => {
  const base = 'absolute right-2 top-2 rounded p-1 transition-colors'

  const closeColors = {
    solid: 'text-white/70 hover:text-white hover:bg-white/10',
    soft: {
      primary: 'text-blue-600/70 hover:text-blue-600 hover:bg-blue-100',
      success: 'text-green-600/70 hover:text-green-600 hover:bg-green-100',
      warning: 'text-yellow-600/70 hover:text-yellow-600 hover:bg-yellow-100',
      error: 'text-red-600/70 hover:text-red-600 hover:bg-red-100',
      info: 'text-cyan-600/70 hover:text-cyan-600 hover:bg-cyan-100',
      neutral: 'text-gray-600/70 hover:text-gray-600 hover:bg-gray-100'
    },
    outline: {
      primary: 'text-blue-600/70 hover:text-blue-600 hover:bg-blue-50',
      success: 'text-green-600/70 hover:text-green-600 hover:bg-green-50',
      warning: 'text-yellow-600/70 hover:text-yellow-600 hover:bg-yellow-50',
      error: 'text-red-600/70 hover:text-red-600 hover:bg-red-50',
      info: 'text-cyan-600/70 hover:text-cyan-600 hover:bg-cyan-50',
      neutral: 'text-gray-600/70 hover:text-gray-600 hover:bg-gray-50'
    }
  }

  if (props.variant === 'solid') {
    return `${base} ${closeColors.solid}`
  }

  return `${base} ${closeColors[props.variant][props.color]}`
})

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div :class="rootClasses">
    <!-- Icon -->
    <div v-if="displayIcon || $slots.icon" :class="iconClasses">
      <slot name="icon">
        {{ displayIcon }}
      </slot>
    </div>

    <!-- Content -->
    <div class="flex-1 space-y-1">
      <div v-if="title || $slots.title" class="font-semibold">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <div v-if="description || $slots.description" class="text-sm opacity-90">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length || $slots.actions" class="mt-3 flex flex-wrap gap-2">
        <slot name="actions">
          <Button
            v-for="(action, index) in actions"
            :key="index"
            size="sm"
            :variant="action.variant || 'outline'"
            @click="action.onClick"
          >
            {{ action.label }}
          </Button>
        </slot>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="closable"
      :class="closeButtonClasses"
      @click="handleClose"
      aria-label="Close alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
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
  </div>
</template>
