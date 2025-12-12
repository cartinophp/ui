<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'
import { ui } from '../utils/ui'

export interface AlertProps {
  title?: string
  description?: string
  icon?: string
  variant?: 'default' | 'destructive' | 'success' | 'warning'
  style?: 'default' | 'filled' | 'outlined'
  closable?: boolean
  actions?: Array<{
    label: string
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    onClick?: () => void
  }>
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
  style: 'default',
  closable: false
})

const emit = defineEmits<{
  close: []
}>()

const alertTheme = ui.alert({
  variant: props.variant,
  style: props.style
})

const displayIcon = computed(() => {
  if (props.icon) return props.icon

  const defaultIcons = {
    default: '💡',
    success: '✅',
    warning: '⚠️',
    destructive: '❌'
  }

  return defaultIcons[props.variant]
})

const handleClose = () => {
  emit('close')
}

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
  <div :class="alertTheme.root()">
    <!-- Icon -->
    <div v-if="displayIcon || $slots.icon" :class="alertTheme.icon()">
      <slot name="icon">
        {{ displayIcon }}
      </slot>
    </div>

    <!-- Content -->
    <div :class="alertTheme.content()">
      <div v-if="title || $slots.title" :class="alertTheme.title()">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <div v-if="description || $slots.description" :class="alertTheme.description()">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length || $slots.actions" :class="alertTheme.actions()">
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
      :class="alertTheme.close()"
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
